export default function LabeledLED( { label } ) {

    return <section className="led-and-label">
        <div className="led-off"></div>
        <div className="small-label">{ label }</div>
    </section>;

}