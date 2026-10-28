// 컴퓨터가 랭업기(칼춤, 용춤, 껍질깨기...)를 쓸지 정하는 규칙.
// 랭업을 복사본에 적용해서 데미지 계산을 다시 돌린 뒤, 아래 숫자들로 판단한다.
//   버팀        랭업을 한 상태에서 상대가 나를 잡는 데 필요한 공격 횟수 - 1
//   공격 횟수   내가 상대를 잡는 데 필요한 공격 횟수 (랭업하는 턴은 세지 않는다)
//   역전        랭업 전에는 상대보다 느렸는데 랭업 후에는 내가 먼저 움직임 (트릭룸이 깔려 있으면 반대로 계산)
import { damageCalc, MIN_ROLL, typeEffectiveness } from "./damagecalc";
import { skipsChargeInWeather } from "./field";
import { effectiveSpeed } from "./speed";
import { getUsableMoves } from "./pp";
import { CHARGE_MOVES, RECHARGE_MOVES, MULTIHIT_MOVES, BOOST_NULLIFYING_MOVES, FORCE_SWITCH_MOVES, ABILITY_IGNORING_MOVES } from "./movemechanics";
import { blocksOhko, preventsDrag } from "./abilities";
import { activeItem } from "./helditem";
import { FOCUS_SASH } from "./iteminfo";

// stat_levels 안에서 각 능력치의 번호 (명중, 회피는 세지 않는다)
const STAT_INDEX = { attack: 0, defense: 1, "special-attack": 2, "special-defense": 3, speed: 4 };
const SELF_TARGETS = new Set(["user", "user-and-allies", "user-or-ally"]);
// 쓰는 순간 체력을 깎는 기술: 최대 체력의 몇 분의 1을 내는가 (배북은 이름으로 따로 처리한다)
const HP_COST_DIVISOR = { "clangorous-soul": 3 };

const clampStage = (n) => Math.max(-6, Math.min(6, n));

// 이 기술이 랭업기이면 { changes: [[능력치 번호, 변화량]...], hpCost, levels(쓴 뒤의 단계) }, 아니면 null.
// 쓸 수 없는 경우(올릴 능력치가 이미 +6, 배북인데 체력이 모자람)도 null.
export function setupEffect(move, pokemon) {
    if (move.damage_class.name !== "status") return null;
    let changes;
    let hpCost = 0;
    if (move.name === "belly-drum") {
        changes = [[0, 6 - pokemon.stat_levels[0]]];
        hpCost = Math.floor(pokemon.hp[1] / 2);
    } else if (move.name === "curse") {
        // 고스트 타입의 저주는 랭업기가 아니다. 그 밖의 타입은 공격, 방어가 오르고 스피드가 내려간다.
        if (pokemon.types.some((t) => t.type.name === "ghost")) return null;
        changes = [[4, -1], [0, 1], [1, 1]];
    } else {
        if (!move.target || !SELF_TARGETS.has(move.target.name)) return null;
        changes = (move.stat_changes || [])
            .filter((c) => STAT_INDEX[c.stat.name] !== undefined)
            .map((c) => [STAT_INDEX[c.stat.name], c.change]);
        if (HP_COST_DIVISOR[move.name]) hpCost = Math.floor(pokemon.hp[1] / HP_COST_DIVISOR[move.name]);
    }
    // 올릴 능력치가 하나도 남아 있지 않으면 쓸 이유가 없다
    if (!changes.some(([i, d]) => d > 0 && pokemon.stat_levels[i] < 6)) return null;
    if (hpCost > 0 && pokemon.hp[0] <= hpCost) return null; // 체력이 모자라면 기술이 실패한다
    const levels = [...pokemon.stat_levels];
    for (const [i, d] of changes) levels[i] = clampStage(levels[i] + d);
    return { changes, hpCost, levels };
}

// 랭업기의 종류. 스피드가 내려가는 기술(저주)은 방어형으로 본다. 껍질깨기의 방어 하락은 종류를 가르는 데 세지 않는다.
export function setupKind(changes) {
    if (changes.some(([i, d]) => i === 4 && d < 0)) return "defense";
    const up = new Set(changes.filter(([, d]) => d > 0).map(([i]) => i));
    const attack = up.has(0) || up.has(2);
    const defense = up.has(1) || up.has(3);
    const speed = up.has(4);
    if (attack && defense && speed) return "attackDefenseSpeed";
    if (attack && speed) return "attackSpeed";
    if (attack && defense) return "attackDefense";
    if (attack) return "attack";
    if (defense) return "defenseOnly";
    if (speed) return "speed";
    return null;
}

// 순수한 판정: 종류와 숫자만 받아서 랭업기를 써도 되는지 돌려준다.
//   n.foeHitsBefore / n.foeHitsAfter   상대가 나를 잡는 데 필요한 공격 횟수 (랭업 전 / 랭업 후)
//   n.attacksBefore / n.attacksAfter   내가 상대를 잡는 데 필요한 공격 횟수 (랭업 전 / 랭업 후)
//   n.flip                             스피드가 역전됨
//   n.fasterAfter                      랭업 후 내가 먼저 움직임
export function setupVerdict(kind, n) {
    const survive = n.foeHitsAfter - 1;
    const attackRule = survive >= 1 && n.attacksAfter < n.attacksBefore;
    // 랭업하는 턴에 맞는 것까지 포함해 3회 이상 버티고, 상대가 나를 잡는 횟수가 늘어날 때
    const defenseRule = survive >= 3 && n.foeHitsAfter > n.foeHitsBefore;
    const oneShotFlip = n.flip && survive >= 1 && n.attacksAfter === 1;
    const attackDefenseRule = n.fasterAfter ? attackRule : defenseRule;
    switch (kind) {
        case "attack":
            return attackRule;
        case "defense":
            return defenseRule;
        case "defenseOnly":
            // 바디프레스처럼 방어를 올려서 공격 횟수가 줄어드는 경우도 있다
            return defenseRule || attackRule;
        case "speed":
            return oneShotFlip;
        case "attackSpeed":
            // 역전되면 한 방이거나 2회 이상 버텨야 하고, 역전되지 않으면 일반 공격 랭업 규칙
            return n.flip ? oneShotFlip || (survive >= 2 && n.attacksAfter < n.attacksBefore) : attackRule;
        case "attackDefense":
            return attackDefenseRule;
        case "attackDefenseSpeed":
            return oneShotFlip || attackDefenseRule;
        default:
            return false;
    }
}

// 한 번 쓸 때 줄 수 있는 가장 큰 피해 (명중은 따지지 않는다): 충전, 반동 기술은 두 턴이 걸리니 반으로, 연속기는 여러 번 맞는 것으로 센다
// roll: 데미지 난수 (퍼센트). 기본은 가장 센 값(100)이라 "상대가 나를 때리는" 계산에 맞고, 내가 "확실히 쓰러뜨리는가"를 볼 때는 MIN_ROLL을 넘긴다.
export function bestDamage(attacker, defender, field, roll = 100) {
    let best = 0;
    for (const move of getUsableMoves(attacker, { foe: defender })) {
        if (move.damage_class.name === "status") continue;
        let damage = damageCalc(attacker, defender, move, { field, roll });
        // 충전 기술은 날씨 덕에 충전 없이 나가거나, 이미 충전을 마친 두 번째 턴이면 반으로 깎지 않는다
        const charges = CHARGE_MOVES.has(move.name) && !skipsChargeInWeather(move, field) && attacker.charging !== move.name;
        if (charges || RECHARGE_MOVES.has(move.name)) damage /= 2;
        const range = MULTIHIT_MOVES[move.name];
        if (range) damage *= range[0] === range[1] ? range[0] : 3.1;
        best = Math.max(best, damage);
    }
    return best;
}

export const hitsToKO = (hp, damage) => (damage > 0 ? Math.ceil(hp / damage) : Infinity);

// 한 방 방지: 체력이 가득 찬 포켓몬이 기합의띠를 들었거나 옹골참이면 첫 공격은 반드시 버틴다 (attacker가 틀깨기 계열이면 옹골참은 무시된다).
// 멀티스케일은 데미지 계산(damageCalc)에 이미 들어 있어서 따로 다루지 않는다.
export function survivesOneHit(pokemon, attacker = null) {
    if (pokemon.hp[0] !== pokemon.hp[1]) return false;
    if (activeItem(pokemon) && pokemon.item.name === FOCUS_SASH) return true;
    // 옹골참은 상대가 가장 센 기술로 특성을 무시하는 기술(선샤인스트라이크 등)을 쓰면 뚫린다
    return blocksOhko(pokemon, attacker) && !(attacker && strongestMoveIgnoresAbilities(attacker, pokemon));
}

// attacker가 defender를 가장 센 기술로 때릴 때 그 기술이 상대의 특성을 무시하는 기술인가
function strongestMoveIgnoresAbilities(attacker, defender) {
    if (!getUsableMoves(attacker, { foe: defender }).some((m) => ABILITY_IGNORING_MOVES.has(m.name))) return false;
    let best = null;
    let top = -1;
    for (const move of getUsableMoves(attacker, { foe: defender })) {
        if (move.damage_class.name === "status") continue;
        const damage = damageCalc(attacker, defender, move);
        if (damage > top) [top, best] = [damage, move];
    }
    return !!best && ABILITY_IGNORING_MOVES.has(best.name);
}

// target을 쓰러뜨리는 데 필요한 공격 횟수. 한 방 방지가 있으면 한 번은 버티므로 최소 두 번.
export function hitsToDown(target, damage, attacker = null) {
    const hits = hitsToKO(target.hp[0], damage);
    return damage > 0 && hits < 2 && survivesOneHit(target, attacker) ? 2 : hits;
}

// 이 포켓몬이 쓰러지기까지 맞는 횟수: 한 방 방지를 반영하고, 대타가 있으면 대타가 맞아 주는 횟수만큼 늘어난다
export const hitsToDie = (pokemon, damage, attacker = null) =>
    hitsToDown(pokemon, damage, attacker) + (pokemon.substitute && damage > 0 ? hitsToKO(pokemon.substitute.hp, damage) : 0);

// 트릭룸이 깔려 있을 때만 느린 쪽이 먼저 움직인다
export function movesFirst(a, b, field) {
    const mine = effectiveSpeed(a, field);
    const theirs = effectiveSpeed(b, field);
    return field && field.trickRoom ? mine < theirs : mine > theirs;
}

// 트릭룸이 이번 턴을 포함해서 앞으로 몇 턴 더 이어지는가 (없으면 0). 처음 걸린 턴에 5였고 매 턴이 끝날 때 1씩 줄어서 0이 되면 사라진다.
export const trickRoomTurnsLeft = (field) => (field && field.trickRoom ? Math.max(1, field.trickRoom.turns || 1) : 0);

// 트릭룸은 끝나면 속도 순서가 도로 뒤집힌다. 한 번 맞고 한 번 치는 식으로 턴마다 순서를 따라가며 1대1 승부가 어떻게 끝나는지 본다.
//   attacks: a가 b를 쓰러뜨리는 데 필요한 공격 횟수 / hits: b가 a를 쓰러뜨리는 데 필요한 공격 횟수
//   trLeft: 첫 턴부터 트릭룸이 이어지는 턴 수 (그 뒤로는 빠른 쪽이 먼저)
// a가 이기면 true, 지면 false, 오래 가도 결판이 나지 않으면 null (그때는 기존 판정을 쓴다).
export function duelWins(a, b, field, attacks, hits, trLeft) {
    const mine = effectiveSpeed(a, field);
    const theirs = effectiveSpeed(b, field);
    let dealt = 0;
    let taken = 0;
    for (let turn = 1; turn <= 60; turn++) {
        const first = turn <= trLeft ? mine < theirs : mine > theirs;
        if (first) {
            if (++dealt >= attacks) return true;
            if (++taken >= hits) return false;
        } else {
            if (++taken >= hits) return false;
            if (++dealt >= attacks) return true;
        }
    }
    return null;
}

// 상대(foe)가 지금 나와 있는 내 포켓몬(me)의 랭크업을 없앨 수 있는가: 상대의 기술에 랭업 무효기가 있을 때 (PP가 남아 있고, 구애 도구로 다른 기술에 묶여 있지 않을 때).
//  - 흑안개: 언제나 통한다
//  - 클리어스모그: 피해를 줄 수 있을 때 (타입 상성으로 무효가 아니고, 내가 대타로 막고 있지 않을 때)
//  - 울부짖기, 날려버리기, 드래곤테일, 용오름: 내 뒤에 낼 포켓몬이 있고 흡반, 가드독 같은 특성으로 버티지 않을 때
export function foeNullifiesBoosts(foe, me, myTeam) {
    const hasBench = myTeam.slice(1).some((p) => p.hp[0] > 0);
    return getUsableMoves(foe, { foe: me }).some((move) => {
        if (!BOOST_NULLIFYING_MOVES.has(move.name)) return false;
        if (FORCE_SWITCH_MOVES.has(move.name)) return hasBench && !preventsDrag(me, foe);
        if (move.name === "clear-smog") return !me.substitute && typeEffectiveness(move, me, foe) !== 0;
        return true;
    });
}

// 컴퓨터(opponentTeam[0])가 지금 쓸 랭업기. 쓸 만한 게 없으면 null.
// 상대가 랭업 무효기를 갖고 있으면 랭업기를 쓰지 않는다 (올려도 지워지거나 강제로 교체되어 헛수고이므로)
// 후보가 여럿이면 공격 횟수가 더 많이 줄어드는 쪽, 같으면 오르는 능력치가 더 많은 쪽, 그래도 같으면 무작위.
export function chooseSetupMove(playerTeam, opponentTeam) {
    const me = opponentTeam[0];
    const foe = playerTeam[0];
    if (me.hp[0] <= 0 || foe.hp[0] <= 0 || me.charging || me.mustRecharge) return null;
    if (foeNullifiesBoosts(foe, me, opponentTeam)) return null;
    const field = playerTeam.field || opponentTeam.field || null;
    const attacksBefore = hitsToDown(foe, bestDamage(me, foe, field, MIN_ROLL), me);
    if (attacksBefore === 1) return null; // 한 방에 잡을 수 있으면 그냥 공격한다
    const foeHitsBefore = hitsToDie(me, bestDamage(foe, me, field), foe);
    const firstBefore = movesFirst(me, foe, field);

    let best = [];
    let bestScore = null;
    for (const move of getUsableMoves(me)) {
        const effect = setupEffect(move, me);
        if (!effect) continue;
        const kind = setupKind(effect.changes);
        if (!kind) continue;
        const after = { ...me, stat_levels: effect.levels, hp: [me.hp[0] - effect.hpCost, me.hp[1]] };
        const foeHitsAfter = hitsToDie(after, bestDamage(foe, after, field), foe);
        const attacksAfter = hitsToDown(foe, bestDamage(after, foe, field, MIN_ROLL), after);
        const fasterAfter = movesFirst(after, foe, field);
        const allowed = setupVerdict(kind, {
            foeHitsBefore,
            foeHitsAfter,
            attacksBefore,
            attacksAfter,
            flip: !firstBefore && fasterAfter,
            fasterAfter,
        });
        if (!allowed) continue;
        const gain = Number.isFinite(attacksBefore) ? attacksBefore - attacksAfter : 0;
        const raised = effect.changes.filter(([, d]) => d > 0).length;
        const score = [gain, raised];
        if (bestScore === null || score[0] > bestScore[0] || (score[0] === bestScore[0] && score[1] > bestScore[1])) {
            best = [move];
            bestScore = score;
        } else if (score[0] === bestScore[0] && score[1] === bestScore[1]) {
            best.push(move);
        }
    }
    return best.length === 0 ? null : best[Math.floor(Math.random() * best.length)];
}

// 올라가 있는 능력치 단계의 합 (공격, 방어, 특공, 특방, 스피드. 내려간 것은 세지 않는다)
export const positiveStages = (pokemon) => pokemon.stat_levels.slice(0, 5).reduce((sum, level) => sum + Math.max(0, level), 0);
