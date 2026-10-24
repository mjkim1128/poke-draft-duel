// 구애스카프가 스피드를 1.5배로 올리고, 실제 행동 순서에 반영되는지 확인한다.
import fs from "fs";
import path from "path";
import { doTurn, getBaseStats, hpCalc } from "shared";
import { effectiveSpeed } from "shared/speed";

const DATA = "../../../api/src/main/resources/data/";
const read = (file) => JSON.parse(fs.readFileSync(path.join(__dirname, DATA + file), "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const ITEMS = new Map(read("items.json").map((i) => [i.name, i]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const clone = (x) => JSON.parse(JSON.stringify(x));
const move = (name) => clone(MOVES.get(name));

function mon(species, item, moves, ability = null) {
    const p = clone(POKEMON.get(species));
    p.base_stats = getBaseStats(p);
    p.hp = [hpCalc(p.base_stats[0]) * 4, hpCalc(p.base_stats[0]) * 4];
    p.stat_levels = Array(7).fill(0);
    p.item = item ? clone(ITEMS.get(item)) : null;
    p.originalItem = p.item;
    p.ability = ability ? { name: ability } : null;
    p.baseAbility = p.ability;
    p.moveset = moves.map(move);
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, lastMoveName: null, moveRepeatCount: 0 });
    return p;
}

test("구애스카프를 들면 스피드가 1.5배가 된다", () => {
    const plain = effectiveSpeed(mon("garchomp", null, ["tackle"]));
    const scarf = effectiveSpeed(mon("garchomp", "choice-scarf", ["tackle"]));
    expect(scarf).toBe(Math.floor(plain * 1.5));
});

test("도구가 사라지면(예: 탁쳐서떨구기) 스카프 효과도 사라진다", () => {
    const p = mon("garchomp", "choice-scarf", ["tackle"]);
    const withScarf = effectiveSpeed(p);
    p.item = null;
    expect(effectiveSpeed(p)).toBeLessThan(withScarf);
});

test("스카프를 든 느린 포켓몬이 더 빠른 포켓몬보다 먼저 움직인다", () => {
    // 스카프를 들면 추월하는 조합을 찾는다
    const fast = mon("garchomp", null, ["tackle"]);
    const slow = mon("snorlax", "choice-scarf", ["tackle"]);
    const slowPlain = mon("snorlax", null, ["tackle"]);
    const fs0 = effectiveSpeed(fast);
    expect(effectiveSpeed(slowPlain)).toBeLessThan(fs0);
    expect(effectiveSpeed(slow)).toBeGreaterThan(effectiveSpeed(slowPlain));

    const first = (a, b) => {
        const frames = doTurn([a, mon("blissey", null, ["splash"])], [b, mon("blissey", null, ["splash"])], move("tackle"));
        return frames;
    };
    const order = (me) => {
        const log = first(me, mon("garchomp", null, ["tackle"])).map((f) => f.text || "").join("\n");
        return log;
    };
    // 두 쪽 모두 몸통박치기를 쓴다. 로그에서 먼저 나오는 쪽이 먼저 움직인 쪽이다
    const withScarf = order(mon("snorlax", "choice-scarf", ["tackle"]));
    const without = order(mon("snorlax", null, ["tackle"]));
    const idx = (t, name) => t.toLowerCase().indexOf(name);
    expect(idx(withScarf, "snorlax")).toBeLessThan(idx(withScarf, "garchomp") < 0 ? Infinity : idx(withScarf, "garchomp"));
    expect(idx(without, "garchomp")).toBeLessThan(idx(without, "snorlax") < 0 ? Infinity : idx(without, "snorlax"));
});
