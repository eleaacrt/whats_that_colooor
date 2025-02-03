import React, { useState } from 'react';

const ColorSlider = ({
    colorValue,
    setColorValue,
    RGBname
}) => {

    const handleSliderChange = (e) => {
        setColorValue(e.target.value);
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

            {/* Affiche le nom RGB */}
            <p className="r-g-b-title">{RGBname}</p>
        </div>
    );
};

export default ColorSlider;

