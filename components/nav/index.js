'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { useIsomorphicLayoutEffect } from 'react-use'
import { useLenis } from '@studio-freight/react-lenis'
import CustomLink from 'components/link'
import { Container } from 'styles'
import { HeaderWrapper, LinkList, Logo, NavWrapper } from './styles'
import gsap from 'gsap'
import { animatePageOut } from 'lib'

const Nav = () => {
  const [hide, setHide] = useState(true)
  const path = usePathname()
  const router = useRouter()
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
          <Logo
            role="link"
            onClick={() => {
              if (path === '/') lenis.scrollTo(0)
              else animatePageOut('/', router)
            }}
          >
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
                className="reveal-nav-1"
                role="link"
                onClick={() => {
                  if (path === '/') lenis.scrollTo('#projects', { offset: 70 })
                  else animatePageOut('/#projects', router)
                }}
              >
                Projects
              </CustomLink>
            </div>
            <div className="overflow">
              <CustomLink href="/about" className="reveal-nav-1">
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
