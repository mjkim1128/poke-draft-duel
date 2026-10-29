// 최종 보스(P.D.D Developer)를 이긴 뒤의 화면: 보스의 그림과 마지막 말, 엔드리스 안내
import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { ClearDisplay } from "./ClearDisplay";
import { setLang } from "shared/lang";
import { TRAINER_ORION } from "shared/bosspokemon";

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

function render(props = {}) {
    root = createRoot(container);
    act(() => root.render(<ClearDisplay winStreak={30} onContinue={() => {}} onHome={() => {}} {...props} />));
    return container.textContent;
}

test("최종 보스의 그림과 이름이 나온다", () => {
    render();
    const img = container.querySelector(".clear-boss-img");
    expect(img.getAttribute("src")).toContain("trainer_pdd.png");
    expect(container.textContent).toContain("P.D.D Developer");
});
test("일반 모드: 보스의 마지막 말과 엔드리스 안내가 나온다 (영어)", () => {
    const text = render();
    for (const line of TRAINER_ORION.clearText) expect(text).toContain(line);
    expect(text).toContain("Endless Mode unlocked!");
    expect(text).toContain("Continue in Endless Mode");
});
test("일반 모드: 한국어 설정이면 한국어 말이 나온다", () => {
    setLang("ko");
    const text = render();
    for (const line of TRAINER_ORION.clearTextKo) expect(text).toContain(line);
    expect(text).toContain("엔드리스 모드가 열렸습니다!");
});
test("이지 모드: 이지 모드용 말이 나오고 엔드리스는 열리지 않는다", () => {
    const text = render({ easy: true });
    for (const line of TRAINER_ORION.clearTextEasy) expect(text).toContain(line);
    expect(text).not.toContain("Endless Mode unlocked!");
    expect(container.textContent).not.toContain("Continue in Endless Mode");
});
test("이어하기와 처음으로 버튼이 각각 동작한다", () => {
    const onContinue = jest.fn();
    const onHome = jest.fn();
    render({ onContinue, onHome });
    const buttons = [...container.querySelectorAll("button")];
    act(() => buttons.find((b) => b.textContent.includes("Continue")).click());
    act(() => buttons.find((b) => b.textContent.includes("Back to title")).click());
    expect(onContinue).toHaveBeenCalledTimes(1);
    expect(onHome).toHaveBeenCalledTimes(1);
});
test("보스 데이터에 영어와 한국어 대사의 줄 수가 같다", () => {
    expect(TRAINER_ORION.clearText.length).toBe(TRAINER_ORION.clearTextKo.length);
    expect(TRAINER_ORION.clearTextEasy.length).toBe(TRAINER_ORION.clearTextEasyKo.length);
    expect(TRAINER_ORION.text.length).toBe(TRAINER_ORION.textKo.length);
});
