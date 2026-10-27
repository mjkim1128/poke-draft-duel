// 사용 조건이 있는 기술(속이기, 잠꼬대, 폴터가이스트...): 조건을 채우지 못하면 아예 고를 수 없다 (눌러도 "But it failed!"가 되는 대신).
// 지금 상태만 보고 알 수 있는 조건만 다룬다. 상대가 무엇을 고르는지에 달린 기술(기습 등)은 쓴 뒤에 실패한다.
import { FIRST_TURN_ONLY_MOVES, NO_CONSECUTIVE_MOVES } from "./movemechanics";
import { activeItem } from "./helditem";

// 쓸 수 없는 이유 (없으면 null). foe: 지금 맞서고 있는 상대 포켓몬 (모르면 생략)
export function moveConditionBlock(pokemon, move, { foe = null } = {}) {
    if (move.name === "struggle") return null;
    // 속이기, 만나자마자, 마룻바닥세워막기: 배틀에 나온 직후 첫 행동에만
    if (FIRST_TURN_ONLY_MOVES.has(move.name) && (pokemon.actionsSinceSwitch || 0) >= 1) return "나온 직후에만 쓸 수 있다";
    // 블러드문: 연속으로 쓸 수 없다
    if (NO_CONSECUTIVE_MOVES.has(move.name) && pokemon.lastMove === move.name) return "연속으로 쓸 수 없다";
    // 잠꼬대: 잠들어 있을 때만
    if (move.name === "sleep-talk" && !(pokemon.status && pokemon.status.name === "sleep")) return "잠들어 있을 때만 쓸 수 있다";
    // 폴터가이스트: 상대가 도구를 들고 있어야 한다
    if (move.name === "poltergeist" && foe && !foe.item) return "상대가 도구를 갖고 있지 않다";
    // 내던지기: 던질 도구가 있어야 한다
    if (move.name === "fling" && !activeItem(pokemon)) return "던질 도구가 없다";
    // 볼가득넣기: 열매가 있어야 한다
    if (move.name === "stuff-cheeks" && !(activeItem(pokemon) && pokemon.item.name.endsWith("-berry"))) return "먹을 열매가 없다";
    return null;
}
