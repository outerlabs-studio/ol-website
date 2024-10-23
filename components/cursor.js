'use client'

import { useIsTouchDevice } from 'hooks'
import { useEffect, useRef } from 'react'
import { Z_INDEX } from 'styles'
import WebGLFluidEnhanced from 'webgl-fluid-enhanced'

const Cursor = () => {
  const canvasRef = useRef(null)
  const touchDevice = useIsTouchDevice()

  useEffect(() => {
    if (touchDevice) return null

    const simulation = new WebGLFluidEnhanced(canvasRef.current)
    simulation.setConfig({
      brightness: 0.3,
      backgroundColor: '#141714',
      colorPalette: ['#212521'],
      inverted: true,
      pressure: 0.2,
      sunrays: false,
      splatForce: 1500,
      densityDissipation: 3,
      curl: 0,
    })

    simulation.start()

    return () => {
      simulation.stop()
    }
  }, [touchDevice])

  if (touchDevice) return null

  return (
    <div
      ref={canvasRef}
      className="cursor"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'all',
        zIndex: Z_INDEX.canvas,
      }}
    />
  )
}

export default Cursor
