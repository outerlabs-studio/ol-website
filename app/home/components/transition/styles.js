'use client'

import styled from 'styled-components'
import { Z_INDEX } from 'styles'

export const TransitionSection = styled.section`
  position: relative;
  padding-top: 10vw;
  z-index: ${Z_INDEX.transition};
`
export const InnerWrapper = styled.div`
  background-color: ${({ theme }) => `rgb(${theme.text})`};
  color: ${({ theme }) => `rgb(${theme.accent1})`};
  padding: 8vw 0 30vw;
`
export const TextWrapper = styled.div`
  grid-column: 2 / span 2;
  max-width: 70%;

  p {
    display: inline;
    opacity: 0;
  }
`
export const ButtonWrapper = styled.div`
  grid-column: 2 / span 2;
  width: fit-content;
  margin-top: 4rem;
`
