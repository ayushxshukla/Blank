import React from 'react'
import "./button.css";


const Button = ({buttonText, color, onClick, customClass, prefix}) => {
  return (
    <div className={`flex absolute-center button-wrapper ${customClass}`} onClick={onClick} style={{color:{color}}}>
        {prefix}{buttonText}
    </div>
  )
}

export default Button