// 이름과 타입 옆에 나오는 테라스탈 정보: 그 포켓몬의 테라스탈 타입 아이콘(Deluxe Battle Kit의 타입 그림)과 이름.
// 테라스탈한 뒤에는 타입 색으로 칠해서 "테라스탈 OO". 하기 전에는 내 포켓몬(reveal)에만 흐리게 "테라 OO"로 미리 보여 주고, 상대는 아무것도 나오지 않는다.
import React from "react";
import { typeNameToString } from "shared/helpers";
import { isKorean } from "shared/lang";
import { teraTypeOf } from "shared/tera";
import { teraIconStyle, TERA_COLORS } from "animations/teraEffect";
import "./TeraBadge.css";

export function TeraBadge({ pokemon, reveal = false }) {
    if (!pokemon || !pokemon.types) return null;
    const used = !!pokemon.terastallized;
    if (!used && !reveal) return null;
    const type = teraTypeOf(pokemon); // 세트가 정해질 때 고정된 타입
    const ko = isKorean();
    const label = (used ? (ko ? "테라스탈 " : "Tera ") : ko ? "테라 " : "Tera ") + typeNameToString(type);
    return (
        <span className={"tera-badge" + (used ? " used" : "")} style={{ "--tera-color": TERA_COLORS[type] }} title={ko ? "테라스탈 타입" : "Tera Type"}>
            <span className="tera-badge-icon" style={teraIconStyle(type, 16)} />
            {label}
        </span>
    );
}
