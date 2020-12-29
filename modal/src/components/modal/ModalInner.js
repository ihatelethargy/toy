import styled from 'styled-components'

const LayoutInner = styled.div`
  box-shadow: 0px 0px 8px 2px #60ffda;
  background: black;
  padding: 0.3rem;
  overflow: hidden;
  border-radius: 0.9rem;
  width: 100%;
  max-width: 85rem;
  min-width: 64.8rem;
  margin: 7.2rem auto;
  outline: 0;
  @media only screen and (max-width: 880px) {
    width: 95vw;
  }
`
// min-height: 50%;

const ModalInner = ({ children }) => {
  return <LayoutInner tabIndex="0"> {children} </LayoutInner>
}

export default ModalInner
