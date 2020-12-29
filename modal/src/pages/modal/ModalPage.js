import React, { useEffect, useState } from 'react'
import ModalContent from '../../components/modal/ModalContent'
import ModalInner from '../../components/modal/ModalInner'
import ModalOverlay from '../../components/modal/ModalOverlay'
import ModalWrapperContainer from '../../containers/main/ModalWrapperContainer'

function ModalPage({ visible, closeModal, maskClosable }) {
  const [data, setData] = useState('')
  useEffect(() => {
    document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`
    return () => {
      const scrollY = document.body.style.top
      document.body.style.cssText = `position: ""; top: "";`
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }
  }, [])
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapperContainer
        closeModal={closeModal}
        maskClosable={maskClosable}
        visible={visible}
      >
        <ModalInner>
          <ModalContent data={data} />
        </ModalInner>
      </ModalWrapperContainer>
    </>
  )
}

export default ModalPage
