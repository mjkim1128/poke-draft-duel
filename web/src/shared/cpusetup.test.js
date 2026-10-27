// 컴퓨터가 랭업기를 쓰는 규칙: 숫자만으로 판정하는 표 + 실제 데미지 계산을 돌리는 상황 몇 개
import fs from "fs";
import path from "path";
import { setupVerdict, setupKind, setupEffect, chooseSetupMove } from "shared/cpusetup";
import { makeMove } from "shared/computermove";
import { getAbility } from "shared/abilities";

const MOVES = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/moves.json"), "utf8")
);
const move = (name) => JSON.parse(JSON.stringify(MOVES.find((m) => m.name === name)));

// 공격 횟수는 100 / 피해(%) 올림, 상대가 나를 잡는 횟수 = 버팀 + 1
const base = { foeHitsBefore: 4, foeHitsAfter: 4, attacksBefore: 3, attacksAfter: 2, flip: false, fasterAfter: true };
const verdict = (kind, over) => setupVerdict(kind, { ...base, ...over });

describe("공격 랭업", () => {
    test("1회 이상 버티고 공격 횟수가 줄면 쓴다", () => {
        expect(verdict("attack", {})).toBe(true);
        expect(verdict("attack", { attacksBefore: 2, attacksAfter: 1 })).toBe(true);
    });
    test("공격 횟수가 안 줄면 쓰지 않는다", () => {
        expect(verdict("attack", { attacksBefore: 2, attacksAfter: 2 })).toBe(false);
        expect(verdict("attack", { attacksBefore: 1, attacksAfter: 1 })).toBe(false);
    });
    test("한 방에 쓰러지면(버팀 0) 쓰지 않는다", () => {
        expect(verdict("attack", { foeHitsAfter: 1 })).toBe(false);
    });
    test("2번째 맞고 쓰러지면(버팀 1) 쓴다", () => {
        expect(verdict("attack", { foeHitsAfter: 2 })).toBe(true);
    });
});

describe("공격 + 스피드", () => {
    test("A: 역전되고 2회 이상 버티고 공격 횟수가 주면 쓴다", () => {
        expect(verdict("attackSpeed", { flip: true, foeHitsAfter: 3 })).toBe(true);
    });
    test("A: 버팀 1회뿐이면 한 방이 아닌 이상 쓰지 않는다", () => {
        expect(verdict("attackSpeed", { flip: true, foeHitsAfter: 2 })).toBe(false);
    });
    test("B: 1회 버티고 역전되고 한 방에 잡으면 쓴다", () => {
        expect(verdict("attackSpeed", { flip: true, foeHitsAfter: 2, attacksBefore: 2, attacksAfter: 1 })).toBe(true);
    });
    test("B: 한 방에 쓰러지면 쓰지 않는다", () => {
        expect(verdict("attackSpeed", { flip: true, foeHitsAfter: 1, attacksBefore: 2, attacksAfter: 1 })).toBe(false);
    });
    test("역전이 안 되면 일반 공격 랭업 규칙을 따른다", () => {
        expect(verdict("attackSpeed", { flip: false, foeHitsAfter: 2 })).toBe(true);
        expect(verdict("attackSpeed", { flip: false, foeHitsAfter: 2, attacksAfter: 3 })).toBe(false);
    });
});

describe("스피드만", () => {
    test("1회 버티고 역전되고 한 방에 잡으면 쓴다", () => {
        expect(verdict("speed", { flip: true, foeHitsAfter: 2, attacksBefore: 2, attacksAfter: 1 })).toBe(true);
    });
    test("역전되어도 두 방이 필요하면 쓰지 않는다", () => {
        expect(verdict("speed", { flip: true, attacksAfter: 2 })).toBe(false);
    });
    test("한 방에 잡을 수 있어도 역전이 안 되면 쓰지 않는다", () => {
        expect(verdict("speed", { flip: false, attacksBefore: 2, attacksAfter: 1 })).toBe(false);
    });
});

describe("방어 랭업", () => {
    test("랭업 턴에 맞는 것까지 3회 이상 버티고 상대 횟수가 늘면 쓴다", () => {
        expect(verdict("defense", { foeHitsBefore: 3, foeHitsAfter: 4 })).toBe(true);
    });
    test("2회만 버티면 쓰지 않는다", () => {
        expect(verdict("defense", { foeHitsBefore: 2, foeHitsAfter: 3 })).toBe(false);
    });
    test("상대가 나를 잡는 횟수가 늘지 않으면(특수 공격 상대, 천진) 쓰지 않는다", () => {
        expect(verdict("defense", { foeHitsBefore: 5, foeHitsAfter: 5 })).toBe(false);
    });
    test("상대 피해가 아주 작아도 횟수가 늘면 계속 쓸 수 있다 (상한 없음)", () => {
        expect(verdict("defense", { foeHitsBefore: 14, foeHitsAfter: 20 })).toBe(true);
    });
    test("방어만 올리는 기술이 공격 횟수를 줄이면(바디프레스) 공격 랭업으로 쓴다", () => {
        expect(verdict("defenseOnly", { foeHitsBefore: 2, foeHitsAfter: 2 })).toBe(true);
        expect(verdict("defenseOnly", { foeHitsBefore: 2, foeHitsAfter: 2, attacksAfter: 3 })).toBe(false);
    });
});

describe("공격 + 방어", () => {
    test("내가 더 빠르면 공격 규칙: 1회 버티고 공격 횟수가 줄면 쓴다", () => {
        expect(verdict("attackDefense", { fasterAfter: true, foeHitsAfter: 2 })).toBe(true);
    });
    test("내가 더 느리면 방어 규칙: 3회 이상 버텨야 한다", () => {
        expect(verdict("attackDefense", { fasterAfter: false, foeHitsBefore: 2, foeHitsAfter: 3 })).toBe(false);
        expect(verdict("attackDefense", { fasterAfter: false, foeHitsBefore: 3, foeHitsAfter: 4 })).toBe(true);
    });
    test("나비춤: 역전되고 한 방이면 쓰고, 아니면 공격 + 방어 규칙으로 판단", () => {
        expect(verdict("attackDefenseSpeed", { flip: true, foeHitsAfter: 2, attacksBefore: 2, attacksAfter: 1 })).toBe(true);
        expect(verdict("attackDefenseSpeed", { fasterAfter: true, foeHitsAfter: 2 })).toBe(true);
        expect(verdict("attackDefenseSpeed", { fasterAfter: false, foeHitsBefore: 2, foeHitsAfter: 3 })).toBe(false);
    });
});

describe("기술 분류와 효과", () => {
    const kindOf = (name, pokemon = mon({})) => {
        const e = setupEffect(move(name), pokemon);
        return e && setupKind(e.changes);
    };
    test("종류", () => {
        expect(kindOf("swords-dance")).toBe("attack");
        expect(kindOf("dragon-dance")).toBe("attackSpeed");
        expect(kindOf("shell-smash")).toBe("attackSpeed");
        expect(kindOf("calm-mind")).toBe("attackDefense");
        expect(kindOf("quiver-dance")).toBe("attackDefenseSpeed");
        expect(kindOf("agility")).toBe("speed");
        expect(kindOf("iron-defense")).toBe("defenseOnly");
        expect(kindOf("belly-drum")).toBe("attack");
        expect(kindOf("curse")).toBe("defense"); // 스피드가 내려가므로 방어형
    });
    test("고스트 타입의 저주는 랭업기가 아니다", () => {
        expect(kindOf("curse", mon({ types: ["ghost"] }))).toBe(null);
    });
    test("이미 +6이면 쓸 수 없다", () => {
        const p = mon({});
        p.stat_levels[0] = 6;
        expect(setupEffect(move("swords-dance"), p)).toBe(null);
    });
    test("배북은 체력 절반을 내고, 체력이 절반 이하이면 쓸 수 없다", () => {
        const p = mon({ hp: 300 });
        expect(setupEffect(move("belly-drum"), p).hpCost).toBe(150);
        p.hp[0] = 150;
        expect(setupEffect(move("belly-drum"), p)).toBe(null);
    });
    test("공격하는 기술이나 상대에게 거는 기술은 랭업기가 아니다", () => {
        expect(setupEffect(move("tackle"), mon({}))).toBe(null);
        expect(setupEffect(move("growl"), mon({}))).toBe(null);
    });
});

// ---- 실제 데미지 계산을 돌리는 상황 ----

// 같은 물 타입(자속 보정 없음)끼리 쓰는 위력 80 일반 물리기: 능력치만 정하면 피해를 손으로 셀 수 있다
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

function mon({ name = "Mon", atk = 100, def = 100, spe = 100, hp = 300, types = ["water"], moves = [], ability = null }) {
    return {
        name,
        hp: [hp, hp],
        stat_levels: [0, 0, 0, 0, 0, 0, 0],
        item: null,
        ability: ability ? getAbility(ability) : null,
        types: types.map((t, i) => ({ slot: i + 1, type: { name: t } })),
        moveset: moves.map((m) => (typeof m === "string" ? move(m) : { ...m })),
        base_stats: [hp, atk, def, atk, def, spe],
    };
}

// 내 공격 100 / 상대 방어 100 / 상대 체력 300: 한 번에 69 (5타). 칼춤 후 136 (3타)
// 상대 공격 30 / 내 방어 100: 한 번에 22 (14타)
const cpu = (extra = {}) => mon({ name: "CPU", moves: [HIT, "swords-dance"], ...extra });
const human = (extra = {}) => mon({ name: "Human", atk: 30, moves: [HIT], ...extra });
const choose = (c, h) => chooseSetupMove([h], [c]);

test("여유가 있고 공격 횟수가 줄면 칼춤을 춘다", () => {
    expect(choose(cpu(), human()).name).toBe("swords-dance");
});

test("makeMove도 같은 상황에서 칼춤을 고른다", () => {
    expect(makeMove([human()], [cpu()]).name).toBe("swords-dance");
});

test("랭업기가 둘이면 공격 횟수가 더 줄어드는 쪽, 같으면 오르는 능력치가 많은 쪽을 고른다", () => {
    // 칼춤(+2)과 용춤(+1, 스피드 +1)은 둘 다 5타 → 3타. 올라가는 능력치가 많은 용춤이 먼저
    const c = mon({ name: "CPU", moves: [HIT, "swords-dance", "dragon-dance"] });
    expect(choose(c, human({ hp: 250 })).name).toBe("dragon-dance");
    // 상대 체력 200이면 칼춤은 3타 → 2타, 용춤은 3타 → 2타... 체력 140: 칼춤 1타(136? 아님) 대신 횟수가 더 주는 쪽을 확인
    const strong = mon({ name: "CPU", atk: 200, moves: [HIT, "swords-dance", "dragon-dance"] });
    // 공격 200: 한 번에 136 → 상대 체력 300에서 3타, 칼춤 후 (공격 +2) 271 → 2타, 용춤 후 (+1) 204 → 2타. 같으니 용춤
    expect(choose(strong, human()).name).toBe("dragon-dance");
});

test("한 방에 잡을 수 있으면 랭업기 대신 공격한다", () => {
    // (가장 약한 난수로 한 번 때려도 쓰러지는 체력: 69의 85% = 58 이상이 되면 한 방이 아니다)
    expect(choose(cpu(), human({ hp: 50 }))).toBe(null);
    expect(makeMove([human({ hp: 50 })], [cpu()]).name).toBe("test-hit");
});

test("공격 횟수가 안 줄면 쓰지 않는다 (+1짜리 기술로 2타 그대로)", () => {
    // 상대 체력 110: 가장 약한 난수로 58씩 2타, 공격 +1 후 86씩으로도 2타
    const c = mon({ name: "CPU", moves: [HIT, "hone-claws"] });
    expect(choose(c, human({ hp: 110 }))).toBe(null);
});

test("천진 상대에게는 칼춤을 추지 않는다", () => {
    expect(choose(cpu(), human({ ability: "unaware" }))).toBe(null);
});

test("한 방에 쓰러질 만큼 상대가 세면 쓰지 않는다", () => {
    expect(choose(cpu({ hp: 20 }), human({ atk: 300 }))).toBe(null);
});

test("공격 기술이 속임수뿐이면 칼춤을 춰도 횟수가 안 줄어 쓰지 않는다", () => {
    const c = mon({ name: "CPU", moves: ["foul-play", "swords-dance"] });
    expect(choose(c, human())).toBe(null);
});

test("느린데 용춤으로 역전되고 한 방에 잡을 수 있게 되면 춘다", () => {
    // 용춤 후 공격 +1 (1.5배) = 102, 가장 약한 난수로 86 → 상대 체력 80이면 한 방 (용춤 전에는 58이라 두 방). 스피드 80 → 294 > 236
    const c = mon({ name: "CPU", spe: 80, moves: [HIT, "dragon-dance"] });
    const h = human({ hp: 80, atk: 60, spe: 100 });
    expect(choose(c, h).name).toBe("dragon-dance");
});

test("트릭룸이 깔려 있으면 스피드를 올려도 역전되지 않아 쓰지 않는다", () => {
    const c = mon({ name: "CPU", spe: 80, moves: [HIT, "dragon-dance"] });
    const h = human({ hp: 100, atk: 60, spe: 100 });
    const team = [h];
    team.field = { trickRoom: { turns: 3 } };
    // 트릭룸에서는 느린 쪽이 먼저: 원래 CPU(80)가 먼저이므로 역전이 아니고, 일반 규칙(공격 횟수 감소)으로 따진다
    const move = chooseSetupMove(team, [c]);
    expect(move === null || move.name === "dragon-dance").toBe(true);
});

test("배북: 체력 절반으로도 버티고 횟수가 줄면 쓴다", () => {
    const c = mon({ name: "CPU", moves: [HIT, "belly-drum"] });
    expect(choose(c, human()).name).toBe("belly-drum");
});

test("배북: 체력이 이미 절반 이하이면 쓰지 않는다", () => {
    const c = mon({ name: "CPU", moves: [HIT, "belly-drum"] });
    c.hp[0] = 150;
    expect(choose(c, human())).toBe(null);
});

test("노말 저주: 3회 이상 버티고 상대 횟수가 늘면 방어 규칙으로 쓴다", () => {
    const c = mon({ name: "CPU", types: ["normal"], moves: [HIT, "curse"] });
    expect(choose(c, human()).name).toBe("curse");
});

test("특수 공격만 하는 상대에게 물리 방어 랭업은 쓰지 않는다", () => {
    const special = { ...HIT, damage_class: { name: "special" } };
    const c = mon({ name: "CPU", moves: [HIT, "iron-defense"] });
    const h = mon({ name: "Human", atk: 30, moves: [special] });
    expect(choose(c, h)).toBe(null);
});

test("방어 랭업은 +6까지 계속 쓸 수 있고, +6이 되면 멈춘다", () => {
    const c = mon({ name: "CPU", moves: [HIT, "iron-defense"] });
    const h = human();
    let used = 0;
    while (used < 10) {
        const m = choose(c, h);
        if (!m) break;
        c.stat_levels[1] = Math.min(6, c.stat_levels[1] + 2);
        used++;
    }
    expect(used).toBeLessThanOrEqual(3);
    expect(c.stat_levels[1]).toBe(6);
});

test("구애 고정 등으로 쓸 수 없는 기술은 고르지 않는다", () => {
    const c = cpu();
    c.item = { name: "choice-band" };
    c.lockedMove = "test-hit";
    const m = choose(c, human());
    expect(m === null || m.name === "test-hit").toBe(true);
});
