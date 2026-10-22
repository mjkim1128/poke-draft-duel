import { HealthBar } from "components";
import { HoverPokemonData } from "components";
import { StatusBadges } from "components/StatusBadges";
import { FloatingPopup } from "components/FloatingPopup";
import React, { useRef, useState } from "react";
import { pokemonNameToString, pokemonTypeToString } from "shared";
import "./CurrentPokemon.css";

export function CurrentPokemon(props) {
    const [hover, setHover] = useState(false);
    const imgRef = useRef(null);
    /// While a Substitute is up the doll takes the pokemon's place
    const showsDoll = !!props.pokemon.substitute && props.pokemon.hp[0] > 0 && !!props.substituteImg;

    return (
        <div className="current-pokemon-div">
            <div>
                <p>{pokemonNameToString(props.pokemon)}</p>
                <p>{pokemonTypeToString(props.pokemon.illusion || props.pokemon)}</p>
                <StatusBadges pokemon={props.pokemon} />
            </div>
            <div>
                <HealthBar
                    label=""
                    value={props.pokemon.hp[0]}
                    maxValue={props.pokemon.hp[1]}
                />
                <img ref={imgRef} id={props.pokemon.hp[0] > 0 ? "" : "fainted-current-pokemon"}
                    className={showsDoll ? "substitute-doll" : ""}
                    src={showsDoll ? props.substituteImg : props.img}
                    alt=""
                    onMouseOver={() => setHover(true)}
                    onMouseOut={() => setHover(false)}
                ></img>
                <FloatingPopup anchorRef={imgRef} visible={hover}>
                    <HoverPokemonData pokemon={props.pokemon} />
                </FloatingPopup>
            </div>
        </div>
    );
}
