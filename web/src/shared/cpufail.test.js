// 컴퓨터는 반드시 실패하는 기술을 고르지 않는다 (사이코필드의 선제 기술, 미스트필드나 일렉트릭필드의 수면기 등)
import fs from "fs";
import path from "path";
import { doTurn, ensureField, setTerrain, getBaseStats, hpCalc } from "shared";
import { certainlyFails } from "shared/cpufail";
import { strongestMove } from "shared/computermove";
import { chooseSupportMove } from "shared/cpustatus";

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
    for (const m of p.moveset) m.accuracy = null;
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, lastMoveName: null, moveRepeatCount: 0 });
    return p;
}
const move = (name) => clone(MOVES.get(name));
const withTerrain = (name, ...teams) => {
    const field = ensureField(...teams);
    setTerrain(field, name, null, []);
    return field;
};

describe("반드시 실패하는 기술 알아보기", () => {
    test("사이코필드: 땅에 닿은 상대에게 선제 기술은 실패한다", () => {
        const me = [mon("garchomp", ["accelerock"])];
        const foe = [mon("snorlax", ["splash"])];
        const field = withTerrain("psychic", me, foe);
        expect(certainlyFails(move("accelerock"), me[0], foe[0], field)).toBe(true);
        expect(certainlyFails(move("earthquake"), me[0], foe[0], field)).toBe(false);
        // 떠 있는 상대에게는 통한다
        expect(certainlyFails(move("accelerock"), me[0], mon("pidgeot", ["splash"]), field)).toBe(false);
    });
    test("사이코필드: 짓궂은마음이 붙은 변화기도 선제 기술이라 실패한다", () => {
        const me = [mon("klefki", ["thunder-wave"], "prankster")];
        const foe = [mon("snorlax", ["splash"])];
        const field = withTerrain("psychic", me, foe);
        expect(certainlyFails(move("thunder-wave"), me[0], foe[0], field)).toBe(true);
        const plain = mon("klefki", ["thunder-wave"]);
        expect(certainlyFails(move("thunder-wave"), plain, foe[0], field)).toBe(false);
    });
    test("미스트필드: 땅에 닿은 상대에게 하품, 수면기, 독 등 상태이상 기술은 실패한다", () => {
        const me = [mon("blissey", ["yawn"])];
        const foe = [mon("snorlax", ["splash"])];
        const field = withTerrain("misty", me, foe);
        for (const name of ["yawn", "spore", "toxic", "thunder-wave", "will-o-wisp"]) {
            expect(certainlyFails(move(name), me[0], foe[0], field)).toBe(true);
        }
        // 사슬묶기, 도발은 막지 않는다
        expect(certainlyFails(move("disable"), me[0], foe[0], field)).toBe(false);
    });
    test("일렉트릭필드: 땅에 닿은 상대에게 하품, 수면기는 실패하지만 다른 상태이상은 통한다", () => {
        const me = [mon("blissey", ["yawn"])];
        const foe = [mon("snorlax", ["splash"])];
        const field = withTerrain("electric", me, foe);
        expect(certainlyFails(move("yawn"), me[0], foe[0], field)).toBe(true);
        expect(certainlyFails(move("spore"), me[0], foe[0], field)).toBe(true);
        expect(certainlyFails(move("toxic"), me[0], foe[0], field)).toBe(false);
    });
    test("안전지대, 대타출동, 황금몸이 막는 변화기도 알아본다", () => {
        const me = [mon("blissey", ["toxic"])];
        const foeTeam = [mon("snorlax", ["splash"])];
        ensureField(me, foeTeam);
        foeTeam.safeguardTurns = 3;
        expect(certainlyFails(move("toxic"), me[0], foeTeam[0], null, foeTeam)).toBe(true);
        foeTeam.safeguardTurns = 0;
        foeTeam[0].substitute = { hp: 50 };
        expect(certainlyFails(move("toxic"), me[0], foeTeam[0], null, foeTeam)).toBe(true);
        expect(certainlyFails(move("tackle"), me[0], foeTeam[0], null, foeTeam)).toBe(false);
        foeTeam[0].substitute = null;
        expect(certainlyFails(move("toxic"), me[0], mon("gholdengo", ["splash"], "good-as-gold"), null, foeTeam)).toBe(true);
    });
});

describe("컴퓨터의 기술 선택", () => {
    test("사이코필드에서 가장 센 공격이 선제 기술이어도 다른 공격을 고른다", () => {
        const cpu = [mon("garchomp", ["first-impression", "tackle"])];
        const human = [mon("snorlax", ["splash"])];
        withTerrain("psychic", human, cpu);
        // 만나자마자(위력 90)가 몸통박치기(40)보다 세지만 사이코필드에서는 실패한다
        expect(strongestMove(human, cpu).name).toBe("tackle");
    });
    test("떠 있는 상대에게는 선제 기술이 가장 세면 그대로 고른다", () => {
        const cpu = [mon("garchomp", ["first-impression", "tackle"])];
        const human = [mon("pidgeot", ["splash"])];
        withTerrain("psychic", human, cpu);
        expect(strongestMove(human, cpu).name).toBe("first-impression");
    });
    test("고를 기술이 모두 실패할 기술뿐이면 그중에서라도 고른다", () => {
        const cpu = [mon("garchomp", ["first-impression", "accelerock"])];
        const human = [mon("snorlax", ["splash"])];
        withTerrain("psychic", human, cpu);
        expect(["first-impression", "accelerock"]).toContain(strongestMove(human, cpu).name);
    });
    test("일렉트릭필드에서는 하품을 쓰지 않는다 (미스트필드에서는 독도 쓰지 않는다)", () => {
        const cpu = [mon("blissey", ["yawn", "toxic"])];
        const human = [mon("snorlax", ["tackle"])];
        withTerrain("electric", human, cpu);
        expect(chooseSupportMove(human, cpu)).not.toBe(cpu[0].moveset[0]);
        const cpu2 = [mon("blissey", ["toxic"])];
        const human2 = [mon("snorlax", ["tackle"])];
        withTerrain("misty", human2, cpu2);
        expect(chooseSupportMove(human2, cpu2)).toBeNull();
    });
});

describe("사이코필드: 선제 기술과 순서", () => {
    test("같은 턴에 사이코필드를 까는 쪽보다 선제 기술이 먼저 나가면 그 턴에는 맞는다 (필드가 아직 없다)", () => {
        const me = [mon("espathra", ["psychic-terrain"])];
        const foe = [mon("garchomp", ["accelerock"])];
        const text = doTurn(me, foe, me[0].moveset[0]).join(" ");
        expect(text).not.toContain("protected by the Psychic Terrain");
        expect(me[0].hp[0]).toBeLessThan(me[0].hp[1]);
    });
    test("필드가 깔린 다음 턴부터는 선제 기술이 막힌다", () => {
        const me = [mon("espathra", ["psychic-terrain", "splash"])];
        const foe = [mon("garchomp", ["accelerock"])];
        doTurn(me, foe, me[0].moveset[0]);
        const hpBefore = me[0].hp[0];
        const text = doTurn(me, foe, me[0].moveset[1]).join(" ");
        expect(text).toContain("protected by the Psychic Terrain");
        expect(me[0].hp[0]).toBe(hpBefore);
    });
    test("짓궂은마음이 붙은 변화기도 사이코필드에서는 땅에 닿은 상대에게 막힌다", () => {
        const me = [mon("snorlax", ["splash"])];
        const foe = [mon("klefki", ["thunder-wave"], "prankster")];
        withTerrain("psychic", me, foe);
        const text = doTurn(me, foe, me[0].moveset[0]).join(" ");
        expect(text).toContain("protected by the Psychic Terrain");
        expect(me[0].status).toBeFalsy();
    });
});
