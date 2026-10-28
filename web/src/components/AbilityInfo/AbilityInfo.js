import React from "react";
import { abilityLabel } from "shared";
import { abilityDescription } from "shared/abilitydescription";
import "./AbilityInfo.css";

// 특성 이름과 그 설명 (설명 데이터는 PokeAPI에서 받아 둔 것)
export function AbilityInfo({ pokemon }) {
    if (!pokemon.ability) return null;
    const description = abilityDescription(pokemon.ability);
    return (
        <div className="ability-info" title={pokemon.ability.english_name}>
            <p className="ability-info-name">특성: {abilityLabel(pokemon)}</p>
            {description && <p className="ability-info-description">{description}</p>}
        </div>
    );
}
