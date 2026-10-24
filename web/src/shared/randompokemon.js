import { PogeyData } from "./pogey";
import { getRandomPokemon, getRandomFactorySet, getMoveByName, getItemByName } from "./processjson";
import { shuffle } from "shared";
import { DEFAULT_MOVES } from "./legalmoves";
import { isNormalizedStats } from "./statMode";
import { ITEM_POOL, SPECIES_EXCLUSIVE_ITEMS, REAL_SET_ONLY_ITEMS } from "./iteminfo";

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
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
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
