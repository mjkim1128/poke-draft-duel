// 컴퓨터가 "쓰면 반드시 실패하는 기술"을 알아보는 규칙. 이런 기술은 가장 센 공격이라도 고르지 않는다.
// (예: 사이코필드에서 선제 기술이나 짓궂은마음이 붙은 변화기, 미스트필드나 일렉트릭필드에서 하품이나 수면기)
import { FOE_TARGETS } from "./accuracy";
import { terrainOf, terrainBlocksStatus, isGrounded } from "./field";
import { EXPLOSIVE_MOVES, SUBSTITUTE_BYPASS } from "./movemechanics";
import { abilityName, abilityPriorityBonus, blocksStatusMoves, boostsStatusPriority } from "./abilities";

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

// 이 기술은 지금 이 상대에게 쓰면 반드시 실패하는가?
// foeTeam은 상대 쪽 팀 배열 (안전지대 같은 팀 효과를 보려고). 없어도 된다.
export function certainlyFails(move, attacker, foe, field, foeTeam = null) {
    if (!move || !move.damage_class || !attacker || !foe) return false;
    const aimed = aimsAtFoe(move);
    // 사이코필드: 땅에 닿은 상대에게는 선제 기술이 통하지 않는다
    if (aimed && terrainOf(field) === "psychic" && effectivePriority(move, attacker) > 0 && isGrounded(foe)) return true;
    // 습기: 폭발하는 기술은 아무도 쓸 수 없다
    if (EXPLOSIVE_MOVES.has(move.name) && [attacker, foe].some((p) => abilityName(p) === "damp")) return true;
    if (move.damage_class.name !== "status" || !aimed) return false;
    // 아래는 상대를 향하는 변화기만 해당한다
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
