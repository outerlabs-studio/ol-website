'use client'

import { Container } from 'styles'
import { HeaderWrapper, LinkList, Logo, NavWrapper } from './styles'
import CustomLink from 'components/link'
import { useLenis } from '@studio-freight/react-lenis'
import { useState } from 'react'

const Nav = () => {
  const [hide, setHide] = useState(true)

  useLenis(({ scroll, direction }) => {
    if (direction === 1 || direction === undefined || scroll < 50) {
      setHide(true)
    } else if (direction === -1) {
      setHide(false)
    }
  })

  return (
    <HeaderWrapper $hide={hide}>
      <Container>
        <NavWrapper>
          <Logo href="/">Outer Labs</Logo>
          <LinkList>
            <CustomLink target="_self" href="/#projects">
              Projects
            </CustomLink>
            <CustomLink target="_self" href="/about">
              About
            </CustomLink>
            <CustomLink target="_self" href="/contact">
              Contact
            </CustomLink>
          </LinkList>
        </NavWrapper>
      </Container>
    </HeaderWrapper>
  )
}

export default Nav
