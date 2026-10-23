// 네임드 트레이너 목록이 올바른지 확인한다.
import fs from "fs";
import path from "path";
import { BOSSES, FINAL_FLOOR, bossForFloor } from "shared/bosspokemon";

const dataDir = path.join(__dirname, "../../../api/src/main/resources/data");
const pokemon = JSON.parse(fs.readFileSync(path.join(dataDir, "pokemon.json"), "utf8"));
const pool = new Set(JSON.parse(fs.readFileSync(path.join(dataDir, "pool.json"), "utf8")));
const setSpecies = new Set(
    fs
        .readFileSync(path.join(dataDir, "factory_sets.json"), "utf8")
        .split(/\r?\n/)
        .filter((l) => l.startsWith("{"))
        .map((l) => JSON.parse(l.replace(/,$/, "")).species)
);

test("보스는 7연승째마다 한 명씩 7명이고, 50연승째에 최종 보스가 있다 (총 8명)", () => {
    expect(BOSSES.map((b) => b.floor)).toEqual([7, 14, 21, 28, 35, 42, 49, 50]);
    expect(FINAL_FLOOR).toBe(50);
    expect(bossForFloor(50).name).toBe("Orion");
    expect(bossForFloor(8)).toBeNull();
});

describe.each(BOSSES.map((b) => [b.name, b]))("보스 %s", (name, boss) => {
    test("이름과 대사가 한글, 영어 모두 있다", () => {
        expect(boss.nameKo).toBeTruthy();
        expect(boss.text.length).toBe(boss.textKo.length);
        expect(boss.text.length).toBeGreaterThan(0);
        expect(boss.img).toBeTruthy();
    });

    test("데려오는 3마리의 데이터가 있고, 새 보스의 포켓몬은 풀과 세트에도 있다", () => {
        expect(boss.pokemon).toHaveLength(3);
        for (const slug of boss.pokemon) {
            const p = pokemon.find((x) => x.name === slug);
            expect(p).toBeDefined();
            // 알라자르와 블레이크의 포켓몬은 처음부터 보스 전용이라 일반 풀에는 없다
            if (boss.floor > 14) {
                expect(pool.has(p.id)).toBe(true);
                expect(setSpecies.has(slug)).toBe(true);
            }
        }
    });
});
