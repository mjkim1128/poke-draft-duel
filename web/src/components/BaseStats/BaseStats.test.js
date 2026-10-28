// 종족값을 숫자로 보여 준다
import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { BaseStats } from "./BaseStats";
import { AbilityInfo } from "components/AbilityInfo";
import { setLang } from "shared/lang";

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
    act(() => createRoot(container).render(node));
    return container;
};

describe("BaseStats", () => {
    const pokemon = { base_stats: [108, 130, 95, 80, 85, 102] };
    test("여섯 능력치와 합계가 숫자로 나온다", () => {
        const text = render(<BaseStats pokemon={pokemon} />).textContent;
        for (const n of ["108", "130", "95", "80", "85", "102", "600"]) expect(text).toContain(n);
        expect(text).toContain("합계");
        expect(text).toContain("스피드");
    });
    test("그래프(캔버스)를 그리지 않는다", () => {
        expect(render(<BaseStats pokemon={pokemon} />).querySelector("canvas")).toBeNull();
    });
    test("100 이상은 high, 60 미만은 low로 표시한다", () => {
        const c = render(<BaseStats pokemon={{ base_stats: [50, 130, 95, 80, 85, 102] }} />);
        const cls = [...c.querySelectorAll(".base-stat")].map((e) => e.className);
        expect(cls[0]).toContain("low");
        expect(cls[1]).toContain("high");
        expect(cls[2]).not.toMatch(/high|low/);
    });
    test("English 설정이면 영어 이름", () => {
        setLang("en");
        expect(render(<BaseStats pokemon={pokemon} />).textContent).toContain("Total");
    });
});

describe("AbilityInfo", () => {
    test("특성 이름과 설명이 나온다", () => {
        const c = render(<AbilityInfo pokemon={{ ability: { name: "intimidate", english_name: "Intimidate", korean_name: "위협" } }} />);
        expect(c.textContent).toContain("위협");
        expect(c.querySelector(".ability-info-description").textContent.length).toBeGreaterThan(5);
    });
    test("특성이 없으면 아무것도 그리지 않는다", () => {
        expect(render(<AbilityInfo pokemon={{ ability: null }} />).textContent).toBe("");
    });
});
