// 미스트필드, 사이코필드를 쓰는 규칙 (cpuweather.js의 terrainMove)와, 속박되어도 유턴 계열로 빠져나오기
import fs from "fs";
import path from "path";
import { getBaseStats, hpCalc } from "shared";
import { chooseSupportMove } from "shared/cpustatus";
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
const choose = (human, cpu) => {
    const move = chooseSupportMove(human, cpu);
    return move ? move.name : null;
};

describe("미스트필드", () => {
    const cpu = () => [mon("garchomp", ["misty-terrain", "earthquake"]), mon("blissey", ["soft-boiled"])];
    test("상대 파티에 하품이나 수면기가 있으면 깐다", () => {
        expect(choose([mon("snorlax", ["yawn"])], cpu())).toBe("misty-terrain");
        expect(choose([mon("snorlax", ["tackle"]), mon("parasect", ["spore"])], cpu())).toBe("misty-terrain"); // 벤치에 있어도
    });
    test("상대에게 그런 기술이 없으면 깔지 않는다", () => {
        expect(choose([mon("snorlax", ["tackle", "toxic"])], cpu())).toBe(null);
    });
    test("이미 미스트필드이거나, 내 파티 대부분이 땅에 닿지 않으면 깔지 않는다", () => {
        const done = cpu();
        done.field = { weather: null, terrain: { name: "misty", turns: 3 } };
        expect(choose([mon("snorlax", ["yawn"])], done)).toBe(null);
        const flyers = [mon("garchomp", ["misty-terrain", "earthquake"]), mon("pidgeot", ["roost"]), mon("pidgeot", ["roost"])];
        flyers[0].types = [{ slot: 1, type: { name: "flying" } }];
        expect(choose([mon("snorlax", ["yawn"])], flyers)).toBe(null);
    });
});

describe("사이코필드", () => {
    const cpu = (extra = []) => [mon("garchomp", ["psychic-terrain", "earthquake"]), mon("blissey", ["soft-boiled"]), ...extra];
    test("내 파티에 선공기가 없고 지금 나온 상대에게 선공기가 있으면 깐다", () => {
        expect(choose([mon("snorlax", ["quick-attack"])], cpu())).toBe("psychic-terrain");
    });
    test("지금 나온 상대에게는 없어도 상대의 남은 포켓몬 중 선공기를 가진 쪽이 둘 이상이면 깐다", () => {
        const two = [mon("snorlax", ["tackle"]), mon("garchomp", ["aqua-jet"]), mon("blissey", ["mach-punch"])];
        expect(choose(two, cpu())).toBe("psychic-terrain");
        const one = [mon("snorlax", ["tackle"]), mon("garchomp", ["aqua-jet"]), mon("blissey", ["tackle"])];
        expect(choose(one, cpu())).toBe(null);
    });
    test("내 남은 파티에 선공기가 하나라도 있으면 깔지 않는다", () => {
        expect(choose([mon("snorlax", ["quick-attack"])], cpu([mon("scizor", ["bullet-punch"])]))).toBe(null);
    });
    test("상대에게 선공기가 없으면 깔지 않는다", () => {
        expect(choose([mon("snorlax", ["tackle"])], cpu())).toBe(null);
    });
    test("이미 사이코필드이면 깔지 않는다", () => {
        const done = cpu();
        done.field = { weather: null, terrain: { name: "psychic", turns: 3 } };
        expect(choose([mon("snorlax", ["quick-attack"])], done)).toBe(null);
    });
});

describe("속박되어도 유턴 계열로 빠져나온다", () => {
    const team = (moves, species = "garchomp") => {
        const front = mon(species, moves);
        front.status = { name: "toxic", counter: 1 };
        return [front, mon("garchomp", ["earthquake", "dragon-claw"])];
    };
    const foe = () => [mon("snorlax", ["tackle"])];
    test("교체할 상황이고 속박되었는데 유턴이 있으면 유턴을 쓴다", () => {
        expect(makeMove(foe(), team(["u-turn", "tackle"]), false).name).toBe("u-turn");
    });
    test("유턴이 없으면 교체하지 못하고 공격한다", () => {
        const move = makeMove(foe(), team(["tackle"]), false);
        expect(move.priority).not.toBe(6);
        expect(move.name).toBe("tackle");
    });
    test("느리고 한 방에 쓰러지면 속박 상태에서 유턴도 쓰지 않는다", () => {
        const t = team(["u-turn", "body-slam"], "ferrothorn"); // 몸통박치기가 더 세서 평소의 공격 선택이면 몸통박치기
        t[0].hp = [1, t[0].hp[1]];
        expect(makeMove(foe(), t, false).name).toBe("body-slam");
    });
});
