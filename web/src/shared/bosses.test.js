// 네임드 트레이너 목록이 올바른지 확인한다.
import fs from "fs";
import path from "path";
import { BOSSES, FINAL_FLOOR, bossForFloor, pickBossTeam } from "shared/bosspokemon";
import { megaFormOf } from "shared/mega";
import { assignMegaStones } from "shared/randompokemon";

const dataDir = path.join(__dirname, "../../../api/src/main/resources/data");
const pokemon = JSON.parse(fs.readFileSync(path.join(dataDir, "pokemon.json"), "utf8"));
const pool = new Set(JSON.parse(fs.readFileSync(path.join(dataDir, "pool.json"), "utf8")));
const setRows = fs
    .readFileSync(path.join(dataDir, "factory_sets.json"), "utf8")
    .split(/\r?\n/)
    .filter((l) => l.startsWith("{"))
    .map((l) => JSON.parse(l.replace(/,$/, "")));
const setSpecies = new Set(setRows.map((r) => r.species));

// 보스의 한 칸은 이름 글자이거나 { name, ability, move, item, stone }
const slotOf = (slot) => (typeof slot === "string" ? { name: slot } : slot);
const abilitiesOf = (set) => [].concat(set.ability);
// 세트의 도구는 하나이거나 여러 개 중 하나(배열)이거나 없다
const itemsOf = (set) => [].concat(set.item || []);
const wantsItem = (set, slot) => !slot.item || itemsOf(set).some((i) => [].concat(slot.item).includes(i));
const hasMove = (set, move) => set.moves.some((m) => m.some((o) => o.slug === move));

test("보스는 5연승째마다 한 명씩 5명이고, 30연승째에 최종 보스가 있다 (총 6명)", () => {
    expect(BOSSES.map((b) => b.floor)).toEqual([5, 10, 15, 20, 25, 30]);
    expect(FINAL_FLOOR).toBe(30);
    expect(bossForFloor(30).name).toBe("Captain.P");
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
        // 보스는 6마리를 모두 정한다
        expect(boss.pokemon).toHaveLength(6);
        for (const { name: slug } of boss.pokemon.map(slotOf)) {
            const p = pokemon.find((x) => x.name === slug);
            expect(p).toBeDefined();
            expect(pool.has(p.id)).toBe(true);
            // 게임은 세트에서만 도구와 기술을 고르므로, 보스의 포켓몬도 모두 세트가 있어야 한다
            expect(setSpecies.has(slug)).toBe(true);
        }
    });

    test("한 파티에 같은 포켓몬이 두 번 들어 있지 않다", () => {
        const names = boss.pokemon.map(slotOf).map((s) => s.name);
        expect(new Set(names).size).toBe(names.length);
    });
});

describe("새 보스는 팀 콘셉트에 맞는 세트가 실제로 있다", () => {
    const wants = BOSSES.flatMap((b) =>
        b.pokemon
            .map(slotOf)
            .filter((s) => s.ability || s.move || s.item)
            .map((s) => [b.name + " " + s.name, s])
    );

    test("특성이나 기술을 지정한 포켓몬이 있다", () => {
        expect(wants.length).toBeGreaterThan(0);
    });

    test.each(wants)("%s", (label, slot) => {
        const sets = setRows.filter((r) => r.species === slot.name).map((r) => r.set);
        const ok = sets.filter(
            (set) => (!slot.ability || abilitiesOf(set).includes(slot.ability)) && (!slot.move || hasMove(set, slot.move)) && wantsItem(set, slot)
        );
        expect(ok.length).toBeGreaterThan(0);
    });
});

describe("선출 규칙(lineup): 날씨를 거는 포켓몬과 반응하는 포켓몬이 반드시 나온다", () => {
    const lineupBosses = BOSSES.filter((b) => b.lineup);
    // lineup은 칸 목록이거나, 그 중 하나를 고르는 { options }
    const optionsOf = (boss) => (Array.isArray(boss.lineup) ? [boss.lineup] : boss.lineup.options);
    const pickOne = (list) => list[Math.floor(Math.random() * list.length)];

    // 게임에서 하듯이, 칸마다 조건에 맞는 세트 하나를 뽑아 상대 파티를 만든다
    // (stone: true인 칸은 메가스톤 세트만 뽑는다. 메가스톤을 든 포켓몬은 메가진화한 뒤의 특성도 선출 규칙에 쓰인다)
    function makeRoster(boss) {
        // 게임에서처럼 메가진화할 수 있는 종에게 메가스톤 세트를 1/2 확률(파티에 최대 2마리)로 정한다 (stone을 직접 적은 칸은 그대로)
        const slots = boss.pokemon.map(slotOf).map((s) => ({ ...s }));
        const assigned = assignMegaStones(slots.map((s) => ({ name: s.name, want: s.stone === undefined ? undefined : { stone: s.stone } })));
        slots.forEach((s, i) => {
            if (assigned[i].want) s.stone = assigned[i].want.stone;
        });
        return slots.map((slot) => {
            // 서버처럼: 도구, 특성, 기술은 꼭 지키고, 메가스톤 여부는 맞는 세트가 있을 때만 따른다
            const hard = setRows
                .filter((r) => r.species === slot.name)
                .map((r) => r.set)
                .filter((set) => (!slot.ability || abilitiesOf(set).includes(slot.ability)) && (!slot.move || hasMove(set, slot.move)) && wantsItem(set, slot));
            const soft = hard.filter(
                (set) =>
                    (!slot.stone || itemsOf(set).some((i) => megaStones.has(i))) &&
                    (slot.stone !== false || itemsOf(set).length === 0 || itemsOf(set).some((i) => !megaStones.has(i)))
            );
            const set = pickOne(soft.length > 0 ? soft : hard);
            // 도구가 여러 개 중 하나인 세트는 서버가 조건에 맞는 도구 하나로 정해 준다
            const options = itemsOf(set)
                .filter((i) => (slot.stone ? megaStones.has(i) : slot.stone === false ? !megaStones.has(i) : true))
                .filter((i) => !slot.item || [].concat(slot.item).includes(i));
            return { name: slot.name, ability: { name: pickOne(abilitiesOf(set)) }, item: options.length > 0 ? { name: pickOne(options) } : null };
        });
    }
    const megaStones = new Set(JSON.parse(fs.readFileSync(path.join(__dirname, "megas.json"), "utf8")).map((m) => m.stone));
    const megaAbility = (p) => {
        const form = megaFormOf(p);
        return form ? form.abilities[0].ability.name : null;
    };

    test("다섯 명(마리나, 듄, 프로스트, 솔, 바스티온)에게 있다", () => {
        expect(lineupBosses.map((b) => b.name)).toEqual(["Marina", "Dune", "Frost", "Sol"]);
    });

    test.each(lineupBosses.map((b) => [b.name, b]))("%s", (name, boss) => {
        for (let i = 0; i < 300; i++) {
            const roster = makeRoster(boss);
            const team = pickBossTeam(roster, boss.lineup);
            expect(team).toHaveLength(3);
            expect(new Set(team).size).toBe(3);
            for (const p of team) expect(roster).toContain(p);
            // 칸 하나를 지키는 포켓몬이 팀에 있는가 (메가 칸은 메가스톤을 든 포켓몬이 로스터에 있을 때만, 이름 칸은 그 포켓몬이 로스터에 있을 때만 채워진다)
            const hasHolder = roster.some((p) => megaFormOf(p));
            const matches = (p, rule, index) =>
                (rule.name === undefined || p.name === rule.name) &&
                (rule.names === undefined || rule.names.includes(p.name)) &&
                (rule.mega !== undefined
                    ? !!megaFormOf(p) === rule.mega
                    : rule.abilities
                    ? rule.abilities.includes(p.ability.name) || (index > 0 && rule.abilities.includes(megaAbility(p)))
                    : true);
            const satisfied = (rule, index) => {
                if (rule.mega === true && rule.name === undefined && !hasHolder) return true;
                if ((rule.name !== undefined || rule.names !== undefined) && !roster.some((p) => matches(p, rule, index))) return true;
                return team.some((p) => matches(p, rule, index));
            };
            // 고른 형태(options 중 하나)가 모든 칸을 지키고, 첫 칸의 포켓몬이 맨 앞에 나온다
            const fine = optionsOf(boss).some(
                (rules) => rules.every(satisfied) && (!roster.some((p) => matches(p, rules[0], 0)) || matches(team[0], rules[0], 0))
            );
            expect(fine).toBe(true);
        }
    });

    test("lineup이 없으면 6마리 중 아무 3마리나 나온다", () => {
        const roster = ["a", "b", "c", "d", "e", "f"].map((name) => ({ name, ability: { name: "x" } }));
        const team = pickBossTeam(roster, undefined);
        expect(team).toHaveLength(3);
        expect(new Set(team).size).toBe(3);
    });
});

describe("네임드 트레이너의 메가진화: stone: true로 정한 대표 메가", () => {
    const MEGAS = JSON.parse(fs.readFileSync(path.join(__dirname, "megas.json"), "utf8"));
    const bases = new Set(MEGAS.map((m) => m.base));
    const stoneNames = new Set(MEGAS.map((m) => m.stone));
    const fixed = BOSSES.flatMap((b) => b.pokemon.map(slotOf).filter((s) => s.stone).map((s) => [b.name + " " + s.name, b, s]));

    test("대표 메가가 있는 보스가 여럿 있다 (마리나, 프로스트, 솔, 바스티온. 듄은 선출 규칙으로 메가를 낸다)", () => {
        const owners = new Set(fixed.map(([, b]) => b.name));
        for (const name of ["Marina", "Frost", "Sol", "Bastion"]) expect(owners.has(name)).toBe(true);
    });
    test("한 보스에 정해 둔 메가스톤은 최대 2마리다", () => {
        for (const b of BOSSES) expect(b.pokemon.map(slotOf).filter((s) => s.stone).length).toBeLessThanOrEqual(2);
    });
    test.each(fixed)("%s: 메가진화할 수 있는 종이고 메가스톤 세트가 있다", (label, boss, slot) => {
        expect(bases.has(slot.name)).toBe(true);
        const stoneSets = setRows.filter((r) => r.species === slot.name && itemsOf(r.set).some((i) => stoneNames.has(i)));
        expect(stoneSets.length).toBeGreaterThan(0);
        // 특성이나 기술도 같이 정했다면, 메가스톤 세트 중에서도 맞는 것이 있어야 한다
        if (slot.ability || slot.move || slot.item) {
            const both = stoneSets.filter(
                (r) => (!slot.ability || abilitiesOf(r.set).includes(slot.ability)) && (!slot.move || hasMove(r.set, slot.move)) && wantsItem(r.set, slot)
            );
            expect(both.length).toBeGreaterThan(0);
        }
    });
    test("보스의 콘셉트 팀원이 되는 메가는 날씨나 특성이 콘셉트와 맞는다 (듄 마기라스, 프로스트 눈설왕, 솔 리자몽)", () => {
        const abilityOf = (base) => MEGAS.filter((m) => m.base === base).map((m) => m.abilities[0].ability.name);
        expect(abilityOf("tyranitar")).toContain("sand-stream");
        expect(abilityOf("abomasnow")).toContain("snow-warning");
        expect(abilityOf("charizard")).toContain("drought");
        expect(abilityOf("swampert")).toContain("swift-swim");
    });
});

describe("마리나의 브리두라스는 자뭉열매, 지구력, 일렉트로빔 세트로 고정된다", () => {
    const slot = slotOf(BOSSES.find((b) => b.name === "Marina").pokemon.map(slotOf).find((s) => s.name === "archaludon"));
    test("보스 칸에 도구, 특성, 기술이 모두 적혀 있다", () => {
        expect(slot).toMatchObject({ name: "archaludon", ability: "stamina", move: "electro-shot", item: "sitrus-berry" });
    });
    test("조건에 맞는 세트가 정확히 하나 있다", () => {
        const sets = setRows
            .filter((r) => r.species === "archaludon")
            .map((r) => r.set)
            .filter((set) => wantsItem(set, slot) && abilitiesOf(set).includes(slot.ability) && hasMove(set, slot.move));
        expect(sets).toHaveLength(1);
    });
});

describe("마리나의 쓱쓱 칸: 킹드라와, 메가진화하면 쓱쓱이 되는 대짱이가 후보다", () => {
    const marina = BOSSES.find((b) => b.name === "Marina");
    const mon = (name, ability, item = null) => ({ name, ability: { name: ability }, item: item ? { name: item } : null });
    const roster = () => [
        mon("pelipper", "drizzle"),
        mon("politoed", "drizzle"),
        mon("kingdra", "swift-swim"),
        mon("archaludon", "stamina", "sitrus-berry"),
        mon("swampert", "torrent", "swampertite"),
        mon("blastoise", "torrent", "blastoisinite"),
    ];
    test("메가스톤을 든 대짱이는 메가진화하면 쓱쓱이다", () => {
        expect(megaFormOf(roster()[4]).abilities[0].ability.name).toBe("swift-swim");
        expect(megaFormOf(mon("swampert", "torrent", "leftovers"))).toBeNull(); // 메가스톤이 없으면 후보가 아니다
    });
    test("쓱쓱 칸에는 킹드라 또는 대짱이가 들어가고, 둘 다 나오는 경우가 있다", () => {
        const seen = { kingdra: 0, swampert: 0 };
        for (let i = 0; i < 600; i++) {
            const team = pickBossTeam(roster(), marina.lineup);
            const names = team.map((p) => p.name);
            expect(names.includes("kingdra") || names.includes("swampert")).toBe(true);
            expect(["pelipper", "politoed"]).toContain(names[0]); // 비를 거는 포켓몬이 맨 앞
            if (names.includes("kingdra")) seen.kingdra++;
            if (names.includes("swampert")) seen.swampert++;
        }
        expect(seen.kingdra).toBeGreaterThan(200);
        expect(seen.swampert).toBeGreaterThan(200);
    });
    test("대짱이가 메가스톤이 아닌 도구를 들고 있으면 쓱쓱 칸 후보가 아니다", () => {
        const r = roster();
        r[4] = mon("swampert", "torrent", "leftovers");
        for (let i = 0; i < 200; i++) {
            const team = pickBossTeam(r, marina.lineup);
            // 쓱쓱 칸은 항상 킹드라 (대짱이는 남는 자리에 무작위로만 들어간다)
            expect(team.map((p) => p.name)).toContain("kingdra");
        }
    });
    test("첫 칸(비를 거는 포켓몬)은 메가진화 후 특성을 치지 않는다", () => {
        // 메가진화하면 가뭄이 되는 리자몽 Y를 들고 있어도, 솔의 첫 칸은 처음부터 가뭄인 포켓몬이다
        const sol = BOSSES.find((b) => b.name === "Sol");
        const r = [mon("torkoal", "drought"), mon("charizard", "blaze", "charizardite-y"), mon("venusaur", "chlorophyll"), mon("leafeon", "chlorophyll"), mon("houndoom", "flash-fire"), mon("ninetales", "drought")];
        for (let i = 0; i < 300; i++) {
            const team = pickBossTeam(r, sol.lineup.options[0]); // A형: 가뭄 담당이 선두
            expect(["torkoal", "ninetales"]).toContain(team[0].name);
        }
    });
});

describe("마리나의 거북왕은 메가진화하지 않고 하양허브 또는 기합의띠를 든다", () => {
    const slot = slotOf(BOSSES.find((b) => b.name === "Marina").pokemon.map(slotOf).find((s) => s.name === "blastoise"));
    const MEGAS = JSON.parse(fs.readFileSync(path.join(__dirname, "megas.json"), "utf8"));
    const stoneNames = new Set(MEGAS.map((m) => m.stone));
    test("보스 칸에 메가스톤 없음(stone: false)과 도구 목록이 적혀 있다", () => {
        expect(slot.stone).toBe(false);
        expect(slot.item).toEqual(["white-herb", "focus-sash"]);
    });
    test("조건에 맞는 세트가 있고, 그 세트는 메가스톤이 아니다", () => {
        const sets = setRows.filter((r) => r.species === "blastoise").map((r) => r.set).filter((set) => wantsItem(set, slot));
        expect(sets.length).toBeGreaterThan(0);
        for (const set of sets) expect(itemsOf(set).some((i) => stoneNames.has(i))).toBe(false);
    });
});

describe("듄의 선출: 모래날림 1마리 + 메가진화 1마리 + 메가진화하지 않는 1마리", () => {
    const dune = BOSSES.find((b) => b.name === "Dune");
    const mon = (name, ability, item = null) => ({ name, ability: { name: ability }, item: item ? { name: item } : null });
    // tyranitar와 garchomp가 메가스톤을 든 상태의 로스터
    const roster = () => [
        mon("tyranitar", "sand-stream", "tyranitarite"),
        mon("excadrill", "mold-breaker", "leftovers"),
        mon("hippowdon", "sand-stream", "leftovers"),
        mon("garchomp", "rough-skin", "garchompite"),
        mon("rhyperior", "solid-rock", "life-orb"),
        mon("steelix", "sturdy", "leftovers"),
    ];
    test("마기라스의 메가스톤 확정은 없고, 모래헤치기 지정도 없다", () => {
        const slots = dune.pokemon.map(slotOf);
        expect(slots.some((s) => s.stone)).toBe(false);
        expect(slots.some((s) => s.ability === "sand-rush")).toBe(false);
        expect(dune.lineup).toEqual([{ abilities: ["sand-stream"] }, { mega: true }, { mega: false }]);
    });
    test("선출은 모래날림 + 메가진화 + 메가진화하지 않는 포켓몬이고, 모래날림이 맨 앞이다", () => {
        for (let i = 0; i < 500; i++) {
            const team = pickBossTeam(roster(), dune.lineup);
            expect(team).toHaveLength(3);
            expect(new Set(team).size).toBe(3);
            expect(team[0].ability.name).toBe("sand-stream");
            expect(team.filter((p) => megaFormOf(p)).length).toBeGreaterThanOrEqual(1);
            expect(team.some((p) => !megaFormOf(p))).toBe(true);
        }
    });
    test("메가스톤을 든 마기라스는 맨 앞(모래날림 칸)이 아니라 메가 칸에서 나온다 (하마돈이 맨 앞)", () => {
        for (let i = 0; i < 300; i++) {
            const team = pickBossTeam(roster(), dune.lineup);
            expect(team[0].name).toBe("hippowdon");
        }
    });
    test("메가스톤을 든 포켓몬이 없으면 메가 칸은 무작위로 채워진다 (그래도 3마리가 나온다)", () => {
        const none = roster().map((p) => ({ ...p, item: { name: "leftovers" } }));
        for (let i = 0; i < 200; i++) {
            const team = pickBossTeam(none, dune.lineup);
            expect(team).toHaveLength(3);
            expect(team[0].ability.name).toBe("sand-stream");
        }
    });
    test("마기라스가 메가스톤을 들지 않으면 마기라스가 모래날림 칸에 나올 수 있다", () => {
        const r = roster();
        r[0] = mon("tyranitar", "sand-stream", "leftovers");
        const leads = new Set();
        for (let i = 0; i < 300; i++) leads.add(pickBossTeam(r, dune.lineup)[0].name);
        expect(leads).toEqual(new Set(["tyranitar", "hippowdon"]));
    });
});

describe("프로스트의 선출: A형(알로라 나인테일 + 메가 드닐레이브 + 무작위 1) 또는 B형(메가 눈여아 + 무작위 2)", () => {
    const frost = BOSSES.find((b) => b.name === "Frost");
    const MEGAS = JSON.parse(fs.readFileSync(path.join(__dirname, "megas.json"), "utf8"));
    const stoneOf = (base) => MEGAS.find((m) => m.base === base).stone;
    const mon = (name, ability, item = null) => ({ name, ability: { name: ability }, item: item ? { name: item } : null });
    const roster = () => [
        mon("ninetales-alola", "snow-warning", "light-clay"),
        mon("weavile", "pressure", "life-orb"),
        mon("mamoswine", "thick-fat", "life-orb"),
        mon("froslass", "cursed-body", stoneOf("froslass")),
        mon("beartic", "slush-rush", "life-orb"),
        mon("baxcalibur", "thermal-exchange", stoneOf("baxcalibur")),
    ];
    test("선출 규칙은 두 가지 형태 중 하나다", () => {
        expect(frost.lineup.options).toEqual([
            [{ name: "ninetales-alola" }, { name: "baxcalibur", mega: true }],
            [{ name: "froslass", mega: true }],
        ]);
        const slots = frost.pokemon.map(slotOf);
        expect(slots.map((s) => s.name)).toEqual(["ninetales-alola", "weavile", "mamoswine", "froslass", "beartic", "baxcalibur"]);
        expect(slots.filter((s) => s.stone).map((s) => s.name)).toEqual(["froslass", "baxcalibur"]);
        expect(slots.find((s) => s.name === "ninetales-alola").ability).toBe("snow-warning");
    });
    test("A형이면 알로라 나인테일이 선두이고 메가 드닐레이브가 함께, B형이면 메가 눈여아가 선두다", () => {
        const counts = { A: 0, B: 0 };
        for (let i = 0; i < 2000; i++) {
            const team = pickBossTeam(roster(), frost.lineup);
            const names = team.map((p) => p.name);
            expect(team).toHaveLength(3);
            expect(new Set(names).size).toBe(3);
            if (names[0] === "ninetales-alola") {
                expect(names).toContain("baxcalibur"); // A형
                counts.A++;
            } else {
                expect(names[0]).toBe("froslass"); // B형: 메가 눈여아가 맨 앞
                counts.B++;
            }
        }
        expect(counts.A / 2000).toBeGreaterThan(0.45);
        expect(counts.A / 2000).toBeLessThan(0.55);
    });
    test("나올 수 있는 선출은 14가지다 (A형 4가지, B형 10가지)", () => {
        const seen = new Set();
        for (let i = 0; i < 6000; i++) {
            const team = pickBossTeam(roster(), frost.lineup);
            seen.add(team[0].name + "|" + team.slice(1).map((p) => p.name).sort().join(","));
        }
        expect(seen.size).toBe(14);
    });
    test("메가 눈여아가 메가스톤을 들지 않으면 B형 칸은 무작위로 채워진다 (그래도 3마리가 나온다)", () => {
        const r = roster();
        r[3] = mon("froslass", "cursed-body", "focus-sash");
        for (let i = 0; i < 200; i++) expect(pickBossTeam(r, frost.lineup)).toHaveLength(3);
    });
});

describe("솔의 선출: A형(가뭄 + 엽록소 + 메가 1마리) 또는 B형(메가 리자몽 Y + 엽록소 + 무작위 1)", () => {
    const sol = BOSSES.find((b) => b.name === "Sol");
    const MEGAS = JSON.parse(fs.readFileSync(path.join(__dirname, "megas.json"), "utf8"));
    const stoneOf = (name) => MEGAS.find((m) => m.name === name).stone;
    const mon = (name, ability, item = null) => ({ name, ability: { name: ability }, item: item ? { name: item } : null });
    const roster = (houndoomStone = true) => [
        mon("torkoal", "drought", "heat-rock"),
        mon("ninetales", "drought", "heat-rock"),
        mon("venusaur", "chlorophyll", "life-orb"),
        mon("leafeon", "chlorophyll", "choice-band"),
        mon("houndoom", "flash-fire", houndoomStone ? stoneOf("houndoom-mega") : "life-orb"),
        mon("charizard", "blaze", stoneOf("charizard-mega-y")),
    ];
    test("팀과 지정이 위와 같다", () => {
        const slots = sol.pokemon.map(slotOf);
        expect(slots.map((s) => s.name)).toEqual(["torkoal", "ninetales", "venusaur", "leafeon", "houndoom", "charizard"]);
        expect(slots.find((s) => s.name === "charizard")).toMatchObject({ stone: true, item: "charizardite-y" });
        expect(slots.find((s) => s.name === "venusaur").stone).toBe(false);
        expect(slots.filter((s) => s.stone).length).toBe(1);
    });
    test("리자몽 Y 세트는 메가스톤 Y를 든 세트이고, 메가진화하면 가뭄이다", () => {
        const sets = setRows.filter((r) => r.species === "charizard" && itemsOf(r.set).includes("charizardite-y"));
        expect(sets.length).toBeGreaterThan(0);
        expect(MEGAS.find((m) => m.stone === "charizardite-y").abilities[0].ability.name).toBe("drought");
    });
    test("A형이면 가뭄 담당이 선두이고 엽록소와 메가가 함께, B형이면 메가 리자몽 Y가 선두에 엽록소와 함께 나온다", () => {
        const counts = { A: 0, B: 0 };
        for (let i = 0; i < 2000; i++) {
            const team = pickBossTeam(roster(), sol.lineup);
            const names = team.map((p) => p.name);
            expect(new Set(names).size).toBe(3);
            expect(team.some((p) => p.ability.name === "chlorophyll")).toBe(true); // 두 형태 모두 엽록소가 있다
            if (["torkoal", "ninetales"].includes(names[0])) {
                counts.A++;
                expect(team.some((p) => megaFormOf(p))).toBe(true); // A형: 메가 1마리 이상
            } else {
                counts.B++;
                expect(names[0]).toBe("charizard"); // B형: 메가 리자몽이 맨 앞
            }
        }
        expect(counts.A / 2000).toBeGreaterThan(0.45);
        expect(counts.A / 2000).toBeLessThan(0.55);
    });
    test("헬가가 메가스톤을 들지 않아도 A형의 메가 칸은 메가 리자몽이 채운다", () => {
        for (let i = 0; i < 300; i++) {
            const team = pickBossTeam(roster(false), sol.lineup);
            if (["torkoal", "ninetales"].includes(team[0].name)) expect(team.map((p) => p.name)).toContain("charizard");
        }
    });
});

describe("바스티온: 일반 트레이너처럼 상성으로 고르되 메가진화할 수 있는 포켓몬이 반드시 나온다", () => {
    const bastion = BOSSES.find((b) => b.name === "Bastion");
    const MEGAS = JSON.parse(fs.readFileSync(path.join(__dirname, "megas.json"), "utf8"));
    const stoneOf = (base) => MEGAS.find((m) => m.base === base).stone;
    test("팀과 지정이 위와 같다", () => {
        const slots = bastion.pokemon.map(slotOf);
        expect(slots.map((s) => s.name)).toEqual(["aggron", "golisopod", "regice", "florges", "toxapex", "umbreon"]);
        expect(slots.filter((s) => s.stone).map((s) => s.name)).toEqual(["aggron", "golisopod"]);
    });
    test("선출 규칙(lineup)도 상성 선출(counter)도 쓰지 않고, 메가 보장만 켠다", () => {
        expect(bastion.guaranteeMega).toBe(true);
        expect(bastion.lineup).toBeUndefined();
        expect(bastion.counter).toBeUndefined();
        expect(BOSSES.filter((b) => b.guaranteeMega).map((b) => b.name)).toEqual(["Bastion"]);
    });
    test("여섯 마리 모두 세트가 있고, 메가 둘은 메가스톤을 든 세트가 있다", () => {
        for (const slot of bastion.pokemon.map(slotOf)) expect(setRows.some((r) => r.species === slot.name)).toBe(true);
        for (const name of ["aggron", "golisopod"]) expect(setRows.some((r) => r.species === name && itemsOf(r.set).includes(stoneOf(name)))).toBe(true);
    });
});
