// 컴퓨터가 변화기(함정, 회복, 상태이상, 벽)를 쓸지 정하는 규칙과, 그 모든 것의 우선순위.
// 우선순위: 한 방에 잡을 수 있으면 공격 > 함정 > (빛의점토를 든) 벽 > 회복 > 그 밖의 변화기 > 랭업기 > 공격
// 배턴터치, 꼬리자르기, 날씨 기술은 함정보다 앞 (cpupass.js, cpuweather.js). 순풍은 트릭룸 다음.
// 그 밖의 변화기 안의 순서: 소원, 트릭룸, 순풍, 트릭, 울부짖기/흑안개, 도발, 앙코르, 상태이상, 벽, 대타출동, 방어 (cpuboardmoves.js)
import { damageCalc, typeEffectiveness, MIN_ROLL } from "./damagecalc";
import { getUsableMoves } from "./pp";
import { isGrounded, weatherHealPercent, weatherBlocksStatus, terrainBlocksStatus, weatherOf } from "./field";
import { HAZARD_MOVES, hasHazards } from "./hazards";
import { LIGHT_CLAY } from "./iteminfo";
import { activeItem } from "./helditem";
import { abilityBlocksStatus, bouncesMoves, bypassesScreens, canPoisonAnything, isPowderImmune } from "./abilities";
import { POWDER_MOVES, REFLECTABLE_MOVES, HEAL_MOVES, PROTECT_MOVES, STATUS_IMMUNE_TYPES, STATUS_TYPE_BLOCKED_MOVES, TOXIC_MOVES } from "./movemechanics";
import { bestDamage, hitsToKO, hitsToDown, hitsToDie, chooseSetupMove } from "./cpusetup";
import { residualDamage } from "./cpuresidual";
import { passMove, tailwindMove } from "./cpupass";
import { weatherMove, terrainMove } from "./cpuweather";
import { certainlyFails } from "./cpufail";
import {
    destinyBondMove,
    trickRoomMove,
    trickMove,
    resetBoostMove,
    tauntMove,
    encoreMove,
    disableMove,
    substituteMove,
    protectMove,
    wishMove,
} from "./cpuboardmoves";

const SELF_TARGETS = new Set(["user", "user-and-allies", "user-or-ally"]);
const MAX_LAYERS = { stealthRock: 1, spikes: 3, toxicSpikes: 2, stickyWeb: 1 };
// 함정을 까는 순서
const HAZARD_ORDER = ["stealthRock", "spikes", "stickyWeb", "toxicSpikes"];
// 같은 회복기를 연속으로 이만큼 쓰면 다음은 공격한다 (서로 못 뚫는 무한 회복 방지)
const MAX_HEAL_STREAK = 3;

// 방어 위주의 기술(회복, 대타출동, 방어, 소원): 이것만 계속 고르면 싸움이 진행되지 않는다
const DEFENSIVE_MOVES = new Set([...HEAL_MOVES, ...Object.keys(PROTECT_MOVES), "substitute", "wish", "rest", "endure"]);
// 방어 위주의 기술을 이만큼 이어서 고르면 다음은 다른 기술을 쓴다 (달빛 → 대타출동 → 달빛... 같은 반복 방지)
const MAX_DEFENSIVE_STREAK = 3;

// 컴퓨터가 방금 고른 기술을 기록한다 (연속으로 같은 기술을 몇 번 썼는지, 방어 기술을 몇 번 이어서 썼는지 세려고)
export function recordCpuMove(pokemon, move) {
    const streak = pokemon.cpuStreak;
    pokemon.cpuStreak = streak && streak.name === move.name ? { name: move.name, count: streak.count + 1 } : { name: move.name, count: 1 };
    const defensive = DEFENSIVE_MOVES.has(move.name) && move.damage_class && move.damage_class.name === "status"; // (흡수 공격은 방어 기술이 아니다)
    pokemon.cpuDefensive = defensive ? (pokemon.cpuDefensive || 0) + 1 : 0;
}

function situation(playerTeam, opponentTeam) {
    const me = opponentTeam[0];
    const foe = playerTeam[0];
    const field = playerTeam.field || opponentTeam.field || null;
    return {
        me,
        foe,
        field,
        myTeam: opponentTeam,
        foeTeam: playerTeam,
        attacksBefore: hitsToDown(foe, bestDamage(me, foe, field, MIN_ROLL), me),
        foeHitsBefore: hitsToDie(me, bestDamage(foe, me, field), foe),
    };
}

const usable = (pokemon, name) => getUsableMoves(pokemon).find((m) => m.name === name) || null;
const alive = (team) => team.slice(1).filter((p) => p.hp[0] > 0);

// ---- 함정 ----

// 스텔스록, 압정뿌리기, 끈적끈적네트, 독압정을 상대 쪽에 까는 기술. 방어막제거는 내 쪽 함정을 치운다.
function hazardMove(s) {
    const { me, foeTeam, myTeam, foeHitsBefore } = s;
    if (foeHitsBefore - 1 < 2) return null; // 상대 공격을 2회 이상 버텨야 한다
    const bench = alive(foeTeam);
    if (bench.length >= 1) {
        const laid = foeTeam.hazards || {};
        for (const kind of HAZARD_ORDER) {
            const move = getUsableMoves(me).find((m) => HAZARD_MOVES[m.name] === kind);
            if (!move) continue;
            const layers = laid[kind] || 0;
            if (layers >= MAX_LAYERS[kind]) continue;
            // 바닥에 깔리는 함정은 교체해 나올 포켓몬이 땅에 닿아 있어야 의미가 있다
            const grounded = bench.filter(isGrounded);
            if (kind !== "stealthRock" && grounded.length === 0) continue;
            if (kind === "toxicSpikes" && !grounded.some((p) => !p.types.some((t) => ["poison", "steel"].includes(t.type.name)))) continue;
            return move;
        }
    }
    // 내 쪽에 함정이 깔려 있고 내 쪽에 교체 대상이 있으면 방어막제거
    const defog = usable(me, "defog");
    if (defog && hasHazards(myTeam) && alive(myTeam).length >= 1) return defog;
    return null;
}

// ---- 벽 (오로라베일, 리플렉터, 빛의장막) ----

// 우박이나 눈이 내릴 때는 오로라베일 (물리와 특수를 한 번에 줄인다). 아니면 상대의 가장 센 물리 / 특수 기술 중 더 아픈 쪽을 줄이는 벽
function screenMove(s) {
    const { me, foe, field, myTeam, foeHitsBefore } = s;
    if (foeHitsBefore - 1 < 1) return null;
    if (myTeam.auroraTurns > 0) return null;
    const best = (category) => {
        let top = 0;
        for (const m of getUsableMoves(foe)) {
            if (m.damage_class.name === category) top = Math.max(top, damageCalc(foe, me, m, { field }));
        }
        return top;
    };
    const physical = best("physical");
    const special = best("special");
    const aurora = usable(me, "aurora-veil");
    if (aurora && ["hail", "snow"].includes(weatherOf(field)) && (physical > 0 || special > 0)) return aurora;
    const order = physical >= special ? ["reflect", "light-screen"] : ["light-screen", "reflect"];
    for (const name of order) {
        const move = usable(me, name);
        if (!move) continue;
        const category = name === "reflect" ? "physical" : "special";
        if ((category === "physical" ? physical : special) <= 0) continue;
        if ((name === "reflect" ? myTeam.reflectTurns : myTeam.lightScreenTurns) > 0) continue;
        return move;
    }
    return null;
}

// ---- 회복 ----

function healMove(s) {
    const { me, foe, field } = s;
    const ratio = me.hp[0] / me.hp[1];
    const foeBest = bestDamage(foe, me, field);
    const loss = foeBest + residualDamage(me); // 매 턴 잃는 체력: 상대 공격 + 독, 화상 같은 것
    const streak = me.cpuStreak;
    let best = null;
    let bestAmount = 0;
    for (const move of getUsableMoves(me)) {
        if (streak && streak.name === move.name && streak.count >= MAX_HEAL_STREAK) continue;
        if (move.name === "rest") {
            // 풀회복하고 2턴 자는 동안 상대 공격을 2번 맞고도 버텨야 한다. 상태이상에 걸려 있으면 조금 더 일찍 쓴다.
            if (ratio > (me.status ? 0.7 : 0.4)) continue;
            if (me.status && me.status.name === "sleep") continue;
            if (terrainBlocksStatus(me, "sleep", field) || abilityBlocksStatus(me, "sleep", null, field)) continue;
            if (hitsToKO(me.hp[1], foeBest) < 3) continue;
            const amount = me.hp[1] - me.hp[0];
            if (amount > bestAmount) [best, bestAmount] = [move, amount];
            continue;
        }
        const heals = move.meta && move.meta.category && move.meta.category.name === "heal" && move.meta.healing > 0;
        if (!heals || !move.target || !SELF_TARGETS.has(move.target.name) || move.name === "swallow") continue;
        if (ratio > 0.6) continue;
        const percent = weatherHealPercent(move, field) || move.meta.healing;
        const amount = Math.min(Math.floor((me.hp[1] * percent) / 100), me.hp[1] - me.hp[0]);
        if (amount <= loss) continue; // 회복해도 따라잡히면 의미가 없다 (상대 공격 + 독, 화상으로 매 턴 잃는 만큼 못 되찾는다)
        if (amount > bestAmount) [best, bestAmount] = [move, amount];
    }
    return best;
}

// ---- 상태이상 ----

// 상대에게 이 상태이상을 걸 수 있는가 (타입, 특성, 날씨, 필드, 신비의부적...)
function canInflict(s, status, move) {
    const { me, foe, foeTeam, field } = s;
    if (foe.status || foe.substitute) return false;
    const types = foe.types.map((t) => t.type.name);
    const immuneType = (STATUS_IMMUNE_TYPES[status] || []).some((t) => types.includes(t));
    if (immuneType && !((status === "poison" || status === "toxic") && canPoisonAnything(me))) return false;
    if (STATUS_TYPE_BLOCKED_MOVES.has(move.name) && typeEffectiveness(move, foe, me) === 0) return false;
    if (POWDER_MOVES.has(move.name) && (types.includes("grass") || isPowderImmune(foe, me))) return false;
    if (foeTeam.safeguardTurns > 0 && !bypassesScreens(me)) return false;
    if (weatherBlocksStatus(status, field) || terrainBlocksStatus(foe, status, field)) return false;
    if (abilityBlocksStatus(foe, status, me, field)) return false;
    return true;
}

// 어떤 상태이상을 거는 기술인가 ("toxic"/"paralysis"/"sleep"/"burn"), 아니면 null
function inflictedStatus(move) {
    if (move.damage_class.name !== "status" || !move.meta || !move.meta.ailment) return null;
    const name = move.meta.ailment.name;
    if (name === "poison") return TOXIC_MOVES.has(move.name) ? "toxic" : "poison";
    return ["paralysis", "sleep", "burn"].includes(name) ? name : null;
}

// 쓸 수 있는 상태이상 기술들 중 하나. 수면 > 마비 > 맹독 > 화상 > 하품 > 씨뿌리기 순.
function statusMove(s) {
    const { me, foe, field, foeHitsBefore, attacksBefore } = s;
    const found = {};
    for (const move of getUsableMoves(me)) {
        const status = inflictedStatus(move);
        if (status === "sleep" || status === "paralysis" || status === "toxic") {
            // 걸 수 있으면 건다
            if (canInflict(s, status, move)) found[status] = found[status] || move;
        } else if (status === "burn") {
            // 상대의 주력 공격이 물리이고, 화상 후 상대가 나를 잡는 횟수가 늘어날 때
            if (foeHitsBefore - 1 < 1 || !canInflict(s, "burn", move)) continue;
            const burned = { ...foe, status: { name: "burn" } };
            if (hitsToDie(me, bestDamage(burned, me, field)) > foeHitsBefore) found.burn = found.burn || move;
        } else if (move.name === "yawn") {
            if (!foe.yawn && canInflict(s, "sleep", move)) found.yawn = found.yawn || move;
        } else if (move.name === "leech-seed") {
            const grass = foe.types.some((t) => t.type.name === "grass");
            if (!foe.leechSeed && !grass && !foe.substitute && attacksBefore >= 3 && foeHitsBefore - 1 >= 2) {
                found.leechSeed = found.leechSeed || move;
            }
        }
    }
    return found.sleep || found.paralysis || found.toxic || found.burn || found.yawn || found.leechSeed || null;
}

// ---- 전체 우선순위 ----

// 컴퓨터가 공격 대신 쓸 변화기 / 랭업기. 한 방에 잡을 수 있거나 쓸 만한 게 없으면 null (그러면 공격한다).
export function chooseSupportMove(playerTeam, opponentTeam) {
    const me = opponentTeam[0];
    const foe = playerTeam[0];
    if (me.hp[0] <= 0 || foe.hp[0] <= 0 || me.charging || me.mustRecharge) return null;
    const s = situation(playerTeam, opponentTeam);
    // 상대가 매직미러면 상대에게 거는 변화기(함정, 도발, 상태이상...)는 내게 되돌아오니 후보에서 뺀다
    const field = playerTeam.field || opponentTeam.field || null;
    // 쓰면 반드시 실패하는 기술(사이코필드의 선제 기술, 미스트필드의 상태이상 기술 등)도 후보에서 뺀다
    const bounced = bouncesMoves(foe, me);
    s.real = me; // (변화기 후보를 거른 복사본 말고 진짜 포켓몬: 배턴터치로 내보낼 포켓몬을 적어 둔다)
    s.me = {
        ...me,
        moveset: me.moveset.filter((m) => !(bounced && REFLECTABLE_MOVES.has(m.name)) && !certainlyFails(m, me, foe, field, playerTeam, opponentTeam)),
    };
    if (s.attacksBefore === 1) return null; // 1순위: 한 방에 잡을 수 있으면 공격
    const holdingClay = activeItem(me) && me.item.name === LIGHT_CLAY;
    // 방어 기술만 이어서 골랐다면 이번에는 거른다 (체력이 아주 낮을 때의 회복은 예외)
    const stalling = (me.cpuDefensive || 0) >= MAX_DEFENSIVE_STREAK;
    const dying = me.hp[0] / me.hp[1] <= 0.35;
    const first =
        destinyBondMove(s) || // (한 방에 쓰러질 상황에서만 나오므로 함정, 회복과는 겹치지 않는다)
        passMove(s) || // 배턴터치, 꼬리자르기: 쓰러지기 직전에도 쓴다
        weatherMove(s) || // 날씨를 까는 기술 (파티가 이득을 볼 때. cpuweather.js)
        terrainMove(s) || // 미스트필드, 사이코필드 (cpuweather.js)
        hazardMove(s) ||
        (holdingClay && screenMove(s)) ||
        ((!stalling || dying) && healMove(s));
    if (first) return first;
    // 상대가 한 방에 나를 잡는데 회복해도 소용이 없다면, 방어나 변화기로 시간을 끌지 않고 가장 센 공격을 한다.
    // (쓰러지기 전에 최대한 깎아 두어야 다음 포켓몬이 활약하기 쉽다)
    if (s.foeHitsBefore <= 1) return null;
    return (
        (!stalling && wishMove(s)) ||
        trickRoomMove(s) ||
        tailwindMove(s) ||
        trickMove(s) ||
        resetBoostMove(s) ||
        tauntMove(s) ||
        encoreMove(s) ||
        disableMove(s) ||
        statusMove(s) ||
        screenMove(s) ||
        (!stalling && substituteMove(s)) ||
        (!stalling && protectMove(s)) ||
        chooseSetupMove(playerTeam, opponentTeam)
    );
}
