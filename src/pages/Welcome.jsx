// style
import '../index.css'

// components
import ButtonGuess from '../components/ButtonGuess'

// react-dom
import { Link } from 'react-router-dom'

const Welcome = ({
    getColors,
    setWelcome
}) => {

    const handleColorReload = (e) => {
        setWelcome(false);
        getColors();
    };

    return (
        <>
            <section className="welcome scrollify">
                <h1>
                    What's that
                    <br /> color ?
                </h1>
                <Link to="/" onClick={handleColorReload}>click here to start playing</Link>
            </section>
        </>
    )
}

export default Welcome;