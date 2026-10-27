// 교체해야 할 상황에서 유턴 계열 기술을 쓰는지 (cpupass.js의 pivotInsteadOfSwitch)
import fs from "fs";
import path from "path";
import { getBaseStats, hpCalc } from "shared";
import { makeMove } from "shared/computermove";

const read = (file) => JSON.parse(fs.readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/" + file), "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const clone = (x) => JSON.parse(JSON.stringify(x));

function mon(species, moves) {
    const p = clone(POKEMON.get(species));
    p.base_stats = getBaseStats(p);
    p.hp = [hpCalc(p.base_stats[0]) * 4, hpCalc(p.base_stats[0]) * 4];
    p.stat_levels = Array(7).fill(0);
    p.item = null;
    p.originalItem = null;
    p.ability = null;
    p.baseAbility = null;
    p.moveset = moves.map((m) => clone(MOVES.get(m)));
    for (const m of p.moveset) m.accuracy = null;
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, lastMoveName: null, moveRepeatCount: 0 });
    return p;
}
// 맹독에 걸려 교체할 이유가 생긴 포켓몬 + 교체할 후보
const team = (species, moves) => {
    const front = mon(species, moves);
    front.status = { name: "toxic", counter: 1 };
    return [front, mon("garchomp", ["earthquake", "dragon-claw"])];
};
const foe = () => [mon("snorlax", ["tackle"])]; // 스피드 종족값 30: 느림

describe("교체할 상황의 유턴 계열", () => {
    test("내가 빠르면 교체하지 않고 유턴을 쓴다", () => {
        expect(makeMove(foe(), team("garchomp", ["u-turn", "tackle"]), true).name).toBe("u-turn");
    });
    test("퀵턴, 볼트체인지도 쓴다", () => {
        expect(makeMove(foe(), team("garchomp", ["flip-turn", "tackle"]), true).name).toBe("flip-turn");
        expect(makeMove(foe(), team("garchomp", ["volt-switch", "tackle"]), true).name).toBe("volt-switch");
    });
    test("변화형(막말내뱉기, 썰렁개그)도 쓴다", () => {
        expect(makeMove(foe(), team("garchomp", ["parting-shot", "tackle"]), true).name).toBe("parting-shot");
        expect(makeMove(foe(), team("garchomp", ["chilly-reception", "tackle"]), true).name).toBe("chilly-reception");
    });
    test("피해를 주는 유턴 계열이 있으면 변화형보다 먼저 고른다", () => {
        expect(makeMove(foe(), team("garchomp", ["parting-shot", "u-turn"]), true).name).toBe("u-turn");
    });
    test("느려도 상대에게 한 방에 쓰러지지 않으면 쓴다", () => {
        // ferrothorn(스피드 종족값 20)은 snorlax(30)보다 느리다. snorlax의 몸통박치기로는 한 방에 쓰러지지 않는다.
        expect(makeMove(foe(), team("ferrothorn", ["u-turn", "tackle"]), true).name).toBe("u-turn");
    });
    test("느리고 상대의 한 방에 쓰러지면 쓰지 않고 그냥 교체한다", () => {
        const t = team("ferrothorn", ["u-turn", "tackle"]);
        t[0].hp = [1, t[0].hp[1]];
        expect(makeMove(foe(), t, true).priority).toBe(6);
    });
    test("빠르면 한 방에 쓰러질 상황이어도 먼저 움직여서 쓴다", () => {
        const t = team("garchomp", ["u-turn", "tackle"]);
        t[0].hp = [1, t[0].hp[1]];
        expect(makeMove(foe(), t, true).name).toBe("u-turn");
    });
    test("상대에게 통하지 않는 기술(땅 타입에 볼트체인지)은 쓰지 않는다", () => {
        const slowGround = [mon("golem", ["tackle"])];
        expect(makeMove(slowGround, team("garchomp", ["volt-switch", "tackle"]), true).priority).toBe(6);
    });
    test("이미 눈이 오고 있으면 썰렁개그는 교체되지 않으니 쓰지 않는다", () => {
        const t = team("garchomp", ["chilly-reception", "tackle"]);
        t.field = { weather: { name: "snow", turns: 3 }, terrain: null };
        expect(makeMove(foe(), t, true).priority).toBe(6);
    });
    test("교체할 이유가 없으면 유턴을 쓰지 않고 공격 규칙대로 한다", () => {
        const t = [mon("garchomp", ["u-turn", "earthquake"]), mon("blissey", ["soft-boiled"])];
        expect(makeMove(foe(), t, true).name).toBe("earthquake");
    });
});
