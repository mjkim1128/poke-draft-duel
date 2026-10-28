// 트릭룸은 끝나면 속도 순서가 뒤집힌다: 컴퓨터는 몇 턴 남았는지까지 따라가며 1대1 승부와 교체를 판단한다
import { chooseSwitch } from "shared/cpuswitch";
import { duelWins, trickRoomTurnsLeft } from "shared/cpusetup";

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
function mon({ name = "Mon", atk = 100, def = 100, spe = 100, hp = 300 }) {
    return {
        name,
        hp: [hp, hp],
        stat_levels: [0, 0, 0, 0, 0, 0, 0],
        item: null,
        ability: null,
        types: [{ slot: 1, type: { name: "water" } }],
        moveset: [{ ...HIT }],
        base_stats: [hp, atk, def, atk, def, spe],
    };
}
const tr = (turns) => ({ trickRoom: { turns } });

describe("트릭룸이 남은 턴 수", () => {
    test("없으면 0, 있으면 남은 턴 수(이번 턴 포함)", () => {
        expect(trickRoomTurnsLeft(null)).toBe(0);
        expect(trickRoomTurnsLeft({})).toBe(0);
        expect(trickRoomTurnsLeft(tr(4))).toBe(4);
    });
});

describe("1대1 승부를 턴마다 따라간다 (duelWins)", () => {
    const slow = mon({ spe: 30 });
    const fast = mon({ spe: 150 });
    test("트릭룸이 없으면 빠른 쪽이 먼저: 같은 횟수면 느린 쪽이 진다", () => {
        expect(duelWins(slow, fast, null, 2, 2, 0)).toBe(false);
        expect(duelWins(fast, slow, null, 2, 2, 0)).toBe(true);
    });
    test("트릭룸이 끝까지 이어지면 느린 쪽이 먼저 움직여서 이긴다", () => {
        expect(duelWins(slow, fast, tr(5), 2, 2, 5)).toBe(true);
    });
    test("트릭룸이 한 턴만 남으면 둘째 턴부터 순서가 뒤집혀서 진다", () => {
        expect(duelWins(slow, fast, tr(1), 2, 2, 1)).toBe(false);
    });
    test("끝나는 시점에 따라 승패가 갈린다: 3대3이면 트릭룸이 3턴은 남아야 이긴다", () => {
        expect(duelWins(slow, fast, tr(3), 3, 3, 3)).toBe(true);
        expect(duelWins(slow, fast, tr(2), 3, 3, 2)).toBe(false);
    });
    test("서로 못 쓰러뜨리면 결판이 나지 않아서 null", () => {
        expect(duelWins(slow, fast, null, Infinity, Infinity, 0)).toBeNull();
    });
});

describe("교체 판단에 트릭룸의 남은 턴이 반영된다", () => {
    // 둘 다 상대를 세 방에 쓰러뜨린다. CPU 쪽이 느리다.
    const setup = (turns) => {
        const foe = [mon({ name: "Human", atk: 200, spe: 150 })];
        const cpu = [mon({ name: "CPU", atk: 200, spe: 30 }), mon({ name: "Bench", atk: 400, def: 400, spe: 100 })];
        foe.field = cpu.field = tr(turns);
        return { foe, cpu };
    };
    test("트릭룸이 충분히 남아 있으면 이기는 대결이라 그대로 싸운다", () => {
        const { foe, cpu } = setup(3);
        expect(chooseSwitch(foe, cpu)).toBe(-1);
    });
    test("트릭룸이 곧 끝나서 순서가 뒤집히면 지는 대결이 되어 바꾼다", () => {
        const { foe, cpu } = setup(2);
        expect(chooseSwitch(foe, cpu)).toBe(1);
    });
    test("트릭룸이 없을 때 느린 쪽은 원래대로 진다 (기준)", () => {
        const foe = [mon({ name: "Human", atk: 200, spe: 150 })];
        const cpu = [mon({ name: "CPU", atk: 200, spe: 30 }), mon({ name: "Bench", atk: 400, def: 400, spe: 100 })];
        expect(chooseSwitch(foe, cpu)).toBe(1);
    });
});
