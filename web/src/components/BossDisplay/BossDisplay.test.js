import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { BossDisplay } from "./BossDisplay";
import { setLang } from "shared/lang";

let container;
beforeEach(() => {
    global.IS_REACT_ACT_ENVIRONMENT = true;
    container = document.createElement("div");
    document.body.appendChild(container);
});
afterEach(() => {
    container.remove();
    setLang("en");
});

function render(winStreak) {
    const root = createRoot(container);
    act(() => root.render(<BossDisplay winStreak={winStreak} nextBattle={() => {}} />));
    return container.textContent;
}

test("한국어 설정이면 네임드 보스 화면이 모두 한글이다", () => {
    setLang("ko");
    const text = render(4);
    expect(text).toContain("4연승");
    expect(text).toContain("알라자르와 대결");
    expect(text).toContain("대결!");
    expect(text).not.toMatch(/[A-Za-z]{3,}/);
    setLang("ko");
    document.body.innerHTML = "";
});

test("한국어 설정에서 9승 보스(블레이크)도 한글이다", () => {
    setLang("ko");
    container = document.createElement("div");
    document.body.appendChild(container);
    const text = render(9);
    expect(text).toContain("블레이크와 대결");
    expect(text).not.toMatch(/[A-Za-z]{3,}/);
});

test("English 설정이면 영어로 나온다", () => {
    setLang("en");
    const text = render(4);
    expect(text).toContain("Trainer Alazar");
    expect(text).toContain("Fight!");
});
