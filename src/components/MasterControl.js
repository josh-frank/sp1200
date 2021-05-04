import ButtonWithOneLabel from "./ButtonWithOneLabel";
import ButtonWithLED from "./ButtonWithLED";
import Knob from "./Knob";
import NumberPad from "./NumberPad";
import Pad from "./Pad";
import Screen from "./Screen";

export default function MasterControl() {

    function LabeledKnob( { label } ) {
        return <div style={ { textAlign: "center" } }>
            <Knob />
            <div className="small-label">{ label }</div>
        </div>;
    }

    return <section className="master-panel space-evenly">
        <span className="panel-header">
            <b>M</b>aster <b>C</b>ontrol
        </span>
        <div><hr className="blue-rule" /></div>
        <Screen textToDisplay={ "Seq 01   ♩=120.0Test" } />
        <div className="button-section space-between">
            <ButtonWithOneLabel label="Tempo" />
            <ButtonWithOneLabel label="◀" />
            <ButtonWithOneLabel label="▶" />
            <ButtonWithOneLabel label="Enter" />
        </div>
        <div className="volume-knobs-section space-evenly">
            <LabeledKnob label={ "Mix\nVolume" } />
            <LabeledKnob label={ "Metronome\nVolume" } />
        </div>
        <NumberPad />
        <div><hr className="blue-rule" /></div>
        <div className="play-buttons space-around">
            <div style={ { textAlign: "center" } }>
                <Pad />
                <div className="small-label">Tap/Repeat</div>
            </div>
            <div style={ { textAlign: "center" } }>
                <Pad />
                <div className="small-label">Run/Stop</div>
            </div>
            <div style={ { textAlign: "center" } }>
                <ButtonWithLED red />
                <div className="small-label">Record/Edit</div>
            </div>
        </div>
    </section>;

}