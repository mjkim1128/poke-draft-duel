import './GameOverDisplay.css';
import React, { useEffect } from 'react';
import { playJingle } from 'audio/bgm';

// 전투가 끝났을 때 화면 전체를 덮는 결과 창.
// 이기면 "swap"(상대 포켓몬과 교체하는 화면)으로, 지면 "home"(처음 화면)으로 보낸다.
export function GameOverDisplay(props) {
    const win = !!props.win;

    useEffect(() => {
        playJingle(win ? "win" : "lose");
    }, [win]);
    const [title, buttonLabel, nextState] = win
        ? ["승리!", "다음 전투로 (포켓몬 교체)", "swap"]
        : ["패배...", "처음부터 다시", "home"];

    return (
        <div className="game-over-overlay" role="dialog" aria-modal="true" aria-label={title}>
            <div className={"game-over-card " + (win ? "win" : "lose")}>
                <img className="game-over-ball" src={process.env.PUBLIC_URL + "/logo192.png"} alt="" />
                <h2 className="game-over-title">{title}</h2>
                <p className="game-over-streak">
                    <strong>{props.winStreak}</strong>연승
                </p>
                <button className="game-over-button" autoFocus onClick={() => props.onClick(nextState)}>
                    {buttonLabel}
                </button>
            </div>
        </div>
    );
}
