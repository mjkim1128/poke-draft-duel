// 다운로드 버전의 데이터 계층: 서버(battlefactory-api)와 같은 데이터를, 같은 규칙으로 돌려준다
import fs from "fs";
import path from "path";
import { localMove, localItem, localPokemonById, localPokemonByName, localRandomPokemon, localMovesOfPokemon, localRandomFactorySet } from "shared/localdata";

const dir = path.join(__dirname, "../../../api/src/main/resources/data/");
const read = (f) => JSON.parse(fs.readFileSync(dir + f, "utf8"));
const POOL = read("pool.json");
const SETS = read("factory_sets.json");

beforeEach(() => {
    global.fetch = jest.fn(async (url) => {
        const name = String(url).replace("/data/", "");
        const file = dir + name;
        if (!fs.existsSync(file)) return { ok: false, status: 404 };
        const body = JSON.parse(fs.readFileSync(file, "utf8"));
        return { ok: true, status: 200, json: async () => body };
    });
});

test("번호, 이름, 기술, 도구로 찾고, 없으면 오류", async () => {
    expect((await localPokemonById(386)).name).toBe("deoxys-normal");
    expect((await localPokemonById("10001")).name).toBe("deoxys-attack");
    expect((await localPokemonByName("deoxys-speed")).korean_name).toBe("테오키스(스피드)");
    expect((await localMove("psycho-boost")).name).toBe("psycho-boost");
    expect((await localItem("figy-berry")).name).toBe("figy-berry");
    await expect(localPokemonById(999999)).rejects.toThrow();
    await expect(localMove("no-such-move")).rejects.toThrow();
});

test("무작위 포켓몬은 풀에서만, 제외한 번호는 빼고 고른다", async () => {
    const rest = POOL.slice(1);
    for (let i = 0; i < 30; i++) {
        const p = await localRandomPokemon([POOL[0]]);
        expect(POOL).toContain(p.id);
        expect(p.id).not.toBe(POOL[0]);
    }
    await expect(localRandomPokemon(POOL)).rejects.toThrow();
    expect(rest.length).toBe(POOL.length - 1);
});

test("포켓몬이 배우는 기술을 학습 목록 순서대로 돌려준다", async () => {
    const p = await localPokemonById(10001);
    const moves = await localMovesOfPokemon(10001);
    expect(moves.length).toBeGreaterThan(0);
    const learn = p.moves.map((m) => m.move.name).filter((n) => moves.some((m) => m.name === n));
    expect(moves.map((m) => m.name)).toEqual(learn);
});

test("실전 세트: 있으면 그 종의 세트 중 하나, 없으면 null", async () => {
    const set = await localRandomFactorySet("deoxys-attack");
    expect(["focus-sash", "choice-specs"]).toContain(set.item);
    expect(set.ability).toBe("pressure");
    expect(await localRandomFactorySet("no-such-species")).toBeNull();
    const only = SETS.filter((s) => s.species === "deoxys-speed");
    expect(await localRandomFactorySet("deoxys-speed")).toEqual(only[0].set);
});

test("실전 세트 조건: 도구 > 특성/기술, 맞는 게 없으면 가리지 않는다", async () => {
    for (let i = 0; i < 10; i++) {
        expect((await localRandomFactorySet("deoxys-attack", { item: "choice-specs" })).item).toBe("choice-specs");
        const byMove = await localRandomFactorySet("deoxys-attack", { move: "focus-blast" });
        expect(byMove.moves.some((slot) => slot.some((o) => o.slug === "focus-blast"))).toBe(true);
    }
    expect(["focus-sash", "choice-specs"]).toContain((await localRandomFactorySet("deoxys-attack", { item: "leftovers" })).item);
});

test("메가스톤 조건: stone=true는 메가스톤 세트, false는 아닌 세트, 도구가 여러 개인 세트는 하나로 정해서 준다", async () => {
    const stones = new Set(read("items.json").filter((i) => i.category && i.category.name === "mega-stones").map((i) => i.name));
    const species = [...new Set(SETS.filter((s) => [].concat(s.set.item || []).some((i) => stones.has(i))).map((s) => s.species))].find((sp) =>
        SETS.some((s) => s.species === sp && [].concat(s.set.item || []).every((i) => !stones.has(i)))
    );
    expect(species).toBeTruthy();
    for (let i = 0; i < 15; i++) {
        expect(stones.has((await localRandomFactorySet(species, { stone: true })).item)).toBe(true);
        expect(stones.has((await localRandomFactorySet(species, { stone: false })).item)).toBe(false);
    }
});
