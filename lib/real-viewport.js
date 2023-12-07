'use client'

import { useEffect, useState } from 'react'

function RealViewport() {
  const [windowWidth, setWindowWidth] = useState()

  useEffect(() => {
    function onWindowResize() {
      // Update the height only if the width changes
      if (window.innerWidth !== windowWidth) {
        setWindowWidth(window.innerWidth)
        document.documentElement.style.setProperty(
          '--vh',
          window.innerHeight * 0.01 + 'px',
        )
      }
    }

    window.addEventListener('resize', onWindowResize, false)
    onWindowResize()

    return () => {
      window.removeEventListener('resize', onWindowResize, false)
    }
  }, [])

  return null
}

export default RealViewport
