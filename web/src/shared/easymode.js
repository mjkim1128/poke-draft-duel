// 이지 모드: 시작할 때 따로 고르는 모드. 현재 연승 수와 내 파티를 브라우저(localStorage)에 저장해서 새로고침해도 이어서 할 수 있고,
// 져도 같은 층의 선출 화면으로 돌아가며, 최종 보스를 이겨도 엔드리스 모드가 열리지 않는다. 설정창의 항복으로 연승 수를 초기화한다.
// 포켓몬은 통째로 저장하지 않고(배울 수 있는 기술 목록이 커서) 이름, 도구, 특성, 기술만 저장해서 불러올 때 다시 만든다.
const KEY = "battlefactory-easy";
const PARTY_SIZE = 6;

// 포켓몬 한 마리를 저장할 모양으로 줄인다. 배틀 중에 바뀐 것(먹은 도구, 메가진화한 모습)이 아니라 처음 상태를 저장한다.
export function packPokemon(poke) {
    const item = poke.originalItem !== undefined ? poke.originalItem : poke.item;
    const ability = poke.baseAbility || poke.ability;
    return {
        name: poke.name,
        item: item ? item.name : null,
        ability: ability ? ability.name : null,
        moves: poke.moveset.map((m) => (m.name === "hidden-power" ? { slug: m.name, hpType: m.type.name } : { slug: m.name })),
    };
}

// 저장된 한 마리를 세트 모양({ item, ability, moves: [[{ slug }]] })으로 바꾼다. 세트에서 도구와 기술을 뽑는 기존 흐름이 그대로 쓴다.
export function toSavedSet(entry) {
    return {
        item: entry.item || undefined,
        ability: entry.ability || undefined,
        moves: entry.moves.map((m) => [m.hpType ? { slug: m.slug, hpType: m.hpType } : { slug: m.slug }]),
    };
}

const valid = (data) =>
    !!data &&
    Number.isInteger(data.winStreak) &&
    data.winStreak >= 0 &&
    Array.isArray(data.party) &&
    data.party.length === PARTY_SIZE &&
    data.party.every((p) => p && typeof p.name === "string" && Array.isArray(p.moves) && p.moves.length > 0 && p.moves.every((m) => m && typeof m.slug === "string"));

export function saveEasy(winStreak, party) {
    try {
        window.localStorage.setItem(KEY, JSON.stringify({ winStreak, party: party.map(packPokemon) }));
    } catch (e) {
        // 저장하지 못해도 이번 방문에서는 계속 할 수 있다
    }
}

// 저장된 진행. 없거나 망가졌으면 null
export function loadEasy() {
    try {
        const data = JSON.parse(window.localStorage.getItem(KEY));
        return valid(data) ? data : null;
    } catch (e) {
        return null;
    }
}

export function clearEasy() {
    try {
        window.localStorage.removeItem(KEY);
    } catch (e) {
        // 지우지 못해도 어쩔 수 없다
    }
}
