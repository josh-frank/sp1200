import ButtonWithLED from "./ButtonWithLED";

export default function DiskSection() {

    return <section className="disk-section">
        <span className="panel-header">
            <b>D</b>isk
        </span>
        <div><hr className="blue-rule" /></div>
        <div className="button-with-list">
            <ButtonWithLED />
            <ul className="small-label">
                <li>1 Save Sequences</li>
                <li>2 Save Sounds</li>
                <li>3 Load Sequences</li>
                <li>4 Load Segment #</li>
                <li>5 Load Sounds</li>
                <li>6 Load Sound #</li>
                <li>7 Catalog Sequences</li>
                <li>8 Catalog Sounds</li>
                <li>9 Format/Copy Software</li>
                <li>0 Load Sequences &amp; Sounds</li>
            </ul>
        </div>
    </section>;
    
}
