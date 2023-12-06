'use client'

import styled from 'styled-components'
import { Huge, Medium, Normal, Z_INDEX, media } from 'styles'

export const AboutWrapper = styled.section`
  width: 100%;
  background-color: ${({ theme }) => `rgb(${theme.accent1})`};
  color: ${({ theme }) => `rgb(${theme.text})`};
  padding: 10vw 0;
  z-index: ${Z_INDEX.transition};

  ${media.thone`padding: 4rem 0;`}
`
export const TextWrapper = styled.div`
  grid-column: 2 / span 2;
  max-width: 90%;

  ${media.thone`
    grid-column: 1 / 4;
    max-width: 100%; 
  `};

  .reveal-about-1 {
    ${Huge}
    display: inline-flex;
  }
`
export const InfoWrapper = styled.div`
  grid-column: 2 / span 2;
  margin-top: 6rem;
  display: flex;
  gap: 8rem;
  flex-wrap: wrap;

  .col {
    display: flex;
    flex-direction: column;
  }

  ${media.tablet`gap: 3rem;`}
  ${media.thone`
    grid-column: 1 / 4;
    margin-top: 4rem;
  `}

  .reveal-about-2 {
    ${Normal}
  }
  .reveal-about-3 {
    ${Medium}
    font-weight: 800;
  }
`
