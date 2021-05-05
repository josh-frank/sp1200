export default function Knob() {

    return <svg
        width="50px"
        height="50px"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
    >
        <clipPath id="knob">
            <circle cx="50" cy="50" r="50" />
        </clipPath>
        <circle cx="50" cy="50" r="50" />
        <circle cx="50" cy="50" r="40" fill="rgb( 50, 50, 50 )" />
        <line
            clipPath="url( #knob )"
            x1="50"
            y1="0"
            x2="50"
            y2="50"
            style={ { stroke: "rgb( 255, 255, 255 )", strokeWidth: 10 } }
        />
    </svg>;

}