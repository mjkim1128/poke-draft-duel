import { PokemonOptions, SelectedPokemon } from "components";
import { useCompactLayout } from "hooks";
import React from "react";
import "./TeamBuilder.css";

export function TeamBuilder(props) {
    const [
        pokemonOptions,
        selectedPokemon,
        setSelectedPokemon,
        playerPokemon,
        setPlayerPokemon,
        setBattleFactoryState,
        rerollOptions,
        isRerolling,
    ] = props.properties;
    const portrait = useCompactLayout();

    function selectPokemon() {
        let temp = [...playerPokemon];
        temp.push(selectedPokemon);
        setPlayerPokemon(temp);
    }

    function deselectPokemon() {
        let temp = playerPokemon.filter((item) => item !== selectedPokemon);
        setPlayerPokemon(temp);
    }

    const selectButton = selectedPokemon &&
        playerPokemon.length < 3 &&
        playerPokemon.indexOf(selectedPokemon) === -1 && (
            <button className="select-pokemon" onClick={selectPokemon} disabled={isRerolling}>
                Select
            </button>
        );
    const deselectButton = selectedPokemon && playerPokemon.indexOf(selectedPokemon) >= 0 && (
        <button className="select-pokemon" onClick={deselectPokemon} disabled={isRerolling}>
            Deselect
        </button>
    );
    const likeButton = playerPokemon.length === 3 && (
        <button
            className="teambuilder-action"
            disabled={isRerolling}
            onClick={() => {
                setBattleFactoryState("battle");
            }}
        >
            I like this team!
        </button>
    );
    const rerollButton = playerPokemon.length < 3 && (
        <button
            className="teambuilder-action"
            disabled={isRerolling}
            onClick={() => {
                rerollOptions();
            }}
        >
            {isRerolling ? "바꾸는 중..." : "REROLL!!!"}
        </button>
    );

    /// On a portrait screen the page is longer than the screen, so the buttons would sit below the
    /// fold. They go into a bar that stays at the bottom of the screen instead.
    if (portrait) {
        return (
            <div className="teambuilder-div">
                <div className="teambuilder-row">
                    <SelectedPokemon pokemon={selectedPokemon} />
                </div>
                <div className={"teambuilder-row" + (isRerolling ? " teambuilder-loading" : "")}>
                    Pick 3:
                    {isRerolling && <span className="teambuilder-loading-text"> 포켓몬을 바꾸는 중...</span>}
                    <PokemonOptions
                        pokemon={pokemonOptions}
                        onClick={setSelectedPokemon}
                        selectedPokemon={selectedPokemon}
                    />
                </div>
                <div className="teambuilder-row">
                    Your Team:
                    <PokemonOptions
                        pokemon={playerPokemon}
                        onClick={setSelectedPokemon}
                        selectedPokemon={selectedPokemon}
                    />
                </div>
                <div className="teambuilder-bar">
                    {selectButton}
                    {deselectButton}
                    {rerollButton}
                    {likeButton}
                </div>
            </div>
        );
    }

    return (
        <div className="teambuilder-div">
            <div className="teambuilder-row">
                {selectedPokemon && (
                    <div>
                        <SelectedPokemon pokemon={selectedPokemon} />
                        {selectButton}
                        {deselectButton}
                    </div>
                )}
            </div>
            <div className={"teambuilder-row" + (isRerolling ? " teambuilder-loading" : "")}>
                Pick 3:
                {isRerolling && <span className="teambuilder-loading-text"> 포켓몬을 바꾸는 중...</span>}
                <PokemonOptions
                    pokemon={pokemonOptions}
                    onClick={setSelectedPokemon}
                    selectedPokemon={selectedPokemon}
                />
            </div>
            <div className="teambuilder-row">
                Your Team:
                <PokemonOptions
                    pokemon={playerPokemon}
                    onClick={setSelectedPokemon}
                    selectedPokemon={selectedPokemon}
                />
                {likeButton}
            </div>
            <div className="teambuilder-row">{rerollButton}</div>
        </div>
    );
}
