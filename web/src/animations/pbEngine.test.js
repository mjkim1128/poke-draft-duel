// 날씨와 필드 연출 재생기(에센셜 연출): 좌표 규칙과 재생을 확인한다.
import fs from "fs";
import path from "path";

const PUBLIC = path.join(__dirname, "../../public");
const NAMES = ["sun", "rain", "sand", "hail", "snow", "electric-terrain", "grassy-terrain", "misty-terrain", "psychic-terrain"];
const BATTLER_NAMES = ["burn", "poison", "toxic", "paralysis", "sleep", "frozen", "confusion", "drowsy", "stat-up", "stat-down"];

let engine;
beforeEach(() => {
    jest.resetModules();
    global.fetch = jest.fn(async (url) => {
        const file = path.join(PUBLIC, String(url).replace(/^.*?\/pbanim\//, "pbanim/"));
        if (!fs.existsSync(file)) return { ok: false, status: 404, json: async () => ({}) };
        return { ok: true, status: 200, json: async () => JSON.parse(fs.readFileSync(file, "utf8")) };
    });
    engine = require("./pbEngine");
});

function makeField() {
    const field = document.createElement("div");
    field.getBoundingClientRect = () => ({ left: 0, top: 0, width: 500, height: 500, right: 500, bottom: 500 });
    return field;
}

describe("celPlace (에센셜의 초점 규칙)", () => {
    const geo = { u: { x: 130, y: 430 }, t: { x: 380, y: 140 }, k: 1, fieldW: 500, fieldH: 500 };
    const cel = (x, y, focus, pattern = 5) => [x, y, pattern, 100, 100, 0, 0, 0, 255, 1, focus];

    test("초점 2는 쓴 쪽, 초점 1은 맞는 쪽을 기준으로 읽는다", () => {
        expect(engine.celPlace(cel(128, 224, 2), geo)).toMatchObject({ x: 130, y: 430 });
        expect(engine.celPlace(cel(384, 96, 1), geo)).toMatchObject({ x: 380, y: 140 });
    });

    test("초점 3은 두 포켓몬을 잇는 선 위로 옮기고, 쓴 쪽이 오른쪽이면 뒤집는다", () => {
        const mid = engine.celPlace(cel(256, 160, 3), geo);
        expect(mid.x).toBeCloseTo(255);
        expect(mid.y).toBeCloseTo(285);
        const swapped = { ...geo, u: geo.t, t: geo.u };
        expect(engine.celPlace(cel(200, 200, 3, 5), swapped).flip).toBe(true);
        expect(engine.celPlace(cel(200, 200, 3, -1), swapped).flip).toBe(false);
    });

    test("초점 4는 화면 기준이다", () => {
        expect(engine.celPlace(cel(256, 192, 4), geo)).toMatchObject({ x: 250, y: 250 });
    });
});

describe("날씨와 필드 연출 데이터", () => {
    test("날씨 다섯 가지와 필드 네 가지가 모두 있고, 필요한 그림 파일도 있다", () => {
        const index = JSON.parse(fs.readFileSync(path.join(PUBLIC, "pbanim/index.json"), "utf8"));
        expect(Object.keys(index).sort()).toEqual([...NAMES, ...BATTLER_NAMES].sort());
        for (const name of [...NAMES, ...BATTLER_NAMES]) {
            const data = JSON.parse(fs.readFileSync(path.join(PUBLIC, "pbanim/a", index[name] + ".json"), "utf8"));
            expect(data.n).toBeGreaterThan(0);
            if (data.g) expect(fs.existsSync(path.join(PUBLIC, "pbanim/g", data.g))).toBe(true);
            for (const t of data.t) if (t.n && (t.t === 1 || t.t === 3)) expect(fs.existsSync(path.join(PUBLIC, "pbanim/g", t.n))).toBe(true);
        }
    });
});

describe("재생", () => {
    test("불러오기 전에는 재생하지 않고, 불러온 뒤에는 모두 재생한다", async () => {
        const field = makeField();
        expect(engine.playFieldAnim(field, "rain")).toBeNull();
        await engine.prefetchFieldAnims();
        for (const name of NAMES) {
            const fx = engine.playFieldAnim(field, name, { freezeFrame: 5 });
            expect(fx).not.toBeNull();
            expect(fx.duration).toBeGreaterThan(0);
            fx.cancel();
        }
        expect(field.children.length).toBe(0); // 연출용 층이 모두 치워진다
    });

    test("상태이상과 능력치 연출은 포켓몬 위에서 재생된다", async () => {
        await engine.prefetchFieldAnims();
        const field = makeField();
        field.innerHTML = `<div class="bp-opponent"><div class="current-pokemon-div"><img id="opp"></div></div><div class="bp-player"><div class="current-pokemon-div"><img id="me"></div></div>`;
        const rect = (x, y, w, h) => ({ left: x, top: y, width: w, height: h, right: x + w, bottom: y + h });
        field.querySelector("#me").getBoundingClientRect = () => rect(80, 380, 100, 100);
        field.querySelector("#opp").getBoundingClientRect = () => rect(330, 90, 100, 100);
        for (const name of BATTLER_NAMES) {
            const fx = engine.playFieldAnim(field, name, { on: "opponent", freezeFrame: 4 });
            expect(fx).not.toBeNull();
            fx.cancel();
        }
        // 포켓몬 그림을 찾지 못하면 재생하지 않는다
        expect(engine.playFieldAnim(makeField(), "burn", { on: "player" })).toBeNull();
    });

    test("없는 이름은 재생하지 않는다", async () => {
        await engine.prefetchFieldAnims();
        expect(engine.playFieldAnim(makeField(), "no-such-weather")).toBeNull();
    });
});

describe("기술 연출", () => {
    const sets = fs
        .readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/factory_sets.json"), "utf8")
        .split(/\r?\n/)
        .filter((l) => l.startsWith("{"))
        .map((l) => JSON.parse(l.trim().replace(/,$/, "")));

    function makeBattleField() {
        const field = document.createElement("div");
        field.innerHTML =
            '<div class="bp-opponent"><div class="current-pokemon-div"><img id="opp"></div></div>' +
            '<div class="bp-player"><div class="current-pokemon-div"><img id="me"></div></div>';
        const rect = (x, y, w, h) => ({ left: x, top: y, width: w, height: h, right: x + w, bottom: y + h });
        field.getBoundingClientRect = () => rect(0, 0, 500, 500);
        field.querySelector("#me").getBoundingClientRect = () => rect(80, 380, 100, 100);
        field.querySelector("#opp").getBoundingClientRect = () => rect(330, 90, 100, 100);
        return field;
    }

    test("세트에서 쓰는 모든 기술에 연출이 있고, 필요한 파일이 모두 있다", () => {
        const index = JSON.parse(fs.readFileSync(path.join(PUBLIC, "pbanim/moves.json"), "utf8"));
        const used = new Set(sets.flatMap((r) => r.set.moves.flatMap((slot) => slot.map((o) => o.slug))));
        expect([...used].filter((s) => !index[s])).toEqual([]);
        for (const slug of used) {
            for (const id of [index[slug].a, index[slug].o].filter(Boolean)) {
                const data = JSON.parse(fs.readFileSync(path.join(PUBLIC, "pbanim/a", id + ".json"), "utf8"));
                if (data.g) expect(fs.existsSync(path.join(PUBLIC, "pbanim/g", data.g))).toBe(true);
                for (const t of data.t) if (t.n && (t.t === 1 || t.t === 3)) expect(fs.existsSync(path.join(PUBLIC, "pbanim/g", t.n))).toBe(true);
            }
        }
    });

    test("불러오기 전에는 재생하지 않고, 불러온 뒤에는 원래 속도의 2배로 재생한다", async () => {
        const field = makeBattleField();
        expect(engine.playMoveAnim(field, "player", "thunderbolt")).toBeNull();
        await engine.prefetchMoveAnims(["thunderbolt"]);
        const idx = JSON.parse(fs.readFileSync(path.join(PUBLIC, "pbanim/moves.json"), "utf8"));
        const anim = JSON.parse(fs.readFileSync(path.join(PUBLIC, "pbanim/a", idx.thunderbolt.a + ".json"), "utf8"));
        const fx = engine.playMoveAnim(field, "player", "thunderbolt");
        expect(fx).not.toBeNull();
        expect(engine.MOVE_SPEED).toBe(2);
        expect(fx.duration).toBeCloseTo((anim.n * 1000) / 20 / 2);
        fx.cancel();
    });

    test("인파이트 같은 연출은 포켓몬 그림을 움직이고, 끝나면 원래대로 돌려놓는다", async () => {
        await engine.prefetchMoveAnims(["close-combat"]);
        const field = makeBattleField();
        const me = field.querySelector("#me");
        const fx = engine.playMoveAnim(field, "player", "close-combat", false, { freezeFrame: 3 });
        expect(me.style.transform).not.toBe("");
        fx.cancel();
        expect(me.style.transform).toBe("");
        expect(field.children.length).toBe(2);
    });

    test("자기 자신에게 쓰는 기술과 상대가 쓰는 기술도 오류 없이 재생된다", async () => {
        await engine.prefetchMoveAnims(["swords-dance", "thunderbolt", "ice-beam", "flamethrower"]);
        const sd = engine.playMoveAnim(makeBattleField(), "player", "swords-dance", true, { freezeFrame: 8 });
        expect(sd).not.toBeNull();
        sd.cancel();
        for (const slug of ["thunderbolt", "ice-beam", "flamethrower"]) {
            const fx = engine.playMoveAnim(makeBattleField(), "opponent", slug, false, { freezeFrame: 10 });
            expect(fx).not.toBeNull();
            fx.cancel();
        }
    });
});
