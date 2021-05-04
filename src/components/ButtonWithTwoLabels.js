export default function ButtonWithTwoLabels( { labels } ) {

    return <div className="button-with-label">
        <div className="small-label center">{ labels[ 0 ] }</div>
        <button className="white-select-button" />
        <div className="small-label center">{ labels[ 1 ] }</div>
    </div>;

}