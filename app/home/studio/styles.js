'use client'

import styled from 'styled-components'
import {
  GridWrapper,
  Huge,
  Normal,
  SectionWrapper,
  Z_INDEX,
  media,
} from 'styles'

export const AboutSection = styled(SectionWrapper)`
  padding: 8vw 0;
  background: transparent;
  min-height: 200vh;
  overflow-x: hidden;
  z-index: ${Z_INDEX.about};

  .resize {
    ${media.thone`
      gap: 0;
      padding-right: 1rem;
      padding-left: 1rem;
      margin: 5vh 0;
    `};
  }

  ${media.desktop`min-height: 140vh;`}
  ${media.thone`
    min-height: unset;
    padding: 4rem 0;
  `}
`
export const TopImageWrapper = styled.div`
  position: absolute;
  grid-column: 2 / 3;
  width: 100%;
  max-width: 24.5vw;
  height: 90vh;
  border-radius: 2vw 2vw 0 0;
  z-index: 2;
  top: -15vh;

  ${media.desktop`
    height: 60vh;
    top: 0;
  `}
  ${media.thone`
    grid-column: 1 / 3;
    max-width: 100%;
    position: relative;
    border-radius: 0;
    height: 30rem;
  `};

  img {
    border-radius: inherit;
    object-fit: cover;
  }
`
export const BottomImageWrapper = styled.div`
  position: absolute;
  grid-column: 2 / 3;
  top: 75vh;
  width: 100%;
  max-width: 24.5vw;
  height: 90vh;
  border-radius: 0 0 2vw 2vw;
  z-index: 2;

  ${media.desktop`
    height: 60vh;
    top: 60vh;
  `}
  ${media.thone`
    grid-column: 3 / -1;
    max-width: 100%;
    top: 0;
    border-radius: 0;
    height: 30rem;
  `};

  img {
    border-radius: inherit;
    object-fit: cover;
  }
`
export const CustomGridWrapper = styled(GridWrapper)`
  /* margin-top: 55vh; */
  position: absolute;
  top: 25%;
  width: 100%;

  ${media.thone`
    position: relative;
    top: unset;
    margin-top: 0;
  `}
`
export const ContentWrapper = styled.div`
  grid-column: 3;
  display: flex;
  flex-direction: column;
  gap: 3vw;

  ${media.desktop`gap: 2rem;`}
  ${media.thone`grid-column: 1 / 4;`}

  a {
    width: fit-content;
  }

  .title-row {
    margin-top: -0.4rem;
  }
  .reveal-about-1 {
    ${Huge}
  }
  .reveal-about-2 {
    ${Normal}
  }
`
export const ParagraphWrapper = styled.div`
  max-width: 90%;

  ${media.desktop`max-width: 100%;`}
`
