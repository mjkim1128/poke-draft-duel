// 공격으로 상대를 쓰러뜨린 턴에도 턴 끝의 일(화상, 독, 날씨 피해)은 남은 쪽에 들어간다
import fs from "fs";
import path from "path";
import { doTurn, getBaseStats, hpCalc } from "shared";
import { getAbility } from "shared/abilities";

const dir = path.join(__dirname, "../../../api/src/main/resources/data/");
const read = (f) => JSON.parse(fs.readFileSync(dir + f, "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const clone = (x) => JSON.parse(JSON.stringify(x));
function mon(species, moves, { hp = 3, speed } = {}) {
    const p = clone(POKEMON.get(species));
    p.base_stats = getBaseStats(p);
    if (speed) p.base_stats[5] = speed;
    const max = hpCalc(p.base_stats[0]) * hp;
    p.hp = [max, max];
    p.stat_levels = Array(7).fill(0);
    p.item = null;
    p.originalItem = null;
    p.ability = getAbility("pressure");
    p.baseAbility = p.ability;
    p.moveset = moves.map((m) => clone(MOVES.get(m)));
    for (const m of p.moveset) m.accuracy = null;
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, actionsSinceSwitch: 1, revealed: true });
    return p;
}

beforeEach(() => jest.spyOn(Math, "random").mockReturnValue(0.5));
afterEach(() => jest.restoreAllMocks());

// 빠른 쪽(내 포켓몬)이 느린 상대를 한 방에 쓰러뜨리는 턴
function killingTurn(status) {
    const attacker = mon("jolteon", ["thunderbolt"], { speed: 500 });
    attacker.status = status;
    const target = mon("snorlax", ["splash"], { hp: 1, speed: 1 });
    target.hp = [1, target.hp[1]];
    const before = attacker.hp[0];
    const text = doTurn([attacker], [target], attacker.moveset[0]);
    return { attacker, target, before, lines: text.join("\n").split("\n") };
}

test("상대를 쓰러뜨린 턴에도 내 화상 피해가 들어간다", () => {
    const { attacker, target, before, lines } = killingTurn({ name: "burn", counter: 1 });
    expect(target.hp[0]).toBe(0);
    expect(attacker.hp[0]).toBeLessThan(before);
    expect(lines.some((l) => /hurt by its burn/i.test(l))).toBe(true);
    // 쓰러진 상대는 움직이지 못했다
    expect(lines.filter((l) => /used Splash/.test(l))).toHaveLength(0);
});

test("상대를 쓰러뜨린 턴에도 내 독 피해가 들어간다", () => {
    const { attacker, before } = killingTurn({ name: "poison", counter: 1 });
    expect(attacker.hp[0]).toBeLessThan(before);
});

test("상태이상이 없으면 그대로 (남은 쪽 체력은 그대로)", () => {
    const { attacker, before } = killingTurn(null);
    expect(attacker.hp[0]).toBe(before);
});

test("내 포켓몬이 쓰러진 턴에도 (상대가 먼저 움직여 쓰러뜨린 경우) 상대의 화상 피해가 들어간다", () => {
    const cpu = mon("jolteon", ["thunderbolt"], { speed: 500 });
    cpu.status = { name: "burn", counter: 1 };
    const mine = mon("snorlax", ["splash"], { hp: 1, speed: 1 });
    mine.hp = [1, mine.hp[1]];
    const before = cpu.hp[0];
    doTurn([mine], [cpu], mine.moveset[0]);
    expect(mine.hp[0]).toBe(0);
    expect(cpu.hp[0]).toBeLessThan(before);
});
