// style
import '../index.css';

// react
import { useState, useEffect } from "react";

// routeur-dom
import { Link } from 'react-router-dom'

const FavColors = () => {
    const [colors, setColors] = useState([]);

    useEffect(() => {
        // Récupérer et transformer la chaîne en tableau
        const storedColors = JSON.parse(localStorage.getItem("favColors")) || [];
        setColors(storedColors);
    }, []);

    return (
        <>
            <section className="my_fav">
                <div className="fav_color_grid" style={{ gridTemplateColumns: `repeat(${Math.ceil(Math.sqrt(colors.length))}, 1fr)` }}>
                    {
                        colors.length == 0 ?
                            (<div className="no_fav">
                                <p>no favorites yet :{'('}</p>
                            </div>) : colors.map((color, index) => (
                                <div
                                    key={index}
                                    className="fav_color_box"
                                    style={{ backgroundColor: "rgb" + color }}
                                >
                                    <p>{color}</p>
                                </div>
                            ))
                    }
                </div>
                <Link to="/" className="link">home page</Link>
            </section>
        </>
    );
};

export default FavColors;

// sources :
// algorithme de tri des couleurs :
// https://blog.fgribreau.com/2009/02/algorithme-tri-de-couleur-demonstration.html