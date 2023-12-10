'use client'

import styled from 'styled-components'
import { Huge, Normal, Small, media, wtskrappa } from 'styles'

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9996;
  /* background-color: ${({ theme }) => `rgb(${theme.accent1})`}; */
  color: ${({ theme }) => `rgb(${theme.accent1})`};
  transition: transform 0.3s ease-in-out;
  mix-blend-mode: difference;

  a {
    mix-blend-mode: difference;
  }

  ${(props) =>
    props.$hide &&
    `
    transform: translateY(-100%);
  `}
`
export const NavWrapper = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0.5vw 0;

  ${media.desktop`padding: 0.5rem 0;`}
`
export const LinkList = styled.div`
  display: flex;
  gap: 2vw;
  align-items: center;

  ${media.desktop`gap: 2rem;`}
  ${media.phablet`gap: 1rem;`}

  a {
    ${Normal}
    color: ${({ theme }) => `rgb(${theme.accent1})`};

    ${media.phablet`${Small}`}
  }
`
export const Logo = styled.a`
  text-decoration: none;
  cursor: pointer;

  .reveal-nav-1 {
    ${Huge}
    font-weight: normal;
    text-decoration: none;
    color: ${({ theme }) => `rgb(${theme.accent1})`};
    font-family: ${wtskrappa.style.fontFamily};
    -webkit-font-smoothing: antialiased;

    ${media.phablet`
      font-size: 10vw;
    `}
  }
`
