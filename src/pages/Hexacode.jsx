// style
import '../index.css'

// components
import ButtonGuess from '../components/ButtonGuess'

const Hexacode = ({
    getColors,
    label
}) => {


    return (
        <>
            <section className="hexacode scrollify" style={{ background: "rgb(" + getColors.red.api + ", " + getColors.green.api + ", " + getColors.blue.api + ")" }}>
                <div>
                    <h1>{label}</h1>
                </div>
            </section>
        </>
    )
}

export default Hexacode;