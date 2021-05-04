import ButtonWithLED from "./ButtonWithLED";
import Knob from "./Knob";

export default function SampleSection() {

    return <section className="sample-section">
        <span className="panel-header">
            <b>S</b>ample
        </span>
        <div><hr className="blue-rule" /></div>
        <div className="button-with-list space-between">
            <ButtonWithLED red/>
            <Knob />
        </div>
        <ul className="small-label">
            <li>1 VU Mode</li>
            <li>2 Assign Voice</li>
            <li>3 Level</li>
            <li>4 Threshold Set</li>
            <li>5 Sample Length</li>
            <li>6 Re-Sample</li>
            <li>7 Arm Sampling</li>
            <li>8 Force Sampling</li>
        </ul>
    </section>;
}
