// 네크로즈마의 전용 기술: 선샤인스트라이크/문게이스트빔/포톤게이저는 상대의 특성을 무시하고, 포톤게이저는 더 높은 공격 능력치로 때린다
import fs from "fs";
import path from "path";
import { doTurn, getBaseStats, hpCalc } from "shared";
import { getAbility } from "shared/abilities";
import { damageCalc } from "shared/damagecalc";
import { hitChance } from "shared/accuracy";
import { adaptMoveToField } from "shared/field";
import { bestDamage, survivesOneHit, hitsToDown } from "shared/cpusetup";
import { ABILITY_IGNORING_MOVES } from "shared/movemechanics";

const dir = path.join(__dirname, "../../../api/src/main/resources/data/");
const read = (f) => JSON.parse(fs.readFileSync(dir + f, "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const clone = (x) => JSON.parse(JSON.stringify(x));
function mon(species, moves, ability = null) {
    const p = clone(POKEMON.get(species));
    p.base_stats = getBaseStats(p);
    p.hp = [hpCalc(p.base_stats[0]) * 3, hpCalc(p.base_stats[0]) * 3];
    p.stat_levels = Array(7).fill(0);
    p.item = null;
    p.originalItem = null;
    p.ability = ability ? getAbility(ability) : null;
    p.baseAbility = p.ability;
    p.moveset = moves.map((m) => clone(MOVES.get(m)));
    for (const m of p.moveset) m.accuracy = null;
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, actionsSinceSwitch: 1, revealed: true });
    return p;
}

test("새로 넣은 포켓몬 5마리의 자료", () => {
    const expected = { "tornadus-therian": ["regenerator", "flying"], "thundurus-therian": ["volt-absorb", "electric"], "landorus-therian": ["intimidate", "ground"], "necrozma-dusk": ["prism-armor", "psychic"], "necrozma-dawn": ["prism-armor", "psychic"] };
    for (const [name, [ability, type]] of Object.entries(expected)) {
        const p = POKEMON.get(name);
        expect(p).toBeTruthy();
        expect(p.abilities.map((a) => a.ability.name)).toContain(ability);
        expect(p.types[0].type.name).toBe(type);
        expect(p.korean_name).toMatch(/\(/);
    }
    expect(POKEMON.has("enamorus-incarnate")).toBe(true); // 러브로스는 세트만 뺐다
});

test("전용 기술 목록", () => {
    expect([...ABILITY_IGNORING_MOVES].sort()).toEqual(["moongeist-beam", "photon-geyser", "sunsteel-strike"]);
});

describe("상대의 특성을 무시한다", () => {
    test("선샤인스트라이크는 옹골참을 무시하고 한 방에 쓰러뜨린다", () => {
        // 옹골참(sturdy)은 체력이 가득 찬 상대를 한 방에 쓰러뜨려도 1을 남긴다. 특성을 무시하면 쓰러진다.
        const attacker = mon("necrozma-dusk", ["sunsteel-strike"], "prism-armor");
        const foe = mon("steelix", ["splash"], "sturdy");
        foe.hp = [10, 10];
        const A = [attacker], B = [foe];
        doTurn(A, B, attacker.moveset[0]);
        expect(B[0].hp[0]).toBe(0);
    });
    test("보통 기술은 옹골참을 그대로 맞는다 (기준)", () => {
        const attacker = mon("necrozma-dusk", ["iron-head"], "prism-armor");
        const foe = mon("steelix", ["splash"], "sturdy");
        foe.hp = [10, 10];
        const A = [attacker], B = [foe];
        doTurn(A, B, attacker.moveset[0]);
        expect(B[0].hp[0]).toBe(1);
    });
});

describe("포톤게이저", () => {
    test("황혼의 갈기(공격이 더 높다)는 물리 기술로 때린다: 상대의 방어를 기준으로 계산된다", () => {
        const dusk = mon("necrozma-dusk", ["photon-geyser"]);
        const phys = mon("blissey", ["splash"]); // 방어 10, 특방 135
        const result = damageCalc(dusk, phys, dusk.moveset[0]);
        const asSpecial = damageCalc(mon("necrozma-dawn", ["photon-geyser"]), phys, dusk.moveset[0]);
        expect(result).toBeGreaterThan(asSpecial); // 새벽의 날개(특공이 높다)는 높은 특방에 막힌다
    });
    test("능력 단계를 반영한다: 특공을 크게 올리면 특수 기술이 된다", () => {
        const dusk = mon("necrozma-dusk", ["photon-geyser"]);
        const foe = mon("blissey", ["splash"]);
        const before = damageCalc(dusk, foe, dusk.moveset[0]);
        dusk.stat_levels[2] = 6; // 특공 +6
        const after = damageCalc(dusk, foe, dusk.moveset[0]);
        expect(after).toBeLessThan(before * 3); // 특수로 바뀌어 블리시의 높은 특방을 맞는다 (특공이 올라도 물리 계산이 아니다)
    });
});

describe("컴퓨터가 예상 피해와 명중률을 어림할 때도 상대의 특성을 무시한다", () => {
    const renamed = (m) => ({ ...m, name: "plain-" + m.name }); // 같은 기술이지만 전용 기술이 아닌 것
    test("멀티스케일(체력이 가득 차면 피해 절반)을 무시한 피해로 계산한다", () => {
        const dusk = mon("necrozma-dusk", ["sunsteel-strike"]);
        const foe = mon("dragonite", ["splash"], "multiscale");
        const ignoring = damageCalc(dusk, foe, dusk.moveset[0]);
        const plain = damageCalc(dusk, foe, renamed(dusk.moveset[0]));
        expect(ignoring).toBeGreaterThan(plain * 1.8);
        expect(dusk.ignoresAbilityNow).toBeFalsy(); // 계산이 끝나면 되돌려 둔다
    });
    test("bestDamage(컴퓨터가 쓰는 최대 피해)도 같은 값을 쓴다", () => {
        const dusk = mon("necrozma-dusk", ["sunsteel-strike"]);
        const foe = mon("dragonite", ["splash"], "multiscale");
        expect(bestDamage(dusk, foe, null)).toBe(damageCalc(dusk, foe, dusk.moveset[0]));
    });
    test("모래숨기(모래바람에서 회피율 상승)를 무시한 명중률로 계산한다", () => {
        const dusk = mon("necrozma-dusk", ["sunsteel-strike"]);
        const foe = mon("sandslash", ["splash"], "sand-veil");
        const sand = { weather: { name: "sand", turns: 5 }, terrain: null };
        const plainMove = { ...renamed(dusk.moveset[0]), accuracy: 100 };
        const ignoring = hitChance(dusk, foe, { ...dusk.moveset[0], accuracy: 100 }, sand);
        const plain = hitChance(dusk, foe, plainMove, sand);
        expect(plain).toBeLessThan(100);
        expect(ignoring === null || ignoring >= 100).toBe(true);
    });
});

describe("한 방 방지(옹골참)도 전용 기술이면 뚫린다고 본다", () => {
    const foe = () => mon("steelix", ["splash"], "sturdy");
    test("가장 센 기술이 특성을 무시하는 기술이면 옹골참이 소용없다", () => {
        const dusk = mon("necrozma-dusk", ["sunsteel-strike", "splash"]);
        const dawn = mon("necrozma-dawn", ["moongeist-beam", "splash"]);
        expect(survivesOneHit(foe(), dusk)).toBe(false);
        expect(survivesOneHit(foe(), dawn)).toBe(false);
    });
    test("다른 기술이 더 세면 그 기술을 쓸 테니 옹골참이 통한다", () => {
        // 철벽 타입 강철록스에게 선샤인스트라이크(강철)는 별로지만 지진은 효과가 굉장하다
        const dusk = mon("necrozma-dusk", ["sunsteel-strike", "earthquake"]);
        expect(survivesOneHit(foe(), dusk)).toBe(true);
    });
    test("전용 기술이 없으면 옹골참이 통한다 (기준)", () => {
        expect(survivesOneHit(foe(), mon("necrozma-dusk", ["iron-head"]))).toBe(true);
    });
    test("체력이 가득 차 있지 않으면 옹골참과 상관없이 아니다", () => {
        const damaged = foe();
        damaged.hp[0] -= 1;
        expect(survivesOneHit(damaged, mon("necrozma-dusk", ["iron-head"]))).toBe(false);
    });
    test("컴퓨터가 쓰러뜨리는 데 필요한 공격 횟수도 한 방으로 센다", () => {
        const weak = foe();
        weak.hp = [10, 10];
        const dusk = mon("necrozma-dusk", ["sunsteel-strike"]);
        expect(hitsToDown(weak, 9999, dusk)).toBe(1);
        expect(hitsToDown(weak, 9999, mon("necrozma-dusk", ["iron-head"]))).toBe(2);
    });
});

describe("포톤게이저의 종류는 실전과 같이 높은 쪽을 따른다 (벽, 컴퓨터의 판단 모두)", () => {
    afterEach(() => jest.restoreAllMocks());
    test("황혼의 갈기는 물리, 새벽의 날개는 특수 기술로 취급된다", () => {
        const dusk = mon("necrozma-dusk", ["photon-geyser"]);
        const dawn = mon("necrozma-dawn", ["photon-geyser"]);
        expect(adaptMoveToField(dusk.moveset[0], dusk, null).damage_class.name).toBe("physical");
        expect(adaptMoveToField(dawn.moveset[0], dawn, null).damage_class.name).toBe("special");
    });
    test("능력 단계를 반영한다", () => {
        const dusk = mon("necrozma-dusk", ["photon-geyser"]);
        dusk.stat_levels[2] = 2; // 특공 +2: 117 -> 특공이 더 높아진다
        expect(adaptMoveToField(dusk.moveset[0], dusk, null).damage_class.name).toBe("special");
    });
    test("리플렉터는 물리인 포톤게이저를 줄이고 빛의장막은 줄이지 못한다", () => {
        jest.spyOn(Math, "random").mockReturnValue(0.99); // 급소(벽을 무시한다)가 나오지 않게 한다
        const dusk = mon("necrozma-dusk", ["photon-geyser"]);
        const make = (screen) => {
            const foe = mon("blissey", ["splash"]);
            const A = [dusk], B = [foe];
            B[screen] = 5;
            foe.hp = [1000000, 1000000];
            doTurn(A, B, dusk.moveset[0]);
            return 1000000 - B[0].hp[0];
        };
        const none = make("noScreenTurns");
        const reflect = make("reflectTurns");
        const lightScreen = make("lightScreenTurns");
        expect(reflect).toBeLessThan(none);
        expect(lightScreen).toBe(none);
    });
});
