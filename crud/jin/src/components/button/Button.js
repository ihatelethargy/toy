import React from 'react'
import './Button.scss'

function Button({ textBtn, onClickFunc }) {
  return (
    <>
      <button className="btnText" onClick={onClickFunc}>
        {textBtn}
      </button>
    </>
  )
}

export default Button
