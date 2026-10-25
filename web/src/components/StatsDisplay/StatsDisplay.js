import './StatsDisplay.css';
import CanvasJSReact from '../CanvasJs/canvasjs.react';
import React from 'react';


var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export function StatsDisplay(props) {
    // a narrow screen gets a narrower chart
    const chartWidth = Math.max(240, Math.min(400, window.innerWidth - 32));

    const options = {
        backgroundColor: "transparent",
        width: chartWidth,
        // 폰 화면의 정보 칸에서는 그래프를 낮고 촘촘하게 그린다
        ...(props.compact ? { height: window.innerHeight < 620 ? 82 : 100 } : {}),
        axisX: {
            reversed: true,
            ...(props.compact ? { labelFontSize: 10 } : {}),
        },
        axisY: {
            includeZero: true,
            maximum: 200,
            interval: props.compact ? 50 : 20,
            ...(props.compact ? { labelFontSize: 9 } : {}),
        },
        data: [{
            type: "bar",
            dataPoints: [
                { y: props.pokemon.base_stats[0], label: "HP (" + props.pokemon.base_stats[0] + ")" },
                { y: props.pokemon.base_stats[1], label: "ATK (" + props.pokemon.base_stats[1] + ")" },
                { y: props.pokemon.base_stats[2], label: "DEF (" + props.pokemon.base_stats[2] + ")" },
                { y: props.pokemon.base_stats[3], label: "SPA (" + props.pokemon.base_stats[3] + ")" },
                { y: props.pokemon.base_stats[4], label: "SPD (" + props.pokemon.base_stats[4] + ")" },
                { y: props.pokemon.base_stats[5], label: "SPE (" + props.pokemon.base_stats[5] + ")" },
            ],
            color: "blue",
        }]
    }

    return(
        /// The chart library draws its canvas on top of the box (absolutely positioned), so the box
        /// has no width of its own unless it is given one; a popup would then be only as wide as its text.
        <div className="canvasjs-div" style={{ width: chartWidth }}>
            <CanvasJSChart options={options} />
        </div>
    );
}