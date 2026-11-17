// 테라스탈 발동 연출과 테라스탈한 포켓몬의 모습.
// 그림은 public/tera/ (Pokemon Wishing Star의 Deluxe Battle Kit 테라스탈 자료)이고, 순서는 그 플러그인의 BattlerTerastallize 연출을 줄여서 따른다.
//   어두워지며 포켓몬이 하얗게 빛남 -> 타입 아이콘이 커지며 사라짐 -> 결정 3장이 감싸고 흔들림 -> 하얀 섬광 ->
//   결정이 부서지며 질감이 입혀진 포켓몬이 나타남 -> 무지개 빛과 파동 -> 깜빡이다 잦아듦
// 연출은 배틀 필드(.bp-field) 위에 겹쳐 그리는 요소들이고, Web Animations로 움직인다.

const BASE = (process.env.PUBLIC_URL || "") + "/tera/";

// 연출을 이 배수로 빠르게 재생한다 (아래 시각표는 원래 속도 기준)
const SPEED = 2;

export const TERA_TYPES = ["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy"];

// 타입 색: 배경 물들임, 윤곽선, 섬광에 쓴다
export const TERA_COLORS = {
    normal: "#a8a878",
    fighting: "#c03028",
    flying: "#a890f0",
    poison: "#a040a0",
    ground: "#e0c068",
    rock: "#b8a038",
    bug: "#a8b820",
    ghost: "#705898",
    steel: "#b8b8d0",
    fire: "#f08030",
    water: "#6890f0",
    grass: "#78c850",
    electric: "#f8d030",
    psychic: "#f85888",
    ice: "#98d8d8",
    dragon: "#7038f8",
    dark: "#705848",
    fairy: "#ee99ac",
};
const colorOf = (type) => TERA_COLORS[type] || TERA_COLORS.normal;

// 타입 아이콘(tera_types.png)은 32x32 칸이 세로로 이어져 있고 에센셜의 타입 순서를 따른다 (노말, 격투, 비행, 독, 땅, 바위, 벌레, 고스트, 강철, ???, 불, 물, ...)
const ICON_ROWS = { normal: 0, fighting: 1, flying: 2, poison: 3, ground: 4, rock: 5, bug: 6, ghost: 7, steel: 8, fire: 10, water: 11, grass: 12, electric: 13, psychic: 14, ice: 15, dragon: 16, dark: 17, fairy: 18 };
// 버튼(cursor_tera.png)은 46px 높이 칸이 세로로 이어져 있고 맨 윗칸이 기본, 그 아래가 타입 순서다
const BUTTON_ROWS = { ...Object.fromEntries(Object.entries(ICON_ROWS).map(([t, r]) => [t, r + 1])) };

export const patternUrl = (type) => BASE + "patterns/" + (type === "normal" ? "default" : type) + ".png";

// 타입 아이콘 한 칸을 보여 주는 스타일 (배경 그림 방식)
export function teraIconStyle(type, size = 32) {
    const row = ICON_ROWS[type] ?? 0;
    return { width: size, height: size, backgroundImage: `url(${BASE}types.png)`, backgroundSize: `${size}px ${size * 20}px`, backgroundPosition: `0 -${row * size}px`, imageRendering: "pixelated" };
}
// 테라스탈 버튼 한 칸 (150x46)
export function teraButtonStyle(type, scale = 1) {
    const row = BUTTON_ROWS[type] ?? 0;
    return { width: 150 * scale, height: 46 * scale, backgroundImage: `url(${BASE}button.png)`, backgroundSize: `${150 * scale}px ${966 * scale}px`, backgroundPosition: `0 -${row * 46 * scale}px`, imageRendering: "pixelated" };
}

const PRELOAD = ["crystal_1", "crystal_2", "crystal_3", "crystal_4", "icon", "pulse", "shine"].map((n) => BASE + n + ".png");
let preloaded = false;
export function prefetchTeraAssets(types = []) {
    if (preloaded && types.length === 0) return;
    preloaded = true;
    for (const url of [...PRELOAD, BASE + "types.png", BASE + "button.png", ...types.map(patternUrl)]) {
        const img = new Image();
        img.src = url;
    }
}

const imgOf = (field, side) => field.querySelector(side === "player" ? ".bp-player .current-pokemon-div img" : ".bp-opponent .current-pokemon-div img");

// 포켓몬 그림 위에 겹쳐서, 그 그림의 모양대로만 질감이 보이게 한다 (마스크). 반환: 정리 함수
function makeTexture(field, img, type, opts = {}) {
    const fr = field.getBoundingClientRect();
    const r = img.getBoundingClientRect();
    const el = document.createElement("div");
    Object.assign(el.style, {
        position: "absolute",
        left: r.left - fr.left + "px",
        top: r.top - fr.top + "px",
        width: r.width + "px",
        height: r.height + "px",
        pointerEvents: "none",
        zIndex: 5,
        WebkitMaskImage: `url(${img.currentSrc || img.src})`,
        maskImage: `url(${img.currentSrc || img.src})`,
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        backgroundImage: `url(${patternUrl(type)})`,
        backgroundSize: "260px 260px",
        mixBlendMode: "hard-light",
        opacity: opts.opacity ?? 0.8,
    });
    field.appendChild(el);
    // 무늬가 천천히 흘러가는 움직임 (에센셜의 :right / :erratic 중 오른쪽 흐름을 따른다)
    const move = el.animate([{ backgroundPosition: "0px 0px" }, { backgroundPosition: "260px 130px" }], { duration: 9000, iterations: Infinity });
    return () => {
        move.cancel();
        el.remove();
    };
}

// 테라스탈한 모습을 유지한다: 타입 색 윤곽선과 질감. 반환: 되돌리는 함수 (테라스탈이 풀릴 때)
// opts.texture가 false이면 윤곽선만 (이미 테라스탈한 모습이 따로 있는 오거폰)
export function applyTeraLook(field, side, type, opts = {}) {
    const img = imgOf(field, side);
    if (!img) return () => {};
    const color = colorOf(type);
    const before = img.style.filter;
    img.style.filter = `drop-shadow(0 0 1.5px ${color}) drop-shadow(0 0 3px ${color})`;
    const removeTexture = opts.texture === false ? () => {} : makeTexture(field, img, type);
    return () => {
        img.style.filter = before;
        removeTexture();
    };
}

// 테라스탈 발동 연출을 재생한다. 반환: { duration(ms), cancel() }. 포켓몬을 찾지 못하면 null.
//   side: 테라스탈하는 쪽 ("player" | "opponent"), type: 테라 타입, opts.keepLook: 끝난 뒤에도 윤곽선과 질감을 남긴다(기본 true, 반환값의 look()으로 풀기)
export function playTeraAnim(field, side, type, opts = {}) {
    if (!field) return null;
    const img = imgOf(field, side);
    if (!img) return null;
    prefetchTeraAssets([type]);
    const color = colorOf(type);
    const outline = `drop-shadow(0 0 1.5px ${color}) drop-shadow(0 0 3px ${color})`;
    const fr = field.getBoundingClientRect();
    const r = img.getBoundingClientRect();
    const cx = r.left - fr.left + r.width / 2;
    const cy = r.top - fr.top + r.height / 2;
    const size = Math.max(r.width, r.height);

    const layer = document.createElement("div");
    Object.assign(layer.style, { position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 20 });
    field.appendChild(layer);
    const anims = [];
    const play = (el, frames, timing) => {
        const a = el.animate(frames, { fill: "both", ...timing });
        a.playbackRate = SPEED;
        anims.push(a);
        return a;
    };
    const sprite = (name, w, h, extra = {}) => {
        const el = document.createElement("img");
        el.src = BASE + name + ".png";
        el.alt = "";
        Object.assign(el.style, { position: "absolute", left: cx - w / 2 + "px", top: cy - h / 2 + "px", width: w + "px", height: h + "px", opacity: 0, ...extra });
        layer.appendChild(el);
        return el;
    };
    const box = (style) => {
        const el = document.createElement("div");
        Object.assign(el.style, { position: "absolute", inset: 0, opacity: 0, ...style });
        layer.appendChild(el);
        return el;
    };

    // 연출 길이(ms)와 장면 시각
    const T = { dim: 350, icon: 250, crystals: 650, flash: 1900, reveal: 2150, flicker: 2350, end: 3300 };

    // 1) 어두워지고 타입 색이 깔림, 포켓몬이 하얗게
    const dim = box({ background: `radial-gradient(circle at ${cx}px ${cy}px, ${color}66 0%, #000000bb 70%)` });
    play(dim, [{ opacity: 0 }, { opacity: 1, offset: T.dim / T.end }, { opacity: 1, offset: 0.9 }, { opacity: 0 }], { duration: T.end });
    play(img, [{ filter: "brightness(1)" }, { filter: "brightness(12) saturate(0)", offset: T.dim / T.end }, { filter: "brightness(12) saturate(0)", offset: T.reveal / T.end }, { filter: outline, offset: (T.reveal + 1) / T.end }, { filter: outline }], { duration: T.end });
    // 결정에 가려지는 동안 원래 그림은 숨기고, 섬광 뒤에 질감 입힌 모습으로 나온다
    play(img, [{ opacity: 1 }, { opacity: 1, offset: T.flash / T.end }, { opacity: 0, offset: (T.flash + 1) / T.end }, { opacity: 0, offset: T.reveal / T.end }, { opacity: 1, offset: (T.reveal + 1) / T.end }, { opacity: 1 }], { duration: T.end });

    // 2) 타입 아이콘이 커지며 사라짐
    const icon = sprite("icon", size * 0.8, size * 0.8 * (317 / 258), { filter: `drop-shadow(0 0 6px ${color})` });
    play(icon, [{ opacity: 0, transform: "scale(0.6)" }, { opacity: 1, transform: "scale(1)", offset: 0.35 }, { opacity: 0, transform: "scale(2.2)" }], { delay: T.icon, duration: 700, easing: "ease-out" });

    // 3) 결정 3장이 차례로 감싸고 흔들림
    const cw = size * 1.9;
    const ch = cw * (384 / 512);
    [3, 2, 1].forEach((n, i) => {
        const c = sprite(`crystal_${n}`, cw, ch, { filter: `drop-shadow(0 0 4px ${color})` });
        const at = T.crystals + i * 170;
        play(c, [{ opacity: 0, transform: "scale(0.2)" }, { opacity: 1, transform: "scale(1)", offset: 0.2 }, { opacity: 1, transform: "translateX(0px)", offset: 0.4 }, { opacity: 1, transform: "translateX(3px)", offset: 0.5 }, { opacity: 1, transform: "translateX(-3px)", offset: 0.6 }, { opacity: 1, transform: "translateX(3px)", offset: 0.7 }, { opacity: 1, transform: "translateX(-3px)", offset: 0.8 }, { opacity: 1, transform: "scale(1)", offset: 1 }], { delay: at, duration: T.flash - at, easing: "linear" });
        play(c, [{ visibility: "visible" }, { visibility: "hidden" }], { delay: T.flash + 250, duration: 1 });
    });

    // 4) 하얀 섬광: 결정이 부서지는 순간
    const flash = box({ background: "#fff" });
    play(flash, [{ opacity: 0 }, { opacity: 1, offset: 0.5 }, { opacity: 0 }], { delay: T.flash - 80, duration: 460 });

    // 5) 부서지는 조각, 파동, 무지개 빛
    const pieces = 9;
    for (let i = 0; i < pieces; i++) {
        const angle = (i / pieces) * Math.PI * 2 + 0.3;
        const dist = size * (0.8 + (i % 3) * 0.25);
        const p = sprite("crystal_4", 154 * 0.55, 166 * 0.55);
        play(p, [{ opacity: 1, transform: "translate(0,0) rotate(0deg) scale(0.6)" }, { opacity: 1, transform: `translate(${Math.cos(angle) * dist}px,${Math.sin(angle) * dist}px) rotate(${(i % 2 ? 1 : -1) * 200}deg) scale(1)`, offset: 0.7 }, { opacity: 0, transform: `translate(${Math.cos(angle) * dist * 1.1}px,${Math.sin(angle) * dist * 1.1}px) rotate(${(i % 2 ? 1 : -1) * 240}deg) scale(1)` }], { delay: T.reveal, duration: 380, easing: "ease-out" });
    }
    const pulse = sprite("pulse", 128, 128, { mixBlendMode: "screen" });
    const pulseScale = (Math.max(fr.width, fr.height) * 1.7) / 128;
    play(pulse, [{ opacity: 0.95, transform: "scale(0.3)" }, { opacity: 0.8, transform: `scale(${pulseScale * 0.6})`, offset: 0.5 }, { opacity: 0, transform: `scale(${pulseScale})` }], { delay: T.reveal, duration: 520, easing: "ease-out" });
    const shine = sprite("shine", size * 2.8, size * 2.8 * (384 / 512), { mixBlendMode: "screen" });
    play(shine, [{ opacity: 0 }, { opacity: 1, offset: 0.08 }, { opacity: 0.55, offset: 0.2 }, { opacity: 1, offset: 0.3 }, { opacity: 0.55, offset: 0.45 }, { opacity: 1, offset: 0.55 }, { opacity: 0.6, offset: 0.7 }, { opacity: 0 }], { delay: T.reveal, duration: T.end - T.reveal });

    // 6) 흔들림과 깜빡임
    play(img, [{ transform: "translateY(0)" }, { transform: "translateY(2px)" }, { transform: "translateY(-2px)" }, { transform: "translateY(2px)" }, { transform: "translateY(-2px)" }, { transform: "translateY(0)" }], { delay: T.reveal + 120, duration: 600 });
    const glow = box({ background: `radial-gradient(circle at ${cx}px ${cy}px, #ffffffcc 0%, ${color}66 45%, transparent 75%)`, mixBlendMode: "screen" });
    play(glow, [{ opacity: 0 }, { opacity: 0.9, offset: 0.15 }, { opacity: 0.3, offset: 0.35 }, { opacity: 0.8, offset: 0.55 }, { opacity: 0.2, offset: 0.75 }, { opacity: 0 }], { delay: T.reveal, duration: T.end - T.reveal });

    // 변신하는 장면부터 질감이 입혀진 모습으로 나온다 (끝나면 applyTeraLook이 같은 모습을 이어받는다)
    const removeTexture = makeTexture(field, img, type, { opacity: 0 });
    const textureEl = field.lastElementChild;
    const texEnd = T.reveal + 250;
    play(textureEl, [{ opacity: 0, offset: 0 }, { opacity: 0, offset: T.reveal / texEnd }, { opacity: 0.8, offset: 1 }], { duration: texEnd, easing: "linear" });
    // 흔들릴 때 질감도 같이 흔들린다
    play(textureEl, [{ transform: "translateY(0)" }, { transform: "translateY(2px)" }, { transform: "translateY(-2px)" }, { transform: "translateY(2px)" }, { transform: "translateY(-2px)" }, { transform: "translateY(0)" }], { delay: T.reveal + 120, duration: 600 });
    // 끝나면 테라스탈한 모습(윤곽선과 질감)을 남긴다
    let revertLook = null;
    const end = () => {
        layer.remove();
        removeTexture();
        anims.forEach((a) => a.cancel());
        if (opts.keepLook !== false) revertLook = applyTeraLook(field, side, type);
    };
    // opts.manual: 시간이 흐르는 대로 끝나지 않고 seek(ms)로 원하는 순간에 멈춰서 볼 수 있다 (화면 확인용)
    const finish = opts.manual ? null : setTimeout(end, T.end / SPEED);
    return {
        duration: T.end / SPEED,
        seek(ms) {
            anims.forEach((a) => {
                a.pause();
                a.currentTime = ms;
            });
        },
        end,
        cancel() {
            if (finish) clearTimeout(finish);
            removeTexture();
            layer.remove();
            anims.forEach((a) => a.cancel());
        },
        look() {
            if (revertLook) revertLook();
            revertLook = null;
        },
    };
}
