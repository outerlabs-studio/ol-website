'use client'

import styled from 'styled-components'
import { Huge, media, SectionWrapper } from 'styles'

export const HeroWrapper = styled(SectionWrapper)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: ${({ theme }) => `rgb(${theme.text})`};
  color: ${({ theme }) => `rgb(${theme.body})`};
  z-index: 3;
  will-change: transform;
  padding: 5vw 0;

  ${media.thone`padding: 10rem 0 5rem;`}

  &:last-child {
    height: 100vh;
    overflow: hidden;
  }
`
export const TitleWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  text-transform: uppercase;
  padding-top: 2vw;

  h1 {
    margin-top: -2vw;
  }
`
export const MarqueeWrapper = styled.a`
  margin: 10vw 0;
  background-color: ${({ theme }) => `rgb(${theme.accent1})`};
  color: ${({ theme }) => `rgb(${theme.text})`};
  transition: all 0.3s ease-out;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => `rgb(${theme.accent2})`};
  }
`
export const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  align-self: center;
  gap: 2rem;
`
export const ButtonsRow = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  ${media.thone`gap: 1rem;`}
`
export const ButtonWrapper = styled.div`
  a {
    div {
      ${Huge}
    }
  }
`
