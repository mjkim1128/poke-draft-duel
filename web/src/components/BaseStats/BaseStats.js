import React from "react";
import { isKorean } from "shared/lang";
import "./BaseStats.css";

// 종족값을 숫자로 보여 준다 (그래프보다 다른 포켓몬과 비교하기 쉽다). 100 이상은 진하게, 60 미만은 흐리게 표시한다.
export function BaseStats({ pokemon }) {
    const names = isKorean() ? ["HP", "공격", "방어", "특공", "특방", "스피드"] : ["HP", "Atk", "Def", "SpA", "SpD", "Spe"];
    const stats = pokemon.base_stats.slice(0, 6);
    const total = stats.reduce((sum, v) => sum + v, 0);
    return (
        <div className="base-stats" aria-label={isKorean() ? "종족값" : "Base stats"}>
            {stats.map((value, i) => (
                <div key={names[i]} className={"base-stat" + (value >= 100 ? " high" : value < 60 ? " low" : "")}>
                    <span className="base-stat-name">{names[i]}</span>
                    <span className="base-stat-value">{value}</span>
                </div>
            ))}
            <div className="base-stat base-stat-total">
                <span className="base-stat-name">{isKorean() ? "합계" : "Total"}</span>
                <span className="base-stat-value">{total}</span>
            </div>
        </div>
    );
}
