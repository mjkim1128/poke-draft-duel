// 네임드 트레이너 목록이 올바른지 확인한다.
import fs from "fs";
import path from "path";
import { BOSSES, FINAL_FLOOR, bossForFloor } from "shared/bosspokemon";

const dataDir = path.join(__dirname, "../../../api/src/main/resources/data");
const pokemon = JSON.parse(fs.readFileSync(path.join(dataDir, "pokemon.json"), "utf8"));
const pool = new Set(JSON.parse(fs.readFileSync(path.join(dataDir, "pool.json"), "utf8")));
const setRows = fs
    .readFileSync(path.join(dataDir, "factory_sets.json"), "utf8")
    .split(/\r?\n/)
    .filter((l) => l.startsWith("{"))
    .map((l) => JSON.parse(l.replace(/,$/, "")));
const setSpecies = new Set(setRows.map((r) => r.species));

// 보스의 한 칸은 이름 글자이거나 { name, ability, move }
const slotOf = (slot) => (typeof slot === "string" ? { name: slot } : slot);
const abilitiesOf = (set) => [].concat(set.ability);
const hasMove = (set, move) => set.moves.some((m) => m.some((o) => o.slug === move));

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

    test("데려오는 포켓몬의 데이터가 있고, 새 보스의 포켓몬은 풀과 세트에도 있다", () => {
        // 알라자르와 블레이크는 3마리만 정하고 나머지는 무작위, 새 보스는 6마리를 모두 정한다
        expect(boss.pokemon).toHaveLength(boss.floor > 14 ? 6 : 3);
        for (const { name: slug } of boss.pokemon.map(slotOf)) {
            const p = pokemon.find((x) => x.name === slug);
            expect(p).toBeDefined();
            // 알라자르와 블레이크의 포켓몬은 처음부터 보스 전용이라 일반 풀에는 없다
            if (boss.floor > 14) {
                expect(pool.has(p.id)).toBe(true);
                expect(setSpecies.has(slug)).toBe(true);
            }
        }
    });

    test("한 파티에 같은 포켓몬이 두 번 들어 있지 않다", () => {
        const names = boss.pokemon.map(slotOf).map((s) => s.name);
        expect(new Set(names).size).toBe(names.length);
    });
});

describe("새 보스는 팀 콘셉트에 맞는 세트가 실제로 있다", () => {
    const wants = BOSSES.filter((b) => b.floor > 14).flatMap((b) =>
        b.pokemon
            .map(slotOf)
            .filter((s) => s.ability || s.move)
            .map((s) => [b.name + " " + s.name, s])
    );

    test("특성이나 기술을 지정한 포켓몬이 있다", () => {
        expect(wants.length).toBeGreaterThan(0);
    });

    test.each(wants)("%s", (label, slot) => {
        const sets = setRows.filter((r) => r.species === slot.name).map((r) => r.set);
        const ok = sets.filter(
            (set) => (!slot.ability || abilitiesOf(set).includes(slot.ability)) && (!slot.move || hasMove(set, slot.move))
        );
        expect(ok.length).toBeGreaterThan(0);
    });
});
