import Screen from "./Screen";

export default function MasterControl() {

    function SelectButtonWithLabel( { label } ) {
        return <div>
            <button className="white-select-button" />
            <div className="small-label center">{ label }</div>
        </div>
    }

    return <section className="master-panel">
        <span className="panel-header">
            <b>M</b>aster <b>C</b>ontrol
        </span>
        <div><hr className="blue-rule" /></div>
        <Screen textToDisplay={
            `Seq 01\u00a0\u00a0\u00a0♩=120.0\r\n
            `
        } />
        <div className="button-section">
            <SelectButtonWithLabel label="Tempo" />
            <SelectButtonWithLabel label="◀" />
            <SelectButtonWithLabel label="▶" />
            <SelectButtonWithLabel label="Enter" />
        </div>
    </section>;

}