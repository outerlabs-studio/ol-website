'use client'

import styled from 'styled-components'
import { GridWrapper, Z_INDEX } from 'styles'

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => `rgb(${theme.text})`};
  color: ${({ theme }) => `rgb(${theme.accent1})`};
  z-index: ${Z_INDEX.footer.section};
  position: relative;
  padding: 28vh 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    line-height: 90%;
  }
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  z-index: ${Z_INDEX.footer.foreground};

  h1,
  a {
    z-index: ${Z_INDEX.footer.foreground};
  }
`
export const BottomLine = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 2rem 0;
  z-index: ${Z_INDEX.footer.foreground};
`
export const CustomGridWrapper = styled(GridWrapper)`
  align-items: end;

  a {
    width: fit-content;
  }
`
export const LinksWrapper = styled.div`
  display: flex;
  gap: 2rem;
`

export const BackgroundBlur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => `rgb(${theme.text})`};
  opacity: 0.4;
  z-index: ${Z_INDEX.footer.section};
`
export const WheelWrapper = styled.div`
  position: absolute;
  /* top: -10vh; */
  /* transform: translateY(10%); */
  left: 0;
  /* transform: translateY(30vh); */
  width: 100vw;
  height: 100vw;
  z-index: ${Z_INDEX.footer.background};
`

export const FerrisWheel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  transform-origin: center center;
  flex-shrink: 0;
  z-index: ${Z_INDEX.footer.background};
`

export const ItemWrapper = styled.div`
  position: absolute;
  height: 1px;
  z-index: ${Z_INDEX.footer.background};

  img {
    width: 20vw;
    height: 20vw;
    filter: blur(10px);
  }
`
