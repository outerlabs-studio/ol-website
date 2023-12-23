'use client'

import { styled } from 'styled-components'
import { Display, GridWrapper, Medium, Normal, Z_INDEX, media } from 'styles'

export const SectionWrapper = styled.section`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => `rgb(${theme.accent1})`};
  padding-bottom: 6vw;
  z-index: ${Z_INDEX.hero};

  ${media.desktop`padding-bottom: 6rem;`}
`
export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 90svh;
  width: 100%;
  min-height: 40vw;
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
    color: ${({ theme }) => `rgb(${theme.body})`};
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
export const ImageWrapper = styled.a`
  position: relative;
  display: block;
  width: 100%;
  height: 100svh;
  min-height: 50vw;
  border-radius: 2vw;
  text-decoration: none;

  img {
    background-color: ${({ theme }) => `rgba(${theme.text}, 0.75)`};
  }

  ${media.desktop`border-radius: 35px;`}
  ${media.thone`height: 60svh;`}
`
export const OverlayWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => `rgba(${theme.text}, 0.5)`};
  border-radius: inherit;
  z-index: ${Z_INDEX.hero + 1};
`
export const AboutButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: ${Z_INDEX.hero + 2};
`
export const AboutButton = styled.div`
  ${Medium}
  position: relative;
  display: inline-flex;
  flex-direction: column;
  padding: 0.75vw 3vw;
  background-color: ${({ theme }) => `rgb(${theme.accent1})`};
  color: ${({ theme }) => `rgb(${theme.text})`};
  border-radius: 35vw;
  white-space: nowrap;

  ${media.desktop`
    padding: 0.75rem 3rem;
    border-radius: 35px;
  `}
`
