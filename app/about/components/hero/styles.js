'use client'

import styled from 'styled-components'
import { MediumText, Z_INDEX, Huge, media, Medium, Normal } from 'styles'

export const HeroWrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: ${Z_INDEX.hero};
`
export const DVDScreenWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

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
export const BlobWrapper = styled.div`
  display: grid;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  width: max-content;
  margin: 0 auto;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(4, auto);

  ${media.phablet`
    left: 59%;
    transform: translate(-50%, -59%);
  `}
`
