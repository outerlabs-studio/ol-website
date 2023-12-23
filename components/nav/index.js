'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useIsomorphicLayoutEffect } from 'react-use'
import { useLenis } from '@studio-freight/react-lenis'
import CustomLink from 'components/link'
import { Container } from 'styles'
import { HeaderWrapper, LinkList, Logo, NavWrapper } from './styles'
import gsap from 'gsap'
import { animatePageOut } from 'lib'

const Nav = () => {
  const router = useRouter()
  const path = usePathname()
  const lenis = useLenis()
  const logoName = 'Outer Labs'

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline()

      tl.from(gsap.utils.toArray('.reveal-nav-1'), {
        yPercent: 100,
        duration: 1.5,
        stagger: 0.02,
        ease: 'power3.inOut',
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <HeaderWrapper>
      <Container>
        <NavWrapper>
          <Logo
            href="/"
            role="link"
            onClick={(e) => {
              e.preventDefault()
              if (path === '/') lenis.scrollTo(0)
              else if (path === '/techcodes' || path === '/astro-studios') {
                animatePageOut('/#projects', router, path)
              } else animatePageOut('/', router, path)
            }}
          >
            {logoName.split('').map((letter, index) => (
              <div className="overflow" key={index}>
                <div className="reveal-nav-1">
                  {letter === ' ' ? '\u00A0' : letter}
                </div>
              </div>
            ))}
          </Logo>
          <LinkList>
            <div className="overflow">
              <CustomLink
                href="/#projects"
                className="reveal-nav-1"
                role="link"
                onClick={(e) => {
                  e.preventDefault()
                  if (path === '/') lenis.scrollTo('#projects', { offset: 70 })
                  else animatePageOut('/#projects', router, path)
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
