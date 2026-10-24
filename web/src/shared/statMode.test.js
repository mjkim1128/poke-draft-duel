// 능력치 모드(원본 종족값 / 합계 600 보정)를 확인한다.
import fs from "fs";
import path from "path";
import { getBaseStats, baseStatTotalTo600 } from "shared";
import { setNormalizedStats, isNormalizedStats } from "shared/statMode";

const POKEMON = new Map(JSON.parse(fs.readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/pokemon.json"), "utf8")).map((p) => [p.name, p]));
const sum = (a) => a.reduce((x, y) => x + y, 0);

afterEach(() => setNormalizedStats(false));

test("기본은 원본 종족값이다", () => {
    expect(isNormalizedStats()).toBe(false);
    expect(getBaseStats(POKEMON.get("breloom"))).toEqual([60, 130, 80, 60, 60, 70]);
});

test("합계 600 모드를 켜면 여섯 능력치의 합이 600에 가깝다", () => {
    setNormalizedStats(true);
    expect(isNormalizedStats()).toBe(true);
    const stats = getBaseStats(POKEMON.get("breloom"));
    expect(stats).toEqual([78, 169, 104, 78, 78, 91]);
    expect(sum(stats)).toBeGreaterThanOrEqual(595);
    expect(sum(stats)).toBeLessThanOrEqual(600);
});

test("보정 함수는 능력치 사이의 비율을 유지한다", () => {
    const [hp, atk] = baseStatTotalTo600(POKEMON.get("garchomp"));
    expect(atk).toBeGreaterThan(hp);
});
