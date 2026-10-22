// 구애 아이템(구애머리띠/안경/스카프)은 기술을 한 번 쓰면 그 기술로 고정된다.
// 데미지 기술이 맞았을 때만이 아니라, 변화 기술이나 무효·실패한 기술도 마찬가지다.
import fs from "fs";
import path from "path";
import { doTurn, getUsableMoves, baseStatTotalTo600, hpCalc } from "shared";

const DATA = "../../../api/src/main/resources/data/";
const read = (file) => JSON.parse(fs.readFileSync(path.join(__dirname, DATA + file), "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const ITEMS = new Map(read("items.json").map((i) => [i.name, i]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const clone = (x) => JSON.parse(JSON.stringify(x));
const move = (name) => clone(MOVES.get(name));

function mon(species, item, moves, ability = null) {
    const p = clone(POKEMON.get(species));
    p.base_stats = baseStatTotalTo600(p);
    p.hp = [hpCalc(p.base_stats[0]) * 3, hpCalc(p.base_stats[0]) * 3];
    p.stat_levels = Array(7).fill(0);
    p.item = item ? clone(ITEMS.get(item)) : null;
    p.originalItem = p.item;
    p.ability = ability ? { name: ability } : null;
    p.baseAbility = p.ability;
    p.moveset = moves.map(move);
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, lastMoveName: null, moveRepeatCount: 0 });
    return p;
}
const player = () => [mon("snorlax", null, ["splash"]), mon("blissey", null, ["splash"])];

test("a Choice item locks onto a status move too", () => {
    const foe = [mon("garchomp", "choice-band", ["swords-dance", "calm-mind", "agility", "work-up"]), mon("snorlax", null, ["splash"])];
    doTurn(player(), foe, move("splash"));

    expect(foe[0].lockedMove).toBeTruthy();
    expect(foe[0].lockedMove).toBe(foe[0].lastMove);
    expect(getUsableMoves(foe[0]).map((m) => m.name)).toEqual([foe[0].lockedMove]);
});

test("the opponent keeps using the same move on later turns", () => {
    const foe = [mon("garchomp", "choice-scarf", ["swords-dance", "calm-mind", "agility", "work-up"]), mon("snorlax", null, ["splash"])];
    const mine = player();
    mine[0].hp = [99999, 99999];
    const used = new Set();
    for (let turn = 0; turn < 8; turn++) {
        doTurn(mine, foe, move("splash"));
        used.add(foe[0].lastMove);
    }
    expect([...used]).toHaveLength(1);
});

test("a move that has no effect still locks", () => {
    const foe = [mon("garchomp", "choice-specs", ["earthquake"]), mon("snorlax", null, ["splash"])];
    const mine = [mon("gengar", null, ["splash"]), mon("blissey", null, ["splash"])];
    mine[0].types = [{ slot: 1, type: { name: "flying" } }]; // the ground move can't touch it
    doTurn(mine, foe, move("splash"));
    expect(foe[0].lockedMove).toBe("earthquake");
});

test("losing the Choice item releases the lock", () => {
    const foe = mon("garchomp", "choice-band", ["earthquake", "crunch", "swords-dance", "stone-edge"]);
    foe.lockedMove = "earthquake";
    expect(getUsableMoves(foe).map((m) => m.name)).toEqual(["earthquake"]);

    foe.item = null; // knocked off
    expect(getUsableMoves(foe)).toHaveLength(4);
});

test("a pokemon without a Choice item is never locked", () => {
    const foe = [mon("garchomp", "leftovers", ["swords-dance", "calm-mind"]), mon("snorlax", null, ["splash"])];
    doTurn(player(), foe, move("splash"));
    expect(foe[0].lockedMove).toBeFalsy();
});

// 이 기술들은 처리 도중에 일찍 끝나는 분기를 탄다
test.each(["reflect", "light-screen", "tailwind", "protect", "substitute", "trick-room", "spikes", "stealth-rock", "recover", "rest"])(
    "%s locks a Choice item holder",
    (name) => {
        const foe = [mon("garchomp", "choice-band", [name]), mon("snorlax", null, ["splash"])];
        const mine = player();
        mine[0].hp = [99999, 99999];
        doTurn(mine, foe, move("splash"));
        expect(foe[0].lockedMove).toBe(name);
    }
);

test("Struggle does not lock", () => {
    const foe = [mon("garchomp", "choice-band", ["earthquake"]), mon("snorlax", null, ["splash"])];
    foe[0].moveset[0].ppLeft = 0; // out of PP: it has to Struggle
    const mine = player();
    mine[0].hp = [99999, 99999];
    doTurn(mine, foe, move("splash"));
    expect(foe[0].lockedMove).toBeFalsy();
});

test("switching out releases the lock (U-turn leaves the pokemon that used it)", () => {
    const foe = [mon("garchomp", "choice-band", ["u-turn"]), mon("snorlax", null, ["splash"])];
    const garchomp = foe[0];
    const mine = player();
    mine[0].hp = [99999, 99999];
    doTurn(mine, foe, move("splash"));
    expect(foe[0]).not.toBe(garchomp); // it switched out
    expect(garchomp.lockedMove).toBeFalsy();
});
