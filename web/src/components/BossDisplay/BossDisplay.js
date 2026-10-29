import React from "react";
import { isKorean, withParticle } from "shared/lang";
import { journeyLines, loadJourney } from "shared/journey";
import "./BossDisplay.css";

export function BossDisplay(props) {

    const trainer = props.boss;

    const ko = isKorean();
    const name = ko ? trainer.nameKo : trainer.name;
    const text = ko
        ? props.winStreak + "연승! 이제 트레이너 " + withParticle(name, "과") + " 대결해야 한다!"
        : "You won " + props.winStreak + " battles in a row! Now you must battle Trainer " + name + "!";
    let img = trainer.img;

    /// The final boss tells me how many times I went back to the start and how long it took to reach it (read once when the screen opens)
    const [journey] = React.useState(() => (trainer.journey ? loadJourney() : null));
    const lines = journey ? journeyLines(ko, journey) : ko ? trainer.textKo : trainer.text;

    let trainer_text = lines.map((t, i) => {
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
