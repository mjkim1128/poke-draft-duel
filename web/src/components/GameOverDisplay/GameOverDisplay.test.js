// 결과 창: 이기면 다음으로 가는 버튼이 있고, 네임드 트레이너를 이겼을 때는 포켓몬 교체 이야기가 없다
import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { GameOverDisplay } from "./GameOverDisplay";

jest.mock("audio/bgm", () => ({ playJingle: jest.fn() }));

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
});
function render(props) {
    root = createRoot(container);
    act(() => root.render(<GameOverDisplay winStreak={6} onClick={() => {}} {...props} />));
    return container.textContent;
}

test("일반 트레이너를 이기면 포켓몬 교체가 남아 있다고 알려 준다", () => {
    expect(render({ win: true })).toContain("다음 전투로 (포켓몬 교체)");
});
test("네임드 트레이너를 이기면 교체 없이 바로 다음 전투로 간다고 알려 준다", () => {
    const text = render({ win: true, noSwap: true });
    expect(text).toContain("다음 전투로");
    expect(text).not.toContain("포켓몬 교체");
});
test("버튼을 누르면 swap으로 보낸다 (Home이 네임드 트레이너 뒤에는 교체 화면을 건너뛴다)", () => {
    const onClick = jest.fn();
    render({ win: true, noSwap: true, onClick });
    act(() => container.querySelector("button").click());
    expect(onClick).toHaveBeenCalledWith("swap");
});
test("지면 처음부터 다시 (이지 모드는 같은 층 선출 화면)", () => {
    expect(render({ win: false })).toContain("처음부터 다시");
    act(() => root.unmount());
    expect(render({ win: false, easy: true })).toContain("같은 층 선출 화면으로");
});
