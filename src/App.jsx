import Pick from "/src/pages/Pick"
import Name from "/src/pages/Name"
import Hexacode from "/src/pages/Hexacode"
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

export default function App() {

  const [colors, setColors] = useState(() => {
    const savedColor = localStorage.getItem('currentColor');
    const savedSliderColor = localStorage.getItem('currentColorSliders');
    if (savedColor && savedSliderColor) {
      try {
        const parsedColor = JSON.parse(savedColor);
        const parsedSliderColor = JSON.parse(savedSliderColor);
        return {
          red: { random: parsedSliderColor.red, api: parsedColor.red },
          green: { random: parsedSliderColor.green, api: parsedColor.green },
          blue: { random: parsedSliderColor.blue, api: parsedColor.blue }
        };
      } catch (error) {
        console.error("Erreur lors du parsing des couleurs :", error);
      }
    }
    return {
      red: { random: Math.floor(Math.random() * 255), api: 0 },
      green: { random: Math.floor(Math.random() * 255), api: 0 },
      blue: { random: Math.floor(Math.random() * 255), api: 0 }
    };
  });

  const [isFav, setIsFav] = useState(false);
  const [name, setName] = useState(false);

  async function getColors() {
    const redRandom = Math.floor(Math.random() * 255);
    const greenRandom = Math.floor(Math.random() * 255);
    const blueRandom = Math.floor(Math.random() * 255);

    try {
      const response = await fetch(`https://www.thecolorapi.com/id?rgb=(${redRandom},${greenRandom},${blueRandom})`);
      const color = await response.json();

      setColors({
        red: { random: 0, api: color.rgb.r },
        green: { random: 0, api: color.rgb.g },
        blue: { random: 0, api: color.rgb.b }
      });

      setName(color.name.value);

    } catch (error) {
      console.error("Erreur lors de la récupération des couleurs :", error);
    }
  }

  function addFav(favColors, newColor) {
    favColors.push(newColor);
    localStorage.setItem('favColors', JSON.stringify(favColors));
  }

  function removeFav(favColors, newColor) {
    const updatedFavColors = favColors.filter(color => color !== newColor);
    localStorage.setItem('favColors', JSON.stringify(updatedFavColors));
  }

  function checkIsFav() {
    const favColors = JSON.parse(localStorage.getItem('favColors')) || [];
    const currentColor = `(${colors.red.api},${colors.green.api},${colors.blue.api})`;
    setIsFav(favColors.includes(currentColor));
  }

  useEffect(() => {
    checkIsFav();
  }, [colors]);

  useEffect(() => {
    const savedColor = localStorage.getItem('currentColor');
    const savedSliderColor = localStorage.getItem('currentColorSliders');
    if (savedColor && savedSliderColor) {
      try {
        const parsedColor = JSON.parse(savedColor);
        const parsedSliderColor = JSON.parse(savedSliderColor);
        setColors({
          red: { random: parsedSliderColor.red, api: parsedColor.red },
          green: { random: parsedSliderColor.green, api: parsedColor.green },
          blue: { random: parsedSliderColor.blue, api: parsedColor.blue }
        });
        fetch(`https://www.thecolorapi.com/id?rgb=(${parsedColor.red},${parsedColor.green},${parsedColor.blue})`)
          .then(response => response.json())
          .then(data => setName(data.name.value))
      } catch (error) {
        console.error("Erreur lors du parsing des couleurs :", error);
        getColors();
      }
    } else {
      getColors();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('currentColor', JSON.stringify({
      red: colors.red.api,
      green: colors.green.api,
      blue: colors.blue.api
    }));
    localStorage.setItem('currentColorSliders', JSON.stringify({
      red: colors.red.random,
      green: colors.green.random,
      blue: colors.blue.random
    }));
  }, [colors]);

  const handleFavClick = () => {
    const favColors = JSON.parse(localStorage.getItem('favColors')) || [];
    const newColor = `(${colors.red.api},${colors.green.api},${colors.blue.api})`;

    if (isFav) {
      removeFav(favColors, newColor);
    }
    else {
      addFav(favColors, newColor);
    }
    setIsFav(!isFav);
  };

  const handleColorReload = () => {
    getColors();
  };

  return (
    <>
      <main className="scrollify">
        <div className="theme_color" style={{ background: `rgb(${colors.red.api}, ${colors.green.api}, ${colors.blue.api})` }}></div>

        <Pick getColors={colors} />

        <Hexacode getColors={colors} label={name} />

        {/* logo add to fav */}
        <button className={!isFav ? "logo_fav" : "logo_fav_filled"} onClick={handleFavClick}>
          <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path d="M16.0202 24.2789L15.4992 23.9609L14.9782 24.2789L7.46476 28.8651L7.45423 28.8716L7.44385 28.8783C7.28051 28.9836 7.1513 29.0077 7.02889 28.9974C6.85141 28.9824 6.72297 28.928 6.61323 28.8416C6.46652 28.7259 6.35176 28.5829 6.26531 28.3993C6.22386 28.3113 6.19624 28.1847 6.24499 27.9692C6.24507 27.9688 6.24516 27.9684 6.24524 27.968L8.23619 19.3026L8.37004 18.72L7.92026 18.3262L1.27544 12.5093C1.11138 12.3578 1.04676 12.2246 1.02139 12.1053C0.984542 11.9318 0.995605 11.7765 1.05212 11.618C1.12067 11.4257 1.21233 11.2975 1.31703 11.2046C1.37192 11.1559 1.49615 11.079 1.76645 11.0373L10.5184 10.2602L11.121 10.2067L11.3533 9.64812L14.7479 1.48465L14.7479 1.48465L14.7494 1.481C14.8236 1.30055 14.9172 1.20465 15.0274 1.14099C15.2096 1.03566 15.3628 1 15.4992 1C15.6357 1 15.7888 1.03566 15.9711 1.14099C16.0813 1.20465 16.1749 1.30055 16.2491 1.48101L16.2506 1.48465L19.6452 9.64812L19.8775 10.2067L20.4801 10.2602L29.2307 11.0372C29.504 11.0801 29.6283 11.1575 29.6817 11.2048C29.7844 11.2959 29.8768 11.4242 29.947 11.6199C30.0044 11.7799 30.0154 11.9352 29.9789 12.1071C29.9538 12.2252 29.8897 12.3572 29.7248 12.5078L23.0782 18.3262L22.6284 18.72L22.7623 19.3026L24.7534 27.9687C24.7535 27.9691 24.7535 27.9694 24.7536 27.9698C24.8019 28.1829 24.775 28.31 24.7325 28.4006C24.6461 28.5849 24.532 28.7265 24.3874 28.8398C24.2767 28.9266 24.1462 28.9819 23.9662 28.9977C23.8463 29.0082 23.7192 28.985 23.5568 28.8797L23.5453 28.8722L23.5337 28.8651L16.0202 24.2789Z" stroke="white" strokeWidth="2" />
          </svg>
        </button>

        <Link to="/fav" className="link">my favorites</Link>

        {/* logo reload */}
        <button className="logo_reload" onClick={handleColorReload}>
          <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.874 2.42197C22.3124 2.72061 22.6142 3.18116 22.7131 3.70233C22.8119 4.22349 22.6997 4.76257 22.401 5.20097C22.1024 5.63938 21.6418 5.94119 21.1207 6.04002C20.5995 6.13885 20.0604 6.02661 19.622 5.72797C17.7756 4.47275 15.5622 3.87155 13.3344 4.02016C11.1067 4.16877 8.99271 5.05864 7.32935 6.54801C5.66599 8.03737 4.5489 10.0406 4.15604 12.2384C3.76318 14.4363 4.11715 16.7024 5.16157 18.6758C6.20598 20.6491 7.88076 22.2162 9.91908 23.1274C11.9574 24.0385 14.242 24.2413 16.409 23.7035C18.5759 23.1656 20.5006 21.9181 21.8763 20.1595C23.252 18.401 23.9996 16.2327 24 14C24 13.4695 24.2107 12.9608 24.5858 12.5858C24.9609 12.2107 25.4696 12 26 12C26.5305 12 27.0392 12.2107 27.4142 12.5858C27.7893 12.9608 28 13.4695 28 14C27.9995 17.126 26.9529 20.1618 25.0268 22.624C23.1007 25.0861 20.406 26.8327 17.3721 27.5856C14.3381 28.3386 11.1395 28.0545 8.28574 26.7785C5.432 25.5026 3.08738 23.3083 1.62543 20.5453C0.163479 17.7822 -0.331684 14.6094 0.218833 11.5323C0.769349 8.45515 2.33387 5.6508 4.66313 3.56601C6.99238 1.48123 9.95236 0.235975 13.0715 0.0286423C16.1906 -0.17869 19.2893 0.663832 21.874 2.42197Z" fill="white" />
            <path d="M21.078 19.012C20.8567 19.1535 20.6097 19.2501 20.3511 19.2962C20.0925 19.3424 19.8274 19.3371 19.5708 19.2807C19.3142 19.2243 19.0713 19.118 18.8558 18.9677C18.6403 18.8175 18.4566 18.6262 18.315 18.405C18.1735 18.1837 18.0769 17.9367 18.0307 17.6781C17.9846 17.4195 17.9899 17.1543 18.0463 16.8978C18.1026 16.6412 18.209 16.3982 18.3593 16.1828C18.5095 15.9673 18.7007 15.7835 18.922 15.642L25.886 11.188C26.3328 10.9115 26.8704 10.8219 27.3827 10.9386C27.8949 11.0553 28.3407 11.3688 28.6237 11.8115C28.9066 12.2542 29.004 12.7905 28.8948 13.3044C28.7856 13.8183 28.4786 14.2686 28.04 14.558L21.078 19.012Z" fill="white" />
            <path d="M31.806 18.82C32.0102 19.3023 32.017 19.8454 31.8251 20.3327C31.6331 20.82 31.2576 21.2125 30.7794 21.426C30.3011 21.6394 29.7582 21.6568 29.2673 21.4743C28.7764 21.2918 28.3767 20.924 28.154 20.45L25.138 13.69C25.025 13.4493 24.961 13.1885 24.95 12.9228C24.9389 12.6572 24.9809 12.3919 25.0736 12.1427C25.1662 11.8935 25.3077 11.6652 25.4896 11.4713C25.6715 11.2774 25.8903 11.1216 26.1331 11.0133C26.3759 10.9049 26.6379 10.846 26.9037 10.8401C27.1696 10.8342 27.4339 10.8813 27.6813 10.9788C27.9287 11.0763 28.1542 11.2221 28.3446 11.4077C28.5349 11.5934 28.6864 11.8151 28.79 12.06L31.806 18.82Z" fill="white" />
          </svg>
        </button>

      </main>
    </>
  )
}