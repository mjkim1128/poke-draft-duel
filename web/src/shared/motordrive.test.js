// 전기엔진(motor-drive): 전기 타입 기술을 받으면 피해를 받지 않고 스피드가 한 단계 오른다
import fs from "fs";
import path from "path";
import { doTurn, getBaseStats, hpCalc } from "shared";
import { getAbility } from "shared/abilities";
import { damageCalc } from "shared/damagecalc";
import { bestDamage } from "shared/cpusetup";

const dir = path.join(__dirname, "../../../api/src/main/resources/data/");
const read = (f) => JSON.parse(fs.readFileSync(dir + f, "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const ABILITY_NAMES = JSON.parse(fs.readFileSync(path.join(__dirname, "ability_names.json"), "utf8"));
const clone = (x) => JSON.parse(JSON.stringify(x));
function mon(species, moves, ability = null) {
    const p = clone(POKEMON.get(species));
    p.base_stats = getBaseStats(p);
    p.hp = [hpCalc(p.base_stats[0]) * 3, hpCalc(p.base_stats[0]) * 3];
    p.stat_levels = Array(7).fill(0);
    p.item = null;
    p.originalItem = null;
    p.ability = ability ? getAbility(ability) : null;
    p.baseAbility = p.ability;
    p.moveset = moves.map((m) => clone(MOVES.get(m)));
    for (const m of p.moveset) m.accuracy = null;
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, actionsSinceSwitch: 1, revealed: true });
    return p;
}
const SPEED = 4;

test("특성 이름과 설명이 있다", () => {
    expect(ABILITY_NAMES["motor-drive"].ko).toBe("전기엔진");
    expect(getAbility("motor-drive")).toBeTruthy();
});

describe("전기 타입 기술은 맞지 않고 스피드가 오른다", () => {
    test("10만볼트: 피해가 없고 스피드가 1단계 오른다", () => {
        const holder = mon("electivire", ["splash"], "motor-drive");
        const attacker = mon("jolteon", ["thunderbolt"]);
        const text = doTurn([attacker], [holder], attacker.moveset[0]).join(" ");
        expect(holder.hp[0]).toBe(holder.hp[1]);
        expect(holder.stat_levels[SPEED]).toBe(1);
        expect(text).toMatch(/Speed/i);
    });
    test("전기가 아닌 기술은 평소처럼 맞고 스피드는 그대로다", () => {
        const holder = mon("electivire", ["splash"], "motor-drive");
        const attacker = mon("snorlax", ["body-slam"]);
        doTurn([attacker], [holder], attacker.moveset[0]);
        expect(holder.hp[0]).toBeLessThan(holder.hp[1]);
        expect(holder.stat_levels[SPEED]).toBe(0);
    });
    test("전기 변화기(전기자석파)도 받아낸다: 마비되지 않고 스피드가 오른다", () => {
        const holder = mon("snorlax", ["splash"], "motor-drive"); // 전기 타입이 아니어서 원래는 마비된다
        const attacker = mon("jolteon", ["thunder-wave"]);
        doTurn([attacker], [holder], attacker.moveset[0]);
        expect(holder.status).toBeNull();
        expect(holder.stat_levels[SPEED]).toBe(1);
    });
    test("이미 스피드가 최대(+6)여도 피해는 받지 않는다", () => {
        const holder = mon("electivire", ["splash"], "motor-drive");
        holder.stat_levels[SPEED] = 6;
        const attacker = mon("jolteon", ["thunderbolt"]);
        doTurn([attacker], [holder], attacker.moveset[0]);
        expect(holder.hp[0]).toBe(holder.hp[1]);
        expect(holder.stat_levels[SPEED]).toBe(6);
    });
    test("여러 번 받으면 그때마다 오른다", () => {
        const holder = mon("electivire", ["splash"], "motor-drive");
        const attacker = mon("jolteon", ["thunderbolt"]);
        doTurn([attacker], [holder], attacker.moveset[0]);
        doTurn([attacker], [holder], attacker.moveset[0]);
        expect(holder.stat_levels[SPEED]).toBe(2);
        expect(holder.hp[0]).toBe(holder.hp[1]);
    });
});

describe("특성을 무시하는 상대와 컴퓨터의 계산", () => {
    test("틀깨기 특성의 상대는 전기엔진을 무시하고 때린다", () => {
        const holder = mon("electivire", ["splash"], "motor-drive");
        const attacker = mon("jolteon", ["thunderbolt"], "mold-breaker");
        doTurn([attacker], [holder], attacker.moveset[0]);
        expect(holder.hp[0]).toBeLessThan(holder.hp[1]);
        expect(holder.stat_levels[SPEED]).toBe(0);
    });
    test("컴퓨터의 피해 계산에서도 전기 기술은 0이다 (불필요하게 전기 기술을 쓰지 않게)", () => {
        const holder = mon("snorlax", ["splash"], "motor-drive");
        const attacker = mon("jolteon", ["thunderbolt"]);
        expect(damageCalc(attacker, holder, attacker.moveset[0])).toBe(0);
        expect(bestDamage(attacker, holder, null)).toBe(0);
    });
    test("전기엔진이 없으면 같은 기술이 먹힌다 (기준)", () => {
        const plain = mon("snorlax", ["splash"]);
        const attacker = mon("jolteon", ["thunderbolt"]);
        expect(damageCalc(attacker, plain, attacker.moveset[0])).toBeGreaterThan(0);
    });
});
