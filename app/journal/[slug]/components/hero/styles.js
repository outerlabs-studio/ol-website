'use client'

import styled from 'styled-components'
import { SectionWrapper } from 'styles'

export const HeroWrapper = styled(SectionWrapper)`
  padding: 16vw 0 5vw;
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 5rem;

  span {
    color: ${({ theme }) => `rgb(${theme.accent2})`};
  }
`
export const TitleWrapper = styled.div`
  width: 50%;
`
export const SmallInfoWrapper = styled.div`
  display: flex;
  gap: 2rem;
`
export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 70svh;
  min-height: 50vw;
  overflow: hidden;
`
