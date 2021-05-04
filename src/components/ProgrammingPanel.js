import ButtonWithTwoLabels from "./ButtonWithTwoLabels";
import LabeledLED from "./LabeledLED";

export default function ProgrammingPanel() {

    return <section className="programming-panel">
        <span className="panel-header">
            <b>P</b>rogramming
        </span>
        <div><hr className="blue-rule" /></div>
        <div className="programming-buttons space-between">
            <button className="white-select-button" />
            <section className="labeled-leds">
                <LabeledLED label="Song" />
                <br />
                <LabeledLED label="Segment" />
            </section>
            <ButtonWithTwoLabels labels={ [ "Trigger", "Metronome" ] } />
            <ButtonWithTwoLabels labels={ [ "Repeat", "Swing" ] } />
            <ButtonWithTwoLabels labels={ [ "Subsong", "Copy" ] } />
            <ButtonWithTwoLabels labels={ [ "End", "Time Signature" ] } />
            <ButtonWithTwoLabels labels={ [ "Insert", "Segment Length" ] } />
            <ButtonWithTwoLabels labels={ [ "Delete", "Erase" ] } />
            <ButtonWithTwoLabels labels={ [ "Tempo Change", "Auto Correct" ] } />
            <ButtonWithTwoLabels labels={ [ "Mix Change", "Step Program" ] } />
        </div>
    </section>;

}