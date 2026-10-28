// 터치 화면: 짧게 누르면 기술이 나가고, 길게 누르면 기술 정보가 뜨며 기술은 나가지 않는다
import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { Move, LONG_PRESS_MS } from "./Move";

const MOVE = {
    name: "tackle",
    power: 40,
    accuracy: 100,
    pp: 35,
    priority: 0,
    damage_class: { name: "physical" },
    type: { name: "normal" },
    meta: { drain: 0, stat_chance: 0 },
    flavor_text_entries: [{ flavor_text: "A physical attack.", language: { name: "en" } }],
};

let container;
let root;
beforeEach(() => {
    global.IS_REACT_ACT_ENVIRONMENT = true;
    jest.useFakeTimers();
    container = document.createElement("div");
    document.body.appendChild(container);
});
afterEach(() => {
    act(() => root.unmount()); // 정보창(Portal)을 React가 먼저 치우게 한다
    jest.useRealTimers();
    container.remove();
});

function render(onClick = jest.fn(), move = MOVE) {
    root = createRoot(container);
    act(() => root.render(<Move move={move} onClick={onClick} />));
    return onClick;
}
const button = () => container.querySelector("button");
const wrapper = () => container.querySelector(".move-div");
const popupText = () => document.body.querySelector(".floating-popup");

// jsdom에는 PointerEvent가 없으므로 같은 이름의 이벤트에 pointerType을 달아서 보낸다
function pointer(target, type, pointerType = "touch") {
    const e = new Event(type, { bubbles: true, cancelable: true });
    e.pointerType = pointerType;
    act(() => {
        target.dispatchEvent(e);
    });
}
const click = (target) => act(() => target.dispatchEvent(new MouseEvent("click", { bubbles: true })));

describe("터치: 짧게 누르면 기술이 나간다", () => {
    test("누르고 곧바로 떼면 기술이 나가고 정보창은 뜨지 않는다", () => {
        const onClick = render();
        pointer(wrapper(), "pointerdown");
        act(() => jest.advanceTimersByTime(100));
        pointer(wrapper(), "pointerup");
        click(button());
        expect(onClick).toHaveBeenCalledTimes(1);
        expect(popupText()).toBeNull();
    });
    test("누르고 있는 시간이 기준보다 짧으면 정보창 타이머가 취소된다", () => {
        render();
        pointer(wrapper(), "pointerdown");
        act(() => jest.advanceTimersByTime(LONG_PRESS_MS - 50));
        pointer(wrapper(), "pointerup");
        act(() => jest.advanceTimersByTime(500));
        expect(popupText()).toBeNull();
    });
});

describe("터치: 길게 누르면 정보가 뜬다", () => {
    test("기준 시간을 넘기면 정보창이 뜬다", () => {
        render();
        pointer(wrapper(), "pointerdown");
        act(() => jest.advanceTimersByTime(LONG_PRESS_MS + 10));
        expect(popupText()).not.toBeNull();
        expect(popupText().textContent).toContain("Power: 40");
    });
    test("손을 뗄 때 따라오는 클릭으로 기술이 나가지 않는다", () => {
        const onClick = render();
        pointer(wrapper(), "pointerdown");
        act(() => jest.advanceTimersByTime(LONG_PRESS_MS + 10));
        pointer(wrapper(), "pointerup");
        click(button());
        expect(onClick).not.toHaveBeenCalled();
    });
    test("손을 뗀 뒤에도 정보창이 남아 있다가, 다른 곳을 누르면 닫힌다", () => {
        render();
        pointer(wrapper(), "pointerdown");
        act(() => jest.advanceTimersByTime(LONG_PRESS_MS + 10));
        pointer(wrapper(), "pointerup");
        expect(popupText()).not.toBeNull();
        pointer(document.body, "pointerdown");
        expect(popupText()).toBeNull();
    });
    test("정보를 본 뒤 다시 짧게 누르면 기술이 나간다", () => {
        const onClick = render();
        pointer(wrapper(), "pointerdown");
        act(() => jest.advanceTimersByTime(LONG_PRESS_MS + 10));
        pointer(wrapper(), "pointerup");
        click(button()); // 길게 누름에 딸려 온 클릭 (무시)
        pointer(wrapper(), "pointerdown");
        pointer(wrapper(), "pointerup");
        click(button());
        expect(onClick).toHaveBeenCalledTimes(1);
    });
    test("누른 채로 손가락이 끌려 나가면(스크롤) 정보창이 뜨지 않는다", () => {
        render();
        pointer(wrapper(), "pointerdown");
        act(() => jest.advanceTimersByTime(200));
        pointer(wrapper(), "pointercancel");
        act(() => jest.advanceTimersByTime(1000));
        expect(popupText()).toBeNull();
    });
    test("길게 누르면 뜨는 기본 메뉴를 막는다", () => {
        render();
        pointer(wrapper(), "pointerdown");
        const e = new Event("contextmenu", { bubbles: true, cancelable: true });
        act(() => {
            wrapper().dispatchEvent(e);
        });
        expect(e.defaultPrevented).toBe(true);
    });
});

describe("터치 뒤에 브라우저가 흉내 내는 마우스 이벤트", () => {
    test("터치로 짧게 누른 뒤의 mouseenter가 정보창을 띄우지 않는다", () => {
        render();
        pointer(wrapper(), "pointerdown");
        pointer(wrapper(), "pointerup");
        act(() => {
            wrapper().dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
        });
        expect(popupText()).toBeNull();
    });
});

describe("마우스: 지금처럼 올리면 정보가 뜨고 누르면 기술이 나간다", () => {
    test("마우스를 올리면 정보창이 뜨고 내리면 사라진다", () => {
        render();
        pointer(wrapper(), "pointerdown", "mouse");
        pointer(wrapper(), "pointerup", "mouse");
        act(() => {
            wrapper().dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
        });
        expect(popupText()).not.toBeNull();
        act(() => {
            wrapper().dispatchEvent(new MouseEvent("mouseout", { bubbles: true }));
        });
        expect(popupText()).toBeNull();
    });
    test("마우스로 누르면 오래 눌러도 기술이 나간다", () => {
        const onClick = render();
        pointer(wrapper(), "pointerdown", "mouse");
        act(() => jest.advanceTimersByTime(LONG_PRESS_MS * 3));
        pointer(wrapper(), "pointerup", "mouse");
        click(button());
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});

describe("기술 설명", () => {
    test("정보창에 도감 설명이 한 줄로 들어간다", () => {
        render(jest.fn(), { ...MOVE, flavor_text_entries: [{ flavor_text: "A full-body charge attack.", language: { name: "en" } }] });
        pointer(wrapper(), "pointerdown");
        act(() => jest.advanceTimersByTime(LONG_PRESS_MS + 10));
        expect(popupText().textContent).toContain("Description: ");
    });
    test("설명이 없는 기술도 정보창이 열린다", () => {
        render(jest.fn(), { ...MOVE, flavor_text_entries: [] });
        pointer(wrapper(), "pointerdown");
        act(() => jest.advanceTimersByTime(LONG_PRESS_MS + 10));
        expect(popupText().textContent).toContain("Power: 40");
        expect(popupText().textContent).not.toContain("Description");
    });
});

