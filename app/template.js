'use client'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle, lightTheme } from 'styles'
import { Footer, LenisWrapper, Nav, Scrollbar, Transition } from 'components'
import { useIsTouchDevice } from 'hooks'
import { useEffect } from 'react'
import { animatePageIn } from 'lib'
import { usePathname } from 'next/navigation'

export default function Template({ children }) {
  const touchDevice = useIsTouchDevice()
  const pathname = usePathname()

  useEffect(() => {
    animatePageIn()
  }, [pathname])

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <LenisWrapper>
        {touchDevice ? null : <Scrollbar />}
        <Nav />
        <main>
          <Transition />
          {children}
          <Footer />
        </main>
      </LenisWrapper>
    </ThemeProvider>
  )
}
