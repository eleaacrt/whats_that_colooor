// style
import '../index.css'

// components
import Circle from '../components/Circle'
import Slider from '../components/Slider'
import CheckPick from './CheckPick'

import React, { useState } from 'react'


const Pick = ({
    getColors
}) => {

    const [colorRValue, setColorRValue] = useState(getColors.red.random);
    const [colorGValue, setColorGValue] = useState(getColors.green.random);
    const [colorBValue, setColorBValue] = useState(getColors.blue.random);

    const [guess, setGuess] = useState(false);


    let backgroundValues = {
        red: getColors.red.api,
        green: getColors.green.api,
        blue: getColors.blue.api,
    }

    let colorValues = {
        red: colorRValue,
        green: colorGValue,
        blue: colorBValue
    }

    return (
        <>
            <section className="pick scrollify">
                <p className="rules">try to find the rgb code of the background by changing the color of the circle with the sliders</p>
                {/* <p className="rules">click on {'<'}enter{'>'} to check your guess</p> */}

                <Circle
                    colorValues={colorValues}
                ></Circle>

                <h1>
                    What's that
                    <br /> color ?
                </h1>

                <section className="sliders">
                    <Slider colorValue={colorRValue} setColorValue={setColorRValue} RGBname={"red"} />
                    <Slider colorValue={colorGValue} setColorValue={setColorGValue} RGBname={"green"} />
                    <Slider colorValue={colorBValue} setColorValue={setColorBValue} RGBname={"blue"} />
                </section>
            </section>
        </>
    )
}

export default Pick;