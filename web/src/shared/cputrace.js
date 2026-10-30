// 컴퓨터의 행동 판단을 화면 귀퉁이에 띄운다 (개발 서버에서 ?cpulog=1 로 열었을 때만. 배포용 빌드에서는 아무 일도 하지 않는다)
let panel = null;
const lines = [];

const enabled = () =>
    process.env.NODE_ENV !== "production" && typeof document !== "undefined" && /[?&]cpulog=1/.test(window.location.search);
const pct = (p) => Math.round((p.hp[0] / p.hp[1]) * 100) + "%";

export const moveLabel = (move) => (move && move.priority === 6 && move.index !== undefined ? "교체#" + move.index : move && (move.korean_name || move.name));

function show(line) {
    lines.push(line);
    while (lines.length > 24) lines.shift();
    if (!panel) {
        panel = document.createElement("pre");
        panel.style.cssText =
            "position:fixed;left:0;bottom:0;max-width:90vw;max-height:55vh;overflow:auto;margin:0;padding:10px 14px;background:rgba(0,0,0,.88);color:#9f9;font:16px/1.5 monospace;z-index:99999;white-space:pre-wrap;pointer-events:none";
        document.body.appendChild(panel);
    }
    panel.textContent = lines.join("\n");
    panel.scrollTop = panel.scrollHeight;
}

// 판단 과정의 한 줄 (기술을 고른 게 아니라 이유만 적는다)
export function cpuNote(text) {
    if (enabled()) show("    · " + text);
}

export function cpuTrace(reason, move, playerTeam, opponentTeam) {
    if (!enabled()) return move;
    const me = opponentTeam[0];
    const foe = playerTeam[0];
    show(`[${me.name} ${pct(me)} vs ${foe.name} ${pct(foe)}] ${moveLabel(move)} ← ${reason}`);
    return move;
}
