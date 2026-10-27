// 다투곰 붉은달의 모습: 심안(고스트에게 노말/격투가 맞고, 회피 상승을 무시하고, 명중이 떨어지지 않는다)과 블러드문(연속으로 쓸 수 없다)
import fs from "fs";
import path from "path";
import { doTurn, getBaseStats, hpCalc } from "shared";
import { damageCalc, typeEffectiveness } from "shared/damagecalc";
import { hitChance } from "shared/accuracy";
import { getUsableMoves } from "shared/pp";
import { moveConditionBlock } from "shared/movecondition";
import { makeMove } from "shared/computermove";
import { certainlyFails } from "shared/cpufail";
import { getAbility } from "shared/abilities";

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
    p.ability = ability ? getAbility(ability) : null;
    p.baseAbility = p.ability;
    p.moveset = moves.map((m) => clone(MOVES.get(m)));
    for (const m of p.moveset) m.accuracy = null;
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, lastMoveName: null, moveRepeatCount: 0, actionsSinceSwitch: 0 });
    return p;
}
const move = (name) => clone(MOVES.get(name));

describe("다투곰 붉은달의 모습 데이터", () => {
    test("땅/노말 타입, 종족값 합 555, 특성은 심안 하나", () => {
        const p = POKEMON.get("ursaluna-bloodmoon");
        expect(p.korean_name).toBe("다투곰(붉은달)");
        expect(p.types.map((t) => t.type.name)).toEqual(["ground", "normal"]);
        expect(p.stats.reduce((a, s) => a + s.base_stat, 0)).toBe(555);
        expect(p.abilities.map((a) => a.ability.name)).toEqual(["minds-eye"]);
        expect(p.moves.some((m) => m.move.name === "blood-moon")).toBe(true);
    });
    test("심안은 한글 이름이 있다", () => {
        expect(getAbility("minds-eye").korean_name).toBe("심안");
    });
});

describe("심안", () => {
    test("노말, 격투 기술이 고스트 타입에게 맞는다 (심안이 없으면 맞지 않는다)", () => {
        const withEye = mon("ursaluna-bloodmoon", ["hyper-voice", "close-combat"], "minds-eye");
        const without = mon("ursaluna-bloodmoon", ["hyper-voice", "close-combat"], "guts");
        const ghost = mon("gengar", ["splash"]);
        for (const name of ["hyper-voice", "close-combat"]) {
            expect(typeEffectiveness(move(name), ghost, without)).toBe(0);
            expect(typeEffectiveness(move(name), ghost, withEye)).toBeGreaterThan(0);
            expect(damageCalc(withEye, ghost, move(name))).toBeGreaterThan(0);
        }
    });
    test("상대의 회피가 올라가도 명중이 변하지 않는다", () => {
        const accurate = move("swift");
        const tackle = { ...move("tackle"), accuracy: 100 };
        const foe = mon("snorlax", ["splash"]);
        const base = hitChance(mon("ursaluna-bloodmoon", ["tackle"], "minds-eye"), foe, tackle, null);
        foe.stat_levels[6] = 6; // 회피 +6
        expect(hitChance(mon("ursaluna-bloodmoon", ["tackle"], "minds-eye"), foe, tackle, null)).toBe(base);
        expect(hitChance(mon("ursaluna-bloodmoon", ["tackle"], "guts"), foe, tackle, null)).toBeLessThan(base);
        expect(accurate).toBeTruthy();
    });
    test("명중을 떨어뜨리는 기술이 통하지 않는다", () => {
        const me = [mon("ursaluna-bloodmoon", ["splash"], "minds-eye")];
        const foe = [mon("snorlax", ["sand-attack"])];
        const text = doTurn(me, foe, me[0].moveset[0]).join(" ");
        expect(me[0].stat_levels[5]).toBe(0);
        expect(text).toContain("Mind's Eye");
    });
    test("틀깨기도 심안은 뚫지 못한다", () => {
        const me = [mon("ursaluna-bloodmoon", ["splash"], "minds-eye")];
        const foe = [mon("snorlax", ["sand-attack"], "mold-breaker")];
        doTurn(me, foe, me[0].moveset[0]);
        expect(me[0].stat_levels[5]).toBe(0);
    });
});

describe("블러드문", () => {
    test("블러드문은 노말 특수, 위력 140이다", () => {
        const m = move("blood-moon");
        expect([m.type.name, m.damage_class.name, m.power]).toEqual(["normal", "special", 140]);
    });
    test("직전에 쓰지 않았으면 쓸 수 있고, 직전에 썼으면 고를 수 없다", () => {
        const me = mon("ursaluna-bloodmoon", ["blood-moon", "earth-power"], "minds-eye");
        expect(moveConditionBlock(me, move("blood-moon"))).toBeNull();
        expect(getUsableMoves(me).map((m) => m.name)).toEqual(["blood-moon", "earth-power"]);
        me.lastMove = "blood-moon";
        expect(moveConditionBlock(me, move("blood-moon"))).toBeTruthy();
        expect(getUsableMoves(me).map((m) => m.name)).toEqual(["earth-power"]);
        me.lastMove = "earth-power"; // 다른 기술을 쓰면 다시 쓸 수 있다
        expect(getUsableMoves(me).map((m) => m.name)).toEqual(["blood-moon", "earth-power"]);
    });
    test("블러드문만 가진 포켓몬이 직전에 썼으면 발버둥을 쓴다", () => {
        const me = mon("ursaluna-bloodmoon", ["blood-moon"], "minds-eye");
        me.lastMove = "blood-moon";
        expect(getUsableMoves(me).map((m) => m.name)).toEqual(["struggle"]);
    });
    test("실제 배틀에서 연속으로 쓰려고 하면 막히고, 첫 번째는 데미지를 준다", () => {
        const me = [mon("ursaluna-bloodmoon", ["blood-moon", "earth-power"], "minds-eye")];
        const foe = [mon("snorlax", ["splash"])];
        const first = doTurn(me, foe, me[0].moveset[0]).join(" ");
        expect(first).toContain("Blood Moon");
        expect(foe[0].hp[0]).toBeLessThan(foe[0].hp[1]);
        const hpAfterFirst = foe[0].hp[0];
        const second = doTurn(me, foe, me[0].moveset[0]).join(" ");
        expect(second).toContain("can't use");
        expect(foe[0].hp[0]).toBe(hpAfterFirst);
    });
    test("교체하고 돌아오면 다시 쓸 수 있다", () => {
        const me = [mon("ursaluna-bloodmoon", ["blood-moon", "earth-power"], "minds-eye"), mon("snorlax", ["splash"])];
        const foe = [mon("snorlax", ["splash"])];
        doTurn(me, foe, me[0].moveset[0]);
        expect(me[0].lastMove).toBe("blood-moon");
        me[0].lastMove = null; // 교체하면 직전 기술이 지워진다 (resetAbilityState)
        expect(getUsableMoves(me[0]).map((m) => m.name)).toContain("blood-moon");
    });
    test("컴퓨터는 블러드문을 한 번 쓰고, 직전에 썼으면 다른 공격을 고른다", () => {
        const cpu = [mon("ursaluna-bloodmoon", ["blood-moon", "earth-power"], "minds-eye")];
        const human = [mon("snorlax", ["splash"])];
        expect(makeMove(human, cpu).name).toBe("blood-moon");
        cpu[0].lastMove = "blood-moon";
        expect(makeMove(human, cpu).name).toBe("earth-power");
        expect(certainlyFails(move("blood-moon"), cpu[0], human[0], null)).toBe(true);
    });
    test("연출이 연결되어 있다", () => {
        const moves = JSON.parse(fs.readFileSync(path.join(__dirname, "../../public/pbanim/moves.json"), "utf8"));
        expect(moves["blood-moon"]).toEqual({ a: "m_bloodmoon" });
        expect(fs.existsSync(path.join(__dirname, "../../public/pbanim/a/m_bloodmoon.json"))).toBe(true);
    });
});
