'use client'

import { styled } from 'styled-components'
import { Display, Z_INDEX, media } from 'styles'

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => `rgb(${theme.accent1})`};
  z-index: ${Z_INDEX.hero};
`
export const TitleWrapper = styled.div`
  height: 90svh;
  min-height: 40vw;
  display: flex;
  align-items: flex-end;
  padding-bottom: 8vw;

  ${media.thone`height: 60svh;`}

  .reveal-hero-1 {
    ${Display};
  }
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100svh;
  min-height: 40vw;

  ${media.thone`height: 60svh;`}
`
