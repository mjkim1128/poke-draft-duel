// 컴퓨터가 쓰는 변화기 2묶음: 저승길동무, 트릭룸, 트릭, 울부짖기/흑안개, 도발, 앙코르, 사슬묶기, 대타출동, 방어, 소원.
// 각 함수는 cpustatus.js의 situation(s)을 받아서 쓸 기술을 돌려주고, 쓸 상황이 아니면 null을 돌려준다.
// s.foeHitsBefore - 1 은 "버팀": 상대가 나를 잡는 데 필요한 공격 횟수에서 1을 뺀 값이다.
import { getUsableMoves, hasPP, choiceLockedMove } from "./pp";
import { effectiveSpeed } from "./speed";
import { CHOICE_ITEMS, UNREMOVABLE_ITEMS } from "./iteminfo";
import { PROTECT_MOVES, FAIL_ENCORE, HEAL_MOVES } from "./movemechanics";
import { preventsTaunt, preventsDisable, protectsItem } from "./abilities";
import { bestDamage, hitsToKO, movesFirst, positiveStages } from "./cpusetup";

// 상대 포켓몬을 향하는 기술의 대상 (대타출동이 막아 주는 쪽)
const AIMED_AT_FOE = new Set(["selected-pokemon", "all-opponents", "all-other-pokemon", "random-opponent"]);

const usable = (pokemon, name) => getUsableMoves(pokemon).find((m) => m.name === name) || null;
const alive = (team) => team.slice(1).filter((p) => p.hp[0] > 0);
const survives = (s, hits) => s.foeHitsBefore - 1 >= hits;
const isChoice = (item) => !!item && CHOICE_ITEMS[item.name] !== undefined;

// 잠꼬대: 내가 자고 있을 때만 쓴다 (자는 동안은 다른 기술이 나가지 않지만 잠꼬대는 나간다)
export function sleepTalkMove(me) {
    if (!me.status || me.status.name !== "sleep") return null;
    return usable(me, "sleep-talk");
}

// 저승길동무: 상대가 한 방에 나를 잡을 수 있고 내가 먼저 움직일 때. 연속으로는 쓰지 않는다.
export function destinyBondMove(s) {
    const { me, foe, field } = s;
    const move = usable(me, "destiny-bond");
    if (!move || me.destinyBond || (me.cpuStreak && me.cpuStreak.name === move.name)) return null;
    if (s.foeHitsBefore > 1 || !movesFirst(me, foe, field)) return null;
    return move;
}

// 트릭룸: 쓴 뒤 내 남은 파티(나와 있는 포켓몬 포함) 중 절반 이상이 상대보다 먼저 움직이게 될 때.
// 3마리면 2마리, 2마리면 1마리, 1마리면 자기 자신. 이미 깔려 있으면 쓰지 않는다.
export function trickRoomMove(s) {
    const { me, foe, field, myTeam } = s;
    const move = usable(me, "trick-room");
    if (!move || (field && field.trickRoom) || !survives(s, 1)) return null;
    const foeSpeed = effectiveSpeed(foe, field);
    const members = myTeam.filter((p) => p.hp[0] > 0);
    const slower = members.filter((p) => effectiveSpeed(p, field) < foeSpeed).length;
    return slower >= Math.ceil(members.length / 2) ? move : null;
}

// 트릭 / 바꿔치기: 내가 구애 도구를 들고 있고 상대는 구애 도구가 없을 때 (도구를 넘길 수 있을 때)
export function trickMove(s) {
    const { me, foe } = s;
    const move = usable(me, "trick") || usable(me, "switcheroo");
    if (!move || !isChoice(me.item) || isChoice(foe.item)) return null;
    if (UNREMOVABLE_ITEMS.has(me.item.name) || (foe.item && UNREMOVABLE_ITEMS.has(foe.item.name)) || protectsItem(foe, me)) return null;
    return move;
}

// 상대의 랭업이 높을 때(올라간 단계 합 +2 이상): 흑안개는 내 랭업보다 상대 랭업이 더 높을 때,
// 울부짖기 / 날려버리기는 상대에게 바꿔 낼 포켓몬이 있을 때
export function resetBoostMove(s) {
    const { me, foe, foeTeam } = s;
    const theirs = positiveStages(foe);
    if (theirs < 2 || !survives(s, 1)) return null;
    const haze = usable(me, "haze");
    if (haze && theirs > positiveStages(me)) return haze;
    if (alive(foeTeam).length === 0) return null;
    return usable(me, "roar") || usable(me, "whirlwind");
}

// 상대가 마지막으로 쓴 기술 (교체하면 지워진다). 없으면 null.
const lastMoveOf = (foe) => (foe.moveset || []).find((m) => m.name === foe.lastMove) || null;
// 그 기술 하나가 나에게 주는 피해
const damageOf = (s, move) => bestDamage({ ...s.foe, moveset: [move] }, s.me, s.field);

// 도발: 상대 변화기가 2개 이상일 때. 내가 느려도 다음 턴부터 막히므로 순서는 따지지 않는다.
export function tauntMove(s) {
    const { me, foe } = s;
    const move = usable(me, "taunt");
    if (!move || foe.taunt || preventsTaunt(foe, me) || preventsDisable(foe, me)) return null;
    const statusMoves = (foe.moveset || []).filter((m) => m.damage_class.name === "status").length;
    if (statusMoves < 2 || !survives(s, 1)) return null;
    return move;
}

// 앙코르: 상대가 직전에 쓴 기술에 묶어 버린다.
//  - 직전 기술이 변화기: 내가 먼저 움직일 때만 (늦으면 이번 턴에 상대가 무엇을 쓸지 몰라서 엉뚱한 기술에 묶을 수 있다)
//  - 직전 기술이 약한 공격(내 최대 체력의 1/4 미만): 먼저든 늦든. 상대가 이번 턴에 더 센 기술을 써도 3번은 버틴다.
export function encoreMove(s) {
    const { me, foe, field } = s;
    const move = usable(me, "encore");
    if (!move || foe.encore || preventsDisable(foe, me)) return null;
    const last = lastMoveOf(foe);
    if (!last || FAIL_ENCORE.has(last.name) || !hasPP(last)) return null;
    if (last.damage_class.name === "status") return movesFirst(me, foe, field) && survives(s, 1) ? move : null;
    return damageOf(s, last) * 4 < me.hp[1] && survives(s, 3) ? move : null;
}

// 사슬묶기: 상대가 직전에 쓴 기술을 막는다. 막을 만한 기술일 때만.
//  - 구애 도구로 그 기술에 묶여 있으면: 이번 턴에도 그 기술이 나가므로 먼저든 늦든 쓴다 (선택할 기술이 없어져 발버둥만 나간다)
//  - 그 밖에는 내가 먼저 움직일 때, 직전 기술이 상대의 가장 센 공격이거나 회복기일 때
export function disableMove(s) {
    const { me, foe, field } = s;
    const move = usable(me, "disable");
    const last = lastMoveOf(foe);
    if (!move || foe.disabled || preventsDisable(foe, me) || !last || last.name === "struggle" || !hasPP(last) || !survives(s, 1)) return null;
    if (choiceLockedMove(foe) === last.name) return move;
    if (!movesFirst(me, foe, field)) return null;
    const strongest = last.damage_class.name !== "status" && damageOf(s, last) > 0 && damageOf(s, last) >= bestDamage(foe, me, field);
    return strongest || HEAL_MOVES.has(last.name) ? move : null;
}

// 대타출동: 체력이 50%를 넘고, 최대 체력의 1/4를 내고도 상대 공격을 3회 이상 버티고,
// 상대에게 나를 노리는 변화기가 있을 때 (대타가 막아 준다)
export function substituteMove(s) {
    const { me, foe, field } = s;
    const move = usable(me, "substitute");
    if (!move || me.substitute || me.hp[0] / me.hp[1] <= 0.5) return null;
    const after = hitsToKO(me.hp[0] - Math.floor(me.hp[1] / 4), bestDamage(foe, me, field));
    if (after < 3) return null;
    const threatened = (foe.moveset || []).some((m) => m.damage_class.name === "status" && m.target && AIMED_AT_FOE.has(m.target.name));
    return threatened ? move : null;
}

// 방어: 한 턴을 벌면 이득일 때. 상대가 충전 중이거나, 상대가 독/화상/씨뿌리기/저주로 매 턴 깎이고 있거나,
// 내 쪽에 소원이 걸려 있을 때. 연속으로 쓰면 잘 안 먹히므로 연속 사용은 하지 않는다.
export function protectMove(s) {
    const { me, foe, myTeam } = s;
    if ((me.stallDivisor || 1) > 1 || !survives(s, 1)) return null;
    const moves = getUsableMoves(me).filter((m) => PROTECT_MOVES[m.name]);
    if (moves.length === 0) return null;
    const bleeding = foe.status && ["poison", "toxic", "burn"].includes(foe.status.name);
    if (!(foe.charging || bleeding || foe.leechSeed || foe.cursed || myTeam.wish)) return null;
    // 닿으면 벌을 주는 방어(가시방패 등)가 있으면 그쪽을 먼저
    return moves.find((m) => PROTECT_MOVES[m.name].contact) || moves[0];
}

// 소원: 체력이 70% 이하이고, 소원이 이루어질 때까지(다음 턴 끝) 두 번 맞고도 버틸 때. 다른 회복기를 못 쓸 때 쓴다.
export function wishMove(s) {
    const { me, myTeam } = s;
    const move = usable(me, "wish");
    if (!move || myTeam.wish || me.hp[0] / me.hp[1] > 0.7 || !survives(s, 2)) return null;
    return move;
}
