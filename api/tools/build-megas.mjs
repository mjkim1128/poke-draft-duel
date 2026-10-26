// 메가진화 데이터를 PokeAPI에서 받아 게임 데이터에 넣는다.
//   node tools/build-megas.mjs
// 만드는 것:
//   web/src/shared/megas.json                       메가 폼 목록 (종족값, 타입, 특성, 스프라이트, 한국어 이름, 메가스톤)
//   api/src/main/resources/data/items.json          메가스톤 도구를 추가한다 (이미 있으면 건드리지 않는다)
//   web/src/shared/ability_names.json               메가 폼의 특성 중 이름이 없는 것을 추가한다
// 넣는 폼의 조건: PokeAPI에 특성이 있고, 앞뒤 스프라이트가 있고, 메가스톤이 있고,
//   원래 포켓몬이 게임의 뽑기 풀(pool.json)에 있는 것. (메가의 기술은 원래 모습의 기술을 그대로 쓰므로 PokeAPI의 폼 기술 목록은 보지 않는다.)
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const here = path.dirname(fileURLToPath(import.meta.url));
const DATA = path.join(here, "../src/main/resources/data/");
const SHARED = path.join(here, "../../web/src/shared/");
const BASE = "https://pokeapi.co/api/v2";

const readJson = (file) => JSON.parse(fs.readFileSync(file, "utf8"));
const writeJson = (file, value, indent) => fs.writeFileSync(file, JSON.stringify(value, null, indent));

async function getJson(url) {
    for (let attempt = 0; attempt < 4; attempt++) {
        try {
            const res = await fetch(url);
            if (res.ok) return res.json();
            if (res.status === 404) return null;
        } catch {
            // 다시 시도
        }
        await new Promise((r) => setTimeout(r, 500 * (attempt + 1)));
    }
    return null;
}
const exists = async (url) => {
    try {
        return (await fetch(url, { method: "HEAD" })).status === 200;
    } catch {
        return false;
    }
};
const korean = (names) => {
    const found = (names || []).find((n) => n.language.name === "ko");
    return found ? found.name : null;
};

const pokemon = readJson(DATA + "pokemon.json");
const pool = new Set(readJson(DATA + "pool.json"));
const items = readJson(DATA + "items.json");
const abilityNames = readJson(SHARED + "ability_names.json");

const all = await getJson(`${BASE}/pokemon?limit=3000`);
const megaSlugs = all.results.map((r) => r.name).filter((n) => /-mega(-[xyz])?$/.test(n));
const stoneList = await getJson(`${BASE}/item-category/mega-stones`);
const stones = [];
for (const entry of stoneList.items) stones.push(await getJson(entry.url));
console.log(`메가 폼 ${megaSlugs.length}개, 메가스톤 ${stones.length}개`);

const megas = [];
const skipped = [];
for (const slug of megaSlugs) {
    const raw = await getJson(`${BASE}/pokemon/${slug}`);
    const form = await getJson(`${BASE}/pokemon-form/${slug}`);
    const suffix = (slug.match(/-mega(-[xyz])?$/)[1] || "").replace("-", "");
    const baseSlug = slug.replace(/-mega(-[xyz])?$/, "");
    const base = pokemon.find((p) => p.name === baseSlug);
    const stem = baseSlug.replace(/-.*/, "").slice(0, 5);
    const stone = stones.find((s) => s.name.startsWith(stem) && (suffix ? s.name.endsWith("-" + suffix) : !/-[xyz]$/.test(s.name)));
    const why = [];
    if (!raw) why.push("PokeAPI에 없음");
    else {
        if (raw.abilities.length === 0) why.push("특성 정보 없음");
        if (!raw.sprites.front_default || !(await exists(raw.sprites.front_default))) why.push("앞면 스프라이트 없음");
        if (!raw.sprites.back_default || !(await exists(raw.sprites.back_default))) why.push("뒷면 스프라이트 없음");
    }
    if (!stone) why.push("메가스톤 없음");
    if (!base) why.push("원래 포켓몬이 게임에 없음");
    else if (!pool.has(base.id)) why.push("원래 포켓몬이 뽑기 풀에 없음");
    if (why.length > 0) {
        skipped.push(`${slug}: ${why.join(", ")}`);
        continue;
    }
    // 한국어 폼 이름이 없으면 "메가" + 원래 이름 (+ X / Y / Z)
    const officialName = korean(form && form.form_names);
    const koreanName = officialName || `메가${base.korean_name}${suffix.toUpperCase()}`;
    megas.push({
        id: raw.id,
        name: slug,
        base: baseSlug,
        baseId: base.id,
        korean_name: koreanName,
        koreanNameIsOfficial: !!officialName,
        stone: stone.name,
        types: raw.types.map((t) => ({ slot: t.slot, type: { name: t.type.name } })),
        abilities: raw.abilities.map((a) => ({ ability: { name: a.ability.name }, is_hidden: a.is_hidden, slot: a.slot })),
        stats: raw.stats.map((s) => ({ base_stat: s.base_stat, stat: { name: s.stat.name } })),
        sprites: { front_default: raw.sprites.front_default, back_default: raw.sprites.back_default },
    });
}
megas.sort((a, b) => a.baseId - b.baseId || a.id - b.id);

// 메가스톤 도구
const itemNames = new Set(items.map((i) => i.name));
let addedItems = 0;
for (const mega of megas) {
    if (itemNames.has(mega.stone)) continue;
    const stone = stones.find((s) => s.name === mega.stone);
    items.push({
        id: stone.id,
        name: stone.name,
        korean_name: korean(stone.names),
        category: { name: "mega-stones" },
        sprites: { default: stone.sprites ? stone.sprites.default : null },
    });
    itemNames.add(stone.name);
    addedItems++;
}

// 특성 이름 (없는 것만)
let addedAbilities = 0;
for (const mega of megas) {
    for (const a of mega.abilities) {
        const slug = a.ability.name;
        if (abilityNames[slug] && abilityNames[slug].ko) continue;
        const raw = await getJson(`${BASE}/ability/${slug}`);
        const en = raw && (raw.names.find((n) => n.language.name === "en") || {}).name;
        abilityNames[slug] = {
            en: en || (abilityNames[slug] && abilityNames[slug].en) || slug,
            ko: (raw && korean(raw.names)) || (abilityNames[slug] && abilityNames[slug].ko) || null,
        };
        addedAbilities++;
    }
}

writeJson(SHARED + "megas.json", megas, 1);
// items.json은 도구 하나가 한 줄 (기존 모양을 그대로 둔다)
fs.writeFileSync(DATA + "items.json", "[\n" + items.map((i) => JSON.stringify(i)).join(",\n") + "\n]\n");
writeJson(SHARED + "ability_names.json", abilityNames, 1);
console.log(`메가 폼 ${megas.length}개 (한국어 이름: 공식 ${megas.filter((m) => m.koreanNameIsOfficial).length} / 만든 것 ${megas.filter((m) => !m.koreanNameIsOfficial).length})`);
console.log(`추가한 메가스톤 ${addedItems}개, 추가한 특성 이름 ${addedAbilities}개`);
console.log(`넣지 않은 폼 ${skipped.length}개:\n  ` + skipped.join("\n  "));
