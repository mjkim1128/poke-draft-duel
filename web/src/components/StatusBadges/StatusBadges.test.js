import { conditionsOf } from "./StatusBadges";

test("능력치 단계가 오르거나 내리면 배지로 보인다", () => {
    const list = conditionsOf({ stat_levels: [2, 0, 0, -1, 0, 0, 0] });
    expect(list).toEqual([
        { label: "공격 +2", kind: "good", key: undefined },
        { label: "특방 -1", kind: "bad", key: undefined },
    ]);
});

test("단계가 모두 0이면 아무것도 보이지 않는다", () => {
    expect(conditionsOf({ stat_levels: Array(7).fill(0) })).toEqual([]);
});

test("상태이상과 능력치 변화가 함께 보인다", () => {
    const list = conditionsOf({ status: { name: "burn" }, stat_levels: [-1, 0, 0, 0, 0, 0, 0] });
    expect(list.map((c) => c.label)).toEqual(["화상", "공격 -1"]);
});
