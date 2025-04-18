// style
import '../index.css'

// components
import ButtonGuess from '../components/ButtonGuess'

const Name = ({
    getColors
}) => {


    return (
        <>
            <section className="name scrollify" style={{ background: "rgb(" + getColors.red.api + ", " + getColors.green.api + ", " + getColors.blue.api + ")" }}>
                <div className="title">
                    <p className="rules">try to find the name of the color</p>
                    <h1>
                        What's that
                        <br /> color ? 
                    </h1>
                </div>
                <div className="guesses">
                    <form action="" method="get" className='all_button_guess'>
                        <div>
                            <ButtonGuess label="bouton1" />
                            <ButtonGuess label="bouton2" />
                        </div>
                        <div>
                            <ButtonGuess label="bouton3" />
                            <ButtonGuess label="bouton4" />
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Name;