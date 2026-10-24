// 게임 풀(등장 포켓몬)과 팩토리 세트의 원본(tools/source)을 서버가 읽는 시드 JSON으로 바꾼다.
//
// 사용법 (battlefactory-api 폴더에서):
//   node tools/build-sets-seed.mjs
//
// 입력 (tools/source):
//   eligible_pokemon_ids.json   게임에 등장하는 포켓몬 번호 목록 (종족값 660 미만의 최종 진화형 등)
//   species_factory_sets.js     종족별 실전 세트 (도구, 특성, 기술). 한글 주석이 달린 사람이 고치는 원본
//
// 출력 (src/main/resources/data):
//   pool.json          [번호, ...]
//   factory_sets.json  [{ "species": "klefki", "set": { item, ability, moves } }, ...]
//
// 풀이나 세트를 고치고 싶으면 tools/source의 파일을 고친 뒤 이 스크립트를 다시 실행하면 된다.
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const sourceDir = path.join(here, "source");
const dataDir = path.join(here, "..", "src", "main", "resources", "data");

// species_factory_sets.js는 ES 모듈이라, .mjs 사본으로 불러온다
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "bf-sets-"));
const copy = path.join(tmp, "species_factory_sets.mjs");
fs.copyFileSync(path.join(sourceDir, "species_factory_sets.js"), copy);
const SETS = (await import(pathToFileURL(copy).href)).default;
const ELIGIBLE = JSON.parse(fs.readFileSync(path.join(sourceDir, "eligible_pokemon_ids.json"), "utf8"));

const read = (name) => JSON.parse(fs.readFileSync(path.join(dataDir, name), "utf8"));
const pokemon = read("pokemon.json");
const moves = read("moves.json");
const items = read("items.json");

const pokemonIds = new Set(pokemon.map((p) => p.id));
const pokemonNames = new Set(pokemon.map((p) => p.name));
const moveNames = new Set(moves.map((m) => m.name));
const itemNames = new Set(items.map((i) => i.name));

// 게임에 나오는 풀은 "조건에 맞는 포켓몬 중 세트가 있는 종"만이다. 세트가 없으면 도구와 기술이 무작위가 되어
// 어색해지므로 풀에서 뺀다. (세트를 추가하면 다시 이 스크립트를 돌렸을 때 자동으로 풀에 들어온다)
const POOL = ELIGIBLE.filter((id) => {
    const p = pokemon.find((x) => x.id === id);
    return p && SETS[p.name] && SETS[p.name].length > 0;
});

const rows = [];
const problems = [];
for (const [species, sets] of Object.entries(SETS)) {
    if (!pokemonNames.has(species)) problems.push(`세트의 포켓몬이 pokemon.json에 없음: ${species}`);
    for (const set of sets) {
        if (set.item && !itemNames.has(set.item)) problems.push(`${species}: 도구 없음 ${set.item}`);
        for (const slot of set.moves) {
            for (const option of slot) {
                if (!moveNames.has(option.slug)) problems.push(`${species}: 기술 없음 ${option.slug}`);
            }
        }
        if (set.opening && !set.moves.some((slot) => slot.some((o) => o.slug === set.opening))) {
            problems.push(`${species}: opening 기술이 세트의 기술에 없음 ${set.opening}`);
        }
        rows.push({ species, set });
    }
}
for (const id of ELIGIBLE) if (!pokemonIds.has(id)) problems.push(`풀의 번호가 pokemon.json에 없음: ${id}`);
if (new Set(ELIGIBLE).size !== ELIGIBLE.length) problems.push("풀에 중복된 번호가 있음");

if (problems.length > 0) {
    console.error("검증 실패:\n" + problems.slice(0, 30).join("\n"));
    process.exit(1);
}

const toLines = (arr) => "[\n" + arr.map((x) => JSON.stringify(x)).join(",\n") + "\n]\n";
fs.writeFileSync(path.join(dataDir, "pool.json"), JSON.stringify(POOL) + "\n");
fs.writeFileSync(path.join(dataDir, "factory_sets.json"), toLines(rows));

const kb = (f) => (fs.statSync(path.join(dataDir, f)).size / 1024).toFixed(0) + "KB";
console.log(JSON.stringify({
    eligible: ELIGIBLE.length,
    pool: POOL.length,
    species: Object.keys(SETS).length,
    sets: rows.length,
    setsWithoutItem: rows.filter((r) => !r.set.item).length,
    leftOutForNoSet: ELIGIBLE.length - POOL.length,
    files: { pool: kb("pool.json"), factory_sets: kb("factory_sets.json") },
}, null, 2));
