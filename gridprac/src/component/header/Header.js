import React from 'react'
import { useHistory } from 'react-router-dom'
import './Header.scss'

function Header() {
  const history = useHistory()
  return (
    <div className="headerWrapper">
      <span onClick={() => history.push('/')}>Main</span>
      <span onClick={() => history.push('/contents')}>컨텐츠 모아보기</span>
      <span onClick={() => history.push('/newcontent')}>New Test</span>
    </div>
  )
}

export default Header
