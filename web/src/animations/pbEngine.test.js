// 날씨와 필드 연출 재생기(에센셜 연출): 좌표 규칙과 재생을 확인한다.
import fs from "fs";
import path from "path";

const PUBLIC = path.join(__dirname, "../../public");
const NAMES = ["sun", "rain", "sand", "hail", "snow", "electric-terrain", "grassy-terrain", "misty-terrain", "psychic-terrain"];

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
        expect(Object.keys(index).sort()).toEqual([...NAMES].sort());
        for (const name of NAMES) {
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

    test("없는 이름은 재생하지 않는다", async () => {
        await engine.prefetchFieldAnims();
        expect(engine.playFieldAnim(makeField(), "no-such-weather")).toBeNull();
    });
});
