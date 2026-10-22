import { PokemonOptions, SelectedPokemon } from "components";
import { usePortrait } from "hooks";
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
        loadNewPokemon,
    ] = props.properties;
    const portrait = usePortrait();

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
            <button className="select-pokemon" onClick={selectPokemon}>
                Select
            </button>
        );
    const deselectButton = selectedPokemon && playerPokemon.indexOf(selectedPokemon) >= 0 && (
        <button className="select-pokemon" onClick={deselectPokemon}>
            Deselect
        </button>
    );
    const likeButton = playerPokemon.length === 3 && (
        <button
            className="teambuilder-action"
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
            onClick={() => {
                loadNewPokemon();
            }}
        >
            REROLL!!!
        </button>
    );

    /// On a portrait screen the page is longer than the screen, so the buttons would sit below the
    /// fold. They go into a bar that stays at the bottom of the screen instead.
    if (portrait) {
        return (
            <div className="teambuilder-div">
                <div className="teambuilder-row">{selectedPokemon && <SelectedPokemon pokemon={selectedPokemon} />}</div>
                <div className="teambuilder-row">
                    Pick 3:
                    <PokemonOptions pokemon={pokemonOptions} onClick={setSelectedPokemon} />
                </div>
                <div className="teambuilder-row">
                    Your Team:
                    <PokemonOptions pokemon={playerPokemon} onClick={setSelectedPokemon} />
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
            <div className="teambuilder-row">
                Pick 3:
                <PokemonOptions pokemon={pokemonOptions} onClick={setSelectedPokemon} />
            </div>
            <div className="teambuilder-row">
                Your Team:
                <PokemonOptions pokemon={playerPokemon} onClick={setSelectedPokemon} />
                {likeButton}
            </div>
            <div className="teambuilder-row">{rerollButton}</div>
        </div>
    );
}
