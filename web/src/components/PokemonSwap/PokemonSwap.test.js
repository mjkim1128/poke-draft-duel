import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import { PokemonSwap } from "./PokemonSwap";

jest.mock("components", () => ({ SelectedPokemon: () => null }));

const poke = (name) => ({ name, sprites: { front_default: name + ".png" } });

let container;
beforeEach(() => {
    global.IS_REACT_ACT_ENVIRONMENT = true;
    container = document.createElement("div");
    document.body.appendChild(container);
});
afterEach(() => container.remove());

test("상대 하나와 내 포켓몬 하나를 고르고 교체 버튼을 누르면 바뀐다", () => {
    const roster = ["a", "b", "c", "d", "e", "f"].map(poke);
    const options = [poke("x"), poke("y")];
    const setRoster = jest.fn();
    const next = jest.fn();
    const root = createRoot(container);
    act(() => {
        root.render(
            <PokemonSwap opponentOptions={options} playerRoster={roster} setPlayerRoster={setRoster} nextBattle={next} winStreak={1} />
        );
    });
    const cells = () => [...container.querySelectorAll(".team-select-cell")];
    const swapButton = () => [...container.querySelectorAll("button")].find((b) => b.textContent === "교체");
    expect(swapButton().disabled).toBe(true);
    act(() => cells()[1].click()); // 상대 y
    expect(swapButton().disabled).toBe(true);
    act(() => cells()[2 + 3].click()); // 내 d
    expect(swapButton().disabled).toBe(false);
    act(() => swapButton().click());
    expect(setRoster).toHaveBeenCalledWith(["a", "b", "c", "y", "e", "f"].map((n) => expect.objectContaining({ name: n })));
    expect(next).toHaveBeenCalled();
    act(() => root.unmount());
});
