'use client'

import { Lenis } from '@studio-freight/react-lenis'
import Tempus from '@studio-freight/tempus'
import { Footer, Nav, Scrollbar } from 'components'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, lightTheme } from 'styles'
import { useIsomorphicLayoutEffect } from 'react-use'
import { useRef } from 'react'

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

export function Layout({

  children,
}) {
  const mainTarget = useRef()

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

        <Scrollbar />
        <main ref={mainTarget}>
          <Nav />
          {children}
          <Footer />
        </main>
      </ThemeProvider>
    </Lenis>
  )
}
