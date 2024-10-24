import styled from 'styled-components'
import { Z_INDEX } from 'styles'

const TransitionElement = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: ${Z_INDEX.transition};
  position: fixed;
  will-change: transform, border-bottom-left-radius, border-top-left-radius;

  &.active {
    visibility: visible;
    opacity: 1;
  }
`

export default TransitionElement
