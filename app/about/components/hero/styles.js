'use client'

import styled from 'styled-components'
import { Z_INDEX, Huge, media, Medium, Normal, SectionWrapper } from 'styles'

export const HeroWrapper = styled(SectionWrapper)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: ${Z_INDEX.hero};
  background-color: ${({ theme }) => `rgb(${theme.accent1})`};
`
export const AnimWrapper = styled.div`
  width: 100%;
  height: 100%;
  clip-path: inset(0% 0% 0% 0%);
  overflow: hidden;
`
export const DVDScreenWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => `rgb(${theme.body})`};
  border-radius: inherit;

  .wrapper {
    position: absolute;
    inset: 0;
    width: fit-content;
    height: fit-content;
    user-select: none;
    cursor: grab;
    touch-action: none;
  }

  .item {
    padding: 0.75vw 1.5vw;
    background-color: ${({ theme }) => `rgb(${theme.accent1})`};
    color: ${({ theme }) => `rgb(${theme.text})`};
    border-radius: 60px;
    ${Normal}

    &.grabbed {
      background-color: ${({ theme }) => `rgb(${theme.text})`};
      color: ${({ theme }) => `rgb(${theme.accent1})`};
    }
  }
`
export const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${Z_INDEX.hero - 1};

  .reveal-hero-1 {
    ${Huge}

    ${media.thone`${Medium}`}
  }
`
