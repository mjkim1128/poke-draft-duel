// 날씨 기술 (cpuweather.js), 한 방 방지 계산 (기합의띠, 옹골참, 멀티스케일), 자폭 계열 제한
import fs from "fs";
import path from "path";
import { getBaseStats, hpCalc } from "shared";
import { damageCalc } from "shared/damagecalc";
import { chooseSupportMove } from "shared/cpustatus";
import { makeMove } from "shared/computermove";
import { bestDamage, hitsToDown, hitsToDie, survivesOneHit } from "shared/cpusetup";
import { weatherBenefit } from "shared/cpuweather";

const read = (file) => JSON.parse(fs.readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/" + file), "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const clone = (x) => JSON.parse(JSON.stringify(x));

function mon(species, moves, ability = null, item = null) {
    const p = clone(POKEMON.get(species));
    p.base_stats = getBaseStats(p);
    p.hp = [hpCalc(p.base_stats[0]) * 4, hpCalc(p.base_stats[0]) * 4];
    p.stat_levels = Array(7).fill(0);
    p.item = item ? { name: item } : null;
    p.originalItem = p.item;
    p.ability = ability ? { name: ability } : null;
    p.baseAbility = p.ability;
    p.moveset = moves.map((m) => clone(MOVES.get(m)));
    for (const m of p.moveset) m.accuracy = null;
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, lastMoveName: null, moveRepeatCount: 0 });
    return p;
}
const setHp = (p, hp) => {
    p.hp = [hp, p.hp[1]];
    return p;
};
const choose = (human, cpu) => {
    const move = chooseSupportMove(human, cpu);
    return move ? move.name : null;
};

describe("날씨 기술", () => {
    const foe = () => [mon("snorlax", ["tackle"])];
    test("4배 약점을 덜어 주는 날씨: 파티에 핫삼(불꽃 4배 약점)이 있으면 비춤을 쓴다", () => {
        const cpu = [mon("garchomp", ["rain-dance", "earthquake"]), mon("scizor", ["bullet-punch"])];
        expect(choose(foe(), cpu)).toBe("rain-dance");
    });
    test("쾌청은 물 4배 약점(바윗대지 타입)을 덜어 준다", () => {
        const cpu = [mon("garchomp", ["sunny-day", "earthquake"]), mon("golem", ["earthquake"])];
        expect(choose(foe(), cpu)).toBe("sunny-day");
    });
    test("날씨에 반응하는 특성이 파티에 있으면 쓴다", () => {
        const cpu = [mon("garchomp", ["rain-dance", "earthquake"]), mon("kingdra", ["surf"], "swift-swim")];
        expect(choose(foe(), cpu)).toBe("rain-dance");
        const sand = [mon("garchomp", ["sandstorm", "earthquake"]), mon("excadrill", ["earthquake"], "sand-rush")];
        expect(choose(foe(), sand)).toBe("sandstorm");
    });
    test("이득을 보는 포켓몬이 없으면 쓰지 않는다", () => {
        const cpu = [mon("garchomp", ["rain-dance", "earthquake"]), mon("blissey", ["soft-boiled"])];
        expect(choose(foe(), cpu)).toBe(null);
    });
    test("이미 같은 날씨가 불고 있으면 쓰지 않는다", () => {
        const cpu = [mon("garchomp", ["rain-dance", "earthquake"]), mon("scizor", ["bullet-punch"])];
        cpu.field = { weather: { name: "rain", turns: 3 }, terrain: null };
        expect(choose(foe(), cpu)).toBe(null);
    });
    test("상대가 그 날씨에서 이득을 보는 특성이면 쓰지 않는다", () => {
        const cpu = [mon("garchomp", ["rain-dance", "earthquake"]), mon("scizor", ["bullet-punch"])];
        expect(choose([mon("kingdra", ["surf"], "swift-swim")], cpu)).toBe(null);
    });
    test("상대가 한 방에 나를 쓰러뜨리면 날씨를 깔지 않는다", () => {
        const cpu = [setHp(mon("garchomp", ["rain-dance", "earthquake"]), 1), mon("scizor", ["bullet-punch"])];
        expect(choose([mon("garchomp", ["earthquake"])], cpu)).not.toBe("rain-dance");
    });
    test("점수: 특성과 4배 약점을 각각 센다", () => {
        const team = [mon("scizor", ["bullet-punch"], "swift-swim"), mon("kingdra", ["surf"], "swift-swim")];
        expect(weatherBenefit("rain", team)).toBe(3); // 핫삼의 4배 약점 + 두 마리의 특성
        expect(weatherBenefit("sand", team)).toBe(0);
    });
});

describe("한 방 방지", () => {
    test("체력이 가득 찬 기합의띠, 옹골참은 한 번을 버틴다 (한 방이 두 방이 된다)", () => {
        const attacker = mon("garchomp", ["earthquake"]);
        const sash = mon("snorlax", ["tackle"], null, "focus-sash");
        const sturdy = mon("snorlax", ["tackle"], "sturdy");
        const plain = mon("snorlax", ["tackle"]);
        for (const p of [sash, sturdy, plain]) p.hp = [1, 1];
        expect(hitsToDown(plain, 100)).toBe(1);
        expect(hitsToDown(sash, 100)).toBe(2);
        expect(hitsToDown(sturdy, 100)).toBe(2);
        expect(survivesOneHit(setHp(sash, 0), attacker)).toBe(false);
    });
    test("체력이 깎였으면 한 방에 쓰러진다", () => {
        const sash = mon("snorlax", ["tackle"], null, "focus-sash");
        sash.hp = [1, 2];
        expect(hitsToDown(sash, 100)).toBe(1);
    });
    test("틀깨기 특성은 옹골참을 무시한다", () => {
        const sturdy = mon("snorlax", ["tackle"], "sturdy");
        sturdy.hp = [1, 1];
        expect(hitsToDown(sturdy, 100, mon("garchomp", ["earthquake"], "mold-breaker"))).toBe(1);
    });
    test("멀티스케일은 체력이 가득 찼을 때의 데미지 감소가 계산에 들어간다", () => {
        const attacker = mon("garchomp", ["earthquake"]);
        const full = mon("dragonite", ["tackle"], "multiscale");
        const hurt = setHp(mon("dragonite", ["tackle"], "multiscale"), full.hp[0] - 1);
        const move = attacker.moveset[0];
        const dmgFull = damageCalc(attacker, full, move);
        const dmgHurt = damageCalc(attacker, hurt, move);
        expect(dmgFull * 2).toBeLessThanOrEqual(dmgHurt + 1);
        expect(bestDamage(attacker, full, null)).toBe(dmgFull);
    });
    test("기합의띠를 든 상대는 선공기로 쓰러뜨릴 수 있다고 보지 않는다", () => {
        const cpu = [mon("garchomp", ["aqua-jet", "earthquake"])];
        const guarded = [mon("snorlax", ["splash"], null, "focus-sash")];
        guarded[0].hp = [1, 1];
        expect(makeMove(guarded, cpu).name).toBe("earthquake"); // 선공기는 마무리로 쓰지 않고 가장 센 공격을 쓴다
        const open = [mon("snorlax", ["splash"])];
        open[0].hp = [1, 1];
        expect(makeMove(open, cpu).name).toBe("aqua-jet");
    });
    test("내가 기합의띠를 들고 체력이 가득 차 있으면 상대가 나를 잡는 데 두 번이 걸린다", () => {
        const foeMon = mon("garchomp", ["earthquake"]);
        const withSash = mon("ferrothorn", ["tackle"], null, "focus-sash");
        const without = mon("ferrothorn", ["tackle"]);
        const hit = bestDamage(foeMon, without, null);
        withSash.hp = [hit, hit]; // 딱 한 방에 쓰러지는 가득 찬 체력
        without.hp = [hit, hit];
        expect(hitsToDie(without, hit, foeMon)).toBe(1);
        expect(hitsToDie(withSash, hit, foeMon)).toBe(2);
    });
});

describe("배턴터치와 한 방 방지", () => {
    test("기합의띠를 든 상대는 한 방에 못 잡으니 한 방 조건으로는 넘기지 않는다", () => {
        const passer = mon("ferrothorn", ["swords-dance", "baton-pass"]);
        passer.stat_levels[0] = 2;
        const cpu = [passer, mon("garchomp", ["earthquake", "dragon-claw"]), mon("blissey", ["soft-boiled"])];
        const sashFoe = [mon("snorlax", ["tackle"], null, "focus-sash")];
        sashFoe[0].hp = [100, 100];
        expect(choose(sashFoe, cpu)).toBe("swords-dance");
        const openFoe = [setHp(mon("snorlax", ["tackle"]), 100)];
        expect(choose(openFoe, cpu)).toBe("baton-pass");
    });
});

describe("자폭 계열", () => {
    const damageOf = (attacker, defender, name) => damageCalc(attacker, defender, attacker.moveset.find((m) => m.name === name));
    test("상대를 쓰러뜨리지 못하고 아직 버틸 만하면 자폭하지 않는다", () => {
        const cpu = [mon("garchomp", ["explosion", "tackle"])];
        const human = [mon("snorlax", ["splash"])];
        expect(makeMove(human, cpu).name).toBe("tackle");
    });
    test("자폭으로만 쓰러뜨릴 수 있으면 자폭한다", () => {
        const cpu = [mon("garchomp", ["explosion", "tackle"])];
        const human = [mon("snorlax", ["splash"])];
        human[0].hp = [damageOf(cpu[0], human[0], "tackle") + 1, human[0].hp[1]];
        expect(makeMove(human, cpu).name).toBe("explosion");
    });
    test("다른 기술로도 쓰러뜨릴 수 있으면 자폭하지 않는다", () => {
        const cpu = [mon("garchomp", ["explosion", "tackle"])];
        const human = [mon("snorlax", ["splash"])];
        human[0].hp = [damageOf(cpu[0], human[0], "tackle"), human[0].hp[1]];
        expect(makeMove(human, cpu).name).toBe("tackle");
    });
    test("어차피 상대의 다음 공격에 쓰러지면 자폭한다", () => {
        const cpu = [setHp(mon("garchomp", ["explosion", "tackle"]), 1)];
        const human = [mon("snorlax", ["splash", "body-slam"])];
        expect(makeMove(human, cpu).name).toBe("explosion");
    });
});
