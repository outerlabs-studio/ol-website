'use client'

import { useIsomorphicLayoutEffect } from 'react-use'
import styled, { ThemeProvider } from 'styled-components'
import { Footer, Nav, Scrollbar } from 'components'
import { useIsTouchDevice } from 'hooks'
import { Lenis } from '@studio-freight/react-lenis'
import Tempus from '@studio-freight/tempus'
import { GlobalStyle, Medium, lightTheme } from 'styles'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { animatePageIn } from 'lib'

if (typeof window !== 'undefined') {
  gsap.defaults({ ease: 'none' })
  gsap.registerPlugin(ScrollTrigger)
  // ScrollTrigger.defaults({ markers: true }) //process.env.NODE_ENV === 'development' })

  // merge rafs
  gsap.ticker.lagSmoothing(0)
  gsap.ticker.remove(gsap.updateRoot)
  Tempus?.add((time) => {
    gsap.updateRoot(time / 1000)
  }, 0)

  // reset scroll position
  window.scrollTo(0, 0)
  window.history.scrollRestoration = 'manual'

  console.log('👋 Hello! 👀')
}

const TransitionElement = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 9998;
  position: fixed;
`

export default function Template({ children }) {
  const touchDevice = useIsTouchDevice()

  useIsomorphicLayoutEffect(() => {
    animatePageIn()
  }, [])

  return (
    <Lenis root>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        {touchDevice ? null : <Scrollbar />}
        <main>
          <TransitionElement id="transition-element" />
          <Nav />
          {children}
          <Footer />
        </main>
      </ThemeProvider>
    </Lenis>
  )
}
