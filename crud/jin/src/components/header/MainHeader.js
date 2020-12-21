import React from 'react'
import Button from '../button/Button'
import './MainHeader.scss'

function MainHeader({ history }) {
  return (
    <>
      <div className="haederWrapper">
        <Button
          textBtn={'Main'}
          onClickFunc={() => {
            history.push('/')
          }}
        />
        <Button
          textBtn={'Contents'}
          onClickFunc={() => {
            history.push('/contents')
          }}
        />
      </div>
    </>
  )
}

export default MainHeader
