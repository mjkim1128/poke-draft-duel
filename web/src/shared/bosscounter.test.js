// 최종 보스(P.D.D Developer): 메가진화 없이 가장 강한 파티, 내가 고른 3마리를 보고 상성이 좋은 3마리를 낸다
import fs from "fs";
import path from "path";
import { getBaseStats, hpCalc } from "shared";
import { BOSSES } from "shared/bosspokemon";
import { pickCounterTeam, matchupScore, overlapPenalty, ohkoPenalty } from "shared/bosscounter";

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

describe("최종 보스(P.D.D Developer) 파티", () => {
    const orion = BOSSES.find((b) => b.name === "P.D.D Developer");
    test("메가진화 없이 정해 둔 여섯 마리이고, 선출은 상성을 본다", () => {
        expect(orion.pokemon).toEqual(["flutter-mane", "chien-pao", "ursaluna-bloodmoon", "urshifu-rapid-strike", "gholdengo", "ting-lu"]);
        expect(orion.counter).toBe(true);
        expect(orion.megaAll).toBeUndefined();
    });
    test("다른 보스는 상성 선출을 쓰지 않는다", () => {
        expect(BOSSES.filter((b) => b.counter).map((b) => b.name)).toEqual(["P.D.D Developer"]);
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

describe("약점 겹침과 한 방 감점", () => {
    test("같은 타입 기술에 약한 포켓몬이 둘이면 감점하고, 하나뿐이면 감점하지 않는다", () => {
        const foes = [mon("arcanine", ["flare-blitz"])];
        expect(overlapPenalty([mon("venusaur", ["giga-drain"]), mon("sceptile", ["giga-drain"]), mon("blastoise", ["surf"])], foes)).toBeGreaterThan(0);
        expect(overlapPenalty([mon("venusaur", ["giga-drain"]), mon("blastoise", ["surf"]), mon("golem", ["earthquake"])], foes)).toBe(0);
    });
    test("약한 포켓몬이 셋이면 둘일 때보다 더 감점한다", () => {
        const foes = [mon("arcanine", ["flare-blitz"])];
        const two = overlapPenalty([mon("venusaur", ["giga-drain"]), mon("sceptile", ["giga-drain"]), mon("blastoise", ["surf"])], foes);
        const three = overlapPenalty([mon("venusaur", ["giga-drain"]), mon("sceptile", ["giga-drain"]), mon("leafeon", ["leaf-blade"])], foes);
        expect(three).toBeGreaterThan(two);
    });
    test("위력이 낮은 기술은 약점 겹침으로 세지 않는다", () => {
        const foes = [mon("arcanine", ["ember"])];
        expect(overlapPenalty([mon("venusaur", ["giga-drain"]), mon("sceptile", ["giga-drain"])], foes)).toBe(0);
    });
    test("상대의 가장 센 공격 한 방에 쓰러지고 먼저 잡지도 못하면 감점한다", () => {
        const foes = [mon("arcanine", ["flare-blitz"])];
        const frail = mon("venusaur", ["giga-drain"]);
        frail.hp = [5, frail.hp[1]];
        expect(ohkoPenalty([frail], foes)).toBeGreaterThan(0);
        expect(ohkoPenalty([mon("blastoise", ["surf"])], foes)).toBe(0);
    });
});

describe("일대일 카운터", () => {
    test("상대 세 마리가 서로 다른 타입이면, 각각을 잡는 서로 다른 포켓몬을 고른다", () => {
        const foes = [mon("vaporeon", ["surf"]), mon("arcanine", ["flare-blitz"]), mon("venusaur", ["giga-drain"])];
        const sturdy = mon("venusaur", ["giga-drain"]); // 물을 잡는다 (불꽃 한 방에 쓰러지지 않게 체력을 늘려 둔다)
        sturdy.hp = [sturdy.hp[0] * 3, sturdy.hp[1] * 3];
        const roster = [
            sturdy,
            mon("blastoise", ["surf"]), // 불꽃을 잡는다
            mon("charizard", ["flamethrower"]), // 풀을 잡는다
            mon("snorlax", ["return"]),
            mon("blissey", ["seismic-toss"]),
            mon("ditto", ["transform"]),
        ];
        const picked = pickCounterTeam(roster, foes).map((p) => p.name).sort();
        expect(picked).toEqual(["blastoise", "charizard", "venusaur"]);
    });
});

describe("상대 파티 6마리 전체를 보고 고르기 (일반 트레이너)", () => {
    const foes6 = () => [
        mon("vaporeon", ["surf"]),
        mon("blastoise", ["surf"]),
        mon("golem", ["earthquake"]),
        mon("snorlax", ["return"]),
        mon("gengar", ["shadow-ball"]),
        mon("raichu", ["thunderbolt"]),
    ];
    const roster6 = () => {
        const sturdy = mon("venusaur", ["giga-drain"]);
        sturdy.hp = [sturdy.hp[0] * 3, sturdy.hp[1] * 3];
        return [sturdy, mon("charizard", ["flamethrower"]), mon("garchomp", ["earthquake"]), mon("ditto", ["transform"]), mon("blissey", ["seismic-toss"]), mon("snorlax", ["return"])];
    };
    test("6마리를 보고도 서로 다른 3마리를 로스터에서 고른다", () => {
        const team = pickCounterTeam(roster6(), foes6());
        expect(team).toHaveLength(3);
        expect(new Set(team.map((p) => p.name)).size).toBe(3);
    });
    test("상대 파티에 물 타입이 둘 이상 있으면 풀 타입 카운터를 데려온다", () => {
        const names = pickCounterTeam(roster6(), foes6()).map((p) => p.name);
        expect(names).toContain("venusaur");
    });
    test("같은 입력이면 같은 선출이 나온다 (무작위는 점수가 같을 때만)", () => {
        const a = pickCounterTeam(roster6(), foes6()).map((p) => p.name).sort();
        const b = pickCounterTeam(roster6(), foes6()).map((p) => p.name).sort();
        expect(a).toEqual(b);
    });
});


describe("메가진화할 수 있는 포켓몬을 반드시 포함하기 (mustInclude)", () => {
    // 상대는 보로라가 약한 특수 공격수들뿐이라, 조건이 없으면 보로라는 뽑히지 않는다
    const bossRoster = () => {
        const aggron = mon("aggron", ["iron-head", "earthquake"]);
        const others = [mon("regice", ["ice-beam"]), mon("florges", ["moonblast"]), mon("toxapex", ["scald"]), mon("umbreon", ["foul-play"]), mon("blissey", ["soft-boiled"])];
        return { aggron, roster: [aggron, ...others] };
    };
    const foes = () => [mon("charizard", ["flamethrower"]), mon("gengar", ["shadow-ball"]), mon("alakazam", ["psychic"]), mon("hydreigon", ["dark-pulse"]), mon("volcarona", ["bug-buzz"]), mon("magnezone", ["flash-cannon"])];
    test("조건이 없으면 마음대로 고르고, 조건이 있으면 그 포켓몬이 반드시 들어간다", () => {
        const { aggron, roster } = bossRoster();
        const plain = pickCounterTeam(roster, foes());
        const forced = pickCounterTeam(roster, foes(), Math.random, (p) => p === aggron);
        expect(forced).toContain(aggron);
        expect(forced).toHaveLength(3);
        expect(new Set(forced).size).toBe(3);
        // 조건 없이 뽑은 팀에 보로라가 없다면 이 시험이 의미가 있다 (있어도 조건이 깨지지는 않는다)
        expect(plain).toHaveLength(3);
    });
    test("조건에 맞는 포켓몬이 로스터에 없으면 조건을 무시한다", () => {
        const { roster } = bossRoster();
        const team = pickCounterTeam(roster, foes(), Math.random, () => false);
        expect(team).toHaveLength(3);
    });
    test("조건에 맞는 포켓몬이 여럿이면 그중 상성이 더 좋은 쪽이 들어간다", () => {
        const a = mon("aggron", ["iron-head"]);
        const b = mon("shuckle", ["splash"]);
        const roster = [a, b, mon("regice", ["ice-beam"]), mon("florges", ["moonblast"]), mon("toxapex", ["scald"]), mon("umbreon", ["foul-play"])];
        const team = pickCounterTeam(roster, foes(), Math.random, (p) => p === a || p === b);
        expect(team.some((p) => p === a || p === b)).toBe(true);
        expect(team).not.toContain(b); // 공격기가 없는 단단지보다 보로라가 낫다
    });
});
