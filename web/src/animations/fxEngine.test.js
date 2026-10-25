// 쇼다운에서 뽑아 온 연출 코드가 우리 엔진의 함수들만으로 끝까지 실행되는지 확인한다.
import { MOVES, OTHER, EFFECTS } from "./psAnims.generated";
import { stageBox, hasMoveAnim } from "./fxEngine";

function recordingScene() {
    const calls = { effects: [], backgrounds: 0, waits: 0 };
    const sprite = (z) => ({
        x: 0, y: 0, z, sp: { url: "x.png", w: 96, h: 96 },
        behind: (n) => z + (z > 0 ? 1 : -1) * n,
        leftof: (n) => (z > 0 ? 1 : -1) * n,
        isMissedPokemon: false,
        anim() { return this; },
        delay() { return this; },
    });
    const scene = {
        battle: { mySide: sprite(0) },
        $bg: { animate() { return this; }, delay() { return this; } },
        showEffect(effect) { calls.effects.push(effect); },
        backgroundEffect() { calls.backgrounds++; },
        wait() { calls.waits++; },
    };
    return { scene, calls, me: sprite(0), foe: sprite(200) };
}

test("뽑아 온 기술 연출이 모두 오류 없이 실행된다", () => {
    expect(Object.keys(MOVES).length).toBeGreaterThan(0);
    for (const [name, def] of Object.entries(MOVES)) {
        const { scene, me, foe } = recordingScene();
        expect(() => def.anim(scene, [me, foe])).not.toThrow();
        expect(name).toBeTruthy();
    }
});

test("연출에서 쓰는 효과 이미지는 모두 표에 있다", () => {
    for (const def of Object.values(MOVES)) {
        const { scene, calls, me, foe } = recordingScene();
        def.anim(scene, [me, foe]);
        for (const effect of calls.effects) {
            if (typeof effect === "string") expect(EFFECTS[effect]).toBeDefined();
        }
    }
});

test("slug(하이픈 있는 이름)로도 연출을 찾는다", () => {
    expect(hasMoveAnim("swords-dance")).toBe(true);
    expect(hasMoveAnim("thunderbolt")).toBe(true);
    expect(hasMoveAnim("no-such-move")).toBe(false);
    expect(Object.keys(OTHER)).toContain("shake");
});

test("무대 좌표: 내 포켓몬은 (210, 245), 상대는 (430, 135) 근처 중심에 놓인다", () => {
    const center = (z) => {
        const b = stageBox({ x: 0, y: 0, z }, { w: 100, h: 100 });
        return [b.left + b.width / 2, b.top + b.height / 2];
    };
    expect(Math.abs(center(0)[0] - 210)).toBeLessThanOrEqual(1);
    expect(Math.abs(center(0)[1] - 245)).toBeLessThanOrEqual(1);
    expect(Math.abs(center(200)[0] - 430)).toBeLessThanOrEqual(1);
    expect(Math.abs(center(200)[1] - 135)).toBeLessThanOrEqual(1);
});

describe("모든 연출이 엔진 위에서 끝까지 재생된다", () => {
    test("경고 없이 재생된다 (터지는 효과를 쓰는 기술까지 포함)", () => {
        document.body.innerHTML =
            '<div id="f"><div class="bp-player"><div class="current-pokemon-div"><div></div><div><img></div></div></div>' +
            '<div class="bp-opponent"><div class="current-pokemon-div"><div></div><div><img></div></div></div></div>';
        Element.prototype.animate = jest.fn(() => ({ cancel() {} }));
        jest.useFakeTimers();
        const warn = jest.spyOn(console, "warn").mockImplementation(() => {});
        const { playMoveAnim } = require("./fxEngine");
        const failed = [];
        for (const name of Object.keys(MOVES)) {
            const play = playMoveAnim(document.getElementById("f"), "player", name);
            if (play) play.cancel();
            else failed.push(name);
        }
        const warned = warn.mock.calls.map((c) => c[1]);
        warn.mockRestore();
        delete Element.prototype.animate;
        jest.useRealTimers();
        expect(failed).toEqual([]);
        expect(warned).toEqual([]);
    });
});

describe("재생 시간 배율", () => {
    function fakeField() {
        document.body.innerHTML =
            '<div id="f"><div class="bp-player"><div class="current-pokemon-div"><div></div><div><img></div></div></div>' +
            '<div class="bp-opponent"><div class="current-pokemon-div"><div></div><div><img></div></div></div></div>';
        return document.getElementById("f");
    }

    beforeEach(() => {
        Element.prototype.animate = jest.fn(() => ({ cancel() {} }));
    });
    afterEach(() => {
        delete Element.prototype.animate;
        jest.useRealTimers();
    });

    test("포톤가이저는 배율 0.5로 원래의 절반 남짓한 시간에 끝난다", () => {
        const { playMoveAnim } = require("./fxEngine");
        const { TIME_SCALE } = require("./moveTuning");
        jest.useFakeTimers();
        const original = TIME_SCALE.photongeyser;
        expect(original).toBe(0.5);
        TIME_SCALE.photongeyser = 1;
        const full = playMoveAnim(fakeField(), "player", "photon-geyser");
        full.cancel();
        TIME_SCALE.photongeyser = original;
        const shortened = playMoveAnim(fakeField(), "player", "photon-geyser");
        shortened.cancel();
        expect(full.duration).toBeGreaterThan(2000);
        expect(shortened.duration).toBeLessThan(full.duration * 0.6);
        expect(shortened.duration).toBeGreaterThan(full.duration * 0.4);
    });

    test("배율이 없는 기술은 그대로 재생된다", () => {
        const { playMoveAnim } = require("./fxEngine");
        jest.useFakeTimers();
        const a = playMoveAnim(fakeField(), "player", "thunderbolt");
        a.cancel();
        expect(a.duration).toBeGreaterThan(500);
    });
});

test("세트에서 쓰는 모든 기술에 연출이 있다 (없는 두 기술은 비슷한 기술의 연출을 빌린다)", () => {
    const fs = require("fs");
    const path = require("path");
    const rows = fs
        .readFileSync(path.join(__dirname, "../../../api/src/main/resources/data/factory_sets.json"), "utf8")
        .split(/\r?\n/)
        .filter((l) => l.startsWith("{"))
        .map((l) => JSON.parse(l.trim().replace(/,$/, "")));
    const used = new Set(rows.flatMap((r) => r.set.moves.flatMap((slot) => slot.map((o) => o.slug))));
    const missing = [...used].filter((s) => !hasMoveAnim(s));
    expect(missing).toEqual([]);
});
