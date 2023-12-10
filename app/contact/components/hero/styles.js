'use client'

import styled from 'styled-components'
import { Display, Huge, media } from 'styles'

export const HeroWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  padding: 4rem 0;
  background-color: ${({ theme }) => `rgb(${theme.text})`};
  color: ${({ theme }) => `rgb(${theme.body})`};
  z-index: 3;
  will-change: transform;
`
export const MarqueeWrapper = styled.div`
  position: relative;
  padding-bottom: 1rem;

  .first {
    margin-left: 6vw;
  }

  .reveal-text-1 {
    ${Display}
  }
`
export const ButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;

  a {
    padding: 0.75vw 5vw;
    border-radius: 80vw;

    ${media.desktop`border-radius: 80px;`}

    div {
      ${Huge}
    }
  }
`
