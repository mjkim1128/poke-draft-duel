// 탈출버튼: 공격을 받고도 쓰러지지 않으면 도구를 쓰고 교체를 요청한다.
import fs from "fs";
import path from "path";
import { doAttack } from "shared/turn";

const MOVES = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/moves.json"), "utf8")
);
const move = (name) => JSON.parse(JSON.stringify(MOVES.find((m) => m.name === name)));

function mon(name, { hp = 300, item = null } = {}) {
    return {
        name,
        hp: [hp, 300],
        stat_levels: [0, 0, 0, 0, 0, 0, 0],
        item: item ? { name: item } : null,
        ability: null,
        types: [{ slot: 1, type: { name: "normal" } }],
        moveset: [],
        base_stats: [80, 80, 80, 80, 80, 80],
    };
}

beforeEach(() => jest.spyOn(Math, "random").mockReturnValue(0.5));
afterEach(() => jest.restoreAllMocks());

function hit(defender, bench) {
    const attacker = mon("attacker");
    const defenderTeam = [defender, ...bench];
    const text = doAttack(attacker, defender, move("tackle"), defenderTeam, [attacker]);
    return { text, defenderTeam };
}

test("탈출버튼을 든 포켓몬이 맞고 살아남으면 도구가 사라지고 교체를 요청한다", () => {
    const holder = mon("holder", { item: "eject-button" });
    const { text, defenderTeam } = hit(holder, [mon("bench")]);
    expect(holder.hp[0]).toBeGreaterThan(0);
    expect(holder.hp[0]).toBeLessThan(300);
    expect(holder.item).toBeNull();
    expect(defenderTeam.pivotRequest).toBeTruthy();
    expect(text.join(" ")).toContain("switched out with the Eject Button");
});

test("교체할 포켓몬이 없으면 발동하지 않는다", () => {
    const holder = mon("holder", { item: "eject-button" });
    const { defenderTeam } = hit(holder, [mon("fainted", { hp: 0 })]);
    expect(holder.item).not.toBeNull();
    expect(defenderTeam.pivotRequest).toBeFalsy();
});

test("맞고 쓰러지면 발동하지 않는다", () => {
    const holder = mon("holder", { hp: 1, item: "eject-button" });
    const { defenderTeam } = hit(holder, [mon("bench")]);
    expect(holder.hp[0]).toBe(0);
    expect(defenderTeam.pivotRequest).toBeFalsy();
});

test("다른 도구를 들고 있으면 발동하지 않는다", () => {
    const holder = mon("holder", { item: "leftovers" });
    const { defenderTeam } = hit(holder, [mon("bench")]);
    expect(defenderTeam.pivotRequest).toBeFalsy();
});
