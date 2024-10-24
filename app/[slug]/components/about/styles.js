'use client'

import { styled } from 'styled-components'
import {
  Huge,
  Normal,
  Z_INDEX,
  media,
  SectionWrapper,
  ContainerPaddingLeft,
  ContainerPaddingRight,
} from 'styles'

export const AboutWrapper = styled(SectionWrapper)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8vw 10vw;
  background-color: ${({ theme }) => `rgb(${theme.accent1})`};
  z-index: ${Z_INDEX.about};

  ${media.tablet`
    padding-top: 8vw;
    padding-bottom: 8vw;
    ${ContainerPaddingLeft}
    ${ContainerPaddingRight}
  `};
  ${media.thone`
    flex-direction: column;
    gap: 3rem;
  `}
`
export const RightCol = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  ${media.thone`width: 100%;`}
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
