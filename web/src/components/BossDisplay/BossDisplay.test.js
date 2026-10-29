import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { BossDisplay } from "./BossDisplay";
import { setLang } from "shared/lang";
import { TRAINER_MARINA, TRAINER_DUNE, TRAINER_ORION } from "shared/bosspokemon";

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

describe("최종 보스는 패배한 횟수와 걸린 시간을 말한다", () => {
    const renderFinal = () => {
        const root = createRoot(container);
        act(() => root.render(<BossDisplay winStreak={30} boss={TRAINER_ORION} nextBattle={() => {}} />));
        return container.textContent;
    };
    beforeEach(() => window.localStorage.clear());
    afterEach(() => window.localStorage.clear());

    test("한국어: 저장된 기록이 대사에 들어간다", () => {
        window.localStorage.setItem("battlefactory-journey", JSON.stringify({ started: true, active: false, resets: 7, ms: (1 * 3600 + 23 * 60 + 45) * 1000 }));
        setLang("ko");
        const text = renderFinal();
        expect(text).toContain("7회, 1시간 23분 45초.");
        expect(text).toContain("패배한 횟수와 걸린 시간이야.");
        expect(text).toContain("그렇다고 봐주지 않아. 부디 나가떨어지지 않길 바랄게.");
        expect(text).toContain("P.D.D Developer와 대결");
    });
    test("영어: 기록이 대사에 들어간다", () => {
        window.localStorage.setItem("battlefactory-journey", JSON.stringify({ started: true, active: false, resets: 1, ms: 62000 }));
        const text = renderFinal();
        expect(text).toContain("1 time, 0h 1m 2s.");
        expect(text).toContain("I won't go easy on you.");
    });
    test("기록이 없으면 0회, 0시간 0분 0초로 나온다", () => {
        setLang("ko");
        expect(renderFinal()).toContain("0회, 0시간 0분 0초.");
    });
    test("다른 보스는 기록을 말하지 않고 자기 대사를 한다", () => {
        window.localStorage.setItem("battlefactory-journey", JSON.stringify({ started: true, active: false, resets: 7, ms: 5000 }));
        const text = render(5);
        expect(text).not.toContain("time");
        for (const line of TRAINER_MARINA.text) expect(text).toContain(line);
    });
});
