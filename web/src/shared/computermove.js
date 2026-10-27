import { damageCalc, MIN_ROLL } from "./damagecalc";
import { CHARGE_MOVES, RECHARGE_MOVES, MULTIHIT_MOVES, PROTECT_MOVES } from "./movemechanics";
import { healAmountOf } from "./cpuresidual";
import { hitChance } from "./accuracy";
import { getUsableMoves } from "./pp";
import { chooseSupportMove } from "./cpustatus";
import { sleepTalkMove } from "./cpuboardmoves";
import { chooseSwitch, pickReplacement } from "./cpuswitch";
import { certainlyFails, effectivePriority } from "./cpufail";
import { movesFirst, bestDamage, hitsToDie, survivesOneHit } from "./cpusetup";
import { megaDelay } from "./cpumega";
import { shedTailInsteadOfSwitch, pivotInsteadOfSwitch } from "./cpupass";
import { hasLiquidOoze } from "./abilities";

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
    // 체력을 회복하는 공격(기가드레인, 흡혈, 드레인키스...)은 체력이 적을수록 회복하는 만큼을 더 쳐 준다
    // (체력 50% 이하에서는 회복량만큼, 25% 이하에서는 두 배로 더한다)
    const drain = move.meta && move.meta.drain > 0 && !attacker.healBlock && !hasLiquidOoze(defender, attacker) ? move.meta.drain : 0;
    if (drain > 0 && damage > 0) {
        const ratio = attacker.hp[0] / attacker.hp[1];
        if (ratio <= 0.5) {
            const heal = Math.min((damage * drain) / 100, attacker.hp[1] - attacker.hp[0]);
            value += heal * (ratio <= 0.25 ? 2 : 1);
        }
    }
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
    // 메가진화를 미루는 포켓몬이면 이번 턴은 진화하지 않는다 (cpumega.js). 미루면서 쓸 기술이 정해져 있으면 그 기술을 쓴다.
    const holder = opponentTeam[0];
    holder.megaHold = false;
    holder.passTarget = null; // 배턴터치, 꼬리자르기로 내보낼 포켓몬은 이번 턴에 새로 정한다
    const delay = megaDelay(playerTeam, opponentTeam);
    if (delay) {
        holder.megaHold = true;
        if (delay.once) holder.megaDelayed = true; // 다음 턴에는 진화한다
        if (delay.move) return delay.move;
    }
    // 자고 있으면 다른 기술은 나가지 않으니 잠꼬대로 아무 기술이나 쓴다
    const sleepTalk = sleepTalkMove(opponentTeam[0]);
    if (sleepTalk) return sleepTalk;
    const opening = openingMove(opponentTeam[0]);
    if (opening) return opening;
    // 선공기: (1) 선공기로 상대를 쓰러뜨릴 수 있으면 마무리, (2) 상대가 나보다 빠르고 가장 센 공격으로 나를 쓰러뜨릴 것이면 죽기 전 마지막 한 방.
    // 반드시 실패하는 기술(사이코필드의 선공기 등)은 고르지 않고, (2)는 실제로 피해를 주는 기술만 쓴다 (방어 같은 선공 변화기는 안 됨).
    const me = opponentTeam[0];
    const foe = playerTeam[0];
    const field = playerTeam.field || opponentTeam.field || null;
    let dyingToFoe = null; // 한 번만 계산한다 (선공기가 하나도 없으면 계산하지 않는다)
    for (const move of usableMoveset(me, foe)) {
        if (effectivePriority(move, me) <= 0 || certainlyFails(move, me, foe, field, playerTeam)) continue;
        const damage = damageCalc(me, foe, move, { field, roll: MIN_ROLL }); // 가장 약한 난수로도 쓰러뜨릴 때만 마무리로 친다
        if (foe.hp[0] - damage <= 0 && !survivesOneHit(foe, me)) return move;
        if (damage <= 0) continue;
        if (dyingToFoe === null) {
            const foeBest = strongestMove(opponentTeam, playerTeam, { estimate: true });
            dyingToFoe = me.hp[0] - damageCalc(foe, me, foeBest, { field }) <= 0 && !survivesOneHit(me, foe);
        }
        if (dyingToFoe && !movesFirst(me, foe, field)) return move;
    }
    // 선공기로 마무리할 수 없으면, 함정 / 회복 / 상태이상 / 랭업기를 써도 되는 상황인지 본다 (한 방에 잡을 수 있으면 건너뛴다)
    const support = chooseSupportMove(playerTeam, opponentTeam);
    if (support) return support;
    // 그럴 상황이 아니면, 지금 포켓몬으로 계속 싸워도 되는지 본다 (cpuswitch.js의 교체 이유와 후보 평가)
    if (canSwitch) {
        const index = chooseSwitch(playerTeam, opponentTeam);
        // 내가 상대보다 빠르고 꼬리자르기가 있으면, 교체 대신 꼬리자르기 (나오는 포켓몬이 이번 턴 공격을 대타로 막는다)
        // 유턴 계열 기술이 있으면 그것도 교체 대신 쓴다 (빠르거나, 느려도 한 방에 쓰러지지 않을 때)
        if (index !== -1) return shedTailInsteadOfSwitch(playerTeam, opponentTeam, index) || pivotInsteadOfSwitch(playerTeam, opponentTeam) || { priority: 6, index };
    } else if (chooseSwitch(playerTeam, opponentTeam) !== -1) {
        // 속박되어 교체할 수 없어도 유턴 계열 기술로는 빠져나갈 수 있다 (교체해야 할 상황일 때)
        const pivot = pivotInsteadOfSwitch(playerTeam, opponentTeam);
        if (pivot) return pivot;
    }
    return strongestMove(playerTeam, opponentTeam);
}

// 쓸 만한 공격이 없어서 변화기 중에서 골라야 할 때, 시간을 버는 기술을 먼저 고른다: 회복기(잃은 체력이 있을 때) > 방어(직전에 쓰지 않았을 때) > 대타출동.
// (독 같은 것으로 상대가 서서히 쓰러지는 동안 버티는 상황에서 엉뚱한 변화기를 누르지 않도록)
function timeBuyingMove(me, moves, field) {
    const status = moves.filter((m) => m.damage_class.name === "status");
    if (!me.healBlock && me.hp[0] < me.hp[1]) {
        let heal = null;
        for (const m of status) if (healAmountOf(me, m, field) > (heal ? healAmountOf(me, heal, field) : 0)) heal = m;
        if (heal) return heal;
    }
    if ((me.stallDivisor || 1) <= 1) {
        const protect = status.find((m) => PROTECT_MOVES[m.name]);
        if (protect) return protect;
    }
    if (!me.substitute && me.hp[0] > Math.floor(me.hp[1] / 4)) {
        const substitute = status.find((m) => m.name === "substitute");
        if (substitute) return substitute;
    }
    return null;
}

// 자폭 계열(쓰면 스스로 쓰러진다)은 상대를 쓰러뜨리거나, 어차피 상대의 다음 공격에 쓰러질 때만 고른다
const SELF_KO_MOVES = new Set(["explosion", "self-destruct", "misty-explosion"]);
function selfKoAllowed(move, me, foe, field, moves) {
    if (!SELF_KO_MOVES.has(move.name)) return true;
    const knocksOut = (m) => foe.hp[0] - damageCalc(me, foe, m, { field, roll: MIN_ROLL }) <= 0 && !survivesOneHit(foe, me);
    // 다른 기술로도 쓰러뜨릴 수 있으면 굳이 자폭하지 않는다
    const other = moves.some((m) => m !== move && !SELF_KO_MOVES.has(m.name) && !certainlyFails(m, me, foe, field) && knocksOut(m));
    return (knocksOut(move) && !other) || hitsToDie(me, bestDamage(foe, me, field), foe) <= 1;
}

// estimate: 상대(플레이어)의 가장 센 기술을 어림할 때. 이때는 자폭 계열도 위협으로 센다.
export function strongestMove(playerTeam, opponentTeam, { estimate = false } = {}) {
    playerTeam = asSeen(playerTeam);
    let damage = 0;
    let choice = null;
    const moves = usableMoveset(opponentTeam[0], playerTeam[0]);
    for (const move of moves) {
        const field = playerTeam.field || opponentTeam.field || null;
        // 쓰면 반드시 실패하는 기술은 가장 센 공격이라도 고르지 않는다
        if (certainlyFails(move, opponentTeam[0], playerTeam[0], field, playerTeam)) continue;
        if (!estimate && !selfKoAllowed(move, opponentTeam[0], playerTeam[0], field, moves)) continue;
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
    // callers assume this never returns null. 실패할 기술은 다른 기술이 있으면 피한다.
    if (choice === null) {
        const field = playerTeam.field || opponentTeam.field || null;
        const working = moves.filter((m) => !certainlyFails(m, opponentTeam[0], playerTeam[0], field, playerTeam));
        const careful = estimate ? working : working.filter((m) => selfKoAllowed(m, opponentTeam[0], playerTeam[0], field, moves));
        const pool = careful.length > 0 ? careful : working.length > 0 ? working : moves;
        choice = (!estimate && timeBuyingMove(opponentTeam[0], pool, field)) || pool[Math.floor(Math.random() * pool.length)];
    }
    return choice;
}

// 쓰러지거나 U턴 같은 기술로 빠진 뒤 나올 포켓몬의 번호 (없으면 -1). cpuswitch.js의 후보 평가를 쓴다.
// freeHit: 나오는 턴에 상대가 공격을 한 번 하는 경우 (먼저 움직인 U턴 등)
export function switchPokemon(playerTeam, opponentTeam, options = {}) {
    return pickReplacement(asSeen(playerTeam), opponentTeam, options);
}
