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

    const isPicked = focus && picked.includes(focus);
    const canPick = focus && playerRoster.includes(focus) && !isPicked && picked.length < PICK_COUNT;

    function togglePick() {
        if (isPicked) setPicked(picked.filter((p) => p !== focus));
        else if (canPick) setPicked([...picked, focus]);
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
                onClick={() => setFocus(poke)}
            >
                <img src={poke.sprites.front_default} alt={poke.name} />
                {order >= 0 && <span className="team-select-badge">{order + 1}</span>}
            </button>
        );
    }

    return (
        <div className="team-select">
            <h2 className="team-select-title">선출 - 현재 {winStreak}연승</h2>
            <div className="team-select-info">
                <SelectedPokemon pokemon={focus} />
            </div>
            <div className="team-select-row">
                <div className="team-select-label">상대 파티 (이 중 3마리가 나옵니다)</div>
                <div className="team-select-grid">{opponentRoster.map((p, i) => cell(p, i, false))}</div>
            </div>
            <div className="team-select-row">
                <div className="team-select-label">
                    내 파티 - {PICK_COUNT}마리를 순서대로 고르세요 ({picked.length}/{PICK_COUNT}, 첫 번째가 선두)
                </div>
                <div className="team-select-grid">{playerRoster.map((p, i) => cell(p, i, true))}</div>
            </div>
            <div className="team-select-bar">
                {focus && playerRoster.includes(focus) && (isPicked || canPick) && (
                    <button onClick={togglePick}>{isPicked ? "선출 해제" : "선출"}</button>
                )}
                {picked.length === PICK_COUNT && (
                    <button className="team-select-go" onClick={() => onConfirm(picked)}>
                        이 3마리로 배틀 시작!
                    </button>
                )}
            </div>
        </div>
    );
}
