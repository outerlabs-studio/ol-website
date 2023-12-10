'use client'

import { useRef } from 'react'
import { useIsomorphicLayoutEffect } from 'react-use'
import styled, { ThemeProvider } from 'styled-components'
import { Footer, Nav, Scrollbar } from 'components'
import { useIsTouchDevice } from 'hooks'
import { Lenis } from '@studio-freight/react-lenis'
import Tempus from '@studio-freight/tempus'
import { GlobalStyle, lightTheme } from 'styles'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

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
  z-index: 9999;
  position: fixed;
`

export default function Template({ children }) {
  const mainTarget = useRef()
  const touchDevice = useIsTouchDevice()

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(mainTarget.current, { opacity: 1 })
    })

    return () => ctx.revert()
  }, [])

  return (
    <Lenis root>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        {touchDevice ? null : <Scrollbar />}
        <main ref={mainTarget}>
          {/* <TransitionElement id="transition-element" /> */}
          <Nav />
          {children}
          <Footer />
        </main>
      </ThemeProvider>
    </Lenis>
  )
}
