// 기습(Sucker Punch) 조건, 전투 시작 때 괴짜(Imposter), 둘 다 쓰러졌을 때 마지막에 쓰러진 쪽 기록을 확인한다.
import fs from "fs";
import path from "path";
import { doTurn, enterBattle, getBaseStats, hpCalc } from "shared";

const read = (file) => JSON.parse(fs.readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/" + file), "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const clone = (x) => JSON.parse(JSON.stringify(x));
const move = (name) => clone(MOVES.get(name));

function mon(species, moves, ability = null) {
    const p = clone(POKEMON.get(species));
    p.base_stats = getBaseStats(p);
    p.hp = [hpCalc(p.base_stats[0]) * 4, hpCalc(p.base_stats[0]) * 4];
    p.stat_levels = Array(7).fill(0);
    p.item = null;
    p.originalItem = null;
    p.ability = ability ? { name: ability } : null;
    p.baseAbility = p.ability;
    p.moveset = moves.map(move);
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, lastMoveName: null, moveRepeatCount: 0 });
    return p;
}
const pair = (a, b) => [[a, mon("snorlax", ["splash"])], [b, mon("snorlax", ["splash"])]];

describe("기습(Sucker Punch)", () => {
    test("상대가 변화 기술(방어 포함)을 고르면 실패한다", () => {
        for (const foeMove of ["protect", "toxic"]) {
            const [me, foe] = pair(mon("weavile", ["sucker-punch"]), mon("blissey", [foeMove]));
            const text = doTurn(me, foe, me[0].moveset[0]).toString();
            expect(text).toContain("But it failed!");
            expect(foe[0].hp[0]).toBe(foe[0].hp[1]);
        }
    });

    test("상대가 공격 기술을 고르면 먼저 맞힌다", () => {
        const [me, foe] = pair(mon("weavile", ["sucker-punch"]), mon("blissey", ["tackle"]));
        doTurn(me, foe, me[0].moveset[0]);
        expect(foe[0].hp[0]).toBeLessThan(foe[0].hp[1]);
    });

    test("상대가 이미 움직였으면 실패한다", () => {
        const slow = mon("weavile", ["sucker-punch"]);
        slow.base_stats[5] = 1; // 상대보다 느리지만 선제 기술이라 먼저 나가는 경우와 비교하려고, 상대에게 더 높은 우선도를 준다
        const [me, foe] = pair(slow, mon("blissey", ["quick-attack"]));
        const text = doTurn(me, foe, me[0].moveset[0]).toString();
        expect(text).toContain("But it failed!");
    });
});

test("전투가 시작되면 괴짜(Imposter)가 첫 기술을 고르기 전에 상대를 복사한다", () => {
    const [me, foe] = pair(mon("ditto", ["transform"], "imposter"), mon("garchomp", ["swords-dance", "earthquake"]));
    const text = enterBattle(me, foe);
    expect(text.join(" ")).toContain("transformed into");
    expect(me[0].moveset.map((m) => m.name)).toEqual(["swords-dance", "earthquake"]);
    // 같은 전투에서 다시 불러도 한 번만 발동한다
    expect(enterBattle(me, foe)).toEqual([]);
});

test("복사한 칼춤이 실패하지 않는다", () => {
    const [me, foe] = pair(mon("ditto", ["transform"], "imposter"), mon("garchomp", ["swords-dance"]));
    enterBattle(me, foe);
    doTurn(me, foe, me[0].moveset[0]);
    expect(me[0].stat_levels[0]).toBe(2);
});

test("반동으로 상대의 마지막 포켓몬과 같이 쓰러지면 마지막에 쓰러진 쪽(공격한 쪽)이 기록된다", () => {
    const me = [mon("snorlax", ["double-edge"])];
    const foe = [mon("garchomp", ["splash"], "rough-skin")];
    foe[0].hp[0] = 1;
    me[0].hp[0] = 1;
    doTurn(me, foe, me[0].moveset[0]);
    expect(me[0].hp[0]).toBe(0);
    expect(foe[0].hp[0]).toBe(0);
    expect(me.lastFainted).toBe("player");
});

describe("상대가 이미 쓰러져 있어도 자기 자신에게 쓰는 기술은 성공한다", () => {
    test("칼춤", () => {
        const [me, foe] = pair(mon("garchomp", ["swords-dance"]), mon("blissey", ["splash"]));
        foe[0].hp[0] = 0;
        const text = doTurn(me, foe, me[0].moveset[0]).toString();
        expect(me[0].stat_levels[0]).toBe(2);
        expect(text).not.toContain("But it failed!");
    });

    test("상대에게 거는 기술은 여전히 실패한다", () => {
        const [me, foe] = pair(mon("garchomp", ["toxic", "earthquake"]), mon("blissey", ["splash"]));
        foe[0].hp[0] = 0;
        expect(doTurn(me, foe, me[0].moveset[0]).toString()).toContain("But it failed!");
        expect(foe[0].status).toBeNull();
    });
});
