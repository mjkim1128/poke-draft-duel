// 날씨에 따라 바뀌는 기술(웨더볼, 테라장판): 컴퓨터가 예상 피해를 어림할 때도 바뀐 타입과 위력으로 계산한다
import fs from "fs";
import path from "path";
import { getBaseStats, hpCalc } from "shared";
import { getAbility } from "shared/abilities";
import { damageCalc } from "shared/damagecalc";
import { adaptMoveToField } from "shared/field";
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

describe("웨더볼 피해 계산", () => {
    test("날씨가 없으면 노말 기술이라 고스트에게 통하지 않는다", () => {
        const zard = mon("charizard", ["weather-ball"]);
        expect(damageCalc(zard, mon("flutter-mane", ["splash"]), zard.moveset[0])).toBe(0);
    });
    test("맑음이면 불꽃 타입 위력 100이 되어 고스트에게도 들어간다", () => {
        const zard = mon("charizard", ["weather-ball"]);
        const fm = mon("flutter-mane", ["splash"]);
        expect(damageCalc(zard, fm, zard.moveset[0], { field: sun() })).toBeGreaterThan(0);
    });
    test("이미 바뀐 기술을 한 번 더 바꾸지 않는다 (위력이 두 번 두 배가 되지 않는다)", () => {
        const zard = mon("charizard", ["weather-ball"]);
        const once = adaptMoveToField(zard.moveset[0], zard, sun());
        const twice = adaptMoveToField(once, zard, sun());
        expect(once.power).toBe(100);
        expect(twice.power).toBe(100);
        const fm = mon("flutter-mane", ["splash"]);
        expect(damageCalc(zard, fm, once, { field: sun() })).toBe(damageCalc(zard, fm, zard.moveset[0], { field: sun() }));
    });
    test("컴퓨터의 예상 피해에 웨더볼이 들어간다", () => {
        const zard = mon("charizard", ["weather-ball"]);
        const fm = mon("flutter-mane", ["splash"]);
        expect(bestDamage(zard, fm, null)).toBe(0);
        expect(bestDamage(zard, fm, sun())).toBeGreaterThan(0);
    });
});

describe("컴퓨터가 상대의 웨더볼을 알고 행동한다", () => {
    test("한 방에 쓰러질 만큼 맞는 상황에서는 명상 같은 랭업을 하지 않는다", () => {
        const human = [mon("charizard", ["weather-ball"])];
        const cpu = [mon("flutter-mane", ["calm-mind", "moonblast"])];
        human.field = cpu.field = sun();
        cpu[0].hp[0] = Math.floor(damageCalc(human[0], cpu[0], human[0].moveset[0], { field: sun() }) * 0.9); // 웨더볼 한 방에 쓰러지는 체력
        expect(hitsToDie(cpu[0], bestDamage(human[0], cpu[0], sun()), human[0])).toBe(1);
        expect(makeMove(human, cpu, false).name).not.toBe("calm-mind");
    });
});

describe("특성으로 타입이 바뀌는 기술도 예상 피해에 들어간다", () => {
    test("페어리스킨 하이퍼보이스는 고스트에게 노말로는 안 통하지만 페어리로는 통한다", () => {
        const plain = mon("sylveon", ["hyper-voice"], "cute-charm");
        const skin = mon("sylveon", ["hyper-voice"], "pixilate");
        const fm = mon("dragonite", ["splash"]); // 노말에 약점도 면역도 없고 페어리에 약한 용 타입
        expect(damageCalc(skin, fm, skin.moveset[0])).toBeGreaterThan(damageCalc(plain, fm, plain.moveset[0]));
        const gengar = mon("gengar", ["splash"]);
        expect(damageCalc(plain, gengar, plain.moveset[0])).toBe(0);
        expect(damageCalc(skin, gengar, skin.moveset[0])).toBeGreaterThan(0);
    });
});

