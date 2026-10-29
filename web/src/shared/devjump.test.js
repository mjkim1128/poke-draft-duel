// 플레이 시험용 바로가기: 주소를 읽는 규칙
import { readDevJump } from "./devjump";

test("보스가 있는 층이면 그 보스 화면으로 간다", () => {
    expect(readDevJump("?boss=30")).toEqual({ screen: "boss", floor: 30, easy: false, resets: null, ms: null });
    expect(readDevJump("?boss=5").floor).toBe(5);
});
test("여정 기록을 정한다 (횟수와 시간을 초로)", () => {
    expect(readDevJump("?boss=30&resets=7&time=5025")).toEqual({ screen: "boss", floor: 30, easy: false, resets: 7, ms: 5025000 });
});
test("보스가 없는 층이나 이상한 값은 무시한다", () => {
    expect(readDevJump("?boss=7")).toBeNull();
    expect(readDevJump("?boss=abc")).toBeNull();
    expect(readDevJump("?boss=")).toBeNull();
    expect(readDevJump("")).toBeNull();
    expect(readDevJump(undefined)).toBeNull();
});
test("값이 숫자가 아니면 횟수와 시간은 정하지 않는다", () => {
    const jump = readDevJump("?boss=30&resets=x&time=-5");
    expect(jump.resets).toBeNull();
    expect(jump.ms).toBeNull();
});
test("클리어 화면으로 바로 간다", () => {
    expect(readDevJump("?clear=1")).toEqual({ screen: "clear", easy: false });
    expect(readDevJump("?clear=1&easy=1")).toEqual({ screen: "clear", easy: true });
});
