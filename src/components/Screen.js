export default function Screen( { textToDisplay } ) {

    return <table className="screen">
        <tbody>
            <tr>
                { textToDisplay.slice( 0, 16 ).split( "" ).map( ( char, index ) => <td key={ index }>{ char === " " ? "\xa0\xa0\xa0" : char }</td> ) }
            </tr>
            <tr>
                { textToDisplay.slice( 16, 32 ).split( "" ).map( ( char, index ) => <td key={ index }>{ char === " " ? "\xa0\xa0\xa0" : char }</td> ) }
            </tr>
        </tbody>
        </table>;

}