// style
// import '../index.css';

const CheckPick = ({
    colorValues,
    backgroundValues,
}) => {

    let maxRGBValue = 255

    let colorAttributes = {
        red: {
            min: Math.min(colorValues.red, backgroundValues.red),
            max: Math.max(colorValues.red, backgroundValues.red),
        },
        green: {
            min: Math.min(colorValues.green, backgroundValues.green),
            max: Math.max(colorValues.green, backgroundValues.green),
        },
        blue: {
            min: Math.min(colorValues.blue, backgroundValues.blue),
            max: Math.max(colorValues.blue, backgroundValues.blue),
        }
    }


    let percents = {
        red: 100 - (Math.floor(100 * (colorAttributes.red.max - colorAttributes.red.min) / maxRGBValue)),
        green: 100 - (Math.floor(100 * (colorAttributes.green.max - colorAttributes.green.min) / maxRGBValue)),
        blue: 100 - (Math.floor(100 * (colorAttributes.blue.max - colorAttributes.blue.min) / maxRGBValue))

    }

    let averagePercent = Math.floor((percents.red + percents.green + percents.blue) / 3)

    return (
        <>
            <section className="check_pick" style={{ color: "rgb(" + backgroundValues.red + ", " + backgroundValues.green + ", " + backgroundValues.blue + ")" }}>
                <p>{averagePercent} %</p>
            </section>
        </>
    )
}

export default CheckPick;