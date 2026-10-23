// U-turn 같은 교체 기술로 상대를 쓰러뜨려도, 쓴 쪽은 교체해야 한다.
import fs from "fs";
import path from "path";
import { playerTurn } from "shared/turn";

const MOVES = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/moves.json"), "utf8")
);
const uTurn = () => JSON.parse(JSON.stringify(MOVES.find((m) => m.name === "u-turn")));

function mon(name, hp = 300) {
    return {
        name,
        hp: [hp, 300],
        stat_levels: [0, 0, 0, 0, 0, 0, 0],
        item: null,
        ability: null,
        types: [{ slot: 1, type: { name: "normal" } }],
        moveset: [],
        base_stats: [80, 80, 80, 80, 80, 80],
    };
}

beforeEach(() => jest.spyOn(Math, "random").mockReturnValue(0.5));
afterEach(() => jest.restoreAllMocks());

test("U-turn으로 상대를 쓰러뜨려도 교체를 요청한다 (상대에게 남은 포켓몬이 있을 때)", () => {
    const mine = [mon("a"), mon("b")];
    const theirs = [mon("x", 1), mon("y")];
    const text = playerTurn(mine, theirs, uTurn());
    expect(theirs[0].hp[0]).toBe(0);
    expect(mine.pivotRequest).toBeTruthy();
    expect(text.join(" ")).toContain("went back to its trainer");
});

test("상대의 마지막 포켓몬을 쓰러뜨리면 배틀이 끝나므로 교체하지 않는다", () => {
    const mine = [mon("a"), mon("b")];
    const theirs = [mon("x", 1), mon("y", 0)];
    playerTurn(mine, theirs, uTurn());
    expect(theirs[0].hp[0]).toBe(0);
    expect(mine.pivotRequest).toBeFalsy();
});

test("쓰러뜨리지 못했을 때는 전과 같이 교체를 요청한다", () => {
    const mine = [mon("a"), mon("b")];
    const theirs = [mon("x"), mon("y")];
    playerTurn(mine, theirs, uTurn());
    expect(mine.pivotRequest).toBeTruthy();
});
