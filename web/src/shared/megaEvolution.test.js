// 메가진화: 진화 시점과 효과, 팀당 한 번, 스톤 고정, 컴퓨터 진화, 배틀이 끝나면 원래대로
import fs from "fs";
import path from "path";
import { doTurn, doSwitch, getBaseStats, hpCalc } from "shared";
import { canMegaEvolve, megaFormOf, revertMega } from "shared/mega";
import megas from "shared/megas.json";

const read = (file) => JSON.parse(fs.readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/" + file), "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const ITEMS = new Map(read("items.json").map((i) => [i.name, i]));
const clone = (x) => JSON.parse(JSON.stringify(x));

function mon(species, moves, { item = null, ability = null } = {}) {
    const p = clone(POKEMON.get(species));
    p.base_stats = getBaseStats(p);
    p.hp = [hpCalc(p.base_stats[0]) * 4, hpCalc(p.base_stats[0]) * 4];
    p.stat_levels = Array(7).fill(0);
    p.item = item ? clone(ITEMS.get(item)) : null;
    p.originalItem = p.item;
    p.ability = ability ? { name: ability } : null;
    p.baseAbility = p.ability;
    p.moveset = moves.map((m) => clone(MOVES.get(m)));
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, lastMoveName: null, moveRepeatCount: 0 });
    return p;
}
const formOf = (name) => megas.find((m) => m.name === name);

describe("메가진화 효과", () => {
    test("진화하면 종족값, 타입, 특성, 이름, 스프라이트가 바뀌고 HP와 기술, 도구는 그대로다", () => {
        const venusaur = mon("venusaur", ["splash"], { item: "venusaurite", ability: "overgrow" });
        const hp = [...venusaur.hp];
        const frontBefore = venusaur.sprites.front_default;
        const me = [venusaur, mon("snorlax", ["splash"])];
        const foe = [mon("snorlax", ["splash"])];
        const text = doTurn(me, foe, venusaur.moveset[0], { mega: true }).join(" ");
        const form = formOf("venusaur-mega");
        expect(text).toContain("is reacting!");
        expect(text).toContain("Mega Evolved into Mega Venusaur!");
        expect(venusaur.base_stats.slice(1)).toEqual(getBaseStats({ stats: form.stats }).slice(1));
        expect(venusaur.ability.name).toBe("thick-fat");
        expect(venusaur.baseAbility.name).toBe("thick-fat");
        expect(venusaur.korean_name).toBe("메가이상해꽃");
        expect(venusaur.sprites.front_default).toBe(form.sprites.front_default);
        expect(venusaur.sprites.front_default).not.toBe(frontBefore);
        expect(venusaur.hp).toEqual(hp);
        expect(venusaur.moveset.map((m) => m.name)).toEqual(["splash"]);
        expect(venusaur.item.name).toBe("venusaurite");
        expect(me.megaUsed).toBe(true);
    });

    test("타입도 바뀐다 (메가갸라도스는 물/악)", () => {
        const gyarados = mon("gyarados", ["splash"], { item: "gyaradosite", ability: "intimidate" });
        const me = [gyarados];
        doTurn(me, [mon("snorlax", ["splash"])], gyarados.moveset[0], { mega: true });
        expect(gyarados.types.map((t) => t.type.name)).toEqual(["water", "dark"]);
    });

    test("진화 버튼을 누르지 않으면 진화하지 않는다", () => {
        const venusaur = mon("venusaur", ["splash"], { item: "venusaurite", ability: "overgrow" });
        const me = [venusaur];
        doTurn(me, [mon("snorlax", ["splash"])], venusaur.moveset[0]);
        expect(venusaur.megaOriginal).toBeFalsy();
        expect(venusaur.ability.name).toBe("overgrow");
        expect(canMegaEvolve(me)).toBe(true);
    });

    test("스톤이 없거나 짝이 맞지 않으면 진화할 수 없다", () => {
        const noStone = mon("venusaur", ["splash"]);
        expect(megaFormOf(noStone)).toBeNull();
        const wrong = mon("blastoise", ["splash"], { item: "venusaurite" });
        expect(megaFormOf(wrong)).toBeNull();
        const me = [wrong];
        doTurn(me, [mon("snorlax", ["splash"])], wrong.moveset[0], { mega: true });
        expect(wrong.megaOriginal).toBeFalsy();
    });

    test("교체를 고른 턴에는 진화하지 않는다", () => {
        const venusaur = mon("venusaur", ["splash"], { item: "venusaurite" });
        const me = [mon("snorlax", ["splash"]), venusaur];
        doTurn(me, [mon("blissey", ["splash"])], { priority: 6, index: 1 }, { mega: true });
        expect(me[0].name).toBe("venusaur");
        expect(venusaur.megaOriginal).toBeFalsy();
        expect(me.megaUsed).toBeFalsy();
    });

    test("진화 직후 속도가 새로 계산되어 그 턴의 순서에 반영된다", () => {
        const order = (mega) => {
            const pinsir = mon("pinsir", ["tackle"], { item: "pinsirite", ability: "hyper-cutter" });
            pinsir.moveset[0].accuracy = null;
            const garchomp = mon("garchomp", ["tackle"]);
            garchomp.moveset[0].accuracy = null;
            const text = doTurn([pinsir], [garchomp], pinsir.moveset[0], { mega }).join(" ");
            const mine = text.search(/Pinsir used Tackle/);
            const theirs = text.search(/Garchomp used Tackle/);
            return mine < theirs;
        };
        expect(order(false)).toBe(false); // 한카리아스(102)가 쁘사이저(85)보다 빠르다
        expect(order(true)).toBe(true); // 메가쁘사이저(105)가 더 빠르다
    });

    test("새 특성의 등장 효과가 바로 일어난다 (메가썬더볼트의 위협)", () => {
        const manectric = mon("manectric", ["splash"], { item: "manectite", ability: "static" });
        const foe = [mon("snorlax", ["splash"])];
        doTurn([manectric], foe, manectric.moveset[0], { mega: true });
        expect(foe[0].stat_levels[0]).toBe(-1);
    });

    test("메가리자몽Y의 가뭄으로 날씨가 쾌청이 된다", () => {
        const charizard = mon("charizard", ["splash"], { item: "charizardite-y", ability: "blaze" });
        const me = [charizard];
        doTurn(me, [mon("snorlax", ["splash"])], charizard.moveset[0], { mega: true });
        expect(me.field.weather && me.field.weather.name).toBe("sun");
    });
});

describe("한 팀은 한 배틀에 한 번만", () => {
    test("스톤을 든 포켓몬이 둘이어도 먼저 진화한 한 마리뿐이다", () => {
        const venusaur = mon("venusaur", ["splash"], { item: "venusaurite" });
        const blastoise = mon("blastoise", ["splash"], { item: "blastoisinite" });
        const me = [venusaur, blastoise];
        const foe = [mon("snorlax", ["splash"])];
        doTurn(me, foe, venusaur.moveset[0], { mega: true });
        expect(venusaur.megaOriginal).toBeTruthy();
        doTurn(me, foe, { priority: 6, index: 1 });
        expect(me[0].name).toBe("blastoise");
        expect(canMegaEvolve(me)).toBe(false);
        doTurn(me, foe, me[0].moveset[0], { mega: true });
        expect(blastoise.megaOriginal).toBeFalsy();
    });

    test("교체해서 빠졌다가 다시 나와도 진화한 모습이 유지된다", () => {
        const venusaur = mon("venusaur", ["splash"], { item: "venusaurite", ability: "overgrow" });
        const me = [venusaur, mon("snorlax", ["splash"])];
        const foe = [mon("blissey", ["splash"])];
        doTurn(me, foe, venusaur.moveset[0], { mega: true });
        doTurn(me, foe, { priority: 6, index: 1 });
        doTurn(me, foe, { priority: 6, index: 1 });
        expect(me[0]).toBe(venusaur);
        expect(venusaur.ability.name).toBe("thick-fat");
        expect(venusaur.korean_name).toBe("메가이상해꽃");
    });

    test("배틀이 끝나 되돌리면 원래 모습으로 돌아온다", () => {
        const venusaur = mon("venusaur", ["splash"], { item: "venusaurite", ability: "overgrow" });
        const before = { stats: [...venusaur.base_stats], types: clone(venusaur.types), front: venusaur.sprites.front_default, name: venusaur.korean_name };
        const me = [venusaur];
        doTurn(me, [mon("snorlax", ["splash"])], venusaur.moveset[0], { mega: true });
        revertMega(venusaur);
        expect(venusaur.base_stats).toEqual(before.stats);
        expect(venusaur.types).toEqual(before.types);
        expect(venusaur.sprites.front_default).toBe(before.front);
        expect(venusaur.korean_name).toBe(before.name);
        expect(venusaur.ability.name).toBe("overgrow");
        expect(venusaur.megaOriginal).toBeNull();
        expect(megaFormOf(venusaur)).toBeTruthy(); // 다음 배틀에 다시 진화할 수 있다
    });
});

describe("메가스톤 고정", () => {
    test("도구 떨구기, 도둑질, 트릭, 던지기로 스톤을 빼앗거나 바꿀 수 없다", () => {
        for (const foeMove of ["knock-off", "thief", "trick", "fling"]) {
            const venusaur = mon("venusaur", ["splash"], { item: "venusaurite" });
            const foe = mon("snorlax", [foeMove], { item: foeMove === "fling" ? "leftovers" : null });
            foe.moveset[0].accuracy = null;
            doTurn([venusaur], [foe], venusaur.moveset[0]);
            expect(venusaur.item && venusaur.item.name).toBe("venusaurite");
        }
    });

    test("스톤을 든 쪽이 트릭이나 던지기를 써도 스톤은 그대로다", () => {
        for (const myMove of ["trick", "fling"]) {
            const venusaur = mon("venusaur", [myMove], { item: "venusaurite" });
            venusaur.moveset[0].accuracy = null;
            const foe = mon("snorlax", ["splash"], { item: "leftovers" });
            doTurn([venusaur], [foe], venusaur.moveset[0]);
            expect(venusaur.item && venusaur.item.name).toBe("venusaurite");
            expect(foe.item.name).toBe("leftovers");
        }
    });
});

describe("컴퓨터의 메가진화", () => {
    test("스톤을 든 컴퓨터 포켓몬은 첫 턴에 바로 진화한다", () => {
        const cpu = mon("venusaur", ["splash"], { item: "venusaurite", ability: "overgrow" });
        const me = [mon("snorlax", ["splash"])];
        const text = doTurn(me, [cpu], me[0].moveset[0]).join(" ");
        expect(text).toContain("Mega Evolved into Mega Venusaur!");
        expect(cpu.ability.name).toBe("thick-fat");
    });

    test("컴퓨터도 팀당 한 번이고, 후열이 나와도 이미 썼으면 진화하지 않는다", () => {
        const first = mon("venusaur", ["splash"], { item: "venusaurite" });
        const second = mon("blastoise", ["splash"], { item: "blastoisinite" });
        const cpu = [first, second];
        const me = [mon("snorlax", ["splash"])];
        doTurn(me, cpu, me[0].moveset[0]);
        expect(first.megaOriginal).toBeTruthy();
        expect(cpu.megaUsed).toBe(true);
        doSwitch(cpu, 1, { foeTeam: me });
        doTurn(me, cpu, me[0].moveset[0]);
        expect(second.megaOriginal).toBeFalsy();
    });
});

test("진화 전 이름과 진화 후 이름이 로그에 맞게 나온다 (영어)", () => {
    const venusaur = mon("venusaur", ["splash"], { item: "venusaurite" });
    const text = doTurn([venusaur], [mon("snorlax", ["splash"])], venusaur.moveset[0], { mega: true }).join(" ");
    expect(text).toMatch(/Venusaur's .+ is reacting!/);
});
