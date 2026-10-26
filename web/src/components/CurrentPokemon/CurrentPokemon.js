import { HealthBar } from "components";
import { HoverPokemonData } from "components";
import { StatusBadges } from "components/StatusBadges";
import { FloatingPopup } from "components/FloatingPopup";
import React, { useEffect, useRef, useState } from "react";
import { pokemonNameToString, pokemonTypeToString } from "shared";
import "./CurrentPokemon.css";

export function CurrentPokemon(props) {
    const [hover, setHover] = useState(false);
    const imgRef = useRef(null);
    /// 같은 포켓몬이 메가진화하는 순간 스프라이트가 잠깐 번쩍인다 (다른 포켓몬으로 바뀐 것은 해당 없음)
    const isMega = !!props.pokemon.megaOriginal;
    const lastSeen = useRef({ name: props.pokemon.name, isMega });
    const [flashing, setFlashing] = useState(false);
    useEffect(() => {
        const before = lastSeen.current;
        lastSeen.current = { name: props.pokemon.name, isMega };
        if (before.name !== props.pokemon.name || before.isMega || !isMega) return undefined;
        setFlashing(true);
        const timer = setTimeout(() => setFlashing(false), 1100);
        return () => clearTimeout(timer);
    }, [props.pokemon.name, isMega]);
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
                <img ref={imgRef} id={props.pokemon.hp[0] > 0 || props.pokemon.faintPending ? "" : "fainted-current-pokemon"}
                    className={(showsDoll ? "substitute-doll" : "") + (flashing ? " mega-flash" : "")}
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
