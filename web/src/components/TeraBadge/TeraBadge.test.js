// 테라스탈 표시: 테라스탈한 뒤에는 누구에게나, 하기 전에는 내 포켓몬(reveal)에게만 보인다 (상대의 테라스탈 타입은 쓰기 전까지 숨긴다)
import React from "react";
import { render } from "@testing-library/react";
import { TeraBadge } from "components/TeraBadge";
import { setLang } from "shared/lang";

beforeEach(() => setLang("ko"));
afterEach(() => setLang("en"));

const mon = (extra = {}) => ({ name: "gengar", types: [{ slot: 1, type: { name: "ghost" } }], teraType: "poison", ...extra });

test("상대(reveal 없음)는 테라스탈하기 전에는 아무것도 나오지 않는다", () => {
    const { container } = render(<TeraBadge pokemon={mon()} />);
    expect(container.textContent).toBe("");
});

test("내 포켓몬(reveal)은 테라스탈하기 전에도 어떤 타입인지 흐리게 보인다", () => {
    const { container } = render(<TeraBadge pokemon={mon()} reveal />);
    expect(container.textContent).toContain("독");
    expect(container.querySelector(".tera-badge.used")).toBeNull();
});

test("테라스탈한 뒤에는 상대도 보인다", () => {
    const { container } = render(<TeraBadge pokemon={mon({ terastallized: true })} />);
    expect(container.textContent).toContain("테라스탈");
    expect(container.querySelector(".tera-badge.used")).not.toBeNull();
});
