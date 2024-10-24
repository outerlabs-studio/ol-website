'use client'

import { useEffect } from 'react'
import { NormalText } from 'styles'
import {
  ContactWrapper,
  CustomGrid,
  MenuLink,
  MenuLinksWrapper,
  MenuWrapper,
} from './styles'
import { useLenis } from 'lenis/react'
import { usePathname, useRouter } from 'next/navigation'
import { animatePageOut } from 'lib'

const Menu = ({ links, menuOpen, setMenuOpen }) => {
  const lenis = useLenis()
  const router = useRouter()
  const path = usePathname()

  useEffect(() => {
    if (menuOpen) {
      lenis?.stop()
    } else {
      lenis?.start()
    }
  }, [menuOpen])

  return (
    <MenuWrapper menuOpen={menuOpen}>
      <CustomGrid>
        <MenuLinksWrapper>
          {links.map((item, index) => (
            <MenuLink
              key={index}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                if (item.href === '/#projects') {
                  if (path === '/') {
                    lenis.scrollTo('#projects', { offset: 70 })
                    setMenuOpen(false)
                  } else animatePageOut('/#projects', router, path)
                } else {
                  animatePageOut(item.href, router, path)
                }
              }}
            >
              {item.text}
            </MenuLink>
          ))}
        </MenuLinksWrapper>
        <ContactWrapper>
          <NormalText>Get in touch</NormalText>
          <a href="mailto:hello@bust.studio">hello@bust.studio</a>
        </ContactWrapper>
      </CustomGrid>
    </MenuWrapper>
  )
}

export default Menu
