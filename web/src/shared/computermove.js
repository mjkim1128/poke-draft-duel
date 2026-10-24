import { damageCalc } from "./damagecalc";
import { CHARGE_MOVES, RECHARGE_MOVES, MULTIHIT_MOVES } from "./movemechanics";
import { hitChance } from "./accuracy";
import { getUsableMoves } from "./pp";

// What a single-hit damage number is really worth once the move's catch is counted: a
// charge/recharge move costs a whole extra turn, a multi-hit move lands several times, and
// a move that can miss is worth its chance to connect.
function moveValue(damage, move, attacker, defender, field) {
    let value = damage;
    if (CHARGE_MOVES.has(move.name) || RECHARGE_MOVES.has(move.name)) value = damage / 2;
    const range = MULTIHIT_MOVES[move.name];
    if (range) value = damage * (range[0] === range[1] ? range[0] : 3.1);
    const chance = hitChance(attacker, defender, move, field);
    return chance === null ? value : value * (Math.min(chance, 100) / 100);
}

// A Choice item holder can only pick the move it locked itself into, moves out of PP are
// off the table, and with nothing left the only option is Struggle.
function usableMoveset(pokemon) {
    return getUsableMoves(pokemon);
}

// 상대(컴퓨터)가 지금 나와 있는 포켓몬으로는 아무 피해도 줄 수 없을 때(공격 기술이 전부 무효이거나
// 특성으로 흡수될 때) 바꿔 낼 포켓몬의 번호를 돌려준다. 바꿀 필요가 없거나 바꿀 수 없으면 -1.
// 변화 기술만 가진 포켓몬은 원래 피해를 주지 않으므로 바꾸지 않는다.
export function switchWhenUseless(playerTeam, opponentTeam) {
    const active = opponentTeam[0];
    if (active.charging || active.mustRecharge || playerTeam[0].hp[0] <= 0) return -1;
    const field = playerTeam.field || opponentTeam.field || null;
    const attacks = usableMoveset(active).filter((m) => m.damage_class.name !== "status" && m.name !== "struggle");
    if (attacks.length === 0) return -1;
    if (attacks.some((m) => damageCalc(active, playerTeam[0], m, { field }) > 0)) return -1;
    // 피해를 줄 수 있는 포켓몬 중 가장 센 기술을 가진 쪽으로 바꾼다
    let best = -1;
    let bestDamage = 0;
    opponentTeam.forEach((poke, i) => {
        if (i === 0 || poke.hp[0] <= 0) return;
        for (const m of getUsableMoves(poke)) {
            const d = damageCalc(poke, playerTeam[0], m, { field });
            if (d > bestDamage) [best, bestDamage] = [i, d];
        }
    });
    return best;
}

// canSwitch가 true이면 피해를 줄 수 없을 때 교체를 고를 수 있다 (교체는 priority 6인 가짜 기술이다)
// 세트에 "opening"이 있으면 그 포켓몬이 나온 뒤 첫 행동으로 그 기술을 쓴다 (기합의띠 파르셀의 껍질깨기 등)
function openingMove(pokemon) {
    const slug = pokemon.factorySet && pokemon.factorySet.opening;
    if (!slug || pokemon.actionsSinceSwitch > 0 || pokemon.charging || pokemon.mustRecharge) return null;
    return usableMoveset(pokemon).find((m) => m.name === slug) || null;
}

export function makeMove(playerTeam, opponentTeam, canSwitch = false) {
    if (canSwitch) {
        const index = switchWhenUseless(playerTeam, opponentTeam);
        if (index !== -1) return { priority: 6, index };
    }
    const opening = openingMove(opponentTeam[0]);
    if (opening) return opening;
    for (const move of usableMoveset(opponentTeam[0])) {
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
    return strongestMove(playerTeam, opponentTeam);
}

export function strongestMove(playerTeam, opponentTeam) {
    let damage = 0;
    let choice = null;
    const moves = usableMoveset(opponentTeam[0]);
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

export function switchPokemon(playerTeam, opponentTeam) {
    let options = opponentTeam.filter(
        (poke) => poke !== opponentTeam[0] && poke.hp[0] > 0
    );
    for (const option of options) {
        if (
            option.base_stats[5] > playerTeam[0].base_stats[5] &&
            doesMoveKill(option, playerTeam[0], strongestMove(playerTeam, [option]))
        ) {
            return opponentTeam.indexOf(option);
        }
    }
    let damages = options.map((poke) => {
        return [damageCalc(
            poke,
            playerTeam[0],
            strongestMove(playerTeam, [poke]), poke.hp[0] - damageCalc(playerTeam[0], poke, strongestMove([poke], playerTeam)) > 0 )]
    });
    if (options.length > 1 && damages[0][0] < damages[1][0] && damages[1][1])
        return opponentTeam.indexOf(options[1]);
    else if (options.length >= 1) return opponentTeam.indexOf(options[0]);
    else return -1;
}

export function doesMoveKill(attacker, defender, move) {
    return defender.hp[0] - damageCalc(attacker, defender, move) <= 0;
}