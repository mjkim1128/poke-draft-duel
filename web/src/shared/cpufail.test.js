// 컴퓨터는 반드시 실패하는 기술을 고르지 않는다 (사이코필드의 선제 기술, 미스트필드나 일렉트릭필드의 수면기 등)
import fs from "fs";
import path from "path";
import { doTurn, ensureField, setTerrain, getBaseStats, hpCalc } from "shared";
import { certainlyFails } from "shared/cpufail";
import { strongestMove, makeMove } from "shared/computermove";
import { chooseSupportMove } from "shared/cpustatus";

const read = (file) => JSON.parse(fs.readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/" + file), "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const clone = (x) => JSON.parse(JSON.stringify(x));

function mon(species, moves, ability = null) {
    const p = clone(POKEMON.get(species));
    p.base_stats = getBaseStats(p);
    p.hp = [hpCalc(p.base_stats[0]) * 4, hpCalc(p.base_stats[0]) * 4];
    p.stat_levels = Array(7).fill(0);
    p.item = null;
    p.originalItem = null;
    p.ability = ability ? { name: ability } : null;
    p.baseAbility = p.ability;
    p.moveset = moves.map((m) => clone(MOVES.get(m)));
    for (const m of p.moveset) m.accuracy = null;
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, lastMoveName: null, moveRepeatCount: 0 });
    return p;
}
const move = (name) => clone(MOVES.get(name));
const withTerrain = (name, ...teams) => {
    const field = ensureField(...teams);
    setTerrain(field, name, null, []);
    return field;
};

describe("반드시 실패하는 기술 알아보기", () => {
    test("사이코필드: 땅에 닿은 상대에게 선제 기술은 실패한다", () => {
        const me = [mon("garchomp", ["accelerock"])];
        const foe = [mon("snorlax", ["splash"])];
        const field = withTerrain("psychic", me, foe);
        expect(certainlyFails(move("accelerock"), me[0], foe[0], field)).toBe(true);
        expect(certainlyFails(move("earthquake"), me[0], foe[0], field)).toBe(false);
        // 떠 있는 상대에게는 통한다
        expect(certainlyFails(move("accelerock"), me[0], mon("pidgeot", ["splash"]), field)).toBe(false);
    });
    test("사이코필드: 짓궂은마음이 붙은 변화기도 선제 기술이라 실패한다", () => {
        const me = [mon("klefki", ["thunder-wave"], "prankster")];
        const foe = [mon("snorlax", ["splash"])];
        const field = withTerrain("psychic", me, foe);
        expect(certainlyFails(move("thunder-wave"), me[0], foe[0], field)).toBe(true);
        const plain = mon("klefki", ["thunder-wave"]);
        expect(certainlyFails(move("thunder-wave"), plain, foe[0], field)).toBe(false);
    });
    test("미스트필드: 땅에 닿은 상대에게 하품, 수면기, 독 등 상태이상 기술은 실패한다", () => {
        const me = [mon("blissey", ["yawn"])];
        const foe = [mon("snorlax", ["splash"])];
        const field = withTerrain("misty", me, foe);
        for (const name of ["yawn", "spore", "toxic", "thunder-wave", "will-o-wisp"]) {
            expect(certainlyFails(move(name), me[0], foe[0], field)).toBe(true);
        }
        // 사슬묶기, 도발은 막지 않는다
        expect(certainlyFails(move("disable"), me[0], foe[0], field)).toBe(false);
    });
    test("일렉트릭필드: 땅에 닿은 상대에게 하품, 수면기는 실패하지만 다른 상태이상은 통한다", () => {
        const me = [mon("blissey", ["yawn"])];
        const foe = [mon("snorlax", ["splash"])];
        const field = withTerrain("electric", me, foe);
        expect(certainlyFails(move("yawn"), me[0], foe[0], field)).toBe(true);
        expect(certainlyFails(move("spore"), me[0], foe[0], field)).toBe(true);
        expect(certainlyFails(move("toxic"), me[0], foe[0], field)).toBe(false);
    });
    test("안전지대, 대타출동, 황금몸이 막는 변화기도 알아본다", () => {
        const me = [mon("blissey", ["toxic"])];
        const foeTeam = [mon("snorlax", ["splash"])];
        ensureField(me, foeTeam);
        foeTeam.safeguardTurns = 3;
        expect(certainlyFails(move("toxic"), me[0], foeTeam[0], null, foeTeam)).toBe(true);
        foeTeam.safeguardTurns = 0;
        foeTeam[0].substitute = { hp: 50 };
        expect(certainlyFails(move("toxic"), me[0], foeTeam[0], null, foeTeam)).toBe(true);
        expect(certainlyFails(move("tackle"), me[0], foeTeam[0], null, foeTeam)).toBe(false);
        foeTeam[0].substitute = null;
        expect(certainlyFails(move("toxic"), me[0], mon("gholdengo", ["splash"], "good-as-gold"), null, foeTeam)).toBe(true);
    });
});

describe("컴퓨터의 기술 선택", () => {
    test("사이코필드에서 가장 센 공격이 선제 기술이어도 다른 공격을 고른다", () => {
        const cpu = [mon("garchomp", ["first-impression", "tackle"])];
        const human = [mon("snorlax", ["splash"])];
        withTerrain("psychic", human, cpu);
        // 만나자마자(위력 90)가 몸통박치기(40)보다 세지만 사이코필드에서는 실패한다
        expect(strongestMove(human, cpu).name).toBe("tackle");
    });
    test("떠 있는 상대에게는 선제 기술이 가장 세면 그대로 고른다", () => {
        const cpu = [mon("garchomp", ["first-impression", "tackle"])];
        const human = [mon("pidgeot", ["splash"])];
        withTerrain("psychic", human, cpu);
        expect(strongestMove(human, cpu).name).toBe("first-impression");
    });
    test("고를 기술이 모두 실패할 기술뿐이면 그중에서라도 고른다", () => {
        const cpu = [mon("garchomp", ["first-impression", "accelerock"])];
        const human = [mon("snorlax", ["splash"])];
        withTerrain("psychic", human, cpu);
        expect(["first-impression", "accelerock"]).toContain(strongestMove(human, cpu).name);
    });
    test("일렉트릭필드에서는 하품을 쓰지 않는다 (미스트필드에서는 독도 쓰지 않는다)", () => {
        const cpu = [mon("blissey", ["yawn", "toxic"])];
        const human = [mon("snorlax", ["tackle"])];
        withTerrain("electric", human, cpu);
        expect(chooseSupportMove(human, cpu)).not.toBe(cpu[0].moveset[0]);
        const cpu2 = [mon("blissey", ["toxic"])];
        const human2 = [mon("snorlax", ["tackle"])];
        withTerrain("misty", human2, cpu2);
        expect(chooseSupportMove(human2, cpu2)).toBeNull();
    });
});

describe("사이코필드: 선제 기술과 순서", () => {
    test("같은 턴에 사이코필드를 까는 쪽보다 선제 기술이 먼저 나가면 그 턴에는 맞는다 (필드가 아직 없다)", () => {
        const me = [mon("espathra", ["psychic-terrain"])];
        const foe = [mon("garchomp", ["accelerock"])];
        const text = doTurn(me, foe, me[0].moveset[0]).join(" ");
        expect(text).not.toContain("protected by the Psychic Terrain");
        expect(me[0].hp[0]).toBeLessThan(me[0].hp[1]);
    });
    test("필드가 깔린 다음 턴부터는 선제 기술이 막힌다", () => {
        const me = [mon("espathra", ["psychic-terrain", "splash"])];
        const foe = [mon("garchomp", ["accelerock"])];
        doTurn(me, foe, me[0].moveset[0]);
        const hpBefore = me[0].hp[0];
        const text = doTurn(me, foe, me[0].moveset[1]).join(" ");
        expect(text).toContain("protected by the Psychic Terrain");
        expect(me[0].hp[0]).toBe(hpBefore);
    });
    test("짓궂은마음이 붙은 변화기도 사이코필드에서는 땅에 닿은 상대에게 막힌다", () => {
        const me = [mon("snorlax", ["splash"])];
        const foe = [mon("klefki", ["thunder-wave"], "prankster")];
        withTerrain("psychic", me, foe);
        const text = doTurn(me, foe, me[0].moveset[0]).join(" ");
        expect(text).toContain("protected by the Psychic Terrain");
        expect(me[0].status).toBeFalsy();
    });
});

describe("선공기를 고르는 단계", () => {
    test("사이코필드에서는 상대를 쓰러뜨릴 수 있어도 막히는 선공기를 고르지 않는다", () => {
        const cpu = [mon("garchomp", ["accelerock", "tackle"])];
        const human = [mon("snorlax", ["splash"])];
        human[0].hp = [1, human[0].hp[1]]; // 어떤 공격이든 한 방
        withTerrain("psychic", human, cpu);
        expect(makeMove(human, cpu).name).toBe("tackle");
    });
    test("선공기가 통하는 상황이면 한 방에 쓰러뜨리는 선공기를 쓴다", () => {
        const cpu = [mon("garchomp", ["aqua-jet", "tackle"])];
        const human = [mon("snorlax", ["splash"])];
        human[0].hp = [1, human[0].hp[1]];
        expect(makeMove(human, cpu).name).toBe("aqua-jet");
    });
    test("죽기 전 마지막 한 방으로 방어 같은 선공 변화기를 고르지 않는다", () => {
        const cpu = [mon("ferrothorn", ["protect", "tackle"])];
        cpu[0].hp = [1, cpu[0].hp[1]];
        const human = [mon("garchomp", ["earthquake"])]; // 더 빠르고 한 방에 쓰러뜨린다
        expect(makeMove(human, cpu).name).toBe("tackle");
    });
    test("죽기 전 마지막 한 방은 피해를 주는 선공기를 쓴다", () => {
        const cpu = [mon("ferrothorn", ["aqua-jet", "tackle"])];
        cpu[0].hp = [1, cpu[0].hp[1]];
        const human = [mon("garchomp", ["earthquake"])];
        expect(makeMove(human, cpu).name).toBe("aqua-jet");
    });
});

describe("나온 첫 행동에서만 쓸 수 있는 기술", () => {
    test("이미 한 번 행동했으면 만나자마자, 속이기는 실패한다", () => {
        const me = mon("flygon", ["first-impression", "fake-out"]);
        const foe = mon("snorlax", ["splash"]);
        me.actionsSinceSwitch = 0;
        expect(certainlyFails(move("first-impression"), me, foe, null)).toBe(false);
        expect(certainlyFails(move("fake-out"), me, foe, null)).toBe(false);
        me.actionsSinceSwitch = 1;
        expect(certainlyFails(move("first-impression"), me, foe, null)).toBe(true);
        expect(certainlyFails(move("fake-out"), me, foe, null)).toBe(true);
    });
    test("첫 행동에서는 가장 센 만나자마자를 고르고, 둘째 행동부터는 다른 공격을 고른다", () => {
        const cpu = [mon("flygon", ["first-impression", "tackle"], "levitate")];
        const human = [mon("snorlax", ["splash"])];
        cpu[0].actionsSinceSwitch = 0;
        expect(makeMove(human, cpu).name).toBe("first-impression");
        cpu[0].actionsSinceSwitch = 1;
        expect(makeMove(human, cpu).name).toBe("tackle");
    });
    test("부유 플라이곤이라도 땅에 닿은 상대가 사이코필드에 있으면 만나자마자를 고르지 않는다", () => {
        const cpu = [mon("flygon", ["first-impression", "tackle"], "levitate")];
        const human = [mon("snorlax", ["splash"])];
        withTerrain("psychic", human, cpu);
        cpu[0].actionsSinceSwitch = 0;
        expect(makeMove(human, cpu).name).toBe("tackle");
        // 상대가 땅에 닿지 않으면(날고 있으면) 사이코필드가 막지 못하니 쓴다
        const flyer = [mon("pidgeot", ["splash"])];
        withTerrain("psychic", flyer, cpu);
        expect(makeMove(flyer, cpu).name).toBe("first-impression");
    });
});

describe("상태 때문에 반드시 실패하는 기술", () => {
    const fails = (name, me, foe, field = null, foeTeam = null, ownTeam = null) => certainlyFails(move(name), me, foe, field, foeTeam, ownTeam);
    const base = () => [mon("garchomp", ["tackle"]), mon("snorlax", ["splash"])];

    test("이미 그 날씨나 필드이면 같은 기술은 실패한다", () => {
        const [me, foe] = base();
        const field = { weather: { name: "rain", turns: 3 }, terrain: { name: "grassy", turns: 3 } };
        expect(fails("rain-dance", me, foe, field)).toBe(true);
        expect(fails("sunny-day", me, foe, field)).toBe(false);
        expect(fails("grassy-terrain", me, foe, field)).toBe(true);
        expect(fails("misty-terrain", me, foe, field)).toBe(false);
    });
    test("함정이 최대로 깔려 있으면 실패한다", () => {
        const [me, foe] = base();
        const foeTeam = [foe];
        foeTeam.hazards = { stealthRock: true, spikes: 3, toxicSpikes: 1, stickyWeb: false };
        expect(fails("stealth-rock", me, foe, null, foeTeam)).toBe(true);
        expect(fails("spikes", me, foe, null, foeTeam)).toBe(true);
        expect(fails("toxic-spikes", me, foe, null, foeTeam)).toBe(false); // 아직 한 겹 더 깔 수 있다
        expect(fails("sticky-web", me, foe, null, foeTeam)).toBe(false);
    });
    test("내 쪽에 이미 걸린 순풍, 안전지대, 벽, 소원은 또 쓰면 실패한다", () => {
        const [me, foe] = base();
        const team = [me, mon("blissey", ["splash"])];
        Object.assign(team, { tailwindTurns: 2, safeguardTurns: 2, reflectTurns: 2, lightScreenTurns: 0, wish: { hp: 10 } });
        expect(fails("tailwind", me, foe, null, null, team)).toBe(true);
        expect(fails("safeguard", me, foe, null, null, team)).toBe(true);
        expect(fails("reflect", me, foe, null, null, team)).toBe(true);
        expect(fails("light-screen", me, foe, null, null, team)).toBe(false);
        expect(fails("wish", me, foe, null, null, team)).toBe(true);
    });
    test("오로라베일은 눈이나 싸라기눈이 아니면, 이미 쳐져 있으면 실패한다", () => {
        const [me, foe] = base();
        const team = [me, mon("blissey", ["splash"])];
        expect(fails("aurora-veil", me, foe, null, null, team)).toBe(true);
        const snow = { weather: { name: "snow", turns: 3 }, terrain: null };
        expect(fails("aurora-veil", me, foe, snow, null, team)).toBe(false);
        team.auroraTurns = 3;
        expect(fails("aurora-veil", me, foe, snow, null, team)).toBe(true);
    });
    test("교체할 포켓몬이 없으면 막말내뱉기, 텔레포트, 배턴터치는 실패한다 (유턴은 공격이라 쓸 수 있다)", () => {
        const [me, foe] = base();
        const alone = [me];
        const withBench = [me, mon("blissey", ["splash"])];
        for (const name of ["parting-shot", "teleport", "baton-pass", "healing-wish"]) {
            expect(fails(name, me, foe, null, null, alone)).toBe(true);
            expect(fails(name, me, foe, null, null, withBench)).toBe(false);
        }
        expect(fails("u-turn", me, foe, null, null, alone)).toBe(false);
    });
    test("자기 상태 때문에 실패하는 기술: 기합 모으기, 배북, 대타출동, 잠꼬대", () => {
        const [me, foe] = base();
        me.focusEnergy = true;
        expect(fails("focus-energy", me, foe)).toBe(true);
        expect(fails("belly-drum", me, foe)).toBe(false);
        me.hp = [Math.floor(me.hp[1] / 2), me.hp[1]];
        expect(fails("belly-drum", me, foe)).toBe(true);
        me.hp = [Math.floor(me.hp[1] / 4), me.hp[1]];
        expect(fails("substitute", me, foe)).toBe(true);
        expect(fails("sleep-talk", me, foe)).toBe(true); // 깨어 있다
        me.status = { name: "sleep", counter: 2 };
        expect(fails("sleep-talk", me, foe)).toBe(false);
    });
    test("상대 때문에 실패하는 기술: 도발, 씨뿌리기, 앙코르, 사슬묶기, 폴터가이스트", () => {
        const [me, foe] = base();
        expect(fails("taunt", me, foe)).toBe(false);
        foe.taunt = { turns: 2 };
        expect(fails("taunt", me, foe)).toBe(true);
        expect(fails("leech-seed", me, foe)).toBe(false);
        foe.leechSeed = true;
        expect(fails("leech-seed", me, foe)).toBe(true);
        expect(fails("leech-seed", me, mon("venusaur", ["splash"]))).toBe(true); // 풀 타입
        foe.encore = { move: "splash", turns: 2 };
        expect(fails("encore", me, foe)).toBe(true);
        foe.disabled = { move: "splash" };
        expect(fails("disable", me, foe)).toBe(true);
        expect(fails("poltergeist", me, foe)).toBe(true); // 도구가 없다
        foe.item = { name: "leftovers" };
        expect(fails("poltergeist", me, foe)).toBe(false);
    });
    test("던지기: 던질 도구가 없거나 던질 수 없는 도구이면 실패한다", () => {
        const [me, foe] = base();
        expect(fails("fling", me, foe)).toBe(true);
        me.item = { name: "leftovers" };
        expect(fails("fling", me, foe)).toBe(false);
        me.item = { name: "venusaurite" };
        expect(fails("fling", me, foe)).toBe(true);
    });
    test("컴퓨터는 이런 기술을 고르지 않는다 (이미 비가 오는데 비춤, 도구 없는 상대에게 폴터가이스트)", () => {
        const cpu = [mon("garchomp", ["rain-dance", "poltergeist", "tackle"])];
        const human = [mon("snorlax", ["splash"])];
        const field = ensureField(human, cpu);
        field.weather = { name: "rain", turns: 3 };
        expect(chooseSupportMove(human, cpu)).toBe(null);
        expect(makeMove(human, cpu).name).toBe("tackle");
    });
});
