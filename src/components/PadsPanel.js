import Pad from "./Pad";
import PadSelect from "./PadSelect";

export default function PadsPanel() {

    return <section className="pads-panel">
        <PadSelect />
        { [ 1, 2, 3, 4, 5, 6, 7, 8 ].map( padNumber => {
            return <Pad key={ padNumber } padNumber={ padNumber } />
        } ) }
    </section>;

}
