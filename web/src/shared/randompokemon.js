import { SPRITE_BASE } from "./spritebase";
import { PogeyData } from "./pogey";
import { getRandomPokemon, getRandomFactorySet, getMoveByName, getItemByName } from "./processjson";
import { shuffle } from "shared";
import { DEFAULT_MOVES } from "./legalmoves";
import { isNormalizedStats } from "./statMode";
import { ITEM_POOL, SPECIES_EXCLUSIVE_ITEMS, REAL_SET_ONLY_ITEMS } from "./iteminfo";
import { hasMegaForm } from "./mega";

export async function generateRandomItem(pokemonName) {
    const choices = shuffle(ITEM_POOL.filter((name) => !REAL_SET_ONLY_ITEMS.has(name)));
    for (const itemName of choices) {
        const allowedSpecies = SPECIES_EXCLUSIVE_ITEMS[itemName];
        if (allowedSpecies && !allowedSpecies.includes(pokemonName)) continue;
        return await getItemByName(itemName);
    }
    return await getItemByName(choices[0]);
}

// Real competitive sets (item + moves) mined from Pokemon Showdown's Gen6-9
// "Battle Factory" random-battle format data, restricted to species in our
// pool and to items/moves this engine actually implements. Picking one whole
// set (rather than an item and a moveset independently) keeps them thematically
// consistent, e.g. a Choice Scarf set actually gets that mon's real fast-attacker
// moves instead of a random unrelated kit.
// The sets now live on the server (battlefactory-api); it picks one at random for the species,
// or answers "no content" for species without a set, in which case this returns null.
export async function pickFactorySet(pokemonName, want = {}) {
    return await getRandomFactorySet(pokemonName, want);
}

// Resolves a factory set's move slots (each an array of real alternatives,
// e.g. ["Knock Off", "Foul Play"]) down to one concrete move per slot,
// skipping duplicates if two slots happen to resolve to the same move.
export function resolveFactoryMoveSlugs(factorySet) {
    const chosen = [];
    const usedSlugs = new Set();
    for (const slot of factorySet.moves) {
        const pick = shuffle([...slot]).find((opt) => !usedSlugs.has(opt.slug));
        if (pick) {
            chosen.push(pick);
            usedSlugs.add(pick.slug);
        }
    }
    return chosen;
}

// Only fully-evolved pokemon, pokemon with no evolution at all, and every
// legendary/mythical (regardless of their own evolution stage) are drafted,
// minus anything with a base stat total of 660 or more. That pool lives on the
// server (battlefactory-api); it picks one at random, skipping the ones already on the team.
// 한 파티에서 메가스톤을 들 수 있는 포켓몬의 최대 수와, 메가진화할 수 있는 종이 메가스톤 세트를 받을 확률.
export const MAX_MEGA_STONES = 2;
export const MEGA_STONE_CHANCE = 0.5;

// 파티(포켓몬 이름이 정해진 뒤)에서 메가진화할 수 있는 종마다 1/2 확률로 메가스톤을 든 세트, 아니면 메가스톤이 아닌 세트를 받게 정한다.
// 이미 메가스톤 세트를 받기로 한 포켓몬이 MAX_MEGA_STONES마리면 나머지는 메가스톤이 아닌 세트다. 정한 결과는 pokemon.want.stone에 적는다
// (세트는 이름이 아니라 이 값을 기준으로 서버에서 고른다). 메가진화할 수 없는 종은 건드리지 않는다.
// 네임드 트레이너처럼 want.stone이 이미 정해진 포켓몬은 그대로 두고, 그 중 true인 것은 최대 수에 센다.
// 앞쪽 포켓몬이 유리하지 않게 순서를 섞어서 정한다.
export function assignMegaStones(party, random = Math.random) {
    let stones = party.filter((p) => p && p.want && p.want.stone === true).length;
    const order = shuffle(party.map((_, i) => i));
    for (const i of order) {
        const pokemon = party[i];
        if (!pokemon || !hasMegaForm(pokemon.name)) continue;
        if (pokemon.want && pokemon.want.stone !== undefined) continue; // 이미 정해져 있다
        const stone = stones < MAX_MEGA_STONES && random() < MEGA_STONE_CHANCE;
        if (stone) stones++;
        pokemon.want = { ...(pokemon.want || {}), stone };
    }
    return party;
}

export async function generateRandomPokemon(pokemonTeam) {
    const usedIds = pokemonTeam.filter((mon) => mon).map((mon) => mon.id);
    return await getRandomPokemon(usedIds);
}

export function getPokemonName(data) {
    return data["forms"][0]["name"];
}

export function getPokemonMoves(data) {
    let temp = Array(4).fill(null);
    for (let i = 0; i < 4; i++) {
        let j = Math.floor(Math.random() * data["moves"]["length"]);
        temp[i] = data["moves"][j]["move"]["name"];
    }
    return temp;
}

export function getPokemonImg(pokemonId) {
    return (
        SPRITE_BASE +
        pokemonId.toString() +
        ".png"
    );
}

// The six base stats to battle with (HP, Atk, Def, SpA, SpD, Spe): the species' own values, or
// with the "600" stat mode on (settings) scaled so that the six add up to 600.
export function getBaseStats(pokemon) {
    return isNormalizedStats() ? baseStatTotalTo600(pokemon) : pokemon.stats.map((s) => parseInt(s.base_stat));
}

// Scales the six base stats proportionally so their total is 600 (the "600" stat mode)
export function baseStatTotalTo600(pokemon) {
    const raw = pokemon.stats.map((s) => parseInt(s.base_stat));
    const total = raw.reduce((sum, v) => sum + v, 0);
    return raw.map((v) => Math.floor((v * 600) / total));
}

// returns random key from Set or Map
function getRandomKey(collection) {
    let keys = Array.from(collection.keys());
    return keys[Math.floor(Math.random() * keys.length)];
}

export function getRandomType() {
    return getRandomKey(PogeyData.types).toLowerCase();
}

export async function getGoodRandomMoveset(moves) {
    let choices = [...moves];
    let moveset = [];

    for (const move of choices) {
        let added = false;
        for (const set of moveset) {
            if (
                set.type.name === move.type.name &&
                set.damage_class.name === move.damage_class.name &&
                set.priority === move.priority
            ) {
                moveset[moveset.indexOf(set)] =
                    set.power > move.power ? set : move;
                added = true;
            }
        }
        if (!added) moveset.push(move);
        if (moveset.length === 4) return moveset;
    }
    if (moveset.length < 4) {
        let choices = [...DEFAULT_MOVES];
        shuffle(choices);
        moveset = [...moveset, ...choices.slice(0, 4 - moveset.length)];
    }
    for (let move of moveset) {
        if (move.meta === undefined) move = await getMoveByName(move.name);
        if (move.name === "hidden-power") {
            move.type.name = (" " + getRandomType()).slice(1);
            move.power = 80;
        }
    }
    return moveset;
}

export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// export function getCompetitiveMoves(pokemon, move) {}
