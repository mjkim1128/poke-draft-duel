// 최종 보스(readsPlayer)의 "읽기": 플레이어가 이번 턴에 무엇을 할지(어떤 기술을 쓰는지, 누구로 교체하는지) 알고 나서 행동을 고른다.
// 화면에서는 같은 턴에 동시에 일어나는 것처럼 보이지만, 보스는 그 행동을 알고 있다.
//   - 플레이어가 공격하면: 그 공격을 맞아 줄 포켓몬으로 바꾸거나, 맞기 전에 상대를 쓰러뜨리는 기술을 고른다.
//   - 플레이어가 교체하면: 나오는 포켓몬에게 가장 잘 먹히는 기술로 때리거나, 그 포켓몬에 맞는 포켓몬으로 바꾼다.
// 후보(평소 행동, 공격기 각각, 벤치로 교체 각각)마다 이번 턴이 끝난 뒤의 모습을 계산해서 가장 좋은 쪽을 고른다.
import { damageCalc } from "./damagecalc";
import { skipsChargeInWeather } from "./field";
import { hitChance } from "./accuracy";
import { getUsableMoves } from "./pp";
import { CHARGE_MOVES, RECHARGE_MOVES, MULTIHIT_MOVES, PROTECT_MOVES, EXPLOSIVE_MOVES } from "./movemechanics";
import { certainlyFails, effectivePriority } from "./cpufail";
import { movesFirst, survivesOneHit, setupEffect } from "./cpusetup";
import { healAmountOf } from "./cpuresidual";
import { entryDamage } from "./cpuswitch";
import { matchupScore } from "./bosscounter";

const EXPECTED_ROLL = 92; // 난수(85~100)의 가운데쯤. 계산이 너무 낙관적이거나 비관적이지 않게
const hpFrac = (p) => Math.max(0, p.hp[0]) / p.hp[1];
const withHp = (p, hp) => ({ ...p, hp: [Math.max(0, hp), p.hp[1]] });

// 그 기술이 이번 턴에 입히는 피해의 기댓값 (명중률, 연속기, 충전/반동 기술의 손해를 반영한다)
function expectedDamage(attacker, defender, move, field) {
    if (!move || move.damage_class.name === "status") return 0;
    // 충전이 필요한 기술(솔라빔은 쾌청이면 바로 나간다)은 첫 턴에는 피해가 없다
    if (CHARGE_MOVES.has(move.name) && !attacker.charging) {
        if (!skipsChargeInWeather(move, field)) return 0;
    }
    let damage = damageCalc(attacker, defender, move, { field, roll: EXPECTED_ROLL });
    if (RECHARGE_MOVES.has(move.name)) damage /= 2;
    const range = MULTIHIT_MOVES[move.name];
    if (range) damage *= range[0] === range[1] ? range[0] : 3.1;
    const chance = hitChance(attacker, defender, move, field);
    return chance === null ? damage : damage * (Math.min(chance, 100) / 100);
}

// 이번 턴이 끝났을 때의 모습의 점수 (높을수록 보스에게 좋다)
function position(me, foe) {
    if (me.hp[0] <= 0) return -3; // 내 포켓몬이 쓰러졌다 (다음에 나올 포켓몬까지는 따지지 않는다)
    if (foe.hp[0] <= 0) return 2 + hpFrac(me); // 상대가 쓰러졌다
    return matchupScore(me, foe) + hpFrac(me) - hpFrac(foe);
}

// 플레이어가 이번 턴 하는 행동 한 가지를 보스 쪽 상태에 적용한 뒤의 점수.
// action: 보스가 고른 행동 { kind: "attack", move } | { kind: "switch", index } | { kind: "other", move }
function evaluate(action, ctx) {
    const { me, foe, field, bench, playerMove, incoming, ownTeam } = ctx;
    const playerSwitches = playerMove.priority === 6;
    // 플레이어가 교체하면 이번 턴에는 나오는 포켓몬이 행동하지 않는다: 보스의 공격은 나오는 포켓몬이 맞는다
    if (playerSwitches) {
        if (action.kind === "switch") {
            const b = bench[action.index];
            return position(withHp(b, b.hp[0] - entryDamage(b, ownTeam)), incoming);
        }
        const dealt = action.kind === "attack" ? expectedDamage(me, incoming, action.move, field) : 0;
        let hp = incoming.hp[0] - dealt;
        if (hp <= 0 && survivesOneHit(incoming, me)) hp = 1;
        return position(me, withHp(incoming, hp));
    }

    // 플레이어가 기술을 쓴다. 보호 기술이면 이번 턴 서로 피해가 없다.
    const protectedFoe = !!PROTECT_MOVES[playerMove.name];
    const foeHit = (target) => (protectedFoe ? 0 : expectedDamage(foe, target, playerMove, field));
    // 플레이어의 변화기 효과 (랭업, 회복)
    const setup = setupEffect(playerMove, foe);
    const foeHeal = healAmountOf(foe, playerMove, field);
    const foeAfterEffect = (f) => {
        let g = f;
        if (setup) g = { ...g, stat_levels: setup.levels };
        if (foeHeal > 0 && g.hp[0] > 0) g = withHp(g, Math.min(g.hp[1], g.hp[0] + foeHeal));
        return g;
    };

    if (action.kind === "switch") {
        // 교체가 먼저 일어나서, 나오는 포켓몬이 플레이어의 기술을 맞는다
        const b = bench[action.index];
        const hp = b.hp[0] - entryDamage(b, ownTeam) - foeHit(b);
        return position(withHp(b, hp), foeAfterEffect(foe));
    }

    const move = action.move;
    const myDamaging = move.damage_class.name !== "status" && !protectedFoe;
    const dealt = myDamaging ? expectedDamage(me, foe, move, field) : 0;
    const taken = foeHit(me);
    // 누가 먼저 움직이는가 (우선도가 높은 쪽, 같으면 빠른 쪽)
    const myPriority = effectivePriority(move, me);
    const foePriority = effectivePriority(playerMove, foe);
    const first = myPriority !== foePriority ? myPriority > foePriority : movesFirst(me, foe, field);

    let myHp = me.hp[0];
    let foeHp = foe.hp[0];
    let foeActs = true;
    let myActs = true;
    if (first) {
        foeHp -= dealt;
        if (foeHp <= 0 && !survivesOneHit(foe, me)) foeActs = false;
        else if (foeHp <= 0) foeHp = 1;
        if (foeActs) myHp -= taken;
    } else {
        myHp -= taken;
        if (myHp <= 0 && !survivesOneHit(me, foe)) myActs = false;
        else if (myHp <= 0) myHp = 1;
        if (myActs) foeHp -= dealt;
    }
    let mine = withHp(me, myHp);
    // 변화기를 쓰면 (행동이 막히지 않았을 때) 그 효과를 얻는다
    if (myActs && move.damage_class.name === "status") {
        const mySetup = setupEffect(move, me);
        if (mySetup) mine = { ...mine, stat_levels: mySetup.levels, hp: [Math.max(1, mine.hp[0] - mySetup.hpCost), mine.hp[1]] };
        const heal = healAmountOf(me, move, field);
        if (heal > 0) mine = withHp(mine, Math.min(mine.hp[1], mine.hp[0] + heal));
    }
    const theirs = foeActs ? foeAfterEffect(withHp(foe, foeHp)) : withHp(foe, foeHp);
    return position(mine, theirs);
}

// 이번 턴에 플레이어가 하는 행동(playerMove)을 알고 있을 때 보스가 할 행동. baseline은 읽지 않았을 때(평소 로직)의 행동이다.
// 읽어도 나을 게 없으면 baseline을 그대로 돌려준다.
export function readPlayerMove(playerTeam, opponentTeam, playerMove, baseline, canSwitch) {
    const me = opponentTeam[0];
    if (!playerMove || me.hp[0] <= 0 || me.charging || me.mustRecharge || me.rampage || me.lockedMove) return baseline;
    const playerSwitches = playerMove.priority === 6;
    const incoming = playerSwitches ? playerTeam[playerMove.index] : null;
    if (playerSwitches && (!incoming || incoming.hp[0] <= 0)) return baseline;
    const foe = playerSwitches ? incoming : playerTeam[0];
    if (foe.hp[0] <= 0) return baseline;
    const field = playerTeam.field || opponentTeam.field || null;
    const bench = opponentTeam.map((p) => (p.hp[0] > 0 ? p : null));
    const ctx = { me, foe, field, bench, playerMove, incoming, ownTeam: opponentTeam };

    const candidates = [];
    const add = (action, move) => candidates.push({ action, move, score: evaluate(action, ctx) });
    // 평소 로직이 고른 행동 (변화기, 교체, 공격 무엇이든)
    if (baseline.priority === 6) add({ kind: "switch", index: baseline.index }, baseline);
    else add({ kind: baseline.damage_class.name === "status" ? "other" : "attack", move: baseline }, baseline);
    // 쓸 수 있는 공격기 전부 (반드시 실패하는 기술, 자폭 기술은 뺀다)
    for (const move of getUsableMoves(me, { foe })) {
        if (move.damage_class.name === "status" || EXPLOSIVE_MOVES.has(move.name)) continue;
        if (move === baseline || certainlyFails(move, me, foe, field, playerTeam, opponentTeam)) continue;
        add({ kind: "attack", move }, move);
    }
    // 벤치로 교체
    if (canSwitch) {
        opponentTeam.forEach((p, index) => {
            if (index === 0 || p.hp[0] <= 0 || (baseline.priority === 6 && baseline.index === index)) return;
            add({ kind: "switch", index }, { priority: 6, index });
        });
    }
    const base = candidates[0];
    const best = candidates.reduce((a, c) => (c.score > a.score + 1e-9 ? c : a), base); // 같은 점수면 평소 행동
    return best.move;
}
