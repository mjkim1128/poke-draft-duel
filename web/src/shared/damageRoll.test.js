// 데미지 난수 (85~100%)와, 컴퓨터가 "확실히 쓰러뜨린다"를 가장 약한 난수로 판단하는지
import fs from "fs";
import path from "path";
import { doTurn, getBaseStats, hpCalc } from "shared";
import { damageCalc, MIN_ROLL, setDamageRoll, defaultDamageRoll } from "shared/damagecalc";
import { makeMove } from "shared/computermove";
import { bestDamage } from "shared/cpusetup";

const read = (file) => JSON.parse(fs.readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/" + file), "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const clone = (x) => JSON.parse(JSON.stringify(x));

function mon(species, moves) {
    const p = clone(POKEMON.get(species));
    p.base_stats = getBaseStats(p);
    p.hp = [hpCalc(p.base_stats[0]) * 4, hpCalc(p.base_stats[0]) * 4];
    p.stat_levels = Array(7).fill(0);
    p.item = null;
    p.originalItem = null;
    p.ability = null;
    p.baseAbility = null;
    p.moveset = moves.map((m) => clone(MOVES.get(m)));
    for (const m of p.moveset) m.accuracy = null;
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, lastMoveName: null, moveRepeatCount: 0 });
    return p;
}

afterEach(() => {
    setDamageRoll(() => 100); // setupTests.js의 기본값으로 되돌린다
    jest.restoreAllMocks();
});

describe("데미지 난수", () => {
    test("기본 난수는 85~100 사이이고 값이 한 가지가 아니다", () => {
        const rolls = new Set();
        for (let i = 0; i < 400; i++) {
            const r = defaultDamageRoll();
            expect(r).toBeGreaterThanOrEqual(85);
            expect(r).toBeLessThanOrEqual(100);
            rolls.add(r);
        }
        expect(rolls.size).toBeGreaterThan(5);
        expect(MIN_ROLL).toBe(85);
    });
    test("damageCalc의 roll은 데미지를 그 비율로 줄인다 (고정 데미지 기술은 그대로)", () => {
        const a = mon("garchomp", ["earthquake", "seismic-toss"]);
        const d = mon("snorlax", ["tackle"]);
        const full = damageCalc(a, d, a.moveset[0]);
        const low = damageCalc(a, d, a.moveset[0], { roll: MIN_ROLL });
        expect(low).toBeLessThan(full);
        expect(low / full).toBeGreaterThan(0.82);
        expect(low / full).toBeLessThan(0.88);
        expect(damageCalc(a, d, a.moveset[1], { roll: MIN_ROLL })).toBe(damageCalc(a, d, a.moveset[1]));
    });
    test("실제 배틀의 공격은 난수만큼 데미지가 달라진다", () => {
        jest.spyOn(Math, "random").mockReturnValue(0.99); // 급소가 터지지 않게 고정한다
        const lost = (roll) => {
            setDamageRoll(() => roll);
            const human = [mon("snorlax", ["splash"])];
            const cpu = [mon("garchomp", ["earthquake"])];
            doTurn(human, cpu, human[0].moveset[0]);
            return human[0].hp[1] - human[0].hp[0];
        };
        const high = lost(100);
        const low = lost(85);
        expect(low).toBeLessThan(high);
        expect(low / high).toBeGreaterThan(0.82);
    });
});

describe("컴퓨터는 가장 약한 난수로도 쓰러뜨릴 때만 한 방이라고 본다", () => {
    const aquaJet = (cpu, human) => cpu[0].moveset.find((m) => m.name === "aqua-jet") && damageCalc(cpu[0], human[0], cpu[0].moveset[0]);
    test("가장 센 난수로만 쓰러뜨리는 체력이면 선공기로 마무리하지 않는다", () => {
        const cpu = [mon("garchomp", ["aqua-jet", "earthquake"])];
        const human = [mon("snorlax", ["splash"])];
        const high = aquaJet(cpu, human);
        const low = damageCalc(cpu[0], human[0], cpu[0].moveset[0], { roll: MIN_ROLL });
        expect(low).toBeLessThan(high);
        human[0].hp = [high, human[0].hp[1]]; // 난수가 약하면 살아남는 체력
        expect(makeMove(human, cpu).name).toBe("earthquake");
        human[0].hp = [low, human[0].hp[1]]; // 어떤 난수로도 쓰러진다
        expect(makeMove(human, cpu).name).toBe("aqua-jet");
    });
    test("bestDamage는 난수를 받으면 그만큼 줄어든다", () => {
        const a = mon("garchomp", ["earthquake"]);
        const d = mon("snorlax", ["tackle"]);
        expect(bestDamage(a, d, null, MIN_ROLL)).toBeLessThan(bestDamage(a, d, null));
    });
});

describe("컴퓨터의 교체기 (유턴 등)", () => {
    test("유턴을 쓰면 컴퓨터도 벤치의 포켓몬으로 교체한다", () => {
        const human = [mon("snorlax", ["splash"])];
        const cpu = [mon("garchomp", ["u-turn"]), mon("blissey", ["soft-boiled"])];
        doTurn(human, cpu, human[0].moveset[0]);
        expect(cpu[0].name).toBe("blissey");
    });
    test("교체기가 더 약해도 데미지가 큰 다른 공격이 있으면 그쪽을 고른다 (교체기를 일부러 고르지는 않는다)", () => {
        const cpu = [mon("garchomp", ["u-turn", "earthquake"]), mon("blissey", ["soft-boiled"])];
        const human = [mon("snorlax", ["splash"])];
        expect(makeMove(human, cpu).name).toBe("earthquake");
    });
});
