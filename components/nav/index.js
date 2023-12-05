'use client'

import { Container } from 'styles'
import { HeaderWrapper, LinkList, Logo, NavWrapper } from './styles'
import CustomLink from 'components/link'
import { useLenis } from '@studio-freight/react-lenis'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { useIsomorphicLayoutEffect } from 'react-use'
import gsap from 'gsap'

const Nav = () => {
  const [hide, setHide] = useState(true)
  const path = usePathname()
  const lenis = useLenis()

  useLenis(({ scroll, direction }) => {
    if (path === '/' && scroll < 50) {
      setHide(true)
    } else {
      setHide(false)
    }
  })

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline()

      tl.from(gsap.utils.toArray('.reveal-nav-1'), {
        yPercent: 100,
        duration: 2,
        stagger: 0.1,
        ease: 'power3.inOut',
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <HeaderWrapper $hide={hide}>
      <Container>
        <NavWrapper>
          <Logo href="/">
            <div className="overflow">
              <div className="reveal-nav-1">Outer&nbsp;</div>
            </div>
            <div className="overflow">
              <div className="reveal-nav-1">Labs</div>
            </div>
          </Logo>
          <LinkList>
            <div className="overflow">
              <CustomLink
                target="_self"
                href="/#projects"
                className="reveal-nav-1"
                onClick={() => {
                  lenis.scrollTo('#projects', { offset: 70 })
                }}
              >
                Projects
              </CustomLink>
            </div>
            <div className="overflow">
              <CustomLink target="_self" href="/about" className="reveal-nav-1">
                About
              </CustomLink>
            </div>
            <div className="overflow">
              <CustomLink
                target="_self"
                href="/contact"
                className="reveal-nav-1"
              >
                Contact
              </CustomLink>
            </div>
          </LinkList>
        </NavWrapper>
      </Container>
    </HeaderWrapper>
  )
}

export default Nav
