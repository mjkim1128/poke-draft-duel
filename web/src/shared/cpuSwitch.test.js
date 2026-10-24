// 상대가 피해를 줄 수 없으면 교체하는 것, 암석엑스/연속칼날이 함정을 까는 것, 자기 대상 기술의 연출 대상을 확인한다.
import fs from "fs";
import path from "path";
import { doTurn, getBaseStats, hpCalc } from "shared";
import { switchWhenUseless } from "shared/computermove";

const read = (file) => JSON.parse(fs.readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/" + file), "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const ITEMS = new Map(read("items.json").map((i) => [i.name, i]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const clone = (x) => JSON.parse(JSON.stringify(x));
const move = (name) => clone(MOVES.get(name));

function mon(species, item, moves, ability = null) {
    const p = clone(POKEMON.get(species));
    p.base_stats = getBaseStats(p);
    p.hp = [hpCalc(p.base_stats[0]) * 4, hpCalc(p.base_stats[0]) * 4];
    p.stat_levels = Array(7).fill(0);
    p.item = item ? clone(ITEMS.get(item)) : null;
    p.originalItem = p.item;
    p.ability = ability ? { name: ability } : null;
    p.baseAbility = p.ability;
    p.moveset = moves.map(move);
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, lastMoveName: null, moveRepeatCount: 0 });
    return p;
}

describe("피해를 줄 수 없으면 상대가 교체한다", () => {
    test("노말 기술뿐인데 상대가 고스트이면 교체를 고른다", () => {
        const me = [mon("gengar", null, ["splash"]), mon("blissey", null, ["splash"])];
        const foe = [mon("snorlax", null, ["return", "body-slam"]), mon("garchomp", null, ["earthquake"])];
        expect(switchWhenUseless(me, foe)).toBe(1);
    });

    test("교체한 뒤에는 그 포켓몬이 나와 있다", () => {
        const me = [mon("gengar", null, ["splash"]), mon("blissey", null, ["splash"])];
        const foe = [mon("snorlax", null, ["return", "body-slam"]), mon("garchomp", null, ["earthquake"])];
        const result = doTurn(me, foe, move("splash"));
        expect(foe[0].name).toBe("garchomp");
        expect(result.toString()).toContain("Garchomp");
    });

    test("피해를 줄 수 있으면 교체하지 않는다", () => {
        const me = [mon("snorlax", null, ["splash"]), mon("blissey", null, ["splash"])];
        const foe = [mon("snorlax", null, ["return"]), mon("garchomp", null, ["earthquake"])];
        expect(switchWhenUseless(me, foe)).toBe(-1);
    });

    test("변화 기술만 가진 포켓몬은 교체하지 않는다", () => {
        const me = [mon("gengar", null, ["splash"]), mon("blissey", null, ["splash"])];
        const foe = [mon("blissey", null, ["toxic", "soft-boiled"]), mon("garchomp", null, ["earthquake"])];
        expect(switchWhenUseless(me, foe)).toBe(-1);
    });

    test("바꿔 나올 포켓몬도 피해를 줄 수 없으면 그대로 있는다", () => {
        const me = [mon("gengar", null, ["splash"]), mon("blissey", null, ["splash"])];
        const foe = [mon("snorlax", null, ["return"]), mon("blissey", null, ["return"])];
        expect(switchWhenUseless(me, foe)).toBe(-1);
    });
});

test("암석엑스는 맞으면 상대 쪽에 스텔스록을 깐다", () => {
    const me = [mon("hawlucha", null, ["stone-axe"]), mon("blissey", null, ["splash"])];
    const foe = [mon("snorlax", null, ["splash"]), mon("blissey", null, ["splash"])];
    doTurn(me, foe, me[0].moveset[0]);
    expect(foe.hazards && foe.hazards.stealthRock).toBe(true);
});

test("연속칼날은 맞으면 상대 쪽에 압정뿌리기를 깐다", () => {
    const me = [mon("kleavor", null, ["ceaseless-edge"]), mon("blissey", null, ["splash"])];
    const foe = [mon("snorlax", null, ["splash"]), mon("blissey", null, ["splash"])];
    doTurn(me, foe, me[0].moveset[0]);
    expect(foe.hazards && foe.hazards.spikes).toBe(1);
});

test("칼춤 같은 자기 대상 기술의 연출은 쓴 포켓몬 위에서 한다", () => {
    const me = [mon("snorlax", null, ["swords-dance"]), mon("blissey", null, ["splash"])];
    const foe = [mon("blissey", null, ["splash"]), mon("blissey", null, ["splash"])];
    const result = doTurn(me, foe, me[0].moveset[0]);
    const anim = result.frames.map((f) => f.anim).find((a) => a && a.move === "swords-dance");
    expect(anim).toEqual({ side: "player", move: "swords-dance", self: true });
    const hit = doTurn(me, foe, move("tackle"));
    const tackle = hit.frames.map((f) => f.anim).find((a) => a && a.move === "tackle");
    expect(tackle && tackle.self).toBe(false);
});
