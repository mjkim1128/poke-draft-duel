// 하품이 실패하면 왜 실패했는지 알려 주는지 확인한다.
import fs from "fs";
import path from "path";
import { doAttack } from "shared/turn";
import { getAbility } from "shared/abilities";

const MOVES = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/moves.json"), "utf8")
);
const yawn = () => JSON.parse(JSON.stringify(MOVES.find((m) => m.name === "yawn")));

function mon(name, ability = null) {
    return {
        name,
        hp: [300, 300],
        stat_levels: [0, 0, 0, 0, 0, 0, 0],
        item: null,
        ability: ability ? getAbility(ability) : null,
        types: [{ slot: 1, type: { name: "normal" } }],
        moveset: [],
        base_stats: [80, 80, 80, 80, 80, 80],
    };
}

const use = (defender) => doAttack(mon("user"), defender, yawn(), [defender], [mon("user")]);

test("하품은 처음 쓰면 성공한다", () => {
    const foe = mon("Foe");
    expect(use(foe)).toEqual(["Foe grew drowsy!"]);
    expect(foe.yawn).toBe(2);
});

test("이미 졸린 상대에게는 이유를 알려 준다", () => {
    const foe = mon("Foe");
    use(foe);
    expect(use(foe)).toEqual(["Foe is already drowsy!"]);
});

test("잠을 막는 특성이면 특성 때문이라고 알려 준다", () => {
    const foe = mon("Delibird", "vital-spirit");
    expect(use(foe)[0]).toMatch(/prevents sleep!$/);
    expect(foe.yawn).toBeUndefined();
});

test("이미 상태 이상이면 그렇다고 알려 준다", () => {
    const foe = mon("Foe");
    foe.status = { name: "burn" };
    expect(use(foe)).toEqual(["Foe already has a status condition!"]);
});
