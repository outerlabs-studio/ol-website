'use client'

import Link from 'next/link'
import styled from 'styled-components'
import { Huge, Medium, MediumText, wtskrappa } from 'styles'

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  background-color: ${({ theme }) => `rgb(${theme.accent1})`};
  color: ${({ theme }) => `rgb(${theme.text})`};
  transition: transform 0.3s ease-in-out;

  ${(props) =>
    props.hide &&
    `
    transform: translateY(-100%);
  `}
`
export const NavWrapper = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
`
export const LinkList = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  a {
    ${Medium}
  }
`
export const Logo = styled(Link)`
  ${Huge}
  font-weight: 800!important;
  text-decoration: none;
  color: ${({ theme }) => `rgb(${theme.text})`};
  font-family: ${wtskrappa.style.fontFamily};
`
