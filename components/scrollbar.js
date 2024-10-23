'use client'

import { useEffect, useRef } from 'react'
import { useRect } from 'hooks'
import { useLenis } from 'lenis/react'
import { mapRange } from 'lib/maths'
import styled from 'styled-components'
import { Z_INDEX } from 'styles'

const ScrollbarWrapper = styled.div`
  position: fixed;
  right: 2vw;
  top: 50%;
  transform: translateY(-50%);
  height: 200px;
  width: 10px;
  z-index: ${Z_INDEX.scrollbar};
  background-color: ${({ theme }) => `rgb(${theme.white})`};
  border-radius: 10px;

  .inner {
    height: 100%;
    position: relative;
  }

  .thumb {
    min-height: 50px;
    width: 10px;
    background-color: ${({ theme }) => `rgb(${theme.black})`};
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    cursor: grab;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

function Scrollbar() {
  const thumbRef = useRef(null)
  const lenis = useLenis()
  const [innerMeasureRef, { height: innerHeight }] = useRect()
  const [thumbMeasureRef, { height: thumbHeight }] = useRect()

  useLenis(
    ({ scroll, limit }) => {
      if (thumbRef.current) {
        const progress = scroll / limit
        thumbRef.current.style.transform = `translate3d(-50%, ${
          progress * (innerHeight - thumbHeight)
        }px, 0)`
      }
    },
    [innerHeight, thumbHeight],
  )

  useEffect(() => {
    let start = null
    let startScroll = null

    function onPointerMove(e) {
      if (start === null || startScroll === null) return
      e.preventDefault()

      const deltaY = e.clientY - start
      const newScroll =
        startScroll +
        mapRange(0, innerHeight - thumbHeight, deltaY, 0, lenis.limit)
      lenis.scrollTo(newScroll, { immediate: true })
    }

    function onPointerDown(e) {
      start = e.clientY
      startScroll = lenis.scroll
      window.addEventListener('pointermove', onPointerMove, false)
      window.addEventListener('pointerup', onPointerUp, false)
    }

    function onPointerUp() {
      start = null
      startScroll = null
      window.removeEventListener('pointermove', onPointerMove, false)
      window.removeEventListener('pointerup', onPointerUp, false)
    }

    if (thumbRef.current) {
      thumbRef.current.addEventListener('pointerdown', onPointerDown, false)
    }

    return () => {
      if (thumbRef.current) {
        thumbRef.current.removeEventListener(
          'pointerdown',
          onPointerDown,
          false,
        )
      }
      window.removeEventListener('pointermove', onPointerMove, false)
      window.removeEventListener('pointerup', onPointerUp, false)
    }
  }, [lenis, innerHeight, thumbHeight])

  return (
    <ScrollbarWrapper>
      <div ref={innerMeasureRef} className="inner">
        <div
          className="thumb"
          ref={(node) => {
            thumbRef.current = node
            thumbMeasureRef(node)
          }}
        />
      </div>
    </ScrollbarWrapper>
  )
}

export default Scrollbar
