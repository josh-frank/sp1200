import Screen from "./Screen";
import ButtonWithOneLabel from "./ButtonWithOneLabel";
import Knob from "./Knob";
import NumberPad from "./NumberPad";

export default function MasterControl() {

    function LabeledKnob( { label } ) {
        return <div style={ { textAlign: "center" } }>
            <Knob />
            <div className="small-label">{ label }</div>
        </div>;
    }

    return <section className="master-panel">
        <span className="panel-header">
            <b>M</b>aster <b>C</b>ontrol
        </span>
        <div><hr className="blue-rule" /></div>
        <Screen textToDisplay={ "Seq 01   ♩=120.0Test" } />
        <div className="button-section">
            <ButtonWithOneLabel label="Tempo" />
            <ButtonWithOneLabel label="◀" />
            <ButtonWithOneLabel label="▶" />
            <ButtonWithOneLabel label="Enter" />
        </div>
        <div className="volume-knobs-section">
            <LabeledKnob label={ "Mix\nVolume" } />
            <LabeledKnob label={ "Metronome\nVolume" } />
        </div>
        <NumberPad />
    </section>;

}