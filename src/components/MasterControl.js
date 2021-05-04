import Screen from "./Screen";
import ButtonWithLabel from "./ButtonWithLabel";

export default function MasterControl() {

    return <section className="master-panel">
        <span className="panel-header">
            <b>M</b>aster <b>C</b>ontrol
        </span>
        <div><hr className="blue-rule" /></div>
        <Screen textToDisplay={ "Seq 01   ♩=120.0Test" } />
        <div className="button-section">
            <ButtonWithLabel label="Tempo" />
            <ButtonWithLabel label="◀" />
            <ButtonWithLabel label="▶" />
            <ButtonWithLabel label="Enter" />
        </div>
    </section>;

}