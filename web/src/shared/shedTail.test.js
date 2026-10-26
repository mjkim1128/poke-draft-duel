// 꼬리자르기: 체력 절반을 내고 대타를 만들어 뒤의 포켓몬에게 넘기며 교체한다
import fs from "fs";
import path from "path";
import { doTurn, resumeTurn, getBaseStats, hpCalc } from "shared";

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
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, lastMoveName: null, moveRepeatCount: 0 });
    return p;
}

const setup = () => {
    const user = mon("greedent", ["shed-tail"]);
    const back = mon("blissey", ["splash"]);
    const me = [user, back];
    const foe = [mon("snorlax", ["splash"]), mon("snorlax", ["splash"])];
    return { user, back, me, foe };
};

test("체력의 절반을 내고 대타를 만들어, 교체해 나온 포켓몬이 그 대타를 받는다", () => {
    const { user, back, me, foe } = setup();
    const max = user.hp[1];
    const text = doTurn(me, foe, user.moveset[0]).join(" ");
    expect(text).toContain("shed its tail");
    expect(user.hp[0]).toBe(max - Math.ceil(max / 2));
    expect(me.pendingSwitch).toBeTruthy(); // 누구를 낼지 고르는 중
    resumeTurn(me, foe, 1);
    expect(me[0]).toBe(back);
    expect(back.substitute).toEqual({ hp: Math.floor(max / 4) });
    expect(user.substitute).toBeFalsy(); // 대타는 나간 쪽에 남지 않는다
});

test("대타 덕분에 나온 포켓몬은 상대 공격을 대타가 대신 맞는다", () => {
    const { user, back, me, foe } = setup();
    const backHp = back.hp[0];
    foe[0].moveset = [clone(MOVES.get("tackle"))];
    foe[0].moveset[0].accuracy = null;
    doTurn(me, foe, user.moveset[0]);
    resumeTurn(me, foe, 1);
    doTurn(me, foe, back.moveset[0]);
    expect(back.hp[0]).toBe(backHp);
});

test("체력이 절반 이하면 실패한다", () => {
    const { user, me, foe } = setup();
    user.hp[0] = Math.ceil(user.hp[1] / 2);
    const text = doTurn(me, foe, user.moveset[0]).join(" ");
    expect(text).toContain("But it failed!");
    expect(me.pendingSwitch).toBeFalsy();
    expect(user.hp[0]).toBe(Math.ceil(user.hp[1] / 2));
});

test("이미 대타가 있으면 실패한다", () => {
    const { user, me, foe } = setup();
    user.substitute = { hp: 10 };
    const text = doTurn(me, foe, user.moveset[0]).join(" ");
    expect(text).toContain("But it failed!");
    expect(user.hp[0]).toBe(user.hp[1]);
});

test("교체할 포켓몬이 없으면 실패하고 체력도 잃지 않는다", () => {
    const user = mon("greedent", ["shed-tail"]);
    const me = [user];
    const foe = [mon("snorlax", ["splash"])];
    const text = doTurn(me, foe, user.moveset[0]).join(" ");
    expect(text).toContain("But it failed!");
    expect(user.hp[0]).toBe(user.hp[1]);
});

test("컴퓨터가 꼬리자르기를 쓰면 나온 포켓몬이 대타를 받는다 (플레이어가 고르지 않는다)", () => {
    // 컴퓨터가 쓰는 것을 만들기 위해 컴퓨터 쪽 앞 포켓몬이 이 기술밖에 없게 한다
    const cpuFront = mon("greedent", ["shed-tail"]);
    const cpuBack = mon("blissey", ["splash"]);
    const me = [mon("snorlax", ["splash"])];
    const cpu = [cpuFront, cpuBack];
    const max = cpuFront.hp[1];
    doTurn(me, cpu, me[0].moveset[0]);
    expect(cpu[0]).toBe(cpuBack);
    expect(cpuBack.substitute).toEqual({ hp: Math.floor(max / 4) });
    expect(cpuFront.hp[0]).toBe(max - Math.ceil(max / 2));
});
