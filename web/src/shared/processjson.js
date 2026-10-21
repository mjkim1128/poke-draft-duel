import { fetchWithRetry } from "./serverStatus";

export const lodash = require("lodash");

// 포켓몬/기술/도구 데이터는 PokeAPI가 아니라 우리 서버(battlefactory-api)에서 가져온다.
// 개발 중에는 package.json의 "proxy"가 /api 요청을 서버(localhost:8080)로 전달한다.
// 서버가 돌려주는 JSON은 예전에 PokeAPI 응답을 getCustom*Data로 추려 만들던 모양과 같다
// (korean_name, target, meta 등 포함), 그래서 받은 값을 그대로 쓴다.
const API_BASE = "/api";

// In-memory caches so a pokemon/move already fetched this session never triggers
// a second network request (only newly-seen ids/names pay the request cost).
const pokemonByIdCache = new Map();
const pokemonByNameCache = new Map();
const moveByNameCache = new Map();
const itemByNameCache = new Map();

async function fetchFromApi(path) {
    const url = `${API_BASE}${path}`;
    // 서버가 잠들어 있다 깨어나는 동안에는 실패해도 다시 시도한다 (serverStatus.js)
    const res = await fetchWithRetry(url);
    if (!res.ok) {
        throw new Error(`API request failed (${res.status}): ${url}`);
    }
    return res.json();
}

export async function getMoveByName(name) {
    if (moveByNameCache.has(name)) {
        return lodash.cloneDeep(moveByNameCache.get(name));
    }
    const move = await fetchFromApi(`/moves/${encodeURIComponent(name)}`);
    moveByNameCache.set(move.name, move);
    return lodash.cloneDeep(move);
}

export async function getItemByName(name) {
    if (itemByNameCache.has(name)) {
        return lodash.cloneDeep(itemByNameCache.get(name));
    }
    const item = await fetchFromApi(`/items/${encodeURIComponent(name)}`);
    itemByNameCache.set(item.name, item);
    return lodash.cloneDeep(item);
}

function cachePokemon(pokemon) {
    pokemonByIdCache.set(pokemon.id, pokemon);
    pokemonByNameCache.set(pokemon.name, pokemon);
}

export async function getPokemonById(id) {
    if (pokemonByIdCache.has(id)) {
        return lodash.cloneDeep(pokemonByIdCache.get(id));
    }
    const pokemon = await fetchFromApi(`/pokemon/${encodeURIComponent(id)}`);
    cachePokemon(pokemon);
    return lodash.cloneDeep(pokemon);
}

export async function getPokemonByName(name) {
    if (pokemonByNameCache.has(name)) {
        return lodash.cloneDeep(pokemonByNameCache.get(name));
    }
    const pokemon = await fetchFromApi(`/pokemon/name/${encodeURIComponent(name)}`);
    cachePokemon(pokemon);
    return lodash.cloneDeep(pokemon);
}

// 게임에 등장하는 포켓몬(풀) 중 하나를 서버가 무작위로 골라 준다.
// excludeIds는 이미 팀에 있는 포켓몬 번호로, 서버가 이 번호들을 빼고 고른다.
export async function getRandomPokemon(excludeIds = []) {
    const pokemon = await fetchFromApi(`/pokemon/random?exclude=${excludeIds.join(",")}`);
    cachePokemon(pokemon);
    return lodash.cloneDeep(pokemon);
}

// 그 포켓몬의 실전 세트(도구, 특성, 기술 후보) 중 하나를 서버가 무작위로 골라 준다.
// 세트가 없는 포켓몬이면 서버가 204(내용 없음)로 답하고, 그때는 null을 돌려준다.
export async function getRandomFactorySet(species) {
    const url = `${API_BASE}/factory-sets/random?species=${encodeURIComponent(species)}`;
    const res = await fetchWithRetry(url);
    if (res.status === 204) {
        return null;
    }
    if (!res.ok) {
        throw new Error(`API request failed (${res.status}): ${url}`);
    }
    return res.json();
}

// 포켓몬이 배울 수 있는 모든 기술을 한 번의 요청으로 가져온다 (pokemon.moves, 즉 학습 목록과 같은 순서).
// 예전에는 기술마다 getMoveByName을 따로 불러 포켓몬 한 마리에 수십~백 번 요청했다.
// 받아 온 기술은 캐시에 넣어 두어서, 이후 getMoveByName은 요청 없이 바로 돌려준다.
export async function getMovesOfPokemon(pokemon) {
    const learnset = pokemon.moves.map((m) => m.move.name);
    if (learnset.every((name) => moveByNameCache.has(name))) {
        return learnset.map((name) => lodash.cloneDeep(moveByNameCache.get(name)));
    }
    const moves = await fetchFromApi(`/pokemon/${encodeURIComponent(pokemon.id)}/moves`);
    for (const move of moves) {
        moveByNameCache.set(move.name, move);
    }
    return moves.map((move) => lodash.cloneDeep(move));
}
