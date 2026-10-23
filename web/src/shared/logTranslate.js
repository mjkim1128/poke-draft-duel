import { TRANSLATIONS, WORDS } from "./logTranslations";
import { isKorean, withParticle } from "./lang";

const SPECIAL = ".*+?^$|(){}[]\\";
const escapeRegex = (s) =>
    s
        .split("")
        .map((c) => (SPECIAL.indexOf(c) >= 0 ? "\\" + c : c))
        .join("");

// "{} used {}!" -> /^(.+?) used (.+?)!$/
const RULES = TRANSLATIONS.map(([en, ko]) => ({
    re: new RegExp("^" + en.split("{}").map(escapeRegex).join("([^!]+?)") + "$"),
    ko,
}));

const translateWords = (text) =>
    text
        .split(" and ")
        .map((w) => WORDS[w.toLowerCase()] || w)
        .join(", ");

function fill(ko, args) {
    return ko.replace(/\{(\d)(?::(.))?\}/g, (_, n, kind) => {
        const value = args[Number(n) - 1] || "";
        if (kind === "w") return translateWords(value);
        return kind ? withParticle(value, kind) : value;
    });
}

// 문장 하나를 번역한다. 맞는 틀이 없으면 null.
function translateSentence(sentence) {
    for (const rule of RULES) {
        const m = rule.re.exec(sentence);
        if (m) return fill(rule.ko, m.slice(1));
    }
    return null;
}

// 한 줄(여러 문장이 붙어 있을 수 있음)을 한국어로 바꾼다. 번역하지 못한 문장은 그대로 둔다.
export function translateLine(line) {
    if (typeof line !== "string" || !line) return line;
    const whole = translateSentence(line.trim());
    if (whole !== null) return whole;
    const parts = line.match(/.+?(?:[!.]+(?=\s|$)|$)/g) || [line];
    return parts
        .map((p) => {
            const t = p.trim();
            if (!t) return "";
            const r = translateSentence(t);
            return r === null ? t : r;
        })
        .filter(Boolean)
        .join(" ");
}

// 언어 설정이 한국어일 때만 번역한다.
export function localizeLine(line) {
    return isKorean() ? translateLine(line) : line;
}

// doTurn / resumeTurn 이 돌려주는 텍스트 배열(과 frames)을 번역한 새 배열로 바꾼다.
export function localizeTurnText(result) {
    if (!isKorean()) return result;
    const text = Object.assign(result.map(translateLine), {});
    if (result.frames) {
        text.frames = result.frames.map((f) => ({ ...f, text: f.text.map(translateLine) }));
    }
    return text;
}

// 번역되지 않고 영어가 남은 문장 (검사용)
export function untranslatedSentences(line) {
    if (translateSentence(line.trim()) !== null) return [];
    const parts = line.match(/.+?(?:[!.]+(?=\s|$)|$)/g) || [line];
    return parts.map((p) => p.trim()).filter((p) => p && translateSentence(p) === null);
}
