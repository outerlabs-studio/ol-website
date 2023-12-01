'use client'

import { Suspense } from 'react'

function Splash({ children }) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
}

export default Splash
