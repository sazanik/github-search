import React from "react";
import './CenterBox.scss'

const CenterBox = (props) => {
  return (
    <div className={props.className || 'CenterBox'}>
      <img
        src={props.icon}
        alt="icon"
      />
      <p className='text'>
        {props.text}
      </p>
    </div>
  )
}

export default CenterBox