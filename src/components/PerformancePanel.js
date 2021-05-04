import LabeledLED from "./LabeledLED";

export default function PerformancePanel() {

    function Slider() {
        return <input
            className="slider"
            type="range"
            orient="vertical"
        ></input>;
    }

    return <section className="performance-panel">
        <span className="panel-header">
            <b>P</b>erformance
        </span>
        <div><hr className="blue-rule" /></div>
        <div className="performance-controls">
            <button className="white-select-button" />
            <section className="labeled-leds">
                <LabeledLED label="Tune/Decay" />
                <br />
                <LabeledLED label="Mix" />
                <br />
                <LabeledLED label="Multi Mode" />
            </section>
            <Slider />
            <Slider />
            <Slider />
            <Slider />
            <Slider />
            <Slider />
            <Slider />
            <Slider />
        </div>
    </section>;

}