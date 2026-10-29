// 펀치글러브: 들고 있으면 펀치류 기술의 위력이 10% 오르고, 그 기술은 접촉하지 않는 것으로 본다
import fs from "fs";
import path from "path";
import { doTurn, getBaseStats, hpCalc } from "shared";
import { getAbility } from "shared/abilities";
import { makesContact } from "shared/abilities";
import { damageCalc } from "shared/damagecalc";
import { ITEM_POOL, REAL_SET_ONLY_ITEMS, getFlingPower } from "shared/iteminfo";
import { PUNCH_MOVES } from "shared/movemechanics";

const dir = path.join(__dirname, "../../../api/src/main/resources/data/");
const read = (f) => JSON.parse(fs.readFileSync(dir + f, "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const ITEMS = read("items.json");
const clone = (x) => JSON.parse(JSON.stringify(x));
function mon(species, moves, { item = null, ability = null, hp = null } = {}) {
    const p = clone(POKEMON.get(species));
    p.base_stats = getBaseStats(p);
    const max = hp || hpCalc(p.base_stats[0]) * 3;
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

describe("도구 자료", () => {
    test("items.json에 펀치글러브가 있다", () => {
        const item = ITEMS.find((i) => i.name === "punching-glove");
        expect(item).toBeTruthy();
        expect(item.korean_name).toBe("펀치글러브");
        expect(item.category.name).toBe("held-items");
        expect(ITEMS.filter((i) => i.name === "punching-glove")).toHaveLength(1);
    });
    test("효과가 있는 도구 목록에 있고, 무작위로는 나눠 주지 않는다 (세트에서만)", () => {
        expect(ITEM_POOL).toContain("punching-glove");
        expect(REAL_SET_ONLY_ITEMS.has("punching-glove")).toBe(true);
    });
    test("던지기 위력은 30이다", () => {
        expect(getFlingPower("punching-glove")).toBe(30);
    });
});

describe("펀치류 기술의 위력이 10% 오른다", () => {
    const foe = () => mon("snorlax", ["splash"]);
    test("펀치류 기술의 피해가 약 10% 늘어난다", () => {
        const plain = mon("hitmonchan", ["ice-punch"]);
        const glove = mon("hitmonchan", ["ice-punch"], { item: "punching-glove" });
        const base = damageCalc(plain, foe(), plain.moveset[0]);
        const boosted = damageCalc(glove, foe(), glove.moveset[0]);
        expect(boosted).toBeGreaterThan(base);
        expect(boosted / base).toBeGreaterThan(1.05);
        expect(boosted / base).toBeLessThan(1.15);
    });
    test("펀치류가 아닌 기술은 그대로다", () => {
        const plain = mon("hitmonchan", ["body-slam"]);
        const glove = mon("hitmonchan", ["body-slam"], { item: "punching-glove" });
        expect(damageCalc(glove, foe(), glove.moveset[0])).toBe(damageCalc(plain, foe(), plain.moveset[0]));
    });
    test("힘의머리띠와 같이 곱해지지는 않는다 (한 마리는 도구를 하나만 든다): 다른 도구는 펀치를 올리지 않는다", () => {
        const band = mon("hitmonchan", ["ice-punch"], { item: "muscle-band" });
        const glove = mon("hitmonchan", ["ice-punch"], { item: "punching-glove" });
        // 둘 다 10%: 같은 크기로 오른다
        expect(damageCalc(glove, foe(), glove.moveset[0])).toBe(damageCalc(band, foe(), band.moveset[0]));
    });
    test("펀치류 목록에 대표적인 펀치 기술이 들어 있다", () => {
        for (const name of ["fire-punch", "ice-punch", "thunder-punch", "drain-punch", "mach-punch", "bullet-punch", "meteor-mash", "focus-punch"]) {
            expect(PUNCH_MOVES.has(name)).toBe(true);
        }
    });
});

describe("펀치류 기술은 접촉하지 않는 것으로 본다", () => {
    test("글러브를 들면 펀치류 기술은 접촉이 아니다", () => {
        const glove = mon("hitmonchan", ["fire-punch"], { item: "punching-glove" });
        expect(makesContact(glove, glove.moveset[0])).toBe(false);
    });
    test("글러브가 없으면 같은 기술이 접촉이다 (기준)", () => {
        const plain = mon("hitmonchan", ["fire-punch"]);
        expect(makesContact(plain, plain.moveset[0])).toBe(true);
    });
    test("글러브를 들어도 펀치류가 아닌 접촉 기술은 그대로 접촉이다", () => {
        const glove = mon("hitmonchan", ["body-slam"], { item: "punching-glove" });
        expect(makesContact(glove, glove.moveset[0])).toBe(true);
    });
    test("울퉁불퉁멧을 든 상대를 때려도 반동 피해를 받지 않는다", () => {
        const run = (item) => {
            const attacker = mon("hitmonchan", ["fire-punch"], { item });
            const target = mon("snorlax", ["splash"], { item: "rocky-helmet" });
            const A = [attacker], B = [target];
            doTurn(A, B, attacker.moveset[0]);
            return attacker.hp[1] - attacker.hp[0];
        };
        expect(run(null)).toBeGreaterThan(0); // 기준: 맞히면 울퉁불퉁멧에 다친다
        expect(run("punching-glove")).toBe(0);
    });
    test("접촉하면 발동하는 특성(거친피부)도 발동하지 않는다", () => {
        const run = (item) => {
            const attacker = mon("hitmonchan", ["fire-punch"], { item });
            const target = mon("snorlax", ["splash"], { ability: "rough-skin" });
            doTurn([attacker], [target], attacker.moveset[0]);
            return attacker.hp[1] - attacker.hp[0];
        };
        expect(run(null)).toBeGreaterThan(0);
        expect(run("punching-glove")).toBe(0);
    });
});
