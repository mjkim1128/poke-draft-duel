// 컴퓨터가 순풍, 배턴터치, 꼬리자르기를 쓸지 정하는 규칙.
//   순풍        남은 파티(나 포함)의 과반수가 순풍으로 상대를 앞지르게 되면 쓴다. 3명 남으면 2명, 2명 남으면 1명.
//   배턴터치    올린 랭크업을 받을 포켓몬을 파티에서 미리 정해 둔다. 공격 랭크업이면 물리 공격기가 과반수인 포켓몬, 특수 랭크업이면 특수 공격기가 과반수인 포켓몬.
//               받을 포켓몬이 랭크업을 받은 채로 상대보다 빠르고 넉넉하게(상대 체력의 110% 이상) 한 방에 잡을 수 있으면 넘긴다.
//               다만 내가 상대의 공격을 버티고 랭크업을 한 번 더 해서 한 방에 잡을 수 있으면 넘기지 않고 직접 싸운다.
//               랭크업을 하는 중에 이번이 마지막 행동이 되면(다음 공격에 쓰러지면) 바로 넘긴다.
//               더 올릴 랭업기가 없는데도 한 방 조건을 채우는 포켓몬이 없으면, 두 방에 잡을 수 있는(상대 체력의 70% 이상) 포켓몬에게 넘긴다. 그것도 없으면 넘기지 않고 싸운다.
//               스피드만 올렸으면, 그 랭크업을 받아서 상대를 앞지르게 되는 포켓몬이 받을 후보다.
//   꼬리자르기  파티에 랭업기가 있는 포켓몬이 있고, 대타를 받은 채로 랭업하면 상대를 앞지르고 한 방에 잡을 수 있으면 그 포켓몬을 내보낸다.
//               또 상대에게 한 방에 쓰러지지만 두 방에 잡을 수 있는 포켓몬도 대타로 한 번 막아 주려고 내보낸다.
//               교체해야 할 상황이고 내가 상대보다 빠르면, 그냥 교체하지 않고 꼬리자르기를 쓴다 (나오는 포켓몬이 그 턴의 공격을 대타로 막는다).
//               내가 느리면 대타가 맞는 만큼 상대가 나를 잡는 턴 수가 늘어나므로, 랭업기는 평소 규칙대로 쓴다 (cpusetup.js의 hitsToDie).
//   유턴 계열  (유턴, 퀵턴, 볼트체인지, 막말내뱉기, 썰렁개그, 텔레포트) 교체해야 할 상황에서 이 기술이 있으면, 내가 빠를 때는 그냥 교체하지 않고 이 기술을 쓴다.
//               내가 느릴 때는 상대에게 한 방에 쓰러지지 않을 때만 쓴다 (쓰러지면 쓰기 전에 끝나므로 평소처럼 교체).
// 나가는 포켓몬은 me.passTarget(이름)에 적어 둔다. 실제 교체는 cpuswitch.js의 pickReplacement가 그 이름을 읽는다.
import { getUsableMoves } from "./pp";
import { damageCalc, MIN_ROLL } from "./damagecalc";
import { SUPPORTED_PIVOT_MOVES } from "./movemechanics";
import { certainlyFails } from "./cpufail";
import { weatherOf } from "./field";
import { bestDamage, hitsToDown, hitsToDie, survivesOneHit, movesFirst, setupEffect } from "./cpusetup";
import { entryDamage } from "./cpuswitch";

// 한 방에 잡았다고 칠 여유: 가장 약한 난수(85%)로 때려도 데미지가 상대 현재 체력의 이만큼 이상이어야 한다
const SAFE_KO = 1.1;
// 더 올릴 수 없을 때 받아 주는 두 방 조건: 가장 약한 난수로 한 번 때려서 상대 체력의 이만큼 이상
const TWO_HIT = 0.7;
// 랭크업의 종류와 올라가는 능력치 번호
const STAT_OF = { physical: 0, special: 2, speed: 4 };

const usable = (pokemon, name) => getUsableMoves(pokemon).find((m) => m.name === name) || null;
const bench = (team) => team.slice(1).filter((p) => p.hp[0] > 0);
const attackMoves = (pokemon) => pokemon.moveset.filter((m) => m.damage_class.name !== "status");

// 공격기 중 과반수가 물리면 "physical", 특수면 "special", 어느 쪽도 과반수가 아니면 null
export function attackCategory(pokemon) {
    const moves = attackMoves(pokemon);
    const physical = moves.filter((m) => m.damage_class.name === "physical").length;
    const special = moves.length - physical;
    if (physical * 2 > moves.length) return "physical";
    if (special * 2 > moves.length) return "special";
    return null;
}

// 이 포켓몬이 올린 랭크업의 종류: 공격이 올랐으면 물리 / 특수 (둘 다면 더 많이 오른 쪽), 공격은 안 오르고 스피드만 올랐으면 "speed". 없으면 null.
function boostedCategory(pokemon) {
    const [attack, special, speed] = [pokemon.stat_levels[0], pokemon.stat_levels[2], pokemon.stat_levels[4]];
    if (attack > 0 || special > 0) return attack >= special ? "physical" : "special";
    return speed > 0 ? "speed" : null;
}

// 쓰면 이 종류의 능력치를 올리는 랭업기
function raisesCategory(effect, category) {
    return effect.changes.some(([i, d]) => i === STAT_OF[category] && d > 0);
}

// 가장 센 공격이 상대 체력의 몇 배인가 (가장 약한 난수 기준, 명중은 따지지 않는다). 상대에게 한 방 방지가 있으면 한 방(1배)은 넘지 못한다.
const damageRatio = (attacker, foe, field) => {
    if (foe.hp[0] <= 0) return 0;
    const ratio = bestDamage(attacker, foe, field, MIN_ROLL) / foe.hp[0];
    return survivesOneHit(foe, attacker) ? Math.min(ratio, 0.99) : ratio;
};

// ---- 순풍 ----

// 순풍으로 상대를 앞지르게 되는 포켓몬이 남은 파티의 과반수일 때
export function tailwindMove(s) {
    const { me, foe, field, myTeam } = s;
    const move = usable(me, "tailwind");
    if (!move || myTeam.tailwindTurns > 0 || (field && field.trickRoom)) return null;
    const alive = [me, ...bench(myTeam)];
    const gainers = alive.filter((p) => !movesFirst(p, foe, field) && movesFirst({ ...p, tailwindActive: true }, foe, field));
    return gainers.length * 2 >= alive.length ? move : null;
}

// ---- 배턴터치 ----

// 랭크업을 받을 후보: 이 쪽 공격이 과반수인 벤치 포켓몬. 스피드 랭크업이면 지금은 느리지만 받으면 상대를 앞지르는 포켓몬.
function batonCandidates(s, category) {
    if (category === "speed") {
        return bench(s.myTeam).filter((p) => !movesFirst(p, s.foe, s.field) && movesFirst(receive(p, s), s.foe, s.field));
    }
    return bench(s.myTeam).filter((p) => attackCategory(p) === category);
}

// 후보가 랭크업을 받고 나왔을 때의 모습: 받은 단계, 함정 피해
function receive(candidate, s) {
    const hp = candidate.hp[0] - entryDamage(candidate, s.myTeam);
    return { ...candidate, hp: [Math.max(hp, 0), candidate.hp[1]], stat_levels: [...s.me.stat_levels] };
}

// 받은 포켓몬이 상대보다 빠르고 한 번 때려서 상대 체력의 need배 이상을 주는가. 내가 먼저 움직이면 받은 포켓몬이 상대 공격을 한 번 맞고 시작한다.
function receivesWell(candidate, s, need = SAFE_KO) {
    const { foe, field, me } = s;
    let entered = receive(candidate, s);
    if (entered.hp[0] <= 0) return false;
    if (movesFirst(me, foe, field)) {
        const hit = bestDamage(foe, entered, field);
        const hp = hit >= entered.hp[0] && survivesOneHit(entered, foe) ? 1 : entered.hp[0] - hit;
        if (hp <= 0) return false;
        entered = { ...entered, hp: [hp, entered.hp[1]] };
    }
    return movesFirst(entered, foe, field) && damageRatio(entered, foe, field) >= need;
}

// 이 종류의 능력치를 더 올릴 수 있는 랭업기가 남아 있는가
function canRaiseMore(s, category) {
    return getUsableMoves(s.me).some((m) => {
        const effect = setupEffect(m, s.me);
        return effect && raisesCategory(effect, category);
    });
}

// 아직 랭업 기술이 남아 있고, 한 번 더 올리면 내가 상대의 공격을 버티고 한 방에 잡을 수 있는가
function soloSweep(s, category) {
    const { me, foe, field } = s;
    for (const m of getUsableMoves(me)) {
        const effect = setupEffect(m, me);
        if (!effect || !raisesCategory(effect, category)) continue;
        const after = { ...me, stat_levels: effect.levels, hp: [me.hp[0] - effect.hpCost, me.hp[1]] };
        const survives = hitsToDie(after, bestDamage(foe, after, field), foe) >= 2;
        if (survives && hitsToDown(foe, bestDamage(after, foe, field, MIN_ROLL), after) === 1) return true;
    }
    return false;
}

// 내가 앞으로 몇 번 움직일 수 있는가 (먼저 움직이면 쓰러지기 전에 그만큼, 늦으면 한 번 덜)
function actionsLeft(s) {
    const hits = hitsToDie(s.me, bestDamage(s.foe, s.me, s.field), s.foe);
    return movesFirst(s.me, s.foe, s.field) ? hits : hits - 1;
}

function batonMove(s) {
    const { me } = s;
    const baton = usable(me, "baton-pass");
    if (!baton || bench(s.myTeam).length === 0) return null;
    const boosted = boostedCategory(me);
    if (boosted) {
        const candidates = batonCandidates(s, boosted);
        if (candidates.length === 0) return null;
        // 직접 싸워서 이길 수 있으면 넘기지 않는다
        if (actionsLeft(s) >= 2 && soloSweep(s, boosted)) return null;
        // 더 올릴 수 없으면 두 방에 잡는 포켓몬도 받는다
        const stuck = !canRaiseMore(s, boosted);
        const ready = candidates.filter((p) => receivesWell(p, s) || (stuck && receivesWell(p, s, TWO_HIT)));
        // 받을 포켓몬이 준비됐으면 넘긴다. 이번이 마지막 행동이면 가장 나은 후보에게 바로 넘긴다.
        const pick = ready.length > 0 ? best(ready, s) : actionsLeft(s) <= 1 ? best(candidates, s) : null;
        if (pick) {
            (s.real || me).passTarget = pick.name;
            return baton;
        }
    }
    return batonSetupMove(s, boosted);
}

// 받을 후보 중 랭크업을 받았을 때 가장 센 포켓몬
function best(list, s) {
    return list.reduce((a, b) => (damageRatio(receive(b, s), s.foe, s.field) > damageRatio(receive(a, s), s.foe, s.field) ? b : a));
}

// 아직 넘길 만큼 못 올렸으면 랭업기로 더 올린다 (한 번 더 움직일 수 있을 때만)
function batonSetupMove(s, boosted) {
    const { me } = s;
    if (actionsLeft(s) < 2) return null;
    for (const m of getUsableMoves(me)) {
        const effect = setupEffect(m, me);
        if (!effect) continue;
        const category = boosted || ["physical", "special", "speed"].find((c) => raisesCategory(effect, c)) || null;
        if (!category || !raisesCategory(effect, category)) continue;
        if (batonCandidates(s, category).length > 0) return m;
    }
    return null;
}

// ---- 꼬리자르기 ----

// 대타를 받은 채 나왔을 때의 모습
function shedTailEntry(candidate, s) {
    const hp = candidate.hp[0] - entryDamage(candidate, s.myTeam);
    return { ...candidate, hp: [Math.max(hp, 0), candidate.hp[1]] };
}

function shedTailMove(s) {
    const { me, foe, field } = s;
    const move = usable(me, "shed-tail");
    if (!move || me.substitute || me.hp[0] <= Math.ceil(me.hp[1] / 2)) return null; // 체력 절반 이하이거나 대타가 있으면 실패한다
    const substituteHp = Math.floor(me.hp[1] / 4);
    for (const p of bench(s.myTeam)) {
        const entered = shedTailEntry(p, s);
        if (entered.hp[0] <= 0) continue;
        const foeDamage = bestDamage(foe, entered, field);
        // 한 방에 쓰러지지만 두 방에 잡을 수 있으면, 대타로 한 번 막아 주면서 내보낸다
        if (hitsToDie(entered, foeDamage, foe) === 1 && hitsToDown(foe, bestDamage(entered, foe, field, MIN_ROLL), entered) === 2) {
            (s.real || me).passTarget = p.name;
            return move;
        }
        // 대타 뒤에서 랭업을 하면 상대를 앞지르고 한 방에 잡을 수 있다
        const safe = substituteHp > foeDamage || hitsToDie(entered, foeDamage, foe) >= 2;
        if (!safe) continue;
        for (const m of getUsableMoves(entered)) {
            const effect = setupEffect(m, entered);
            if (!effect) continue;
            const after = { ...entered, stat_levels: effect.levels, hp: [entered.hp[0] - effect.hpCost, entered.hp[1]] };
            if (movesFirst(after, foe, field) && hitsToDown(foe, bestDamage(after, foe, field, MIN_ROLL), after) === 1) {
                (s.real || me).passTarget = p.name;
                return move;
            }
        }
    }
    return null;
}

// 교체하려던 참에 내가 상대보다 빠르고 꼬리자르기를 쓸 수 있으면, 교체 대신 꼬리자르기 (index는 교체하려던 포켓몬의 번호).
export function shedTailInsteadOfSwitch(playerTeam, opponentTeam, index) {
    const me = opponentTeam[0];
    const move = usable(me, "shed-tail");
    if (!move || me.substitute || me.hp[0] <= Math.ceil(me.hp[1] / 2)) return null; // 체력 절반 이하이거나 대타가 있으면 실패한다
    const field = playerTeam.field || opponentTeam.field || null;
    if (!movesFirst(me, playerTeam[0], field)) return null;
    me.passTarget = opponentTeam[index].name;
    return move;
}

// 교체하려던 참에 유턴 계열 기술이 있으면 교체 대신 그 기술 (배턴터치와 꼬리자르기는 따로 다룬다).
//  - 내가 상대보다 빠르면 쓴다
//  - 내가 느리면 상대에게 한 방에 쓰러지지 않을 때만 쓴다
// 피해를 주는 기술(유턴, 퀵턴, 볼트체인지)이 있으면 가장 센 것, 없으면 변화기(막말내뱉기, 썰렁개그, 텔레포트). 상대에게 통하지 않는 기술(전기 무효 등)은 고르지 않는다.
export function pivotInsteadOfSwitch(playerTeam, opponentTeam) {
    const me = opponentTeam[0];
    const foe = playerTeam[0];
    const field = playerTeam.field || opponentTeam.field || null;
    const pivots = getUsableMoves(me).filter(
        (m) =>
            SUPPORTED_PIVOT_MOVES.has(m.name) &&
            m.name !== "baton-pass" &&
            m.name !== "shed-tail" &&
            !(m.name === "chilly-reception" && weatherOf(field) === "snow") && // 이미 눈이 오면 교체되지 않는다
            !certainlyFails(m, me, foe, field, playerTeam)
    );
    if (pivots.length === 0) return null;
    if (!movesFirst(me, foe, field) && hitsToDie(me, bestDamage(foe, me, field), foe) <= 1) return null;
    let best = null;
    let topDamage = 0;
    for (const m of pivots) {
        if (m.damage_class.name === "status") continue;
        const damage = damageCalc(me, foe, m, { field, roll: MIN_ROLL });
        if (damage > topDamage) [best, topDamage] = [m, damage];
    }
    return best || pivots.find((m) => m.damage_class.name === "status") || null;
}

// 순서: 배턴터치 > 꼬리자르기. (순풍은 다른 변화기들 사이에서 고른다)
export function passMove(s) {
    return batonMove(s) || shedTailMove(s);
}
