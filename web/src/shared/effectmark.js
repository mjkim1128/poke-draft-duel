// 기술 칸 우측 하단에 보여 주는 상성 배율 표시. 변화기는 표시하지 않는다 (null).
//   4배 ★ / 2배 ◎ / 1배 ○ / 1/2배 △ / 1/4배 ▼ / 효과가 없음 ✕
// 표시의 뜻 (기술 칸 아래에 보여 주는 안내)
export function effectLegend(korean) {
    return korean
        ? "★ 4배 · ◎ 2배 · ○ 1배 · △ 1/2배 · ▼ 1/4배 · ✕ 효과 없음 (상대에게 주는 상성, 변화기는 표시 없음)"
        : "★ 4x · ◎ 2x · ○ 1x · △ 1/2x · ▼ 1/4x · ✕ no effect (type matchup against the foe; status moves show nothing)";
}

export function effectMark(move, multiplier) {
    if (!move || !move.damage_class || move.damage_class.name === "status") return null;
    if (typeof multiplier !== "number" || Number.isNaN(multiplier)) return null;
    if (multiplier <= 0) return "✕";
    if (multiplier >= 4) return "★";
    if (multiplier >= 2) return "◎";
    if (multiplier >= 1) return "○";
    if (multiplier > 0.25) return "△";
    return "▼";
}
