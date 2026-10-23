import './GameOverDisplay.css';
import React from 'react';

// 전투가 끝났을 때 화면 전체를 덮는 결과 창.
// 이기면 "swap"(상대 포켓몬과 교체하는 화면)으로, 지면 "home"(처음 화면)으로 보낸다.
export function GameOverDisplay(props) {
    const win = !!props.win;
    const [title, subtitle, buttonLabel, nextState] = win
        ? ["승리!", props.winStreak + "연승 달성", "다음 전투로 (포켓몬 교체)", "swap"]
        : ["패배...", props.winStreak + "연승에서 끝났습니다", "처음부터 다시", "home"];

    return (
        <div className="game-over-overlay" role="dialog" aria-modal="true" aria-label={title}>
            <div className={"game-over-card " + (win ? "win" : "lose")}>
                <img className="game-over-ball" src={process.env.PUBLIC_URL + "/logo192.png"} alt="" />
                <h2 className="game-over-title">{title}</h2>
                <p className="game-over-sub">{subtitle}</p>
                <dl className="game-over-stats">
                    <div>
                        <dt>걸린 턴</dt>
                        <dd>{props.turns}</dd>
                    </div>
                    <div>
                        <dt>남은 포켓몬</dt>
                        <dd>
                            {props.alive}/{props.total}
                        </dd>
                    </div>
                    <div>
                        <dt>현재 연승</dt>
                        <dd>{props.winStreak}</dd>
                    </div>
                </dl>
                <button className="game-over-button" autoFocus onClick={() => props.onClick(nextState)}>
                    {buttonLabel}
                </button>
            </div>
        </div>
    );
}
