// 기술 칸의 상성 표시: 4배 ★, 2배 ◎, 1배 ○, 1/2배 △, 1/4배 ▼, 변화기는 표시하지 않는다
import { effectMark } from "shared/effectmark";

const attack = { damage_class: { name: "special" } };
const status = { damage_class: { name: "status" } };

test("배율마다 정해진 표시", () => {
    expect(effectMark(attack, 4)).toBe("★");
    expect(effectMark(attack, 2)).toBe("◎");
    expect(effectMark(attack, 1)).toBe("○");
    expect(effectMark(attack, 0.5)).toBe("△");
    expect(effectMark(attack, 0.25)).toBe("▼");
});
test("효과가 없으면 ✕", () => {
    expect(effectMark(attack, 0)).toBe("✕");
});
test("변화기는 표시하지 않는다 (배율이 얼마든)", () => {
    for (const m of [0, 0.5, 1, 2, 4]) expect(effectMark(status, m)).toBeNull();
});
test("기술이나 배율이 없으면 표시하지 않는다", () => {
    expect(effectMark(null, 2)).toBeNull();
    expect(effectMark(attack, undefined)).toBeNull();
    expect(effectMark(attack, NaN)).toBeNull();
});
