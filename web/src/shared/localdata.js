// 다운로드 버전(Neutralino)의 데이터 계층. 서버(battlefactory-api)가 해 주던 일을 앱에 들어 있는 JSON 파일로 대신한다.
// 웹 버전은 이 파일을 쓰지 않는다 (processjson.js가 REACT_APP_LOCAL_DATA=1로 빌드했을 때만 부른다).
// 서버의 PokemonService / MoveService / ItemService / FactorySetService와 같은 규칙으로 고르고 돌려준다.

import { localizeSprites } from "./spritebase";

const DATA_DIR = "/data/";

let loading = null;
let data = null;

async function readJson(name) {
    const res = await fetch(DATA_DIR + name);
    if (!res.ok) throw new Error(`Local data not found (${res.status}): ${name}`);
    return res.json();
}

// 파일 네 개를 처음 쓸 때 한 번만 읽어서 이름, 번호별로 찾을 수 있게 정리해 둔다
function load() {
    if (!loading) {
        loading = Promise.all([readJson("pokemon.json"), readJson("moves.json"), readJson("items.json"), readJson("factory_sets.json"), readJson("pool.json")]).then(
            ([rawPokemon, moves, items, factorySets, pool]) => {
                const pokemon = localizeSprites(rawPokemon); // 그림 주소를 앱 안의 폴더로
                const setsBySpecies = new Map();
                for (const entry of factorySets) {
                    if (!setsBySpecies.has(entry.species)) setsBySpecies.set(entry.species, []);
                    setsBySpecies.get(entry.species).push(entry.set);
                }
                data = {
                    pokemonById: new Map(pokemon.map((p) => [p.id, p])),
                    pokemonByName: new Map(pokemon.map((p) => [p.name, p])),
                    moveByName: new Map(moves.map((m) => [m.name, m])),
                    itemByName: new Map(items.map((i) => [i.name, i])),
                    megaStones: new Set(items.filter((i) => i.category && i.category.name === "mega-stones").map((i) => i.name)),
                    setsBySpecies,
                    poolIds: pool,
                };
                return data;
            }
        );
        loading.catch(() => {
            loading = null; // 못 읽었으면 다음에 다시 시도한다
        });
    }
    return loading;
}

const notFound = (what, key) => new Error(`${what}를 찾을 수 없습니다: ${key}`);
const pick = (list) => list[Math.floor(Math.random() * list.length)];

export async function localMove(name) {
    const { moveByName } = await load();
    if (!moveByName.has(name)) throw notFound("기술", name);
    return moveByName.get(name);
}

export async function localItem(name) {
    const { itemByName } = await load();
    if (!itemByName.has(name)) throw notFound("도구", name);
    return itemByName.get(name);
}

export async function localPokemonById(id) {
    const { pokemonById } = await load();
    const found = pokemonById.get(Number(id));
    if (!found) throw notFound("포켓몬", id);
    return found;
}

export async function localPokemonByName(name) {
    const { pokemonByName } = await load();
    if (!pokemonByName.has(name)) throw notFound("포켓몬", name);
    return pokemonByName.get(name);
}

// 풀에서 제외할 번호를 뺀 하나를 무작위로
export async function localRandomPokemon(excludeIds = []) {
    const { poolIds, pokemonById } = await load();
    const excluded = new Set(excludeIds.map(Number));
    const candidates = poolIds.filter((id) => !excluded.has(id));
    if (candidates.length === 0) throw new Error("뽑을 수 있는 포켓몬이 없습니다");
    return pokemonById.get(pick(candidates));
}

// 이 포켓몬이 배우는 모든 기술을 학습 목록 순서대로 (데이터에 없는 기술은 뺀다)
export async function localMovesOfPokemon(id) {
    const { moveByName } = await load();
    const pokemon = await localPokemonById(id);
    return pokemon.moves.map((m) => moveByName.get(m.move.name)).filter(Boolean);
}

// ---- 실전 세트 고르기 (FactorySetService와 같은 규칙) ----

// 세트의 도구들 (하나이면 하나, 배열이면 여러 개, 없으면 빈 목록)
const itemsOf = (set) => (set.item == null ? [] : [].concat(set.item));

const hasAbility = (set, ability) => set.ability != null && [].concat(set.ability).includes(ability);
const hasMove = (set, move) => !!set.moves && set.moves.some((slot) => slot.some((option) => option && option.slug === move));

// 도구가 여러 개 중 하나인 세트는 조건에 맞는 도구 하나로 정해서 item을 글자 하나로 바꿔 돌려준다
function resolveItem(set, stone, wanted, megaStones) {
    if (!Array.isArray(set.item)) return set;
    let candidates = itemsOf(set);
    if (stone !== undefined) {
        const byStone = candidates.filter((i) => megaStones.has(i) === stone);
        if (byStone.length > 0) candidates = byStone;
    }
    if (wanted) {
        const byWanted = candidates.filter((i) => wanted.has(i));
        if (byWanted.length > 0) candidates = byWanted;
    }
    return { ...set, item: pick(candidates) };
}

// 조건의 강한 순서: 도구(item) > 특성, 기술 > 메가스톤 여부(stone). 맞는 세트가 없으면 그 조건은 건너뛴다.
// 그 포켓몬의 세트가 없으면 null.
export async function localRandomFactorySet(species, want = {}) {
    const { setsBySpecies, megaStones } = await load();
    let sets = setsBySpecies.get(species) || [];
    if (sets.length === 0) return null;
    const wanted = want.item ? new Set([].concat(want.item).map((s) => String(s).trim()).filter(Boolean)) : null;
    if (wanted && wanted.size > 0) {
        const byItem = sets.filter((s) => itemsOf(s).some((i) => wanted.has(i)));
        if (byItem.length > 0) sets = byItem;
    }
    if (want.ability || want.move) {
        const matching = sets.filter((s) => (!want.ability || hasAbility(s, want.ability)) && (!want.move || hasMove(s, want.move)));
        if (matching.length > 0) sets = matching;
    }
    if (want.stone !== undefined) {
        const byStone = sets.filter((s) => {
            const items = itemsOf(s);
            return items.length === 0 ? !want.stone : items.some((i) => megaStones.has(i) === want.stone);
        });
        if (byStone.length > 0) sets = byStone;
    }
    return resolveItem(pick(sets), want.stone, wanted && wanted.size > 0 ? wanted : null, megaStones);
}
