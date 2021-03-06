import { useState } from 'react'
import BlankTop from '../../components/common/BlankTop'
import MainContainer from '../../containers/main/MainContainer'

const MainPage = () => {
  // 여기는 최종 집합소 !

  return (
    <>
      <BlankTop DesktopMargin="20" TabletMargin="10" MobileMargin="5" />
      <MainContainer />
      <BlankTop DesktopMargin="20" TabletMargin="10" MobileMargin="5" />
    </>
  )
}

export default MainPage
