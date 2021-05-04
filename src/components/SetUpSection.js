import ButtonWithLED from "./ButtonWithLED";

export default function SetUpSection() {

    return <section className="setup-section">
        <span className="panel-header">
            <b>S</b>etup
        </span>
        <div><hr className="blue-rule" /></div>
        <div className="button-with-list">
            <ButtonWithLED />
            <ul className="small-label">
                <li>11 Multi Pitch</li>
                <li>12 Multi Level</li>
                <li>13 Exit Multi Mode</li>
                <li>14 Dynamic Buttons</li>
                <li>15 Define Mix</li>
                <li>16 Select Mix</li>
                <li>17 Channel Assign</li>
                <li>18 Decay/Tune Select</li>
                <li>19 Loop/Truncate</li>
                <li>20 Delete Sound</li>
                <li>21 1st Song Step</li>
                <li>22 MIDI Parameters</li>
                <li>23 Special</li>
            </ul>
        </div>
    </section>;

}
