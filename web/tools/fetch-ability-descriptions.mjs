// 특성 설명을 PokeAPI에서 받아서 web/src/shared/ability_descriptions.json 으로 저장한다 (한 번 돌려 두면 게임은 네트워크 없이 이 파일을 쓴다).
// 실행: cd web && node tools/fetch-ability-descriptions.mjs
// 대상은 ability_names.json 에 있는 특성이다. 언어마다 도감 설명(flavor_text) 중 가장 마지막(최신) 것을 쓰고,
// 영어 설명이 없으면 효과 요약(effect_entries 의 short_effect)을 쓴다.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const names = JSON.parse(fs.readFileSync(path.join(here, "../src/shared/ability_names.json"), "utf8"));
const outFile = path.join(here, "../src/shared/ability_descriptions.json");

const clean = (text) =>
    String(text)
        .replace(/­\s*\n?/g, "")
        .replace(/\s*\n\s*/g, " ")
        .replace(/\s{2,}/g, " ")
        .trim();

const lastOf = (entries, lang) => {
    const found = (entries || []).filter((e) => e.language && e.language.name === lang && e.flavor_text);
    return found.length > 0 ? clean(found[found.length - 1].flavor_text) : null;
};

async function fetchAbility(slug) {
    for (let attempt = 0; attempt < 4; attempt++) {
        try {
            const res = await fetch("https://pokeapi.co/api/v2/ability/" + slug);
            if (res.status === 404) return null;
            if (!res.ok) throw new Error("HTTP " + res.status);
            return await res.json();
        } catch (e) {
            await new Promise((r) => setTimeout(r, 500 * (attempt + 1)));
        }
    }
    throw new Error("could not fetch " + slug);
}

const slugs = Object.keys(names).sort();
const result = {};
const missing = [];
let next = 0;
async function worker() {
    while (next < slugs.length) {
        const slug = slugs[next++];
        const data = await fetchAbility(slug);
        if (!data) {
            missing.push(slug);
            continue;
        }
        const effect = (data.effect_entries || []).find((e) => e.language && e.language.name === "en");
        const ko = lastOf(data.flavor_text_entries, "ko");
        const en = lastOf(data.flavor_text_entries, "en") || (effect ? clean(effect.short_effect || effect.effect) : null);
        if (ko || en) result[slug] = { ...(ko ? { ko } : {}), ...(en ? { en } : {}) };
        else missing.push(slug);
    }
}
await Promise.all(Array.from({ length: 8 }, worker));

const sorted = Object.fromEntries(Object.keys(result).sort().map((k) => [k, result[k]]));
fs.writeFileSync(outFile, JSON.stringify(sorted, null, 1) + "\n", "utf8");
console.log("saved", Object.keys(sorted).length, "of", slugs.length, "abilities");
if (missing.length) console.log("no description:", missing.join(", "));
