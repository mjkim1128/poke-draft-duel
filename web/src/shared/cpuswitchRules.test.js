// 컴퓨터가 스스로 교체하는 이유와, 쓰러지거나 U턴으로 빠진 뒤 나올 포켓몬을 고르는 규칙을 확인한다.
import { chooseSwitch, pickReplacement, entryDamage } from "shared/cpuswitch";
import { makeMove } from "shared/computermove";
import { isTrapped } from "shared/turn";
import { getAbility } from "shared/abilities";

// 같은 물 타입끼리(자속 보정 없음): 능력치 100 대 100, 위력 80이면 한 번에 69.
// 공격 200이면 136, 공격 300이면 183, 공격 400이면 270. 방어가 200이면 69, 400이면 52.
const HIT = {
    name: "test-hit",
    power: 80,
    accuracy: null,
    priority: 0,
    pp: 20,
    damage_class: { name: "physical" },
    type: { name: "normal" },
    target: { name: "selected-pokemon" },
};

function mon({ name = "Mon", atk = 100, def = 100, spe = 100, hp = 300, types = ["water"], moves = [HIT], ability = null, item = null }) {
    return {
        name,
        hp: [hp, hp],
        stat_levels: [0, 0, 0, 0, 0, 0, 0],
        item: item ? { name: item } : null,
        ability: ability ? getAbility(ability) : null,
        types: types.map((t, i) => ({ slot: i + 1, type: { name: t } })),
        moveset: moves.map((m) => ({ ...m })),
        base_stats: [hp, atk, def, atk, def, spe],
    };
}

// 사람 쪽 [앞에 나온 포켓몬], 컴퓨터 쪽 [앞에 나온 포켓몬, 후보들...]
const foeTeam = (extra = {}) => [mon({ name: "Human", ...extra })];
const cpuTeam = (front, ...bench) => [mon({ name: "CPU", ...front }), ...bench.map((b, i) => mon({ name: "Bench" + i, ...b }))];

describe("스스로 교체하는 이유", () => {
    test("1. 지는 대결이고 이기는 후보가 있으면 교체한다", () => {
        // CPU는 4번 쳐야 하고 상대는 3번이면 CPU를 잡는다. 후보는 2번이면 잡고 4번 버틴다.
        const foe = foeTeam({ atk: 200, hp: 250 });
        expect(chooseSwitch(foe, cpuTeam({}, { atk: 200, def: 200 }))).toBe(1);
    });
    test("이기고 있으면 교체하지 않는다", () => {
        expect(chooseSwitch(foeTeam({ atk: 30 }), cpuTeam({ atk: 200 }, { atk: 400 }))).toBe(-1);
    });
    test("2. 공격이 상대 최대 체력의 25% 미만이면 교체한다", () => {
        // 69 / 1000 = 7%: 상대가 거의 안 아프게 하는데도 더 센 후보가 있으면 바꾼다
        const foe = foeTeam({ atk: 1, hp: 1000 });
        expect(chooseSwitch(foe, cpuTeam({}, { atk: 400 }))).toBe(1);
    });
    test("2. 25% 이상이면 이 이유로는 교체하지 않는다", () => {
        // 136 / 300 = 45%
        const foe = foeTeam({ atk: 1, hp: 300 });
        expect(chooseSwitch(foe, cpuTeam({ atk: 200 }, { atk: 400 }))).toBe(-1);
    });
    test("3. 한 방에 쓰러지는데 내가 먼저 못 잡으면 교체한다", () => {
        const foe = foeTeam({ atk: 300 });
        expect(chooseSwitch(foe, cpuTeam({ hp: 100, spe: 50 }, { def: 400 }))).toBe(1);
    });
    test("3. 한 방에 쓰러져도 내가 먼저 한 방에 잡으면 공격한다", () => {
        const foe = foeTeam({ atk: 300, hp: 50 });
        expect(chooseSwitch(foe, cpuTeam({ hp: 100, spe: 150 }, { def: 400 }))).toBe(-1);
    });
    test("4. 공격 능력치가 -2 이하이면 교체한다", () => {
        // 능력치가 깎여 5번 쳐야 하는데 후보는 3번이면 된다
        const team = cpuTeam({ atk: 400 }, { atk: 400 });
        team[0].stat_levels[0] = -2;
        expect(chooseSwitch(foeTeam({ atk: 100, hp: 600 }), team)).toBe(1);
    });
    test("6. 잠에 걸려 있으면 더 나은 후보로 교체한다", () => {
        const team = cpuTeam({ atk: 200 }, { atk: 400 });
        team[0].status = { name: "sleep", counter: 2 };
        expect(chooseSwitch(foeTeam({ atk: 30 }), team)).toBe(1);
    });
    test("6. 맹독에 걸려 있으면 더 나은 후보로 교체한다", () => {
        const team = cpuTeam({ atk: 200 }, { atk: 400 });
        team[0].status = { name: "toxic", counter: 3 };
        expect(chooseSwitch(foeTeam({ atk: 30 }), team)).toBe(1);
    });
    test("6. 하품을 맞아 졸린 상태면(다음 턴 끝에 잠듦) 더 나은 후보로 교체한다", () => {
        const team = cpuTeam({ atk: 200 }, { atk: 400 });
        team[0].yawn = 1;
        expect(chooseSwitch(foeTeam({ atk: 30 }), team)).toBe(1);
    });
    test("6. 졸리지 않으면 같은 상황에서 교체하지 않는다", () => {
        const team = cpuTeam({ atk: 200 }, { atk: 400 });
        expect(chooseSwitch(foeTeam({ atk: 30 }), team)).toBe(-1);
    });
    test("6. 불면 같은 특성이 있거나 이미 상태이상이거나 안전지대가 있으면 졸려도 교체하지 않는다", () => {
        const insomnia = cpuTeam({ atk: 200, ability: "insomnia" }, { atk: 400 });
        insomnia[0].yawn = 1;
        expect(chooseSwitch(foeTeam({ atk: 30 }), insomnia)).toBe(-1);
        const poisoned = cpuTeam({ atk: 200 }, { atk: 400 });
        poisoned[0].yawn = 1;
        poisoned[0].status = { name: "poison" };
        expect(chooseSwitch(foeTeam({ atk: 30 }), poisoned)).toBe(-1);
        const guarded = cpuTeam({ atk: 200 }, { atk: 400 });
        guarded[0].yawn = 1;
        guarded.safeguardTurns = 3;
        expect(chooseSwitch(foeTeam({ atk: 30 }), guarded)).toBe(-1);
    });
    test("6. 졸려도 나은 후보가 없으면 교체하지 않는다", () => {
        const team = cpuTeam({ atk: 200 }, { atk: 50, def: 50 });
        team[0].yawn = 1;
        expect(chooseSwitch(foeTeam({ atk: 30 }), team)).toBe(-1);
    });
    test("변화 기술만 가진 포켓몬은 상성만으로는 교체하지 않는다", () => {
        const team = cpuTeam({ moves: [] }, { atk: 400 });
        expect(chooseSwitch(foeTeam({ atk: 200 }), team)).toBe(-1);
    });
    test("충전 중이면 교체하지 않는다", () => {
        const team = cpuTeam({}, { atk: 200, def: 200 });
        team[0].charging = "solar-beam";
        expect(chooseSwitch(foeTeam({ atk: 200, hp: 250 }), team)).toBe(-1);
    });
});

describe("후보 평가", () => {
    test("후보가 들어오자마자 쓰러지면 고르지 않는다", () => {
        const foe = foeTeam({ atk: 200, hp: 250 });
        expect(chooseSwitch(foe, cpuTeam({}, { atk: 20, def: 20 }))).toBe(-1);
    });
    test("모두 불리하면 공격을 받고 쓰러질 때까지 더 오래 버티는 후보로 교체한다", () => {
        // 후보는 공격이 약해 이길 수 없지만 지금 남아 있는 것보다 훨씬 오래 버틴다
        const foe = foeTeam({ atk: 200, hp: 250 });
        expect(chooseSwitch(foe, cpuTeam({}, { atk: 5, def: 400, hp: 600 }))).toBe(1);
    });
    test("모두 불리한데 지금보다 오래 버티는 후보가 없으면 교체하지 않는다", () => {
        const foe = foeTeam({ atk: 200, hp: 250 });
        expect(chooseSwitch(foe, cpuTeam({}, { atk: 5 }))).toBe(-1);
    });
    test("여러 후보 중 이기는 쪽을 고른다", () => {
        const foe = foeTeam({ atk: 200, hp: 250 });
        expect(chooseSwitch(foe, cpuTeam({}, { atk: 5, def: 400, hp: 600 }, { atk: 200, def: 200 }))).toBe(2);
    });
    test("교체 상한은 없다: 같은 상황이 이어지면 계속 교체를 고를 수 있다", () => {
        const foe = foeTeam({ atk: 200, hp: 250 });
        for (let i = 0; i < 5; i++) {
            expect(chooseSwitch(foe, cpuTeam({}, { atk: 200, def: 200 }))).toBe(1);
        }
    });
    test("스텔스록이 깔려 있으면 입장 피해를 뺀 체력으로 평가한다", () => {
        const team = cpuTeam({}, { atk: 200, def: 200 });
        team.hazards = { stealthRock: true, spikes: 0, toxicSpikes: 0, stickyWeb: false };
        expect(entryDamage(team[1], team)).toBe(37);
        expect(chooseSwitch(foeTeam({ atk: 200, hp: 210 }), team)).toBe(1);
    });
    test("입장 피해: 압정뿌리기는 땅에 닿는 포켓몬에게만, 도착 부츠는 모두 막는다", () => {
        const team = cpuTeam({}, { types: ["flying"] }, { types: ["water"], item: "heavy-duty-boots" });
        team.hazards = { stealthRock: false, spikes: 2, toxicSpikes: 0, stickyWeb: false };
        expect(entryDamage(team[1], team)).toBe(0);
        expect(entryDamage(team[2], team)).toBe(0);
        expect(entryDamage(mon({}), team)).toBe(50);
    });
});

describe("쓰러진 뒤 나올 포켓몬 고르기", () => {
    test("먼저 움직여서 한 방에 잡는 포켓몬이 우선", () => {
        const foe = foeTeam({ hp: 100 });
        const team = cpuTeam({}, { atk: 400, def: 400, hp: 600 }, { atk: 200, spe: 150 });
        expect(pickReplacement(foe, team)).toBe(2);
    });
    test("한 방에 잡는 포켓몬이 없으면 이기는 대결 중 여유가 큰 쪽", () => {
        const foe = foeTeam({ atk: 200 });
        const team = cpuTeam({}, { atk: 5, def: 400, hp: 600 }, { atk: 300, def: 300 });
        expect(pickReplacement(foe, team)).toBe(2);
    });
    test("이기는 후보가 없으면 가장 오래 버티는 쪽", () => {
        const foe = foeTeam({ atk: 200 });
        const team = cpuTeam({}, { atk: 5 }, { atk: 5, def: 400, hp: 600 });
        expect(pickReplacement(foe, team)).toBe(2);
    });
    test("쓰러진 포켓몬과 후보가 없으면 -1", () => {
        expect(pickReplacement(foeTeam(), cpuTeam({}))).toBe(-1);
        const t2 = cpuTeam({}, {});
        t2[1].hp[0] = 0;
        expect(pickReplacement(foeTeam(), t2)).toBe(-1);
    });
    test("들어오자마자 쓰러지는 후보뿐이어도 누군가는 나온다", () => {
        const team = cpuTeam({}, { hp: 10 });
        team.hazards = { stealthRock: true, spikes: 0, toxicSpikes: 0, stickyWeb: false };
        expect(pickReplacement(foeTeam({ atk: 300 }), team)).toBe(1);
    });
    test("U턴처럼 먼저 움직인 쪽이 빠질 때는 상대 공격을 한 번 맞는다고 계산한다", () => {
        // 상대가 한 방에 잡는 후보(체력 100)는 맞으면 쓰러지므로 피한다
        const foe = foeTeam({ atk: 300 });
        const team = cpuTeam({}, { hp: 100, atk: 400 }, { hp: 600, def: 300 });
        expect(pickReplacement(foe, team, { freeHit: true })).toBe(2);
    });
});

describe("makeMove 연결", () => {
    test("교체할 이유가 있으면 교체(priority 6)를 고른다", () => {
        const move = makeMove(foeTeam({ atk: 200, hp: 250 }), cpuTeam({}, { atk: 200, def: 200 }), true);
        expect(move.priority).toBe(6);
        expect(move.index).toBe(1);
    });
    test("붙잡혀서 교체할 수 없으면(canSwitch false) 그대로 싸운다", () => {
        const move = makeMove(foeTeam({ atk: 200, hp: 250 }), cpuTeam({}, { atk: 200, def: 200 }), false);
        expect(move.name).toBe("test-hit");
    });
});

describe("교체 금지", () => {
    const victim = (extra = {}) => [mon({ name: "Victim", ...extra }), mon({ name: "Bench" })];
    const trapper = (extra = {}) => [mon({ name: "Trapper", ...extra })];
    test("그림자밟기: 붙잡힌다. 고스트 타입과 같은 특성은 제외", () => {
        const foe = trapper({ ability: "shadow-tag" });
        expect(isTrapped(victim(), foe)).toBe(true);
        expect(isTrapped(victim({ types: ["ghost"] }), foe)).toBe(false);
        expect(isTrapped(victim({ ability: "shadow-tag" }), foe)).toBe(false);
    });
    test("개미지옥은 땅에 닿은 포켓몬만, 자력은 강철 타입만 붙잡는다", () => {
        expect(isTrapped(victim(), trapper({ ability: "arena-trap" }))).toBe(true);
        expect(isTrapped(victim({ types: ["flying"] }), trapper({ ability: "arena-trap" }))).toBe(false);
        expect(isTrapped(victim({ types: ["steel"] }), trapper({ ability: "magnet-pull" }))).toBe(true);
        expect(isTrapped(victim(), trapper({ ability: "magnet-pull" }))).toBe(false);
    });
    test("검은눈빛 같은 붙잡는 기술: 건 쪽이 나와 있는 동안만", () => {
        const foe = trapper();
        const team = victim();
        team[0].trap = { source: foe[0], kind: "trapped", move: "mean-look", turns: null };
        expect(isTrapped(team, foe)).toBe(true);
        expect(isTrapped(team, [mon({ name: "Other" })])).toBe(false);
    });
    test("벗어남의껍질을 들고 있으면 붙잡혀도 교체할 수 있다", () => {
        const foe = trapper({ ability: "shadow-tag" });
        expect(isTrapped(victim({ item: "shed-shell" }), foe)).toBe(false);
    });
});

describe("7. 랭크업이 지워지면 50% 확률로 교체를 고민한다", () => {
    const setup = () => {
        const foe = foeTeam({ atk: 100, hp: 260 });
        const cpu = cpuTeam({ atk: 120, hp: 300 }, { atk: 300, def: 300, hp: 300 });
        return [foe, cpu];
    };
    afterEach(() => jest.restoreAllMocks());

    test("지워지지 않았다면 이기고 있는 대결에서는 교체하지 않는다", () => {
        const [foe, cpu] = setup();
        expect(chooseSwitch(foe, cpu)).toBe(-1);
    });
    test("지워졌고 확률(50%)에 걸리면 더 나은 후보로 교체한다", () => {
        const [foe, cpu] = setup();
        cpu[0].boostsWiped = true;
        jest.spyOn(Math, "random").mockReturnValue(0.3);
        expect(chooseSwitch(foe, cpu)).toBe(1);
        expect(cpu[0].boostsWiped).toBe(false);
    });
    test("지워졌어도 확률에 안 걸리면 하던 대로 하고, 다음 턴에는 다시 따지지 않는다", () => {
        const [foe, cpu] = setup();
        cpu[0].boostsWiped = true;
        jest.spyOn(Math, "random").mockReturnValue(0.7);
        expect(chooseSwitch(foe, cpu)).toBe(-1);
        Math.random.mockReturnValue(0.3);
        expect(chooseSwitch(foe, cpu)).toBe(-1);
    });
    test("나은 후보가 없으면 교체하지 않는다", () => {
        const foe = foeTeam({ atk: 100, hp: 300 });
        const cpu = cpuTeam({ atk: 120, hp: 300 }, { atk: 50, def: 50, hp: 100 });
        cpu[0].boostsWiped = true;
        jest.spyOn(Math, "random").mockReturnValue(0.3);
        expect(chooseSwitch(foe, cpu)).toBe(-1);
    });
});

describe("8. 공격기가 없을 때의 교체", () => {
    const status = (name, ailment = "none") => ({
        name,
        power: null,
        accuracy: null,
        priority: 0,
        pp: 20,
        damage_class: { name: "status" },
        type: { name: "normal" },
        target: { name: "selected-pokemon" },
        meta: { ailment: { name: ailment } },
    });
    const SPLASH = status("test-status");
    const TOXIC = status("toxic", "poison");
    const bench = { atk: 200, def: 400 };
    test("잡을 수단이 전혀 없고 상대가 두 번에 잡으면 더 나은 후보로 교체한다", () => {
        const foe = foeTeam({ atk: 300 }); // 한 번에 183: 체력 300을 두 번에 잡는다
        expect(chooseSwitch(foe, cpuTeam({ moves: [SPLASH] }, bench))).toBe(1);
    });
    test("상대가 오래 걸려서 잡아도, 잡을 수단이 없으면 버틸수록 손해라 교체한다", () => {
        const foe = foeTeam({ atk: 100 }); // 한 번에 69: 5번 걸린다
        expect(chooseSwitch(foe, cpuTeam({ moves: [SPLASH] }, bench))).toBe(1);
    });
    test("상대도 나에게 피해를 줄 수 없는 교착 상태이면 교체하지 않는다", () => {
        const foe = foeTeam({ moves: [SPLASH] });
        expect(chooseSwitch(foe, cpuTeam({ moves: [SPLASH] }, bench))).toBe(-1);
    });
    test("공격기가 있으면 이 이유는 따지지 않는다 (기존 규칙대로)", () => {
        const foe = foeTeam({ atk: 100 });
        expect(chooseSwitch(foe, cpuTeam({}, {}))).toBe(-1); // 나을 후보가 없다
    });
    test("공격기는 없어도 독으로 상대가 먼저 쓰러지면 눌러앉는다", () => {
        const foe = foeTeam({ atk: 300 });
        foe[0].hp = [15, 300]; // 맹독 첫 턴 끝에 쓰러진다 (300/16 = 18)
        expect(chooseSwitch(foe, cpuTeam({ moves: [TOXIC] }, bench))).toBe(-1);
        expect(chooseSwitch(foe, cpuTeam({ moves: [SPLASH] }, bench))).toBe(1); // 독이 없으면 교체
    });
    test("이미 상대가 독에 걸려 있고 곧 쓰러지면 독 기술이 없어도 눌러앉는다", () => {
        const foe = foeTeam({ atk: 300 });
        foe[0].hp = [15, 300];
        foe[0].status = { name: "toxic", counter: 1 };
        expect(chooseSwitch(foe, cpuTeam({ moves: [SPLASH] }, bench))).toBe(-1);
    });
    test("독이 안 통하는 상대(독 타입)에게는 독 기술이 있어도 수단이 아니다", () => {
        const foe = foeTeam({ atk: 300, types: ["poison"] });
        foe[0].hp = [15, 300];
        expect(chooseSwitch(foe, cpuTeam({ moves: [TOXIC] }, bench))).toBe(1);
    });
    test("독이 너무 느려서 내가 먼저 쓰러지면 독 기술이 있어도 교체한다", () => {
        const foe = foeTeam({ atk: 300 }); // 체력이 가득 차서 독으로는 한참 걸린다
        expect(chooseSwitch(foe, cpuTeam({ moves: [TOXIC] }, bench))).toBe(1);
    });
});

describe("회복기로 버틸 수 있으면 눌러앉는다", () => {
    const status = (name, extra = {}) => ({
        name,
        power: null,
        accuracy: null,
        priority: 0,
        pp: 20,
        damage_class: { name: "status" },
        type: { name: "normal" },
        target: { name: "user" },
        meta: { ailment: { name: "none" }, category: { name: "net-good-stats" } },
        stat_changes: [],
        ...extra,
    });
    const heal = (extra = {}) => status("recover", { meta: { ailment: { name: "none" }, category: { name: "heal" }, healing: 50 }, ...extra });
    const bench = { atk: 200, def: 400 };
    // 상대(사람)는 맹독에 걸려 있고 체력이 가득 차 있어서 독으로는 6턴이 걸린다. 나는 공격기가 없다.
    const poisonedFoe = (extra = {}) => {
        const foe = foeTeam(extra);
        foe[0].status = { name: "toxic", counter: 1 };
        return foe;
    };
    test("회복량이 상대 피해보다 크면 독이 느려도 교체하지 않는다", () => {
        // 상대 피해는 69, 회복량은 150
        expect(chooseSwitch(poisonedFoe({ atk: 100 }), cpuTeam({ moves: [status("test-filler"), heal()] }, bench))).toBe(-1);
    });
    test("회복기가 없으면 같은 상황에서 교체한다", () => {
        expect(chooseSwitch(poisonedFoe({ atk: 100 }), cpuTeam({ moves: [status("test-filler")] }, bench))).toBe(1);
    });
    test("상대 피해가 회복량보다 크면 회복해도 따라잡히니 교체한다", () => {
        // 상대 피해는 183, 회복량은 150
        expect(chooseSwitch(poisonedFoe({ atk: 300 }), cpuTeam({ moves: [status("test-filler"), heal()] }, bench))).toBe(1);
    });
    test("회복기 PP가 모자라면 교체한다", () => {
        expect(chooseSwitch(poisonedFoe({ atk: 100 }), cpuTeam({ moves: [status("test-filler"), heal({ ppLeft: 1 })] }, bench))).toBe(1);
    });
    test("눌러앉기로 했는데 쓸 만한 공격이 없으면 시간을 버는 기술을 고른다 (회복 > 방어)", () => {
        const protect = status("protect");
        for (let i = 0; i < 10; i++) {
            const damaged = cpuTeam({ moves: [status("test-filler"), protect, heal()] });
            damaged[0].hp = [210, 300]; // 70%: 회복 규칙(60% 이하)에는 걸리지 않지만 잃은 체력이 있다
            expect(makeMove(foeTeam({ atk: 100 }), damaged, true).name).toBe("recover");
            const full = cpuTeam({ moves: [status("test-filler"), protect, heal()] });
            expect(makeMove(foeTeam({ atk: 100 }), full, true).name).toBe("protect");
        }
    });
});

describe("아무것도 못 하고 한 방에 쓰러질 때", () => {
    // 상대 공격 300이면 방어 100에게 183. 앞 포켓몬(체력 150)은 한 방에 쓰러지고 상대가 더 빨라서 먼저 잡지 못한다.
    // 후보(체력 250)는 첫 공격을 맞고 67이 남아 다음 공격에 쓰러지지만, 그래도 그냥 쓰러지는 것보다 낫다.
    const foe = () => foeTeam({ atk: 300, spe: 150, hp: 300 });
    test("후보도 한 방은 버티는 데 그다음엔 쓰러져도, 그냥 쓰러지는 것보다 교체한다", () => {
        const cpu = cpuTeam({ atk: 20, hp: 150, spe: 50 }, { atk: 20, hp: 250, spe: 50 });
        expect(chooseSwitch(foe(), cpu)).toBe(1);
    });
    test("후보가 들어오자마자 쓰러지면 교체하지 않는다 (같은 결과라 의미가 없다)", () => {
        const cpu = cpuTeam({ atk: 20, hp: 150, spe: 50 }, { atk: 20, hp: 150, spe: 50 });
        expect(chooseSwitch(foe(), cpu)).toBe(-1);
    });
    test("먼저 움직여서 한 방에 잡을 수 있으면 교체하지 않고 공격한다", () => {
        const cpu = cpuTeam({ atk: 300, hp: 150, spe: 200 }, { atk: 20, hp: 250, spe: 50 });
        expect(chooseSwitch(foeTeam({ atk: 300, spe: 150, hp: 150 }), cpu)).toBe(-1);
    });
});

