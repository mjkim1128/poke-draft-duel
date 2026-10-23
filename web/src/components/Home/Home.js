import { Battle, TeamSelect, PokemonSwap, BossDisplay } from "components";
import React, { useEffect, useState } from "react";
import {
    baseStatTotalTo600,
    generateRandomPokemon,
    generateRandomItem,
    getGoodRandomMoveset,
    getMoveByName,
    getMovesOfPokemon,
    getItemByName,
    getPokemonByName,
    getRandomInt,
    getRandomType,
    shuffle,
    TRAINER_ALAZAR,
    TRAINER_BLAKE,
    hpCalc,
    BANNED_MOVES,
    DEFAULT_MOVES,
    pickFactorySet,
    resolveFactoryMoveSlugs,
    restorePP,
    pickAbility,
    resetAbilityState,
    resetBattleForms,
} from "shared";
import "./StartScreen.css";
import { isKorean } from "shared/lang";
import { keepsRawPower } from "shared/movemechanics";

const BATTLE_ROUNDS = 4;

export function Home() {
    const [isApiLoading, setApiLoading] = useState(true);
    /// The two 6-pokemon parties live in playerPokemon / opponentPokemon. Only 3 of each go into a
    /// battle (battleTeams).
    const [battleTeams, setBattleTeams] = useState({ player: [], opponent: [] });
    const [opponentPokemon, setOpponentPokemon] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [playerPokemon, setPlayerPokemon] = useState([]);
    const [battleFactoryState, setBattleFactoryState] = useState("home");
    const [winStreak, setWinStreak] = useState(0);
    /// True while the options on screen were just loaded and nobody has started a game with them
    /// yet, so "Start!" doesn't have to load them a second time.
    const optionsFresh = React.useRef(false);
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    useEffect(() => {
        loadNewPokemon(true).then(() => setApiLoading(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        forceUpdate();
        if (isApiLoading) return;
        /// glitchy
        setSelectedPokemon(null);
        /// Pokemon Center :)
        let [temp, dumb] = [[...playerPokemon], [...opponentPokemon]];
        for (const arr of [temp, dumb]) {
            for (const poke of arr) {
                poke.hp[0] = poke.hp[1];
                poke.stat_levels = Array(7).fill(0);
                /// Nothing battle-specific should leak into the next fight
                poke.status = null;
                poke.confusion = null;
                poke.lockedMove = null;
                poke.charging = null;
                poke.mustRecharge = false;
                poke.flinched = false;
                poke.trap = null;
                poke.focusEnergy = false;
                poke.mistActive = false;
                poke.torment = false;
                poke.actionsSinceSwitch = 0;
                poke.activeTurns = 0;
                resetAbilityState(poke); /// ability, Transform, Illusion... back to how it started
                resetBattleForms(poke); /// Hero Palafin, Noice Eiscue... are back to their normal form
                poke.disguiseBusted = false;
                poke.hangry = false;
                poke.disabled = null;
                restorePP(poke); /// PP is topped up in the Pokemon Center too
                poke.lastMoveName = null;
                poke.moveRepeatCount = 0;
                /// Held items are restored too, like the rest of the Pokemon Center reset
                if (poke.originalItem !== undefined) poke.item = poke.originalItem;
                poke.consumedItem = null;
            }
            /// Reflect/Light Screen live on the team array itself, not on a pokemon
            arr.reflectTurns = 0;
            arr.lightScreenTurns = 0;
            arr.auroraTurns = 0;
            arr.field = null; /// weather and terrain don't carry over into the next battle
            arr.entered = false; /// on-entry abilities fire again at the start of the next battle
            arr.hazards = null; /// Stealth Rock & co. are gone after the fight
            arr.pendingSwitch = null;
            arr.pivotRequest = null;
            arr.healingWish = null; /// an unused Healing Wish / Lunar Dance is gone
            arr.wish = null;
            arr.futureAttack = null; /// an unresolved Doom Desire / Future Sight doesn't carry over
            arr.dragRequest = false;
            arr.safeguardTurns = 0;
            arr.tailwindTurns = 0;
            arr.queuedMove = null;
            arr.mistTurns = 0;
            arr.luckyChantTurns = 0;
            arr.quickGuardTurn = false;
            arr.wideGuardTurn = false;
            arr.craftyShieldTurn = false;
            arr.matBlockTurn = false;
        }
        setPlayerPokemon(temp);
        setOpponentPokemon(dumb);
        /// (Lose) reset playerPokemon and reset winStreak
        if (battleFactoryState === "home" && playerPokemon.length > 0) {
            setPlayerPokemon([]);
            setWinStreak(0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [battleFactoryState]);

    /// My 6 pokemon: picked first, one after the other so none repeats; each one's item, ability
    /// and moves are then fetched all at the same time. A brand new array is handed to React at the
    /// end: filling the old array in place never told React anything had changed.
    async function loadOptions() {
        const fresh = [];
        for (let i = 0; i < 6; i++) {
            fresh[i] = await generateRandomPokemon(fresh);
        }
        await Promise.all(
            fresh.map(async (_, i) => {
                await getPokemonData(fresh, i, () => {});
                await createRandomMoveset(fresh, i, () => {});
            })
        );
        setPlayerPokemon(fresh);
        optionsFresh.current = true;
    }

    /// The opponent's 6 pokemon. A boss brings its own 3, the other 3 are random.
    async function loadOpponentParty() {
        const boss =
            winStreak === BATTLE_ROUNDS
                ? TRAINER_ALAZAR
                : winStreak === BATTLE_ROUNDS * 2 + 1
                ? TRAINER_BLAKE
                : null;
        const fresh = [];
        for (let i = 0; i < 6; i++) {
            fresh[i] =
                boss && i < 3
                    ? await getPokemonByName(boss.pokemon[i])
                    : await generateRandomPokemon(fresh);
        }
        await Promise.all(
            fresh.map(async (_, i) => {
                await getPokemonData(fresh, i, () => {});
                await createRandomMoveset(fresh, i, () => {});
            })
        );
        setOpponentPokemon(fresh);
    }

    async function loadNewPokemon(init = true) {
        setSelectedPokemon(null);
        if (init) {
            await loadOptions();
        }
        await loadOpponentParty();
        forceUpdate();
    }

    /// 3 of my 6 (in the order picked, the first leads) against 3 of the opponent's 6, chosen at
    /// random. Which 3 the opponent brought isn't shown until they come out in the battle.
    function startBattle(picked) {
        const opponentTeam = shuffle([...opponentPokemon]).slice(0, 3);
        for (const poke of opponentPokemon) poke.revealed = false;
        opponentTeam[0].revealed = true;
        setBattleTeams({ player: [...picked], opponent: opponentTeam });
        setBattleFactoryState("battle");
    }

    async function getPokemonData(pokemonData, i, setFunc) {
        pokemonData[i].base_stats = baseStatTotalTo600(pokemonData[i]);
        pokemonData[i].moveset = [{ name: "Tackle" }];
        pokemonData[i].hp = [
            hpCalc(pokemonData[i].base_stats[0]),
            hpCalc(pokemonData[i].base_stats[0]),
        ];
        pokemonData[i].stat_levels = Array(7).fill(0); // atk, def, spa, spd, spe, accuracy, evasion
        /// Try a real Showdown "Battle Factory" set first, so item + moveset come
        /// from the same coherent competitive set instead of two unrelated random picks.
        const factorySet = await pickFactorySet(pokemonData[i].name);
        pokemonData[i].factorySet = factorySet;
        pokemonData[i].item =
            factorySet && factorySet.item
                ? await getItemByName(factorySet.item)
                : await generateRandomItem(pokemonData[i].name);
        /// Remembered so the item can be restored after every battle, whatever happened to
        /// it in the fight (eaten, popped, knocked off, stolen, traded away).
        pokemonData[i].originalItem = pokemonData[i].item;
        /// Ability: the real set's own ability when there is one, else one of the species' abilities
        pokemonData[i].ability = pickAbility(factorySet, pokemonData[i].abilities);
        pokemonData[i].baseAbility = pokemonData[i].ability; /// what it goes back to after Trace/Mummy/Transform
        /// Klutz makes a held item useless, so those pokemon simply don't get one
        if (pokemonData[i].ability && pokemonData[i].ability.name === "klutz") {
            pokemonData[i].item = null;
            pokemonData[i].originalItem = null;
        }
        pokemonData[i].consumedItem = null;
        pokemonData[i].lockedMove = null;
        pokemonData[i].charging = null; // move it is mid-way through (Fly, Solar Beam, ...)
        pokemonData[i].mustRecharge = false; // just used Hyper Beam & co.
        pokemonData[i].lastMoveName = null;
        pokemonData[i].moveRepeatCount = 0;
        pokemonData[i].status = null; // 무상태
        pokemonData[i].confusion = null; // 무혼란
        setFunc(pokemonData);
    }

    async function createRandomMoveset(pokemonArr, index, setFunc) {
        let moves = [];
        let pokemon = pokemonArr[index];

        /// If a real Showdown "Battle Factory" set was picked for this mon (see getPokemonData),
        /// try to use ITS actual moves first instead of the fully-random diversity pick below.
        if (pokemon.factorySet) {
            /// A set is a real, legal competitive set, so its moves are used as they are. They are
            /// not checked against newMoves: that learnset comes from PokeAPI, which leaves out
            /// egg moves and moves only a pre-evolution learns (Ferrothorn's Leech Seed...).
            const chosen = resolveFactoryMoveSlugs(pokemon.factorySet);
            if (chosen.length >= 2) {
                let moveset = await Promise.all(
                    chosen.map((c) => getMoveByName(c.slug))
                );
                moveset.forEach((m, idx) => {
                    if (chosen[idx].hpType) m.hpTypeHint = chosen[idx].hpType;
                });
                if (moveset.length < 4) {
                    /// The whole learnset is a big request, so it's only fetched when the set
                    /// leaves a slot empty.
                    const newMoves = await getMovesOfPokemon(pokemonArr[index]);
                    pokemonArr[index].moves_data = newMoves;
                    let padChoices = shuffle(
                        newMoves.filter(
                            (m) =>
                                BANNED_MOVES.includes(m.name) === false &&
                                !moveset.some((mm) => mm.name === m.name)
                        )
                    );
                    moveset = [...moveset, ...padChoices].slice(0, 4);
                }
                if (moveset.length < 4) {
                    let padDefaults = shuffle(
                        await Promise.all(
                            DEFAULT_MOVES.map((m) => getMoveByName(m.name))
                        )
                    ).filter((m) => !moveset.some((mm) => mm.name === m.name));
                    moveset = [...moveset, ...padDefaults].slice(0, 4);
                }
                for (let move of moveset) {
                    if (move.name === "hidden-power" || move.name === "secret-power") {
                        move.type.name = move.hpTypeHint || getRandomType();
                        move.power = 80;
                    } else if (
                        move.name === "explosion" ||
                        move.name === "self-destruct"
                    ) {
                        // Do nothing
                    } else if (move.meta && move.meta.drain < 0)
                        move.power =
                            move.power > 120 || move.name === "volt-tackle" ? 150 : 120;
                    else if (
                        move.meta &&
                        move.damage_class.name !== "status" && /// status moves have no power to clamp
                        !keepsRawPower(move.name, move.accuracy) && /// two-turn/recharge/multi-hit/inaccurate moves keep their real power
                        move.priority === 0 &&
                        move.meta.stat_chance !== 100
                    ) {
                        if (move.power < 75) move.power = 75;
                        if (move.power > 95) move.power = 95;
                        else if (move.name === "tri-attack")
                            move.type.name = ["fire", "electric", "ice"][
                                getRandomInt(3)
                            ];
                    }
                }
                pokemonArr[index].moveset = moveset;
                setFunc(pokemonArr);
                return;
            }
        }

        /// Determine whether pokemon should use physical, special, or both categories of moves
        let diff = Math.abs(pokemon.base_stats[1] - pokemon.base_stats[3]);
        let attack =
            diff > 30 ||
            !(pokemon.base_stats[1] > 75 && pokemon.base_stats[3] > 75)
                ? "attack"
                : null;
        if (attack !== null)
            attack =
                pokemon.base_stats[1] > pokemon.base_stats[3]
                    ? "physical"
                    : "special";
        /// New move arr (the server returns the pokemon's whole learnset in one request)
        let newMoves = await getMovesOfPokemon(pokemonArr[index]);
        for (const m of newMoves) {
            if (
                m.damage_class.name !== "status" &&
                m.power &&
                (m.power > 50 || m.priority > 0) &&
                BANNED_MOVES.includes(m.name) === false
            ) {
                if (
                    attack === null ||
                    m.damage_class.name === attack ||
                    (m.priority > 0 && m.damage_class.name === "physical") /// for physical priority moves (& not vacuum wave lol)
                )
                    moves.push(m);
            }
        }
        /// update pokemon moves;
        pokemonArr[index].moves_data = newMoves;
        if (moves.length < 4) {
            let choices = await Promise.all(
                DEFAULT_MOVES.map((m) => getMoveByName(m.name)) // Load the default moves
            );
            shuffle(choices);
            moves = [...moves, ...choices];
        }
        for (let move of moves) {
            if (move.name === "hidden-power" || move.name === "secret-power") {
                move.type.name = (" " + getRandomType()).slice(1);
                move.power = 80;
            } else if (
                move.name === "explosion" ||
                move.name === "self-destruct"
            ) {
                // Do nothing
            } else if (move.meta && move.meta.drain < 0)
                move.power =
                    move.power > 120 || move.name === "volt-tackle" ? 150 : 120;
            else if (move.meta && move.damage_class.name !== "status" && !keepsRawPower(move.name, move.accuracy) && move.priority === 0 && move.meta.stat_chance !== 100) {
                if (move.power < 75) move.power = 75;
                if (move.power > 95) move.power = 95;
                else if (move.name === "tri-attack")
                    move.type.name = ["fire", "electric", "ice"][
                        getRandomInt(3)
                    ];
            }
        }
        shuffle(moves);
        pokemonArr[index].moveset = await getGoodRandomMoveset(moves);
        setFunc(pokemonArr);
    }

    async function nextBattle() {
        if (
            (winStreak + 1) % (BATTLE_ROUNDS + 1) === 0 &&
            winStreak < 10 && // no third boss yet
            battleFactoryState === "swap"
        ) {
            setBattleFactoryState("boss");
            return;
        }
        setApiLoading(true);
        await loadNewPokemon(false);
        setBattleFactoryState("select");
        setApiLoading(false);
    }

    if (isApiLoading) {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",
                }}
            >
                Loading the data...
            </div>
        );
    }

    return (
        <div>
            {battleFactoryState === "home" && (
                <div className="start-screen">
                    <div className="start-card">
                        <img className="start-ball" src={process.env.PUBLIC_URL + "/logo192.png"} alt="" />
                        <h1 className="start-title">Battle Factory</h1>
                        <button
                            className="start-button"
                            onClick={async () => {
                                if (!optionsFresh.current) {
                                    setApiLoading(true);
                                    await loadNewPokemon();
                                }
                                optionsFresh.current = false;
                                setBattleFactoryState("select");
                                setApiLoading(false);
                            }}
                        >
                            {isKorean() ? "시작하기" : "Start!"}
                        </button>
                    </div>
                </div>
            )}
            {battleFactoryState === "select" && (
                <TeamSelect
                    playerRoster={playerPokemon}
                    opponentRoster={opponentPokemon}
                    winStreak={winStreak}
                    onConfirm={startBattle}
                />
            )}
            {battleFactoryState === "battle" && (
                <div>
                    <Battle
                        playerPokemon={battleTeams.player}
                        opponentPokemon={battleTeams.opponent}
                        setBattleFactoryState={setBattleFactoryState}
                        winStreak={winStreak}
                        setWinStreak={setWinStreak}
                    />
                </div>
            )}
            {battleFactoryState === "swap" && (
                <div>
                    <PokemonSwap
                        properties={[
                            battleTeams.opponent.filter((poke) => poke.revealed),
                            selectedPokemon,
                            setSelectedPokemon,
                            playerPokemon,
                            setPlayerPokemon,
                            nextBattle,
                            winStreak,
                        ]}
                    />
                </div>
            )}
            {battleFactoryState === "boss" && (
                <div>
                    <BossDisplay
                        winStreak={winStreak}
                        nextBattle={nextBattle}
                    />
                </div>
            )}
        </div>
    );
}
