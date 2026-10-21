// 기술의 부가 효과(능력치 랭크 변화 등)가 실제로 적용되는지 확인한다.
// 기술 데이터는 서버가 쓰는 시드(api/src/main/resources/data/moves.json)를 그대로 읽는다.
// 9세대 기술은 PokeAPI가 부가 효과 정보(meta)를 비워 두는데, tools/enrich-move-meta.mjs가 이를 채운다.
import fs from "fs";
import path from "path";
import { doMoveEffects } from "shared/turn";

const MOVES = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/moves.json"), "utf8")
);

const move = (name) => JSON.parse(JSON.stringify(MOVES.find((m) => m.name === name)));

// 능력치 단계의 순서: 공격, 방어, 특수공격, 특수방어, 스피드, 명중, 회피
const ATK = 0;
const SPA = 2;
const SPE = 4;

function mon(name, ability = null) {
    return {
        name,
        korean_name: name,
        hp: [300, 300],
        stat_levels: [0, 0, 0, 0, 0, 0, 0],
        item: null,
        ability: ability ? { name: ability } : null,
        types: [{ slot: 1, type: { name: "normal" } }],
        moveset: [],
    };
}

afterEach(() => jest.restoreAllMocks());

describe("부가 효과: 자신의 능력치 변화", () => {
    test("플레어송(torch-song)은 자신의 특수공격을 1랭크 올린다", () => {
        const attacker = mon("skeledirge");
        const defender = mon("foe");

        doMoveEffects(attacker, defender, move("torch-song"));

        expect(attacker.stat_levels[SPA]).toBe(1);
        expect(defender.stat_levels[SPA]).toBe(0);
    });

    test("meta가 비어 있던 예전 데이터에서는 올라가지 않았다 (이 버그의 원인)", () => {
        const attacker = mon("skeledirge");
        const oldData = { ...move("torch-song"), meta: null };

        doMoveEffects(attacker, mon("foe"), oldData);

        expect(attacker.stat_levels[SPA]).toBe(0);
    });

    test("리프스톰은 자신의 특수공격을 2랭크 내리고, 심술꾸러기면 2랭크 올린다", () => {
        const normal = mon("someone");
        doMoveEffects(normal, mon("foe"), move("leaf-storm"));
        expect(normal.stat_levels[SPA]).toBe(-2);

        const contrary = mon("serperior", "contrary");
        doMoveEffects(contrary, mon("foe"), move("leaf-storm"));
        expect(contrary.stat_levels[SPA]).toBe(2);
    });

    test("9세대의 다른 기술도 적용된다: 아쿠아스텝은 스피드 +1, 번액셀은 변화 없음", () => {
        const attacker = mon("quaquaval");
        doMoveEffects(attacker, mon("foe"), move("aqua-step"));
        expect(attacker.stat_levels[SPE]).toBe(1);

        const other = mon("revavroom");
        doMoveEffects(other, mon("foe"), move("blazing-torque"));
        expect(other.stat_levels.every((level) => level === 0)).toBe(true);
    });
});

describe("부가 효과: 확률로 상대의 능력치를 낮춤", () => {
    test("찬바람폭풍(bleakwind-storm)은 30% 확률로 상대의 스피드를 1랭크 낮춘다", () => {
        jest.spyOn(Math, "random").mockReturnValue(0); // 확률 판정을 통과
        const defender = mon("foe");
        doMoveEffects(mon("enamorus"), defender, move("bleakwind-storm"));
        expect(defender.stat_levels[SPE]).toBe(-1);

        jest.spyOn(Math, "random").mockReturnValue(0.99); // 확률 판정에 실패
        const lucky = mon("foe");
        doMoveEffects(mon("enamorus"), lucky, move("bleakwind-storm"));
        expect(lucky.stat_levels[SPE]).toBe(0);
    });

    test("봄의폭풍(springtide-storm)은 30% 확률로 상대의 공격을 낮춘다 (PokeAPI는 stat_changes도 비워 둠)", () => {
        jest.spyOn(Math, "random").mockReturnValue(0);
        const defender = mon("foe");
        doMoveEffects(mon("enamorus"), defender, move("springtide-storm"));
        expect(defender.stat_levels[ATK]).toBe(-1);
    });
});

describe("기술 데이터", () => {
    test("번호가 10000 미만인 기술은 모두 meta를 가진다 (섀도 기술 18개는 게임에서 쓰이지 않음)", () => {
        const missing = MOVES.filter((m) => m.id < 10000 && !m.meta).map((m) => m.name);
        expect(missing).toEqual([]);
    });
});
