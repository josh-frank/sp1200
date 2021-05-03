import { useState } from "react";

export default function PadSelect() {

    const [ activePadGroup, setActivePadGroup ] = useState( "A" );

    function PadGroupLED( { label } ) {
        return <section className="led-and-label">
            <div className={ activePadGroup === label ? "led-on" : "led-off" }></div>
            <div className="led-label">{ label }</div>
        </section>;
    }

    function toggleActivePad() {
        switch( activePadGroup ) {
            case "A":
                setActivePadGroup( "B" );
                break;
            case "B":
                setActivePadGroup( "C" );
                break;
            case "C":
                setActivePadGroup( "D" );
                break;
            case "D":
                setActivePadGroup( "A" );
                break;
            default: break;
        }
    }

    return <>
        <button className="pad-select-button" onClick={ toggleActivePad } />
        <section className="pad-group-leds">
            <PadGroupLED label="A" />
            <PadGroupLED label="B" />
            <PadGroupLED label="C" />
            <PadGroupLED label="D" />
        </section>
    </>;

}