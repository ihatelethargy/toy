import { useState } from 'react'
import styled from 'styled-components'
import ModalPage from '../../pages/modal/ModalPage'
import BlankTop from '../common/BlankTop'

const Sibal = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Main = ({ sibal, data }) => {
  // component에서는 스타일 지정만
  const [modalVisible, setModalVisible] = useState(false)

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }
  return (
    <>
      <div>MainPage입니다{sibal}</div>
      <BlankTop DesktopMargin="5" MobileMargin="2" />
      <button onClick={openModal}>modal btn</button>
      {modalVisible && (
        <ModalPage
          data={data}
          visible={modalVisible}
          maskClosable={true}
          closeModal={closeModal}
        />
      )}
    </>
  )
}

export default Main
