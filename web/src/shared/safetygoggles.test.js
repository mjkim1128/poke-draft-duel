// 방진고글: 가루 기술이 통하지 않고, 모래바람과 싸라기눈의 피해를 받지 않는다 (특성 방진과 같은 효과의 도구)
import fs from "fs";
import path from "path";
import { doTurn, getBaseStats, hpCalc } from "shared";
import { getAbility, isPowderImmune } from "shared/abilities";
import { weatherEndOfTurnDamage } from "shared/field";
import { ITEM_POOL, REAL_SET_ONLY_ITEMS, getFlingPower } from "shared/iteminfo";

const dir = path.join(__dirname, "../../../api/src/main/resources/data/");
const read = (f) => JSON.parse(fs.readFileSync(dir + f, "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const ITEMS = read("items.json");
const clone = (x) => JSON.parse(JSON.stringify(x));
function mon(species, moves, { item = null, ability = null } = {}) {
    const p = clone(POKEMON.get(species));
    p.base_stats = getBaseStats(p);
    const max = hpCalc(p.base_stats[0]) * 3;
    p.hp = [max, max];
    p.stat_levels = Array(7).fill(0);
    p.item = item ? { name: item } : null;
    p.originalItem = p.item;
    p.ability = ability ? getAbility(ability) : null;
    p.baseAbility = p.ability;
    p.moveset = moves.map((m) => clone(MOVES.get(m)));
    for (const m of p.moveset) m.accuracy = null;
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, actionsSinceSwitch: 1, revealed: true });
    return p;
}
const sand = { weather: { name: "sand", turns: 5 } };
const hail = { weather: { name: "hail", turns: 5 } };

beforeEach(() => jest.spyOn(Math, "random").mockReturnValue(0.5));
afterEach(() => jest.restoreAllMocks());

describe("도구 자료", () => {
    test("items.json에 방진고글이 있다 (한 번만, 다른 도구와 id가 겹치지 않는다)", () => {
        const item = ITEMS.find((i) => i.name === "safety-goggles");
        expect(item).toBeTruthy();
        expect(item.korean_name).toBe("방진고글");
        expect(item.category.name).toBe("held-items");
        expect(ITEMS.filter((i) => i.name === "safety-goggles")).toHaveLength(1);
        expect(ITEMS.filter((i) => i.id === item.id)).toHaveLength(1);
    });
    test("효과가 있는 도구 목록에 있고, 무작위로는 나눠 주지 않는다 (세트에서만)", () => {
        expect(ITEM_POOL).toContain("safety-goggles");
        expect(REAL_SET_ONLY_ITEMS.has("safety-goggles")).toBe(true);
    });
    test("던지기 위력은 80이다", () => {
        expect(getFlingPower("safety-goggles")).toBe(80);
    });
});

describe("가루 기술이 통하지 않는다", () => {
    test("판정: 방진고글을 든 포켓몬은 가루 기술에 면역이다 (없으면 아니다)", () => {
        expect(isPowderImmune(mon("snorlax", ["splash"], { item: "safety-goggles" }), null)).toBe(true);
        expect(isPowderImmune(mon("snorlax", ["splash"]), null)).toBe(false);
    });
    test("버섯포자: 방진고글을 들면 잠들지 않는다", () => {
        const holder = mon("snorlax", ["splash"], { item: "safety-goggles" });
        const attacker = mon("breloom", ["spore"]);
        doTurn([attacker], [holder], attacker.moveset[0]);
        expect(holder.status).toBeNull();
    });
    test("기준: 도구가 없으면 같은 기술에 잠든다", () => {
        const holder = mon("snorlax", ["splash"]);
        const attacker = mon("breloom", ["spore"]);
        doTurn([attacker], [holder], attacker.moveset[0]);
        expect(holder.status && holder.status.name).toBe("sleep");
    });
    test("틀깨기 같은 특성 무시에도 막는다 (도구의 효과이기 때문에)", () => {
        const holder = mon("snorlax", ["splash"], { item: "safety-goggles" });
        const attacker = mon("breloom", ["spore"], { ability: "mold-breaker" });
        doTurn([attacker], [holder], attacker.moveset[0]);
        expect(holder.status).toBeNull();
    });
    test("가루가 아닌 상태이상 기술(전기자석파)은 평소처럼 통한다", () => {
        const holder = mon("snorlax", ["splash"], { item: "safety-goggles" });
        const attacker = mon("jolteon", ["thunder-wave"]);
        doTurn([attacker], [holder], attacker.moveset[0]);
        expect(holder.status && holder.status.name).toBe("paralysis");
    });
});

describe("모래바람과 싸라기눈의 피해를 받지 않는다", () => {
    test("모래바람", () => {
        expect(weatherEndOfTurnDamage(mon("snorlax", ["splash"]), sand)).toBeGreaterThan(0);
        expect(weatherEndOfTurnDamage(mon("snorlax", ["splash"], { item: "safety-goggles" }), sand)).toBe(0);
    });
    test("싸라기눈", () => {
        expect(weatherEndOfTurnDamage(mon("snorlax", ["splash"]), hail)).toBeGreaterThan(0);
        expect(weatherEndOfTurnDamage(mon("snorlax", ["splash"], { item: "safety-goggles" }), hail)).toBe(0);
    });
});
