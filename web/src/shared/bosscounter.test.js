// 캡틴 포: 메가진화 없이 가장 강한 파티, 내가 고른 3마리를 보고 상성이 좋은 3마리를 낸다
import fs from "fs";
import path from "path";
import { getBaseStats, hpCalc } from "shared";
import { BOSSES } from "shared/bosspokemon";
import { pickCounterTeam, matchupScore } from "shared/bosscounter";

const read = (file) => JSON.parse(fs.readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/" + file), "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const clone = (x) => JSON.parse(JSON.stringify(x));

function mon(species, moves) {
    const p = clone(POKEMON.get(species));
    p.base_stats = getBaseStats(p);
    p.hp = [hpCalc(p.base_stats[0]), hpCalc(p.base_stats[0])];
    p.stat_levels = Array(7).fill(0);
    p.item = null;
    p.ability = null;
    p.moveset = moves.map((m) => clone(MOVES.get(m)));
    for (const m of p.moveset) m.accuracy = null;
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, actionsSinceSwitch: 0 });
    return p;
}

describe("캡틴 포 파티", () => {
    const orion = BOSSES.find((b) => b.name === "Captain.P");
    test("메가진화 없이 정해 둔 여섯 마리이고, 선출은 상성을 본다", () => {
        expect(orion.pokemon).toEqual(["flutter-mane", "chien-pao", "ursaluna-bloodmoon", "urshifu-rapid-strike", "gholdengo", "ting-lu"]);
        expect(orion.counter).toBe(true);
        expect(orion.megaAll).toBeUndefined();
    });
    test("다른 보스는 상성 선출을 쓰지 않는다", () => {
        expect(BOSSES.filter((b) => b.counter).map((b) => b.name)).toEqual(["Captain.P"]);
    });
});

describe("상성 선출", () => {
    const roster = () => [
        mon("charizard", ["flamethrower"]),
        mon("venusaur", ["giga-drain"]),
        mon("raichu", ["thunderbolt"]),
        mon("blastoise", ["surf"]),
        mon("golem", ["earthquake"]),
        mon("gyarados", ["waterfall"]),
    ];
    const names = (team) => team.map((p) => p.name);

    test("물 타입 셋을 만나면 불꽃을 빼고 풀, 전기를 낸다", () => {
        const foes = [mon("vaporeon", ["surf"]), mon("blastoise", ["surf"]), mon("gyarados", ["waterfall"])];
        const picked = names(pickCounterTeam(roster(), foes));
        expect(picked).toHaveLength(3);
        expect(new Set(picked).size).toBe(3);
        expect(picked).not.toContain("charizard");
        expect(picked).toContain("venusaur");
        expect(picked).toContain("raichu");
    });
    test("불꽃 타입 셋을 만나면 물, 땅 쪽을 낸다 (풀은 뺀다)", () => {
        const foes = [mon("charizard", ["flamethrower"]), mon("arcanine", ["flare-blitz"]), mon("ninetales", ["flamethrower"])];
        const picked = names(pickCounterTeam(roster(), foes));
        expect(picked).not.toContain("venusaur");
        expect(picked).not.toContain("charizard");
        expect(picked).toContain("blastoise");
    });
    test("선두는 내 선두에게 가장 점수가 높은 포켓몬이다", () => {
        const foes = [mon("gyarados", ["waterfall"]), mon("vaporeon", ["surf"]), mon("blastoise", ["surf"])];
        const team = pickCounterTeam(roster(), foes);
        const scores = team.map((b) => matchupScore(b, foes[0]));
        expect(scores[0]).toBe(Math.max(...scores));
    });
    test("내 포켓몬이 없어도 앞의 3마리를 돌려준다", () => {
        expect(pickCounterTeam(roster(), [])).toHaveLength(3);
    });
    test("6마리가 모두 다르게 나온다 (같은 상대에게 같은 선출)", () => {
        const foes = [mon("vaporeon", ["surf"]), mon("blastoise", ["surf"]), mon("gyarados", ["waterfall"])];
        expect(names(pickCounterTeam(roster(), foes)).sort()).toEqual(names(pickCounterTeam(roster(), foes)).sort());
    });
});
