// 전투 기록(턴마다 줄 목록)의 마지막 턴에 한 줄을 붙인 새 기록을 돌려준다.
// 기록이 아직 비어 있어도(첫 행동 전에 항복하는 경우처럼 시작 대사가 없는 전투) 새 턴을 만들어서 붙인다.
export function appendToLastTurn(turns, line) {
    if (turns.length === 0) return [[line]];
    return [...turns.slice(0, -1), [...turns[turns.length - 1], line]];
}
