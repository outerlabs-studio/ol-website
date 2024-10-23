'use client'

import { useEffect, useRef } from 'react'
import { ReactLenis } from 'lenis/react'
import gsap from 'gsap'

import 'lenis/dist/lenis.css'

function LenisWrapper({ children }) {
  const lenisRef = useRef()

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => {
      gsap.ticker.remove(update)
    }
  })

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>
      {children}
    </ReactLenis>
  )
}

export default LenisWrapper
