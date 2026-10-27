// 컴퓨터가 날씨를 까는 기술(비춤, 쾌청, 모래바람, 싸라기눈, 설경)과 미스트필드, 사이코필드를 쓸지 정하는 규칙.
// 남은 파티(나 포함)에서 이 날씨가 이득이 되는 포켓몬을 센다.
//   - 그 날씨에 반응하는 특성을 가진 포켓몬 (비: 쓱쓱, 젖은접시... / 쾌청: 엽록소, 선파워... / 모래: 모래헤치기... / 눈: 눈치우기...) 1마리마다 1점
//   - 그 날씨가 4배 약점을 덜어 주는 포켓몬 (비는 불꽃을, 쾌청은 물 기술을 약하게 한다. 예: 비 → 핫삼) 1마리마다 1점
// 점수가 0보다 크고, 이미 불고 있는 날씨(있다면)의 점수보다 높을 때만 쓴다. 상대에게 그 날씨가 이득인 특성이 있으면 쓰지 않는다.
// 우선순위는 높다: 함정보다 앞이고 (cpustatus.js), 상대의 공격을 한 번은 버틸 때 쓴다.
//
// 필드 (terrainMove): 내 남은 파티의 절반 이상이 땅에 닿아 있을 때만 (필드는 땅에 닿은 포켓몬만 지켜 준다)
//   - 미스트필드: 상대 남은 파티에 하품이나 수면 상태이상을 거는 기술이 있을 때
//   - 사이코필드: 내 남은 파티(나 포함)에 선공기가 하나도 없고, 지금 나온 상대에게 선공기가 있거나 상대의 남은 포켓몬 중 선공기를 가진 포켓몬이 둘 이상일 때
import { getUsableMoves } from "./pp";
import { WEATHER_MOVES, TERRAIN_MOVES, weatherOf, terrainOf, isGrounded } from "./field";
import { FOE_TARGETS } from "./accuracy";
import { effectivePriority } from "./cpufail";
import { abilityName } from "./abilities";
import { typeEffectiveness } from "./damagecalc";

const RAIN = ["swift-swim", "rain-dish", "hydration", "dry-skin", "forecast"];
const SUN = ["chlorophyll", "solar-power", "leaf-guard", "flower-gift", "protosynthesis", "harvest", "forecast"];
const SAND = ["sand-rush", "sand-force", "sand-veil"];
const SNOW = ["slush-rush", "ice-body", "snow-cloak"];
// 날씨 → 그 날씨에 반응하는 특성
const LIKES = { rain: RAIN, sun: SUN, sand: SAND, hail: SNOW, snow: SNOW };
// 날씨 → 그 날씨가 약하게 하는 공격 타입
const WEAKENS = { rain: "fire", sun: "water" };

const alive = (team) => team.filter((p) => p.hp[0] > 0);

// 이 타입의 공격을 4배로 맞는가
function takesQuadruple(pokemon, type) {
    const probe = { type: { name: type }, damage_class: { name: "special" } };
    return typeEffectiveness(probe, pokemon) >= 4;
}

// 이 날씨가 이 파티에 주는 이득의 점수
export function weatherBenefit(weather, members) {
    let score = 0;
    for (const p of members) {
        if (LIKES[weather].includes(abilityName(p))) score++;
        if (WEAKENS[weather] && takesQuadruple(p, WEAKENS[weather])) score++;
    }
    return score;
}

export function weatherMove(s) {
    const { me, foe, field, myTeam } = s;
    if (s.foeHitsBefore - 1 < 1) return null; // 날씨를 깔려면 한 번은 버텨야 한다
    if (field && field.suppressed) return null; // 날씨를 막는 특성이 있으면 깔아도 소용없다
    const members = alive(myTeam);
    const current = weatherOf(field);
    const currentScore = current ? weatherBenefit(current, members) : 0;
    let best = null;
    let bestScore = 0;
    for (const move of getUsableMoves(me)) {
        const weather = WEATHER_MOVES[move.name];
        if (!weather || move.name === "chilly-reception" || weather === current) continue;
        if (me.cpuStreak && me.cpuStreak.name === move.name) continue; // 같은 날씨 기술을 연속으로 쓰지 않는다
        if (LIKES[weather].includes(abilityName(foe))) continue; // 상대가 이득을 본다
        const score = weatherBenefit(weather, members);
        if (score > currentScore && score > bestScore) [best, bestScore] = [move, score];
    }
    return best;
}

// ---- 필드 (미스트필드, 사이코필드) ----

const remaining = (team) => team.filter((p) => p.hp[0] > 0);

// 하품이나 수면 상태이상을 거는 변화기
const putsToSleep = (move) =>
    move.name === "yawn" || (move.damage_class.name === "status" && !!move.meta && !!move.meta.ailment && move.meta.ailment.name === "sleep");

// 상대를 향하는 선공기 (사이코필드가 땅에 닿은 상대에게 막는 기술. 짓궂은마음이 붙은 변화기도 포함)
const hasPriorityMove = (pokemon) =>
    (pokemon.moveset || []).some(
        (m) => (m.damage_class.name !== "status" || FOE_TARGETS.has(m.target && m.target.name)) && effectivePriority(m, pokemon) > 0
    );

function psychicWanted(s) {
    const { foe, myTeam, foeTeam } = s;
    if (remaining(myTeam).some(hasPriorityMove)) return false; // 내 선공기도 막히므로
    return hasPriorityMove(foe) || remaining(foeTeam).filter(hasPriorityMove).length >= 2;
}

export function terrainMove(s) {
    const { me, field, myTeam, foeTeam } = s;
    if (s.foeHitsBefore - 1 < 1) return null; // 필드를 깔려면 한 번은 버텨야 한다
    const mine = remaining(myTeam);
    if (mine.filter(isGrounded).length * 2 < mine.length) return null; // 필드는 땅에 닿은 포켓몬만 지켜 준다
    const current = terrainOf(field);
    for (const move of getUsableMoves(me)) {
        const terrain = TERRAIN_MOVES[move.name];
        if (!terrain || terrain === current) continue;
        if (me.cpuStreak && me.cpuStreak.name === move.name) continue;
        if (terrain === "misty" && remaining(foeTeam).some((p) => (p.moveset || []).some(putsToSleep))) return move;
        if (terrain === "psychic" && psychicWanted(s)) return move;
    }
    return null;
}
