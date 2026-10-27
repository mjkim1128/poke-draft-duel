// 컴퓨터가 날씨를 까는 기술(비춤, 쾌청, 모래바람, 싸라기눈, 설경)을 쓸지 정하는 규칙.
// 남은 파티(나 포함)에서 이 날씨가 이득이 되는 포켓몬을 센다.
//   - 그 날씨에 반응하는 특성을 가진 포켓몬 (비: 쓱쓱, 젖은접시... / 쾌청: 엽록소, 선파워... / 모래: 모래헤치기... / 눈: 눈치우기...) 1마리마다 1점
//   - 그 날씨가 4배 약점을 덜어 주는 포켓몬 (비는 불꽃을, 쾌청은 물 기술을 약하게 한다. 예: 비 → 핫삼) 1마리마다 1점
// 점수가 0보다 크고, 이미 불고 있는 날씨(있다면)의 점수보다 높을 때만 쓴다. 상대에게 그 날씨가 이득인 특성이 있으면 쓰지 않는다.
// 우선순위는 높다: 함정보다 앞이고 (cpustatus.js), 상대의 공격을 한 번은 버틸 때 쓴다.
import { getUsableMoves } from "./pp";
import { WEATHER_MOVES, weatherOf } from "./field";
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
