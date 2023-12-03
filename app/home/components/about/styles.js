'use client'

import styled from 'styled-components'
import { GridWrapper, Huge, Normal, Z_INDEX } from 'styles'

export const AboutSection = styled.section`
  position: relative;
  padding: 10vw 0;
  background-color: ${({ theme }) => `rgb(${theme.body})`};
  min-height: 200vh;
  overflow-x: hidden;
  z-index: ${Z_INDEX.about};
`
export const TopImageWrapper = styled.div`
  position: absolute;
  grid-column: 2;
  width: 20vw;
  height: 85vh;
  border-radius: 30px 30px 0 0;
  z-index: 2;

  img {
    border-radius: inherit;
    object-fit: cover;
  }
`
export const BottomImageWrapper = styled.div`
  position: absolute;
  grid-column: 2;
  top: 85vh;
  width: 20vw;
  height: 85vh;
  border-radius: 0 0 30px 30px;
  z-index: 2;

  img {
    border-radius: inherit;
    object-fit: cover;
  }
`
export const CustomGridWrapper = styled(GridWrapper)`
  margin-top: 45vh;
`
export const ContentWrapper = styled.div`
  grid-column: 3;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  a {
    width: fit-content;
  }

  .reveal-about-1 {
    ${Huge}
  }
  .reveal-about-2 {
    ${Normal}
  }
`
export const BottomMarqueeWrapper = styled.div`
  position: absolute;
  bottom: 10vw;
`
