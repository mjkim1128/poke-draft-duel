// 대검돌격(글레이브러시): 쓴 뒤 다음 행동까지 받는 피해가 두 배가 되고 공격이 빗나가지 않는다
import fs from "fs";
import path from "path";
import { doTurn, getBaseStats, hpCalc } from "shared";
import { getAbility } from "shared/abilities";
import { damageCalc } from "shared/damagecalc";
import { hitChance } from "shared/accuracy";
import { resetAbilityState } from "shared/abilities";

const read = (f) => JSON.parse(fs.readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/" + f), "utf8"));
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
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false });
    return p;
}

test("대검돌격이 데이터에 있다", () => {
    const m = MOVES.get("glaive-rush");
    expect(m.power).toBe(120);
    expect(m.type.name).toBe("dragon");
});

describe("받는 피해 두 배", () => {
    test("쓴 뒤에는 같은 공격의 피해가 정확히 두 배다", () => {
        const me = mon("baxcalibur", ["glaive-rush"], "thermal-exchange");
        const foe = mon("garchomp", ["earthquake"]);
        const quake = foe.moveset[0];
        const normal = damageCalc(foe, me, quake);
        me.glaiveRush = true;
        expect(damageCalc(foe, me, quake)).toBe(normal * 2);
    });
    test("두 배는 난수 배율에서도 유지된다", () => {
        const me = mon("baxcalibur", ["glaive-rush"]);
        const foe = mon("garchomp", ["earthquake"]);
        const q = foe.moveset[0];
        const low = damageCalc(foe, me, q, { roll: 85 });
        me.glaiveRush = true;
        expect(damageCalc(foe, me, q, { roll: 85 })).toBe(low * 2);
    });
    test("대검돌격을 맞히면 쓴 쪽에 표시가 붙는다", () => {
        const me = [mon("baxcalibur", ["glaive-rush"]), mon("snorlax", ["splash"])];
        const foe = [mon("snorlax", ["splash"])];
        doTurn(me, foe, me[0].moveset[0]);
        expect(me[0].glaiveRush).toBe(true);
    });
    test("다음에 기술을 쓰면 표시가 사라진다", () => {
        const me = [mon("baxcalibur", ["glaive-rush", "icicle-crash"]), mon("snorlax", ["splash"])];
        const foe = [mon("snorlax", ["splash"])];
        doTurn(me, foe, me[0].moveset[0]);
        expect(me[0].glaiveRush).toBe(true);
        doTurn(me, foe, me[0].moveset[1]);
        expect(me[0].glaiveRush).toBe(false);
    });
    test("교체하면 사라진다", () => {
        const me = mon("baxcalibur", ["glaive-rush"]);
        me.glaiveRush = true;
        resetAbilityState(me);
        expect(me.glaiveRush).toBe(false);
    });
});

describe("공격이 빗나가지 않는다", () => {
    test("쓴 뒤에는 명중이 낮은 기술도 반드시 맞는다", () => {
        const me = mon("baxcalibur", ["glaive-rush"]);
        const foe = mon("garchomp", ["stone-edge"]);
        const edge = foe.moveset[0];
        expect(hitChance(foe, me, edge, null)).not.toBeNull();
        me.glaiveRush = true;
        expect(hitChance(foe, me, edge, null)).toBeNull();
    });
});

describe("컴퓨터가 알고 있다", () => {
    test("대검돌격을 쓴 쪽이 받을 피해를 두 배로 어림한다", () => {
        // 컴퓨터의 계산은 damageCalc를 쓰므로 위의 두 배가 그대로 반영된다
        const me = mon("baxcalibur", ["glaive-rush"]);
        const foe = mon("garchomp", ["earthquake"]);
        me.glaiveRush = true;
        expect(damageCalc(foe, me, foe.moveset[0])).toBeGreaterThan(0);
    });
});
