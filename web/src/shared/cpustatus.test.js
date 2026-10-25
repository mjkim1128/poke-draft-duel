// 컴퓨터가 변화기(함정, 회복, 상태이상, 벽)를 쓰는 규칙과 우선순위를 확인한다.
import fs from "fs";
import path from "path";
import { chooseSupportMove, recordCpuMove } from "shared/cpustatus";
import { makeMove } from "shared/computermove";
import { getAbility } from "shared/abilities";

const MOVES = JSON.parse(
    fs.readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/moves.json"), "utf8")
);
const move = (name) => JSON.parse(JSON.stringify(MOVES.find((m) => m.name === name)));

// 같은 물 타입끼리(자속 보정 없음): 내 공격 100 / 상대 방어 100 / 위력 80이면 한 번에 69, 상대 공격 30이면 22
const hit = (category = "physical") => ({
    name: "test-hit-" + category,
    power: 80,
    accuracy: null,
    priority: 0,
    pp: 20,
    damage_class: { name: category },
    type: { name: "normal" },
    target: { name: "selected-pokemon" },
});

function mon({ name = "Mon", atk = 100, def = 100, spe = 100, hp = 300, types = ["water"], moves = [], ability = null, item = null }) {
    return {
        name,
        hp: [hp, hp],
        stat_levels: [0, 0, 0, 0, 0, 0, 0],
        item: item ? { name: item } : null,
        ability: ability ? getAbility(ability) : null,
        types: types.map((t, i) => ({ slot: i + 1, type: { name: t } })),
        moveset: moves.map((m) => (typeof m === "string" ? move(m) : { ...m })),
        base_stats: [hp, atk, def, atk, def, spe],
    };
}

const cpu = (moves, extra = {}) => mon({ name: "CPU", moves: [hit(), ...moves], ...extra });
// 사람 쪽: 앞에 나온 포켓몬 + 교체 대상 한 마리
const human = (extra = {}, benchExtra = {}) => {
    const team = [mon({ name: "Human", atk: 30, moves: [hit()], ...extra }), mon({ name: "Bench", ...benchExtra })];
    return team;
};
const choose = (c, team = human()) => {
    const m = chooseSupportMove(team, [c]);
    return m && m.name;
};

describe("함정", () => {
    test("상대 교체 대상이 있고 2회 이상 버티면 스텔스록을 깐다", () => {
        expect(choose(cpu(["stealth-rock"]))).toBe("stealth-rock");
    });
    test("스텔스록 > 압정뿌리기 > 독압정 순", () => {
        const c = cpu(["toxic-spikes", "spikes", "stealth-rock"]);
        const team = human();
        expect(choose(c, team)).toBe("stealth-rock");
        team.hazards = { stealthRock: true, spikes: 0, toxicSpikes: 0, stickyWeb: false };
        expect(choose(c, team)).toBe("spikes");
        team.hazards.spikes = 3;
        expect(choose(c, team)).toBe("toxic-spikes");
        team.hazards.toxicSpikes = 2;
        expect(choose(c, team)).toBe(null);
    });
    test("이미 깔려 있으면 다시 깔지 않는다", () => {
        const team = human();
        team.hazards = { stealthRock: true, spikes: 0, toxicSpikes: 0, stickyWeb: false };
        expect(choose(cpu(["stealth-rock"]), team)).toBe(null);
    });
    test("상대의 교체 대상이 없으면 깔지 않는다", () => {
        const team = human();
        team[1].hp[0] = 0;
        expect(choose(cpu(["stealth-rock"]), team)).toBe(null);
    });
    test("공중에 떠 있는 상대만 남았으면 압정류는 깔지 않지만 스텔스록은 깐다", () => {
        const team = human({}, { types: ["flying"] });
        expect(choose(cpu(["spikes"]), team)).toBe(null);
        expect(choose(cpu(["stealth-rock"]), team)).toBe("stealth-rock");
    });
    test("독/강철만 남았으면 독압정은 깔지 않는다", () => {
        expect(choose(cpu(["toxic-spikes"]), human({}, { types: ["steel"] }))).toBe(null);
    });
    test("버티지 못할 정도로 상대가 세면 깔지 않는다 (2회 미만)", () => {
        expect(choose(cpu(["stealth-rock"], { hp: 60 }), human({ atk: 150 }))).toBe(null);
    });
    test("내 쪽 함정이 있으면 방어막제거로 치운다", () => {
        const c = cpu(["defog"]);
        expect(choose(c)).toBe(null);
        const mine = [c, mon({ name: "Ally" })];
        mine.hazards = { stealthRock: true, spikes: 0, toxicSpikes: 0, stickyWeb: false };
        expect(chooseSupportMove(human(), mine).name).toBe("defog");
    });
    test("한 방에 잡을 수 있으면 함정 대신 공격한다", () => {
        expect(choose(cpu(["stealth-rock"]), human({ hp: 60 }))).toBe(null);
        expect(makeMove(human({ hp: 60 }), [cpu(["stealth-rock"])]).name).toBe("test-hit-physical");
    });
});

describe("회복", () => {
    test("체력 60% 이하이고 회복량이 상대 피해보다 크면 회복한다", () => {
        const c = cpu(["recover"]);
        c.hp[0] = 150;
        expect(choose(c)).toBe("recover");
    });
    test("체력이 60%를 넘으면 회복하지 않는다", () => {
        const c = cpu(["recover"]);
        c.hp[0] = 200;
        expect(choose(c)).toBe(null);
    });
    test("회복해도 상대 피해가 더 크면 회복하지 않는다", () => {
        const c = cpu(["recover"]);
        c.hp[0] = 150;
        expect(choose(c, human({ atk: 300 }))).toBe(null);
    });
    test("같은 회복기를 3번 연속 썼으면 이번에는 쓰지 않는다", () => {
        const c = cpu(["recover"]);
        c.hp[0] = 150;
        for (let i = 0; i < 3; i++) recordCpuMove(c, c.moveset[1]);
        expect(choose(c)).toBe(null);
        recordCpuMove(c, c.moveset[0]);
        expect(choose(c)).toBe("recover");
    });
    test("잠자기: 체력 40% 이하이고 2턴 자는 동안 버틸 수 있으면 쓴다", () => {
        const c = cpu(["rest"]);
        c.hp[0] = 90;
        expect(choose(c)).toBe("rest");
        c.hp[0] = 150;
        expect(choose(c)).toBe(null);
    });
    test("잠자기: 상태이상이 있으면 70%까지 일찍 쓴다", () => {
        const c = cpu(["rest"]);
        c.hp[0] = 200;
        c.status = { name: "burn" };
        expect(choose(c)).toBe("rest");
    });
    test("잠자기: 자는 동안 못 버티면 쓰지 않는다", () => {
        const c = cpu(["rest"]);
        c.hp[0] = 90;
        expect(choose(c, human({ atk: 250 }))).toBe(null);
    });
    test("풀피이면 회복하지 않는다", () => {
        expect(choose(cpu(["recover", "rest"]))).toBe(null);
    });
});

describe("상태이상", () => {
    test("맹독, 수면, 마비는 걸 수 있으면 건다", () => {
        expect(choose(cpu(["toxic"]))).toBe("toxic");
        expect(choose(cpu(["spore"]))).toBe("spore");
        expect(choose(cpu(["thunder-wave"]))).toBe("thunder-wave");
    });
    test("수면 > 마비 > 맹독 순", () => {
        expect(choose(cpu(["toxic", "thunder-wave", "spore"]))).toBe("spore");
        expect(choose(cpu(["toxic", "thunder-wave"]))).toBe("thunder-wave");
    });
    test("이미 상태이상이면 걸지 않는다", () => {
        const team = human();
        team[0].status = { name: "burn" };
        expect(choose(cpu(["toxic", "spore", "thunder-wave"]), team)).toBe(null);
    });
    test("독/강철 타입에게 맹독은 걸지 않는다", () => {
        expect(choose(cpu(["toxic"]), human({ types: ["poison"] }))).toBe(null);
        expect(choose(cpu(["toxic"]), human({ types: ["steel"] }))).toBe(null);
    });
    test("풀 타입에게 가루 기술은 걸지 않는다", () => {
        expect(choose(cpu(["spore"]), human({ types: ["grass"] }))).toBe(null);
    });
    test("땅 타입에게 전기자석파는 걸지 않는다", () => {
        expect(choose(cpu(["thunder-wave"]), human({ types: ["ground"] }))).toBe(null);
    });
    test("신비의부적이 있으면 걸지 않는다", () => {
        const team = human();
        team.safeguardTurns = 3;
        expect(choose(cpu(["toxic"]), team)).toBe(null);
    });
    test("도깨비불: 물리 공격 상대에게만, 불 타입에게는 쓰지 않는다", () => {
        expect(choose(cpu(["will-o-wisp"]))).toBe("will-o-wisp");
        expect(choose(cpu(["will-o-wisp"]), human({ types: ["fire"] }))).toBe(null);
        const special = [mon({ name: "Human", atk: 30, moves: [hit("special")] }), mon({ name: "Bench" })];
        expect(choose(cpu(["will-o-wisp"]), special)).toBe(null);
    });
    test("하품: 걸 수 있으면 건다", () => {
        expect(choose(cpu(["yawn"]))).toBe("yawn");
        const team = human();
        team[0].yawn = 2;
        expect(choose(cpu(["yawn"]), team)).toBe(null);
    });
    test("씨뿌리기: 풀 타입에게는 쓰지 않는다", () => {
        expect(choose(cpu(["leech-seed"]))).toBe("leech-seed");
        expect(choose(cpu(["leech-seed"]), human({ types: ["grass"] }))).toBe(null);
    });
    test("한 방에 잡을 수 있으면 상태이상 대신 공격한다", () => {
        expect(choose(cpu(["spore"]), human({ hp: 60 }))).toBe(null);
    });
});

describe("벽", () => {
    test("물리 공격이 더 아프면 리플렉터, 특수가 더 아프면 빛의장막", () => {
        const c = cpu(["reflect", "light-screen"]);
        expect(choose(c)).toBe("reflect");
        const special = [mon({ name: "Human", atk: 30, moves: [hit("special")] }), mon({ name: "Bench" })];
        expect(choose(c, special)).toBe("light-screen");
    });
    test("이미 쳐 있는 벽은 다시 치지 않는다", () => {
        const c = cpu(["reflect"]);
        const mine = [c];
        mine.reflectTurns = 4;
        expect(chooseSupportMove(human(), mine)).toBe(null);
    });
    test("상대가 그 종류 공격을 하지 않으면 치지 않는다", () => {
        expect(choose(cpu(["light-screen"]))).toBe(null);
    });
    test("빛의점토를 들고 있으면 회복, 상태이상보다 벽이 먼저", () => {
        const c = cpu(["recover", "reflect", "toxic"], { item: "light-clay" });
        c.hp[0] = 150;
        expect(choose(c)).toBe("reflect");
    });
    test("빛의점토가 없으면 회복 > 상태이상 > 벽", () => {
        const c = cpu(["recover", "reflect", "toxic"]);
        c.hp[0] = 150;
        expect(choose(c)).toBe("recover");
        c.hp[0] = 300;
        expect(choose(c)).toBe("toxic");
    });
});

describe("저승길동무", () => {
    test("한 방에 쓰러질 상황이고 내가 먼저 움직이면 쓴다", () => {
        const strong = { atk: 300 };
        expect(choose(cpu(["destiny-bond"], { hp: 180, spe: 150 }), human(strong))).toBe("destiny-bond");
    });
    test("내가 느리면 쓰지 않는다", () => {
        expect(choose(cpu(["destiny-bond"], { hp: 180, spe: 50 }), human({ atk: 300 }))).toBe(null);
    });
    test("한 방에 쓰러질 상황이 아니면 쓰지 않는다", () => {
        expect(choose(cpu(["destiny-bond"], { spe: 150 }))).toBe(null);
    });
    test("연속으로 쓰지 않는다", () => {
        const c = cpu(["destiny-bond"], { hp: 180, spe: 150 });
        recordCpuMove(c, c.moveset[1]);
        expect(choose(c, human({ atk: 300 }))).toBe(null);
    });
});

describe("트릭룸", () => {
    const team = (...speeds) => speeds.map((spe, i) => mon({ name: "T" + i, spe, moves: i === 0 ? [hit(), move("trick-room")] : [hit()] }));
    const foe = () => human({ spe: 100 });
    test("1마리: 자기 자신이 느리면 쓴다", () => {
        expect(chooseSupportMove(foe(), team(30)).name).toBe("trick-room");
    });
    test("1마리: 자기 자신이 더 빠르면 쓰지 않는다", () => {
        expect(chooseSupportMove(foe(), team(200))).toBe(null);
    });
    test("2마리: 1마리가 느리면 쓴다", () => {
        expect(chooseSupportMove(foe(), team(200, 30)).name).toBe("trick-room");
    });
    test("2마리: 둘 다 빠르면 쓰지 않는다", () => {
        expect(chooseSupportMove(foe(), team(200, 220))).toBe(null);
    });
    test("3마리: 2마리가 느리면 쓰고, 1마리뿐이면 쓰지 않는다", () => {
        expect(chooseSupportMove(foe(), team(30, 200, 40)).name).toBe("trick-room");
        expect(chooseSupportMove(foe(), team(30, 200, 220))).toBe(null);
    });
    test("쓰러진 파티원은 세지 않는다", () => {
        const t = team(30, 200, 220);
        t[1].hp[0] = 0; // 살아 있는 건 2마리: 느린 1마리면 충분
        expect(chooseSupportMove(foe(), t).name).toBe("trick-room");
    });
    test("이미 트릭룸이면 쓰지 않는다", () => {
        const f = foe();
        f.field = { trickRoom: { turns: 3 } };
        expect(chooseSupportMove(f, team(30))).toBe(null);
    });
});

describe("트릭", () => {
    test("구애 도구를 들고 있고 상대에게 구애 도구가 없으면 쓴다", () => {
        expect(choose(cpu(["trick"], { item: "choice-scarf" }))).toBe("trick");
        expect(choose(cpu(["switcheroo"], { item: "choice-band" }))).toBe("switcheroo");
    });
    test("상대도 구애 도구를 들고 있으면 쓰지 않는다", () => {
        expect(choose(cpu(["trick"], { item: "choice-scarf" }), human({ item: "choice-band" }))).toBe(null);
    });
    test("구애 도구가 아니면 쓰지 않는다", () => {
        expect(choose(cpu(["trick"], { item: "leftovers" }))).toBe(null);
    });
});

describe("랭업 되돌리기", () => {
    test("상대 랭업이 +2 이상이면 흑안개", () => {
        const team = human();
        team[0].stat_levels[0] = 2;
        expect(choose(cpu(["haze", "roar"]), team)).toBe("haze");
    });
    test("내 랭업이 더 높으면 흑안개는 쓰지 않고 울부짖기를 쓴다", () => {
        const team = human();
        team[0].stat_levels[0] = 2;
        const c = cpu(["haze", "roar"]);
        c.stat_levels[0] = 4;
        expect(choose(c, team)).toBe("roar");
    });
    test("상대 랭업이 +1이면 쓰지 않는다", () => {
        const team = human();
        team[0].stat_levels[0] = 1;
        expect(choose(cpu(["haze", "roar"]), team)).toBe(null);
    });
    test("상대에게 바꿔 낼 포켓몬이 없으면 울부짖기는 쓰지 않는다", () => {
        const team = human();
        team[1].hp[0] = 0;
        team[0].stat_levels[2] = 3;
        expect(choose(cpu(["roar"]), team)).toBe(null);
    });
});

describe("도발, 앙코르", () => {
    const talker = (extra = {}) => human({ moves: [hit(), "recover", "toxic"], ...extra });
    test("도발: 상대 변화기가 2개 이상이고 내가 먼저 움직이면 쓴다", () => {
        expect(choose(cpu(["taunt"], { spe: 150 }), talker())).toBe("taunt");
    });
    test("도발: 내가 느리면 쓰지 않는다", () => {
        expect(choose(cpu(["taunt"], { spe: 50 }), talker())).toBe(null);
    });
    test("도발: 상대 변화기가 1개뿐이면 쓰지 않는다", () => {
        expect(choose(cpu(["taunt"], { spe: 150 }), human({ moves: [hit(), "recover"] }))).toBe(null);
    });
    test("도발: 이미 도발 중이면 쓰지 않는다", () => {
        const team = talker();
        team[0].taunt = { turns: 2 };
        expect(choose(cpu(["taunt"], { spe: 150 }), team)).toBe(null);
    });
    test("앙코르: 상대가 직전에 변화기를 썼으면 쓴다", () => {
        const team = talker();
        team[0].lastMove = "recover";
        expect(choose(cpu(["encore"], { spe: 150 }), team)).toBe("encore");
    });
    test("앙코르: 직전에 공격했으면 쓰지 않는다", () => {
        const team = talker();
        team[0].lastMove = "test-hit-physical";
        expect(choose(cpu(["encore"], { spe: 150 }), team)).toBe(null);
    });
});

describe("대타출동, 방어, 소원", () => {
    const talker = (extra = {}) => human({ moves: [hit(), "toxic"], ...extra });
    test("대타출동: 체력이 충분하고 상대에게 나를 노리는 변화기가 있으면 쓴다", () => {
        expect(choose(cpu(["substitute"]), talker())).toBe("substitute");
    });
    test("대타출동: 상대에게 변화기가 없으면 쓰지 않는다", () => {
        expect(choose(cpu(["substitute"]))).toBe(null);
    });
    test("대타출동: 체력이 50% 이하이거나 이미 대타가 있으면 쓰지 않는다", () => {
        const c = cpu(["substitute"]);
        c.hp[0] = 140;
        expect(choose(c, talker())).toBe(null);
        const d = cpu(["substitute"]);
        d.substitute = { hp: 75 };
        expect(choose(d, talker())).toBe(null);
    });
    test("방어: 상대가 독에 걸려 매 턴 깎이고 있으면 쓴다", () => {
        const team = human();
        team[0].status = { name: "toxic", counter: 1 };
        expect(choose(cpu(["protect"]), team)).toBe("protect");
    });
    test("방어: 상대가 충전 중이면 쓴다", () => {
        const team = human();
        team[0].charging = "solar-beam";
        expect(choose(cpu(["protect"]), team)).toBe("protect");
    });
    test("방어: 이유가 없으면 쓰지 않는다", () => {
        expect(choose(cpu(["protect"]))).toBe(null);
    });
    test("방어: 직전에 방어를 썼으면(연속) 쓰지 않는다", () => {
        const team = human();
        team[0].status = { name: "toxic", counter: 1 };
        const c = cpu(["protect"]);
        c.stallDivisor = 3;
        expect(choose(c, team)).toBe(null);
    });
    test("소원: 체력 70% 이하이고 두 번 맞고도 버티면 쓴다", () => {
        const c = cpu(["wish"]);
        c.hp[0] = 180;
        expect(choose(c)).toBe("wish");
    });
    test("소원: 이미 소원이 걸려 있으면 쓰지 않는다", () => {
        const c = cpu(["wish"]);
        c.hp[0] = 180;
        const mine = [c];
        mine.wish = { turns: 1, amount: 150 };
        expect(chooseSupportMove(human(), mine)).toBe(null);
    });
});

describe("잠꼬대", () => {
    test("자고 있으면 잠꼬대를 쓴다 (한 방에 잡을 수 있어도)", () => {
        const c = cpu(["sleep-talk"]);
        c.status = { name: "sleep", counter: 2 };
        expect(makeMove(human({ hp: 60 }), [c]).name).toBe("sleep-talk");
    });
    test("자고 있지 않으면 쓰지 않는다", () => {
        expect(makeMove(human(), [cpu(["sleep-talk"])]).name).toBe("test-hit-physical");
    });
    test("잠꼬대가 없으면 평소대로 고른다", () => {
        const c = cpu([]);
        c.status = { name: "sleep", counter: 2 };
        expect(makeMove(human(), [c]).name).toBe("test-hit-physical");
    });
});

describe("우선순위", () => {
    test("함정 > 상태이상 > 랭업기", () => {
        const c = cpu(["swords-dance", "toxic", "stealth-rock"]);
        const team = human();
        expect(choose(c, team)).toBe("stealth-rock");
        team.hazards = { stealthRock: true, spikes: 0, toxicSpikes: 0, stickyWeb: false };
        expect(choose(c, team)).toBe("toxic");
        team[0].status = { name: "toxic", counter: 1 };
        expect(choose(c, team)).toBe("swords-dance");
    });
    test("함정 > 회복", () => {
        const c = cpu(["recover", "stealth-rock"]);
        c.hp[0] = 150;
        expect(choose(c)).toBe("stealth-rock");
    });
    test("makeMove도 같은 우선순위를 따른다", () => {
        expect(makeMove(human(), [cpu(["swords-dance", "toxic"])]).name).toBe("toxic");
    });
});
