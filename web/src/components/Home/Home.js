import { Battle, TeamSelect, PokemonSwap, BossDisplay, ClearDisplay, Rules } from "components";
import React, { useEffect, useState } from "react";
import {
    getBaseStats,
    generateRandomPokemon,
    assignMegaStones,
    generateRandomItem,
    getGoodRandomMoveset,
    getMoveByName,
    getMovesOfPokemon,
    getItemByName,
    getPokemonByName,
    getRandomType,
    shuffle,
    bossForFloor,
    beatNamedTrainer,
    pickBossTeam,
    pickCounterTeam,
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
    previewEntryForm,
    revertMega,
} from "shared";
import "./StartScreen.css";
import { isKorean } from "shared/lang";
import { megaFormOf } from "shared/mega";
import { playSong } from "audio/bgm";
import { keepsRawPower } from "shared/movemechanics";
import { isNormalizedStats, setNormalizedStats } from "shared/statMode";
import { clearEasy, loadEasy, saveEasy, toSavedSet } from "shared/easymode";
import { setSurrenderHandler } from "shared/surrender";
import { beginJourneyRun, consumeInterruptedRun, finishJourney, recordJourneyReset, seedJourney, startJourneyClock } from "shared/journey";
import { readDevJump } from "shared/devjump";

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
    /// Easy Mode (picked on the title screen): the run is saved in this browser, a loss goes back to the same
    /// floor's picking screen, and beating the final boss doesn't unlock Endless Mode
    const [easy, setEasy] = useState(false);
    const [easySave, setEasySave] = useState(loadEasy());
    const [resumeEasyRun, setResumeEasyRun] = useState(false);
    /// The "How to play" window on the title screen
    const [rulesOpen, setRulesOpen] = useState(false);
    /// True while the options on screen were just loaded and nobody has started a game with them
    /// yet, so "Start!" doesn't have to load them a second time.
    const optionsFresh = React.useRef(false);
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    useEffect(() => {
        loadNewPokemon(true).then(() => setApiLoading(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /// Playtest shortcut (dev server only, off in the production build): /?boss=30 opens that boss's screen as soon as the pokemon are loaded
    const devJump = React.useRef(process.env.NODE_ENV !== "production" ? readDevJump(window.location.search) : null);
    useEffect(() => {
        const jump = devJump.current;
        if (!jump || isApiLoading) return;
        devJump.current = null;
        setEndless(false);
        setEasy(jump.easy);
        if (jump.screen === "clear") {
            setWinStreak(FINAL_FLOOR + 1);
            setBattleFactoryState("clear");
            return;
        }
        if (jump.resets !== null || jump.ms !== null) seedJourney(jump.resets, jump.ms);
        setWinStreak(jump.floor);
        setBattleFactoryState("boss");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isApiLoading]);

    /// The journey record (resets and time until the final boss): a run that was cut off by a refresh counts as a reset, and the clock runs while the game is on screen
    useEffect(() => {
        consumeInterruptedRun();
        return startJourneyClock();
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
                poke.rampage = null; /// a fight that ended mid-Outrage must not leave the move locked for the next one
                poke.encore = null;
                poke.taunt = null;
                poke.substitute = null;
                poke.leechSeed = false;
                poke.yawn = null;
                poke.perish = null;
                poke.protection = null;
                poke.destinyBond = false;
                poke.mustRecharge = false;
                poke.flinched = false;
                poke.trap = null;
                poke.focusEnergy = false;
                poke.mistActive = false;
                poke.torment = false;
                poke.actionsSinceSwitch = 0;
                poke.activeTurns = 0;
                revertMega(poke); /// a Mega Evolved pokemon is back to its normal form
                resetAbilityState(poke); /// ability, Transform, Illusion... back to how it started
                /// Hero Palafin, Noice Eiscue... are back to their normal form (kept as the fight begins: they were reset when the last one ended)
                if (battleFactoryState !== "battle") resetBattleForms(poke);
                /// resetAbilityState above put every non-persistent form back (Wishiwashi, Aegislash...), so a school of Wishiwashi is formed again:
                /// the pick screen and the first moment of the fight show it as a school, with no flip to the lone form while it moves
                previewEntryForm(poke);
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
            arr.megaUsed = false; /// the team can Mega Evolve again next battle
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
        /// 개발 서버에서만: ?leadhp=0.9 로 내 선두 포켓몬의 체력 비율을, &leadburn=1 로 화상을 정해서 시험한다 (위에서 모두 회복시킨 뒤, 전투가 시작될 때)
        if (process.env.NODE_ENV !== "production" && battleFactoryState === "battle" && battleTeams.player[0]) {
            const lead = battleTeams.player[0];
            const params = new URLSearchParams(window.location.search);
            const ratio = parseFloat(params.get("leadhp"));
            const max = lead.hp[1] * (parseFloat(params.get("leadscale")) || 1); /// &leadscale=20 으로 최대 체력을 키워 한 방에 쓰러지지 않게 한다
            if (ratio > 0 && ratio <= 1) lead.hp = [Math.max(1, Math.round(max * ratio)), max];
            if (params.get("leadburn") === "1") lead.status = { name: "burn" };
        }
        setPlayerPokemon(temp);
        setOpponentPokemon(dumb);
        /// (Lose) reset playerPokemon and reset winStreak
        if (battleFactoryState === "home" && playerPokemon.length > 0) {
            recordJourneyReset(); /// a loss or a surrender sends the run back to the start
            setPlayerPokemon([]);
            setWinStreak(0);
            setEndless(false);
            setEasy(false);
            setEasySave(loadEasy());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [battleFactoryState]);

    /// Easy Mode: every time a floor's picking screen opens, the floor and my party are saved in this browser
    useEffect(() => {
        if (easy && battleFactoryState === "select" && !isApiLoading && playerPokemon.length === 6) saveEasy(winStreak, playerPokemon);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [easy, battleFactoryState, isApiLoading, playerPokemon, winStreak]);

    /// Surrender in the settings window works on every screen of the run and sends it back to the title (the streak resets).
    /// In a normal-mode battle the Battle screen handles it itself (it counts as a loss and shows the result card).
    useEffect(() => {
        if (battleFactoryState === "home" || battleFactoryState === "clear") return;
        if (!easy && battleFactoryState === "battle") return;
        setSurrenderHandler(() => {
            const message = easy
                ? isKorean()
                    ? "항복하시겠습니까? 층 수가 초기화되고 처음 화면으로 돌아갑니다."
                    : "Surrender? Your floor resets and you go back to the title."
                : isKorean()
                ? "항복하시겠습니까? 패배로 처리되고 연승이 초기화되어 처음 화면으로 돌아갑니다."
                : "Surrender? This counts as a loss, your win streak resets and you go back to the title.";
            if (!window.confirm(message)) return;
            if (easy) clearEasy();
            setBattleFactoryState("home");
        });
        return () => setSurrenderHandler(null);
    }, [easy, battleFactoryState]);

    /// Easy Mode: the saved floor and party are back in place, so carry on from where nextBattle would
    useEffect(() => {
        if (!resumeEasyRun) return;
        setResumeEasyRun(false);
        (async () => {
            if (bossForFloor(winStreak)) {
                setBattleFactoryState("boss");
            } else {
                await loadNewPokemon(false, playerPokemon);
                setBattleFactoryState("select");
            }
            setApiLoading(false);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resumeEasyRun]);

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
        /// 개발 서버에서만: ?lead=minior-red-meteor 로 내 첫 포켓몬을 정해서 시험한다
        if (process.env.NODE_ENV !== "production") {
            const params = new URLSearchParams(window.location.search);
            const lead = params.get("lead");
            if (lead) fresh[0] = await getPokemonByName(lead);
        }
        assignMegaStones(fresh); /// 메가진화할 수 있는 종은 1/2 확률로 메가스톤 세트 (파티에 최대 2마리)
        await Promise.all(
            fresh.map(async (_, i) => {
                await getPokemonData(fresh, i, () => {});
                /// 개발 서버에서만: &leadmoves=shadow-ball,kings-shield 로 내 첫 포켓몬의 기술을 정해서 시험한다
                if (process.env.NODE_ENV !== "production" && i === 0 && fresh[0].factorySet) {
                    const slugs = (new URLSearchParams(window.location.search).get("leadmoves") || "").split(",").filter(Boolean);
                    if (slugs.length > 0) fresh[0].factorySet = { ...fresh[0].factorySet, moves: slugs.map((slug) => [{ slug }]) };
                }
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
        assignMegaStones(fresh);
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
        /// The stat mode (settings) is applied as the fight starts, so a change made on the title screen counts
        const everyone = [...playerPokemon, ...picked, ...opponentPokemon];
        for (const poke of everyone) resetBattleForms(poke); /// stats are recomputed from the species' own base stats, so start from its normal form
        for (const poke of everyone) refreshStats(poke);
        for (const poke of everyone) previewEntryForm(poke);
        /// The final boss picks its 3 against the 3 I picked; an ordinary trainer picks its 3 against my whole party of 6
        const opponentTeam = boss
            ? boss.counter
                ? pickCounterTeam(opponentPokemon, picked)
                : boss.guaranteeMega
                ? pickCounterTeam(opponentPokemon, playerPokemon, Math.random, (p) => !!megaFormOf(p))
                : boss.lineup
                ? pickBossTeam(opponentPokemon, boss.lineup)
                : shuffle([...opponentPokemon]).slice(0, 3)
            : pickCounterTeam(opponentPokemon, playerPokemon);
        for (const poke of opponentPokemon) poke.revealed = false;
        opponentTeam[0].revealed = true;
        opponentTeam.readsPlayer = !!(boss && boss.counter); /// the final boss picks its action knowing what I do this turn (cpuread.js)
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
        /// (a pokemon restored from an Easy Mode save already has its set)
        const factorySet = pokemonData[i].savedSet || (await pickFactorySet(pokemonData[i].name, pokemonData[i].want || {}));
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
        previewEntryForm(pokemonData[i]); /// a school of Wishiwashi shows as the school on the pick screen
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
    async function startGame(isEndless, easyMode = false) {
        setEndless(isEndless);
        setEasy(easyMode);
        if (!isEndless) beginJourneyRun(!easyMode); /// (a refresh in the middle of a normal run sends it back to the start; Easy Mode keeps its floor)
        if (easyMode) clearEasy(); /// a new Easy Mode run replaces the old save
        if (!optionsFresh.current) {
            setApiLoading(true);
            await loadNewPokemon();
        }
        optionsFresh.current = false;
        setBattleFactoryState("select");
        setApiLoading(false);
    }

    /// Easy Mode from the title screen: carries on from the saved floor and party, or starts a new run when there is no save
    async function startEasy() {
        const saved = loadEasy();
        if (!saved) {
            await startGame(false, true);
            return;
        }
        setApiLoading(true);
        try {
            const party = [];
            for (const entry of saved.party) {
                const poke = await getPokemonByName(entry.name);
                poke.savedSet = toSavedSet(entry);
                party.push(poke);
            }
            await Promise.all(
                party.map(async (_, i) => {
                    await getPokemonData(party, i, () => {});
                    await createRandomMoveset(party, i, () => {});
                })
            );
            for (const poke of party) delete poke.savedSet;
            optionsFresh.current = false;
            beginJourneyRun(false);
            setEndless(false);
            setEasy(true);
            setWinStreak(saved.winStreak);
            setPlayerPokemon(party);
            setResumeEasyRun(true);
        } catch (e) {
            /// a save that can't be loaded (a pokemon that no longer exists...) is dropped and the run starts over
            clearEasy();
            setEasySave(null);
            await startGame(false, true);
        }
    }

    /// A battle just ended and its result card was clicked. Beating the final boss ends the run
    /// with the clear screen; everything else goes where the card said.
    function afterBattle(next) {
        if (next === "swap" && !endless && winStreak > FINAL_FLOOR) {
            finishJourney(); /// the final boss is beaten: the next journey is counted from scratch
            if (easy) {
                clearEasy(); /// Easy Mode doesn't unlock Endless Mode, and the finished run is no longer saved
            } else {
                unlockEndless();
                setEndlessUnlocked(true);
            }
            setBattleFactoryState("clear");
            return;
        }
        /// A named trainer's pokemon can't be taken: no swapping after beating one, straight on to the next battle
        if (next === "swap" && beatNamedTrainer(winStreak, endless)) {
            nextBattle(playerPokemon, true);
            return;
        }
        /// Easy Mode: a loss goes back to the picking screen of the same floor
        setBattleFactoryState(easy && next === "home" ? "select" : next);
    }

    /// `roster`: my party after a swap (the state hasn't updated yet when the swap screen calls this)
    /// `afterWin`: a battle was just won (the swap screen, or a named trainer's battle that skips it): a boss waiting on the next floor comes first
    async function nextBattle(roster, afterWin = battleFactoryState === "swap") {
        if (!endless && bossForFloor(winStreak) && afterWin) {
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
                        <button className="start-button start-button-endless" onClick={startEasy}>
                            {isKorean() ? (easySave ? "이지 모드 · " + easySave.winStreak + "연승째 이어하기" : "이지 모드") : easySave ? "Easy Mode · continue from " + easySave.winStreak + " wins" : "Easy Mode"}
                        </button>
                        <p className="start-mode-label">
                            {isKorean()
                                ? "이지 모드: 진행이 저장되고, 져도 같은 층을 다시 도전해요. 엔드리스 모드는 열리지 않아요."
                                : "Easy Mode: your run is saved, a loss retries the same floor, and Endless Mode isn't unlocked."}
                        </p>
                        {endlessUnlocked && (
                            <button className="start-button start-button-endless" onClick={() => startGame(true)}>
                                {isKorean() ? "엔드리스 모드" : "Endless Mode"}
                            </button>
                        )}
                        <button className="start-button start-button-rules" onClick={() => setRulesOpen(true)}>
                            {isKorean() ? "규칙 설명" : "How to play"}
                        </button>
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
            {battleFactoryState === "home" && rulesOpen && <Rules onClose={() => setRulesOpen(false)} />}
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
                        easy={easy}
                        endless={endless}
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
                    easy={easy}
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
