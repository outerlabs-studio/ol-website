import styled from 'styled-components'
import { Huge, Medium, Normal, Z_INDEX } from 'styles'

export const AboutWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => `rgb(${theme.accent1})`};
  color: ${({ theme }) => `rgb(${theme.text})`};
  padding: 10vw 0;
  z-index: ${Z_INDEX.about};
`
export const TextWrapper = styled.div`
  grid-column: 2 / span 2;
  max-width: 90%;

  .reveal-about-1 {
    ${Huge}
  }
`
export const InfoWrapper = styled.div`
  grid-column: 2 / span 2;
  margin-top: 6rem;
  display: flex;
  gap: 8rem;

  .col {
    display: flex;
    flex-direction: column;
  }

  .reveal-about-2 {
    ${Normal}
  }
  .reveal-about-3 {
    ${Medium}
    font-weight: 800;
  }
`
