'use client'
import { Lenis } from '@studio-freight/react-lenis'
import Tempus from '@studio-freight/tempus'
import { Footer, Scrollbar } from 'components'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, lightTheme } from 'styles'
import { RealViewport } from 'lib'

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

export function Layout({ children }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <RealViewport />
      <Lenis root>
        <div>
          <Scrollbar />
          <main>
            {children}
            <Footer />
          </main>
        </div>
      </Lenis>
    </ThemeProvider>
  )
}
