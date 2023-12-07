'use client'

import { useState, useEffect } from 'react'

export default function RealViewport() {
  const [height, setHeight] = useState(measureHeight())

  const wasRenderedOnClientAtLeastOnce = useWasRenderedOnClientAtLeastOnce()

  useEffect(() => {
    if (!wasRenderedOnClientAtLeastOnce) return

    function setMeasuredHeight() {
      const measuredHeight = measureHeight()
      setHeight(measuredHeight)
    }

    window.addEventListener('resize', setMeasuredHeight)
    return () => window.removeEventListener('resize', setMeasuredHeight)
  }, [wasRenderedOnClientAtLeastOnce])

  wasRenderedOnClientAtLeastOnce
    ? document.documentElement.style.setProperty('--vh', height + 'px')
    : null

  return null
}

export function measureHeight() {
  if (!isClient()) return null
  return window.innerHeight
}

function useWasRenderedOnClientAtLeastOnce() {
  const [wasRenderedOnClientAtLeastOnce, setWasRenderedOnClientAtLeastOnce] =
    useState(false)

  useEffect(() => {
    if (isClient()) {
      setWasRenderedOnClientAtLeastOnce(true)
    }
  }, [])
  return wasRenderedOnClientAtLeastOnce
}

function isClient() {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}
