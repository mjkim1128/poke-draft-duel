// 힘껏펀치: 턴 시작에 집중하고, 움직이기 전에 공격을 받으면 집중이 흐트러져 실패한다
import fs from "fs";
import path from "path";
import { doTurn, getBaseStats, hpCalc } from "shared";
import { strongestMove } from "shared/computermove";

const read = (file) => JSON.parse(fs.readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/" + file), "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const clone = (x) => JSON.parse(JSON.stringify(x));

function mon(species, moves) {
    const p = clone(POKEMON.get(species));
    p.base_stats = getBaseStats(p);
    p.hp = [hpCalc(p.base_stats[0]) * 4, hpCalc(p.base_stats[0]) * 4];
    p.stat_levels = Array(7).fill(0);
    p.item = null;
    p.originalItem = null;
    p.ability = null;
    p.baseAbility = null;
    p.moveset = moves.map((m) => clone(MOVES.get(m)));
    for (const m of p.moveset) m.accuracy = null;
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, lastMoveName: null, moveRepeatCount: 0 });
    return p;
}

beforeEach(() => jest.spyOn(Math, "random").mockReturnValue(0.5));
afterEach(() => jest.restoreAllMocks());

const setup = (foeMoves) => {
    const user = mon("machamp", ["focus-punch"]);
    const me = [user];
    const foe = [mon("blissey", foeMoves)];
    foe[0].hp = [99999, 99999];
    return { user, me, foe };
};

test("공격을 받지 않으면 집중했다가 힘껏펀치가 나간다 (맨 마지막에 움직인다)", () => {
    const { user, me, foe } = setup(["splash"]);
    const text = doTurn(me, foe, user.moveset[0]).join(" ");
    expect(text).toContain("is tightening its focus!");
    expect(text).toContain("used Focus Punch");
    expect(foe[0].hp[0]).toBeLessThan(foe[0].hp[1]);
    expect(text.indexOf("Blissey used Splash")).toBeLessThan(text.indexOf("used Focus Punch"));
});

test("움직이기 전에 공격을 받으면 집중이 흐트러져 실패한다", () => {
    const { user, me, foe } = setup(["tackle"]);
    const text = doTurn(me, foe, user.moveset[0]).join(" ");
    expect(text).toContain("is tightening its focus!");
    expect(text).toContain("lost its focus and couldn't move!");
    expect(text).not.toContain("used Focus Punch");
    expect(foe[0].hp[0]).toBe(foe[0].hp[1]);
});

test("대타출동이 공격을 대신 맞으면 집중이 흐트러지지 않는다", () => {
    const { user, me, foe } = setup(["tackle"]);
    user.substitute = { hp: 9999 };
    const text = doTurn(me, foe, user.moveset[0]).join(" ");
    expect(text).not.toContain("lost its focus");
    expect(text).toContain("used Focus Punch");
});

test("변화기를 맞은 것은 집중에 영향이 없다", () => {
    const { user, me, foe } = setup(["growl"]);
    const text = doTurn(me, foe, user.moveset[0]).join(" ");
    expect(text).not.toContain("lost its focus");
    expect(text).toContain("used Focus Punch");
});

test("집중은 그 턴에만 유지된다 (다음 턴에 새로 집중한다)", () => {
    const { user, me, foe } = setup(["tackle"]);
    doTurn(me, foe, user.moveset[0]);
    expect(user.focusPunch).toBeNull();
    foe[0].moveset = [clone(MOVES.get("splash"))];
    const text = doTurn(me, foe, user.moveset[0]).join(" ");
    expect(text).toContain("used Focus Punch");
});

test("컴퓨터는 상대가 공격할 수 있으면 힘껏펀치보다 다른 공격을 고른다", () => {
    const cpu = [mon("machamp", ["focus-punch", "cross-chop"])];
    const human = [mon("blissey", ["tackle"])];
    expect(strongestMove(human, cpu).name).toBe("cross-chop");
});

test("상대에게 공격 기술이 없으면 컴퓨터도 힘껏펀치를 쓴다", () => {
    const cpu = [mon("machamp", ["focus-punch", "bulk-up"])];
    const human = [mon("blissey", ["splash"])];
    expect(strongestMove(human, cpu).name).toBe("focus-punch");
});
