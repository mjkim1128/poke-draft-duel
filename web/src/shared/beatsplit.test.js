// 기술을 쓴 박자가 "연출 -> 데미지 -> 그 뒤에 생기는 일" 순서로 나뉘는지 확인한다.
import fs from "fs";
import path from "path";
import { doTurn, getBaseStats, hpCalc } from "shared";

const read = (file) => JSON.parse(fs.readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/" + file), "utf8"));
const MOVES = new Map(read("moves.json").map((m) => [m.name, m]));
const ITEMS = new Map(read("items.json").map((i) => [i.name, i]));
const POKEMON = new Map(read("pokemon.json").map((p) => [p.name, p]));
const clone = (x) => JSON.parse(JSON.stringify(x));

function mon(species, moves, item = null) {
    const p = clone(POKEMON.get(species));
    p.base_stats = getBaseStats(p);
    p.hp = [hpCalc(p.base_stats[0]) * 4, hpCalc(p.base_stats[0]) * 4];
    p.stat_levels = Array(7).fill(0);
    p.item = item ? clone(ITEMS.get(item)) : null;
    p.originalItem = p.item;
    p.ability = null;
    p.baseAbility = null;
    p.moveset = moves.map((n) => {
        const m = clone(MOVES.get(n));
        m.accuracy = null; // 빗나가지 않게
        return m;
    });
    Object.assign(p, { status: null, confusion: null, consumedItem: null, lockedMove: null, charging: null, mustRecharge: false, lastMoveName: null, moveRepeatCount: 0 });
    return p;
}
const team = (a) => [a, mon("blissey", ["splash"])];
const framesOf = (me, foe) => doTurn(me, foe, me[0].moveset[0]).frames;
const moveFrames = (frames) => {
    const i = frames.findIndex((f) => f.anim);
    return frames.slice(i, i + 3);
};

test("연출 박자는 체력이 그대로이고, 그다음 박자에서 체력이 줄어든다", () => {
    const me = team(mon("garchomp", ["tackle"]));
    const foe = team(mon("snorlax", ["splash"]));
    const frames = framesOf(me, foe);
    const [first, damage] = moveFrames(frames);
    expect(first.anim.move).toBe("tackle");
    expect(first.text.length).toBe(1);
    expect(first.text[0]).toContain("used");
    expect(first.opponentPokemon[0].hp[0]).toBe(first.opponentPokemon[0].hp[1]); // 연출 때는 아직 멀쩡하다
    expect(damage.text.join(" ")).toMatch(/lost \d+% HP/);
    expect(damage.opponentPokemon[0].hp[0]).toBeLessThan(damage.opponentPokemon[0].hp[1]);
    expect(damage.anim).toBeUndefined();
});

test("쓰러뜨릴 때는 체력이 다 줄어든 뒤에 기절한다", () => {
    const me = team(mon("garchomp", ["tackle"]));
    const foe = team(mon("snorlax", ["splash"]));
    foe[0].hp[0] = 1;
    foe[1].hp[0] = 0; // 바꿔 나올 포켓몬이 없어야 도망치지 않고 그대로 쓰러진다
    const [first, damage, after] = moveFrames(framesOf(me, foe));
    expect(first.opponentPokemon[0].hp[0]).toBe(1);
    expect(damage.opponentPokemon[0].hp[0]).toBe(0);
    expect(damage.opponentPokemon[0].faintPending).toBe(true); // 체력 바는 0이지만 아직 서 있다
    expect(after.text.join(" ")).toContain("fainted");
    expect(after.opponentPokemon[0].faintPending).toBeUndefined();
});

test("적중하면 능력치가 변하는 기술은 데미지 뒤에 능력치가 바뀌고 그 연출이 나온다", () => {
    const me = team(mon("garchomp", ["close-combat"]));
    const foe = team(mon("snorlax", ["splash"]));
    const [first, damage, after] = moveFrames(framesOf(me, foe));
    expect(first.playerPokemon[0].stat_levels[1]).toBe(0);
    expect(damage.playerPokemon[0].stat_levels[1]).toBe(0); // 데미지 때까지는 그대로
    expect(after.text.join(" ")).toContain("lowered");
    expect(after.playerPokemon[0].stat_levels[1]).toBe(-1);
    expect(after.statusAnims).toEqual([{ name: "stat-down", side: "player" }]);
});

test("생명의구슬 부작용으로 줄어드는 체력도 데미지 뒤에 줄어든다", () => {
    const me = team(mon("garchomp", ["tackle"], "life-orb"));
    const foe = team(mon("snorlax", ["splash"]));
    const [first, damage, after] = moveFrames(framesOf(me, foe));
    const full = first.playerPokemon[0].hp[1];
    expect(first.playerPokemon[0].hp[0]).toBe(full);
    expect(damage.playerPokemon[0].hp[0]).toBe(full); // 맞히는 동안 쓴 쪽은 멀쩡하다
    expect(after.text.join(" ")).toContain("Life Orb");
    expect(after.playerPokemon[0].hp[0]).toBeLessThan(full);
});

test("상대가 쓴 기술도 같은 순서로 나뉜다", () => {
    const me = team(mon("snorlax", ["splash"]));
    const foe = team(mon("garchomp", ["tackle"]));
    const frames = framesOf(me, foe);
    const [first, damage] = moveFrames(frames);
    expect(first.anim.side).toBe("opponent");
    expect(first.playerPokemon[0].hp[0]).toBe(first.playerPokemon[0].hp[1]);
    expect(damage.playerPokemon[0].hp[0]).toBeLessThan(damage.playerPokemon[0].hp[1]);
});

test("변화 기술은 연출 박자 다음에 효과 박자가 온다", () => {
    const me = team(mon("garchomp", ["swords-dance"]));
    const foe = team(mon("snorlax", ["splash"]));
    const [first, effect] = moveFrames(framesOf(me, foe));
    expect(first.playerPokemon[0].stat_levels[0]).toBe(0);
    expect(effect.playerPokemon[0].stat_levels[0]).toBe(2);
    expect(effect.statusAnims).toEqual([{ name: "stat-up", side: "player" }]);
});

test("교체해 나온 포켓몬이 깐 날씨와 필드의 연출 이름을 알 수 있다", () => {
    const { doSwitchWithField } = require("shared");
    const me = [mon("snorlax", ["splash"]), mon("blissey", ["splash"])];
    const ability = (p, name) => Object.assign(p, { ability: { name }, baseAbility: { name } });
    const foe1 = [mon("snorlax", ["splash"]), ability(mon("garchomp", ["splash"]), "sand-stream")];
    expect(doSwitchWithField(foe1, 1, { foeTeam: me }).fieldAnim).toBe("sand");
    const foe2 = [mon("snorlax", ["splash"]), ability(mon("garchomp", ["splash"]), "electric-surge")];
    expect(doSwitchWithField(foe2, 1, { foeTeam: me }).fieldAnim).toBe("electric-terrain");
    const foe3 = [mon("snorlax", ["splash"]), mon("blissey", ["splash"])];
    expect(doSwitchWithField(foe3, 1, { foeTeam: me }).fieldAnim).toBe(null);
});
