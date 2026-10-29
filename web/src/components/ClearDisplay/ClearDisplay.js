import "./ClearDisplay.css";
import React from "react";
import { isKorean } from "shared/lang";
import { TRAINER_ORION } from "shared/bosspokemon";

// 최종 보스(P.D.D Developer)를 이겼을 때의 화면: 보스가 그림과 함께 마지막 말을 하고, 엔드리스 모드가 열렸다고 알리고, 이어서 할지 처음으로 갈지 묻는다.
export function ClearDisplay(props) {
    const ko = isKorean();
    const title = props.easy ? (ko ? "이지 모드 클리어!" : "Easy Mode Clear!") : ko ? "클리어!" : "Clear!";
    const boss = TRAINER_ORION;
    const bossName = ko ? boss.nameKo : boss.name;
    const lines = props.easy ? (ko ? boss.clearTextEasyKo : boss.clearTextEasy) : ko ? boss.clearTextKo : boss.clearText;
    return (
        <div className="game-over-overlay" role="dialog" aria-modal="true" aria-label={title}>
            <div className="game-over-card win clear-card">
                <img className="clear-boss-img" src={process.env.PUBLIC_URL + "/" + boss.img} alt={bossName} />
                <p className="clear-boss-name">{bossName}</p>
                {lines.map((line, i) => (
                    <p className="clear-boss-line" key={i}>
                        {line}
                    </p>
                ))}
                <h2 className="game-over-title">{title}</h2>
                <p className="game-over-streak">
                    <strong>{props.winStreak}</strong>
                    {ko ? "연승" : " wins"}
                </p>
                {props.easy ? (
                    <p className="clear-unlock">{ko ? "이지 모드로는 엔드리스 모드가 열리지 않아요. 일반 모드로 도전해 보세요!" : "Easy Mode doesn't unlock Endless Mode. Try the normal mode!"}</p>
                ) : (
                    <>
                        <p className="clear-unlock">{ko ? "엔드리스 모드가 열렸습니다!" : "Endless Mode unlocked!"}</p>
                        <button className="game-over-button" autoFocus onClick={props.onContinue}>
                            {ko ? "엔드리스 모드로 계속" : "Continue in Endless Mode"}
                        </button>
                    </>
                )}
                <button className={props.easy ? "game-over-button" : "clear-secondary"} autoFocus={!!props.easy} onClick={props.onHome}>
                    {ko ? "처음으로" : "Back to title"}
                </button>
            </div>
        </div>
    );
}
