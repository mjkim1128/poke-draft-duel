import { HealthBar } from "components";
import { HoverPokemonData } from "components";
import { StatusBadges } from "components/StatusBadges";
import { FloatingPopup } from "components/FloatingPopup";
import React, { useEffect, useRef, useState } from "react";
import { pokemonNameToString, pokemonTypeToString } from "shared";
import { applyTeraLook } from "animations/teraEffect";
import { TeraBadge } from "components/TeraBadge";
import { isOgerpon } from "shared/tera";
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
    /// 테라스탈한 포켓몬은 타입 색 윤곽선과 질감을 입은 모습이다 (발동 연출이 끝난 뒤부터)
    const isTera = !!props.pokemon.terastallized;
    const teraType = props.pokemon.teraType;
    const ogerpon = isOgerpon(props.pokemon);
    const wasTera = useRef(isTera);
    useEffect(() => {
        if (!isTera || !teraType || !imgRef.current) {
            wasTera.current = isTera;
            return undefined;
        }
        const field = imgRef.current.closest(".bp-field");
        if (!field) return undefined;
        const side = imgRef.current.closest(".bp-player") ? "player" : "opponent";
        const delay = wasTera.current ? 0 : 1100;
        wasTera.current = true;
        let remove = null;
        const timer = setTimeout(() => {
            remove = applyTeraLook(field, side, teraType, { texture: !ogerpon });
        }, delay);
        return () => {
            clearTimeout(timer);
            if (remove) remove();
        };
    }, [isTera, teraType, ogerpon, props.img, props.pokemon.name]);
    /// While a Substitute is up the doll takes the pokemon's place
    const showsDoll = !!props.pokemon.substitute && props.pokemon.hp[0] > 0 && !!props.substituteImg;

    return (
        <div className="current-pokemon-div">
            <div>
                <p>{pokemonNameToString(props.pokemon)}</p>
                <p>{pokemonTypeToString(props.pokemon.illusion || props.pokemon)}<TeraBadge pokemon={props.pokemon} /></p>
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
                    <HoverPokemonData pokemon={props.pokemon} showTera={!!props.own} />
                </FloatingPopup>
            </div>
        </div>
    );
}
