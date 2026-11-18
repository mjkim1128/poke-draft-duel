import { HealthBar } from "components";
import { HoverPokemonData } from "components";
import { StatusBadges } from "components/StatusBadges";
import { FloatingPopup } from "components/FloatingPopup";
import React, { useEffect, useRef, useState } from "react";
import { pokemonNameToString, pokemonTypeToString } from "shared";
import { texturedSprite, teraOutline } from "animations/teraEffect";
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
    // look: 발동 연출이 끝난 뒤의 테라스탈한 모습 ({ img: 어느 그림에 대한 것인지, url: 질감을 입힌 그림 })
    const [look, setLook] = useState(null);
    useEffect(() => {
        if (!isTera || !teraType) {
            wasTera.current = isTera;
            setLook(null);
            return undefined;
        }
        const delay = wasTera.current ? 0 : 1100; // 방금 테라스탈했으면 연출의 변신 장면이 끝난 뒤부터
        wasTera.current = true;
        let cancelled = false;
        const timer = setTimeout(async () => {
            const url = ogerpon ? null : await texturedSprite(props.img, teraType); // 오거폰은 테라스탈한 모습의 그림이 따로 있어서 질감을 입히지 않는다
            if (!cancelled) setLook({ img: props.img, url });
        }, delay);
        return () => {
            cancelled = true;
            clearTimeout(timer);
            setLook(null); // 교체되거나 그림이 바뀌면 바로 걷힌다
        };
    }, [isTera, teraType, ogerpon, props.img, props.pokemon.name]);
    const lookOn = !!look && look.img === props.img;
    const shownImg = lookOn && look.url ? look.url : props.img;
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
                    src={showsDoll ? props.substituteImg : shownImg}
                    style={lookOn && !showsDoll ? { filter: teraOutline(teraType) } : undefined}
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
