// 컴퓨터의 교체 규칙. 스스로 교체할지(chooseSwitch)와, 쓰러지거나 U턴으로 빠진 뒤 누가 나올지(pickReplacement)를 정한다.
// 후보를 평가하는 방식은 둘이 같다: 후보가 (입장 때 함정 피해와, 있으면 상대 공격을 한 번 맞은 뒤에)
//   - 상대를 잡는 데 필요한 공격 횟수(attacks)
//   - 상대가 후보를 잡는 데 필요한 공격 횟수(hits)
//   - 먼저 움직이는지(first)
// 로 이기는 대결인지 본다. 이기는 대결 = attacks < hits, 같으면 먼저 움직이는 쪽.
import { typeEffectiveness } from "./damagecalc";
import { getUsableMoves } from "./pp";
import { isGrounded, terrainBlocksStatus } from "./field";
import { HEAVY_DUTY_BOOTS } from "./iteminfo";
import { activeItem } from "./helditem";
import { indirectDamageBlocked, abilityBlocksStatus } from "./abilities";
import { bestDamage, hitsToKO, movesFirst, positiveStages } from "./cpusetup";

const ROCK_MOVE = { type: { name: "rock" }, damage_class: { name: "physical" } };

// 이 포켓몬이 나올 때 그 쪽에 깔린 함정이 주는 피해 (스텔스록, 압정뿌리기)
export function entryDamage(pokemon, team) {
    const h = team.hazards;
    if (!h || (activeItem(pokemon) && pokemon.item.name === HEAVY_DUTY_BOOTS) || indirectDamageBlocked(pokemon)) return 0;
    let damage = 0;
    if (h.stealthRock) damage += Math.max(1, Math.floor((pokemon.hp[1] / 8) * typeEffectiveness(ROCK_MOVE, pokemon)));
    if (h.spikes > 0 && isGrounded(pokemon)) {
        damage += Math.max(1, Math.floor(pokemon.hp[1] / (h.spikes === 1 ? 8 : h.spikes === 2 ? 6 : 4)));
    }
    return damage;
}

const wins = (e) => e.attacks < e.hits || (e.attacks === e.hits && e.first && e.hits !== Infinity);
// (둘 다 못 잡는 경우처럼 Infinity가 섞여도 비교할 수 있게 99로 자른다)
const scoreOf = (e) => Math.min(e.hits, 99) - Math.min(e.attacks, 99) + (e.first ? 0.5 : 0);

// freeHit: 교체해 들어오는 턴에 상대가 공격을 한 번 한다 (스스로 교체할 때)
function evaluate(candidate, foe, myTeam, field, freeHit) {
    let hp = candidate.hp[0] - entryDamage(candidate, myTeam);
    if (hp <= 0) return null;
    let entered = { ...candidate, hp: [hp, candidate.hp[1]] };
    const foeDamage = bestDamage(foe, entered, field);
    if (freeHit) {
        hp -= foeDamage;
        if (hp <= 0) return null; // 들어오자마자 쓰러진다
        entered = { ...candidate, hp: [hp, candidate.hp[1]] };
    }
    const e = {
        hits: hitsToKO(hp, foeDamage),
        attacks: hitsToKO(foe.hp[0], bestDamage(entered, foe, field)),
        first: movesFirst(entered, foe, field),
    };
    return { ...e, wins: wins(e), score: scoreOf(e), hp };
}

function candidates(playerTeam, opponentTeam, freeHit) {
    const foe = playerTeam[0];
    const field = playerTeam.field || opponentTeam.field || null;
    const list = [];
    opponentTeam.forEach((p, index) => {
        if (index === 0 || p.hp[0] <= 0) return;
        const e = evaluate(p, foe, opponentTeam, field, freeHit);
        if (e) list.push({ index, ...e });
    });
    return list;
}

const better = (a, b, key) => (b === null || a[key] > b[key] ? a : b);

// 쓰러지거나 U턴으로 빠진 뒤 나올 포켓몬의 번호. 없으면 -1.
// 먼저 움직여서 한 방에 잡는 포켓몬 > 이기는 대결(여유가 큰 순) > 가장 오래 버티는 포켓몬
export function pickReplacement(playerTeam, opponentTeam, { freeHit = false } = {}) {
    const foe = playerTeam[0];
    if (foe.hp[0] <= 0) return opponentTeam.findIndex((p, i) => i > 0 && p.hp[0] > 0);
    const list = candidates(playerTeam, opponentTeam, freeHit);
    // 들어오자마자 쓰러지는 포켓몬뿐이어도 누군가는 나와야 한다
    if (list.length === 0) return opponentTeam.findIndex((p, i) => i > 0 && p.hp[0] > 0);
    const revenge = list.filter((e) => e.attacks === 1 && e.first);
    const winners = list.filter((e) => e.wins);
    const pool = revenge.length > 0 ? revenge : winners.length > 0 ? winners : list;
    const key = revenge.length > 0 || winners.length > 0 ? "score" : "hits";
    return pool.reduce((a, b) => better(b, a, key)).index;
}

// 내 공격 중 가장 센 기술의 종류 ("physical" | "special")
function bestCategory(me, foe, field) {
    let top = 0;
    let category = null;
    for (const m of getUsableMoves(me)) {
        if (m.damage_class.name === "status") continue;
        const d = bestDamage({ ...me, moveset: [m] }, foe, field);
        if (d > top) [top, category] = [d, m.damage_class.name];
    }
    return category;
}

// 스스로 교체해야 할 이유가 있는지. 이유가 없으면 null, 있으면 이유의 이름.
//   1 지는 대결  2 공격이 거의 안 통함(상대 최대 체력의 25% 미만)  3 한 방에 쓰러지는데 먼저 못 잡음
//   4 공격 능력치 -2 이하  5 상대 랭업 +3 이상인데 확실히 이기지 못함  6 잠 / 맹독 / 하품을 맞아 졸린 상태 (교체하면 졸음이 풀린다)
//   7 랭크업이 지워졌고(wiped) 50% 확률에 걸림 (그대로 랭업을 다시 쌓을 수도 있으니)
function switchReason(me, foe, field, stay, wiped = false, drowsy = false) {
    const hasAttack = getUsableMoves(me).some((m) => m.damage_class.name !== "status" && m.name !== "struggle");
    const stalemate = stay.hits === Infinity && stay.attacks === Infinity;
    if (stay.hits === 1 && !(stay.first && stay.attacks === 1)) return 3;
    if (stay.attacks === 1) return null; // 한 방에 잡을 수 있으면 공격한다
    if (me.status && (me.status.name === "sleep" || me.status.name === "toxic")) return 6;
    if (drowsy) return 6;
    if (wiped) return 7;
    if (!hasAttack) return null;
    if (!wins(stay) && !stalemate) return 1;
    const damage = bestDamage(me, foe, field);
    if (stay.attacks >= 3 && (damage * 100) / foe.hp[1] < 25) return 2;
    const category = bestCategory(me, foe, field);
    if (category && me.stat_levels[category === "physical" ? 0 : 2] <= -2) return 4;
    if (positiveStages(foe) >= 3 && !(stay.attacks < stay.hits)) return 5;
    return null;
}

// 지금 나와 있는 포켓몬이 계속 싸우면 어떻게 되는지 (잠이나 맹독이면 그만큼 불리하게 센다)
function stayEvaluation(me, foe, field, drowsy = false) {
    const hits = hitsToKO(me.hp[0], bestDamage(foe, me, field) + (me.status && me.status.name === "toxic" ? Math.floor(me.hp[1] / 10) : 0));
    let attacks = hitsToKO(foe.hp[0], bestDamage(me, foe, field));
    if (me.status && me.status.name === "sleep") attacks += 2;
    if (drowsy) attacks += 2; // 다음 턴 끝에 잠들어서 그만큼 못 움직인다
    const first = movesFirst(me, foe, field);
    const e = { hits, attacks, first };
    return { ...e, wins: wins(e), score: scoreOf(e) };
}

// 스스로 교체할 포켓몬의 번호. 교체할 이유가 없거나 나을 포켓몬이 없으면 -1.
export function chooseSwitch(playerTeam, opponentTeam) {
    const me = opponentTeam[0];
    const foe = playerTeam[0];
    if (me.hp[0] <= 0 || foe.hp[0] <= 0 || me.charging || me.rampage || me.mustRecharge) return -1;
    const field = playerTeam.field || opponentTeam.field || null;
    // 하품을 맞아 졸린 상태(다음 턴 끝에 잠듦). 잠들 수 없는 상태나 특성이면 걱정하지 않는다
    const drowsy =
        !!me.yawn &&
        !me.status &&
        !(opponentTeam.safeguardTurns > 0) &&
        !terrainBlocksStatus(me, "sleep", field) &&
        !abilityBlocksStatus(me, "sleep", null, field);
    const stay = stayEvaluation(me, foe, field, drowsy);
    // 랭크업이 지워진 직후 한 번만 따진다: 50%는 교체를 고민하고, 50%는 하던 대로 한다
    const wiped = !!me.boostsWiped && Math.random() < 0.5;
    me.boostsWiped = false;
    if (!switchReason(me, foe, field, stay, wiped, drowsy)) return -1;
    const list = candidates(playerTeam, opponentTeam, true);
    const winners = list.filter((e) => e.wins);
    if (winners.length > 0) {
        // 이기는 후보 중 가장 여유가 큰 쪽. 지금 남아 있는 것보다 확실히 나아야 한다.
        const best = winners.reduce((a, b) => better(b, a, "score"));
        return best.score > stay.score ? best.index : -1;
    }
    // 모두 불리하면, 공격을 받고 쓰러질 때까지 가장 오래 버티는 쪽. 지금 남는 것보다 오래 버틸 때만.
    const best = list.reduce((a, b) => (a === null ? b : better(b, a, "hits")), null);
    return best && best.hits > stay.hits ? best.index : -1;
}
