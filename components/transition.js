import styled from 'styled-components'
import { Z_INDEX } from 'styles'

const TransitionElement = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${Z_INDEX.transition};
  will-change: transform, border-bottom-left-radius, border-top-left-radius;
  display: flex;
`
const TransitionColumn = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => `rgb(${theme.text})`};
`

const Transition = () => {
  return (
    <TransitionElement id="transition-element">
      <TransitionColumn className="transition-column" />
      <TransitionColumn className="transition-column" />
      <TransitionColumn className="transition-column" />
      <TransitionColumn className="transition-column" />
      <TransitionColumn className="transition-column" />
      <TransitionColumn className="transition-column" />
    </TransitionElement>
  )
}

export default Transition
