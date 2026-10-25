import { SelectedPokemon } from "components";
import React, { useState } from "react";
import "./TeamSelect.css";

const PICK_COUNT = 3;

// 배틀 전 선출 화면: 내 6마리와 상대 6마리를 보고 내 3마리를 고른다.
// 고른 순서가 그대로 출전 순서이고, 첫 번째가 선두다. 상대가 고른 3마리는 여기서 알려 주지 않는다.
export function TeamSelect(props) {
    const { playerRoster, opponentRoster, winStreak, onConfirm } = props;
    const [picked, setPicked] = useState([]);
    const [focus, setFocus] = useState(null);
    // 폰처럼 좁은 화면에서는 정보 칸을 줄여서 스크롤 없이 한 화면에 들어오게 한다
    const compact = typeof window !== "undefined" && window.innerWidth <= 600;

    // 내 포켓몬을 누르면 선출, 이미 선출된 포켓몬을 다시 누르면 해제된다.
    // 해제되면 뒤의 순서가 하나씩 앞으로 당겨진다 (1 2 3 에서 2를 해제하면 1 3 이 1 2 가 된다).
    function clickMine(poke) {
        setFocus(poke);
        if (picked.includes(poke)) setPicked(picked.filter((p) => p !== poke));
        else if (picked.length < PICK_COUNT) setPicked([...picked, poke]);
    }

    function cell(poke, i, mine) {
        const order = mine ? picked.indexOf(poke) : -1;
        return (
            <button
                key={i}
                className={
                    "team-select-cell" +
                    (focus === poke ? " focused" : "") +
                    (order >= 0 ? " picked" : "")
                }
                onClick={() => (mine ? clickMine(poke) : setFocus(poke))}
            >
                <img src={poke.sprites.front_default} alt={poke.name} />
                {order >= 0 && <span className="team-select-badge">{order + 1}</span>}
            </button>
        );
    }

    return (
        <div className={"team-select" + (compact ? " compact" : "")}>
            <h2 className="team-select-title">선출 - 현재 {winStreak}연승</h2>
            <div className="team-select-info">
                <SelectedPokemon pokemon={focus} compact={compact} />
            </div>
            <div className="team-select-row">
                <div className="team-select-label">상대 파티 (이 중 3마리가 나옵니다)</div>
                <div className="team-select-grid">{opponentRoster.map((p, i) => cell(p, i, false))}</div>
            </div>
            <div className="team-select-row">
                <div className="team-select-label">
                    내 파티 - {PICK_COUNT}마리를 순서대로 누르세요 ({picked.length}/{PICK_COUNT}, 다시 누르면 해제)
                    <span className="team-select-hint"> · 첫 번째가 선두</span>
                </div>
                <div className="team-select-grid">{playerRoster.map((p, i) => cell(p, i, true))}</div>
            </div>
            <div className="team-select-bar">
                <button
                    className="team-select-go"
                    disabled={picked.length !== PICK_COUNT}
                    onClick={() => onConfirm(picked)}
                >
                    이 3마리로 배틀 시작!
                </button>
            </div>
        </div>
    );
}
