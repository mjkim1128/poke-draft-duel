// 화면에 보여 주는 언어(한국어 / English). 설정창에서 고르고 localStorage에 저장한다.
const KEY = "battlefactory-lang";
let current = null;
const listeners = new Set();

function readSaved() {
    try {
        const v = window.localStorage.getItem(KEY);
        if (v === "ko" || v === "en") return v;
    } catch (e) {
        // 저장소를 못 쓰는 환경이면 기본값
    }
    return "ko";
}

export function getLang() {
    if (current === null) current = readSaved();
    return current;
}

export function isKorean() {
    return getLang() === "ko";
}

export function setLang(lang) {
    if (lang !== "ko" && lang !== "en") return;
    current = lang;
    try {
        window.localStorage.setItem(KEY, lang);
    } catch (e) {
        // 저장 실패는 무시
    }
    listeners.forEach((fn) => fn(lang));
}

export function onLangChange(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
}

// "fire-blast" -> "Fire Blast"
export function prettify(slug) {
    return String(slug || "")
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
}

// 포켓몬/기술/도구/특성처럼 이름을 가진 데이터의 현재 언어 이름
export function localName(obj) {
    if (!obj) return "";
    if (isKorean()) return obj.korean_name || obj.english_name || prettify(obj.name);
    return obj.english_name || prettify(obj.name);
}

// 받침에 따라 붙는 조사
const PARTICLES = {
    은: ["은", "는"],
    이: ["이", "가"],
    을: ["을", "를"],
    과: ["과", "와"],
    로: ["으로", "로"],
};

export function withParticle(word, kind) {
    const pair = PARTICLES[kind];
    if (!pair) return word;
    const code = word ? word.charCodeAt(word.length - 1) : 0;
    let hasFinal = false;
    if (code >= 0xac00 && code <= 0xd7a3) {
        const jong = (code - 0xac00) % 28;
        hasFinal = kind === "로" ? jong !== 0 && jong !== 8 : jong !== 0;
    }
    return word + (hasFinal ? pair[0] : pair[1]);
}
