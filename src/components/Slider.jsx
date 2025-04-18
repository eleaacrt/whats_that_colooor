import React, { useState } from 'react';

const ColorSlider = ({
    colorValue,
    setColorValue,
    RGBname
}) => {

    const handleSliderChange = (e) => {
        const newValue = parseInt(e.target.value, 10);
        setColorValue(newValue);
        const currentColorSlider = JSON.parse(localStorage.getItem('currentColorSliders')) || {
            red: 0,
            green: 0,
            blue: 0
        };
        currentColorSlider[RGBname] = newValue;
        localStorage.setItem('currentColorSliders', JSON.stringify(currentColorSlider));
    };

    return (
        <div>
            <p className="color-value">{colorValue}</p>
            <input
                type="range"
                id="slider"
                min="0"
                max="255"
                step="1"
                value={colorValue}
                onChange={handleSliderChange}
            />

            <p className="r-g-b-title">{RGBname}</p>
        </div>
    );
};

export default ColorSlider;

