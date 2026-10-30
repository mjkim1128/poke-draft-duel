// 리밋실드(메테노): 체력이 절반 이하가 되어도 그 즉시가 아니라, 턴의 모든 일이 끝난 뒤에 껍질을 버린다
import fs from "fs";
import path from "path";
import { doTurn, getBaseStats, hpCalc } from "shared";
import { getAbility, previewEntryForm, resetBattleForms } from "shared/abilities";

const dir = path.join(__dirname, "../../../api/src/main/resources/data/");
const read = (f) => JSON.parse(fs.readFileSync(dir + f, "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const clone = (x) => JSON.parse(JSON.stringify(x));
function mon(species, moves, ability = null, hpFraction = 1) {
    const p = clone(POKEMON.get(species));
    p.base_stats = getBaseStats(p);
    const max = hpCalc(p.base_stats[0]) * 3;
    p.hp = [Math.floor(max * hpFraction), max];
    p.stat_levels = Array(7).fill(0);
    p.item = null;
    p.originalItem = null;
    p.ability = ability ? getAbility(ability) : null;
    p.baseAbility = p.ability;
    p.moveset = moves.map((m) => clone(MOVES.get(m)));
    for (const m of p.moveset) m.accuracy = null;
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, actionsSinceSwitch: 1, revealed: true });
    return p;
}
const minior = (moves, hpFraction) => mon("minior-red-meteor", moves, "shields-down", hpFraction);

beforeEach(() => jest.spyOn(Math, "random").mockReturnValue(0.5));
afterEach(() => jest.restoreAllMocks());

test("체력이 절반 이하가 되어도 그 턴의 남은 행동은 유성 모습의 능력치로 한다 (즉발이 아니다)", () => {
    // 빠른 상대가 먼저 때려서 메테노의 체력이 절반 아래로 내려간 뒤, 메테노가 공격한다. 그 공격이 얼마나 아픈지로 모습을 안다.
    const dealt = (setup) => {
        const holder = minior(["tackle"], 0.52);
        setup(holder);
        const attacker = mon("jolteon", ["thunderbolt"]);
        attacker.base_stats[5] = 500;
        attacker.hp = [99999, 99999];
        doTurn([holder], [attacker], holder.moveset[0]);
        return { lost: 99999 - attacker.hp[0], holder };
    };
    const normal = dealt(() => {});
    const asCore = dealt((h) => (h.base_stats = [60, 100, 60, 100, 60, 120])); // 처음부터 코어 능력치였다면
    expect(normal.holder.hp[0]).toBeLessThanOrEqual(normal.holder.hp[1] / 2); // 맞아서 절반 아래가 되었고
    expect(normal.holder.forme).toBe("core"); // 턴이 끝난 뒤에는 코어 모습이다
    expect(normal.lost).toBeGreaterThan(0);
    expect(normal.lost).toBeLessThan(asCore.lost); // 하지만 맞은 직후의 공격은 아직 유성 모습의 능력치(공격 60)였다
});

test("체력이 절반 이하가 된 턴의 마지막에 껍질을 버린다: 두 포켓몬의 행동과 잔여 효과가 모두 끝난 뒤의 메시지다", () => {
    const holder = minior(["splash"], 0.55);
    const attacker = mon("snorlax", ["body-slam"]);
    attacker.base_stats[5] = 1;
    const text = doTurn([holder], [attacker], holder.moveset[0]);
    const lines = text.join("\n").split("\n");
    const broke = lines.findIndex((l) => /broke its shell/.test(l));
    const lastAttack = lines.map((l, i) => (/used|Body Slam/i.test(l) ? i : -1)).reduce((a, b) => Math.max(a, b), -1);
    expect(holder.hp[0]).toBeLessThanOrEqual(holder.hp[1] / 2);
    expect(holder.forme).toBe("core");
    expect(broke).toBeGreaterThan(lastAttack);
    expect(broke).toBe(lines.length - 1 - lines.slice(broke + 1).length); // 껍질을 버린 줄이 가장 뒤쪽 (그 뒤에는 다른 일이 없다)
});

test("체력이 절반 위로 회복하면 턴이 끝날 때 다시 껍질을 쓴다", () => {
    const holder = minior(["splash", "recover"], 0.4);
    const attacker = mon("blissey", ["splash"]);
    doTurn([holder], [attacker], holder.moveset[0]); // 이 턴 끝에 체력이 낮아 코어로 바뀐다
    expect(holder.forme).toBe("core");
    doTurn([holder], [attacker], holder.moveset[1]); // 회복해서 절반 위가 되면 껍질로 돌아간다
    expect(holder.hp[0]).toBeGreaterThan(holder.hp[1] / 2);
    expect(holder.forme).toBeNull();
    expect(holder.sprites.front_default).toMatch(/\/774\.png$/); // 그림도 유성 모습으로 돌아온다
});

test("코어 모습의 능력치가 적용된다 (스피드 120)", () => {
    const holder = minior(["splash"], 0.4);
    const attacker = mon("blissey", ["splash"]);
    doTurn([holder], [attacker], holder.moveset[0]);
    expect(holder.forme).toBe("core");
    expect(holder.base_stats[5]).toBe(120);
    expect(holder.sprites.front_default).toMatch(/\/10136\.png$/); // 그림도 코어 모습으로 바뀐다
    expect(holder.sprites.back_default).toMatch(/\/back\/10136\.png$/);
});

test("킬가르도(블레이드폼)와 약어리(군집폼)도 모습의 그림이 바뀐다", () => {
    const blade = mon("aegislash-shield", ["shadow-ball"], "stance-change");
    doTurn([blade], [mon("blissey", ["splash"])], blade.moveset[0]);
    expect(blade.forme).toBe("blade");
    expect(blade.sprites.front_default).toMatch(/\/10026\.png$/);
    const fish = mon("wishiwashi-solo", ["splash"], "schooling");
    fish.hp = [fish.hp[1], fish.hp[1]];
    doTurn([fish], [mon("blissey", ["splash"])], fish.moveset[0]);
    expect(fish.forme).toBe("school");
    expect(fish.sprites.front_default).toMatch(/\/10127\.png$/);
});

describe("약어리(떼지어 행동)는 처음부터 군집의 모습이다", () => {
    const fish = (hp = 1) => {
        const f = mon("wishiwashi-solo", ["splash"], "schooling", hp);
        return f;
    };
    test("선출 화면: 체력이 충분하면 군집의 능력치와 그림이다", () => {
        const f = fish();
        previewEntryForm(f);
        expect(f.forme).toBe("school");
        expect(f.base_stats).toEqual([45, 140, 130, 140, 135, 30]);
        expect(f.sprites.front_default).toMatch(/\/10127\.png$/);
    });
    test("체력이 25% 이하이거나 떼지어 행동이 아니면 그대로다", () => {
        const low = fish(0.2);
        previewEntryForm(low);
        expect(low.forme).toBeFalsy();
        const other = mon("snorlax", ["splash"]);
        previewEntryForm(other);
        expect(other.forme).toBeFalsy();
    });
    test("처음 모습으로 되돌리면 단독의 모습이다 (싸움 사이에 모습이 남지 않는다)", () => {
        const f = fish();
        previewEntryForm(f);
        resetBattleForms(f);
        expect(f.forme).toBeFalsy();
        expect(f.sprites.front_default).toMatch(/\/746\.png$/);
    });
    test("기술을 쓰는 동안 어느 장면에서도 군집의 모습이 유지된다 (단독으로 깜빡이지 않는다)", () => {
        const f = fish();
        previewEntryForm(f);
        const foe = mon("blissey", ["splash"]);
        const text = doTurn([f], [foe], f.moveset[0]);
        expect(text.frames.length).toBeGreaterThan(0);
        for (const frame of text.frames) {
            expect(frame.playerPokemon[0].forme).toBe("school");
            expect(frame.playerPokemon[0].sprites.front_default).toMatch(/\/10127\.png$/);
        }
        expect(f.forme).toBe("school");
    });
});

describe("킬가르도(스탠스 체인지): 공격하면 블레이드폼, 킹실드를 쓰면 실드폼", () => {
    const sword = () => mon("aegislash-shield", ["shadow-ball", "kings-shield"], "stance-change");
    test("공격 기술을 쓰면 블레이드폼이 되고 그림과 능력치가 바뀐다", () => {
        const a = sword();
        doTurn([a], [mon("blissey", ["splash"])], a.moveset[0]);
        expect(a.forme).toBe("blade");
        expect(a.base_stats).toEqual([60, 140, 50, 140, 50, 60]);
        expect(a.sprites.front_default).toMatch(/\/10026\.png$/);
    });
    test("블레이드폼에서 킹실드를 쓰면 실드폼으로 돌아온다 (그림도, 안내 줄도)", () => {
        const a = sword();
        const foe = mon("blissey", ["splash"]);
        doTurn([a], [foe], a.moveset[0]);
        const text = doTurn([a], [foe], a.moveset[1]);
        expect(a.forme).toBeFalsy();
        expect(a.base_stats).toEqual([60, 50, 140, 50, 140, 60]);
        expect(a.sprites.front_default).toMatch(/\/681\.png$/);
        expect(text.join(" ")).toMatch(/changed to Shield Forme!/);
    });
    test("실드폼일 때 킹실드를 써도 아무 일도 없다", () => {
        const a = sword();
        const text = doTurn([a], [mon("blissey", ["splash"])], a.moveset[1]);
        expect(a.forme).toBeFalsy();
        expect(text.join(" ")).not.toMatch(/Forme!/);
    });
});

describe("킬가르도: 블레이드폼으로 바뀐 모습으로 기술이 나간다 (연출 장면부터)", () => {
    test("공격 기술의 연출 장면에서 이미 블레이드폼이다 (바뀌고 나서 기술이 나간다)", () => {
        const a = mon("aegislash-shield", ["shadow-ball"], "stance-change");
        const text = doTurn([a], [mon("blissey", ["splash"])], a.moveset[0]);
        const used = text.frames.find((f) => f.text.some((l) => l.includes(" used ")));
        expect(used).toBeTruthy();
        expect(used.playerPokemon[0].forme).toBe("blade");
        expect(used.playerPokemon[0].sprites.back_default).toMatch(/\/back\/10026\.png$/);
        // 체력은 아직 그대로다 (연출 장면)
        expect(used.playerPokemon[0].hp[0]).toBe(used.playerPokemon[0].hp[1]);
    });
    test("킹실드의 연출 장면에서는 실드폼이다", () => {
        const a = mon("aegislash-shield", ["shadow-ball", "kings-shield"], "stance-change");
        const foe = mon("blissey", ["splash"]);
        doTurn([a], [foe], a.moveset[0]);
        const text = doTurn([a], [foe], a.moveset[1]);
        const used = text.frames.find((f) => f.text.some((l) => l.includes(" used ")));
        expect(used.playerPokemon[0].forme).toBeFalsy();
        expect(used.playerPokemon[0].sprites.back_default).toMatch(/\/back\/681\.png$/);
    });
    test("모습이 바뀌지 않는 포켓몬은 장면이 그대로다", () => {
        const s = mon("snorlax", ["body-slam"]);
        const text = doTurn([s], [mon("blissey", ["splash"])], s.moveset[0]);
        const used = text.frames.find((f) => f.text.some((l) => l.includes(" used ")));
        expect(used.playerPokemon[0].forme).toBeFalsy();
    });
});

describe("킬가르도의 장면 순서: 모습이 바뀜 -> 안내 글 -> 기술 연출", () => {
    test("블레이드폼 안내 글의 장면이 먼저, 그다음 기술을 쓰는 장면에 연출이 붙는다", () => {
        const a = mon("aegislash-shield", ["shadow-ball"], "stance-change");
        const text = doTurn([a], [mon("blissey", ["splash"])], a.moveset[0]);
        const formIdx = text.frames.findIndex((f) => f.text.some((l) => /changed to Blade Forme!/.test(l)));
        const usedIdx = text.frames.findIndex((f) => f.text.some((l) => l.includes(" used ")));
        expect(formIdx).toBeGreaterThanOrEqual(0);
        expect(formIdx).toBeLessThan(usedIdx);
        // 안내 글 장면은 이미 블레이드폼이고, 연출은 아직 붙지 않았다
        expect(text.frames[formIdx].playerPokemon[0].forme).toBe("blade");
        expect(text.frames[formIdx].anim).toBeUndefined();
        expect(text.frames[formIdx].text.some((l) => l.includes(" used "))).toBe(false);
        // 기술을 쓰는 장면에는 연출이 붙고 안내 글은 들어 있지 않다
        expect(text.frames[usedIdx].anim).toBeTruthy();
        expect(text.frames[usedIdx].text.some((l) => /Forme!/.test(l))).toBe(false);
    });
    test("모습이 바뀌지 않는 기술은 평소처럼 한 장면에 연출이 붙는다", () => {
        const s = mon("snorlax", ["body-slam"]);
        const text = doTurn([s], [mon("blissey", ["splash"])], s.moveset[0]);
        const used = text.frames.find((f) => f.text.some((l) => l.includes(" used ")));
        expect(used.anim).toBeTruthy();
    });
});

describe("킹실드로 실드폼으로 돌아올 때도 장면 순서는 같다", () => {
    test("실드폼 안내 글 장면 -> 킹실드를 쓰는 장면(연출)", () => {
        const a = mon("aegislash-shield", ["shadow-ball", "kings-shield"], "stance-change");
        const foe = mon("blissey", ["splash"]);
        doTurn([a], [foe], a.moveset[0]);
        const text = doTurn([a], [foe], a.moveset[1]);
        const formIdx = text.frames.findIndex((f) => f.text.some((l) => /changed to Shield Forme!/.test(l)));
        const usedIdx = text.frames.findIndex((f) => f.text.some((l) => l.includes(" used ")));
        expect(formIdx).toBeGreaterThanOrEqual(0);
        expect(formIdx).toBeLessThan(usedIdx);
        expect(text.frames[formIdx].playerPokemon[0].forme).toBeFalsy();
        expect(text.frames[formIdx].text.some((l) => l.includes(" used "))).toBe(false);
        expect(text.frames.every((f) => f.text.length > 0)).toBe(true); // 빈 장면이 끼지 않는다
    });
});
