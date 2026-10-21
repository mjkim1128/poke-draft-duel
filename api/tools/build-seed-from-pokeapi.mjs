// 커스텀 BattleFactory(게임 저장소)가 PokeAPI에서 실시간으로 가져오던 데이터를,
// 서버 DB에 넣을 시드 JSON으로 한 번에 내려받는 일회성 스크립트.
//
// 사용법:
//   node tools/build-seed-from-pokeapi.mjs <커스텀 게임의 src/shared 폴더> [출력 폴더]
//
// 만드는 파일 (출력 폴더, 기본은 battlefactory-api/seed):
//   pokemon.json  게임 풀(eligible_pokemon_ids.json) + 보스 포켓몬, 한글 이름 포함
//   moves.json    PokeAPI의 모든 기술, 한글 이름 포함
//   items.json    게임이 쓰는 모든 도구(세트, 아이템 풀, 효과 목록), 한글 이름 포함
//   report.json   개수, 실패한 항목, 누락된 참조 검사 결과
//
// 출력 모양은 게임의 processjson.js(getCustomPokemonData 등)가 돌려주는 구조를 그대로 따른다.
// 한 번 받은 응답은 <출력 폴더>/.cache 에 저장해 두므로 다시 실행해도 처음부터 받지 않는다.
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const sharedDir = process.argv[2];
const outDir = process.argv[3] || path.join(here, "..", "seed");
if (!sharedDir) {
    console.error("사용법: node tools/build-seed-from-pokeapi.mjs <src/shared 폴더> [출력 폴더]");
    process.exit(1);
}

const BASE = "https://pokeapi.co/api/v2";
const CONCURRENCY = 6;
const cacheDir = path.join(outDir, ".cache");
fs.mkdirSync(cacheDir, { recursive: true });

// ---------------------------------------------------------------- 게임 쪽 설정 읽기
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "bf-seed-"));
async function loadEsm(name) {
    const dst = path.join(tmp, name.replace(/\.js$/, ".mjs"));
    fs.copyFileSync(path.join(sharedDir, name), dst);
    return import(pathToFileURL(dst).href);
}
const ITEMINFO = await loadEsm("iteminfo.js");
const SETS = (await loadEsm("species_factory_sets.js")).default;
const BOSS = await loadEsm("bosspokemon.js");
const LEGAL = await loadEsm("legalmoves.js");
const ELIGIBLE = JSON.parse(fs.readFileSync(path.join(sharedDir, "eligible_pokemon_ids.json"), "utf8"));

// 포켓몬: 풀 + 보스(이름으로 조회됨)
const pokemonKeys = [...ELIGIBLE.map(String)];
for (const trainer of [BOSS.TRAINER_BLAKE, BOSS.TRAINER_ALAZAR]) {
    for (const name of trainer.pokemon) if (!pokemonKeys.includes(name)) pokemonKeys.push(name);
}

// 도구: iteminfo의 모든 설정 + 세트에 쓰인 도구
const itemSlugs = new Set();
const addAll = (iter) => { for (const v of iter) if (typeof v === "string" && /^[a-z0-9-]+$/.test(v)) itemSlugs.add(v); };
for (const [key, value] of Object.entries(ITEMINFO)) {
    if (typeof value === "string") addAll([value]);
    else if (Array.isArray(value) || value instanceof Set) addAll(value);
    else if (value && typeof value === "object") {
        if (key === "WEATHER_ROCKS") addAll(Object.values(value)); // 날씨 -> 도구
        else addAll(Object.keys(value)); // 도구 -> 설정
    }
}
for (const sets of Object.values(SETS)) for (const s of sets) if (s.item) itemSlugs.add(s.item);

// ---------------------------------------------------------------- 공통 도구
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const isEnKo = (e) => e && e.language && (e.language.name === "en" || e.language.name === "ko");
const named = (o) => (o ? { name: o.name } : null);
const koName = (names) => {
    const e = (names || []).find((n) => n.language.name === "ko");
    return e ? e.name : null;
};

async function fetchJson(url) {
    for (let attempt = 1; attempt <= 5; attempt++) {
        try {
            const res = await fetch(url);
            if (res.status === 404) return null;
            if (!res.ok) throw new Error("HTTP " + res.status);
            return await res.json();
        } catch (e) {
            if (attempt === 5) throw new Error(`${url}: ${e.message}`);
            await sleep(500 * attempt * attempt);
        }
    }
}

async function cached(kind, key, produce) {
    const file = path.join(cacheDir, `${kind}-${String(key).replace(/[^a-z0-9-]/gi, "_")}.json`);
    if (fs.existsSync(file)) return JSON.parse(fs.readFileSync(file, "utf8"));
    const value = await produce();
    fs.writeFileSync(file, JSON.stringify(value === undefined ? null : value));
    return value;
}

async function mapConcurrent(items, label, worker) {
    const results = new Array(items.length);
    let next = 0, done = 0;
    const started = Date.now();
    async function lane() {
        while (true) {
            const i = next++;
            if (i >= items.length) return;
            results[i] = await worker(items[i], i);
            done++;
            if (done % 50 === 0 || done === items.length) {
                const sec = Math.round((Date.now() - started) / 1000);
                console.log(`[${label}] ${done}/${items.length} (${sec}s)`);
            }
        }
    }
    await Promise.all(Array.from({ length: CONCURRENCY }, lane));
    return results;
}

// ---------------------------------------------------------------- 포켓몬
function slimPokemon(raw, koreanName) {
    return {
        id: raw.id,
        name: raw.name,
        korean_name: koreanName,
        height: raw.height,
        weight: raw.weight,
        stats: raw.stats.map((s) => ({ base_stat: s.base_stat, stat: named(s.stat) })),
        types: raw.types.map((t) => ({ slot: t.slot, type: named(t.type) })),
        abilities: raw.abilities.map((a) => ({ ability: named(a.ability), is_hidden: a.is_hidden, slot: a.slot })),
        forms: raw.forms.map((f) => ({ name: f.name })),
        sprites: {
            front_default: raw.sprites ? raw.sprites.front_default : null,
            back_default: raw.sprites ? raw.sprites.back_default : null,
        },
        moves: raw.moves.map((m) => ({ move: { name: m.move.name } })),
    };
}

async function buildPokemon(key) {
    return cached("pokemon", key, async () => {
        const raw = await fetchJson(`${BASE}/pokemon/${key}`);
        if (!raw) return null;
        const species = await fetchJson(raw.species.url);
        return slimPokemon(raw, species ? koName(species.names) : null);
    });
}

// ---------------------------------------------------------------- 기술
function slimMove(m) {
    const meta = m.meta || null;
    return {
        id: m.id,
        name: m.name,
        korean_name: koName(m.names),
        accuracy: m.accuracy,
        power: m.power,
        pp: m.pp,
        priority: m.priority,
        effect_chance: m.effect_chance,
        damage_class: named(m.damage_class),
        type: named(m.type),
        target: named(m.target),
        meta: meta && {
            ailment: named(meta.ailment),
            ailment_chance: meta.ailment_chance,
            category: named(meta.category),
            crit_rate: meta.crit_rate,
            drain: meta.drain,
            flinch_chance: meta.flinch_chance,
            healing: meta.healing,
            max_hits: meta.max_hits,
            max_turns: meta.max_turns,
            min_hits: meta.min_hits,
            min_turns: meta.min_turns,
            stat_chance: meta.stat_chance,
        },
        stat_changes: (m.stat_changes || []).map((c) => ({ change: c.change, stat: named(c.stat) })),
        effect_changes: (m.effect_changes || []).map((c) => ({
            effect_entries: (c.effect_entries || []).filter(isEnKo).map((e) => ({ effect: e.effect, language: { name: e.language.name } })),
            version_group: named(c.version_group),
        })),
        effect_entries: (m.effect_entries || [])
            .filter(isEnKo)
            .map((e) => ({ effect: e.effect, short_effect: e.short_effect, language: { name: e.language.name } })),
        // 화면은 한글(ko)을 먼저, 없으면 영어(en)를 쓴다. 언어별 첫 항목이 유지되도록 같은 문장은 한 번만 남긴다.
        flavor_text_entries: (() => {
            const seen = new Set();
            const out = [];
            for (const e of (m.flavor_text_entries || []).filter(isEnKo)) {
                const k = e.language.name + "|" + e.flavor_text;
                if (seen.has(k)) continue;
                seen.add(k);
                out.push({ flavor_text: e.flavor_text, language: { name: e.language.name } });
            }
            return out;
        })(),
    };
}

async function buildMove(name) {
    return cached("move", name, async () => {
        const raw = await fetchJson(`${BASE}/move/${name}`);
        return raw ? slimMove(raw) : null;
    });
}

// ---------------------------------------------------------------- 도구
function slimItem(it) {
    return {
        id: it.id,
        name: it.name,
        korean_name: koName(it.names),
        category: named(it.category),
        sprites: { default: it.sprites ? it.sprites.default : null },
    };
}

async function buildItem(slug) {
    return cached("item", slug, async () => {
        const raw = await fetchJson(`${BASE}/item/${slug}`);
        return raw ? slimItem(raw) : null;
    });
}

// ---------------------------------------------------------------- 실행
console.log(`포켓몬 ${pokemonKeys.length}종, 도구 후보 ${itemSlugs.size}개, 출력: ${outDir}`);

const moveList = await fetchJson(`${BASE}/move?limit=5000`);
const moveNames = moveList.results.map((m) => m.name);
console.log(`PokeAPI 기술 ${moveNames.length}개`);

const pokemonRaw = await mapConcurrent(pokemonKeys, "pokemon", buildPokemon);
const moveRaw = await mapConcurrent(moveNames, "moves", buildMove);
const itemSlugList = [...itemSlugs].sort();
const itemRaw = await mapConcurrent(itemSlugList, "items", buildItem);

// 보스 이름 조회(hitmonlee 등)가 풀의 번호 조회와 같은 포켓몬일 수 있으므로, 번호 기준으로 한 번만 남긴다.
const pokemonById = new Map();
let pokemonDuplicatesRemoved = 0;
for (const p of pokemonRaw.filter(Boolean)) {
    if (pokemonById.has(p.id)) pokemonDuplicatesRemoved++;
    else pokemonById.set(p.id, p);
}
const pokemon = [...pokemonById.values()].sort((a, b) => a.id - b.id);
const moves = moveRaw.filter(Boolean).sort((a, b) => a.id - b.id);
const items = itemRaw.filter(Boolean).sort((a, b) => a.id - b.id);

// 검증
const moveNameSet = new Set(moves.map((m) => m.name));
const missingMoveRefs = new Set();
let pokemonWithoutKorean = 0;
for (const p of pokemon) {
    if (!p.korean_name) pokemonWithoutKorean++;
    for (const m of p.moves) if (!moveNameSet.has(m.move.name)) missingMoveRefs.add(m.move.name);
}
const setMoveSlugs = new Set();
for (const sets of Object.values(SETS)) for (const s of sets) for (const slot of s.moves) for (const m of slot) setMoveSlugs.add(m.slug);
const defaultMoves = (LEGAL.DEFAULT_MOVES || []).map((m) => m.name);

const itemNameSet = new Set(items.map((i) => i.name));
const report = {
    generatedAt: new Date().toISOString(),
    pokemon: pokemon.length,
    pokemonRequested: pokemonKeys.length,
    pokemonDuplicatesRemoved,
    pokemonInGamePool: pokemon.filter((p) => ELIGIBLE.includes(p.id)).length,
    pokemonBossOnly: pokemon.filter((p) => !ELIGIBLE.includes(p.id)).map((p) => p.name),
    pokemonNotFound: pokemonKeys.filter((k, i) => !pokemonRaw[i]),
    pokemonWithoutKoreanName: pokemonWithoutKorean,
    moves: moves.length,
    movesWithoutKoreanName: moves.filter((m) => !m.korean_name).length,
    movesNotFound: moveNames.filter((n, i) => !moveRaw[i]),
    items: items.length,
    itemsRequested: itemSlugList.length,
    itemsNotFound: itemSlugList.filter((s) => !itemNameSet.has(s)),
    itemsWithoutKoreanName: items.filter((i) => !i.korean_name).map((i) => i.name),
    learnsetMovesMissingFromMoves: [...missingMoveRefs],
    factorySetMovesMissingFromMoves: [...setMoveSlugs].filter((n) => !moveNameSet.has(n)),
    defaultMovesMissingFromMoves: defaultMoves.filter((n) => !moveNameSet.has(n)),
    factorySetItemsMissingFromItems: [...new Set(Object.values(SETS).flatMap((ss) => ss.map((s) => s.item)).filter(Boolean))].filter((n) => !itemNameSet.has(n)),
    factorySetSpeciesMissingFromPokemon: Object.keys(SETS).filter((n) => !pokemon.some((p) => p.name === n)),
};

const toLines = (arr) => "[\n" + arr.map((x) => JSON.stringify(x)).join(",\n") + "\n]\n";
fs.writeFileSync(path.join(outDir, "pokemon.json"), toLines(pokemon));
fs.writeFileSync(path.join(outDir, "moves.json"), toLines(moves));
fs.writeFileSync(path.join(outDir, "items.json"), toLines(items));
fs.writeFileSync(path.join(outDir, "report.json"), JSON.stringify(report, null, 2) + "\n");

const mb = (f) => (fs.statSync(path.join(outDir, f)).size / 1048576).toFixed(2) + "MB";
console.log(JSON.stringify({ ...report, files: { pokemon: mb("pokemon.json"), moves: mb("moves.json"), items: mb("items.json") } }, null, 2));
