import React from 'react';
import './button.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Button = ({type, onClick, text, icon }) => {
    return (
        <button className={type} onClick={onClick}>
            {icon && <i className={icon}></i>}
            {text}
        </button>
    )
}


export default Button;