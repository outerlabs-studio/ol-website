'use client'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle, lightTheme } from 'styles'
import { Footer, LenisWrapper, Nav, Scrollbar, Transition } from 'components'
import { useIsTouchDevice } from 'hooks'
import { useEffect } from 'react'
import { animatePageIn } from 'lib'

export default function Template({ children }) {
  const touchDevice = useIsTouchDevice()

  useEffect(() => {
    animatePageIn()
  }, [])

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
