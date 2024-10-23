'use client'

import Link from 'next/link'
import styled from 'styled-components'
import {
  ContainerPaddingLeft,
  ContainerPaddingRight,
  Huge,
  media,
  Normal,
  wtskrappa,
  Z_INDEX,
} from 'styles'

export const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: ${Z_INDEX.nav};
  ${ContainerPaddingLeft}
  ${ContainerPaddingRight}
  padding-top: 1rem;
  padding-bottom: 1rem;
`
export const NavButtonWrapper = styled.nav`
  display: ${({ touchDevice }) => (touchDevice ? 'none' : 'flex')};
  align-items: center;

  ${media.tablet`
    top: 1rem;
    right: 1rem;
    display: none;
  `}
`
export const MobileNavRow = styled(NavButtonWrapper)`
  display: ${({ touchDevice }) => (touchDevice ? 'flex' : 'none')};

  ${media.tablet`display: flex;`}
`
export const Button = styled.div`
  position: relative;
  background-color: ${({ menuOpen, theme }) =>
    menuOpen ? `rgb(${theme.body})` : `rgba(${theme.text}, 0.9)`};
  backdrop-filter: blur(10px) hue-rotate(120deg);
  border-radius: 35vw;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  padding: 0.75vw 1.5vw;
  width: auto;
  cursor: pointer;

  p {
    color: ${({ theme }) => `rgb(${theme.accent1})`};
  }

  ${media.desktop`
    padding: 0.5rem 2rem;
    border-radius: 35px;
  `}

  span {
    overflow: hidden;
  }

  svg {
    width: 100%;
  }
`
export const NavLinkWrapper = styled.div`
  display: flex;
  width: 0;
  position: absolute;
  overflow: hidden;
  gap: 1.5vw;
`
export const NormalLink = styled(Link)`
  color: ${({ theme }) => `rgb(${theme.accent1})`};
  ${Normal}
  text-decoration: none;
`
export const Logo = styled.a`
  text-decoration: none;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;

  .reveal-nav-1 {
    ${Huge}
    font-weight: normal;
    text-decoration: none;
    color: ${({ theme }) => `rgb(${theme.text})`};
    font-family: ${wtskrappa.style.fontFamily};
    -webkit-font-smoothing: antialiased;

    ${media.phablet`
      font-size: 10vw;
    `}
  }
`
