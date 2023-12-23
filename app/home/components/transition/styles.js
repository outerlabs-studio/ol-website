'use client'

import styled from 'styled-components'
import { Z_INDEX, media } from 'styles'

export const TransitionSection = styled.section`
  position: relative;
  background-color: ${({ theme }) => `rgb(${theme.accent1})`};
  z-index: ${Z_INDEX.transition};

  ${media.thone`padding-top: 0;`}
`
export const InnerWrapper = styled.div`
  background-color: ${({ theme }) => `rgb(${theme.text})`};
  color: ${({ theme }) => `rgb(${theme.accent1})`};
  padding: 8vw 0 30vw;

  ${media.thone`padding: 8rem 0;`}

  .label {
    margin-top: 0.2vw;

    ${media.desktop`margin-top: 0;`}
  }
`
export const TextWrapper = styled.div`
  grid-column: 2 / span 2;
  max-width: 70%;

  ${media.thone`
    max-width: 100%;
    grid-column: 1 / 4;
  `}

  p {
    display: inline;
    opacity: 0;
  }
`
export const ButtonWrapper = styled.div`
  grid-column: 2 / span 2;
  width: fit-content;
  margin-top: 4rem;

  ${media.thone`
    grid-column: 1 / 4;
  `}
`
