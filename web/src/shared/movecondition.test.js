// 사용 조건이 있는 기술(속이기, 잠꼬대, 폴터가이스트...)은 조건을 채울 때만 고를 수 있다.
import fs from "fs";
import path from "path";
import React from "react";
import { render } from "@testing-library/react";
import { getBaseStats, hpCalc, getUsableMoves, doTurn } from "shared";
import { moveConditionBlock } from "shared/movecondition";
import { strongestMove, makeMove } from "shared/computermove";
import { Move } from "components/Move/Move";

const read = (file) => JSON.parse(fs.readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/" + file), "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const ITEMS = new Map(read("items.json").map((i) => [i.name, i]));
const clone = (x) => JSON.parse(JSON.stringify(x));

function mon(species, moves, item = null) {
    const p = clone(POKEMON.get(species));
    p.base_stats = getBaseStats(p);
    p.hp = [hpCalc(p.base_stats[0]) * 4, hpCalc(p.base_stats[0]) * 4];
    p.stat_levels = Array(7).fill(0);
    p.item = item ? clone(ITEMS.get(item)) : null;
    p.originalItem = p.item;
    p.ability = null;
    p.baseAbility = null;
    p.moveset = moves.map((n) => {
        const m = clone(MOVES.get(n));
        m.accuracy = null;
        return m;
    });
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, lastMoveName: null, moveRepeatCount: 0 });
    return p;
}
const names = (p, ctx) => getUsableMoves(p, ctx).map((m) => m.name);

describe("속이기 (나온 직후에만)", () => {
    test("나온 직후(첫 행동 전)에는 고를 수 있다", () => {
        const p = mon("snorlax", ["fake-out", "tackle"]);
        p.actionsSinceSwitch = 0;
        expect(names(p)).toEqual(["fake-out", "tackle"]);
    });
    test("한 번 행동한 뒤에는 고를 수 없다", () => {
        const p = mon("snorlax", ["fake-out", "tackle"]);
        p.actionsSinceSwitch = 1;
        expect(names(p)).toEqual(["tackle"]);
        expect(moveConditionBlock(p, p.moveset[0])).toContain("나온 직후");
    });
    test("교체해서 다시 나오면 다시 고를 수 있다", () => {
        const me = [mon("snorlax", ["fake-out", "tackle"]), mon("blissey", ["splash"])];
        const foe = [mon("garchomp", ["splash"]), mon("blissey", ["splash"])];
        doTurn(me, foe, me[0].moveset[1]);
        expect(names(me[0])).toEqual(["tackle"]);
        doTurn(me, foe, { priority: 6, index: 1 });
        doTurn(me, foe, { priority: 6, index: 1 });
        expect(me[0].name).toBe("snorlax");
        expect(names(me[0])).toEqual(["fake-out", "tackle"]);
    });
    test("만나자마자와 마룻바닥세워막기도 같다", () => {
        const p = mon("snorlax", ["first-impression", "mat-block", "tackle"]);
        p.actionsSinceSwitch = 2;
        expect(names(p)).toEqual(["tackle"]);
    });
    test("속이기뿐인 포켓몬이 첫 턴이 지나면 발버둥만 남는다", () => {
        const p = mon("snorlax", ["fake-out"]);
        p.actionsSinceSwitch = 1;
        expect(names(p)).toEqual(["struggle"]);
    });
    test("컴퓨터도 첫 턴이 지난 속이기는 고르지 않는다", () => {
        const cpu = [mon("garchomp", ["fake-out", "tackle"]), mon("blissey", ["splash"])];
        const human = [mon("blissey", ["splash"]), mon("blissey", ["splash"])];
        cpu[0].actionsSinceSwitch = 1;
        expect(strongestMove(human, cpu).name).toBe("tackle");
        expect(makeMove(human, cpu, false).name).toBe("tackle");
    });
});

describe("그 밖의 조건", () => {
    test("잠꼬대는 잠들어 있을 때만", () => {
        const p = mon("snorlax", ["sleep-talk", "tackle"]);
        expect(names(p)).toEqual(["tackle"]);
        p.status = { name: "sleep", counter: 2 };
        expect(names(p)).toContain("sleep-talk");
    });
    test("잠자기와 회복 기술은 체력이 가득이어도 고를 수 있다", () => {
        const p = mon("snorlax", ["rest", "recover", "roost", "tackle"]);
        expect(names(p)).toEqual(["rest", "recover", "roost", "tackle"]);
    });
    test("폴터가이스트는 상대가 도구를 들고 있을 때만 (상대를 알 때)", () => {
        const p = mon("snorlax", ["poltergeist", "tackle"]);
        const noItem = mon("blissey", ["splash"]);
        const withItem = mon("blissey", ["splash"], "leftovers");
        expect(names(p, { foe: noItem })).toEqual(["tackle"]);
        expect(names(p, { foe: withItem })).toEqual(["poltergeist", "tackle"]);
        expect(names(p)).toEqual(["poltergeist", "tackle"]); // 상대를 모르면 막지 않는다
    });
    test("내던지기는 도구가 있을 때만, 볼가득넣기는 열매가 있을 때만", () => {
        const p = mon("snorlax", ["fling", "stuff-cheeks", "tackle"]);
        expect(names(p)).toEqual(["tackle"]);
        p.item = clone(ITEMS.get("leftovers"));
        expect(names(p)).toContain("fling");
        expect(names(p)).not.toContain("stuff-cheeks");
        p.item = clone(ITEMS.get("sitrus-berry"));
        expect(names(p)).toContain("stuff-cheeks");
    });
    test("상대의 선택에 달린 기습은 고를 수는 있다 (쓴 뒤에 실패한다)", () => {
        const p = mon("weavile", ["sucker-punch", "tackle"]);
        expect(names(p)).toEqual(["sucker-punch", "tackle"]);
    });
});

describe("기술 버튼", () => {
    const renderMove = (attacker, name, foe = mon("blissey", ["splash"])) => {
        const { container } = render(<Move move={clone(MOVES.get(name))} onClick={() => {}} attackerDefender={[attacker, foe]} moveOwner="current" />);
        return container.querySelector("button");
    };
    test("조건을 채우지 못한 기술은 눌러지지 않고 이유가 보인다", () => {
        const p = mon("snorlax", ["fake-out"]);
        p.actionsSinceSwitch = 1;
        const button = renderMove(p, "fake-out");
        expect(button.disabled).toBe(true);
        expect(button.title).toContain("나온 직후");
    });
    test("조건을 채운 기술은 눌러진다", () => {
        const p = mon("snorlax", ["fake-out"]);
        p.actionsSinceSwitch = 0;
        const button = renderMove(p, "fake-out");
        expect(button.disabled).toBe(false);
    });
});
