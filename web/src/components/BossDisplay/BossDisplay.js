import { TRAINER_ALAZAR, TRAINER_BLAKE } from "shared";
import React from "react";
import { isKorean, withParticle } from "shared/lang";
import "./BossDisplay.css";

export function BossDisplay(props) {

    let trainer = props.winStreak === 9 ? TRAINER_BLAKE : TRAINER_ALAZAR;

    const ko = isKorean();
    const name = ko ? trainer.nameKo : trainer.name;
    const text = ko
        ? props.winStreak + "연승! 이제 트레이너 " + withParticle(name, "과") + " 대결해야 한다!"
        : "You won " + props.winStreak + " battles in a row! Now you must battle Trainer " + name + "!";
    let img = trainer.img;

    let trainer_text = (ko ? trainer.textKo : trainer.text).map((t, i) => {
        return <h2 key={i}>{t}</h2>;
    });

    return (
        <div className="boss-display-div">
            <h3>{text}</h3>
            <img src={img} alt={name}></img>
            {trainer_text}
            <button onClick={() => props.nextBattle()}>{ko ? "대결!" : "Fight!"}</button>
        </div>
    );
}
