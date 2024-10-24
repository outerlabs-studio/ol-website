'use client'

import { styled } from 'styled-components'
import { Huge, Normal, Z_INDEX, media, SectionWrapper } from 'styles'

export const AboutWrapper = styled(SectionWrapper)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8vw 10vw;
  background-color: ${({ theme }) => `rgb(${theme.accent1})`};
  z-index: ${Z_INDEX.about};

  ${media.thone`padding: 4rem 0;`}

  .reveal-about-1 {
    ${Huge};
  }

  .reveal-about-2 {
    ${Normal};
  }
`
export const RightCol = styled.div`
  max-width: 50%;
`
export const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const Item = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    color: ${({ theme }) => `rgb(${theme.accent2})`};
  }
`
export const TitleWrapper = styled.div`
  max-width: 90%;
`
export const ParagraphWrapper = styled.div`
  grid-column: 3 / 4;

  ${media.thone`grid-column: 1 / 4;`}
`
export const ButtonWrapper = styled.div`
  grid-column: 3 / 4;
  margin-top: 4vw;
  transform-origin: left;

  ${media.thone`
    grid-column: 1 / 4;
    margin-top: 2rem;
  `}
`
