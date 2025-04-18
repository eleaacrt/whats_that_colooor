// style
import '../index.css';

// react
import { useState, useEffect } from "react";

// routeur-dom
import { Link } from 'react-router-dom';

const FavColors = () => {
    const [colors, setColors] = useState(() => {
        return JSON.parse(localStorage.getItem("favColors")) || [];
    });

    useEffect(() => {
        const storedColors = JSON.parse(localStorage.getItem("favColors")) || [];
        setColors(storedColors);
    }, []);

    const handleFavClick = (selectedColor) => {
        const updatedFavColors = colors.filter(color => color !== selectedColor);
        localStorage.setItem('favColors', JSON.stringify(updatedFavColors));
        setColors(updatedFavColors);
    };

    return (
        <>
            <section className="my_fav">
                <div className="fav_color_grid" style={{ gridTemplateColumns: `repeat(${Math.ceil(Math.sqrt(colors.length))}, 1fr)` }}>
                    {
                        colors.length === 0 ?
                            (<div className="no_fav">
                                <p>no favorites yet :{'('}</p>
                            </div>) : colors.map((color, index) => (
                                <div
                                    key={index}
                                    className="fav_color_box"
                                    style={{ backgroundColor: "rgb" + color }}
                                >
                                    <p>{color}</p>

                                    <button className="logo_fav_filled_grid" onClick={() => handleFavClick(color)}>
                                        <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                            <path d="M16.0202 24.2789L15.4992 23.9609L14.9782 24.2789L7.46476 28.8651L7.45423 28.8716L7.44385 28.8783C7.28051 28.9836 7.1513 29.0077 7.02889 28.9974C6.85141 28.9824 6.72297 28.928 6.61323 28.8416C6.46652 28.7259 6.35176 28.5829 6.26531 28.3993C6.22386 28.3113 6.19624 28.1847 6.24499 27.9692C6.24507 27.9688 6.24516 27.9684 6.24524 27.968L8.23619 19.3026L8.37004 18.72L7.92026 18.3262L1.27544 12.5093C1.11138 12.3578 1.04676 12.2246 1.02139 12.1053C0.984542 11.9318 0.995605 11.7765 1.05212 11.618C1.12067 11.4257 1.21233 11.2975 1.31703 11.2046C1.37192 11.1559 1.49615 11.079 1.76645 11.0373L10.5184 10.2602L11.121 10.2067L11.3533 9.64812L14.7479 1.48465L14.7479 1.48465L14.7494 1.481C14.8236 1.30055 14.9172 1.20465 15.0274 1.14099C15.2096 1.03566 15.3628 1 15.4992 1C15.6357 1 15.7888 1.03566 15.9711 1.14099C16.0813 1.20465 16.1749 1.30055 16.2491 1.48101L16.2506 1.48465L19.6452 9.64812L19.8775 10.2067L20.4801 10.2602L29.2307 11.0372C29.504 11.0801 29.6283 11.1575 29.6817 11.2048C29.7844 11.2959 29.8768 11.4242 29.947 11.6199C30.0044 11.7799 30.0154 11.9352 29.9789 12.1071C29.9538 12.2252 29.8897 12.3572 29.7248 12.5078L23.0782 18.3262L22.6284 18.72L22.7623 19.3026L24.7534 27.9687C24.7535 27.9691 24.7535 27.9694 24.7536 27.9698C24.8019 28.1829 24.775 28.31 24.7325 28.4006C24.6461 28.5849 24.532 28.7265 24.3874 28.8398C24.2767 28.9266 24.1462 28.9819 23.9662 28.9977C23.8463 29.0082 23.7192 28.985 23.5568 28.8797L23.5453 28.8722L23.5337 28.8651L16.0202 24.2789Z" stroke="white" strokeWidth="2" />
                                        </svg>
                                    </button>
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