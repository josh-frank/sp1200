export default function Screen( { textToDisplay } ) {

    return <table className="screen">
        <tbody>
            <tr>
                { !!textToDisplay.slice( 0, 16 ).length ? textToDisplay.slice( 0, 16 ).split( "" ).map( ( char, index ) => {
                    return <td key={ index }>{ char === " " ? "\xa0\xa0\xa0" : char }</td>
                } ) : <td>&nbsp;</td> }
            </tr>
            <tr>
                { !!textToDisplay.slice( 16, 32 ).length ? textToDisplay.slice( 16, 32 ).split( "" ).map( ( char, index ) => {
                    return <td key={ index }>{ char === " " ? "\xa0\xa0\xa0" : char }</td>
                } ) : <td>&nbsp;</td> }
            </tr>
        </tbody>
        </table>;

}