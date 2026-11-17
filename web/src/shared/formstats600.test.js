// 합계 600 보정 모드에서도 모습이 바뀐 포켓몬은 바뀐 모습의 능력치를 같은 방식으로 600에 맞춘 값을 쓴다 (최대 HP는 그대로)
import fs from "fs";
import path from "path";
import { doTurn, doSwitch, getBaseStats, hpCalc } from "shared";
import { getAbility, previewEntryForm } from "shared/abilities";
import { normalizeStatsTo600, setNormalizedStats } from "shared/statMode";

const dir = path.join(__dirname, "../../../api/src/main/resources/data/");
const read = (f) => JSON.parse(fs.readFileSync(dir + f, "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const clone = (x) => JSON.parse(JSON.stringify(x));
function mon(species, moves, ability, hpFraction = 1) {
    const p = clone(POKEMON.get(species));
    p.base_stats = getBaseStats(p);
    const max = hpCalc(p.base_stats[0]) * 3;
    p.hp = [Math.floor(max * hpFraction), max];
    p.stat_levels = Array(7).fill(0);
    p.item = null;
    p.originalItem = null;
    p.ability = getAbility(ability);
    p.baseAbility = p.ability;
    p.moveset = moves.map((m) => clone(MOVES.get(m)));
    for (const m of p.moveset) m.accuracy = null;
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, actionsSinceSwitch: 1, revealed: true });
    return p;
}
// 이 게임이 쓰는 모습별 원본 종족값 (abilities.js의 FORMS)
const RAW = {
    blade: [60, 140, 50, 140, 50, 60],
    school: [45, 140, 130, 140, 135, 30],
    core: [60, 100, 60, 100, 60, 120],
    zen: [105, 30, 105, 140, 105, 55],
    hero: [100, 160, 97, 106, 87, 100],
    noice: [75, 80, 70, 65, 50, 130],
};
const expected = (form, hpBefore) => [hpBefore, ...normalizeStatsTo600(RAW[form]).slice(1)];

beforeEach(() => {
    jest.spyOn(Math, "random").mockReturnValue(0.5);
    setNormalizedStats(true);
});
afterEach(() => {
    jest.restoreAllMocks();
    setNormalizedStats(false);
});

const hitter = () => {
    const h = mon("snorlax", ["body-slam"], "pressure");
    h.base_stats[5] = 1;
    return h;
};

test("킬가르도: 블레이드폼은 600 보정된 능력치", () => {
    const blade = mon("aegislash-shield", ["tackle"], "stance-change");
    const hp = blade.base_stats[0];
    const foe = mon("snorlax", ["splash"], "pressure");
    doTurn([blade], [foe], blade.moveset[0]);
    expect(blade.forme).toBe("blade");
    expect(blade.base_stats).toEqual(expected("blade", hp));
    expect(blade.base_stats.slice(1).reduce((a, b) => a + b, 0) + 0).toBeGreaterThan(blade.base_stats[0]); // 공격 쪽이 높다
});

test("약어리: 군집의 모습은 600 보정된 능력치", () => {
    const fish = mon("wishiwashi-solo", ["tackle"], "schooling");
    const hp = fish.base_stats[0];
    previewEntryForm(fish);
    expect(fish.forme).toBe("school");
    expect(fish.base_stats).toEqual(expected("school", hp));
});

test("메테노: 코어 모습은 600 보정된 능력치", () => {
    const rock = mon("minior-red-meteor", ["splash"], "shields-down", 0.55);
    const hp = rock.base_stats[0];
    doTurn([rock], [hitter()], rock.moveset[0]);
    expect(rock.forme).toBe("core");
    expect(rock.base_stats).toEqual(expected("core", hp));
});

test("달마모드: 달마모드 모습은 600 보정된 능력치", () => {
    const zen = mon("darmanitan-standard", ["splash"], "zen-mode", 0.55);
    const hp = zen.base_stats[0];
    doTurn([zen], [hitter()], zen.moveset[0]);
    expect(zen.forme).toBe("zen");
    expect(zen.base_stats).toEqual(expected("zen", hp));
});

test("돌핀맨: 교체로 빠지면 히어로 모습의 600 보정된 능력치", () => {
    const fin = mon("palafin-zero", ["tackle"], "zero-to-hero");
    const hp = fin.base_stats[0];
    const bench = mon("snorlax", ["splash"], "pressure");
    doSwitch([fin, bench], 1, {});
    expect(fin.forme).toBe("hero");
    expect(fin.base_stats).toEqual(expected("hero", hp));
});

test("빙큐보: 얼음얼굴이 깨지면 600 보정된 능력치", () => {
    const ice = mon("eiscue-ice", ["splash"], "ice-face");
    const hp = ice.base_stats[0];
    doTurn([ice], [hitter()], ice.moveset[0]);
    expect(ice.forme).toBe("noice");
    expect(ice.base_stats).toEqual(expected("noice", hp));
});

test("원본 능력치 모드에서는 그대로 원본 값", () => {
    setNormalizedStats(false);
    const blade = mon("aegislash-shield", ["tackle"], "stance-change");
    const foe = mon("snorlax", ["splash"], "pressure");
    doTurn([blade], [foe], blade.moveset[0]);
    expect(blade.base_stats).toEqual(RAW.blade);
});
