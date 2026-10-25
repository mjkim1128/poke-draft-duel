import { FloatingPopup } from "components/FloatingPopup";
import React, { useRef, useState } from "react";
import {
    damageClassToString,
    damageCalc,
    isFixedDamageMove,
    moveNameToString,
    pokemonNameToString,
    typeNameToString,
    ppLeft,
    maxPP,
} from "shared";
import { moveConditionBlock } from "shared/movecondition";
import "./Move.css";

export function Move(props) {
    const [hover, setHover] = useState(false);
    const buttonRef = useRef(null);

    let [attack, defend] = [null, null];
    let [atkStat, defStat] = [null, null];
    let damage_text = "";
    let move_text = "";
    let percent_text = "";

    if (props.attackerDefender) {
        [attack, defend] = props.attackerDefender;

        [atkStat, defStat] =
            props.move.damage_class.name === "physical"
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
        let damage = damageCalc(attack, defend, props.move);
        let percent = Math.ceil((damage / defend.hp[1]) * 100);
        move_text =
            moveNameToString(props.move) +
            " (" +
            props.move.power +
            "bp): " +
            damage +
            "/" +
            defend.hp[1] +
            "hp";
        percent_text = "(" + percent + "%)";
    }

    let moveClassName =
        props.moveOwner === "party" ? "party-move" : "move-button";

    let effect_text = (
        props.move.flavor_text_entries.find(
            (entry) => entry.language && entry.language.name === "ko"
        ) ||
        props.move.flavor_text_entries.find(
            (entry) =>
                entry.language === undefined ||
                entry.language.name === undefined ||
                entry.language.name === "en"
        )
    ).flavor_text;

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
            <div className="move-div">
                <button
                    ref={buttonRef}
                    className={moveClassName}
                    id={props.move.type.name}
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
                    onClick={() => props.onClick(props.move)}
                    onMouseOver={() => setHover(true)}
                    onMouseOut={() => setHover(false)}
                >
                    <p>{moveNameToString(props.move)}</p>
                    <p>{typeNameToString(props.move.type.name)}</p>
                    {props.move.name !== "struggle" && (
                        <p>
                            PP {ppLeft(props.move)}/{maxPP(props.move)}
                        </p>
                    )}
                </button>
            </div>
            <FloatingPopup anchorRef={buttonRef} visible={hover}>
                <div className="move-info-div">
                    <p>
                        Power: {isFixedDamageMove(props.move) ? "-" : props.move.power}
                        {typeof props.move.accuracy === "number" &&
                            " / Accuracy: " + props.move.accuracy}
                    </p>
                    <p>
                        Damage Class:{" "}
                        {damageClassToString(props.move.damage_class.name)}
                    </p>
                    <p>Priority: {props.move.priority}</p>

                    {((props.move.meta &&
                        (props.move.meta.stat_chance === 100 ||
                            props.move.meta.drain !== 0)) ||
                        props.move.name === "explosion" ||
                        props.move.name === "self-destruct") && (
                        <p>Description: {effect_text}</p>
                    )}
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
