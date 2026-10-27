// 최종 보스(counter: true)의 선출: 6마리 중 무작위 3마리가 아니라, 내가 고른 3마리를 보고 상성이 가장 좋은 3마리를 낸다.
// 보스의 포켓몬과 내 포켓몬은 이미 특성, 도구, 기술이 정해져 있어서 실제 데미지 계산(bestDamage)으로 맞대결을 점수로 만든다.
import { bestDamage, movesFirst, survivesOneHit } from "./cpusetup";
import { MIN_ROLL } from "./damagecalc";

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
// 점수 = (내 포켓몬마다 그 포켓몬을 가장 잘 잡는 보스 포켓몬의 점수 합) + (보스 포켓몬마다 내 포켓몬 셋에 대한 평균 점수 합의 절반)
// 앞의 항은 3마리가 서로의 약점을 덮는지(상성 보완), 뒤의 항은 한 마리가 지나치게 약한 선출을 피하는지를 본다.
// 선두는 내 선두와의 선두 점수(leadScore)가 가장 높은 포켓몬이고, 나머지 순서는 그대로 둔다.
export function pickCounterTeam(roster, foes, random = Math.random) {
    const size = Math.min(3, roster.length);
    if (!foes.length) return roster.slice(0, size);
    const scores = new Map(roster.map((b) => [b, foes.map((f) => matchupScore(b, f))]));
    let best = null;
    let bestScore = -Infinity;
    for (const combo of combinations(roster, size)) {
        const cover = foes.reduce((sum, _, fi) => sum + Math.max(...combo.map((b) => scores.get(b)[fi])), 0);
        const average = combo.reduce((sum, b) => sum + scores.get(b).reduce((a, x) => a + x, 0) / foes.length, 0);
        const score = cover + average / 2 + random() * 0.001; // 같은 점수면 무작위
        if (score > bestScore) {
            bestScore = score;
            best = combo;
        }
    }
    const first = best.reduce((a, b) => (leadScore(b, foes[0]) > leadScore(a, foes[0]) ? b : a));
    return [first, ...best.filter((b) => b !== first)];
}
