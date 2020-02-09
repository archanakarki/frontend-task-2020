import React from 'react'
import './Button.css'

const Button = ({name, task}) => {
    return(
    <button onClick={task}>{name}</button>
    )
}

export default Button