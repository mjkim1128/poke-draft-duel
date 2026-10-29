// 기습(Sucker Punch) 조건, 전투 시작 때 괴짜(Imposter), 둘 다 쓰러졌을 때 마지막에 쓰러진 쪽 기록을 확인한다.
import fs from "fs";
import path from "path";
import { doTurn, enterBattle, getBaseStats, hpCalc, getUsableMoves, ensureField, setWeather, setTerrain } from "shared";

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

describe("잠긴 기술을 쓸 수 없으면 발버둥만 쓸 수 있다", () => {
    const { getUsableMoves } = require("shared");
    const choiceHolder = () => {
        const p = mon("snorlax", ["tackle", "splash", "rest"]);
        p.item = p.originalItem = clone(ITEMS.get("choice-band"));
        p.lockedMove = "tackle";
        return p;
    };
    const names = (p) => getUsableMoves(p).map((m) => m.name);
    test("구애 도구로 잠긴 기술이 사슬묶기에 당하면 발버둥만 남는다", () => {
        const p = choiceHolder();
        expect(names(p)).toEqual(["tackle"]);
        p.disabled = { move: "tackle", turns: 3 };
        expect(names(p)).toEqual(["struggle"]);
    });
    test("앙코르 기술이 사슬묶기에 당하면 발버둥만 남는다", () => {
        const p = mon("snorlax", ["tackle", "splash"]);
        p.encore = { move: "tackle", turns: 3 };
        expect(names(p)).toEqual(["tackle"]);
        p.disabled = { move: "tackle", turns: 3 };
        expect(names(p)).toEqual(["struggle"]);
    });
    test("앙코르에 걸린 변화기가 도발에 막혀도 발버둥만 남는다", () => {
        const p = mon("snorlax", ["tackle", "splash"]);
        p.encore = { move: "splash", turns: 3 };
        p.taunt = { turns: 3 };
        expect(names(p)).toEqual(["struggle"]);
    });
    test("앙코르 기술을 쓸 수 있으면 그 기술만 나간다", () => {
        const me = [mon("snorlax", ["tackle", "splash"]), mon("blissey", ["splash"])];
        const foe = [mon("garchomp", ["splash"]), mon("blissey", ["splash"])];
        me[0].encore = { move: "tackle", turns: 3 };
        expect(doTurn(me, foe, me[0].moveset[1]).toString()).toContain("used Tackle");
    });
    test("앙코르 기술이 막혔으면 고른 발버둥이 그대로 나간다 (막힌 기술로 바뀌지 않는다)", () => {
        const me = [mon("snorlax", ["tackle", "splash"]), mon("blissey", ["splash"])];
        const foe = [mon("garchomp", ["splash"]), mon("blissey", ["splash"])];
        me[0].encore = { move: "tackle", turns: 3 };
        me[0].disabled = { move: "tackle", turns: 3 };
        const struggle = getUsableMoves(me[0])[0];
        const text = doTurn(me, foe, struggle).toString();
        expect(text).toContain("used Struggle");
        expect(text).not.toContain("is disabled");
    });
});

describe("앙코르에 걸려도 교체할 수 있다", () => {
    test("내가 앙코르에 걸려 있어도 교체를 고르면 교체되고, 앙코르는 풀린다", () => {
        const me = [mon("snorlax", ["tackle", "splash"]), mon("blissey", ["splash"])];
        const foe = [mon("garchomp", ["splash"]), mon("blissey", ["splash"])];
        me[0].encore = { move: "tackle", turns: 3 };
        doTurn(me, foe, { priority: 6, index: 1 });
        expect(me[0].name).toBe("blissey");
        expect(me[1].encore).toBeNull();
    });
    test("교체하지 않으면 앙코르에 걸린 기술이 나간다", () => {
        const me = [mon("snorlax", ["tackle", "splash"]), mon("blissey", ["splash"])];
        const foe = [mon("garchomp", ["splash"]), mon("blissey", ["splash"])];
        me[0].encore = { move: "tackle", turns: 3 };
        const text = doTurn(me, foe, me[0].moveset[1]).toString();
        expect(text).toContain("used Tackle");
        expect(me[0].name).toBe("snorlax");
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

describe("가속(Speed Boost): 나온 턴의 끝부터", () => {
    test("교체해서 나온 턴의 끝에 스피드가 오르고, 그다음 턴 끝에 또 오른다", () => {
        const me = [mon("snorlax", ["splash"]), mon("blaziken", ["splash"], "speed-boost")];
        const foe = [mon("blissey", ["splash"]), mon("blissey", ["splash"])];
        doTurn(me, foe, { priority: 6, index: 1 });
        expect(me[0].name).toBe("blaziken");
        expect(me[0].stat_levels[4]).toBe(1);
        doTurn(me, foe, me[0].moveset[0]);
        expect(me[0].stat_levels[4]).toBe(2);
    });
    test("앞에 있던 포켓몬이 쓰러지고 나온 포켓몬도 그 턴의 끝부터 오른다", () => {
        const fast = mon("blaziken", ["splash"], "speed-boost");
        const me = [fast, mon("snorlax", ["splash"])];
        const foe = [mon("blissey", ["splash"])];
        doTurn(me, foe, me[0].moveset[0]);
        expect(fast.stat_levels[4]).toBe(1);
    });
    test("가속 포켓몬이 선봉으로 나왔다가 첫 턴에 교체되면, 가속이 아닌 포켓몬의 스피드는 오르지 않는다", () => {
        const booster = mon("blaziken", ["splash"], "speed-boost");
        const plain = mon("snorlax", ["splash"]);
        const me = [booster, plain];
        const foe = [mon("blissey", ["splash"]), mon("blissey", ["splash"])];
        doTurn(me, foe, { priority: 6, index: 1 });
        expect(me[0]).toBe(plain);
        expect(plain.stat_levels[4]).toBe(0);
        expect(booster.stat_levels[4]).toBe(0);
        // 가속 포켓몬이 다시 나오면 그 턴 끝에 처음부터 +1
        doTurn(me, foe, { priority: 6, index: 1 });
        expect(me[0]).toBe(booster);
        expect(booster.stat_levels[4]).toBe(1);
        expect(plain.stat_levels[4]).toBe(0);
    });
    test("상대 쪽 가속도 같다", () => {
        const me = [mon("snorlax", ["splash"])];
        const foe = [mon("snorlax", ["splash"]), mon("blaziken", ["splash"], "speed-boost")];
        doTurn(me, foe, me[0].moveset[0]);
        foe.splice(0, 1, foe[1], foe[0]); // 선두를 바꿔 낸다
        doTurn(me, foe, me[0].moveset[0]);
        expect(foe[0].name).toBe("blaziken");
        expect(foe[0].stat_levels[4]).toBeGreaterThanOrEqual(1);
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

describe("카타스트로피와 자연의분노: 상대의 남은 HP를 절반으로 (접촉하지 않는 특수 기술)", () => {
    const { makesContact } = require("shared/abilities");
    test.each(["ruination", "natures-madness"])("%s는 상대의 현재 HP의 절반을 깎는다", (name) => {
        const me = [mon("garchomp", [name])];
        me[0].moveset[0].accuracy = null; // (명중률 90이라 가끔 빗나가는 것을 막는다)
        const foe = [mon("blissey", ["splash"])];
        foe[0].hp[0] = 101;
        const full = foe[0].hp[1];
        doTurn(me, foe, me[0].moveset[0]);
        expect(foe[0].hp[0]).toBe(101 - Math.floor(101 / 2));
        expect(foe[0].hp[1]).toBe(full);
    });
    test.each(["ruination", "natures-madness"])("%s는 위력이 아니라 고정 피해이고, 접촉하지 않는 특수 기술이다", (name) => {
        const move = clone(MOVES.get(name));
        expect(move.damage_class.name).toBe("special");
        expect(makesContact(mon("garchomp", [name]), move)).toBe(false);
        const me = mon("garchomp", [name]);
        const foe = mon("blissey", ["splash"]);
        foe.hp[0] = 100;
        const { damageCalc } = require("shared");
        expect(damageCalc(me, foe, move)).toBe(50);
        // 능력치 단계나 반감 효과와 상관없다
        me.stat_levels[2] = 6;
        foe.stat_levels[3] = 6;
        expect(damageCalc(me, foe, move)).toBe(50);
    });
    test("체력이 1이어도 최소 1은 깎는다", () => {
        const { damageCalc } = require("shared");
        const me = mon("garchomp", ["ruination"]);
        const foe = mon("blissey", ["splash"]);
        foe.hp[0] = 1;
        expect(damageCalc(me, foe, clone(MOVES.get("ruination")))).toBe(1);
    });
});

describe("폭발 계열은 효과가 없어도 쓴 쪽이 쓰러진다", () => {
    test("고스트 타입에게 폭발을 써도 쓴 쪽은 쓰러진다", () => {
        const me = [mon("snorlax", ["explosion"]), mon("blissey", ["splash"])];
        const foe = [mon("gengar", ["splash"])];
        const before = foe[0].hp[0];
        doTurn(me, foe, me[0].moveset[0]);
        expect(foe[0].hp[0]).toBe(before);
        expect(me[0].hp[0]).toBe(0);
    });
    test("지키기에 막혀도 자폭한다", () => {
        const me = [mon("snorlax", ["self-destruct"]), mon("blissey", ["splash"])];
        const foe = [mon("blissey", ["protect"])];
        doTurn(me, foe, me[0].moveset[0]);
        expect(me[0].hp[0]).toBe(0);
    });
});

test("같은 턴에 상대의 앙코르가 먼저 걸리면, 그 턴에 쓰는 기술도 앙코르된 기술로 바뀐다", () => {
    const slow = mon("venusaur", ["leaf-storm", "synthesis"]);
    slow.base_stats[5] = 1;
    const me = [slow, mon("snorlax", ["splash"])];
    const foe = [mon("blissey", ["encore"]), mon("snorlax", ["splash"])];
    doTurn(me, foe, slow.moveset[0]);
    const text = doTurn(me, foe, slow.moveset[1]).join(" ");
    expect(text).toContain("received an encore");
    expect(text).toContain("Venusaur used Leaf Storm");
    expect(text).not.toContain("Venusaur used Synthesis");
});

test("리플렉터가 끝나는 턴에 사라졌다는 글이 나온다", () => {
    const me = [mon("blissey", ["reflect", "splash"])];
    const foe = [mon("snorlax", ["splash"])];
    let all = doTurn(me, foe, me[0].moveset[0]).join(" ");
    expect(me.reflectTurns).toBe(4);
    for (let i = 0; i < 4; i++) all += " " + doTurn(me, foe, me[0].moveset[1]).join(" ");
    expect(me.reflectTurns).toBe(0);
    expect(all).toContain("Your team's Reflect wore off!");
});

test.each([
    ["reflect", "reflectTurns"],
    ["light-screen", "lightScreenTurns"],
])("이미 깔려 있는 %s를 또 쓰면 실패하고 남은 턴이 그대로다", (name, key) => {
    const me = [mon("blissey", [name])];
    const foe = [mon("snorlax", ["splash"])];
    doTurn(me, foe, me[0].moveset[0]);
    expect(me[key]).toBe(4);
    const text = doTurn(me, foe, me[0].moveset[0]).join(" ");
    expect(text).toContain("But it failed!");
    expect(me[key]).toBe(3);
});

test("흑안개(Haze)로 랭크업이 지워진 쪽에만 표시가 남고, 랭크업이 없었다면 남지 않는다", () => {
    const me = [mon("blissey", ["haze"])];
    const foe = [mon("snorlax", ["splash"])];
    foe[0].stat_levels[0] = 2;
    doTurn(me, foe, me[0].moveset[0]);
    expect(foe[0].stat_levels[0]).toBe(0);
    expect(foe[0].boostsWiped).toBe(true);
    foe[0].boostsWiped = false;
    doTurn(me, foe, me[0].moveset[0]);
    expect(foe[0].boostsWiped).toBe(false);
});

describe("클리어스모그: 맞은 상대의 능력 변화를 지운다", () => {
    test("올라간 랭크업과 내려간 랭크업이 모두 사라지고, 컴퓨터는 교체를 고민할 표시가 남는다", () => {
        const me = [mon("amoonguss", ["clear-smog"])];
        const foe = [mon("snorlax", ["splash"])];
        foe[0].stat_levels[0] = 2;
        foe[0].stat_levels[1] = -1;
        const text = doTurn(me, foe, me[0].moveset[0]).join(" ");
        expect(foe[0].stat_levels.every((l) => l === 0)).toBe(true);
        expect(text).toContain("stat changes were removed");
        expect(foe[0].boostsWiped).toBe(true);
    });
    test("내려간 능력만 있었다면 표시는 남기지 않는다", () => {
        const me = [mon("amoonguss", ["clear-smog"])];
        const foe = [mon("snorlax", ["splash"])];
        foe[0].stat_levels[1] = -1;
        doTurn(me, foe, me[0].moveset[0]);
        expect(foe[0].stat_levels[1]).toBe(0);
        expect(foe[0].boostsWiped).toBe(false);
    });
    test("대타출동 뒤에 있으면 지워지지 않고, 빗나간 기술도 지우지 않는다", () => {
        const me = [mon("amoonguss", ["clear-smog"])];
        const foe = [mon("snorlax", ["splash"])];
        foe[0].stat_levels[0] = 2;
        foe[0].substitute = { hp: 9999 };
        doTurn(me, foe, me[0].moveset[0]);
        expect(foe[0].stat_levels[0]).toBe(2);
    });
    test("먼지막(Shield Dust)은 막는다", () => {
        const me = [mon("amoonguss", ["clear-smog"])];
        const foe = [mon("snorlax", ["splash"], "shield-dust")];
        foe[0].stat_levels[0] = 2;
        doTurn(me, foe, me[0].moveset[0]);
        expect(foe[0].stat_levels[0]).toBe(2);
    });
});

describe("역린 계열: 2~3턴 같은 기술로 고정되고 끝나면 혼란", () => {
    afterEach(() => jest.restoreAllMocks());
    const setup = (foeSpecies = "snorlax") => {
        const user = mon("garchomp", ["outrage", "splash"]);
        user.moveset[0].accuracy = null;
        const me = [user, mon("blissey", ["splash"])];
        const foe = [mon(foeSpecies, ["splash"]), mon("blissey", ["splash"])];
        foe[0].hp = [99999, 99999];
        return { user, me, foe };
    };

    test("2턴짜리: 첫 턴에 쓰면 다음 턴은 다른 기술을 골라도 역린이 나가고, 그 턴 끝에 혼란에 걸린다", () => {
        jest.spyOn(Math, "random").mockReturnValue(0);
        const { user, me, foe } = setup();
        doTurn(me, foe, user.moveset[0]);
        expect(user.rampage).toBeTruthy();
        expect(user.confusion).toBeFalsy();
        const text = doTurn(me, foe, user.moveset[1]).join(" ");
        expect(text).toContain("Garchomp used Outrage");
        expect(text).not.toContain("Garchomp used Splash");
        expect(text).toContain("became confused due to fatigue");
        expect(user.rampage).toBeNull();
        expect(user.confusion).toBeTruthy();
    });

    test("3턴짜리는 두 번째 턴에 혼란이 걸리지 않고 세 번째 턴 끝에 걸린다", () => {
        jest.spyOn(Math, "random").mockReturnValue(0.99);
        const { user, me, foe } = setup();
        doTurn(me, foe, user.moveset[0]);
        doTurn(me, foe, user.moveset[1]);
        expect(user.rampage).toBeTruthy();
        expect(user.confusion).toBeFalsy();
        doTurn(me, foe, user.moveset[1]);
        expect(user.rampage).toBeNull();
        expect(user.confusion).toBeTruthy();
    });

    test("고정된 동안 기술 목록은 그 기술 하나뿐이다 (PP가 없어도)", () => {
        const { user, me, foe } = setup();
        user.rampage = { move: "outrage", remaining: 1, moved: false };
        user.moveset[0].ppLeft = 0;
        expect(getUsableMoves(user).map((m) => m.name)).toEqual(["outrage"]);
    });

    test("효과가 없으면 고정이 풀리고 혼란도 걸리지 않는다", () => {
        const { user, me, foe } = setup("sylveon");
        doTurn(me, foe, user.moveset[0]);
        expect(user.rampage).toBeFalsy();
        expect(user.confusion).toBeFalsy();
    });

    test("고정된 동안은 교체할 수 없다: 교체를 고르면 그 기술이 대신 나간다", () => {
        jest.spyOn(Math, "random").mockReturnValue(0.99);
        const { user, me, foe } = setup();
        doTurn(me, foe, user.moveset[0]);
        expect(user.rampage).toBeTruthy();
        const text = doTurn(me, foe, { priority: 6, index: 1 }).join(" ");
        expect(text).toContain("Garchomp used Outrage");
        expect(me[0]).toBe(user); // 그대로 앞에 남아 있다
        expect(user.rampage).toBeTruthy(); // 3턴째라 아직 이어진다
    });

    test("고정이 끝나면 다시 교체할 수 있다", () => {
        jest.spyOn(Math, "random").mockReturnValue(0);
        const { user, me, foe } = setup();
        doTurn(me, foe, user.moveset[0]);
        doTurn(me, foe, user.moveset[1]); // 2턴짜리가 끝난다
        expect(user.rampage).toBeNull();
        doTurn(me, foe, { priority: 6, index: 1 });
        expect(me[0]).not.toBe(user);
    });

    test("컴퓨터도 고정된 동안은 교체하지 않는다 (불리한 대면이어도)", () => {
        jest.spyOn(Math, "random").mockReturnValue(0.99);
        // 컴퓨터의 역린 사용자가 상대(고스트가 아닌 노말에게 효과가 있다)와 붙는다. 벤치는 훨씬 나은 포켓몬이다
        const cpuUser = mon("garchomp", ["outrage", "splash"]);
        cpuUser.moveset[0].accuracy = null;
        cpuUser.hp = [60, cpuUser.hp[1]]; // 맞으면 쓰러질 만큼 약하다
        const cpu = [cpuUser, mon("blissey", ["splash"])];
        const human = [mon("snorlax", ["body-slam"]), mon("blissey", ["splash"])];
        cpuUser.rampage = { move: "outrage", remaining: 2, moved: false };
        doTurn(human, cpu, human[0].moveset[0]);
        expect(cpu[0]).toBe(cpuUser);
    });

    test("이미 혼란이면 지쳐서 혼란이라는 글이 또 나오지 않는다", () => {
        jest.spyOn(Math, "random").mockReturnValue(0);
        const { user, me, foe } = setup();
        user.confusion = { counter: 99 };
        const t = doTurn(me, foe, user.moveset[0]).join(" ") + doTurn(me, foe, user.moveset[1]).join(" ");
        expect(t).not.toContain("due to fatigue");
    });
});

describe("메가진화 특성", () => {
    afterEach(() => jest.restoreAllMocks());
    // 같은 조건에서 공격 한 번이 준 피해
    const damageOf = (attackerSpecies, ability, moves, foeSpecies, foeMoves = ["splash"], foeAbility = null) => {
        jest.spyOn(Math, "random").mockReturnValue(0.5);
        const me = [mon(attackerSpecies, moves, ability)];
        const foe = [mon(foeSpecies, foeMoves, foeAbility)];
        me[0].moveset[0].accuracy = null;
        const text = doTurn(me, foe, me[0].moveset[0]).join(" ");
        return { dealt: foe[0].hp[1] - foe[0].hp[0], text, me, foe };
    };

    test("스카이스킨(Aerilate): 노말 기술이 비행 타입이 되고 위력이 오른다", () => {
        const plain = damageOf("pinsir", null, ["tackle"], "venusaur").dealt;
        const aerilate = damageOf("pinsir", "aerilate", ["tackle"], "venusaur").dealt;
        expect(aerilate).toBeGreaterThan(plain * 1.8); // 풀 타입에 효과가 굉장한 비행 기술이 된다
    });

    test("드래곤스킨(Dragonize): 노말 기술이 드래곤 타입이 되고 위력이 오른다", () => {
        const plain = damageOf("feraligatr", null, ["tackle"], "dragonite").dealt;
        const dragonize = damageOf("feraligatr", "dragonize", ["tackle"], "dragonite").dealt;
        expect(dragonize).toBeGreaterThan(plain * 1.8);
    });

    test("오라가드(Aura Guard): 접촉 기술의 피해가 절반이 되고, 비접촉 기술은 그대로다", () => {
        const plain = damageOf("garchomp", null, ["tackle"], "lucario").dealt;
        const guarded = damageOf("garchomp", null, ["tackle"], "lucario", ["splash"], "aura-guard").dealt;
        expect(guarded).toBeLessThanOrEqual(Math.ceil(plain / 2) + 1);
        expect(guarded).toBeGreaterThanOrEqual(Math.floor(plain / 2) - 1);
        const plainSpecial = damageOf("garchomp", null, ["swift"], "lucario").dealt;
        const guardedSpecial = damageOf("garchomp", null, ["swift"], "lucario", ["splash"], "aura-guard").dealt;
        expect(guardedSpecial).toBe(plainSpecial);
    });

    test("일렉트릭블래스트(Eelevate): 땅 기술을 맞지 않고, 쓰러뜨리면 가장 높은 능력치가 오른다", () => {
        const hit = damageOf("garchomp", null, ["earthquake"], "eelektross", ["splash"], "eelevate");
        expect(hit.dealt).toBe(0);
        const me = [mon("eelektross", ["tackle"], "eelevate")];
        const foe = [mon("blissey", ["splash"])];
        me[0].moveset[0].accuracy = null;
        foe[0].hp[0] = 1;
        doTurn(me, foe, me[0].moveset[0]);
        expect(me[0].stat_levels.some((level) => level === 1)).toBe(true);
    });

    test("부자유친(Parental Bond): 한 번 쓰면 두 번 맞히고, 두 번째는 4분의 1 위력이다", () => {
        const single = damageOf("kangaskhan", null, ["tackle"], "snorlax");
        const double = damageOf("kangaskhan", "parental-bond", ["tackle"], "snorlax");
        expect(double.text).toContain("Hit 2 times!");
        expect(double.dealt).toBeGreaterThan(single.dealt * 1.15);
        expect(double.dealt).toBeLessThan(single.dealt * 1.35);
    });

    test("부자유친은 여러 번 때리는 기술과 변화 기술에는 적용되지 않는다", () => {
        const multi = damageOf("kangaskhan", "parental-bond", ["double-kick"], "snorlax");
        expect(multi.text).toContain("Hit 2 times!");
        const triple = damageOf("kangaskhan", "parental-bond", ["triple-kick"], "snorlax");
        expect(triple.text).toContain("Hit 3 times!");
        const status = damageOf("kangaskhan", "parental-bond", ["splash"], "snorlax");
        expect(status.text).not.toContain("Hit 2 times!");
    });

    test("관통드릴(Piercing Drill): 접촉 기술이 방어를 뚫고 4분의 1 피해를 준다", () => {
        const open = damageOf("excadrill", null, ["tackle"], "snorlax").dealt;
        const pierced = damageOf("excadrill", "piercing-drill", ["tackle"], "snorlax", ["protect"]);
        expect(pierced.text).not.toContain("protected itself");
        expect(pierced.dealt).toBeGreaterThanOrEqual(Math.floor(open / 4) - 1);
        expect(pierced.dealt).toBeLessThanOrEqual(Math.ceil(open / 4) + 1);
        const blocked = damageOf("excadrill", null, ["tackle"], "snorlax", ["protect"]);
        expect(blocked.dealt).toBe(0);
    });

    test("관통드릴도 접촉하지 않는 기술은 방어에 막힌다", () => {
        const swift = damageOf("excadrill", "piercing-drill", ["swift"], "snorlax", ["protect"]);
        expect(swift.dealt).toBe(0);
    });
});

describe("컴퓨터의 사슬묶기, 앙코르", () => {
    test("먼저 움직이는 컴퓨터는 상대가 직전에 쓴 가장 센 공격에 사슬묶기를 건다", () => {
        const me = [mon("garchomp", ["earthquake"])];
        const cpu = [mon("alakazam", ["disable", "splash"])];
        cpu[0].hp = [5000, 5000]; // 몇 번을 맞아도 버틴다
        const first = doTurn(me, cpu, me[0].moveset[0]).join(" ");
        expect(first).not.toContain("was disabled");
        const second = doTurn(me, cpu, me[0].moveset[0]).join(" ");
        expect(second).toContain("was disabled");
        expect(me[0].disabled && me[0].disabled.move).toBe("earthquake");
    });

    test("컴퓨터가 느려도 상대의 약한 공격에는 앙코르를 건다", () => {
        const me = [mon("garchomp", ["tackle"])];
        me[0].base_stats[1] = 5; // 아주 약한 공격
        const cpu = [mon("blissey", ["encore", "tackle"])];
        cpu[0].base_stats[5] = 1; // 내가 먼저 움직인다
        const first = doTurn(me, cpu, me[0].moveset[0]).join(" ");
        expect(first).not.toContain("received an encore");
        const second = doTurn(me, cpu, me[0].moveset[0]).join(" ");
        expect(second).toContain("received an encore");
        expect(me[0].encore && me[0].encore.move).toBe("tackle");
    });
});

describe("마지막일침(Fell Stinger)", () => {
    const setup = (foeHp) => {
        const me = [mon("scizor", ["fell-stinger"])];
        const foe = [mon("blissey", ["splash"])];
        me[0].moveset[0].accuracy = null;
        foe[0].hp[0] = foeHp;
        return { me, foe };
    };
    test("상대를 쓰러뜨리면 공격이 3단계 오른다", () => {
        const { me, foe } = setup(1);
        const text = doTurn(me, foe, me[0].moveset[0]).join(" ");
        expect(foe[0].hp[0]).toBe(0);
        expect(me[0].stat_levels[0]).toBe(3);
        expect(text).toContain("Attack");
    });
    test("쓰러뜨리지 못하면 오르지 않는다", () => {
        const { me, foe } = setup(5000);
        doTurn(me, foe, me[0].moveset[0]);
        expect(foe[0].hp[0]).toBeGreaterThan(0);
        expect(me[0].stat_levels[0]).toBe(0);
    });
    test("대타출동이 맞아 줘서 상대가 쓰러지지 않으면 오르지 않는다", () => {
        const { me, foe } = setup(1);
        foe[0].substitute = { hp: 9999 };
        doTurn(me, foe, me[0].moveset[0]);
        expect(foe[0].hp[0]).toBe(1);
        expect(me[0].stat_levels[0]).toBe(0);
    });
    test("다른 공격 기술로 쓰러뜨렸을 때는 오르지 않는다", () => {
        const me = [mon("scizor", ["tackle"])];
        const foe = [mon("blissey", ["splash"]), mon("snorlax", ["splash"])];
        me[0].moveset[0].accuracy = null;
        foe[0].hp[0] = 1;
        doTurn(me, foe, me[0].moveset[0]);
        expect(me[0].stat_levels[0]).toBe(0);
    });
});

describe("물의파동(Water Pulse)", () => {
    afterEach(() => jest.restoreAllMocks());
    const hit = (ability = null, random = 0.5) => {
        jest.spyOn(Math, "random").mockReturnValue(random);
        const me = [mon("blastoise", ["water-pulse"], ability)];
        const foe = [mon("snorlax", ["splash"])];
        me[0].moveset[0].accuracy = null;
        const text = doTurn(me, foe, me[0].moveset[0]).join(" ");
        return { dealt: foe[0].hp[1] - foe[0].hp[0], text, foe };
    };
    test("20% 확률로 상대를 혼란에 빠뜨린다", () => {
        const lucky = hit(null, 0.1);
        expect(lucky.foe[0].confusion).toBeTruthy();
        expect(lucky.text).toContain("became confused");
        const unlucky = hit(null, 0.5);
        expect(unlucky.foe[0].confusion).toBeFalsy();
    });
    test("메가런처(Mega Launcher)가 파동 기술의 위력을 1.5배로 올린다", () => {
        const plain = hit(null).dealt;
        const boosted = hit("mega-launcher").dealt;
        expect(boosted).toBeGreaterThan(plain * 1.35);
    });
});

describe("오로라베일(Aurora Veil)", () => {
    afterEach(() => jest.restoreAllMocks());
    const withSnow = (me, foe) => {
        const field = ensureField(me, foe);
        setWeather(field, "snow", null, []);
    };
    test("눈이나 우박이 아니면 실패한다", () => {
        const me = [mon("snorlax", ["aurora-veil"])];
        const foe = [mon("snorlax", ["splash"])];
        const text = doTurn(me, foe, me[0].moveset[0]).join(" ");
        expect(text).toContain("But it failed!");
        expect(me.auroraTurns).toBeFalsy();
    });
    test("눈이 내리면 5턴짜리 베일이 쳐진다 (턴이 끝나면 4턴)", () => {
        const me = [mon("snorlax", ["aurora-veil"])];
        const foe = [mon("snorlax", ["splash"])];
        withSnow(me, foe);
        doTurn(me, foe, me[0].moveset[0]);
        expect(me.auroraTurns).toBe(4);
    });
    test("빛의점토를 들면 8턴이다", () => {
        const me = [mon("snorlax", ["aurora-veil"])];
        me[0].item = { name: "light-clay" };
        const foe = [mon("snorlax", ["splash"])];
        withSnow(me, foe);
        doTurn(me, foe, me[0].moveset[0]);
        expect(me.auroraTurns).toBe(7);
    });
    test("이미 쳐 있으면 실패한다", () => {
        const me = [mon("snorlax", ["aurora-veil"])];
        const foe = [mon("snorlax", ["splash"])];
        withSnow(me, foe);
        doTurn(me, foe, me[0].moveset[0]);
        const text = doTurn(me, foe, me[0].moveset[0]).join(" ");
        expect(text).toContain("But it failed!");
        expect(me.auroraTurns).toBe(3);
    });
    test("물리와 특수 피해를 모두 절반으로 줄인다", () => {
        for (const move of ["tackle", "swift"]) {
            const taken = (veil) => {
                jest.spyOn(Math, "random").mockReturnValue(0.5);
                const me = [mon("snorlax", ["splash"])];
                if (veil) me.auroraTurns = 5;
                const foe = [mon("garchomp", [move])];
                foe[0].moveset[0].accuracy = null;
                doTurn(me, foe, me[0].moveset[0]);
                jest.restoreAllMocks();
                return me[0].hp[1] - me[0].hp[0];
            };
            const plain = taken(false);
            const veiled = taken(true);
            expect(veiled).toBeLessThanOrEqual(Math.ceil(plain / 2) + 1);
            expect(veiled).toBeGreaterThanOrEqual(Math.floor(plain / 2) - 1);
        }
    });
});

describe("썬더다이브(Supercell Slam)", () => {
    afterEach(() => jest.restoreAllMocks());
    const use = (foeSpecies, random = 0.5) => {
        jest.spyOn(Math, "random").mockReturnValue(random);
        const me = [mon("raichu", ["supercell-slam"])];
        const foe = [mon(foeSpecies, ["splash"])];
        const max = me[0].hp[1];
        const text = doTurn(me, foe, me[0].moveset[0]).join(" ");
        return { me, foe, max, text };
    };
    test("맞으면 일반 공격이고 반동은 없다", () => {
        const { me, max, foe } = use("snorlax");
        expect(foe[0].hp[0]).toBeLessThan(foe[0].hp[1]);
        expect(me[0].hp[0]).toBe(max);
    });
    test("빗나가면 쓴 쪽이 최대 체력의 절반을 잃는다", () => {
        const { me, max, text } = use("snorlax", 0.99); // 명중 95%에 걸리지 않는다
        expect(text).toContain("missed");
        expect(me[0].hp[0]).toBe(max - Math.floor(max / 2));
    });
    test("땅 타입처럼 효과가 없는 상대에게도 최대 체력의 절반을 잃는다", () => {
        const { me, max, foe } = use("garchomp");
        expect(foe[0].hp[0]).toBe(foe[0].hp[1]);
        expect(me[0].hp[0]).toBe(max - Math.floor(max / 2));
    });
});

describe("변덕쟁이(Moody)", () => {
    afterEach(() => jest.restoreAllMocks());
    const oneTurn = () => {
        const me = [mon("glalie", ["splash"], "moody")];
        const foe = [mon("snorlax", ["splash"])];
        doTurn(me, foe, me[0].moveset[0]);
        return me[0].stat_levels;
    };
    test("턴이 끝날 때 한 능력치가 2단계 오르고, 다른 하나가 1단계 내린다", () => {
        for (let i = 0; i < 40; i++) {
            const levels = oneTurn();
            expect(levels.filter((l) => l === 2)).toHaveLength(1);
            expect(levels.filter((l) => l === -1)).toHaveLength(1);
            expect(levels.filter((l) => l === 0)).toHaveLength(5);
        }
    });
    test("명중률과 회피율도 대상에 들어간다", () => {
        const touched = new Set();
        for (let i = 0; i < 300; i++) oneTurn().forEach((l, idx) => l !== 0 && touched.add(idx));
        expect([...touched].sort()).toEqual([0, 1, 2, 3, 4, 5, 6]);
    });
    test("이미 최대(+6)인 능력치는 더 오르지 않고, 최저(-6)인 능력치는 더 내리지 않는다", () => {
        for (let i = 0; i < 60; i++) {
            const me = [mon("glalie", ["splash"], "moody")];
            me[0].stat_levels = [6, 6, 6, 6, 6, 6, -6];
            const foe = [mon("snorlax", ["splash"])];
            doTurn(me, foe, me[0].moveset[0]);
            // 오를 수 있는 것은 회피율(-6 -> -4)뿐, 내릴 수 있는 것은 +6인 여섯 개 중 하나
            expect(me[0].stat_levels[6]).toBe(-4);
            expect(me[0].stat_levels.slice(0, 6).filter((l) => l === 5)).toHaveLength(1);
        }
    });
});

describe("폭발펀치(Dynamic Punch)", () => {
    afterEach(() => jest.restoreAllMocks());
    const hit = (random, foeAbility = null) => {
        jest.spyOn(Math, "random").mockReturnValue(random);
        const me = [mon("machamp", ["dynamic-punch"])];
        const foe = [mon("snorlax", ["splash"], foeAbility)];
        const text = doTurn(me, foe, me[0].moveset[0]).join(" ");
        return { foe, text };
    };
    test("맞으면 반드시 혼란에 빠뜨린다", () => {
        const { foe, text } = hit(0.3); // 명중 50%에 걸린다
        expect(foe[0].hp[0]).toBeLessThan(foe[0].hp[1]);
        expect(foe[0].confusion).toBeTruthy();
        expect(text).toContain("became confused");
    });
    test("빗나가면 피해도 혼란도 없다 (명중 50%)", () => {
        const { foe, text } = hit(0.9);
        expect(text).toContain("missed");
        expect(foe[0].hp[0]).toBe(foe[0].hp[1]);
        expect(foe[0].confusion).toBeFalsy();
    });
    test("마이페이스처럼 혼란을 막는 특성에는 혼란에 빠지지 않는다", () => {
        const { foe } = hit(0.3, "own-tempo");
        expect(foe[0].hp[0]).toBeLessThan(foe[0].hp[1]);
        expect(foe[0].confusion).toBeFalsy();
    });
});

describe("볼트태클(Volt Tackle)", () => {
    afterEach(() => jest.restoreAllMocks());
    const hit = (random, ability = null) => {
        jest.spyOn(Math, "random").mockReturnValue(random);
        const me = [mon("raichu", ["volt-tackle"], ability)];
        const foe = [mon("snorlax", ["splash"])];
        const text = doTurn(me, foe, me[0].moveset[0]).join(" ");
        return { me, foe, text, dealt: foe[0].hp[1] - foe[0].hp[0], lost: me[0].hp[1] - me[0].hp[0] };
    };
    test("준 피해의 33%를 반동으로 받는다", () => {
        const { dealt, lost, text } = hit(0.5);
        expect(dealt).toBeGreaterThan(0);
        expect(text).toContain("recoil");
        expect(lost).toBeGreaterThanOrEqual(Math.floor(dealt * 0.33) - 1);
        expect(lost).toBeLessThanOrEqual(Math.floor(dealt * 0.33) + 1);
    });
    test("바위머리(Rock Head)는 반동을 받지 않는다", () => {
        const { lost, dealt } = hit(0.5, "rock-head");
        expect(dealt).toBeGreaterThan(0);
        expect(lost).toBe(0);
    });
    test("10% 확률로 마비시킨다", () => {
        expect(hit(0.05).foe[0].status && hit(0.05).foe[0].status.name).toBe("paralysis");
        expect(hit(0.5).foe[0].status).toBeFalsy();
    });
});

describe("전자포(Zap Cannon)", () => {
    afterEach(() => jest.restoreAllMocks());
    const hit = (random, foeSpecies = "snorlax") => {
        jest.spyOn(Math, "random").mockReturnValue(random);
        const me = [mon("magnezone", ["zap-cannon"])];
        const foe = [mon(foeSpecies, ["splash"])];
        const text = doTurn(me, foe, me[0].moveset[0]).join(" ");
        return { foe, text };
    };
    test("맞으면 반드시 마비시킨다", () => {
        const { foe } = hit(0.3); // 명중 50%에 걸린다
        expect(foe[0].hp[0]).toBeLessThan(foe[0].hp[1]);
        expect(foe[0].status && foe[0].status.name).toBe("paralysis");
    });
    test("빗나가면 피해도 마비도 없다 (명중 50%)", () => {
        const { foe, text } = hit(0.9);
        expect(text).toContain("missed");
        expect(foe[0].hp[0]).toBe(foe[0].hp[1]);
        expect(foe[0].status).toBeFalsy();
    });
    test("땅 타입에게는 효과가 없다", () => {
        const { foe } = hit(0.3, "garchomp");
        expect(foe[0].hp[0]).toBe(foe[0].hp[1]);
        expect(foe[0].status).toBeFalsy();
    });
    test("전기 타입은 마비에 걸리지 않지만 피해는 받는다", () => {
        const { foe } = hit(0.3, "raichu");
        expect(foe[0].hp[0]).toBeLessThan(foe[0].hp[1]);
        expect(foe[0].status).toBeFalsy();
    });
});

describe("노가드(No Guard)와 명중률이 낮은 기술", () => {
    afterEach(() => jest.restoreAllMocks());
    const zap = (attackerAbility, foeAbility) => {
        jest.spyOn(Math, "random").mockReturnValue(0.99); // 평소라면 명중 50%에 걸리지 않는다
        const me = [mon("magnezone", ["zap-cannon"], attackerAbility)];
        const foe = [mon("snorlax", ["splash"], foeAbility)];
        const text = doTurn(me, foe, me[0].moveset[0]).join(" ");
        return { foe, text };
    };
    test("노가드가 아니면 빗나간다", () => {
        const { foe, text } = zap(null, null);
        expect(text).toContain("missed");
        expect(foe[0].status).toBeFalsy();
    });
    test("쓰는 쪽이 노가드면 반드시 맞고, 그러면 마비도 반드시 걸린다", () => {
        const { foe, text } = zap("no-guard", null);
        expect(text).not.toContain("missed");
        expect(foe[0].hp[0]).toBeLessThan(foe[0].hp[1]);
        expect(foe[0].status && foe[0].status.name).toBe("paralysis");
    });
    test("맞는 쪽이 노가드여도 반드시 맞는다", () => {
        const { foe, text } = zap(null, "no-guard");
        expect(text).not.toContain("missed");
        expect(foe[0].status && foe[0].status.name).toBe("paralysis");
    });
});

describe("파괴광선(Hyper Beam)", () => {
    afterEach(() => jest.restoreAllMocks());
    const setup = (foeSpecies = "snorlax") => {
        jest.spyOn(Math, "random").mockReturnValue(0.5);
        const user = mon("tauros", ["hyper-beam", "splash"]);
        const me = [user, mon("blissey", ["splash"])];
        const foe = [mon(foeSpecies, ["splash"])];
        foe[0].hp = [99999, 99999];
        return { user, me, foe };
    };
    test("맞히면 다음 턴은 반동으로 움직이지 못한다", () => {
        const { user, me, foe } = setup();
        doTurn(me, foe, user.moveset[0]);
        expect(foe[0].hp[0]).toBeLessThan(foe[0].hp[1]);
        expect(user.mustRecharge).toBe(true);
        const second = doTurn(me, foe, user.moveset[0]).join(" ");
        expect(second).toContain("must recharge!");
        expect(second).not.toContain("used Hyper Beam");
        expect(user.mustRecharge).toBe(false);
        const third = doTurn(me, foe, user.moveset[0]).join(" ");
        expect(third).toContain("used Hyper Beam"); // 그다음 턴에는 다시 쓸 수 있다
    });
    test("빗나가면 반동이 없다 (명중 90%)", () => {
        const { user, me, foe } = setup();
        jest.spyOn(Math, "random").mockReturnValue(0.97);
        const text = doTurn(me, foe, user.moveset[0]).join(" ");
        expect(text).toContain("missed");
        expect(user.mustRecharge).toBeFalsy();
    });
    test("고스트 타입처럼 효과가 없는 상대에게는 반동이 없다", () => {
        const { user, me, foe } = setup("gengar");
        doTurn(me, foe, user.moveset[0]);
        expect(foe[0].hp[0]).toBe(foe[0].hp[1]);
        expect(user.mustRecharge).toBeFalsy();
    });
    test("반동 턴에 교체하면 반동이 사라진다", () => {
        const { user, me, foe } = setup();
        doTurn(me, foe, user.moveset[0]);
        doTurn(me, foe, { priority: 6, index: 1 });
        expect(user.mustRecharge).toBeFalsy();
    });
});

describe("땅가르기(Fissure)", () => {
    afterEach(() => jest.restoreAllMocks());
    const use = (random, foeSpecies = "snorlax", { foeAbility = null, attackerAbility = null } = {}) => {
        jest.spyOn(Math, "random").mockReturnValue(random);
        const me = [mon("excadrill", ["fissure"], attackerAbility)];
        const foe = [mon(foeSpecies, ["splash"], foeAbility)];
        const text = doTurn(me, foe, me[0].moveset[0]).join(" ");
        return { foe, text };
    };
    test("명중 30%에 걸리면 상대를 한 번에 쓰러뜨린다", () => {
        const { foe, text } = use(0.1);
        expect(foe[0].hp[0]).toBe(0);
        expect(text).toContain("fainted");
    });
    test("명중 30%에 걸리지 않으면 빗나간다", () => {
        const { foe, text } = use(0.5);
        expect(text).toContain("missed");
        expect(foe[0].hp[0]).toBe(foe[0].hp[1]);
    });
    test("비행 타입처럼 땅 기술이 통하지 않는 상대에게는 효과가 없다", () => {
        const { foe } = use(0.1, "pidgeot");
        expect(foe[0].hp[0]).toBe(foe[0].hp[1]);
    });
    test("옹골찬(Sturdy) 특성에는 일격필살기가 통하지 않는다", () => {
        const { foe, text } = use(0.1, "snorlax", { foeAbility: "sturdy" });
        expect(foe[0].hp[0]).toBe(foe[0].hp[1]);
        expect(text).toContain("doesn't affect");
    });
    test("노가드면 반드시 맞는다", () => {
        const { foe } = use(0.99, "snorlax", { attackerAbility: "no-guard" });
        expect(foe[0].hp[0]).toBe(0);
    });
});

describe("사이코필드는 땅에 닿아 있는 포켓몬에게 선제 기술을 막는다", () => {
    const use = (move, foeSpecies, foeAbility = null) => {
        const me = [mon("garchomp", [move])];
        const foe = [mon(foeSpecies, ["splash"], foeAbility)];
        setTerrain(ensureField(me, foe), "psychic", null, []);
        const text = doTurn(me, foe, me[0].moveset[0]).join(" ");
        return { text, hurt: foe[0].hp[0] < foe[0].hp[1] };
    };
    test.each([["accelerock"], ["first-impression"], ["quick-attack"]])("%s: 땅에 닿은 상대에게는 막힌다", (move) => {
        const { text, hurt } = use(move, "snorlax");
        expect(text).toContain("protected by the Psychic Terrain");
        expect(hurt).toBe(false);
    });
    test("비행 타입이나 부유 특성처럼 떠 있는 상대에게는 막히지 않는다", () => {
        expect(use("accelerock", "pidgeot").hurt).toBe(true);
        expect(use("accelerock", "snorlax", "levitate").hurt).toBe(true);
    });
    test("선제 기술이 아니면 막히지 않는다", () => {
        expect(use("earthquake", "snorlax").hurt).toBe(true);
    });
});

describe("하품(Yawn): 졸음은 교체하면 풀린다", () => {
    test("하품을 맞은 포켓몬이 교체해서 빠지면 졸음이 사라지고, 다시 나와도 잠들지 않는다", () => {
        const sleepy = mon("snorlax", ["splash"]);
        sleepy.yawn = 1; // 하품을 맞고 한 턴이 지났다 (이번 턴 끝에 잠든다)
        const me = [sleepy, mon("blissey", ["splash"])];
        const foe = [mon("garchomp", ["splash"])];
        doTurn(me, foe, { priority: 6, index: 1 });
        expect(sleepy.yawn).toBeFalsy();
        doTurn(me, foe, { priority: 6, index: 1 });
        doTurn(me, foe, sleepy.moveset[0]);
        expect(sleepy.status).toBeFalsy();
    });
    test("교체하지 않으면 다음 턴 끝에 잠든다", () => {
        const sleepy = mon("snorlax", ["splash"]);
        sleepy.yawn = 1;
        const me = [sleepy];
        const foe = [mon("garchomp", ["splash"])];
        doTurn(me, foe, sleepy.moveset[0]);
        expect(sleepy.status && sleepy.status.name).toBe("sleep");
    });
});
