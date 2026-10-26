// 메가진화 데이터(megas.json)가 게임의 다른 데이터와 맞물리는지 확인한다.
import fs from "fs";
import path from "path";
import megas from "shared/megas.json";
import abilityNames from "shared/ability_names.json";

const read = (file) => JSON.parse(fs.readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/" + file), "utf8"));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const ITEMS = new Map(read("items.json").map((i) => [i.name, i]));
const POOL = new Set(read("pool.json"));

test("메가 폼이 77개 들어 있고, 이름이 겹치지 않는다", () => {
    expect(megas).toHaveLength(77);
    expect(new Set(megas.map((m) => m.name)).size).toBe(megas.length);
});

test.each(megas.map((m) => [m.name, m]))("%s: 원래 포켓몬이 풀에 있고 메가스톤이 도구로 있다", (_name, mega) => {
    const base = POKEMON.get(mega.base);
    expect(base).toBeTruthy();
    expect(base.id).toBe(mega.baseId);
    expect(POOL.has(mega.baseId)).toBe(true);
    const stone = ITEMS.get(mega.stone);
    expect(stone).toBeTruthy();
    expect(stone.korean_name).toBeTruthy();
    expect(stone.sprites.default).toBeTruthy();
});

test.each(megas.map((m) => [m.name, m]))("%s: 종족값, 타입, 특성, 스프라이트, 한국어 이름이 있다", (_name, mega) => {
    expect(mega.stats.map((s) => s.stat.name)).toEqual(["hp", "attack", "defense", "special-attack", "special-defense", "speed"]);
    expect(mega.types.length).toBeGreaterThan(0);
    expect(mega.abilities.length).toBeGreaterThan(0);
    for (const a of mega.abilities) expect(abilityNames[a.ability.name]).toBeTruthy();
    expect(mega.sprites.front_default).toBeTruthy();
    expect(mega.sprites.back_default).toBeTruthy();
    expect(mega.korean_name.startsWith("메가")).toBe(true);
});

test("한 메가스톤은 한 가지 메가 폼에만 쓰인다", () => {
    const stones = megas.map((m) => m.stone);
    expect(new Set(stones).size).toBe(stones.length);
});

describe("메가스톤 세트", () => {
    const SETS = read("factory_sets.json");
    const MOVES = new Set(read("moves.json").map((m) => m.name));

    test.each(megas.map((m) => [m.name, m]))("%s: 메가스톤을 든 세트가 있다", (_name, mega) => {
        const sets = SETS.filter((row) => row.species === mega.base && row.set.item === mega.stone);
        expect(sets.length).toBeGreaterThan(0);
        for (const { set } of sets) {
            expect(set.ability).toBeTruthy();
            expect(set.moves).toHaveLength(4);
            for (const slot of set.moves) for (const option of slot) expect(MOVES.has(option.slug)).toBe(true);
        }
    });

    test("스톤은 그 스톤의 포켓몬 세트에만 쓰인다", () => {
        const stones = new Map(megas.map((m) => [m.stone, m.base]));
        for (const row of SETS) {
            if (stones.has(row.set.item)) expect(row.species).toBe(stones.get(row.set.item));
        }
    });

    test("기존 세트는 그대로 남아 있다 (메가 가능 포켓몬도 스톤 없이 나올 수 있다)", () => {
        for (const mega of megas) {
            const plain = SETS.filter((row) => row.species === mega.base && !stoneNames.has(row.set.item));
            expect(plain.length).toBeGreaterThan(0);
        }
    });
});
const stoneNames = new Set(megas.map((m) => m.stone));
