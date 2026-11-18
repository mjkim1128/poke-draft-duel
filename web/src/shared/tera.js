// 테라스탈: 팀마다 한 배틀에 한 번, 앞에 나온 포켓몬이 자기 테라스탈 타입의 결정으로 변한다. 배틀이 끝나면 원래대로 돌아온다.
// 변하는 것: 방어할 때의 타입이 테라스탈 타입 하나가 된다. 공격할 때는 원래 타입과 테라스탈 타입 모두 자속 보정을 받는다 (damagecalc.js).
// 테라버스트는 테라스탈한 뒤에 그 타입이 되고 공격과 특공 중 높은 쪽으로 때린다 (field.js adaptMoveToField).
// 처리 자체(발동 문장, 타입 바꾸기)는 turn.js의 terastallize가 한다. 여기는 타입을 정하고 되돌리는 쪽.

export const TERA_TYPES = ["normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy"];

// 가면을 쓴 오거폰은 가면의 타입으로만 테라스탈한다
const MASK_TERA = {
    ogerpon: "grass",
    "ogerpon-wellspring-mask": "water",
    "ogerpon-hearthflame-mask": "fire",
    "ogerpon-cornerstone-mask": "rock",
};
// 오거폰은 테라스탈하면 가면마다 다른 모습으로 바뀐다 (그림은 public/sprites/ogerpon-tera/, Pokemon Wishing Star의 그림에서 뽑은 정지 그림)
const MASK_TERA_FORM = { ogerpon: "teal", "ogerpon-wellspring-mask": "wellspring", "ogerpon-hearthflame-mask": "hearthflame", "ogerpon-cornerstone-mask": "cornerstone" };
export function teraSpritesOf(pokemon) {
    const form = MASK_TERA_FORM[pokemon.name];
    if (!form) return null;
    const base = (process.env.PUBLIC_URL || "") + "/sprites/ogerpon-tera/";
    return { front_default: base + "front_" + form + ".png", back_default: base + "back_" + form + ".png" };
}
export const isOgerpon = (pokemon) => !!pokemon && Object.prototype.hasOwnProperty.call(MASK_TERA, pokemon.name);

const typeNamesOf = (pokemon) => pokemon.types.map((t) => t.type.name);

// 이 포켓몬이 테라스탈할 타입. 세트의 tera가 타입 하나이면 그 타입, 여러 개(자기 타입들)이면 그중 하나를 (배틀마다 한 번) 무작위로 정한다.
// 세트에 없으면 자기 타입 중 하나.
export function teraTypeOf(pokemon) {
    if (pokemon.teraType) return pokemon.teraType;
    const fixed = MASK_TERA[pokemon.name];
    const fromSet = [].concat((pokemon.factorySet && pokemon.factorySet.tera) || []).filter((t) => TERA_TYPES.includes(t));
    const own = typeNamesOf(pokemon.teraOriginal ? { types: pokemon.teraOriginal.types } : pokemon);
    const candidates = fromSet.length > 0 ? fromSet : own;
    pokemon.teraType = fixed || candidates[Math.floor(Math.random() * candidates.length)];
    return pokemon.teraType;
}

// 팀의 앞에 나온 포켓몬이 지금 테라스탈할 수 있는가 (팀이 이번 배틀에서 아직 테라스탈하지 않았을 때)
export function canTerastallize(team) {
    return !!team && !team.teraUsed && team[0].hp[0] > 0 && !team[0].terastallized;
}

// 테라스탈하기 전의 타입들 (이미 테라스탈했다면 기록해 둔 원래 타입)
export function originalTypeNames(pokemon) {
    return pokemon.teraOriginal ? typeNamesOf({ types: pokemon.teraOriginal.types }) : typeNamesOf(pokemon);
}

// 테라스탈한 상태의 자속 보정 배율. 원래 타입과 같은 타입으로 테라스탈하면 2배 (적응력은 2.25배), 다른 타입이면 새 타입도 원래 타입도 1.5배 (적응력은 2배).
// baseStab는 특성이 정하는 보통의 자속 배율 (1.5 또는 적응력의 2).
export function teraStab(attacker, move, baseStab) {
    if (!attacker.terastallized) return null;
    const type = move.type.name;
    const original = originalTypeNames(attacker);
    if (type === attacker.teraType && original.includes(type)) return baseStab > 1.5 ? 2.25 : 2;
    if (type === attacker.teraType || original.includes(type)) return baseStab;
    return 1;
}

// 테라스탈이 풀리고 원래 모습으로 (배틀이 끝났을 때)
export function revertTera(pokemon) {
    if (pokemon.teraOriginal) pokemon.types = pokemon.teraOriginal.types;
    if (pokemon.teraOriginal && pokemon.teraOriginal.sprites) pokemon.sprites = pokemon.teraOriginal.sprites;
    if (pokemon.teraOriginal && pokemon.teraOriginal.ability) {
        pokemon.ability = pokemon.teraOriginal.ability; // 오거폰: 초상투영에서 원래 특성으로
        pokemon.baseAbility = pokemon.teraOriginal.baseAbility;
    }
    pokemon.teraOriginal = null;
    pokemon.terastallized = false; // (테라스탈 타입은 세트가 정해질 때 고정되어 그대로 남는다)
}
