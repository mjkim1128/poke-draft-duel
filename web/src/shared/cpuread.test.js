// 최종 보스는 플레이어가 이번 턴에 무엇을 하는지 알고 나서 행동한다 (cpuread.js)
import fs from "fs";
import path from "path";
import { doTurn, getBaseStats, hpCalc, makeMove } from "shared";
import { getAbility } from "shared/abilities";
import { readPlayerMove } from "shared/cpuread";

const read = (f) => JSON.parse(fs.readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/" + f), "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const clone = (x) => JSON.parse(JSON.stringify(x));
function mon(species, moves, ability = null) {
    const p = clone(POKEMON.get(species));
    p.base_stats = getBaseStats(p);
    p.hp = [hpCalc(p.base_stats[0]) * 2, hpCalc(p.base_stats[0]) * 2];
    p.stat_levels = Array(7).fill(0);
    p.item = null;
    p.originalItem = null;
    p.ability = ability ? getAbility(ability) : null;
    p.baseAbility = p.ability;
    p.moveset = moves.map((m) => clone(MOVES.get(m)));
    for (const m of p.moveset) m.accuracy = null;
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, actionsSinceSwitch: 1, revealed: true });
    return p;
}
const switchTo = (index) => ({ priority: 6, index });
const nameOf = (m) => (m.priority === 6 ? "switch:" + m.index : m.name);

describe("플레이어가 공격하면: 그 공격을 맞아 줄 포켓몬으로 바꾼다", () => {
    // 보스의 앞 포켓몬(골렘)은 풀 기술에 4배로 약하고, 벤치의 리자몽은 4배로 반감한다
    const setup = () => {
        const human = [mon("venusaur", ["giga-drain", "sludge-bomb"]), mon("snorlax", ["splash"])];
        const boss = [mon("golem", ["earthquake", "rock-slide"]), mon("charizard", ["flamethrower", "air-slash"]), mon("blissey", ["soft-boiled"])];
        return { human, boss };
    };
    test("풀 기술이 올 걸 알면 풀을 반감하는 포켓몬으로 바꾼다", () => {
        const { human, boss } = setup();
        const baseline = makeMove(human, boss, true);
        const result = readPlayerMove(human, boss, human[0].moveset[0], baseline, true);
        expect(nameOf(result)).toBe("switch:1");
    });
    test("교체할 수 없으면(속박 등) 읽어도 평소 행동 그대로다", () => {
        const { human, boss } = setup();
        const baseline = makeMove(human, boss, false);
        expect(readPlayerMove(human, boss, human[0].moveset[0], baseline, false)).toBe(baseline);
    });
    test("실제 턴에서 보스(readsPlayer)는 풀 기술을 리자몽으로 받는다", () => {
        const { human, boss } = setup();
        boss.readsPlayer = true;
        doTurn(human, boss, human[0].moveset[0]);
        expect(boss[0].name).toBe("charizard");
        expect(boss[0].hp[0]).toBeGreaterThan(boss[0].hp[1] * 0.5); // 반감해서 거의 안 아프다
    });
});

describe("플레이어가 교체하면: 나오는 포켓몬에 맞는 기술로 때린다", () => {
    test("리자몽이 나오는 걸 알면 땅 기술 대신 물 기술을 쓴다", () => {
        const human = [mon("venusaur", ["giga-drain"]), mon("charizard", ["flamethrower"])];
        const boss = [mon("gyarados", ["earthquake", "waterfall"]), mon("blissey", ["soft-boiled"])];
        const baseline = makeMove(human, boss, true);
        const result = readPlayerMove(human, boss, switchTo(1), baseline, true);
        expect(result.name).toBe("waterfall");
    });
    test("나오는 포켓몬이 이미 쓰러져 있으면 평소 행동 그대로다", () => {
        const human = [mon("venusaur", ["giga-drain"]), mon("charizard", ["flamethrower"])];
        human[1].hp[0] = 0;
        const boss = [mon("gyarados", ["earthquake", "waterfall"])];
        const baseline = makeMove(human, boss, true);
        expect(readPlayerMove(human, boss, switchTo(1), baseline, true)).toBe(baseline);
    });
    test("실제 턴에서 보스(readsPlayer)는 나오는 리자몽을 물 기술로 때린다", () => {
        const human = [mon("venusaur", ["giga-drain"]), mon("charizard", ["flamethrower"])];
        const boss = [mon("gyarados", ["earthquake", "waterfall"])];
        boss.readsPlayer = true;
        const text = doTurn(human, boss, switchTo(1)).join(" ");
        expect(text).toContain("Waterfall");
        expect(text).not.toContain("Earthquake");
    });
});

describe("먼저 쓰러뜨릴 수 있으면 그대로 공격한다", () => {
    test("더 빠르고 한 방에 잡으면, 상대가 무엇을 하든 교체하지 않는다", () => {
        const human = [mon("snorlax", ["body-slam"]), mon("blissey", ["splash"])];
        human[0].hp[0] = 5; // 거의 쓰러진 상태
        const boss = [mon("garchomp", ["earthquake", "dragon-claw"]), mon("blissey", ["soft-boiled"])];
        const baseline = makeMove(human, boss, true);
        const result = readPlayerMove(human, boss, human[0].moveset[0], baseline, true);
        expect(result.priority).not.toBe(6);
        expect(["earthquake", "dragon-claw"]).toContain(result.name);
    });
});

describe("플레이어가 막기(방어)를 쓰면", () => {
    test("공격하지 않고 랭업기를 쓴다 (맞을 일이 없으므로)", () => {
        const human = [mon("snorlax", ["protect", "body-slam"]), mon("blissey", ["splash"])];
        const boss = [mon("garchomp", ["swords-dance", "earthquake"]), mon("blissey", ["soft-boiled"])];
        const baseline = makeMove(human, boss, true);
        const result = readPlayerMove(human, boss, human[0].moveset[0], baseline, true);
        expect(result.name).toBe("swords-dance");
    });
});

describe("쓰지 않을 때", () => {
    test("보스가 충전 중이거나 반동 중이면 읽지 않고 평소 행동을 한다", () => {
        const human = [mon("venusaur", ["giga-drain"])];
        const boss = [mon("garchomp", ["earthquake"]), mon("blissey", ["soft-boiled"])];
        boss[0].mustRecharge = true;
        const baseline = { name: "earthquake", priority: 0, damage_class: { name: "physical" } };
        expect(readPlayerMove(human, boss, human[0].moveset[0], baseline, true)).toBe(baseline);
    });
    test("readsPlayer가 없는 팀은 평소와 같은 행동을 한다", () => {
        const human = [mon("venusaur", ["giga-drain"]), mon("snorlax", ["splash"])];
        const bossA = [mon("golem", ["earthquake", "rock-slide"]), mon("charizard", ["flamethrower"])];
        const baseline = makeMove(human, bossA, true);
        doTurn(human, bossA, human[0].moveset[0]);
        // 읽지 않는 보스는 평소 로직이 고른 행동 그대로 (평소 로직이 교체를 골랐을 때만 교체한다)
        expect(bossA[0].name).toBe(baseline.priority === 6 ? "charizard" : "golem");
    });
});
