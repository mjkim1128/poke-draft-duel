// 규칙 설명 창: 스크롤 대신 버튼으로 쪽을 넘긴다
import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { Rules } from "./Rules";
import { setLang } from "shared/lang";
import { rulePages } from "shared/rules";

let container;
let root;
beforeEach(() => {
    global.IS_REACT_ACT_ENVIRONMENT = true;
    container = document.createElement("div");
    document.body.appendChild(container);
});
afterEach(() => {
    act(() => root.unmount());
    container.remove();
    setLang("en");
});
function render(onClose = () => {}) {
    root = createRoot(container);
    act(() => root.render(<Rules onClose={onClose} />));
}
const text = () => container.textContent;
const button = (label) => [...container.querySelectorAll("button")].find((b) => b.textContent.includes(label));
const click = (b) => act(() => b.click());

test("한국어: 첫 쪽이 먼저 나오고 이전 버튼은 눌리지 않는다", () => {
    setLang("ko");
    render();
    const first = rulePages(true)[0];
    expect(text()).toContain("1 / 6");
    expect(text()).toContain(first.title);
    for (const p of first.paragraphs) expect(text()).toContain(p);
    expect(button("이전").disabled).toBe(true);
});
test("다음 버튼으로 쪽을 넘기고 이전 버튼으로 돌아온다", () => {
    setLang("ko");
    render();
    click(button("다음"));
    expect(text()).toContain("2 / 6");
    expect(text()).toContain(rulePages(true)[1].title);
    expect(text()).not.toContain(rulePages(true)[0].paragraphs[0]);
    click(button("이전"));
    expect(text()).toContain("1 / 6");
});
test("마지막 쪽에서는 다음 대신 닫기가 나오고, 닫으면 닫힘 신호를 보낸다", () => {
    setLang("ko");
    const onClose = jest.fn();
    render(onClose);
    for (let i = 0; i < 5; i++) click(button("다음"));
    expect(text()).toContain("6 / 6");
    expect(button("다음")).toBeUndefined();
    for (const p of rulePages(true)[5].paragraphs) expect(text()).toContain(p);
    click(button("닫기"));
    expect(onClose).toHaveBeenCalledTimes(1);
});
test("가운데 쪽에서도 닫을 수 있다", () => {
    const onClose = jest.fn();
    render(onClose);
    click(button("Close"));
    expect(onClose).toHaveBeenCalledTimes(1);
});
test("방향키로도 넘기고 Esc로 닫는다", () => {
    const onClose = jest.fn();
    render(onClose);
    act(() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight" })));
    expect(text()).toContain("2 / 6");
    act(() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowLeft" })));
    expect(text()).toContain("1 / 6");
    act(() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" })));
    expect(onClose).toHaveBeenCalledTimes(1);
});
test("영어 설정이면 영어로 나온다", () => {
    render();
    expect(text()).toContain("Goal");
    expect(text()).toContain("Next");
    expect(text()).toContain(rulePages(false)[0].paragraphs[0]);
});
