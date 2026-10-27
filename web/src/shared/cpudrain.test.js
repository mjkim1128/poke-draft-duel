// 체력을 회복하는 공격(기가드레인, 흡혈, 드레인키스...)은 체력이 적을 때 컴퓨터가 더 우선해서 고른다
import fs from "fs";
import path from "path";
import { getBaseStats, hpCalc } from "shared";
import { strongestMove } from "shared/computermove";

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
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false });
    return p;
}

// 기가드레인(위력 75, 절반 회복)보다 위력이 큰 에너지볼(위력 90)이 평소에는 이긴다
const pick = (ratio, foeAbility = null, mutate = null) => {
    const cpu = [mon("venusaur", ["giga-drain", "energy-ball"])];
    cpu[0].hp[0] = Math.max(1, Math.floor(cpu[0].hp[1] * ratio));
    if (mutate) mutate(cpu[0]);
    const human = [mon("blissey", ["splash"], foeAbility)];
    return strongestMove(human, cpu).name;
};

test("체력이 충분하면 위력이 더 센 기술을 고른다", () => {
    expect(pick(1)).toBe("energy-ball");
    expect(pick(0.7)).toBe("energy-ball");
});

test("체력이 50% 이하로 내려가면 회복하는 공격을 우선한다", () => {
    expect(pick(0.45)).toBe("giga-drain");
    expect(pick(0.2)).toBe("giga-drain");
});

test("체력이 거의 가득이면 회복량이 의미가 없으므로 센 기술을 고른다 (회복량은 모자란 체력까지만 센다)", () => {
    expect(pick(0.5)).toBe("giga-drain"); // 절반이면 우선
    expect(pick(0.51)).toBe("energy-ball");
});

test("회복봉인에 걸려 있으면 회복하지 못하므로 센 기술을 고른다", () => {
    expect(pick(0.3, null, (p) => (p.healBlock = { turns: 3 }))).toBe("energy-ball");
});

test("상대가 해적의 악취(Liquid Ooze)를 가졌으면 회복하는 공격을 우선하지 않는다", () => {
    expect(pick(0.3, "liquid-ooze")).toBe("energy-ball");
});

test("흡혈, 드레인키스, 드레인펀치 같은 다른 회복 공격도 똑같이 우선한다", () => {
    // [회복 공격, 위력이 비슷하거나 조금 더 센 다른 기술]
    for (const [drain, other] of [["leech-life", "earthquake"], ["draining-kiss", "dazzling-gleam"], ["drain-punch", "cross-chop"]]) {
        const hurt = [mon("venusaur", [drain, other])];
        hurt[0].hp[0] = Math.floor(hurt[0].hp[1] * 0.3);
        const healthy = [mon("venusaur", [drain, other])];
        const human = [mon("snorlax", ["splash"])];
        expect(strongestMove(human, hurt).name).toBe(drain);
        expect(strongestMove(human, healthy).name).toBe(other); // 체력이 충분하면 센 쪽
    }
});
