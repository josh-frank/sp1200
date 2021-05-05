import LabeledLED from "./LabeledLED";
import Pad from "./Pad";
import PadSelect from "./PadSelect";

export default function PerformancePanel() {

    function Slider( { gridColumn } ) {
        return <div className="slider-wrapper" style={ { gridRow: 1, gridColumn: gridColumn } }>
            <input
                className="slider"
                type="range"
                min="0"
                max="100"
            >
            </input>
        </div>;
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
                <LabeledLED label="Mix" />
                <LabeledLED label="Multi Mode" />
            </section>
            <section className="hatch-marks space-around">
                <hr className="hatch-mark" />
                <hr className="hatch-mark" />
                <hr className="hatch-mark" />
                <hr className="hatch-mark" />
                <hr className="hatch-mark" />
            </section>
            <Slider gridColumn={ 3 } />
            <Slider gridColumn={ 4 } />
            <Slider gridColumn={ 5 } />
            <Slider gridColumn={ 6 } />
            <Slider gridColumn={ 7 } />
            <Slider gridColumn={ 8 } />
            <Slider gridColumn={ 9 } />
            <Slider gridColumn={ 10 } />
        </div>
        <section className="pads-panel">
            <PadSelect />
            { [ 1, 2, 3, 4, 5, 6, 7, 8 ].map( padNumber => {
                return <Pad key={ padNumber } padNumber={ padNumber } />
            } ) }
        </section>
    </section>;

}