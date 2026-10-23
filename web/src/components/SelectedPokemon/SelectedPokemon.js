import { localName } from "shared/lang";
import { Move } from "components";
import { StatsDisplay } from "components/StatsDisplay";
import { pokemonNameToString, pokemonTypeToString, abilityLabel } from "shared";
import React from "react";
import "./SelectedPokemon.css";

export function SelectedPokemon(props) {
    /// Nothing picked yet: an empty card of the same size, so the screen doesn't jump when the
    /// first pokemon is picked.
    if (!props.pokemon) {
        return (
            <div className="selected-pokemon-div selected-pokemon-empty">
                <p>포켓몬을 누르면 정보가 여기에 표시됩니다</p>
            </div>
        );
    }

    const moves = props.pokemon.moveset.map((move, index) => {
        return (
            <div className="move-row" key={index}>
                <Move 
                    move={move} 
                    onClick={()=>{}}
                />
            </div>
        );
    });

    return (
        <div className="selected-pokemon-div">
            <div className="selected-pokemon-row">
                <img className="pokemon-img"
                    src={props.pokemon.sprites.front_default}
                    alt={props.pokemon.name}
                ></img>
                <div>
                    <p>
                        {pokemonNameToString(props.pokemon)} - {pokemonTypeToString(props.pokemon)}
                    </p>
                    {props.pokemon.ability && (
                        <p className="selected-pokemon-ability" title={props.pokemon.ability.english_name}>
                            특성: {abilityLabel(props.pokemon)}
                        </p>
                    )}
                    {props.pokemon.item && (
                        <p className="selected-pokemon-item">
                            {props.pokemon.item.sprites && props.pokemon.item.sprites.default && (
                                <img
                                    className="selected-pokemon-item-icon"
                                    src={props.pokemon.item.sprites.default}
                                    alt={props.pokemon.item.name}
                                />
                            )}
                            {localName(props.pokemon.item)}
                        </p>
                    )}
                </div>
            </div>
            <div className="selected-pokemon-row">
                <StatsDisplay pokemon={props.pokemon} />
            </div>
            <div>
                {moves !== null && (
                    <div className="selected-pokemon-row">
                        <p className="moves-p"> MOVES: </p>
                        {moves}
                    </div>
                )}
            </div>
        </div>
    );
}
