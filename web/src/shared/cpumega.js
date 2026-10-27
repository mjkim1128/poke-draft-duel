// 컴퓨터가 메가진화를 미룰지 정하는 규칙. 기본은 나오자마자 바로 진화하고, 아래 포켓몬만 미루는 경우가 있다.
//   펜드라, 샤크니아 (진화 전 특성 가속): 가속을 한 단계씩 쌓아서 진화한 모습으로 상대를 앞지를 수 있고, 그동안 상대 공격을 버틸 수 있으면
//       진화를 미루고 기다린다. 기다리는 턴에는 방어를 (연속은 안 됨), 방어를 못 쓰면 랭업기나 변화기를 쓴다.
//       앞지르는 데 걸리는 턴 수가 버틸 수 있는 턴 수보다 길거나, 이미 앞서 있거나, 쓸 기술이 없으면 바로 진화한다.
//   픽시 (진화 전 특성 천진): 상대의 랭크업 때문에 상대의 가장 센 공격이 내 체력의 절반 이상을 깎을 것 같으면 진화를 미룬다 (천진이 랭크업을 무시한다).
//   갸라도스 (진화 전에는 비행 타입): 상대의 땅 기술이 예상되면 이번 턴은 진화하지 않고 다음 턴에 진화한다.
// 한 방에 상대를 잡을 수 있으면 미루지 않고 바로 진화해서 공격한다.
import { damageCalc, typeEffectiveness, MIN_ROLL } from "./damagecalc";
import { getUsableMoves, choiceLockedMove } from "./pp";
import { PROTECT_MOVES } from "./movemechanics";
import { abilityName, getAbility } from "./abilities";
import { bestDamage, hitsToDown, hitsToDie, movesFirst, positiveStages, setupEffect } from "./cpusetup";
import { chooseSupportMove } from "./cpustatus";
import { certainlyFails } from "./cpufail";
import { megaFormOf, canMegaEvolve } from "./mega";
import { getBaseStats } from "./randompokemon";

// 써 봐야 아무 일도 없는 기술은 "변화기"로 치지 않는다
const NO_EFFECT = new Set(["splash", "celebrate", "hold-hands", "happy-hour"]);

// 진화를 미루면서 이번 턴에 쓸 랭업기나 변화기 (컴퓨터의 평소 판단이 고른 것, 없으면 쓸 수 있는 변화기 중에서)
function delayMove(s) {
    const { me, foe, field, playerTeam, opponentTeam } = s;
    const support = chooseSupportMove(playerTeam, opponentTeam);
    if (support) return support;
    const moves = getUsableMoves(me).filter(
        (m) => m.damage_class.name === "status" && !PROTECT_MOVES[m.name] && !NO_EFFECT.has(m.name) && !certainlyFails(m, me, foe, field, playerTeam)
    );
    return moves.find((m) => setupEffect(m, me)) || moves[0] || null;
}

// 지금부터 턴이 끝날 때마다 가속으로 스피드가 1단계씩 오른다고 할 때, 진화한 모습이 상대보다 먼저 움직이게 되기까지 몇 턴이 걸리는가.
// 0이면 지금 진화해도 이미 먼저 움직이고, 앞지를 수 없으면(트릭룸이 깔렸거나 +6까지 올려도 못 앞지름) null.
function turnsToOutspeed(me, foe, field) {
    if (field && field.trickRoom) return null; // 트릭룸에서는 스피드를 올려도 이득이 없다
    const form = megaFormOf(me);
    const stats = [me.base_stats[0], ...getBaseStats({ stats: form.stats }).slice(1)];
    const ability = getAbility(form.abilities[0].ability.name);
    for (let turns = 0; turns <= 6; turns++) {
        const levels = me.stat_levels.map((level, i) => (i === 4 ? Math.min(6, level + turns) : level));
        if (movesFirst({ ...me, base_stats: stats, ability, stat_levels: levels }, foe, field)) return turns;
        if (levels[4] >= 6) return null;
    }
    return null;
}

// 가속: 앞지르는 데 걸리는 턴 수와 상대 공격을 버티는 턴 수를 비교해서, 버티는 동안만 가속을 쌓고 나서 진화한다
function speedBoostRule(s) {
    const { me, foe, field } = s;
    if (abilityName(me) !== "speed-boost") return null;
    const needed = turnsToOutspeed(me, foe, field);
    if (!needed) return null; // 이미 앞서 있거나 앞지를 수 없으면 기다릴 이유가 없다
    const hitsLeft = hitsToDie(me, bestDamage(foe, me, field), foe);
    // 기다리는 동안 맞는 횟수: 방어는 연속으로 못 쓰므로 방어가 있으면 절반쯤 막는다. 쓰러지기 전에 끝나야 한다.
    const protect = (me.stallDivisor || 1) > 1 ? null : getUsableMoves(me).find((m) => PROTECT_MOVES[m.name]);
    const hasProtect = getUsableMoves(me).some((m) => PROTECT_MOVES[m.name]);
    const hits = hasProtect ? Math.floor(needed / 2) : needed;
    if (hits > hitsLeft - 1) return null;
    if (protect) return { move: protect };
    const move = delayMove(s);
    return move ? { move } : null;
}

// 천진: 상대의 랭크업이 큰 위협일 때는 랭크업을 무시하는 천진을 가진 채로 버틴다
function unawareRule(s) {
    const { me, foe, field } = s;
    if (abilityName(me) !== "unaware" || positiveStages(foe) <= 0) return null;
    const boosted = bestDamage(foe, { ...me, ability: null }, field); // 천진이 없다고 보고 랭크업이 그대로 들어간 피해
    if (boosted <= bestDamage(foe, me, field)) return null; // 랭크업이 피해를 늘리지 않으면 상관없다
    return boosted * 2 >= me.hp[1] ? { stay: true } : null;
}

// 비행 타입인 동안은 땅 기술이 통하지 않는다
function gyaradosRule(s) {
    const { me, foe, field } = s;
    const form = megaFormOf(me);
    if (!form || me.megaDelayed) return null;
    const isGround = (m) => m.type.name === "ground" && m.damage_class.name !== "status";
    // 구애 도구로 땅 기술에 묶여 있다
    const lockedName = choiceLockedMove(foe);
    const locked = lockedName && (foe.moveset || []).find((m) => m.name === lockedName);
    if (locked && isGround(locked)) return { stay: true, once: true };
    // 진화한 모습에게 가장 센 상대의 공격이 땅 기술이고, 지금 모습은 그 기술이 통하지 않는다
    const megaMe = { ...me, types: form.types };
    let top = null;
    let topDamage = 0;
    for (const m of getUsableMoves(foe, { foe: me })) {
        if (m.damage_class.name === "status") continue;
        const damage = damageCalc(foe, megaMe, m, { field });
        if (damage > topDamage) [top, topDamage] = [m, damage];
    }
    if (top && isGround(top) && typeEffectiveness(top, me, foe) === 0) return { stay: true, once: true };
    return null;
}

const RULES = { scolipede: speedBoostRule, sharpedo: speedBoostRule, clefable: unawareRule, gyarados: gyaradosRule };

// null: 바로 진화한다.
// { stay: true }: 이번 턴은 진화하지 않지만 기술은 평소대로 고른다.
// { move }: 이번 턴은 진화하지 않고 이 기술을 쓴다.
// once: 이번에 한 번만 미루고 다음 턴에는 진화한다.
export function megaDelay(playerTeam, opponentTeam) {
    const me = opponentTeam[0];
    const foe = playerTeam[0];
    const rule = RULES[me.name];
    if (!rule || !canMegaEvolve(opponentTeam) || me.hp[0] <= 0 || foe.hp[0] <= 0) return null;
    const field = playerTeam.field || opponentTeam.field || null;
    // 한 방에 상대를 잡을 수 있으면 미루지 않는다
    if (hitsToDown(foe, bestDamage(me, foe, field, MIN_ROLL), me) === 1) return null;
    return rule({ me, foe, field, playerTeam, opponentTeam });
}
