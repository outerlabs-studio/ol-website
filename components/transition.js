import styled from 'styled-components'

const TransitionElement = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 9998;
  position: fixed;
  will-change: transform, border-bottom-left-radius, border-top-left-radius;
`

export default TransitionElement
