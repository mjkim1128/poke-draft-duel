import { SelectedPokemon } from "components";
import React, { useState } from "react";
import "components/TeamSelect/TeamSelect.css";

// 승리 뒤 교체 화면: 배틀에서 공개된 상대 포켓몬 하나와 내 포켓몬 하나를 고르고 "교체"를 누른다.
export function PokemonSwap(props) {
    const { opponentOptions, playerRoster, setPlayerRoster, nextBattle, winStreak } = props;
    const [theirs, setTheirs] = useState(null);
    const [mine, setMine] = useState(null);
    const [focus, setFocus] = useState(null);

    function swap() {
        const roster = [...playerRoster];
        roster[roster.indexOf(mine)] = theirs;
        setPlayerRoster(roster);
        nextBattle(roster);
    }

    function cell(poke, i, selected, onPick) {
        return (
            <button
                key={i}
                className={"team-select-cell" + (selected ? " picked" : "") + (focus === poke ? " focused" : "")}
                onClick={() => {
                    setFocus(poke);
                    onPick(selected ? null : poke);
                }}
            >
                <img src={poke.sprites.front_default} alt={poke.name} />
            </button>
        );
    }

    return (
        <div className="team-select">
            <h2 className="team-select-title">교체 - 현재 {winStreak}연승</h2>
            <div className="team-select-info">
                <SelectedPokemon pokemon={focus} />
            </div>
            <div className="team-select-row">
                <div className="team-select-label">상대 포켓몬 (배틀에서 본 포켓몬만 데려올 수 있습니다)</div>
                <div className="team-select-grid">
                    {opponentOptions.map((p, i) => cell(p, i, theirs === p, setTheirs))}
                </div>
            </div>
            <div className="team-select-row">
                <div className="team-select-label">내 파티</div>
                <div className="team-select-grid">
                    {playerRoster.map((p, i) => cell(p, i, mine === p, setMine))}
                </div>
            </div>
            <div className="team-select-bar">
                <button className="team-select-go" disabled={!theirs || !mine} onClick={swap}>
                    교체
                </button>
                <button onClick={() => nextBattle()}>교체 없이 다음 전투</button>
            </div>
        </div>
    );
}
