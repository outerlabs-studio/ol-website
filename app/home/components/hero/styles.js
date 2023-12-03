'use client'

import styled from 'styled-components'
import { GridWrapper, Normal, Z_INDEX, media, wtskrappa } from 'styles'

export const HeroWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  z-index: ${Z_INDEX.hero};

  ${media.thone`
    flex-direction: column-reverse;
    padding: 0.5rem 0 1.5rem;
  `};

  .reveal-hero-1 {
    ${Normal}
  }
`
export const TitleWrapper = styled.div`
  /* position: absolute; */
  width: 100%;
  overflow: hidden;
  /* bottom: 5%; */
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
    grid-row-gap: 5vh;
  `}
`
export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 40%;
  left: 30%;
  width: fit-content;
  z-index: 2;

  ${media.thone`
    bottom: 52%;
    left: 50%;
  `}
`
export const LinkWrapper = styled.div`
  grid-column: 1 / span 2;
  display: flex;
  position: relative;
  gap: 2rem;

  ${media.thone`
    grid-column: 1 / 4;
    justify-content: space-between;
    gap: 0.5rem;
  `}
`
export const DescriptionWrapper = styled.div`
  grid-column: 3;
  max-width: 20rem;

  ${media.thone`
    grid-column: 1 / 4;
    grid-row: 1;
  `}

  .reveal-button {
    margin-top: 2rem;
  }
`
