'use client'

import styled from 'styled-components'
import { Display, GridWrapper, Normal, Z_INDEX, media } from 'styles'

export const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => `rgb(${theme.text})`};
  color: ${({ theme }) => `rgb(${theme.accent1})`};
  z-index: ${Z_INDEX.footer.section};
  position: relative;
  padding: 4vh 0;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  will-change: transform;
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  z-index: ${Z_INDEX.footer.foreground};

  .reveal-footer-1 {
    ${Display}/* line-height: 95%; */
  }
  .reveal-footer-3 {
    ${Normal}
  }

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
  grid-template-columns: 21% 1fr 1fr auto;

  a {
    width: fit-content;
  }

  ${media.thone`grid-template-columns: auto 1fr 1fr auto;`}

  .item-4 {
    grid-column: 4;
  }
`
export const LinksWrapper = styled.div`
  display: flex;
  gap: 2rem;

  ${media.desktop`gap: 1rem;`}
  ${media.thone`display: none;s`}
`

export const WheelWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => `rgb(${theme.text})`};
  opacity: 0.4;
  filter: blur(10px);
  z-index: ${Z_INDEX.footer.background};
`
export const FerrisWheel = styled.div`
  transform-origin: center center;
  flex-shrink: 0;
  z-index: ${Z_INDEX.footer.background};
`
export const ItemWrapper = styled.div`
  position: absolute;
  height: 1px;
  z-index: ${Z_INDEX.footer.background};

  img {
    width: 40vmax;
    height: 40vmax;
  }
`
