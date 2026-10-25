// 분노의 주먹은 쓴 포켓몬이 이 배틀에서 맞은 횟수만큼 위력이 올라간다 (50 + 50 x 횟수, 최대 350).
import fs from "fs";
import path from "path";
import { dynamicPower } from "shared/damagecalc";
import { doAttack } from "shared/turn";

const MOVES = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/moves.json"), "utf8")
);
const move = (name) => JSON.parse(JSON.stringify(MOVES.find((m) => m.name === name)));

function mon(name) {
    return {
        name,
        hp: [300, 300],
        stat_levels: [0, 0, 0, 0, 0, 0, 0],
        item: null,
        ability: null,
        types: [{ slot: 1, type: { name: "normal" } }],
        moveset: [],
        base_stats: [80, 80, 80, 80, 80, 80],
    };
}

test("맞은 적이 없으면 위력 50", () => {
    expect(dynamicPower(move("rage-fist"), mon("A"), mon("B"), null)).toBe(50);
});

test("맞은 횟수만큼 50씩 오르고 350에서 멈춘다", () => {
    const user = mon("A");
    user.timesHit = 3;
    expect(dynamicPower(move("rage-fist"), user, mon("B"), null)).toBe(200);
    user.timesHit = 20;
    expect(dynamicPower(move("rage-fist"), user, mon("B"), null)).toBe(350);
});

test("공격을 맞을 때마다 맞은 횟수가 늘어난다", () => {
    const victim = mon("Victim");
    const hit = move("tackle");
    hit.accuracy = null;
    doAttack(mon("Foe"), victim, hit, [victim], [mon("Foe")]);
    doAttack(mon("Foe"), victim, hit, [victim], [mon("Foe")]);
    expect(victim.timesHit).toBe(2);
});
