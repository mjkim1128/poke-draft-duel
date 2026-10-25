// 로그의 줄에서 상태이상/능력치 변화 연출을 알아내는지 확인한다.
import { statusAnimsOf } from "shared/animcues";

const names = { player: "Garchomp", opponent: "Snorlax" };

test("상태이상이 걸리면 그 포켓몬 위에서 연출한다", () => {
    expect(statusAnimsOf(["Snorlax is now afflicted with burn!"], names)).toEqual([{ name: "burn", side: "opponent" }]);
    expect(statusAnimsOf(["Garchomp is now afflicted with freeze!"], names)).toEqual([{ name: "frozen", side: "player" }]);
    expect(statusAnimsOf(["Garchomp is now afflicted with toxic!"], names)).toEqual([{ name: "toxic", side: "player" }]);
    expect(statusAnimsOf(["Snorlax became confused!"], names)).toEqual([{ name: "confusion", side: "opponent" }]);
    expect(statusAnimsOf(["Snorlax grew drowsy!"], names)).toEqual([{ name: "drowsy", side: "opponent" }]);
});

test("매 턴 끝의 상태이상 피해와 행동 못 함도 연출한다", () => {
    expect(statusAnimsOf(["Garchomp is hurt by poison!"], names)).toEqual([{ name: "poison", side: "player" }]);
    expect(statusAnimsOf(["Snorlax is hurt by its burn!"], names)).toEqual([{ name: "burn", side: "opponent" }]);
    expect(statusAnimsOf(["Snorlax is fast asleep."], names)).toEqual([{ name: "sleep", side: "opponent" }]);
    expect(statusAnimsOf(["Garchomp is paralyzed! It can't move!"], names)).toEqual([{ name: "paralysis", side: "player" }]);
});

test("능력치가 오르거나 내리면 연출하고, 같은 연출은 한 번만 낸다", () => {
    expect(statusAnimsOf(["Garchomp had it's Attack raised!"], names)).toEqual([{ name: "stat-up", side: "player" }]);
    expect(statusAnimsOf(["Snorlax had it's Defense lowered!"], names)).toEqual([{ name: "stat-down", side: "opponent" }]);
    const two = statusAnimsOf(["Garchomp had it's Attack raised!", "Garchomp had it's Speed raised!"], names);
    expect(two).toHaveLength(1);
});

test("기술을 썼다는 줄이나 상관없는 줄에는 반응하지 않는다", () => {
    expect(statusAnimsOf(["Garchomp used Swords Dance!", "Snorlax fainted!", "Snorlax lost 5% HP!"], names)).toEqual([]);
});
