'use client'

import styled from 'styled-components'
import { MediumText, Z_INDEX, Huge, media } from 'styles'

export const HeroWrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: ${Z_INDEX.hero};
`
export const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${Z_INDEX.hero + 1};

  .reveal-hero-1 {
    ${Huge}
  }
`
export const LabelWrapper = styled.div`
  &:nth-child(3n + 1) {
    margin: -1.3rem -2.2rem -1.3rem auto;
    transform-origin: right center;
  }
  &:nth-child(3n + 2) {
    margin: -1.3rem auto;
    transform-origin: center center;
  }
  &:nth-child(3n + 3) {
    margin: -1.3rem auto -1.3rem -2.2rem;
    transform-origin: left center;
  }
`
export const LabelBlob = styled(MediumText)`
  width: fit-content;
  padding: 0.5vw 2.5vw;
  background-color: ${({ theme }) => `rgb(${theme.accent1})`};
  border-radius: 60px;
  line-break: nowrap;

  ${media.desktop`padding: 0.5rem 2rem;`}
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
`
