import ButtonWithOneLabel from "./ButtonWithOneLabel";

export default function NumberPad() {

    return <table className="number-pad">
        <tbody>
            <tr>
                <td><ButtonWithOneLabel above label="1" /></td>
                <td><ButtonWithOneLabel above label="2" /></td>
                <td><ButtonWithOneLabel above label="3" /></td>
            </tr>
            <tr>
                <td><ButtonWithOneLabel above label="4" /></td>
                <td><ButtonWithOneLabel above label="5" /></td>
                <td><ButtonWithOneLabel above label="6" /></td>
            </tr>
            <tr>
                <td><ButtonWithOneLabel above label="7" /></td>
                <td><ButtonWithOneLabel above label="8" /></td>
                <td><ButtonWithOneLabel above label="9" /></td>
            </tr>
            <tr>
                <td><div className="small-label center">Yes</div></td>
                <td><ButtonWithOneLabel above label="0" /></td>
                <td><div className="small-label center">No</div></td>
            </tr>
        </tbody>
    </table>;

}