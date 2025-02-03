// style
import '../index.css'

const Name = ({
    getColors
}) => {


    return (
        <>
            <section className="name" style={{ background: "rgb(" + getColors.red.api + ", " + getColors.green.api + ", " + getColors.blue.api + ")" }}>
                <div className="title">
                    <p className="rules">try to find the name of the color on the background of the answers</p>
                    <h1>
                        What's that
                        <br /> color ?
                    </h1>
                </div>
                <div className="guesses"></div>
            </section>
        </>
    )
}

export default Name;