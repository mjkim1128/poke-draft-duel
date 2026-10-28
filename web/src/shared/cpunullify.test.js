// 랭업 무효기: 상대가 내 랭크업을 없앨 수 있으면(흑안개, 클리어스모그, 울부짖기, 날려버리기, 드래곤테일, 용오름) 컴퓨터는 랭업기를 쓰지 않는다
import fs from "fs";
import path from "path";
import { getBaseStats, hpCalc } from "shared";
import { getAbility } from "shared/abilities";
import { chooseSetupMove, foeNullifiesBoosts } from "shared/cpusetup";
import { makeMove } from "shared/computermove";
import { BOOST_NULLIFYING_MOVES } from "shared/movemechanics";

const read = (f) => JSON.parse(fs.readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/" + f), "utf8"));
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

// 컴퓨터(랭업기를 가진 쪽)와 사람(상대) 팀
const cpuTeam = () => [mon("garchomp", ["swords-dance", "earthquake"]), mon("blissey", ["soft-boiled"])];
const humanTeam = (foeMoves, bench = true) => [mon("snorlax", foeMoves), ...(bench ? [mon("blissey", ["splash"])] : [])];

test("랭업 무효기 목록", () => {
    expect([...BOOST_NULLIFYING_MOVES].sort()).toEqual(["circle-throw", "clear-smog", "dragon-tail", "haze", "roar", "whirlwind"]);
});

describe("상대가 랭업 무효기를 갖고 있으면 랭업기를 쓰지 않는다", () => {
    test("무효기가 없으면 랭업기를 쓴다 (기준)", () => {
        expect(chooseSetupMove(humanTeam(["splash"]), cpuTeam())).not.toBeNull();
    });
    test.each(["haze", "clear-smog", "roar", "whirlwind", "dragon-tail", "circle-throw"])("%s를 가진 상대 앞에서는 쓰지 않는다", (name) => {
        const foe = humanTeam([name, "splash"]);
        expect(chooseSetupMove(foe, cpuTeam())).toBeNull();
    });
    test("컴퓨터가 실제로 고르는 기술도 랭업기가 아니다", () => {
        const foe = humanTeam(["whirlwind"]);
        expect(makeMove(foe, cpuTeam(), false).name).not.toBe("swords-dance");
    });
});

describe("무효기가 통하지 않는 경우에는 랭업기를 쓴다", () => {
    test("내 뒤에 낼 포켓몬이 없으면 강제 교체 기술은 통하지 않는다", () => {
        const cpu = [mon("garchomp", ["swords-dance", "earthquake"])];
        expect(foeNullifiesBoosts(humanTeam(["whirlwind"])[0], cpu[0], cpu)).toBe(false);
        expect(chooseSetupMove(humanTeam(["whirlwind"]), cpu)).not.toBeNull();
    });
    test("흡반 특성이면 강제 교체 기술이 통하지 않는다", () => {
        const cpu = [mon("garchomp", ["swords-dance", "earthquake"], "suction-cups"), mon("blissey", ["soft-boiled"])];
        expect(foeNullifiesBoosts(humanTeam(["roar"])[0], cpu[0], cpu)).toBe(false);
    });
    test("강철 타입에게 클리어스모그는 통하지 않는다", () => {
        const cpu = [mon("skarmory", ["swords-dance", "brave-bird"]), mon("blissey", ["soft-boiled"])];
        expect(foeNullifiesBoosts(humanTeam(["clear-smog"])[0], cpu[0], cpu)).toBe(false);
    });
    test("흑안개는 내 뒤에 포켓몬이 없어도 통한다", () => {
        const cpu = [mon("garchomp", ["swords-dance", "earthquake"])];
        expect(foeNullifiesBoosts(humanTeam(["haze"])[0], cpu[0], cpu)).toBe(true);
    });
    test("무효기의 PP가 바닥나면 쓰지 못하므로 랭업기를 쓴다", () => {
        const foe = humanTeam(["haze", "splash"]);
        expect(chooseSetupMove(foe, cpuTeam())).toBeNull();
        foe[0].moveset[0].ppLeft = 0;
        expect(chooseSetupMove(foe, cpuTeam())).not.toBeNull();
    });
});
