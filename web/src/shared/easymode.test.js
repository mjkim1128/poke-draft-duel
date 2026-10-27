// 이지 모드: 연승 수와 파티를 브라우저에 저장하고 불러온다
import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { packPokemon, toSavedSet, saveEasy, loadEasy, clearEasy } from "shared/easymode";
import { GameOverDisplay } from "components/GameOverDisplay/GameOverDisplay";
import { ClearDisplay } from "components/ClearDisplay/ClearDisplay";
import { setLang } from "shared/lang";

const poke = (name, extra = {}) => ({
    name,
    item: { name: "leftovers" },
    originalItem: { name: "leftovers" },
    ability: { name: "pressure" },
    baseAbility: { name: "pressure" },
    moveset: [{ name: "tackle", type: { name: "normal" } }, { name: "protect", type: { name: "normal" } }],
    ...extra,
});
const party = () => ["a", "b", "c", "d", "e", "f"].map((n) => poke(n));

beforeEach(() => window.localStorage.clear());

describe("저장 형식", () => {
    test("이름, 처음 도구, 처음 특성, 기술만 저장한다", () => {
        const p = poke("gengar", { item: null, ability: { name: "cursed-body" }, originalItem: { name: "life-orb" }, baseAbility: { name: "levitate" } });
        expect(packPokemon(p)).toEqual({ name: "gengar", item: "life-orb", ability: "levitate", moves: [{ slug: "tackle" }, { slug: "protect" }] });
    });
    test("도구와 특성이 없으면 null이다", () => {
        const p = poke("x", { item: null, originalItem: null, ability: null, baseAbility: null });
        expect(packPokemon(p)).toMatchObject({ item: null, ability: null });
    });
    test("잠재파워는 타입도 저장한다", () => {
        const p = poke("x", { moveset: [{ name: "hidden-power", type: { name: "ice" } }] });
        expect(packPokemon(p).moves).toEqual([{ slug: "hidden-power", hpType: "ice" }]);
        expect(toSavedSet(packPokemon(p)).moves).toEqual([[{ slug: "hidden-power", hpType: "ice" }]]);
    });
    test("세트 모양으로 바꾸면 기존 세트 흐름이 그대로 쓴다 (기술마다 하나뿐인 선택지)", () => {
        const set = toSavedSet(packPokemon(poke("x")));
        expect(set).toEqual({ item: "leftovers", ability: "pressure", moves: [[{ slug: "tackle" }], [{ slug: "protect" }]] });
    });
});

describe("저장, 불러오기, 지우기", () => {
    test("저장한 연승 수와 파티를 그대로 불러온다", () => {
        saveEasy(17, party());
        const saved = loadEasy();
        expect(saved.winStreak).toBe(17);
        expect(saved.party.map((p) => p.name)).toEqual(["a", "b", "c", "d", "e", "f"]);
    });
    test("저장이 없으면 null이다", () => {
        expect(loadEasy()).toBeNull();
    });
    test("지우면 없어진다", () => {
        saveEasy(3, party());
        clearEasy();
        expect(loadEasy()).toBeNull();
    });
    test("망가진 저장은 무시한다 (6마리가 아님, 연승 수 없음, JSON 아님)", () => {
        window.localStorage.setItem("battlefactory-easy", JSON.stringify({ winStreak: 3, party: party().slice(0, 5).map(packPokemon) }));
        expect(loadEasy()).toBeNull();
        window.localStorage.setItem("battlefactory-easy", JSON.stringify({ party: party().map(packPokemon) }));
        expect(loadEasy()).toBeNull();
        window.localStorage.setItem("battlefactory-easy", "{not json");
        expect(loadEasy()).toBeNull();
    });
    test("저장소를 쓸 수 없어도 오류가 나지 않는다", () => {
        const spy = jest.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
            throw new Error("blocked");
        });
        expect(() => saveEasy(1, party())).not.toThrow();
        spy.mockRestore();
    });
});

describe("이지 모드 화면", () => {
    let container;
    beforeEach(() => {
        global.IS_REACT_ACT_ENVIRONMENT = true;
        container = document.createElement("div");
        document.body.appendChild(container);
        setLang("ko");
    });
    afterEach(() => {
        container.remove();
        setLang("en");
    });
    const render = (node) => {
        const root = createRoot(container);
        act(() => root.render(node));
        return container;
    };

    test("이지 모드에서 지면 같은 층 선출 화면으로 보낸다", () => {
        const onClick = jest.fn();
        const c = render(<GameOverDisplay win={false} easy winStreak={9} onClick={onClick} />);
        expect(c.textContent).toContain("같은 층 선출 화면으로");
        act(() => c.querySelector("button").click());
        expect(onClick).toHaveBeenCalledWith("select");
    });
    test("일반 모드에서 지면 처음으로 보낸다", () => {
        const onClick = jest.fn();
        const c = render(<GameOverDisplay win={false} winStreak={9} onClick={onClick} />);
        act(() => c.querySelector("button").click());
        expect(onClick).toHaveBeenCalledWith("home");
    });
    test("이지 모드 클리어 화면은 엔드리스 모드를 열어 주지 않고 처음으로만 간다", () => {
        const onHome = jest.fn();
        const c = render(<ClearDisplay easy winStreak={31} onContinue={() => {}} onHome={onHome} />);
        expect(c.textContent).toContain("이지 모드 클리어!");
        expect(c.textContent).not.toContain("엔드리스 모드가 열렸습니다");
        expect(c.querySelectorAll("button")).toHaveLength(1);
        act(() => c.querySelector("button").click());
        expect(onHome).toHaveBeenCalled();
    });
    test("일반 클리어 화면은 엔드리스 모드가 열렸다고 알린다", () => {
        const c = render(<ClearDisplay winStreak={31} onContinue={() => {}} onHome={() => {}} />);
        expect(c.textContent).toContain("엔드리스 모드가 열렸습니다");
        expect(c.querySelectorAll("button")).toHaveLength(2);
    });
});
