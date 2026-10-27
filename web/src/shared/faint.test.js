// 체력이 0이 된 포켓몬은 기절한 것이므로, 교체되거나 전투가 끝날 때까지 되살아나면 안 된다
// (먹다남은음식 같은 턴 종료 회복도 마찬가지). 실제 팩토리 세트로 무작위 전투를 돌려서 확인한다.
import fs from "fs";
import path from "path";
import { doTurn, doSwitch, getBaseStats, hpCalc } from "shared";

const DATA = "../../../api/src/main/resources/data/";
const read = (file) => JSON.parse(fs.readFileSync(path.join(__dirname, DATA + file), "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const ITEMS = new Map(read("items.json").map((i) => [i.name, i]));
const POKEMON = read("pokemon.json");
const SETS = read("factory_sets.json").filter((s) => s.set.moves.length >= 2);
const clone = (x) => JSON.parse(JSON.stringify(x));
const random = (n) => Math.floor(Math.random() * n);

function build({ species, set }) {
    const mon = clone(POKEMON.find((p) => p.name === species));
    mon.base_stats = getBaseStats(mon);
    mon.hp = [hpCalc(mon.base_stats[0]), hpCalc(mon.base_stats[0])];
    mon.stat_levels = Array(7).fill(0);
    mon.item = clone(ITEMS.get([].concat(set.item || "leftovers")[0]));
    mon.originalItem = mon.item;
    mon.ability = set.ability ? { name: set.ability } : null;
    mon.baseAbility = mon.ability;
    mon.moveset = set.moves.map((slot) => clone(MOVES.get(slot[0].slug)));
    Object.assign(mon, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, lastMoveName: null, moveRepeatCount: 0 });
    return mon;
}

const randomTeam = () => Array.from({ length: 3 }, () => build(SETS[random(SETS.length)]));

test("a fainted pokemon never comes back to life during a turn", () => {
    const revived = [];
    for (let battle = 0; battle < 60; battle++) {
        const mine = randomTeam();
        const foe = randomTeam();
        for (let turn = 0; turn < 40; turn++) {
            if (mine.every((p) => p.hp[0] <= 0) || foe.every((p) => p.hp[0] <= 0)) break;
            for (const side of [mine, foe]) {
                if (side[0].hp[0] <= 0) doSwitch(side, side.findIndex((p) => p.hp[0] > 0), { foeTeam: side === mine ? foe : mine });
            }
            const result = doTurn(mine, foe, mine[0].moveset[random(mine[0].moveset.length)]);
            // Every beat of the turn is a snapshot of both teams; compare the active pokemon beat to beat
            for (let i = 1; i < result.frames.length; i++) {
                for (const side of ["playerPokemon", "opponentPokemon"]) {
                    const before = result.frames[i - 1][side][0];
                    const after = result.frames[i][side][0];
                    if (before.id === after.id && before.hp[0] <= 0 && after.hp[0] > 0) {
                        revived.push({ name: before.name, item: before.item && before.item.name, text: result.frames[i].text });
                    }
                }
            }
        }
    }
    expect(revived).toEqual([]);
});

test("burn, poison and toxic at 1 HP faint the holder even when it carries Leftovers", () => {
    for (const status of [{ name: "burn" }, { name: "poison" }, { name: "toxic", counter: 1 }]) {
        const mine = randomTeam();
        const foe = randomTeam();
        mine[0].item = clone(ITEMS.get("leftovers"));
        mine[0].ability = null;
        mine[0].hp[0] = 1;
        mine[0].status = status;
        foe[0].ability = null;
        doTurn(mine, foe, clone(MOVES.get("splash")));
        expect(mine[0].hp[0]).toBe(0);
    }
});
