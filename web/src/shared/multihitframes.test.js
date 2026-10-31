// 여러 번 때리는 기술(록블래스트, 씨기관총...): 타마다 연출 -> 데미지를 보여 주고, 다 끝나면 몇 번 맞았는지 알려 준다
import fs from "fs";
import path from "path";
import { doTurn, getBaseStats, hpCalc } from "shared";
import { getAbility } from "shared/abilities";
import { moveDescription } from "shared/movedescription";

const dir = path.join(__dirname, "../../../api/src/main/resources/data/");
const read = (f) => JSON.parse(fs.readFileSync(dir + f, "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const clone = (x) => JSON.parse(JSON.stringify(x));
function mon(species, moves, hp = 3) {
    const p = clone(POKEMON.get(species));
    p.base_stats = getBaseStats(p);
    const max = hpCalc(p.base_stats[0]) * hp;
    p.hp = [max, max];
    p.stat_levels = Array(7).fill(0);
    p.item = null;
    p.originalItem = null;
    p.ability = getAbility("pressure");
    p.baseAbility = p.ability;
    p.moveset = moves.map((m) => clone(MOVES.get(m)));
    for (const m of p.moveset) m.accuracy = null;
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, actionsSinceSwitch: 1, revealed: true });
    return p;
}

afterEach(() => jest.restoreAllMocks());

test("5번 맞는 기술: 타마다 연출과 데미지가 번갈아 나오고, 횟수는 마지막에 따로 알려 준다", () => {
    // 0.99로 고정하면 5회, 명중 100
    jest.spyOn(Math, "random").mockReturnValue(0.99);
    const user = mon("tyranitar", ["rock-blast"]);
    user.base_stats[5] = 999;
    const target = mon("snorlax", ["splash"], 20);
    const text = doTurn([user], [target], user.moveset[0]);
    const frames = text.frames.filter((f) => f.text.some((l) => /lost \d+% HP|used Rock Blast|Hit \d+ times/.test(l)) || f.repeatMove);
    const moveFrames = frames.filter((f) => f.anim && f.anim.side === "player");
    expect(moveFrames).toHaveLength(5); // 타마다 연출
    const kinds = frames.map((f) => (f.repeatMove ? "연출" : f.isMove ? "연출" : f.text.some((l) => /^Hit/.test(l)) ? "횟수" : "데미지"));
    expect(kinds).toEqual(["연출", "데미지", "연출", "데미지", "연출", "데미지", "연출", "데미지", "연출", "데미지", "횟수"]);
    // 체력은 타마다 조금씩 줄어든다 (연출 때는 앞 타까지 줄어든 체력 그대로)
    const hpOf = (f) => f.opponentPokemon[0].hp[0];
    const hps = frames.filter((f) => !f.text.some((l) => /^Hit/.test(l))).map(hpOf);
    expect(hps[0]).toBe(target.hp[1]); // 첫 연출: 아직 그대로
    for (let i = 1; i < hps.length; i++) expect(hps[i]).toBeLessThanOrEqual(hps[i - 1]);
    expect(hps[hps.length - 1]).toBeLessThan(hps[0]);
    expect(frames[frames.length - 1].text).toEqual(["Hit 5 times!"]);
});

test("한 번만 맞은 경우나 일반 기술은 지금처럼 한 번의 연출", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.5);
    const user = mon("tyranitar", ["crunch"]);
    const target = mon("snorlax", ["splash"], 20);
    const text = doTurn([user], [target], user.moveset[0]);
    expect(text.frames.filter((f) => f.anim && f.anim.side === "player")).toHaveLength(1);
    expect(text.frames.some((f) => f.repeatMove)).toBe(false);
});

test("사이코부스트: 쓸 수 없다는 안내문 대신 기술 설명이 나온다", () => {
    const m = MOVES.get("psycho-boost");
    expect(moveDescription(m, "en")).not.toMatch(/can't be used/);
    expect(moveDescription(m, "ko")).not.toMatch(/사용할 수 없는 기술/);
    expect(moveDescription(m, "ko")).toMatch(/풀 파워/);
});
