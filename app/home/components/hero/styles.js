'use client'

import styled from 'styled-components'
import { GridWrapper, Normal, Z_INDEX, media, wtskrappa } from 'styles'

export const HeroWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  width: 100%;
  z-index: ${Z_INDEX.hero};

  .reveal-hero-1 {
    ${Normal}
  }

  .content-wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${media.thone`
      flex-direction: column-reverse;
      padding: 0.5rem 0 1.5rem;
    `};
  }
`
export const TitleWrapper = styled.div`
  width: 100%;
  text-align: center;

  ${media.thone`
    text-align: left;
    padding: 0 1rem;
  `}

  .reveal-hero-3 {
    margin: 0 0 -10vw;
    font-family: ${wtskrappa.style.fontFamily};
    font-size: 41.5vw;
    z-index: 1;
    will-change: transform;
    white-space: nowrap;

    ${media.thone`
      font-size: 69vw;
      line-height: 90%;
    `};
  }
`
export const CustomGridWrapper = styled(GridWrapper)`
  padding-top: 10vmin;

  ${media.thone`
    padding-top: 0;
    grid-column-gap: 0;
    grid-row-gap: 10vh;
  `}
`
export const ButtonWrapper = styled.div`
  position: absolute;
  top: 60%;
  left: 30%;
  transform: translate(-30%, -60%);
  width: fit-content;
  z-index: 2;

  ${media.desktop`
    top: 80%;
    left: 30%;
    transform: translate(-30%, -80%);
  `}
  ${media.thone`
    display: none;
  `}
`
export const LinkWrapper = styled.div`
  grid-column: 1 / span 2;
  display: flex;
  position: relative;
  gap: 2rem;

  ${media.tablet`gap: 1rem;`}
  ${media.thone`
    grid-column: 1 / 4;
    justify-content: space-between;
    gap: 0.5rem;
  `}
`
export const DescriptionWrapper = styled.div`
  grid-column: 3;
  max-width: 62%;

  .link-wrapper {
    display: flex;
    margin-top: 2vw;
    align-items: center;

    ${media.desktop`margin-top: 1rem;`}

    .small {
      display: none;

      ${media.thone`
        display: unset;
        margin-left: 1rem;
      `}
    }
  }

  ${media.desktop`max-width: 20rem;`}
  ${media.thone`
    grid-column: 1 / 4;
    grid-row: 1;
    max-width: 100%;
    padding-top: 1rem;
  `}
`
