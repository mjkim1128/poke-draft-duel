// 쇼다운 기술 연출(psAnims.generated.js)을 우리 배틀 화면에서 재생하는 작은 엔진.
//
// 쇼다운의 연출 코드는 scene.showEffect(...), scene.backgroundEffect(...), sprite.anim(...) 같은 호출로
// 쓰여 있다. 여기서는 같은 이름의 함수를 만들어 주고, 쇼다운의 좌표(x, y, z)를 우리 필드 위의
// 화면 좌표로 바꿔서 Web Animations API로 움직인다.
//
// 쇼다운 좌표: x는 오른쪽이 +, y는 위쪽이 +, z는 내 쪽이 0이고 상대 쪽이 200이다.
// 무대는 640x360이고, 내 포켓몬의 중심이 (210, 245), 상대 포켓몬의 중심이 (430, 135)에 놓인다.
import { EFFECTS, FX_BASE, MOVES, OTHER } from "./psAnims.generated";
import { TIME_SCALE } from "./moveTuning";

const STAGE_ME = { x: 210, y: 245 };
const STAGE_OPP = { x: 430, y: 135 };
const SAMPLES = 24; // 곡선 움직임을 이만큼의 조각으로 나눠서 재생한다

// 쇼다운의 움직임 곡선들 (0~1 -> 0~1)
const EASING = {
    linear: (x) => x,
    quadUp: (x) => 1 - (1 - x) * (1 - x),
    quadDown: (x) => x * x,
    ballisticUp: (x) => -3 * x * x + 4 * x,
    ballisticDown: (x) => 1 - (-3 * (1 - x) * (1 - x) + 4 * (1 - x)),
    swing: (x) => 0.5 - Math.cos(x * Math.PI) / 2,
};

// 쇼다운 좌표 -> 무대 위의 상자 (쇼다운 BattleScene.pos와 같은 계산)
export function stageBox(loc, obj) {
    const l = { x: 0, y: 0, z: 0, scale: 1, opacity: 1, ...loc };
    const xscale = l.xscale || l.xscale === 0 ? l.xscale : l.scale;
    const yscale = l.yscale || l.yscale === 0 ? l.yscale : l.scale;
    let scale = 1.5 - 0.5 * (l.z / 200);
    if (scale < 0.1) scale = 0.1;
    let left = 210 + (410 - 190) * (l.z / 200);
    let top = 245 + (135 - 245) * (l.z / 200);
    left += Math.floor(l.x * scale);
    top -= Math.floor(l.y * scale);
    const width = Math.floor(obj.w * scale * xscale);
    const height = Math.floor(obj.h * scale * yscale);
    const hoffset = Math.floor((obj.h - (obj.y || 0) * 2) * scale * yscale);
    left -= Math.floor(width / 2);
    top -= Math.floor(hoffset / 2);
    return { left, top, width, height, opacity: l.opacity };
}

// 전환 이름에 맞춰 상자의 각 값에 쓸 곡선을 고른다 (쇼다운 BattleScene.posT)
function easingMap(transition, endLoc, startBox, endBox) {
    const map = { left: "linear", top: "linear", width: "linear", height: "linear", opacity: "linear" };
    const t = transition;
    const up = endBox.top < startBox.top;
    if (t === "ballistic") map.top = up ? "ballisticUp" : "ballisticDown";
    else if (t === "ballisticUnder") map.top = up ? "ballisticDown" : "ballisticUp";
    else if (t === "ballistic2") map.top = up ? "quadUp" : "quadDown";
    else if (t === "ballistic2Back" || t === "ballistic2back") map.top = endLoc.z > 0 ? "quadUp" : "quadDown";
    else if (t === "ballistic2Under") map.top = up ? "quadDown" : "quadUp";
    else if (t === "swing") map.left = map.top = map.width = map.height = "swing";
    else if (t === "accel") map.left = map.top = map.width = map.height = "quadDown";
    else if (t === "decel") map.left = map.top = map.width = map.height = "quadUp";
    return map;
}

// 상자 하나에서 다른 상자까지의 움직임을 잘게 나눈 키프레임으로 만든다
function boxKeyframes(from, to, map, toStyle) {
    const frames = [];
    for (let i = 0; i <= SAMPLES; i++) {
        const x = i / SAMPLES;
        const at = (key) => {
            const e = EASING[map[key]] || EASING.linear;
            return from[key] + (to[key] - from[key]) * e(x);
        };
        frames.push({ offset: x, ...toStyle(at) });
    }
    return frames;
}

// 필드 위에서 두 포켓몬 그림의 중심 위치를 재서, 무대 좌표를 필드 픽셀로 바꾸는 함수를 만든다
function makeMapper(field) {
    const fieldRect = field.getBoundingClientRect();
    const center = (img) => {
        const r = img.getBoundingClientRect();
        return { x: r.left - fieldRect.left + r.width / 2, y: r.top - fieldRect.top + r.height / 2, w: r.width };
    };
    const meImg = field.querySelector(".bp-player .current-pokemon-div img");
    const oppImg = field.querySelector(".bp-opponent .current-pokemon-div img");
    if (!meImg || !oppImg) return null;
    const me = center(meImg);
    const opp = center(oppImg);
    const kx = (opp.x - me.x) / (STAGE_OPP.x - STAGE_ME.x);
    const ky = (opp.y - me.y) / (STAGE_OPP.y - STAGE_ME.y);
    const k = (Math.abs(kx) + Math.abs(ky)) / 2;
    return {
        k,
        me,
        opp,
        meImg,
        oppImg,
        x: (stageX) => me.x + (stageX - STAGE_ME.x) * kx,
        y: (stageY) => me.y + (stageY - STAGE_ME.y) * ky,
    };
}

// 무대 상자 -> 필드 위의 CSS 값 (왼쪽, 위, 너비, 높이)
function fieldBox(map, box) {
    const w = box.width * map.k;
    const h = box.height * map.k;
    return {
        left: map.x(box.left + box.width / 2) - w / 2,
        top: map.y(box.top + box.height / 2) - h / 2,
        width: w,
        height: h,
        opacity: box.opacity,
    };
}

export function hasMoveAnim(slug) {
    return !!MOVES[String(slug).replace(/-/g, "")];
}

// 기술 연출을 재생한다. 반환: { duration(ms), cancel() }. 재생할 수 없으면 null.
//   field: 배틀 필드 요소(.bp-field), side: 기술을 쓴 쪽("player" | "opponent"), slug: 기술 이름
export function playMoveAnim(field, side, slug) {
    const id = String(slug).replace(/-/g, "");
    const anim = MOVES[id];
    const speed = TIME_SCALE[id] || 1; // 1보다 작으면 그만큼 짧게 재생한다
    if (!field || !anim || typeof field.animate !== "function") return null;
    const map = makeMapper(field);
    if (!map) return null;

    const layer = document.createElement("div");
    layer.className = "fx-layer";
    field.appendChild(layer);
    const running = [];
    let end = 0; // 모든 연출이 끝나는 시각 (ms)
    const run = (el, frames, delay, duration) => {
        const a = el.animate(frames, { delay, duration: Math.max(duration, 1), fill: "forwards", easing: "linear" });
        running.push(a);
        end = Math.max(end, delay + Math.max(duration, 1));
    };

    // ---- 포켓몬 그림 (쇼다운의 PokemonSprite 역할)
    const makeSprite = (isMe) => {
        const img = isMe ? map.meImg : map.oppImg;
        const rest = { x: 0, y: 0, z: isMe ? 0 : 200 };
        const restBox = stageBox(rest, { w: 96, h: 96 });
        const restField = fieldBox(map, restBox);
        const restCx = restField.left + restField.width / 2;
        const restCy = restField.top + restField.height / 2;
        const shownW = isMe ? map.me.w : map.opp.w;
        const scaleZ = 1.5 - 0.5 * (rest.z / 200);
        const sprite = {
            ...rest,
            isFrontSprite: !isMe,
            // 쇼다운 쪽 크기 단위로, 화면에서 보이는 크기와 같아지는 값
            sp: { url: img.currentSrc || img.src, w: shownW / (map.k * scaleZ), h: shownW / (map.k * scaleZ) },
            cursor: 0,
            cur: { ...rest, scale: 1, opacity: 1 },
            behind(offset) {
                return this.z + (this.isFrontSprite ? 1 : -1) * offset;
            },
            leftof(offset) {
                return this.x + (this.isFrontSprite ? 1 : -1) * offset;
            },
            isMissedPokemon: false,
            delay(time) {
                this.cursor += time * speed;
                return this;
            },
            anim(endLoc, transition) {
                const to = { ...rest, scale: 1, opacity: 1, time: 500, ...endLoc };
                const from = this.cur;
                const fromBox = fieldBox(map, stageBox(from, { w: 96, h: 96 }));
                const toBox = fieldBox(map, stageBox(to, { w: 96, h: 96 }));
                const easing = easingMap(
                    transition,
                    to,
                    stageBox(from, { w: 96, h: 96 }),
                    stageBox(to, { w: 96, h: 96 })
                );
                const frames = boxKeyframes(fromBox, toBox, easing, (at) => ({
                    transform:
                        `translate(${at("left") + at("width") / 2 - restCx}px, ${at("top") + at("height") / 2 - restCy}px) ` +
                        `scale(${at("width") / restField.width}, ${at("height") / restField.height})`,
                    opacity: at("opacity"),
                }));
                run(img, frames, this.cursor, to.time * speed);
                this.cursor += to.time * speed;
                this.cur = { ...to };
                return this;
            },
        };
        return sprite;
    };
    const sprites = { player: makeSprite(true), opponent: makeSprite(false) };
    const attacker = side === "player" ? sprites.player : sprites.opponent;
    const defender = side === "player" ? sprites.opponent : sprites.player;

    // ---- 쇼다운의 BattleScene 역할
    const scene = {
        timeOffset: 0,
        battle: { mySide: sprites.player, yourSide: sprites.opponent },
        // 쇼다운의 배경 요소(jQuery)를 직접 건드리는 연출이 조금 있는데, 우리는 따로 그리지 않는다
        $bg: { animate() { return this; }, delay() { return this; } },
        wait(time) {
            this.timeOffset += time * speed;
        },
        showEffect(effect, start, endLoc, transition, after, css) {
            const obj = typeof effect === "string" ? EFFECTS[effect] : effect;
            if (!obj) return null;
            const url = /^(https?:|data:|\/)/.test(obj.url) ? obj.url : FX_BASE + obj.url;
            const el = document.createElement("img");
            el.src = url;
            el.style.cssText = "position:absolute;display:block;pointer-events:none;image-rendering:pixelated;";
            if (css && typeof css === "object") Object.assign(el.style, css);
            layer.appendChild(el);

            const s = { ...start, time: (start.time || 0) * speed + this.timeOffset };
            const e = { ...endLoc };
            e.time = (e.time || (start.time || 0) + 500) * speed + this.timeOffset;
            if (!e.scale && e.scale !== 0 && s.scale) e.scale = s.scale;
            if (!e.xscale && e.xscale !== 0 && s.xscale) e.xscale = s.xscale;
            if (!e.yscale && e.yscale !== 0 && s.yscale) e.yscale = s.yscale;
            const merged = { ...s, ...e };

            const startStage = stageBox(s, obj);
            const endStage = stageBox(merged, obj);
            const startBox = fieldBox(map, startStage);
            const endBox = fieldBox(map, endStage);
            const set = (b) => {
                el.style.left = b.left + "px";
                el.style.top = b.top + "px";
                el.style.width = b.width + "px";
                el.style.height = b.height + "px";
            };
            set(startBox);
            el.style.opacity = "0";
            const style = (at) => ({
                left: at("left") + "px",
                top: at("top") + "px",
                width: at("width") + "px",
                height: at("height") + "px",
                opacity: at("opacity"),
            });
            const easing = easingMap(transition, merged, startStage, endStage);
            run(el, boxKeyframes(startBox, endBox, easing, style), s.time, merged.time - s.time);
            let t = merged.time;
            if (after === "fade") {
                run(el, [{ opacity: endBox.opacity }, { opacity: 0 }], t, 100);
            } else if (after === "explode") {
                const big = { ...merged, opacity: 0 };
                if (big.scale) big.scale *= 3;
                if (big.xscale) big.xscale *= 3;
                if (big.yscale) big.yscale *= 3;
                const bigBox = fieldBox(map, stageBox(big, obj));
                run(el, boxKeyframes(endBox, bigBox, easingMap("linear"), style), t, 200);
            }
            return el;
        },
        backgroundEffect(bgColor, durationMs, opacity = 1, delayMs = 0) {
            const bg = bgColor;
            const duration = durationMs * speed;
            const delay = delayMs * speed;
            const ramp = Math.min(250, duration);
            const el = document.createElement("div");
            el.style.cssText = `position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;opacity:0;background:${bg};background-size:cover;`;
            layer.appendChild(el);
            const total = duration + ramp;
            run(
                el,
                [
                    { opacity: 0, offset: 0 },
                    { opacity, offset: ramp / total },
                    { opacity, offset: duration / total },
                    { opacity: 0, offset: 1 },
                ],
                delay,
                total
            );
        },
    };

    // 쇼다운 연출 안에서는 다른 연출을 BattleOtherAnims 로 부르는데, 생성 파일 안에서 이미 이어 두었다.
    try {
        anim.anim(scene, [attacker, defender]);
    } catch (err) {
        // 연출이 잘못되어도 배틀 진행에는 영향이 없어야 한다
        console.warn("기술 연출을 재생하지 못했습니다:", slug, err);
    }
    // 포켓몬 그림 쪽 움직임이 끝나는 시각도 포함
    end = Math.max(end, sprites.player.cursor, sprites.opponent.cursor);

    let cancelled = false;
    const finish = () => {
        if (cancelled) return;
        cancelled = true;
        // 그림에 걸어 둔 움직임을 모두 걷어 원래 자리로 돌려놓는다
        running.forEach((a) => a.cancel());
        layer.remove();
    };
    const timer = setTimeout(finish, end + 50);
    return {
        duration: end,
        cancel() {
            clearTimeout(timer);
            finish();
        },
    };
}

export const __test = { stageBox, EASING, OTHER };
