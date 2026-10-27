// 컴퓨터가 "쓰면 반드시 실패하는 기술"을 알아보는 규칙. 이런 기술은 가장 센 공격이라도 고르지 않는다.
// (예: 사이코필드에서 선제 기술이나 짓궂은마음이 붙은 변화기, 미스트필드나 일렉트릭필드에서 하품이나 수면기,
//  이미 행동한 뒤의 만나자마자, 이미 깔린 날씨나 벽, 최대로 쌓인 함정, 도구가 없는 상대에게 폴터가이스트)
// 지금 상태만으로 알 수 있고 같은 턴에 상대가 바꾸기 어려운 것만 넣는다. 이번 턴 상대의 행동에 달린 조건
// (반격류가 맞았는지, 기습이 통하는지, 체력이 가득 찼을 때의 회복기 등)은 확실하지 않으므로 넣지 않는다.
import { FOE_TARGETS } from "./accuracy";
import { terrainOf, weatherOf, terrainBlocksStatus, isGrounded, WEATHER_MOVES, TERRAIN_MOVES } from "./field";
import { EXPLOSIVE_MOVES, SUBSTITUTE_BYPASS, FIRST_TURN_ONLY_MOVES, SUPPORTED_PIVOT_MOVES } from "./movemechanics";
import { abilityName, abilityPriorityBonus, blocksStatusMoves, boostsStatusPriority } from "./abilities";
import { HAZARD_MOVES, MAX_LAYERS } from "./hazards";
import { activeItem } from "./helditem";
import { UNREMOVABLE_ITEMS } from "./iteminfo";

// 필드와 안전지대가 막는 상태 (사슬묶기, 씨뿌리기 같은 것은 막지 않는다)
const CONDITIONS = ["sleep", "paralysis", "burn", "poison", "toxic", "freeze", "confusion"];
const aimsAtFoe = (move) => move.damage_class.name !== "status" || FOE_TARGETS.has(move.target && move.target.name);

// 특성 등으로 바뀐 뒤의 선제도 (짓궂은마음이 붙은 변화기는 +1)
export function effectivePriority(move, attacker) {
    return (
        move.priority +
        (move.damage_class.name === "status" && boostsStatusPriority(attacker) ? 1 : 0) +
        abilityPriorityBonus(attacker, move)
    );
}

// 내 쪽 팀의 효과(순풍, 안전지대, 벽, 소원)가 이미 걸려 있어서 실패하는 기술인가
const SIDE_UP = {
    tailwind: (team) => team.tailwindTurns > 0,
    safeguard: (team) => team.safeguardTurns > 0,
    reflect: (team) => team.reflectTurns > 0,
    "light-screen": (team) => team.lightScreenTurns > 0,
    wish: (team) => !!team.wish,
};
const hasBench = (team) => team.slice(1).some((p) => p.hp[0] > 0);

// 이 기술은 지금 이 상대에게 쓰면 반드시 실패하는가?
// foeTeam은 상대 쪽 팀 배열 (안전지대, 함정 같은 팀 효과를 보려고), ownTeam은 내 쪽 팀 배열 (벽, 순풍, 교체할 포켓몬이 있는지). 없어도 된다.
export function certainlyFails(move, attacker, foe, field, foeTeam = null, ownTeam = null) {
    if (!move || !move.damage_class || !attacker || !foe) return false;
    const aimed = aimsAtFoe(move);
    // 만나자마자, 속이기, 앞서가는 방어는 나온 뒤 첫 행동에서만 쓸 수 있다 (이미 한 번 행동했으면 실패한다. 결정할 때 actionsSinceSwitch는 지금까지 한 행동 수)
    if (FIRST_TURN_ONLY_MOVES.has(move.name) && (attacker.actionsSinceSwitch || 0) >= 1) return true;
    // 폴터가이스트는 상대에게 도구가 없으면, 던지기는 던질 도구가 없으면 실패한다
    if (move.name === "poltergeist" && !foe.item) return true;
    if (move.name === "fling" && (!activeItem(attacker) || UNREMOVABLE_ITEMS.has(attacker.item.name))) return true;
    // 사이코필드: 땅에 닿은 상대에게는 선제 기술이 통하지 않는다
    if (aimed && terrainOf(field) === "psychic" && effectivePriority(move, attacker) > 0 && isGrounded(foe)) return true;
    // 습기: 폭발하는 기술은 아무도 쓸 수 없다
    if (EXPLOSIVE_MOVES.has(move.name) && [attacker, foe].some((p) => abilityName(p) === "damp")) return true;
    if (move.damage_class.name === "status" && failsBySelfOrSide(move, attacker, field, ownTeam, foeTeam)) return true;
    if (move.damage_class.name !== "status" || !aimed) return false;
    // 아래는 상대를 향하는 변화기만 해당한다
    if (move.name === "taunt" && foe.taunt) return true;
    if (move.name === "leech-seed" && (foe.leechSeed || foe.types.some((t) => t.type.name === "grass"))) return true;
    if (move.name === "encore" && foe.encore) return true;
    if (move.name === "disable" && foe.disabled) return true;

    if (blocksStatusMoves(foe, attacker)) return true; // 황금몸
    if (foe.substitute && !SUBSTITUTE_BYPASS.has(move.name)) return true; // 대타출동이 막는다
    const ailment = move.name === "yawn" ? "sleep" : move.meta && move.meta.ailment && move.meta.ailment.name;
    if (ailment && CONDITIONS.includes(ailment)) {
        // 미스트필드(모든 상태이상), 일렉트릭필드(잠듦)는 땅에 닿은 상대에게
        if (terrainBlocksStatus(foe, ailment, field)) return true;
        // 안전지대가 쳐져 있으면 상태이상을 걸 수 없다
        if (foeTeam && foeTeam.safeguardTurns > 0) return true;
    }
    return false;
}

// 나 자신이나 내 쪽, 필드를 향하는 변화기가 지금 상태 때문에 반드시 실패하는가
function failsBySelfOrSide(move, attacker, field, ownTeam, foeTeam) {
    const name = move.name;
    if (HAZARD_MOVES[name] && foeTeam) {
        const kind = HAZARD_MOVES[name];
        if (((foeTeam.hazards && foeTeam.hazards[kind]) || 0) >= MAX_LAYERS[kind]) return true; // 이미 최대로 깔려 있다
    }
    if (WEATHER_MOVES[name] && name !== "chilly-reception" && weatherOf(field) === WEATHER_MOVES[name]) return true; // 이미 그 날씨
    if (TERRAIN_MOVES[name] && terrainOf(field) === TERRAIN_MOVES[name]) return true; // 이미 그 필드
    if (name === "focus-energy" && attacker.focusEnergy) return true;
    if (name === "belly-drum" && (attacker.hp[0] <= Math.floor(attacker.hp[1] / 2) || attacker.stat_levels[0] >= 6)) return true;
    if (name === "substitute" && attacker.hp[0] <= attacker.hp[1] / 4) return true;
    if (name === "sleep-talk" && !(attacker.status && attacker.status.name === "sleep") && abilityName(attacker) !== "comatose") return true;
    if (!ownTeam) return false;
    if (SIDE_UP[name] && SIDE_UP[name](ownTeam)) return true;
    if (name === "aurora-veil") {
        const weather = weatherOf(field);
        if ((weather !== "hail" && weather !== "snow") || ownTeam.auroraTurns > 0) return true;
    }
    // 교체할 포켓몬이 없으면 변화형 교체기(막말내뱉기, 텔레포트, 배턴터치, 꼬리자르기...)와 치유소원, 달의춤은 실패한다
    if ((SUPPORTED_PIVOT_MOVES.has(name) || name === "healing-wish" || name === "lunar-dance") && !hasBench(ownTeam)) return true;
    return false;
}
