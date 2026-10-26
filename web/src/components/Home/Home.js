import { Battle, TeamSelect, PokemonSwap, BossDisplay, ClearDisplay } from "components";
import React, { useEffect, useState } from "react";
import {
    getBaseStats,
    generateRandomPokemon,
    generateRandomItem,
    getGoodRandomMoveset,
    getMoveByName,
    getMovesOfPokemon,
    getItemByName,
    getPokemonByName,
    getRandomType,
    shuffle,
    bossForFloor,
    pickBossTeam,
    FINAL_FLOOR,
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
import { playSong } from "audio/bgm";
import { keepsRawPower } from "shared/movemechanics";
import { isNormalizedStats, setNormalizedStats } from "shared/statMode";

/// Beating the final boss unlocks Endless Mode (no named trainers) on this browser
const ENDLESS_KEY = "battlefactory-endless";
const isEndlessUnlocked = () => {
    try {
        return window.localStorage.getItem(ENDLESS_KEY) === "1";
    } catch (e) {
        return false;
    }
};
const unlockEndless = () => {
    try {
        window.localStorage.setItem(ENDLESS_KEY, "1");
    } catch (e) {
        // not saved, but it stays unlocked for this visit
    }
};

export function Home() {
    const [isApiLoading, setApiLoading] = useState(true);
    /// The two 6-pokemon parties live in playerPokemon / opponentPokemon. Only 3 of each go into a
    /// battle (battleTeams).
    const [battleTeams, setBattleTeams] = useState({ player: [], opponent: [] });
    const [opponentPokemon, setOpponentPokemon] = useState([]);
    const [playerPokemon, setPlayerPokemon] = useState([]);
    const [battleFactoryState, setBattleFactoryState] = useState("home");
    const [winStreak, setWinStreak] = useState(0);
    /// Endless Mode: no named trainers, the run just keeps going
    const [endless, setEndless] = useState(false);
    /// "Total 600" stat mode: picked on the title screen, before a run starts
    const [stats600, setStats600] = useState(isNormalizedStats());
    const [endlessUnlocked, setEndlessUnlocked] = useState(isEndlessUnlocked());
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
                poke.timesHit = 0;
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
            setEndless(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [battleFactoryState]);

    /// Music follows the screen: title, picking, battle (a boss battle has its own), swapping
    useEffect(() => {
        const bossRound = !endless && !!bossForFloor(winStreak);
        const songs = { home: "title", select: "select", swap: "select", battle: bossRound ? "boss" : "battle", boss: "boss", clear: "title" };
        if (songs[battleFactoryState]) playSong(songs[battleFactoryState]);
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
        return fresh;
    }

    /// The opponent's 6 pokemon. A boss brings its own (3 or all 6), any slots it leaves open are random.
    /// `mine` is my own 6: the opponent never brings a pokemon I have
    async function loadOpponentParty(mine = []) {
        const boss = endless ? null : bossForFloor(winStreak);
        const fresh = [];
        for (let i = 0; i < 6; i++) {
            if (boss && i < boss.pokemon.length) {
                /// a boss slot is either a plain name or { name, ability, move } (the set must have them)
                const slot = boss.pokemon[i];
                const { name, ...want } = typeof slot === "string" ? { name: slot } : slot;
                fresh[i] = await getPokemonByName(name);
                fresh[i].want = want;
            } else {
                fresh[i] = await generateRandomPokemon([...mine, ...fresh]);
            }
        }
        await Promise.all(
            fresh.map(async (_, i) => {
                await getPokemonData(fresh, i, () => {});
                await createRandomMoveset(fresh, i, () => {});
            })
        );
        setOpponentPokemon(fresh);
    }

    async function loadNewPokemon(init = true, roster = null) {
        const mine = init ? await loadOptions() : roster || playerPokemon;
        await loadOpponentParty(mine);
        forceUpdate();
    }

    /// 3 of my 6 (in the order picked, the first leads) against 3 of the opponent's 6, chosen at
    /// random. Which 3 the opponent brought isn't shown until they come out in the battle.
    function startBattle(picked) {
        /// a named trainer with a lineup always brings a weather setter and a weather-reactive pokemon
        const boss = endless ? null : bossForFloor(winStreak);
        const opponentTeam = boss && boss.lineup ? pickBossTeam(opponentPokemon, boss.lineup) : shuffle([...opponentPokemon]).slice(0, 3);
        /// The stat mode (settings) is applied as the fight starts, so a change made on the title screen counts
        for (const poke of [...picked, ...opponentPokemon]) refreshStats(poke);
        for (const poke of opponentPokemon) poke.revealed = false;
        opponentTeam[0].revealed = true;
        setBattleTeams({ player: [...picked], opponent: opponentTeam });
        setBattleFactoryState("battle");
    }

    /// Recomputes a pokemon's base stats and HP for the current stat mode, keeping how hurt it is
    function refreshStats(poke) {
        const ratio = poke.hp[1] > 0 ? poke.hp[0] / poke.hp[1] : 1;
        poke.base_stats = getBaseStats(poke);
        const max = hpCalc(poke.base_stats[0]);
        poke.hp = [Math.round(ratio * max), max];
    }

    async function getPokemonData(pokemonData, i, setFunc) {
        pokemonData[i].base_stats = getBaseStats(pokemonData[i]);
        pokemonData[i].moveset = [{ name: "Tackle" }];
        pokemonData[i].hp = [
            hpCalc(pokemonData[i].base_stats[0]),
            hpCalc(pokemonData[i].base_stats[0]),
        ];
        pokemonData[i].stat_levels = Array(7).fill(0); // atk, def, spa, spd, spe, accuracy, evasion
        /// Try a real Showdown "Battle Factory" set first, so item + moveset come
        /// from the same coherent competitive set instead of two unrelated random picks.
        const factorySet = await pickFactorySet(pokemonData[i].name, pokemonData[i].want || {});
        pokemonData[i].factorySet = factorySet;
        /// The item comes from the set only: a set without an item means no item. (A random item is just
        /// a safety net for a species with no set at all, which the pool and the bosses no longer have.)
        pokemonData[i].item = factorySet
            ? factorySet.item
                ? await getItemByName(factorySet.item)
                : null
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
            if (chosen.length >= 1) {
                let moveset = await Promise.all(
                    chosen.map((c) => getMoveByName(c.slug))
                );
                moveset.forEach((m, idx) => {
                    if (chosen[idx].hpType) m.hpTypeHint = chosen[idx].hpType;
                });
                /// A set with fewer than 4 moves just keeps them: no random moves are added to fill it up
                for (let move of moveset) {
                    if (move.name === "hidden-power") {
                        move.type.name = move.hpTypeHint || getRandomType();
                        move.power = 80;
                    } else if (
                        move.name === "explosion" ||
                        move.name === "self-destruct" ||
                        move.name === "misty-explosion" ||
                        move.name === "mind-blown"
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
            if (move.name === "hidden-power") {
                move.type.name = (" " + getRandomType()).slice(1);
                move.power = 80;
            } else if (
                move.name === "explosion" ||
                move.name === "self-destruct" ||
                move.name === "misty-explosion" ||
                move.name === "mind-blown"
            ) {
                // Do nothing
            } else if (move.meta && move.meta.drain < 0)
                move.power =
                    move.power > 120 || move.name === "volt-tackle" ? 150 : 120;
            else if (move.meta && move.damage_class.name !== "status" && !keepsRawPower(move.name, move.accuracy) && move.priority === 0 && move.meta.stat_chance !== 100) {
                if (move.power < 75) move.power = 75;
                if (move.power > 95) move.power = 95;
            }
        }
        shuffle(moves);
        pokemonArr[index].moveset = await getGoodRandomMoveset(moves);
        setFunc(pokemonArr);
    }

    /// Starts a run from the title screen (the pokemon may already be loaded in the background)
    async function startGame(isEndless) {
        setEndless(isEndless);
        if (!optionsFresh.current) {
            setApiLoading(true);
            await loadNewPokemon();
        }
        optionsFresh.current = false;
        setBattleFactoryState("select");
        setApiLoading(false);
    }

    /// A battle just ended and its result card was clicked. Beating the final boss ends the run
    /// with the clear screen; everything else goes where the card said.
    function afterBattle(next) {
        if (next === "swap" && !endless && winStreak > FINAL_FLOOR) {
            unlockEndless();
            setEndlessUnlocked(true);
            setBattleFactoryState("clear");
            return;
        }
        setBattleFactoryState(next);
    }

    /// `roster`: my party after a swap (the state hasn't updated yet when the swap screen calls this)
    async function nextBattle(roster) {
        if (!endless && bossForFloor(winStreak) && battleFactoryState === "swap") {
            setBattleFactoryState("boss");
            return;
        }
        setApiLoading(true);
        await loadNewPokemon(false, roster);
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
                {isKorean() ? "데이터를 불러오는 중..." : "Loading the data..."}
            </div>
        );
    }

    return (
        <div>
            {battleFactoryState === "home" && (
                <div className="start-screen">
                    <div className="start-card">
                        <img className="start-ball" src={process.env.PUBLIC_URL + "/logo192.png"} alt="" />
                        <h1 className="start-title">Poke Draft Duel</h1>
                        <button className="start-button" onClick={() => startGame(false)}>
                            {isKorean() ? "시작하기" : "Start!"}
                        </button>
                        {endlessUnlocked && (
                            <button className="start-button start-button-endless" onClick={() => startGame(true)}>
                                {isKorean() ? "엔드리스 모드" : "Endless Mode"}
                            </button>
                        )}
                        <p className="start-credit">
                            {isKorean() ? "기술·날씨·필드 연출: The Gen 9 Move Animation Project (KRLW890)" : "Move, weather and terrain animations: The Gen 9 Move Animation Project (KRLW890)"}
                            <br />
                            Thanks to the Reborn team for letting people use their resources.
                        </p>
                        <p className="start-mode-label">{isKorean() ? "능력치 (시작 화면에서만 바꿀 수 있어요)" : "Stats (can only be changed here)"}</p>
                        <div className="start-mode">
                            {[
                                [false, isKorean() ? "원본 종족값" : "Original"],
                                [true, isKorean() ? "합계 600 보정" : "Total 600"],
                            ].map(([value, label]) => (
                                <button
                                    key={String(value)}
                                    className={"start-mode-option" + (stats600 === value ? " active" : "")}
                                    aria-pressed={stats600 === value}
                                    onClick={() => {
                                        setNormalizedStats(value);
                                        setStats600(value);
                                    }}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
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
                        setBattleFactoryState={afterBattle}
                        winStreak={winStreak}
                        setWinStreak={setWinStreak}
                    />
                </div>
            )}
            {battleFactoryState === "swap" && (
                <div>
                    <PokemonSwap
                        opponentOptions={battleTeams.opponent.filter((poke) => poke.revealed)}
                        playerRoster={playerPokemon}
                        setPlayerRoster={setPlayerPokemon}
                        nextBattle={nextBattle}
                        winStreak={winStreak}
                    />
                </div>
            )}
            {battleFactoryState === "boss" && (
                <div>
                    <BossDisplay
                        winStreak={winStreak}
                        boss={bossForFloor(winStreak)}
                        nextBattle={nextBattle}
                    />
                </div>
            )}
            {battleFactoryState === "clear" && (
                <ClearDisplay
                    winStreak={winStreak}
                    onContinue={() => {
                        setEndless(true);
                        setBattleFactoryState("swap");
                    }}
                    onHome={() => setBattleFactoryState("home")}
                />
            )}
        </div>
    );
}
