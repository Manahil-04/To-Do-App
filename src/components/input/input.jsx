import React from "react";
import './input.css';

const Input = ({inputValue, handleChange, placeholder, styleclass}) => {
    return (
    <input
    value={inputValue}
    onChange={handleChange}
    placeholder={placeholder}
    className={styleclass} />
    )
}


export default Input;