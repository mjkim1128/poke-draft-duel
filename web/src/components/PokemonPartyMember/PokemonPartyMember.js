import { HoverPokemonData } from "components/HoverPokemonData";
import { FloatingPopup } from "components/FloatingPopup";
import React, { useRef, useState } from "react";
import "./PokemonPartyMember.css";

export function PokemonPartyMember(props) {
    const [hover, setHover] = useState(false);
    const anchorRef = useRef(null);

    /// An opponent that has not come out yet: only a "?" is shown, no sprite and no popup
    if (props.hidden) {
        return (
            <div>
                <button className="disabledButton" disabled>
                    <span className="party-unknown">?</span>
                </button>
            </div>
        );
    }

    return (
        <div ref={anchorRef} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
            <button
                className={props.pokemon.hp[0] <= 0 ? "disabledButton" : ""}
                disabled={props.pokemon.hp[0] === 0}
                onClick={() => {
                    if (props.onClick) props.onClick(props.index);
                }}
            >
                <img
                    src={props.pokemon.sprites.front_default}
                    alt={props.pokemon.name}
                ></img>
            </button>
            <FloatingPopup anchorRef={anchorRef} visible={hover}>
                <HoverPokemonData pokemon={props.pokemon} />
            </FloatingPopup>
        </div>
    );
}
