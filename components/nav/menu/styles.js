'use client'

import Link from 'next/link'
import styled from 'styled-components'
import { Large, media, Medium, Z_INDEX } from 'styles'

export const MenuWrapper = styled.menu`
  display: ${({ menuOpen }) => (menuOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => `rgb(${theme.white})`};
  margin: 0;
  padding: 0;
  z-index: ${Z_INDEX.menu};
`
export const CustomGrid = styled.div`
  display: grid;
  position: relative;
  grid-gap: 2vw;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  height: 100%;
  align-items: center;
`
export const MenuLinksWrapper = styled.div`
  grid-column: 4 / -1;
  display: flex;
  flex-direction: column;
  gap: 2vw;
  ${media.phablet`grid-column: 1 / -1;`}
`
export const MenuLink = styled(Link)`
  ${Large}
  color: ${({ theme }) => `rgb(${theme.black})`};
  text-decoration: none;
`
export const ContactWrapper = styled.div`
  grid-column: 4 / -1;
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
  ${media.phablet`grid-column: 1 / -1;`}

  a {
    ${Medium}
    text-decoration: underline;
    color: ${({ theme }) => `rgb(${theme.black})`};
  }
`
