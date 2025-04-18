import React, { useState } from 'react';


const ButtonGuess = ({
    label
}) => {

    return (
        <input className="button_guess" type="button" value={label} />
    );
};

export default ButtonGuess;

