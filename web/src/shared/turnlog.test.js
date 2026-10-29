import { appendToLastTurn } from "./turnlog";

test("마지막 턴에 한 줄을 붙인다 (원래 기록은 바꾸지 않는다)", () => {
    const turns = [["a"], ["b", "c"]];
    const next = appendToLastTurn(turns, "d");
    expect(next).toEqual([["a"], ["b", "c", "d"]]);
    expect(turns).toEqual([["a"], ["b", "c"]]);
});
test("기록이 비어 있으면(첫 행동 전에 항복) 새 턴을 만든다", () => {
    expect(appendToLastTurn([], "You Lose!")).toEqual([["You Lose!"]]);
});
