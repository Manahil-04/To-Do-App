import React from "react";
import './input.css';

const Input = ({inputValue, handleChange, placeholder}) => {
    return (
    <input
    value={inputValue}
    onChange={handleChange}
    placeholder={placeholder} />
    )
}


export default Input;
