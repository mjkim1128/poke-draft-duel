// 컴퓨터의 순풍, 배턴터치, 꼬리자르기 (cpupass.js)
import fs from "fs";
import path from "path";
import { doTurn, getBaseStats, hpCalc } from "shared";
import { damageCalc, MIN_ROLL } from "shared/damagecalc";
import { chooseSupportMove } from "shared/cpustatus";
import { bestDamage, chooseSetupMove } from "shared/cpusetup";
import { makeMove } from "shared/computermove";
import { attackCategory } from "shared/cpupass";

const read = (file) => JSON.parse(fs.readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/" + file), "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const clone = (x) => JSON.parse(JSON.stringify(x));

function mon(species, moves) {
    const p = clone(POKEMON.get(species));
    p.base_stats = getBaseStats(p);
    p.hp = [hpCalc(p.base_stats[0]) * 4, hpCalc(p.base_stats[0]) * 4];
    p.stat_levels = Array(7).fill(0);
    p.item = null;
    p.originalItem = null;
    p.ability = null;
    p.baseAbility = null;
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

describe("공격기 분류", () => {
    test("공격기 중 과반수인 쪽이 그 포켓몬의 종류다", () => {
        expect(attackCategory(mon("garchomp", ["earthquake", "dragon-claw", "flamethrower", "swords-dance"]))).toBe("physical");
        expect(attackCategory(mon("alakazam", ["psychic", "shadow-ball", "focus-blast", "recover"]))).toBe("special");
        expect(attackCategory(mon("garchomp", ["earthquake", "flamethrower"]))).toBe(null);
    });
});

describe("순풍", () => {
    // 상대 snorlax(스피드 96)보다 느린 포켓몬들: ferrothorn 76, snorlax 96(같음), 순풍이면 둘 다 앞선다
    const foe = () => [mon("snorlax", ["tackle"])];
    test("남은 파티의 과반수가 순풍으로 앞지르게 되면 쓴다", () => {
        const cpu = [mon("ferrothorn", ["tailwind"]), mon("snorlax", ["tackle"]), mon("garchomp", ["tackle"])];
        expect(choose(foe(), cpu)).toBe("tailwind"); // 3명 중 2명
    });
    test("앞지르게 되는 포켓몬이 절반에 못 미치면 쓰지 않는다", () => {
        const cpu = [mon("ferrothorn", ["tailwind"]), mon("garchomp", ["tackle"]), mon("garchomp", ["tackle"])];
        expect(choose(foe(), cpu)).toBe(null); // 3명 중 1명
    });
    test("2명 남았을 때는 1명만 앞지르게 돼도 쓴다", () => {
        const cpu = [mon("ferrothorn", ["tailwind"]), mon("garchomp", ["tackle"])];
        expect(choose(foe(), cpu)).toBe("tailwind");
    });
    test("이미 순풍이 불고 있거나 트릭룸이 깔려 있으면 쓰지 않는다", () => {
        const cpu = [mon("ferrothorn", ["tailwind"]), mon("snorlax", ["tackle"])];
        cpu.tailwindTurns = 3;
        expect(choose(foe(), cpu)).toBe(null);
        const cpu2 = [mon("ferrothorn", ["tailwind"]), mon("snorlax", ["tackle"])];
        cpu2.field = { trickRoom: { turns: 3 } };
        expect(choose(foe(), cpu2)).toBe(null);
    });
});

describe("배턴터치", () => {
    // 랭크업을 받을 garchomp(스피드 102)는 상대 snorlax(96)보다 빠르다
    const team = (passerMoves = ["swords-dance", "baton-pass"], boost = 2) => {
        const passer = mon("ferrothorn", passerMoves);
        passer.stat_levels[0] = boost;
        return [passer, mon("garchomp", ["earthquake", "dragon-claw"]), mon("blissey", ["soft-boiled"])];
    };
    test("받을 포켓몬이 랭크업을 받고 상대보다 빠르게 넉넉히 한 방에 잡으면 넘긴다", () => {
        const cpu = team();
        const human = [setHp(mon("snorlax", ["tackle"]), 100)];
        expect(choose(human, cpu)).toBe("baton-pass");
        expect(cpu[0].passTarget).toBe("garchomp");
    });
    test("한 방에 못 잡으면 넘기지 않고 랭크업을 더 쌓는다", () => {
        const cpu = team();
        const human = [mon("snorlax", ["tackle"])]; // 체력이 아주 많다
        expect(choose(human, cpu)).toBe("swords-dance");
    });
    test("특수 랭크업은 특수 공격기가 많은 포켓몬에게 넘긴다", () => {
        const passer = mon("ferrothorn", ["nasty-plot", "baton-pass"]);
        passer.stat_levels[2] = 2;
        const cpu = [passer, mon("garchomp", ["earthquake", "dragon-claw"]), mon("alakazam", ["psychic", "shadow-ball"])];
        expect(choose([setHp(mon("snorlax", ["tackle"]), 100)], cpu)).toBe("baton-pass");
        expect(cpu[0].passTarget).toBe("alakazam");
    });
    test("받을 만한 공격 종류의 포켓몬이 없으면 넘기지 않는다", () => {
        const passer = mon("ferrothorn", ["nasty-plot", "baton-pass"]);
        passer.stat_levels[2] = 2;
        const cpu = [passer, mon("garchomp", ["earthquake", "dragon-claw"]), mon("blissey", ["soft-boiled"])];
        expect(choose([setHp(mon("snorlax", ["tackle"]), 100)], cpu)).not.toBe("baton-pass");
    });
    test("내가 버티고 랭크업을 한 번 더 하면 한 방에 잡을 수 있을 때는 직접 싸운다", () => {
        const passer = mon("garchomp", ["swords-dance", "baton-pass", "earthquake"]);
        passer.stat_levels[0] = 1;
        const cpu = [passer, mon("garchomp", ["earthquake", "dragon-claw"])];
        const human = [mon("snorlax", ["tackle"])];
        const boosted = (level) => damageCalc({ ...passer, stat_levels: [level, 0, 0, 0, 0, 0, 0] }, human[0], passer.moveset[2]);
        // 지금(+1)로는 못 잡고 한 번 더 올린 뒤(+3)에는 잡는 체력
        human[0].hp = [boosted(1) + 1, human[0].hp[1]];
        expect(boosted(3)).toBeGreaterThanOrEqual(human[0].hp[0]);
        expect(choose(human, cpu)).not.toBe("baton-pass");
    });
    test("랭크업을 하다가 다음 공격에 쓰러질 상황이면 바로 넘긴다", () => {
        const cpu = team();
        setHp(cpu[0], 1);
        const human = [mon("snorlax", ["tackle"])]; // 한 방에 못 잡는 체력
        expect(choose(human, cpu)).toBe("baton-pass");
        expect(cpu[0].passTarget).toBe("garchomp");
    });
    test("올린 랭크업이 없으면 배턴터치를 쓰지 않고 랭업기로 시작한다", () => {
        const cpu = team(["swords-dance", "baton-pass"], 0);
        expect(choose([mon("snorlax", ["tackle"])], cpu)).toBe("swords-dance");
    });
    test("실제 배틀에서 정해 둔 포켓몬이 랭크업을 받고 나온다", () => {
        const cpu = team();
        const human = [setHp(mon("snorlax", ["splash"]), 100)];
        doTurn(human, cpu, human[0].moveset[0]);
        expect(cpu[0].name).toBe("garchomp");
        expect(cpu[0].stat_levels[0]).toBe(2);
    });
});

describe("꼬리자르기", () => {
    test("한 방에 쓰러지지만 두 방에 잡을 수 있는 포켓몬을 대타와 함께 내보낸다", () => {
        const passer = mon("slowking", ["shed-tail"]);
        const striker = mon("garchomp", ["earthquake", "dragon-claw"]);
        const human = [mon("snorlax", ["tackle"])];
        const cpu = [passer, mon("blissey", ["soft-boiled"]), striker];
        // 상대의 한 방에 쓰러지는 체력, 두 방에 잡히는 상대 체력
        setHp(striker, bestDamage(human[0], striker, null));
        human[0].hp = [bestDamage(striker, human[0], null, MIN_ROLL) * 2 - 1, human[0].hp[1]];
        expect(choose(human, cpu)).toBe("shed-tail");
        expect(cpu[0].passTarget).toBe("garchomp");
    });
    test("체력이 절반 이하이면 쓰지 않는다 (실패하는 기술)", () => {
        const passer = setHp(mon("slowking", ["shed-tail"]), 1);
        const striker = mon("garchomp", ["earthquake", "dragon-claw"]);
        const human = [mon("snorlax", ["tackle"])];
        setHp(striker, bestDamage(human[0], striker, null));
        human[0].hp = [bestDamage(striker, human[0], null) * 2 - 1, human[0].hp[1]];
        expect(choose(human, [passer, striker])).not.toBe("shed-tail");
    });
    test("대타 뒤에서 랭업하면 상대를 앞지르고 한 방에 잡을 포켓몬을 내보낸다", () => {
        const passer = mon("slowking", ["shed-tail"]);
        const dancer = mon("ferrothorn", ["agility", "tackle"]); // 스피드 76: snorlax(96)보다 느리지만 +2면 앞선다
        const human = [setHp(mon("snorlax", ["tackle"]), 1)];
        const cpu = [passer, dancer];
        expect(choose(human, cpu)).toBe("shed-tail");
        expect(cpu[0].passTarget).toBe("ferrothorn");
    });
    test("랭업해도 상대를 앞지르지 못하면 대타를 만들지 않는다", () => {
        const passer = mon("slowking", ["shed-tail"]);
        const dancer = mon("ferrothorn", ["agility", "tackle"]);
        const human = [setHp(mon("garchomp", ["tackle"]), 1)]; // 스피드 102: +2를 해도 못 앞지른다
        expect(choose(human, [passer, dancer])).toBe(null);
    });
});

describe("교체할 상황의 꼬리자르기", () => {
    // 맹독에 걸려 교체 이유가 생긴 garchomp(스피드 102)와 상대 snorlax(96)
    const team = (passerSpecies = "garchomp") => {
        const passer = mon(passerSpecies, ["shed-tail", "tackle"]);
        passer.status = { name: "toxic", counter: 1 };
        return [passer, mon("garchomp", ["earthquake", "dragon-claw"])];
    };
    test("내가 상대보다 빠르면 교체하는 대신 꼬리자르기를 쓰고 교체하려던 포켓몬이 나온다", () => {
        const cpu = team();
        const move = makeMove([mon("snorlax", ["tackle"])], cpu, true);
        expect(move.name).toBe("shed-tail");
        expect(cpu[0].passTarget).toBe("garchomp");
    });
    test("내가 느리면 그냥 교체한다", () => {
        const cpu = team("ferrothorn");
        const move = makeMove([mon("snorlax", ["tackle"])], cpu, true);
        expect(move.priority).toBe(6);
    });
    test("체력이 절반 이하이면 꼬리자르기가 실패하니 그냥 교체한다", () => {
        const cpu = team();
        setHp(cpu[0], Math.floor(cpu[0].hp[1] / 2));
        const move = makeMove([mon("snorlax", ["tackle"])], cpu, true);
        expect(move.priority).toBe(6);
    });
});

describe("대타가 있으면 상대가 나를 잡는 턴 수가 늘어난다", () => {
    test("대타가 있을 때만 랭업기를 쓴다 (한 방에 쓰러지는 체력이어도 대타가 한 번 맞아 준다)", () => {
        const make = (substitute) => {
            const me = mon("garchomp", ["swords-dance", "earthquake"]);
            const foe = mon("snorlax", ["tackle"]);
            me.hp = [bestDamage(foe, me, null), me.hp[1]]; // 상대의 한 방에 쓰러진다
            const now = bestDamage(me, foe, null);
            foe.hp = [now + 1, foe.hp[1]]; // 지금은 두 방, 공격이 두 배가 되면 한 방
            me.substitute = substitute;
            return [[foe], [me]];
        };
        const [foeA, meA] = make(null);
        expect(chooseSetupMove(foeA, meA)).toBe(null);
        const [foeB, meB] = make({ hp: 9999 });
        expect(chooseSetupMove(foeB, meB).name).toBe("swords-dance");
    });
});

describe("배턴터치: 한 방이 안 될 때와 스피드 랭크업", () => {
    // 받을 garchomp가 랭크업을 받고 때리면 상대 체력의 90%를 주는 상대 (한 방 조건 110%에는 못 미치고, 두 방 조건 70%는 넘는다)
    const foeFor = (passer) => {
        const received = mon("garchomp", ["earthquake", "dragon-claw"]);
        received.stat_levels = [...passer.stat_levels];
        const foe = mon("snorlax", ["tackle"]);
        foe.hp = [Math.floor(bestDamage(received, foe, null) / 0.9), foe.hp[1]];
        return [foe];
    };
    test("더 올릴 수 없으면 두 방에 잡는 포켓몬에게도 넘긴다", () => {
        const passer = mon("ferrothorn", ["swords-dance", "baton-pass"]);
        passer.stat_levels[0] = 6; // 공격이 최대: 랭업기를 더 쓸 수 없다
        const cpu = [passer, mon("garchomp", ["earthquake", "dragon-claw"])];
        expect(choose(foeFor(passer), cpu)).toBe("baton-pass");
        expect(cpu[0].passTarget).toBe("garchomp");
    });
    test("더 올릴 수 있는 동안은 한 방 조건을 기다리며 랭크업을 쌓는다", () => {
        const passer = mon("ferrothorn", ["swords-dance", "baton-pass"]);
        passer.stat_levels[0] = 2;
        const cpu = [passer, mon("garchomp", ["earthquake", "dragon-claw"])];
        expect(choose(foeFor(passer), cpu)).toBe("swords-dance");
    });
    test("두 방도 안 되면 더 올릴 수 없어도 넘기지 않는다", () => {
        const passer = mon("ferrothorn", ["swords-dance", "baton-pass"]);
        passer.stat_levels[0] = 6;
        const cpu = [passer, mon("garchomp", ["earthquake", "dragon-claw"])];
        expect(choose([mon("snorlax", ["tackle"])], cpu)).not.toBe("baton-pass"); // 체력이 아주 많은 상대
    });
    test("스피드만 올렸으면, 받아서 상대를 앞지르게 되는 포켓몬에게 넘긴다", () => {
        const passer = mon("blissey", ["agility", "baton-pass"]);
        passer.stat_levels[4] = 2;
        // ferrothorn(76)은 snorlax(96)보다 느리지만 +2를 받으면 앞선다. garchomp(102)는 이미 앞서 있어 받을 이유가 없다.
        const cpu = [passer, mon("garchomp", ["earthquake"]), mon("ferrothorn", ["tackle"])];
        const human = [setHp(mon("snorlax", ["tackle"]), 1)];
        expect(choose(human, cpu)).toBe("baton-pass");
        expect(cpu[0].passTarget).toBe("ferrothorn");
    });
    test("스피드를 받아도 앞지르는 포켓몬이 없으면 넘기지 않는다", () => {
        const passer = mon("blissey", ["agility", "baton-pass"]);
        passer.stat_levels[4] = 2;
        const cpu = [passer, mon("garchomp", ["earthquake"])];
        expect(choose([setHp(mon("snorlax", ["tackle"]), 1)], cpu)).not.toBe("baton-pass");
    });
});
