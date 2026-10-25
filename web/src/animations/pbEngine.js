// 날씨와 필드(테레인)의 공통 연출 재생기. "The Gen 9 Move Animation Project"(포켓몬 에센셜용 연출 모음)의
// 연출을 재생한다. (기술 연출은 쇼다운 연출을 쓰고, 이쪽은 날씨와 필드가 시작될 때만 쓴다.)
//
// 에센셜의 연출은 20프레임/초이고, 프레임마다 "조각(cel)" 목록이 있다. 조각 하나는 스프라이트 시트(192x192 칸,
// 가로 5칸)에서 한 칸을 잘라 어디에, 얼마나 크게, 얼마나 돌려서, 얼마나 투명하게 그릴지 적은 것이다.
// 조각마다 "초점"이 있어서 어디를 기준으로 좌표를 읽을지가 다르다 (에센셜 007_BattleAnimationPlayer.rb와 같은 규칙).
//   1 = 맞는 포켓몬 기준, 2 = 쓴 포켓몬 기준, 3 = 쓴 포켓몬과 맞는 포켓몬을 잇는 선 위, 4 = 화면 기준
// 날씨와 필드 연출은 대부분 화면 기준이고, 포켓몬 그림을 움직이는 조각(-1, -2번)은 쓰지 않는다.
//
// 연출 데이터는 web/tools/pb/convert-pb-anims.py가 만들어 public/pbanim에 둔다.
//   index.json         이름(rain, grassy-terrain...) -> 연출 파일 id
//   a/<id>.json        연출 한 개 (g: 시트, h: 색조, n: 프레임 수, f: 프레임들, t: 타이밍들)
//   g/<name>.png       스프라이트 시트와 배경 그림
const BASE = (process.env.PUBLIC_URL || "") + "/pbanim/";
const FPS = 20;
// 에센셜 화면은 512x384이고, 기본 위치는 쓴 쪽 (128, 224), 맞는 쪽 (384, 96)이다
const SCREEN = { w: 512, h: 384 };
const USER = { x: 128, y: 224 };
const TARGET = { x: 384, y: 96 };
const CELL = 192;
const MAX_CELS = 60;
// 이보다 긴 연출은 이 길이에 맞춰 빠르게 재생한다 (70프레임 = 3.5초)
const MAX_FRAMES = 70;

let indexPromise = null;
let index = null;
const loaded = new Map(); // 연출 파일 id -> 데이터
const loading = new Map(); // 연출 파일 id -> Promise
const pictures = new Map(); // 그림 이름 -> Image

function fetchJson(url) {
    return fetch(url).then((r) => {
        if (!r.ok) throw new Error(url + " " + r.status);
        return r.json();
    });
}

export function loadIndex() {
    if (!indexPromise) {
        indexPromise = fetchJson(BASE + "index.json")
            .then((j) => {
                index = j;
                return j;
            })
            .catch((e) => {
                indexPromise = null;
                throw e;
            });
    }
    return indexPromise;
}

function picture(name) {
    if (!name) return null;
    let img = pictures.get(name);
    if (!img && typeof Image !== "undefined") {
        img = new Image();
        img.src = BASE + "g/" + name;
        pictures.set(name, img);
    }
    return img;
}

function loadAnim(id) {
    if (loaded.has(id)) return Promise.resolve(loaded.get(id));
    if (!loading.has(id)) {
        loading.set(
            id,
            fetchJson(BASE + "a/" + id + ".json").then((data) => {
                loaded.set(id, data);
                picture(data.g);
                for (const t of data.t) if (t.n && (t.t === 1 || t.t === 3)) picture(t.n);
                return data;
            })
        );
    }
    return loading.get(id);
}

// 날씨와 필드 연출을 미리 불러온다 (배틀이 시작될 때). 끝나면 playFieldAnim이 바로 재생할 수 있다.
export function prefetchFieldAnims() {
    return loadIndex()
        .then((idx) => Promise.all(Object.values(idx).map((id) => loadAnim(id).catch(() => null))))
        .catch(() => null);
}

export function hasFieldAnim(name) {
    return !!index && !!index[name];
}

// ---- 좌표 계산 (에센셜의 transformPoint, FOCUS 규칙)
// 쓴 쪽 기본 위치와 맞는 쪽 기본 위치를 잇는 선을, 실제 두 포켓몬의 중심을 잇는 선으로 옮긴다
function transformPoint(px, py, u, t) {
    const fx = (px - USER.x) / (TARGET.x - USER.x);
    const fy = (py - USER.y) / (TARGET.y - USER.y);
    return { x: u.x + fx * (t.x - u.x), y: u.y + fy * (t.y - u.y) };
}

// 조각 하나의 위치 (필드 픽셀)와 거울 반전 여부
export function celPlace(c, geo) {
    const [x, y, pattern, , , , , , , , focus] = c;
    const { u, t, k, fieldW, fieldH } = geo;
    if (focus === 1) return { x: t.x + (x - TARGET.x) * k, y: t.y + (y - TARGET.y) * k, flip: false };
    if (focus === 2) return { x: u.x + (x - USER.x) * k, y: u.y + (y - USER.y) * k, flip: false };
    if (focus === 3) {
        const p = transformPoint(x, y, u, t);
        // 쓴 쪽이 맞는 쪽보다 오른쪽에 있으면 그림을 좌우로 뒤집는다 (포켓몬 그림은 제외)
        return { x: p.x, y: p.y, flip: u.x > t.x && pattern >= 0 };
    }
    return { x: (x * fieldW) / SCREEN.w, y: (y * fieldH) / SCREEN.h, flip: false };
}

// 타이밍의 배경/전경 처리 (에센셜 playTiming): 그림이나 색을 깔고, 시간에 따라 움직이거나 색을 바꾼다
function makePlane(layer, zIndex) {
    const img = document.createElement("div");
    img.style.cssText = `position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;opacity:0;z-index:${zIndex};background-repeat:repeat;background-size:100% 100%;`;
    const color = document.createElement("div");
    color.style.cssText = `position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;opacity:0;z-index:${zIndex};`;
    layer.appendChild(color);
    layer.appendChild(img);
    return { img, color, graphic: null, ox: 0, oy: 0, opacity: 0, col: [0, 0, 0, 0], colorOpacity: 0, colorCol: [0, 0, 0, 0] };
}

const rgba = (c) => `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${Math.max(0, Math.min(255, c[3])) / 255})`;

// scale: 배경을 얼마나 진하게 보일지 (필드 연출은 경기장이 비쳐 보이도록 반투명으로 쓴다)
function renderPlane(p, sx, sy, scale = 1) {
    if (p.graphic) {
        p.img.style.backgroundImage = `url(${BASE}g/${p.graphic})`;
        p.img.style.backgroundPosition = `${-p.ox * sx}px ${-p.oy * sy}px`;
        p.img.style.opacity = String((Math.max(0, Math.min(255, p.opacity)) / 255) * scale);
        p.color.style.opacity = "0";
    } else {
        p.img.style.opacity = "0";
        p.color.style.background = rgba([p.colorCol[0], p.colorCol[1], p.colorCol[2], 255]);
        p.color.style.opacity = String((Math.max(0, Math.min(255, p.colorOpacity)) / 255) * scale);
    }
}

function playTiming(anim, frame, bg, fo, old) {
    for (const i of anim.t) {
        if (!i.d || i.d <= 0) continue;
        if (i.f + i.d < frame || i.f >= frame) continue;
        const fraction = (frame - i.f) / i.d;
        const planes = i.t === 2 ? [bg, old.bg] : i.t === 4 ? [fo, old.fo] : null;
        if (!planes) continue;
        const [p, o] = planes;
        const c = i.c || [];
        if (p.graphic) {
            if (i.x !== undefined) p.ox = o.ox - (i.x - o.ox) * fraction;
            if (i.y !== undefined) p.oy = o.oy - (i.y - o.oy) * fraction;
            if (i.o !== undefined) p.opacity = o.opacity + (i.o - o.opacity) * fraction;
        } else if (i.o !== undefined) {
            p.colorOpacity = o.opacity + (i.o - o.opacity) * fraction;
        }
        if (c.length && !p.graphic) {
            for (let n = 0; n < 4; n++) p.colorCol[n] = o.col[n] + (c[n] - o.col[n]) * fraction;
        }
    }
    for (const i of anim.t) {
        if (i.f !== frame) continue;
        if (i.t === 1 || i.t === 3) {
            const p = i.t === 1 ? bg : fo;
            if (i.n) {
                p.graphic = i.n;
                p.ox = -(i.x || 0);
                p.oy = -(i.y || 0);
                p.opacity = i.o || 0;
                p.colorOpacity = 0;
            } else {
                p.graphic = null;
                p.colorCol = i.c ? [...i.c] : [0, 0, 0, 0];
                p.colorOpacity = i.o || 0;
            }
        } else if (i.t === 2 || i.t === 4) {
            const p = i.t === 2 ? bg : fo;
            const o = i.t === 2 ? old.bg : old.fo;
            if (p.graphic) Object.assign(o, { ox: p.ox, oy: p.oy, opacity: p.opacity, col: [...p.col] });
            else Object.assign(o, { ox: 0, oy: 0, opacity: p.colorOpacity, col: [...p.colorCol] });
        }
    }
}

// 날씨나 필드 연출을 재생한다. 반환: { duration(ms), cancel() }. 아직 불러오지 못했거나 없으면 null.
//   field: 배틀 필드 요소(.bp-field), name: sun / rain / sand / hail / snow / electric-terrain / grassy-terrain / misty-terrain / psychic-terrain
//   opts.freezeFrame: 정해진 한 프레임만 그려서 멈춘다 (화면 확인용)
export function playFieldAnim(field, name, opts = {}) {
    if (!field || !index) {
        loadIndex().catch(() => null);
        return null;
    }
    const id = index[name];
    if (!id) return null;
    const anim = loaded.get(id);
    if (!anim) {
        loadAnim(id).catch(() => null);
        return null;
    }
    const fr = field.getBoundingClientRect();
    const mid = { x: fr.width / 2, y: fr.height / 2 };
    const geo = { u: mid, t: mid, k: fr.width / SCREEN.w || 1, fieldW: fr.width, fieldH: fr.height };

    const back = document.createElement("div");
    const front = document.createElement("div");
    back.style.cssText = "position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;overflow:hidden;z-index:0;";
    front.style.cssText = "position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;overflow:hidden;z-index:6;";
    field.insertBefore(back, field.firstChild);
    field.appendChild(front);
    const bg = makePlane(back, 0);
    const fo = makePlane(front, 90);
    const old = { bg: { ox: 0, oy: 0, opacity: 0, col: [0, 0, 0, 0] }, fo: { ox: 0, oy: 0, opacity: 0, col: [0, 0, 0, 0] } };

    const sheetUrl = anim.g ? `url(${BASE}g/${anim.g})` : "none";
    const cels = [];
    for (let i = 0; i < MAX_CELS; i++) {
        const el = document.createElement("div");
        el.style.cssText = `position:absolute;left:0;top:0;width:${CELL}px;height:${CELL}px;display:none;pointer-events:none;transform-origin:50% 50%;background-image:${sheetUrl};background-repeat:no-repeat;will-change:transform;`;
        if (anim.h) el.style.filter = `hue-rotate(${anim.h}deg)`;
        cels.push(el);
    }
    const attached = new Array(MAX_CELS).fill(null);

    const k = geo.k;
    const terrain = name.endsWith("-terrain");
    const frames = anim.f;
    let lastFrame = -1;
    let raf = 0;
    let cancelled = false;
    const start = performance.now();
    const rate = Math.max(1, anim.n / MAX_FRAMES); // 긴 연출을 빨리 감는 배율
    const duration = (anim.n * 1000) / FPS / rate;

    const draw = (frame) => {
        const cs = frames[frame] || [];
        for (let i = 0; i < MAX_CELS; i++) {
            const c = cs[i];
            if (!c) {
                if (cels[i].style.display !== "none") cels[i].style.display = "none";
                continue;
            }
            const [, , pattern, zx, zy, angle, mirror, blend, opacity, priority] = c;
            const extra = c[11];
            const place = celPlace(c, geo);
            const visible = extra ? extra[0] === 1 : true;
            // 포켓몬 그림을 움직이는 조각(-1, -2번)은 날씨와 필드 연출에서는 쓰지 않는다
            if (pattern < 0) {
                cels[i].style.display = "none";
                continue;
            }
            const el = cels[i];
            const col = pattern % 5;
            const row = Math.floor(pattern / 5);
            const wantBack = priority === 0 || priority === 2;
            const layer = wantBack ? back : front;
            if (attached[i] !== layer) {
                layer.appendChild(el);
                attached[i] = layer;
            }
            el.style.display = visible ? "block" : "none";
            el.style.backgroundPosition = `${-col * CELL}px ${-row * CELL}px`;
            const sx = (zx / 100) * k * ((mirror > 0) !== place.flip ? -1 : 1);
            const sy = (zy / 100) * k;
            el.style.transform = `translate(${place.x - CELL / 2}px, ${place.y - CELL / 2}px) rotate(${-angle}deg) scale(${sx}, ${sy})`;
            el.style.opacity = String(Math.max(0, Math.min(255, opacity)) / 255);
            el.style.mixBlendMode = blend === 1 ? "plus-lighter" : "normal";
        }
        playTiming(anim, frame, bg, fo, old);
        // 필드 연출의 배경 그림은 원래 경기장을 거의 덮을 만큼 진하다. 절반만 보이게 하고, 끝날 때는 서서히 걷는다
        const bgScale = terrain ? 0.5 * Math.min(1, (anim.n - frame) / 8) : 1;
        renderPlane(bg, geo.fieldW / SCREEN.w, geo.fieldH / SCREEN.h, bgScale);
        renderPlane(fo, geo.fieldW / SCREEN.w, geo.fieldH / SCREEN.h);
    };

    const finish = () => {
        if (cancelled) return;
        cancelled = true;
        cancelAnimationFrame(raf);
        back.remove();
        front.remove();
    };
    const tick = () => {
        if (cancelled) return;
        const frame = Math.floor(((performance.now() - start) * FPS * rate) / 1000);
        if (frame >= anim.n) {
            finish();
            return;
        }
        if (frame !== lastFrame) {
            lastFrame = frame;
            draw(frame);
        }
        raf = requestAnimationFrame(tick);
    };
    if (opts.freezeFrame !== undefined) {
        // 배경 타이밍은 앞 프레임부터 쌓이므로 처음부터 차례로 반영한 뒤 그 프레임을 그린다
        for (let f = 0; f < opts.freezeFrame; f++) playTiming(anim, f, bg, fo, old);
        draw(opts.freezeFrame);
        return { duration, cancel: finish };
    }
    draw(0);
    lastFrame = 0;
    raf = requestAnimationFrame(tick);
    const timer = setTimeout(finish, duration + 100);
    return {
        duration,
        cancel() {
            clearTimeout(timer);
            finish();
        },
    };
}

// 화면 확인용: 브라우저 콘솔에서 __pb.play(필드, 'rain', { freezeFrame: 10 })
if (typeof window !== "undefined") window.__pb = { play: playFieldAnim, load: prefetchFieldAnims };
