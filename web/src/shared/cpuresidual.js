// 컴퓨터가 "버티기 / 회복이 의미가 있는지" 따질 때 쓰는 계산: 매 턴 끝에 상태 때문에 깎이는 체력.
import { indirectDamageBlocked } from "./abilities";

// turnsAhead번째 턴 끝에 독, 맹독, 화상, 씨뿌리기, 저주로 깎이는 체력 (매직가드 같은 특성이면 0)
export function residualDamage(pokemon, turnsAhead = 1) {
    if (indirectDamageBlocked(pokemon)) return 0;
    const max = pokemon.hp[1];
    let damage = 0;
    const status = pokemon.status && pokemon.status.name;
    if (status === "poison") damage += Math.floor(max / 8);
    else if (status === "burn") damage += Math.floor(max / 16);
    else if (status === "toxic") damage += Math.max(1, Math.floor(max / 16)) * Math.min(15, (pokemon.status.counter || 1) + turnsAhead - 1);
    if (pokemon.leechSeed) damage += Math.floor(max / 8);
    if (pokemon.cursed) damage += Math.floor(max / 4);
    return damage;
}

// 아무것도 하지 않아도 그 상태 때문에 몇 턴 만에 쓰러지는가 (limit턴 안에 쓰러지지 않으면 Infinity)
export function turnsUntilResidualKO(pokemon, limit = 20) {
    let hp = pokemon.hp[0];
    for (let turn = 1; turn <= limit; turn++) {
        const damage = residualDamage(pokemon, turn);
        if (damage === 0) return Infinity;
        hp -= damage;
        if (hp <= 0) return turn;
    }
    return Infinity;
}
