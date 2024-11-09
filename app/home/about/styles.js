'use client'

import styled from 'styled-components'
import { SectionWrapper, Z_INDEX, media } from 'styles'

export const AboutSection = styled(SectionWrapper)`
  z-index: ${Z_INDEX.about};
  background-color: ${({ theme }) => `rgb(${theme.body})`};
`
export const InnerWrapper = styled.div`
  color: ${({ theme }) => `rgb(${theme.text})`};
  padding: 8vw 0;
  min-height: 100vh;

  ${media.thone`padding: 0 0 4rem 0;`}

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
