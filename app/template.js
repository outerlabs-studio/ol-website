'use client'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle, lightTheme } from 'styles'
import {
  Footer,
  LenisWrapper,
  Nav,
  Scrollbar,
  TransitionElement,
} from 'components'
import { useIsTouchDevice } from 'hooks'
import { useEffect, useRef, useState } from 'react'
import { animatePageIn } from 'lib'
import { usePathname } from 'next/navigation'

export default function Template({ children }) {
  const touchDevice = useIsTouchDevice()
  const pathname = usePathname()
  const isFirstLoad = useRef(true) // To track the initial load
  const [prevPath, setPrevPath] = useState(null) // To track the previous path

  useEffect(() => {
    if (isFirstLoad.current) {
      // On first render, we skip the animation and set the ref to false
      isFirstLoad.current = false
    } else if (prevPath !== pathname) {
      // If the pathname changes and it's not the first load, trigger the animation
      animatePageIn()
    }
    // Update the previous path to current pathname
    setPrevPath(pathname)
  }, [pathname, prevPath])

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <LenisWrapper>
        {touchDevice ? null : <Scrollbar />}
        <Nav />
        <main>
          {isFirstLoad ? null : <TransitionElement id="transition-element" />}
          {children}
          <Footer />
        </main>
      </LenisWrapper>
    </ThemeProvider>
  )
}
