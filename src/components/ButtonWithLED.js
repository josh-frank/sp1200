export default function ButtonWithLED( { on, red } ) {

    return <div className="button-with-led">
        <div className={ on ? "led-on" : "led-off"}></div>
        <button className={ red ? "red-select-button" : "white-select-button" } />
    </div>;

}