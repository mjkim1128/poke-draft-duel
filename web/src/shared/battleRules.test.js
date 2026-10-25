// 기습(Sucker Punch) 조건, 전투 시작 때 괴짜(Imposter), 둘 다 쓰러졌을 때 마지막에 쓰러진 쪽 기록을 확인한다.
import fs from "fs";
import path from "path";
import { doTurn, enterBattle, getBaseStats, hpCalc } from "shared";

const read = (file) => JSON.parse(fs.readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/" + file), "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const ITEMS = new Map(read("items.json").map((i) => [i.name, i]));
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
        foe[1].hp[0] = 0; // 바꿔 나올 포켓몬이 없어야 그대로 맞는다
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

test("반동으로 상대의 마지막 포켓몬과 같이 쓰러지면 먼저 쓰러진 쪽(맞은 쪽)이 기록된다", () => {
    const me = [mon("snorlax", ["double-edge"])];
    const foe = [mon("garchomp", ["splash"], "rough-skin")];
    foe[0].hp[0] = 1;
    me[0].hp[0] = 1;
    doTurn(me, foe, me[0].moveset[0]);
    expect(me[0].hp[0]).toBe(0);
    expect(foe[0].hp[0]).toBe(0);
    expect(me.firstFainted).toBe("opponent");
});

test("생명의구슬을 든 상대가 내 마지막 포켓몬을 쓰러뜨리고 반동으로 쓰러져도 먼저 쓰러진 쪽은 나다", () => {
    const me = [mon("snorlax", ["splash"])];
    const foe = [mon("garchomp", ["earthquake"])];
    foe[0].item = foe[0].originalItem = clone(ITEMS.get("life-orb"));
    foe[0].hp[0] = 1;
    me[0].hp[0] = 1;
    doTurn(me, foe, me[0].moveset[0]);
    expect(me[0].hp[0]).toBe(0);
    expect(foe[0].hp[0]).toBe(0);
    expect(me.firstFainted).toBe("player");
});

test("폭발은 쓴 쪽이 먼저 쓰러진 것으로 치고, 둘 다 마지막 포켓몬이면 쓴 쪽이 진다", () => {
    const me = [mon("snorlax", ["explosion"])];
    const foe = [mon("blissey", ["splash"])];
    foe[0].hp[0] = 1;
    doTurn(me, foe, me[0].moveset[0]);
    expect(me[0].hp[0]).toBe(0);
    expect(foe[0].hp[0]).toBe(0);
    expect(me.firstFainted).toBe("player");
});

describe("둘 다 쓰러지면 먼저 HP가 0이 된 쪽이 진다 (반동, 가시갑옷, 철가시)", () => {
    // 상대가 나를 접촉 기술로 공격: 내 HP가 먼저 0이 되고, 그 뒤에 상대가 반동이나 내 특성으로 쓰러진다
    test.each([
        ["생명의구슬 반동", "life-orb", null],
        ["내 까칠한피부", null, "rough-skin"],
        ["내 철가시", null, "iron-barbs"],
    ])("상대가 공격해 내가 먼저 쓰러지면, 상대가 그 뒤에 쓰러져도 내가 진다: %s", (_name, foeItem, myAbility) => {
        const me = [mon("snorlax", ["splash"], myAbility)];
        const foe = [mon("garchomp", ["tackle"])];
        if (foeItem) foe[0].item = foe[0].originalItem = clone(ITEMS.get(foeItem));
        foe[0].hp[0] = 1;
        me[0].hp[0] = 1;
        doTurn(me, foe, me[0].moveset[0]);
        expect(me[0].hp[0]).toBe(0);
        expect(foe[0].hp[0]).toBe(0);
        expect(me.firstFainted).toBe("player");
    });

    // 내가 상대를 접촉 기술로 공격: 상대의 HP가 먼저 0이 되고, 그 뒤에 내가 상대 특성이나 내 반동으로 쓰러진다
    test.each([
        ["상대 까칠한피부", "rough-skin", null],
        ["상대 철가시", "iron-barbs", null],
        ["내 생명의구슬 반동", null, "life-orb"],
    ])("내가 공격해 상대가 먼저 쓰러지면, 내가 그 뒤에 쓰러져도 상대가 진다: %s", (_name, foeAbility, myItem) => {
        const me = [mon("snorlax", ["tackle"])];
        const foe = [mon("blissey", ["splash"], foeAbility)];
        if (myItem) me[0].item = me[0].originalItem = clone(ITEMS.get(myItem));
        foe[0].hp[0] = 1;
        me[0].hp[0] = 1;
        doTurn(me, foe, me[0].moveset[0]);
        expect(me[0].hp[0]).toBe(0);
        expect(foe[0].hp[0]).toBe(0);
        expect(me.firstFainted).toBe("opponent");
    });
});

describe("쓰러진 포켓몬은 능력치가 바뀌지 않는다", () => {
    const armorer = () => mon("armarouge", ["splash"], "weak-armor");
    test("깨어진갑옷: 맞고 쓰러지면 방어와 스피드가 변하지 않는다", () => {
        const me = [mon("garchomp", ["tackle"])];
        const foe = [armorer()];
        foe[0].hp[0] = 1;
        doTurn(me, foe, me[0].moveset[0]);
        expect(foe[0].hp[0]).toBe(0);
        expect(foe[0].stat_levels[1]).toBe(0);
        expect(foe[0].stat_levels[4]).toBe(0);
    });
    test("깨어진갑옷: 버티면 방어가 떨어지고 스피드가 오른다", () => {
        const me = [mon("garchomp", ["tackle"])];
        const foe = [armorer()];
        foe[0].hp[0] = foe[0].hp[1];
        doTurn(me, foe, me[0].moveset[0]);
        expect(foe[0].hp[0]).toBeGreaterThan(0);
        expect(foe[0].stat_levels[1]).toBe(-1);
        expect(foe[0].stat_levels[4]).toBe(2);
    });
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

describe("세트의 opening 기술", () => {
    const cloyster = () => {
        const c = mon("cloyster", ["shell-smash", "icicle-spear"]);
        c.factorySet = { opening: "shell-smash" };
        return c;
    };

    test("나오자마자 첫 턴에 그 기술을 쓰고, 다음 턴부터는 쓰지 않는다", () => {
        const [me, foe] = pair(mon("snorlax", ["splash"]), cloyster());
        doTurn(me, foe, me[0].moveset[0]);
        expect(foe[0].stat_levels[0]).toBe(2); // 껍질깨기: 공격 +2
        // 평소 판단(랭업기 규칙)으로도 더는 올릴 수 없는 상태로 만들어서, 또 쓰는지는 opening만 가른다
        foe[0].stat_levels.fill(6);
        doTurn(me, foe, me[0].moveset[0]);
        expect(me[0].hp[0]).toBeLessThan(me[0].hp[1]); // 두 번째 턴에는 껍질깨기를 또 쓰지 않는다
    });

    test("opening이 없으면 평소처럼 고른다", () => {
        const [me, foe] = pair(mon("snorlax", ["splash"]), mon("cloyster", ["shell-smash", "icicle-spear"]));
        foe[0].stat_levels.fill(6); // 랭업기 규칙으로도 쓸 수 없는 상태: 껍질깨기가 나온다면 opening 때문이다
        doTurn(me, foe, me[0].moveset[0]);
        expect(me[0].hp[0]).toBeLessThan(me[0].hp[1]);
    });
});

test("미스트버스트를 쓰면 쓴 포켓몬이 쓰러진다", () => {
    const [me, foe] = pair(mon("snorlax", ["misty-explosion"]), mon("blissey", ["splash"]));
    doTurn(me, foe, me[0].moveset[0]);
    expect(me[0].hp[0]).toBe(0);
    expect(foe[0].hp[0]).toBeLessThan(foe[0].hp[1]);
});

describe("가속(Speed Boost)", () => {
    test("배틀 시작 때 나와 있던 포켓몬은 첫 턴 끝에 스피드가 오른다", () => {
        const [me, foe] = pair(mon("blaziken", ["protect"], "speed-boost"), mon("blissey", ["splash"]));
        doTurn(me, foe, me[0].moveset[0]);
        expect(me[0].stat_levels[4]).toBe(1);
        doTurn(me, foe, me[0].moveset[0]);
        expect(me[0].stat_levels[4]).toBe(2);
    });
});

describe("일루전(Illusion)", () => {
    const { strongestMove } = require("shared/computermove");

    test("내 포켓몬의 일루전은 상대 컴퓨터가 속는다 (내 화면의 모습은 그대로)", () => {
        const me = [mon("zoroark", ["splash"], "illusion"), mon("machamp", ["splash"])];
        const foe = [mon("snorlax", ["psychic", "tackle"]), mon("snorlax", ["splash"])];
        enterBattle(me, foe);
        expect(me[0].illusion).toBeFalsy();
        expect(me[0].disguise).toBe(me[1]);
        // 조로아크(악 타입)에게 에스퍼 기술은 무효지만, 컴퓨터는 마기라스(격투, 에스퍼에 약함)로 본다
        expect(strongestMove(me, foe).name).toBe("psychic");
        me[0].disguise = null;
        expect(strongestMove(me, foe).name).toBe("tackle");
    });

    test("한 번 맞으면 일루전이 풀린다", () => {
        const me = [mon("zoroark", ["splash"], "illusion"), mon("blissey", ["splash"])];
        const foe = [mon("snorlax", ["tackle"]), mon("snorlax", ["splash"])];
        doTurn(me, foe, me[0].moveset[0]);
        expect(me[0].disguise).toBeNull();
    });

    test("상대(컴퓨터)의 일루전은 지금처럼 겉모습이 바뀐다", () => {
        const me = [mon("snorlax", ["splash"]), mon("blissey", ["splash"])];
        const foe = [mon("zoroark", ["splash"], "illusion"), mon("blissey", ["splash"])];
        enterBattle(me, foe);
        expect(foe[0].illusion).toBe(foe[1]);
    });
});
