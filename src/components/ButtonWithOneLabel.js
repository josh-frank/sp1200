export default function ButtonWithOneLabel( { above, label } ) {

    function LabelAbove( { label } ) {
        return <div className="button-with-label">
            <div className="small-label center">{ label }</div>
            <button className="white-select-button" />
        </div>;
    }

    function LabelBelow( { label } ) {
        return <div className="button-with-label">
            <button className="white-select-button" />
            <div className="small-label center">{ label }</div>
        </div>;
    }

    return above ? <LabelAbove label={ label } /> : <LabelBelow label={ label } />;

}