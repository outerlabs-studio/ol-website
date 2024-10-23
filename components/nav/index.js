'use client'

import { useRef, useState } from 'react'
import {
  Button,
  MobileNavRow,
  NavLinkWrapper,
  NavButtonWrapper,
  NormalLink,
  FixedHeader,
  Logo,
} from './styles'
import { breakpoints, NormalText } from 'styles'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useIsTouchDevice } from 'hooks'
import { useWindowSize } from 'react-use'
import Menu from './menu'
import { animatePageOut } from 'lib'
import { usePathname, useRouter } from 'next/navigation'
import { useLenis } from 'lenis/react'

const LOGO_NAME = 'Outer Labs'
const LINKS = [
  { text: 'Work', href: '/' },
  { text: 'Studio', href: '/' },
  { text: 'Services', href: '/' },
  { text: 'Contact', href: '/' },
]

const Nav = () => {
  const router = useRouter()
  const path = usePathname()
  const lenis = useLenis()

  const container = useRef()
  const innerMenuText = useRef()
  const navLinkList = useRef()
  const navLink = useRef([])
  const logoRef = useRef()
  const { contextSafe } = useGSAP({ scope: container })
  const touchDevice = useIsTouchDevice()
  const { width } = useWindowSize()
  const [menuOpen, setMenuOpen] = useState(false)
  const isSmallScreen = width < breakpoints.tablet

  useGSAP(() => {
    let tl = gsap.timeline()

    tl.set(logoRef.current, { autoAlpha: 1 }).from(
      gsap.utils.toArray('.reveal-nav-1'),
      {
        yPercent: 100,
        duration: 1.5,
        stagger: 0.02,
        ease: 'power3.inOut',
      },
    )
  })

  const onNavLinkHover = contextSafe((index) => {
    if (touchDevice || isSmallScreen) return
    navLink.current.forEach((link, i) => {
      gsap.to(link, { opacity: i === index ? 1 : 0.2, duration: 0.3 })
    })
  })

  const onNavLinkHoverOut = contextSafe(() => {
    if (touchDevice || isSmallScreen) return
    gsap.to(navLink.current, { opacity: 1, duration: 0.3 })
  })

  const onHoverNav = contextSafe(() => {
    if (touchDevice || isSmallScreen) return
    const tl = gsap.timeline()

    tl.set(navLink.current, { yPercent: -100 })
      .to(
        innerMenuText.current,
        { yPercent: 100, width: 0, ease: 'back.out', duration: 0.4 },
        0,
      )
      .to(
        navLinkList.current,
        {
          width: 'auto',
          position: 'relative',
          duration: 0.6,
          ease: 'back.out',
        },
        0,
      )
      .to(
        navLink.current,
        { yPercent: 0, duration: 0.4, stagger: 0.05, ease: 'back.out' },
        0.1,
      )
  })

  const onLeaveNav = contextSafe(() => {
    const tl = gsap.timeline()

    tl.to(
      innerMenuText.current,
      { yPercent: 0, width: '100%', ease: 'back.out', duration: 0.4 },
      0.3,
    )
      .to(
        navLinkList.current,
        { width: 0, duration: 0.6, ease: 'power3.inOut' },
        0,
      )
      .to(
        navLink.current,
        { yPercent: -100, duration: 0.4, stagger: 0.05, ease: 'back.out' },
        0,
      )
  })

  return (
    <FixedHeader>
      <Logo
        href="/"
        role="link"
        ref={logoRef}
        onClick={(e) => {
          e.preventDefault()
          if (path === '/') lenis.scrollTo(0)
          else if (path === '/techcodes' || path === '/astro-studios') {
            animatePageOut('/#projects', router, path)
          } else animatePageOut('/', router, path)
        }}
      >
        {LOGO_NAME.split('').map((letter, index) => (
          <div className="overflow" key={index}>
            <div className="reveal-nav-1">
              {letter === ' ' ? '\u00A0' : letter}
            </div>
          </div>
        ))}
      </Logo>

      <MobileNavRow
        touchDevice={touchDevice}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Button menuOpen={menuOpen}>
          <NormalText>Menu</NormalText>
        </Button>
      </MobileNavRow>

      <NavButtonWrapper
        touchDevice={touchDevice}
        ref={container}
        onMouseEnter={() => onHoverNav()}
        onMouseLeave={() => onLeaveNav()}
      >
        <Button>
          <NavLinkWrapper ref={navLinkList}>
            {LINKS.map((item, index) => (
              <span key={index}>
                <div ref={(el) => (navLink.current[index] = el)}>
                  <NormalLink
                    onMouseEnter={() => onNavLinkHover(index)}
                    onMouseLeave={onNavLinkHoverOut}
                    href={item.href}
                  >
                    {item.text}
                  </NormalLink>
                </div>
              </span>
            ))}
          </NavLinkWrapper>
          <span>
            <NormalText ref={innerMenuText}>Menu</NormalText>
          </span>
        </Button>
      </NavButtonWrapper>

      <Menu menuOpen={menuOpen} links={LINKS} />
    </FixedHeader>
  )
}

export default Nav
