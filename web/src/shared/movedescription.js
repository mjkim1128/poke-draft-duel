// 기술 정보창에 보여 주는 기술 설명. 데이터(PokeAPI)의 도감 설명(flavor_text_entries)에서 고른다.
// 설정한 언어의 설명을 먼저 찾고(한국어 / English), 없으면 다른 언어, 그것도 없으면 효과 요약(effect_entries)을 쓴다.
// 도감 설명은 게임 버전마다 여러 개가 있어서 가장 마지막(최신) 것을 쓴다.
import { getLang } from "./lang";
import KO_EXTRA from "./ko_descriptions.json";

// 줄바꿈과 줄 끝의 하이픈(soft hyphen)을 없애서 한 줄 글로 만든다
function clean(text) {
    return String(text)
        .replace(/­\s*\n?/g, "")
        .replace(/\s*\n\s*/g, " ")
        .replace(/\s{2,}/g, " ")
        .trim();
}

const lastOf = (entries, lang) => {
    const found = entries.filter((e) => e.language && e.language.name === lang && e.flavor_text);
    return found.length > 0 ? found[found.length - 1].flavor_text : null;
};

export function moveDescription(move, lang = getLang()) {
    const entries = move.flavor_text_entries || [];
    const order = lang === "ko" ? ["ko", "en"] : ["en", "ko"];
    for (const l of order) {
        const text = lastOf(entries, l);
        if (text) return clean(text);
        // PokeAPI에 한국어 도감 설명이 없는 새 기술은 ko_descriptions.json의 한국어 설명을 영어보다 먼저 쓴다
        if (l === "ko" && KO_EXTRA.moves[move.name]) return KO_EXTRA.moves[move.name];
    }
    // 언어 표시가 없는 설명(옛 데이터)은 영어로 본다
    const untagged = entries.filter((e) => e.flavor_text && !(e.language && e.language.name));
    if (untagged.length > 0) return clean(untagged[untagged.length - 1].flavor_text);
    const effect = (move.effect_entries || []).find((e) => e.short_effect || e.effect);
    return effect ? clean(effect.short_effect || effect.effect) : "";
}
