// 특성 설명. ability_descriptions.json 은 web/tools/fetch-ability-descriptions.mjs 가 PokeAPI에서 받아 둔 도감 설명이다.
// 설정한 언어의 설명을 먼저 쓰고, 없으면 다른 언어의 설명을 쓴다. PokeAPI에 한국어 설명이 없는 새 특성은 ko_descriptions.json의 한국어 설명을 쓴다
// (도감 설명을 다시 받아 와도 지워지지 않도록 따로 둔다).
import DESCRIPTIONS from "./ability_descriptions.json";
import KO_EXTRA from "./ko_descriptions.json";
import { getLang } from "./lang";

export function abilityDescription(ability, lang = getLang()) {
    const entry = ability && DESCRIPTIONS[ability.name];
    if (!entry) return "";
    if (lang === "ko") return entry.ko || KO_EXTRA.abilities[ability.name] || entry.en || "";
    return entry.en || entry.ko || "";
}
