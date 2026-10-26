// 메가진화하는 순간에만 스프라이트가 번쩍인다
import React from "react";
import { render, act } from "@testing-library/react";
import { CurrentPokemon } from "./CurrentPokemon";

const pokemon = (extra = {}) => ({
    name: "venusaur",
    korean_name: "이상해꽃",
    hp: [100, 100],
    types: [{ type: { name: "grass" } }],
    stat_levels: Array(7).fill(0),
    ...extra,
});
const sprite = (container) => container.querySelector("img");

beforeEach(() => jest.useFakeTimers());
afterEach(() => jest.useRealTimers());

test("같은 포켓몬이 메가진화하면 번쩍이는 효과가 붙었다가 사라진다", () => {
    const { container, rerender } = render(<CurrentPokemon pokemon={pokemon()} img="front.png" />);
    expect(sprite(container).className).not.toContain("mega-flash");
    rerender(<CurrentPokemon pokemon={pokemon({ megaOriginal: {}, korean_name: "메가이상해꽃" })} img="mega.png" />);
    expect(sprite(container).className).toContain("mega-flash");
    act(() => {
        jest.advanceTimersByTime(1200);
    });
    expect(sprite(container).className).not.toContain("mega-flash");
});

test("이미 메가진화한 포켓몬이 교체로 나올 때는 번쩍이지 않는다", () => {
    const { container, rerender } = render(<CurrentPokemon pokemon={pokemon({ name: "snorlax" })} img="a.png" />);
    rerender(<CurrentPokemon pokemon={pokemon({ megaOriginal: {} })} img="mega.png" />);
    expect(sprite(container).className).not.toContain("mega-flash");
});

test("처음부터 메가진화한 모습으로 보이면 번쩍이지 않는다", () => {
    const { container } = render(<CurrentPokemon pokemon={pokemon({ megaOriginal: {} })} img="mega.png" />);
    expect(sprite(container).className).not.toContain("mega-flash");
});
