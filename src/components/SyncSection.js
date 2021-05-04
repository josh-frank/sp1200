import ButtonWithLED from "./ButtonWithLED";

export default function SyncSection() {

    return <section className="sync-section">
        <span className="panel-header">
            <b>S</b>ync
        </span>
        <div><hr className="blue-rule" /></div>
        <div className="button-with-list">
            <ButtonWithLED />
            <ul className="small-label">
                <li>1 Internal</li>
                <li>2 MIDI</li>
                <li>3 SMPTE</li>
                <li>4 Clock</li>
            </ul>
        </div>
    </section>;
}
