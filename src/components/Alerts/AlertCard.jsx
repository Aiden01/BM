
import React from 'react'

import './style.css'

const AlertCard = ({ type, message }) => (
    <div className="alert px-10 py-5 my-5 bg-white text-grey-darkest font-semibold relative">
        <div className={ `top-bar ${type} h-full w-2 absolute pin-l pin-t` }></div>
        <p>{ message }</p>
    </div>
)

export default AlertCard