// 테라스탈: 발동, 방어 타입, 자속 보정, 테라버스트, 위력 60 보정, 팀당 한 번, 배틀이 끝나면 원래대로, 컴퓨터 판단
import fs from "fs";
import path from "path";
import { doTurn, getBaseStats, hpCalc, damageCalc } from "shared";
import { resetAbilityState } from "shared/abilities";
import { canTerastallize, revertTera, teraTypeOf } from "shared/tera";
import { cpuWantsTera } from "shared/cputera";
import { localizeLine } from "shared/logTranslate";
import { setLang } from "shared/lang";

const read = (file) => JSON.parse(fs.readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/" + file), "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const clone = (x) => JSON.parse(JSON.stringify(x));

function mon(species, moves, { ability = null, tera = null } = {}) {
    const p = clone(POKEMON.get(species));
    p.base_stats = getBaseStats(p);
    p.hp = [hpCalc(p.base_stats[0]) * 4, hpCalc(p.base_stats[0]) * 4];
    p.stat_levels = Array(7).fill(0);
    p.item = null;
    p.originalItem = null;
    p.ability = ability ? { name: ability } : null;
    p.baseAbility = p.ability;
    p.moveset = moves.map((m) => clone(MOVES.get(m)));
    p.factorySet = tera ? { tera } : undefined;
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, lastMoveName: null, moveRepeatCount: 0 });
    return p;
}
const typesOf = (p) => p.types.map((t) => t.type.name);
const frail = (p) => { p.hp = [60, 60]; return p; }; // 한두 번 맞으면 쓰러지는 체력
const calc = (a, d, move) => damageCalc(a, d, MOVES.get(move), { roll: 100 });

describe("테라스탈 발동", () => {
    test("테라스탈하면 타입이 테라스탈 타입 하나가 되고 팀의 사용 기록이 남는다", () => {
        const me = [mon("snorlax", ["splash"], { tera: "ghost" })];
        const text = doTurn(me, [mon("snorlax", ["splash"])], me[0].moveset[0], { tera: true }).join(" ");
        expect(text).toContain("Terastallized into the Ghost type!");
        expect(typesOf(me[0])).toEqual(["ghost"]);
        expect(me[0].terastallized).toBe(true);
        expect(me.teraUsed).toBe(true);
        expect(canTerastallize(me)).toBe(false);
    });

    test("버튼을 누르지 않으면 하지 않는다", () => {
        const me = [mon("snorlax", ["splash"], { tera: "ghost" })];
        doTurn(me, [mon("snorlax", ["splash"])], me[0].moveset[0]);
        expect(me[0].terastallized).toBeFalsy();
        expect(typesOf(me[0])).toEqual(["normal"]);
        expect(canTerastallize(me)).toBe(true);
    });

    test("세트에 테라스탈 타입이 없으면 자기 타입 중 하나로 한다", () => {
        const gyarados = mon("gyarados", ["splash"]);
        expect(["water", "flying"]).toContain(teraTypeOf(gyarados));
    });

    test("배틀이 끝나면 원래 타입으로 돌아온다", () => {
        const me = [mon("snorlax", ["splash"], { tera: "ghost" })];
        doTurn(me, [mon("snorlax", ["splash"])], me[0].moveset[0], { tera: true });
        revertTera(me[0]);
        expect(typesOf(me[0])).toEqual(["normal"]);
        expect(me[0].terastallized).toBe(false);
        expect(me[0].teraType).toBe("ghost"); // 테라스탈 타입은 고정되어 남는다
    });

    test("발동 문장은 한국어로 번역된다", () => {
        setLang("ko");
        try {
            expect(localizeLine("Snorlax Terastallized into the Fire type!")).toBe("Snorlax는 불꽃타입으로 테라스탈했다!");
        } finally {
            setLang("en");
        }
    });
});

describe("방어와 공격 보정", () => {
    test("테라스탈하면 방어 타입이 바뀐다 (노말 -> 고스트는 노말기를 받지 않는다)", () => {
        const snorlax = mon("snorlax", ["splash"], { tera: "ghost" });
        const attacker = mon("machamp", ["body-slam"]);
        expect(calc(attacker, snorlax, "body-slam")).toBeGreaterThan(0);
        doTurn([snorlax], [mon("snorlax", ["splash"])], snorlax.moveset[0], { tera: true });
        expect(calc(attacker, snorlax, "body-slam")).toBe(0);
    });

    test("원래 타입과 같은 타입으로 테라스탈하면 그 타입 기술이 2배 (일반 1.5배)", () => {
        const base = mon("snorlax", ["body-slam"], { tera: "normal" });
        const target = mon("machamp", ["splash"]);
        const before = calc(base, target, "body-slam");
        doTurn([base], [mon("snorlax", ["splash"])], base.moveset[0], { tera: true });
        const after = calc(base, target, "body-slam");
        expect(after / before).toBeCloseTo(2 / 1.5, 0);
    });

    test("다른 타입으로 테라스탈하면 새 타입 기술도 원래 타입 기술도 1.5배다", () => {
        const base = mon("snorlax", ["body-slam", "shadow-ball"], { tera: "ghost" });
        const plain = mon("snorlax", ["body-slam", "shadow-ball"]);
        const target = mon("machamp", ["splash"]);
        doTurn([base], [mon("snorlax", ["splash"])], base.moveset[0], { tera: true });
        expect(calc(base, target, "body-slam")).toBe(calc(plain, target, "body-slam")); // 원래 타입의 자속 보정은 그대로
        const withTera = calc(base, target, "shadow-ball");
        const without = calc(plain, target, "shadow-ball");
        expect(withTera / without).toBeCloseTo(1.5, 0); // 새 타입 기술은 1.5배
    });

    test("자기 테라스탈 타입의 약한 기술은 위력 60으로 친다", () => {
        const user = mon("snorlax", ["water-gun"], { tera: "water" });
        const target = mon("machamp", ["splash"]);
        const weak = calc(user, target, "water-gun"); // 위력 40, 아직 테라스탈 전 (자속 보정 없음)
        doTurn([user], [mon("snorlax", ["splash"])], user.moveset[0], { tera: true });
        const boosted = calc(user, target, "water-gun");
        // 1.5배 자속 보정 x 위력 60/40
        expect(boosted / weak).toBeCloseTo(1.5 * (60 / 40), 0);
    });
});

describe("테라버스트", () => {
    test("테라스탈하기 전에는 노말타입 특수기다", () => {
        const user = mon("snorlax", ["tera-blast"], { tera: "fire" });
        const target = mon("machamp", ["splash"]);
        expect(typesOf(user)).toEqual(["normal"]);
        expect(calc(user, target, "tera-blast")).toBeGreaterThan(0);
    });

    test("테라스탈하면 그 타입이 되고, 공격이 특공보다 높으면 물리기로 때린다", () => {
        const physical = mon("machamp", ["tera-blast"], { tera: "fire" }); // 공격 130, 특공 65
        const special = mon("alakazam", ["tera-blast"], { tera: "fire" }); // 특공 135, 공격 50
        const target = mon("snorlax", ["splash"]);
        const rolls = (u) => {
            const t = clone(target);
            t.base_stats = [...target.base_stats];
            return t;
        };
        // 테라스탈한 뒤 불꽃타입(자속) 기술이 된다: 안 한 것보다 피해가 훨씬 크다
        const before = calc(physical, rolls(physical), "tera-blast");
        doTurn([physical], [mon("snorlax", ["splash"])], physical.moveset[0], { tera: true });
        const after = calc(physical, rolls(physical), "tera-blast");
        expect(after).toBeGreaterThan(before);
        doTurn([special], [mon("snorlax", ["splash"])], special.moveset[0], { tera: true });
        expect(special.terastallized).toBe(true);
    });
});

describe("컴퓨터의 판단", () => {
    test("마지막 한 마리면 바로 테라스탈한다", () => {
        const fainted = mon("snorlax", ["splash"]);
        fainted.hp[0] = 0;
        const me = [mon("snorlax", ["body-slam"], { tera: "ghost" }), fainted];
        const foe = [mon("machamp", ["close-combat"])];
        expect(cpuWantsTera(me, foe, me[0].moveset[0], null)).toBe(true);
    });

    test("방어가 크게 좋아지면 한다 (격투기를 받는 노말 -> 고스트)", () => {
        const me = [frail(mon("snorlax", ["body-slam"], { tera: "ghost" })), mon("snorlax", ["splash"])];
        const foe = [mon("machamp", ["close-combat"])];
        expect(cpuWantsTera(me, foe, me[0].moveset[0], null)).toBe(true);
    });

    test("이득이 없으면 아낀다", () => {
        const me = [mon("snorlax", ["splash"], { tera: "normal" }), mon("snorlax", ["splash"])];
        const foe = [mon("snorlax", ["splash"])];
        expect(cpuWantsTera(me, foe, me[0].moveset[0], null)).toBe(false);
    });

    test("팀당 한 번뿐이라 이미 썼으면 컴퓨터도 더 못 쓴다", () => {
        const opp = [mon("snorlax", ["body-slam"], { tera: "ghost" })];
        opp.teraUsed = true;
        expect(canTerastallize(opp)).toBe(false);
    });
});

describe("오거폰", () => {
    const ogerpon = (name, tera) => mon(name, ["ivy-cudgel", "splash"], { ability: "mold-breaker", tera });
    const withItem = (p, item) => {
        p.item = { name: item };
        return p;
    };

    test("덩굴방망이는 가면에 따라 타입이 달라지고, 가면을 쓴 오거폰은 위력이 1.2배다", () => {
        const target = mon("snorlax", ["splash"]);
        const teal = ogerpon("ogerpon");
        const heart = withItem(ogerpon("ogerpon-hearthflame-mask"), "hearthflame-mask");
        const plainHeart = ogerpon("ogerpon-hearthflame-mask");
        // 같은 타입(풀)에서 불꽃이 되면 풀타입 자속은 남고 (풀/불꽃 둘 다 자속), 가면은 1.2배
        expect(calc(heart, target, "ivy-cudgel") / calc(plainHeart, target, "ivy-cudgel")).toBeCloseTo(1.2, 1);
        expect(calc(teal, target, "ivy-cudgel")).toBeGreaterThan(0);
    });

    test("가면 오거폰은 가면 타입으로만 테라스탈하고, 초상투영을 얻어 능력치가 한 단계 오른다", () => {
        const heart = withItem(ogerpon("ogerpon-hearthflame-mask", "grass"), "hearthflame-mask"); // 세트가 뭐라 하든 가면 타입
        const me = [heart];
        const text = doTurn(me, [mon("snorlax", ["splash"])], heart.moveset[1], { tera: true }).join(" ");
        expect(heart.teraType).toBe("fire");
        expect(heart.types.map((t) => t.type.name)).toEqual(["fire"]);
        expect(heart.ability.name).toBe("embody-aspect");
        expect(heart.stat_levels[0]).toBe(1); // 화덕은 공격
        expect(text).toContain("Embody Aspect");
    });

    test("벽록은 스피드, 우물은 특방, 주춧돌은 방어가 오른다", () => {
        const cases = [["ogerpon", 4], ["ogerpon-wellspring-mask", 3], ["ogerpon-cornerstone-mask", 1]];
        for (const [name, idx] of cases) {
            const o = ogerpon(name);
            doTurn([o], [mon("snorlax", ["splash"])], o.moveset[1], { tera: true });
            expect(o.stat_levels[idx]).toBe(1);
        }
    });

    test("오거폰은 테라스탈하면 가면마다 다른 모습의 그림으로 바뀌고, 풀리면 원래 그림으로 돌아온다", () => {
        for (const [name, form] of [["ogerpon", "teal"], ["ogerpon-wellspring-mask", "wellspring"], ["ogerpon-hearthflame-mask", "hearthflame"], ["ogerpon-cornerstone-mask", "cornerstone"]]) {
            const o = ogerpon(name);
            const before = { ...o.sprites };
            doTurn([o], [mon("snorlax", ["splash"])], o.moveset[1], { tera: true });
            expect(o.sprites.front_default).toContain("front_" + form + ".png");
            expect(o.sprites.back_default).toContain("back_" + form + ".png");
            revertTera(o);
            expect(o.sprites).toEqual(before);
        }
    });

    test("테라스탈하면 특성이 초상투영이 되고, 배틀이 끝나면(리셋까지) 원래 특성으로 돌아온다", () => {
        const cases = [["ogerpon", "defiant"], ["ogerpon-wellspring-mask", "water-absorb"], ["ogerpon-hearthflame-mask", "mold-breaker"], ["ogerpon-cornerstone-mask", "sturdy"]];
        for (const [name, ability] of cases) {
            const o = mon(name, ["ivy-cudgel", "splash"], { ability });
            const me = [o];
            const text = doTurn(me, [mon("snorlax", ["splash"])], o.moveset[1], { tera: true }).join(" ");
            expect(o.ability.name).toBe("embody-aspect");
            expect(o.baseAbility.name).toBe("embody-aspect");
            expect(text).toContain("Embody Aspect");
            revertTera(o);
            resetAbilityState(o);
            expect(o.ability.name).toBe(ability);
            expect(o.baseAbility.name).toBe(ability);
        }
    });
});

describe("테라스탈 타입 고정", () => {
    test("여러 개 중 하나인 세트는 한 번 정해지면 배틀을 거듭해도 바뀌지 않는다", () => {
        const p = mon("gyarados", ["splash"]);
        p.factorySet = { tera: ["water", "flying", "dark"] };
        const first = teraTypeOf(p);
        for (let i = 0; i < 30; i++) {
            const me = [p, mon("snorlax", ["splash"])];
            doTurn(me, [mon("snorlax", ["splash"])], p.moveset[0], { tera: true });
            revertTera(p);
            expect(teraTypeOf(p)).toBe(first);
        }
    });
});

describe("테라스탈한 포켓몬의 타입은 다른 효과로 바뀌지 않는다", () => {
    test("프로틴/리베로는 테라스탈한 뒤에는 발동하지 않는다", () => {
        for (const ability of ["protean", "libero"]) {
            const p = mon("snorlax", ["body-slam", "shadow-ball"], { ability, tera: "ghost" });
            const me = [p];
            doTurn(me, [mon("machamp", ["splash"])], p.moveset[0], { tera: true });
            expect(typesOf(p)).toEqual(["ghost"]);
            doTurn(me, [mon("machamp", ["splash"])], p.moveset[1]);
            doTurn(me, [mon("machamp", ["splash"])], p.moveset[0]);
            expect(typesOf(p)).toEqual(["ghost"]); // 몇 턴이 지나도 테라스탈 타입 그대로
        }
    });

    test("프로틴은 테라스탈하기 전에는 그대로 발동한다 (테라스탈의 영향이 아니다)", () => {
        const p = mon("snorlax", ["shadow-ball"], { ability: "protean", tera: "fire" });
        doTurn([p], [mon("machamp", ["splash"])], p.moveset[0]);
        expect(typesOf(p)).toEqual(["ghost"]);
    });

    test("물붓기, 타입복사, 변환은 테라스탈한 포켓몬에게 통하지 않는다", () => {
        const target = mon("snorlax", ["splash"], { tera: "ghost" });
        const foe = [mon("machamp", ["splash"])];
        doTurn([target], foe, target.moveset[0], { tera: true });
        for (const move of ["soak", "magic-powder", "trick-or-treat", "forests-curse"]) {
            const user = mon("machamp", [move]);
            doTurn([user], [target], user.moveset[0]);
            expect(typesOf(target)).toEqual(["ghost"]);
        }
    });
});
