import "./ClearDisplay.css";
import React from "react";
import { isKorean } from "shared/lang";

// 최종 보스를 이겼을 때의 화면: 엔드리스 모드가 열렸다고 알리고, 이어서 할지 처음으로 갈지 묻는다.
export function ClearDisplay(props) {
    const ko = isKorean();
    const title = ko ? "클리어!" : "Clear!";
    return (
        <div className="game-over-overlay" role="dialog" aria-modal="true" aria-label={title}>
            <div className="game-over-card win">
                <img className="game-over-ball" src={process.env.PUBLIC_URL + "/logo192.png"} alt="" />
                <h2 className="game-over-title">{title}</h2>
                <p className="game-over-streak">
                    <strong>{props.winStreak}</strong>
                    {ko ? "연승" : " wins"}
                </p>
                <p className="clear-unlock">{ko ? "엔드리스 모드가 열렸습니다!" : "Endless Mode unlocked!"}</p>
                <button className="game-over-button" autoFocus onClick={props.onContinue}>
                    {ko ? "엔드리스 모드로 계속" : "Continue in Endless Mode"}
                </button>
                <button className="clear-secondary" onClick={props.onHome}>
                    {ko ? "처음으로" : "Back to title"}
                </button>
            </div>
        </div>
    );
}
