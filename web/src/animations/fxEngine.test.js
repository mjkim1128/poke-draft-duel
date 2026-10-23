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
