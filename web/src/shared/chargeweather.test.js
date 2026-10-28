// 쾌청의 솔라빔은 충전 없이 바로 나간다: 컴퓨터가 예상 피해를 어림할 때도 반으로 깎지 않는다
import fs from "fs";
import path from "path";
import { getBaseStats, hpCalc } from "shared";
import { getAbility } from "shared/abilities";
import { damageCalc } from "shared/damagecalc";
import { skipsChargeInWeather } from "shared/field";
import { bestDamage, hitsToDie } from "shared/cpusetup";
import { makeMove } from "shared/computermove";

const dir = path.join(__dirname, "../../../api/src/main/resources/data/");
const read = (f) => JSON.parse(fs.readFileSync(dir + f, "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const clone = (x) => JSON.parse(JSON.stringify(x));
function mon(species, moves, ability = null) {
    const p = clone(POKEMON.get(species));
    p.base_stats = getBaseStats(p);
    p.hp = [hpCalc(p.base_stats[0]), hpCalc(p.base_stats[0])];
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
const sun = () => ({ weather: { name: "sun", turns: 5 }, terrain: null });


describe("충전 기술의 예상 피해", () => {
    const setup = () => ({ zard: mon("charizard", ["solar-beam", "splash"]), foe: mon("blastoise", ["splash"]) });
    test("맑지 않으면 솔라빔은 두 턴이 걸리니 피해를 반으로 센다", () => {
        const { zard, foe } = setup();
        const full = damageCalc(zard, foe, zard.moveset[0], { field: null });
        expect(bestDamage(zard, foe, null)).toBe(full / 2);
    });
    test("쾌청이면 솔라빔은 바로 나가니 반으로 깎지 않는다", () => {
        const { zard, foe } = setup();
        const full = damageCalc(zard, foe, zard.moveset[0], { field: sun() });
        expect(bestDamage(zard, foe, sun())).toBe(full);
    });
    test("충전을 마친 두 번째 턴에도 반으로 깎지 않는다", () => {
        const { zard, foe } = setup();
        zard.charging = "solar-beam";
        expect(bestDamage(zard, foe, null)).toBe(damageCalc(zard, foe, zard.moveset[0], { field: null }));
    });
    test("솔라블레이드도 쾌청이면 바로 나간다, 비에서는 일렉트로샷이 바로 나간다", () => {
        expect(skipsChargeInWeather({ name: "solar-blade" }, sun())).toBe(true);
        expect(skipsChargeInWeather({ name: "solar-blade" }, null)).toBe(false);
        expect(skipsChargeInWeather({ name: "electro-shot" }, { weather: { name: "rain", turns: 5 }, terrain: null })).toBe(true);
        expect(skipsChargeInWeather({ name: "solar-beam" }, { weather: { name: "rain", turns: 5 }, terrain: null })).toBe(false);
    });
});

describe("쾌청의 솔라빔 앞에서 컴퓨터가 교체한다", () => {
    // 물 타입 야도란(CPU)은 풀 기술에 약하다. 햇빛 아래 솔라빔이면 한 방이라 벤치의 포켓몬으로 바꿔야 한다.
    test("솔라빔이 바로 나가는 쾌청이면 한 방에 쓰러지는 야도란이 교체한다", () => {
        const human = [mon("charizard", ["solar-beam"], "drought")];
        const cpu = [mon("slowbro", ["scald"]), mon("blissey", ["soft-boiled"])];
        human.field = cpu.field = sun();
        cpu[0].hp = [Math.floor(cpu[0].hp[1] * 0.6), cpu[0].hp[1]];
        expect(makeMove(human, cpu, true).priority).toBe(6);
    });
});
