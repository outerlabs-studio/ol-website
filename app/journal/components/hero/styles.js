'use client'

import { styled } from 'styled-components'
import {
  Container,
  Display,
  GridWrapper,
  Medium,
  Normal,
  SectionWrapper,
  Z_INDEX,
  media,
} from 'styles'

export const HeroSection = styled(SectionWrapper)`
  width: 100%;
  padding-bottom: 6vw;
  z-index: ${Z_INDEX.hero};

  ${media.desktop`padding-bottom: 6rem;`}
`
export const CustomContainer = styled(Container)`
  opacity: 0;
  visibility: hidden;
`
export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  padding-bottom: 4vw;
  padding-top: 6vw;

  ${media.desktop`
    padding-bottom: 2rem;
    padding-top: 4rem;
  `}
  ${media.thone`flex-direction: column-reverse;`}
`
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.thone`
    height: 60svh;
    justify-content: center;
  `}

  .reveal-hero-1 {
    ${Display};
  }
  .and {
    color: ${({ theme }) => `rgb(${theme.accent2})`};
  }
`
export const CustomGridWrapper = styled(GridWrapper)`
  flex-grow: 1;
  align-items: center;
`
export const DescriptionWrapper = styled.div`
  grid-column: 3;
  max-width: 30vw;

  ${media.tablet`max-width: 100%;`}
  ${media.thone`grid-column: 1;`}

  .reveal-hero-2 {
    ${Normal}
  }
  .reveal-hero-3 {
    margin-top: 2vw;
    ${media.desktop`margin-top: 2rem;`}
  }
`
export const LineOne = styled.div`
  display: flex;
  width: 100%;
`
export const LineTwo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  ${media.thone`display: block;`}
`
