import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { BossDisplay } from "./BossDisplay";
import { setLang } from "shared/lang";
import { TRAINER_MARINA, TRAINER_DUNE } from "shared/bosspokemon";

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
    const boss = winStreak === 10 ? TRAINER_DUNE : TRAINER_MARINA;
    act(() => root.render(<BossDisplay winStreak={winStreak} boss={boss} nextBattle={() => {}} />));
    return container.textContent;
}

test("한국어 설정이면 네임드 보스 화면이 모두 한글이다", () => {
    setLang("ko");
    const text = render(5);
    expect(text).toContain("5연승");
    expect(text).toContain("마리나와 대결");
    expect(text).toContain("대결!");
    expect(text).not.toMatch(/[A-Za-z]{3,}/);
    setLang("ko");
    document.body.innerHTML = "";
});

test("한국어 설정에서 10승 보스(듄)도 한글이다", () => {
    setLang("ko");
    container = document.createElement("div");
    document.body.appendChild(container);
    const text = render(10);
    expect(text).toContain("듄과 대결");
    expect(text).not.toMatch(/[A-Za-z]{3,}/);
});

test("English 설정이면 영어로 나온다", () => {
    setLang("en");
    const text = render(5);
    expect(text).toContain("Trainer Marina");
    expect(text).toContain("Fight!");
});
