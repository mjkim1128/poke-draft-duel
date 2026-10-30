import { FloatingPopup } from "components/FloatingPopup";
import React, { useEffect, useRef, useState } from "react";
import {
    damageClassToString,
    damageCalc,
    typeEffectiveness,
    MIN_ROLL,
    isFixedDamageMove,
    moveNameToString,
    pokemonNameToString,
    typeNameToString,
    ppLeft,
    maxPP,
} from "shared";
import { moveConditionBlock } from "shared/movecondition";
import { adaptMoveToField } from "shared/field";
import { abilityAdaptMove } from "shared/abilities";
import { moveDescription } from "shared/movedescription";
import { effectMark } from "shared/effectmark";
import "./Move.css";

/// 터치 화면에서 이만큼(밀리초) 누르고 있으면 "길게 누름"이다: 기술 정보를 보여 주고, 손을 떼도 기술은 나가지 않는다.
/// 짧게 누르면 그대로 기술이 나간다.
export const LONG_PRESS_MS = 450;

export function Move(props) {
    const [hover, setHover] = useState(false);
    const buttonRef = useRef(null);
    /// 마지막으로 누른 입력 장치 ("mouse" | "touch" | "pen"). 터치 뒤에 브라우저가 흉내 내서 보내는 마우스 이벤트는 무시한다.
    const pointerType = useRef("mouse");
    const pressTimer = useRef(null);
    /// 길게 눌러서 정보창을 띄웠다 (손을 뗄 때 따라오는 클릭은 기술을 쓰지 않는다)
    const longPressed = useRef(false);
    const [pinned, setPinned] = useState(false);

    /// 길게 눌러 띄운 정보창은 손을 뗀 뒤에도 남아 있다가, 화면의 다른 곳을 누르면 닫힌다
    useEffect(() => {
        if (!pinned) return undefined;
        const close = () => {
            setPinned(false);
            setHover(false);
        };
        document.addEventListener("pointerdown", close, true);
        return () => document.removeEventListener("pointerdown", close, true);
    }, [pinned]);
    useEffect(() => () => clearTimeout(pressTimer.current), []);

    function startPress(e) {
        pointerType.current = e.pointerType || "mouse";
        if (pointerType.current === "mouse") return;
        longPressed.current = false;
        clearTimeout(pressTimer.current);
        pressTimer.current = setTimeout(() => {
            longPressed.current = true;
            setHover(true);
            setPinned(true);
        }, LONG_PRESS_MS);
    }
    function endPress() {
        clearTimeout(pressTimer.current);
    }

    let [attack, defend] = [null, null];
    let [atkStat, defStat] = [null, null];
    let damage_text = "";
    let move_text = "";
    let percent_text = "";

    /// 정보창에는 실전에서 실제로 쓰이는 모습을 보여 준다: 날씨로 타입과 위력이 바뀌는 웨더볼, 높은 쪽으로 때리는 포톤게이저, 피부스킨 같은 특성이 바꾼 타입
    let shown = props.move;
    if (props.attackerDefender) {
        [attack, defend] = props.attackerDefender;
        shown = abilityAdaptMove(attack, adaptMoveToField(props.move, attack, props.field || null));

        [atkStat, defStat] =
            shown.damage_class.name === "physical"
                ? [
                      // eslint-disable-next-line
                      "(" + `${attack.base_stats[1].toString()}` + " " + "Atk)",
                      // eslint-disable-next-line
                      "(" + `${defend.base_stats[2].toString()}` + " " + "Def)",
                  ]
                : [
                      // eslint-disable-next-line
                      "(" + attack.base_stats[3].toString() + " " + "SpA)",
                      // eslint-disable-next-line
                      "(" + defend.base_stats[4].toString() + " " + "SpD)",
                  ];
        damage_text =
            "Damage: " +
            pokemonNameToString(attack) +
            " " +
            atkStat +
            " vs. " +
            pokemonNameToString(defend) +
            " " +
            defStat;
        // 데미지 난수가 있으므로 가장 약한 값부터 가장 센 값까지 보여 준다 (고정 데미지 기술은 하나)
        const highest = damageCalc(attack, defend, props.move, { field: props.field || null });
        const lowest = damageCalc(attack, defend, props.move, { roll: MIN_ROLL, field: props.field || null });
        const percentOf = (n) => Math.ceil((n / defend.hp[1]) * 100);
        move_text =
            moveNameToString(props.move) +
            " (" +
            shown.power +
            "bp): " +
            (lowest === highest ? highest : lowest + "-" + highest) +
            "/" +
            defend.hp[1] +
            "hp";
        percent_text = "(" + (lowest === highest ? percentOf(highest) : percentOf(lowest) + "-" + percentOf(highest)) + "%)";
    }

    let moveClassName =
        props.moveOwner === "party" ? "party-move" : "move-button";

    const effect_text = moveDescription(props.move);
    /// 상대에게 얼마나 잘 듣는지 (실전에서 쓰이는 모습의 기술 기준). 변화기와 내 파티 칸의 작은 버튼은 표시하지 않는다
    const mark =
        props.attackerDefender && props.moveOwner !== "party" && shown.type
            ? effectMark(shown, typeEffectiveness(shown, props.attackerDefender[1], props.attackerDefender[0]))
            : null;

    if (props.move.meta === undefined) {
        /// temporary error fix
        console.log("CHECK THIS!!! ERROR WITH: ");
        console.log(props.move);
        return;
    }

    if (props.move.type === undefined) {
        return <div></div>;
    }

    /// A move whose condition isn't met (Fake Out after the first turn, Sleep Talk while awake...) can't be picked
    const unusableReason =
        props.moveOwner !== "party" && props.attackerDefender
            ? moveConditionBlock(props.attackerDefender[0], props.move, { foe: props.attackerDefender[1] })
            : null;

    return (
        <div>
            {/* 눌러 보는 입력은 감싼 칸에서 받는다 (쓸 수 없는 기술의 버튼은 이벤트를 받지 못하므로 아래에서 pointer-events를 끈다) */}
            <div
                className="move-div"
                onPointerDown={startPress}
                onPointerUp={endPress}
                onPointerCancel={endPress}
                onPointerLeave={endPress}
                onContextMenu={(e) => {
                    if (pointerType.current !== "mouse") e.preventDefault(); /// 길게 누르면 뜨는 기본 메뉴를 막는다
                }}
                onMouseEnter={() => pointerType.current === "mouse" && setHover(true)}
                onMouseLeave={() => pointerType.current === "mouse" && setHover(false)}
            >
                <button
                    ref={buttonRef}
                    className={moveClassName}
                    id={shown.type.name}
                    title={unusableReason || undefined}
                    disabled={
                        props.moveOwner !== "party" &&
                        props.move.name !== "struggle" &&
                        (ppLeft(props.move) <= 0 ||
                            !!unusableReason ||
                            /// Disable (e.g. from Cursed Body) shuts the move off for a few turns
                            !!(
                                props.attackerDefender &&
                                props.attackerDefender[0].disabled &&
                                props.attackerDefender[0].disabled.move === props.move.name
                            ) ||
                            /// Taunt shuts off every status move
                            !!(
                                props.attackerDefender &&
                                props.attackerDefender[0].taunt &&
                                props.move.damage_class &&
                                props.move.damage_class.name === "status"
                            ))
                    }
                    onClick={() => {
                        /// 길게 눌러서 정보를 본 손가락이 떨어질 때의 클릭은 기술을 쓰지 않는다
                        if (longPressed.current) {
                            longPressed.current = false;
                            return;
                        }
                        props.onClick(props.move);
                    }}
                >
                    <p>{moveNameToString(props.move)}</p>
                    <p>{typeNameToString(shown.type.name)}</p>
                    {props.move.name !== "struggle" && (
                        <p>
                            PP {ppLeft(props.move)}/{maxPP(props.move)}
                        </p>
                    )}
                    {mark && (
                        <span className="effect-mark" data-mark={mark}>
                            {mark}
                        </span>
                    )}
                </button>
            </div>
            <FloatingPopup anchorRef={buttonRef} visible={hover}>
                <div className="move-info-div">
                    <p>
                        Power: {isFixedDamageMove(props.move) ? "-" : shown.power}
                        {typeof props.move.accuracy === "number" &&
                            " / Accuracy: " + props.move.accuracy}
                    </p>
                    <p>
                        Damage Class:{" "}
                        {damageClassToString(shown.damage_class.name)}
                    </p>
                    <p>Priority: {props.move.priority}</p>

                    {effect_text && <p className="move-description">Description: {effect_text}</p>}
                    {/* <p>Accuracy: {props.move.accuracy}</p> */}
                    {/* <p>PP: {props.move.pp}</p>
                    <p>
                        Effect:{" "}
                        {props.move.effect_entries[0] !== undefined
                            ? props.move.effect_entries[0].effect
                            : "ERROR!"}
                    </p>
                    <p>
                        Description:{" "}
                        {props.move.flavor_text_entries[1].flavor_text}
                    </p> */}
                    {props.attackerDefender && (
                        <div className="damage-info-div">
                            <p>{damage_text}</p>
                            <p>
                                {move_text} <b>{percent_text}</b>
                            </p>
                        </div>
                    )}
                </div>
            </FloatingPopup>
        </div>
    );
}
