// 최종 보스(counter: true)의 선출: 6마리 중 무작위 3마리가 아니라, 내가 고른 3마리를 보고 3마리를 낸다.
// 상대 한 마리마다 서로 다른 카운터를 한 마리씩 맞붙이고(일대일 배정), 낼 3마리끼리 약점이 겹치지 않고 한 방에 쓰러지는 포켓몬이 없도록 고른다.
// 보스의 포켓몬과 내 포켓몬은 이미 특성, 도구, 기술이 정해져 있어서 실제 데미지 계산(bestDamage)으로 맞대결을 점수로 만든다.
import { bestDamage, movesFirst, survivesOneHit } from "./cpusetup";
import { MIN_ROLL, typeEffectiveness } from "./damagecalc";

const SPEED_BONUS = 0.15; // 먼저 움직이는 쪽에 주는 가산점

const TURN_WEIGHT = 0.1; // 상대보다 몇 턴 더 버티는가에 주는 점수 (한 턴당)
const TURN_LIMIT = 3; // 버티는 턴 차이는 +-3턴까지만 센다
const turnsToKO = (hp, damage) => (damage > 0 ? Math.min(6, Math.ceil(hp / damage)) : 6);

// boss가 foe와 1대1로 붙었을 때 점수. 양수면 boss 쪽이 유리하다.
// (boss가 한 번에 깎는 체력 비율 - foe가 한 번에 깎는 체력 비율, 각각 최대 1) + 선공 가산점
// + 방어: foe가 boss를 쓰러뜨리는 데 걸리는 턴 - boss가 foe를 쓰러뜨리는 데 걸리는 턴 (오래 버틸수록 높다)
export function matchupScore(boss, foe) {
    const dealtDamage = bestDamage(boss, foe, null, MIN_ROLL);
    const takenDamage = bestDamage(foe, boss, null);
    const dealt = Math.min(1, dealtDamage / foe.hp[0]);
    const taken = Math.min(1, takenDamage / boss.hp[0]);
    const lead = movesFirst(boss, foe, null) ? SPEED_BONUS : -SPEED_BONUS;
    const turnGap = turnsToKO(boss.hp[0], takenDamage) - turnsToKO(foe.hp[0], dealtDamage);
    const durable = Math.max(-TURN_LIMIT, Math.min(TURN_LIMIT, turnGap)) * TURN_WEIGHT;
    return dealt - taken + lead + durable;
}

function combinations(list, size) {
    if (size === 0) return [[]];
    const result = [];
    list.forEach((item, i) => {
        for (const rest of combinations(list.slice(i + 1), size - 1)) result.push([item, ...rest]);
    });
    return result;
}

function permutations(list) {
    if (list.length <= 1) return [list];
    return list.flatMap((item, i) => permutations([...list.slice(0, i), ...list.slice(i + 1)]).map((rest) => [item, ...rest]));
}

const OVERLAP_PENALTY = 0.4; // 같은 타입의 기술에 약한 포켓몬이 둘 이상일 때, 겹치는 마리마다 빼는 점수
const OHKO_PENALTY = 0.4; // 상대 한 마리의 가장 센 공격 한 방에 쓰러지는데 먼저 잡지도 못하는 경우마다 빼는 점수
const THREAT_POWER = 60; // 이 위력 이상의 공격 기술만 약점 겹침을 따진다

// 낼 3마리(combo)의 약점이 겹치는 정도: 상대 세 마리의 위력 있는 공격 기술의 타입마다, 그 타입에 약한(2배 이상) 포켓몬이 둘 이상이면 감점
export function overlapPenalty(combo, foes) {
    const threats = new Map(); // 타입 -> [기술, 쓰는 포켓몬]
    for (const foe of foes) {
        for (const move of foe.moveset) {
            if (move.damage_class.name === "status" || !(move.power >= THREAT_POWER) || threats.has(move.type.name)) continue;
            threats.set(move.type.name, [move, foe]);
        }
    }
    let penalty = 0;
    for (const [move, foe] of threats.values()) {
        const weak = combo.filter((b) => typeEffectiveness(move, b, foe) >= 2).length;
        if (weak >= 2) penalty += (weak - 1) * OVERLAP_PENALTY;
    }
    return penalty;
}

// 낼 3마리 중 상대 한 마리에게 한 방에 쓰러지는데 먼저 움직여 한 방에 잡지도 못하는 경우의 감점
export function ohkoPenalty(combo, foes) {
    let penalty = 0;
    for (const b of combo) {
        for (const foe of foes) {
            const dies = bestDamage(foe, b, null) >= b.hp[0] && !survivesOneHit(b, foe);
            const strikesFirst = movesFirst(b, foe, null) && bestDamage(b, foe, null, MIN_ROLL) >= foe.hp[0];
            if (dies && !strikesFirst) penalty += OHKO_PENALTY;
        }
    }
    return penalty;
}

// 상대 한 마리마다 서로 다른 보스 포켓몬을 한 마리씩 맞붙였을 때 점수 합의 최댓값 (일대일 카운터)
function pairingScore(combo, foes, scores) {
    return Math.max(...permutations(combo).map((order) => foes.reduce((sum, _, fi) => sum + (order[fi] ? scores.get(order[fi])[fi] : 0), 0)));
}

// 선두 점수: 내 선두와의 맞대결 점수에, 첫 공격을 맞고도 버티는지(+)와 먼저 때려서 한 방에 잡는지(+)를 더한다.
// 첫 턴에 일방적으로 쓰러지는 포켓몬을 선두로 내지 않기 위해서다.
export function leadScore(boss, foe) {
    const takenFirst = bestDamage(foe, boss, null) / boss.hp[0];
    const survives = takenFirst < 1 || survivesOneHit(boss, foe);
    const knocksOut = bestDamage(boss, foe, null, MIN_ROLL) >= foe.hp[0] && !survivesOneHit(foe, boss);
    const faster = movesFirst(boss, foe, null);
    return matchupScore(boss, foe) + (survives ? 0.3 : -0.3) + (knocksOut && faster ? 0.3 : 0);
}

// roster(보스의 6마리) 중에서 foes(내가 고른 3마리)에게 가장 잘 맞는 3마리를 고른다.
// 점수 = (상대 한 마리마다 서로 다른 카운터를 맞붙인 점수 합의 최댓값) + (보스 포켓몬마다 내 포켓몬 셋에 대한 평균 점수 합의 1/4)
//        - (약점 겹침 감점) - (한 방에 쓰러지는 경우 감점)
// 앞의 항은 상대 한 마리씩을 각자 다른 포켓몬이 잡을 수 있는지, 뒤의 감점은 3마리가 같은 기술에 한꺼번에 무너지지 않는지를 본다.
// 선두는 내 선두와의 선두 점수(leadScore)가 가장 높은 포켓몬이고, 나머지 순서는 그대로 둔다.
// foes가 3마리보다 많으면(일반 트레이너: 상대 파티 6마리 전체를 보고 고른다) 상대마다 가장 잘 잡는 포켓몬의 점수를 더하고,
// 어느 상대가 선두로 나올지 모르니 선두는 상대 전체에 대한 선두 점수의 평균이 가장 높은 포켓몬이다.
export function pickCounterTeam(roster, foes, random = Math.random) {
    const size = Math.min(3, roster.length);
    if (!foes.length) return roster.slice(0, size);
    const scores = new Map(roster.map((b) => [b, foes.map((f) => matchupScore(b, f))]));
    let best = null;
    let bestScore = -Infinity;
    for (const combo of combinations(roster, size)) {
        // 상대가 3마리 이하일 때만 일대일 배정이 된다 (그보다 많으면 상대마다 가장 잘 잡는 포켓몬의 점수를 더한다)
        const cover =
            foes.length <= size
                ? pairingScore(combo, foes, scores)
                : foes.reduce((sum, _, fi) => sum + Math.max(...combo.map((b) => scores.get(b)[fi])), 0);
        const average = combo.reduce((sum, b) => sum + scores.get(b).reduce((a, x) => a + x, 0) / foes.length, 0);
        const score = cover + average / 4 - overlapPenalty(combo, foes) - ohkoPenalty(combo, foes) + random() * 0.001; // 같은 점수면 무작위
        if (score > bestScore) {
            bestScore = score;
            best = combo;
        }
    }
    const lead = (b) => (foes.length > size ? foes.reduce((sum, f) => sum + leadScore(b, f), 0) / foes.length : leadScore(b, foes[0]));
    const first = best.reduce((a, b) => (lead(b) > lead(a) ? b : a));
    return [first, ...best.filter((b) => b !== first)];
}
