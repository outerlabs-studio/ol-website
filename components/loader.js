'use client'

import { useEffect } from 'react'
import styled from 'styled-components'

const LoadingWrapper = styled.div`
  position: fixed;
  z-index: 9999;
  top: 50%;
  left: 50%;
  background-color: rgb(18, 18, 18);
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`

export default function Loader() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader')
      if (loader) loader.remove()
    }
  }, [])

  return <LoadingWrapper id="globalLoader"></LoadingWrapper>
}
