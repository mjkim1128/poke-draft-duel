// 리베로(프로틴): 쓰려는 기술과 타입이 이미 똑같은(단일) 타입이면 발동하지 않는다. 타입이 달라질 때만 바뀌고, 한 번 나오는 동안 한 번만 바뀐다.
import fs from "fs";
import path from "path";
import { doTurn, getBaseStats, hpCalc } from "shared";

const read = (file) => JSON.parse(fs.readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/" + file), "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const clone = (x) => JSON.parse(JSON.stringify(x));

function mon(species, moves, ability = null) {
    const p = clone(POKEMON.get(species));
    p.base_stats = getBaseStats(p);
    p.hp = [hpCalc(p.base_stats[0]) * 4, hpCalc(p.base_stats[0]) * 4];
    p.stat_levels = Array(7).fill(0);
    p.item = null;
    p.originalItem = null;
    p.ability = ability ? { name: ability } : null;
    p.baseAbility = p.ability;
    p.moveset = moves.map((m) => clone(MOVES.get(m)));
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, lastMoveName: null, moveRepeatCount: 0 });
    return p;
}
const typesOf = (p) => p.types.map((t) => t.type.name);
const foe = () => [mon("snorlax", ["splash"])];

test("에이스번(불꽃 단일)이 불꽃 기술을 쓰면 리베로가 발동하지 않는다", () => {
    const ace = mon("cinderace", ["flamethrower", "u-turn"], "libero");
    expect(typesOf(ace)).toEqual(["fire"]);
    const text = doTurn([ace], foe(), ace.moveset[0]).join(" ");
    expect(text).not.toMatch(/type changed/);
    expect(typesOf(ace)).toEqual(["fire"]);
    expect(ace.proteanUsed).toBeFalsy(); // 발동하지 않았으니 이번 등장 동안의 한 번을 쓴 것도 아니다
});

test("불꽃 기술로 발동하지 않은 뒤 다른 타입 기술을 쓰면 그때 바뀐다", () => {
    const ace = mon("cinderace", ["flamethrower", "u-turn"], "libero");
    doTurn([ace], foe(), ace.moveset[0]);
    const text = doTurn([ace], foe(), ace.moveset[1]).join(" ");
    expect(text).toMatch(/type changed to bug/);
    expect(typesOf(ace)).toEqual(["bug"]);
});

test("한 번 바뀐 뒤에는 같은 등장 동안 다시 바뀌지 않는다", () => {
    const ace = mon("cinderace", ["flamethrower", "u-turn"], "libero");
    doTurn([ace], foe(), ace.moveset[1]);
    expect(typesOf(ace)).toEqual(["bug"]);
    doTurn([ace], foe(), ace.moveset[0]);
    expect(typesOf(ace)).toEqual(["bug"]);
});

test("복합 타입(불꽃/비행)은 불꽃 기술을 써도 불꽃 단일 타입으로 바뀐다 (타입이 이미 같은 단일 타입이 아니므로)", () => {
    const zard = mon("charizard", ["flamethrower"], "libero");
    expect(typesOf(zard)).toEqual(["fire", "flying"]);
    doTurn([zard], foe(), zard.moveset[0]);
    expect(typesOf(zard)).toEqual(["fire"]);
});

test("프로틴도 같다", () => {
    const ace = mon("cinderace", ["flamethrower"], "protean");
    const text = doTurn([ace], foe(), ace.moveset[0]).join(" ");
    expect(text).not.toMatch(/type changed/);
    expect(typesOf(ace)).toEqual(["fire"]);
});
