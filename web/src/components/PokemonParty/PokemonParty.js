import { PokemonPartyMember } from "components/PokemonPartyMember";
import './PokemonParty.css';
import React from "react";

export function PokemonParty(props) {


    return(
        <div className="pokemon-party">
            <PokemonPartyMember pokemon={props.pokemon[1]} onClick={props.onClick} index={1} hidden={props.hideUnrevealed && !props.pokemon[1].revealed}/>
            <PokemonPartyMember pokemon={props.pokemon[2]} onClick={props.onClick} index={2} hidden={props.hideUnrevealed && !props.pokemon[2].revealed}/>
        </div>
    )
}