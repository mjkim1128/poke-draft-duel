// 부스트에너지: 고대활성/쿼크차지를 날씨나 필드 없이 켜 주는 도구
import fs from "fs";
import path from "path";
import { doTurn, doSwitch, ensureField, setTerrain, getBaseStats, hpCalc } from "shared";

const DATA = "../../../api/src/main/resources/data/";
const read = (file) => JSON.parse(fs.readFileSync(path.join(__dirname, DATA + file), "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const ITEMS = new Map(read("items.json").map((i) => [i.name, i]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const clone = (x) => JSON.parse(JSON.stringify(x));

function mon(species, ability, item) {
    const p = clone(POKEMON.get(species));
    p.base_stats = getBaseStats(p);
    p.hp = [hpCalc(p.base_stats[0]), hpCalc(p.base_stats[0])];
    p.stat_levels = Array(7).fill(0);
    p.item = item ? clone(ITEMS.get(item)) : null;
    p.originalItem = p.item;
    p.ability = ability ? { name: ability } : null;
    p.baseAbility = p.ability;
    p.moveset = [clone(MOVES.get("splash"))];
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, lastMoveName: null, moveRepeatCount: 0 });
    return p;
}
const splash = () => clone(MOVES.get("splash"));
const foeTeam = () => [mon("snorlax", null, null), mon("blissey", null, null)];

test("Booster Energy is a known item", () => {
    expect(ITEMS.get("booster-energy").korean_name).toBe("부스트에너지");
});

test("the holder eats it on entering and gets the boost without any field", () => {
    const mine = [mon("iron-valiant", "quark-drive", "booster-energy"), mon("snorlax", null, null)];
    const text = doTurn(mine, foeTeam(), splash());

    expect(mine[0].boosterStat).toBeTruthy();
    expect(mine[0].boosterFromItem).toBe(true);
    expect(mine[0].item).toBeNull();
    expect(mine[0].consumedItem.name).toBe("booster-energy");
    expect([...text].some((line) => /Booster Energy/.test(line))).toBe(true);
});

test("it works for Protosynthesis too", () => {
    const mine = [mon("roaring-moon", "protosynthesis", "booster-energy"), mon("snorlax", null, null)];
    doTurn(mine, foeTeam(), splash());
    expect(mine[0].boosterStat).toBeTruthy();
    expect(mine[0].item).toBeNull();
});

test("without the item nothing switches on", () => {
    const mine = [mon("iron-valiant", "quark-drive", null), mon("snorlax", null, null)];
    doTurn(mine, foeTeam(), splash());
    expect(mine[0].boosterStat).toBeFalsy();
});

test("a pokemon without Protosynthesis / Quark Drive keeps the item", () => {
    const mine = [mon("snorlax", null, "booster-energy"), mon("blissey", null, null)];
    doTurn(mine, foeTeam(), splash());
    expect(mine[0].item && mine[0].item.name).toBe("booster-energy");
    expect(mine[0].boosterStat).toBeFalsy();
});

test("while Electric Terrain does the job the item is saved, and eaten once the terrain is gone", () => {
    const mine = [mon("iron-valiant", "quark-drive", "booster-energy"), mon("snorlax", null, null)];
    const foe = foeTeam();
    const field = ensureField(mine, foe);
    setTerrain(field, "electric", null, []);

    doTurn(mine, foe, splash());
    expect(mine[0].boosterStat).toBeTruthy();
    expect(mine[0].boosterFromItem).toBe(false);
    expect(mine[0].item.name).toBe("booster-energy");

    field.terrain = null; // the terrain ends
    doTurn(mine, foe, splash());
    expect(mine[0].boosterStat).toBeTruthy();
    expect(mine[0].boosterFromItem).toBe(true);
    expect(mine[0].item).toBeNull();
});

test("a boost from the item stays when a terrain comes and goes, and is gone after a switch", () => {
    const mine = [mon("iron-valiant", "quark-drive", "booster-energy"), mon("snorlax", null, null)];
    const foe = foeTeam();
    const field = ensureField(mine, foe);
    doTurn(mine, foe, splash());
    const stat = mine[0].boosterStat;

    setTerrain(field, "electric", null, []);
    doTurn(mine, foe, splash());
    field.terrain = null;
    doTurn(mine, foe, splash());
    expect(mine[0].boosterStat).toBe(stat);

    const valiant = mine[0];
    doSwitch(mine, 1, { foeTeam: foe });
    expect(valiant.boosterStat).toBeNull();
    expect(valiant.boosterFromItem).toBe(false);
});

test("끈적끈적네트로 스피드가 떨어져도 고대활성은 단계를 무시하고 원래 가장 높은 능력치를 고른다", () => {
    const mine = [mon("snorlax", null, null), mon("flutter-mane", "protosynthesis", "booster-energy")];
    const foe = foeTeam();
    mine.hazards = { stealthRock: false, spikes: 0, toxicSpikes: 0, stickyWeb: true };
    const flutter = mine[1];
    // 단계를 무시한 가장 높은 능력치 (끈적끈적네트가 없을 때 고르는 것과 같아야 한다)
    const plain = [mon("snorlax", null, null), mon("flutter-mane", "protosynthesis", "booster-energy")];
    doSwitch(plain, 1, { foeTeam: foe });
    doSwitch(mine, 1, { foeTeam: foe });
    expect(flutter.stat_levels[4]).toBe(-1);
    expect(flutter.boosterStat).toBe(plain[0].boosterStat);
});

test("고대활성은 나오자마자 발동해서 끈적끈적네트보다 먼저다", () => {
    const mine = [mon("snorlax", null, null), mon("flutter-mane", "protosynthesis", "booster-energy")];
    mine.hazards = { stealthRock: false, spikes: 0, toxicSpikes: 0, stickyWeb: true };
    const text = doSwitch(mine, 1, { foeTeam: foeTeam() });
    const joined = [].concat(text).join(" ");
    expect(joined.indexOf("boosted its")).toBeGreaterThan(-1);
    expect(joined).toMatch(/boosted its.*(lowered|sticky web)/s);
});
