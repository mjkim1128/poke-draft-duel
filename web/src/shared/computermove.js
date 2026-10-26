import { damageCalc } from "./damagecalc";
import { CHARGE_MOVES, RECHARGE_MOVES, MULTIHIT_MOVES } from "./movemechanics";
import { hitChance } from "./accuracy";
import { getUsableMoves } from "./pp";
import { chooseSupportMove } from "./cpustatus";
import { sleepTalkMove } from "./cpuboardmoves";
import { chooseSwitch, pickReplacement } from "./cpuswitch";

// How the CPU sees my pokemon: one under Illusion looks like the pokemon it copies (its types and
// stats), until the disguise breaks. The real battle math still uses the real pokemon.
function perceived(pokemon) {
    const d = pokemon.disguise;
    return d ? { ...pokemon, types: d.types, base_stats: d.base_stats } : pokemon;
}

// What a single-hit damage number is really worth once the move's catch is counted: a
// charge/recharge move costs a whole extra turn, a multi-hit move lands several times, and
// a move that can miss is worth its chance to connect.
function moveValue(damage, move, attacker, defender, field) {
    let value = damage;
    // Focus Punch fails when it is hit first, so it is only worth using against a foe that can't attack this turn
    if (move.name === "focus-punch" && !(defender.status && defender.status.name === "sleep") &&
        getUsableMoves(defender).some((m) => m.damage_class.name !== "status")) value = damage * 0.1;
    if (CHARGE_MOVES.has(move.name) || RECHARGE_MOVES.has(move.name)) value = damage / 2;
    const range = MULTIHIT_MOVES[move.name];
    if (range) value = damage * (range[0] === range[1] ? range[0] : 3.1);
    const chance = hitChance(attacker, defender, move, field);
    return chance === null ? value : value * (Math.min(chance, 100) / 100);
}

// A Choice item holder can only pick the move it locked itself into, moves out of PP are
// off the table, and with nothing left the only option is Struggle.
function usableMoveset(pokemon, foe = null) {
    return getUsableMoves(pokemon, { foe });
}

// 세트에 "opening"이 있으면 그 포켓몬이 나온 뒤 첫 행동으로 그 기술을 쓴다 (기합의띠 파르셀의 껍질깨기 등)
function openingMove(pokemon) {
    const slug = pokemon.factorySet && pokemon.factorySet.opening;
    if (!slug || pokemon.actionsSinceSwitch > 0 || pokemon.charging || pokemon.mustRecharge) return null;
    return usableMoveset(pokemon).find((m) => m.name === slug) || null;
}

// The player's team with its active pokemon replaced by what the CPU believes it is
function asSeen(playerTeam) {
    const seen = perceived(playerTeam[0]);
    if (seen === playerTeam[0]) return playerTeam;
    const copy = [seen, ...playerTeam.slice(1)];
    copy.field = playerTeam.field;
    return copy;
}

// canSwitch가 true이면 교체를 고를 수 있다 (교체는 priority 6인 가짜 기술이다)
export function makeMove(playerTeam, opponentTeam, canSwitch = false) {
    playerTeam = asSeen(playerTeam);
    // 자고 있으면 다른 기술은 나가지 않으니 잠꼬대로 아무 기술이나 쓴다
    const sleepTalk = sleepTalkMove(opponentTeam[0]);
    if (sleepTalk) return sleepTalk;
    const opening = openingMove(opponentTeam[0]);
    if (opening) return opening;
    for (const move of usableMoveset(opponentTeam[0], playerTeam[0])) {
        // attempt for priority
        if (
            playerTeam[0].hp[0] -
                damageCalc(opponentTeam[0], playerTeam[0], move) <=
                0 &&
            move.priority > 0
        )
            return move;
        // above works, attempt 2 for last hit before dying
        if (
            opponentTeam[0].hp[0] -
                damageCalc(
                    playerTeam[0],
                    opponentTeam[0],
                    strongestMove(opponentTeam, playerTeam)
                ) <=
                0 &&
            move.priority > 0 &&
            playerTeam[0].base_stats[5] > opponentTeam[0].base_stats[5]
        )
            return move;
    }
    // 선공기로 마무리할 수 없으면, 함정 / 회복 / 상태이상 / 랭업기를 써도 되는 상황인지 본다 (한 방에 잡을 수 있으면 건너뛴다)
    const support = chooseSupportMove(playerTeam, opponentTeam);
    if (support) return support;
    // 그럴 상황이 아니면, 지금 포켓몬으로 계속 싸워도 되는지 본다 (cpuswitch.js의 교체 이유와 후보 평가)
    if (canSwitch) {
        const index = chooseSwitch(playerTeam, opponentTeam);
        if (index !== -1) return { priority: 6, index };
    }
    return strongestMove(playerTeam, opponentTeam);
}

export function strongestMove(playerTeam, opponentTeam) {
    playerTeam = asSeen(playerTeam);
    let damage = 0;
    let choice = null;
    const moves = usableMoveset(opponentTeam[0], playerTeam[0]);
    for (const move of moves) {
        const field = playerTeam.field || opponentTeam.field || null;
        const value = moveValue(
            damageCalc(opponentTeam[0], playerTeam[0], move, { field }),
            move,
            opponentTeam[0],
            playerTeam[0],
            field
        );
        [damage, choice] = value > damage ? [value, move] : [damage, choice];
    }
    // Nothing deals damage (all status moves, or all immune): still return a real move,
    // callers assume this never returns null.
    if (choice === null) choice = moves[Math.floor(Math.random() * moves.length)];
    return choice;
}

// 쓰러지거나 U턴 같은 기술로 빠진 뒤 나올 포켓몬의 번호 (없으면 -1). cpuswitch.js의 후보 평가를 쓴다.
// freeHit: 나오는 턴에 상대가 공격을 한 번 하는 경우 (먼저 움직인 U턴 등)
export function switchPokemon(playerTeam, opponentTeam, options = {}) {
    return pickReplacement(asSeen(playerTeam), opponentTeam, options);
}
