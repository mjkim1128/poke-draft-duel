// 메가진화: 메가스톤을 든 포켓몬이 한 배틀에 한 번(팀마다) 진화한다. 진화한 모습은 배틀이 끝나면 원래대로 돌아온다.
// 진화 처리 자체(능력치, 특성, 등장 효과)는 turn.js의 megaEvolve가 한다. 여기는 데이터를 찾고 되돌리는 쪽.
import megasData from "./megas.json";
import { localizeSprites } from "./spritebase";
import { prettify } from "./lang";

const megas = localizeSprites(megasData);
const BY_STONE = new Map(megas.map((m) => [m.stone, m]));
const MEGA_BASES = new Set(megas.map((m) => m.base));
export const MEGA_STONES = new Set(BY_STONE.keys());

// 이 종이 메가진화할 수 있는 종인가 (메가스톤을 든 세트가 있는 종)
export const hasMegaForm = (speciesName) => MEGA_BASES.has(speciesName);

// 이 포켓몬이 지금 진화할 수 있는 메가 폼 (스톤이 짝이 맞고 아직 진화하지 않았을 때). 없으면 null.
export function megaFormOf(pokemon) {
    if (!pokemon || pokemon.megaOriginal || !pokemon.item) return null;
    const form = BY_STONE.get(pokemon.item.name);
    return form && form.base === pokemon.name ? form : null;
}

// 팀의 앞에 나온 포켓몬이 지금 메가진화할 수 있는가 (팀이 이번 배틀에서 아직 진화하지 않았을 때)
export function canMegaEvolve(team) {
    return !!team && !team.megaUsed && team[0].hp[0] > 0 && !!megaFormOf(team[0]);
}

// "charizard-mega-x" -> "Mega Charizard X"
export function megaEnglishName(form) {
    const suffix = (form.name.match(/-mega(-[xyz])?$/)[1] || "").replace("-", "").toUpperCase();
    return `Mega ${prettify(form.base)}${suffix ? " " + suffix : ""}`;
}

// 진화하기 전의 모습으로 되돌린다 (배틀이 끝났을 때)
export function revertMega(pokemon) {
    const original = pokemon.megaOriginal;
    if (!original) return;
    Object.assign(pokemon, original);
    pokemon.megaOriginal = null;
    pokemon.megaDelayed = null;
    pokemon.megaHold = false;
}
