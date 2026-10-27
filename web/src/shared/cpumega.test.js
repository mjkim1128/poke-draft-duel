// 컴퓨터가 메가진화를 미루는 경우 (펜드라, 샤크니아: 가속 / 픽시: 천진 / 갸라도스: 땅 기술)
import fs from "fs";
import path from "path";
import { doTurn, ensureField, getBaseStats, hpCalc } from "shared";
import { bestDamage } from "shared/cpusetup";

const read = (file) => JSON.parse(fs.readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/" + file), "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const ITEMS = new Map(read("items.json").map((i) => [i.name, i]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
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
    for (const m of p.moveset) m.accuracy = null;
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, lastMoveName: null, moveRepeatCount: 0 });
    return p;
}

beforeEach(() => jest.spyOn(Math, "random").mockReturnValue(0.5));
afterEach(() => jest.restoreAllMocks());

// 공격자가 방어자에게 한 번 주는 가장 센 피해
const bestDamageOn = (attacker, defender) => bestDamage(attacker, defender, null);
const weak = (species = "snorlax") => {
    const m = mon(species, ["tackle"]);
    m.base_stats[1] = 5; // 공격이 아주 약해서 한 방에 쓰러지지 않는다
    return m;
};

describe("펜드라, 샤크니아 (가속)", () => {
    // 상대의 스피드를 정해서, 진화한 모습이 앞지르려면 가속이 몇 단계 필요한지 맞춘다
    // (메가펜드라 스피드 종족값 62: 0단계 160, +1 240, +2 320, +3 400 / 메가샤크니아 105: 0단계 246, +1 369)
    const foeWithSpeed = (base, extra = {}) => {
        const m = weak();
        m.base_stats[5] = base;
        return Object.assign(m, extra);
    };
    const scolipede = (moves, ability = "speed-boost") => mon("scolipede", moves, { item: "scolipite", ability });

    test("한 턴이면 앞지르고 방어가 있으면: 방어를 쓰고 진화하지 않고, 스피드가 1단계 오른 다음 턴에 진화한다", () => {
        const cpu = scolipede(["protect", "earthquake"]);
        const foe = foeWithSpeed(80); // 진화한 모습 160 < 196 < 240 (+1이면 앞지른다)
        const first = doTurn([foe], [cpu], foe.moveset[0]).join(" ");
        expect(first).toContain("used Protect");
        expect(first).not.toContain("Mega Evolved");
        expect(cpu.stat_levels[4]).toBe(1);
        expect(doTurn([foe], [cpu], foe.moveset[0]).join(" ")).toContain("Mega Evolved into Mega Scolipede");
    });
    test("두 턴이 걸리고 버틸 수 있으면: 방어 → 랭업기로 두 단계를 쌓은 뒤 진화한다", () => {
        const cpu = scolipede(["protect", "swords-dance", "earthquake"]);
        const foe = foeWithSpeed(102); // 240: +1은 같아서 못 앞지르고 +2(320)여야 앞지른다
        const t1 = doTurn([foe], [cpu], foe.moveset[0]).join(" ");
        expect(t1).toContain("used Protect");
        expect(cpu.megaOriginal).toBeFalsy();
        const t2 = doTurn([foe], [cpu], foe.moveset[0]).join(" ");
        expect(t2).toContain("used Swords Dance"); // 방어는 연속으로 쓰지 않는다
        expect(cpu.megaOriginal).toBeFalsy();
        expect(cpu.stat_levels[4]).toBe(2);
        expect(doTurn([foe], [cpu], foe.moveset[0]).join(" ")).toContain("Mega Evolved into Mega Scolipede");
    });
    test("앞지르는 데 걸리는 턴 수가 버티는 턴 수보다 길면 기다리지 않고 바로 진화한다", () => {
        const cpu = scolipede(["swords-dance", "earthquake"]);
        const foe = foeWithSpeed(142); // +3은 필요하다
        foe.base_stats[1] = 140; // 몇 번 못 버틴다
        const target = bestDamageOn(foe, cpu);
        cpu.hp = [Math.floor(target * 2.5), Math.floor(target * 2.5)]; // 3번째 공격에 쓰러진다
        expect(doTurn([foe], [cpu], foe.moveset[0]).join(" ")).toContain("Mega Evolved into Mega Scolipede");
    });
    test("버틸 수 있는 만큼은 길게 기다린다 (세 턴짜리도)", () => {
        const cpu = scolipede(["swords-dance", "earthquake"]);
        const foe = foeWithSpeed(142); // +3(400)이어야 앞지른다
        const turns = [];
        for (let i = 0; i < 4; i++) turns.push(doTurn([foe], [cpu], foe.moveset[0]).join(" "));
        expect(turns[0]).toContain("used Swords Dance");
        expect(turns[1]).toContain("used Swords Dance");
        expect(turns[2]).toContain("used Swords Dance");
        expect(turns.slice(0, 3).join(" ")).not.toContain("Mega Evolved");
        expect(turns[3]).toContain("Mega Evolved into Mega Scolipede");
        expect(cpu.stat_levels[4]).toBe(3);
    });
    test("진화한 모습이 이미 먼저 움직이면 기다리지 않고 바로 진화한다", () => {
        const cpu = scolipede(["protect", "earthquake"]);
        expect(doTurn([weak()], [cpu], weak().moveset[0]).join(" ")).toContain("Mega Evolved into Mega Scolipede");
    });
    test("기다리는 동안 쓸 방어와 변화기가 없으면 바로 진화한다", () => {
        const cpu = scolipede(["earthquake", "poison-jab"]);
        const foe = foeWithSpeed(80);
        expect(doTurn([foe], [cpu], foe.moveset[0]).join(" ")).toContain("Mega Evolved into Mega Scolipede");
    });
    test("트릭룸이 깔려 있으면 가속을 쌓아도 이득이 없으므로 바로 진화한다", () => {
        const cpu = scolipede(["protect", "earthquake"]);
        const foe = foeWithSpeed(80);
        const me = [foe];
        const theirs = [cpu];
        ensureField(me, theirs).trickRoom = { turns: 4 };
        expect(doTurn(me, theirs, foe.moveset[0]).join(" ")).toContain("Mega Evolved into Mega Scolipede");
    });
    test("랭업기가 있는 샤크니아: 한 턴 쌓으면 앞지른다면 쌓고 진화한다", () => {
        const cpu = mon("sharpedo", ["swords-dance", "crunch"], { item: "sharpedonite", ability: "speed-boost" });
        const foe = foeWithSpeed(120); // 진화한 모습 246 < 276 < 369
        const first = doTurn([foe], [cpu], foe.moveset[0]).join(" ");
        expect(first).toContain("used Swords Dance");
        expect(first).not.toContain("Mega Evolved");
        expect(doTurn([foe], [cpu], foe.moveset[0]).join(" ")).toContain("Mega Evolved into Mega Sharpedo");
    });
    test("한 방에 쓰러지면(버티지 못하면) 바로 진화한다", () => {
        const cpu = mon("sharpedo", ["swords-dance", "crunch"], { item: "sharpedonite", ability: "speed-boost" });
        const strong = mon("garchomp", ["earthquake"]);
        strong.base_stats[1] = 1000;
        strong.base_stats[5] = 120;
        expect(doTurn([strong], [cpu], strong.moveset[0]).join(" ")).toContain("Mega Evolved into Mega Sharpedo");
    });
    test("한 방에 상대를 잡을 수 있으면 방어가 있어도 진화해서 공격한다", () => {
        const cpu = scolipede(["protect", "earthquake"]);
        const prey = foeWithSpeed(80);
        prey.hp = [1, 1000];
        expect(doTurn([prey], [cpu], prey.moveset[0]).join(" ")).toContain("Mega Evolved into Mega Scolipede");
    });
    test("가속이 아닌 펜드라 세트는 바로 진화한다", () => {
        const cpu = scolipede(["protect", "earthquake"], "poison-point");
        const foe = foeWithSpeed(80);
        expect(doTurn([foe], [cpu], foe.moveset[0]).join(" ")).toContain("Mega Evolved into Mega Scolipede");
    });
});

describe("픽시 (천진)", () => {
    const setup = (stage) => {
        const cpu = mon("clefable", ["moonblast", "soft-boiled"], { item: "clefablite", ability: "unaware" });
        const foe = mon("garchomp", ["earthquake"]);
        foe.stat_levels[0] = stage;
        // 천진이 없다면 랭크업 때문에 체력의 절반 이상이 깎이도록 픽시의 체력을 맞춘다
        const boosted = bestDamage(foe, { ...cpu, ability: null }, null);
        cpu.hp = [Math.floor(boosted * 1.5), Math.floor(boosted * 1.5)];
        return { cpu, foe };
    };
    test("상대의 랭크업으로 가장 센 공격이 체력의 절반 이상을 깎으면 진화를 미룬다", () => {
        const { cpu, foe } = setup(2);
        foe.moveset[0] = clone(MOVES.get("earthquake"));
        const text = doTurn([foe], [cpu], foe.moveset[0]).join(" ");
        expect(text).not.toContain("Mega Evolved");
        expect(cpu.megaOriginal).toBeFalsy();
    });
    test("상대에게 랭크업이 없으면 바로 진화한다", () => {
        const { cpu, foe } = setup(0);
        const text = doTurn([foe], [cpu], foe.moveset[0]).join(" ");
        expect(text).toContain("Mega Evolved into Mega Clefable");
    });
    test("랭크업이 있어도 천진 덕에 피해가 크게 늘지 않으면 바로 진화한다", () => {
        const cpu = mon("clefable", ["moonblast"], { item: "clefablite", ability: "unaware" });
        const foe = mon("garchomp", ["tackle"]);
        foe.base_stats[1] = 5;
        foe.stat_levels[0] = 1; // 약한 공격이라 올라가도 절반을 못 깎는다
        const text = doTurn([foe], [cpu], foe.moveset[0]).join(" ");
        expect(text).toContain("Mega Evolved into Mega Clefable");
    });
    test("랭크업이 사라지면(교체 등) 그다음 턴에 진화한다", () => {
        const { cpu, foe } = setup(2);
        doTurn([foe], [cpu], foe.moveset[0]);
        expect(cpu.megaOriginal).toBeFalsy();
        foe.stat_levels[0] = 0;
        const text = doTurn([foe], [cpu], foe.moveset[0]).join(" ");
        expect(text).toContain("Mega Evolved into Mega Clefable");
    });
});

describe("갸라도스 (땅 기술)", () => {
    test("상대가 구애 도구로 땅 기술에 묶여 있으면 진화하지 않고, 다음 턴에 진화한다", () => {
        const cpu = mon("gyarados", ["waterfall", "dragon-dance"], { item: "gyaradosite", ability: "intimidate" });
        const foe = mon("garchomp", ["earthquake", "outrage"], { item: "choice-band" });
        foe.lockedMove = "earthquake";
        const first = doTurn([foe], [cpu], foe.moveset[0]).join(" ");
        expect(first).not.toContain("Mega Evolved");
        expect(cpu.types.map((t) => t.type.name)).toContain("flying"); // 비행 타입이라 땅 기술이 통하지 않는다
        const second = doTurn([foe], [cpu], foe.moveset[0]).join(" ");
        expect(second).toContain("Mega Evolved into Mega Gyarados");
    });
    test("상대의 가장 센 공격이 땅 기술이어도 마찬가지로 한 턴 미룬다", () => {
        const cpu = mon("gyarados", ["waterfall"], { item: "gyaradosite", ability: "intimidate" });
        const foe = mon("garchomp", ["earthquake", "tackle"]);
        const first = doTurn([foe], [cpu], foe.moveset[1]).join(" ");
        expect(first).not.toContain("Mega Evolved");
        expect(doTurn([foe], [cpu], foe.moveset[1]).join(" ")).toContain("Mega Evolved");
    });
    test("땅 기술이 없으면 바로 진화한다", () => {
        const cpu = mon("gyarados", ["waterfall"], { item: "gyaradosite", ability: "intimidate" });
        const foe = mon("garchomp", ["tackle", "outrage"]);
        expect(doTurn([foe], [cpu], foe.moveset[0]).join(" ")).toContain("Mega Evolved into Mega Gyarados");
    });
});

test("그 밖의 포켓몬은 지금처럼 첫 턴에 바로 진화한다", () => {
    const cpu = mon("venusaur", ["protect", "giga-drain", "swords-dance"], { item: "venusaurite", ability: "overgrow" });
    expect(doTurn([weak()], [cpu], weak().moveset[0]).join(" ")).toContain("Mega Evolved into Mega Venusaur");
});
