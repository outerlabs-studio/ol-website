'use client'

import styled from 'styled-components'
import { media, SectionWrapper } from 'styles'

export const HeroWrapper = styled(SectionWrapper)`
  padding: 16vw 0 5vw;

  ${media.thone`padding: 15rem 0 5rem;`}
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 5rem;

  ${media.thone`
    text-align: left;
    gap: 3rem;
    align-items: flex-start;
  `}

  span {
    color: ${({ theme }) => `rgb(${theme.accent2})`};
  }
`
export const TitleWrapper = styled.div`
  width: 50%;

  ${media.thone`width: 100%;`}
`
export const SmallInfoWrapper = styled.div`
  display: flex;
  gap: 2rem;

  p:nth-child(even) {
    ${media.thone`display: none;`}
  }

  ${media.thone`
    flex-direction: column;
    gap: 0;
  `}
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 70svh;
  min-height: 50vw;
  overflow: hidden;
`
