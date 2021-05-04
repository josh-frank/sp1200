import LabeledLED from "./LabeledLED";
import Pad from "./Pad";
import PadSelect from "./PadSelect";
import Slider from "./Slider";

export default function PerformancePanel() {

    return <section className="performance-panel">
        <span className="panel-header">
            <b>P</b>erformance
        </span>
        <div><hr className="blue-rule" /></div>
        <div className="performance-controls">
            <button className="white-select-button" />
            <section className="labeled-leds">
                <LabeledLED label="Tune/Decay" />
                <LabeledLED label="Mix" />
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
        <section className="pads-panel">
            <PadSelect />
            { [ 1, 2, 3, 4, 5, 6, 7, 8 ].map( padNumber => {
                return <Pad key={ padNumber } padNumber={ padNumber } />
            } ) }
        </section>
    </section>;

}