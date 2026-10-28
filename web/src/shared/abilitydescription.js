// 특성 설명. ability_descriptions.json 은 web/tools/fetch-ability-descriptions.mjs 가 PokeAPI에서 받아 둔 도감 설명이다.
// 설정한 언어의 설명을 먼저 쓰고, 없으면 다른 언어의 설명을 쓴다 (새 특성은 한국어 설명이 없을 수 있다).
import DESCRIPTIONS from "./ability_descriptions.json";
import { getLang } from "./lang";

export function abilityDescription(ability, lang = getLang()) {
    const entry = ability && DESCRIPTIONS[ability.name];
    if (!entry) return "";
    return (lang === "ko" ? entry.ko || entry.en : entry.en || entry.ko) || "";
}
