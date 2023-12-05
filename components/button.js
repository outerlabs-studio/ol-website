'use client'
/**
 * @file CustomButton.js
 * @desc A custom button component with various styles and animations.
 */

import React, { useRef, useCallback } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import styled, { css } from 'styled-components'
import { useIsTouchDevice } from 'hooks'
import { Normal } from 'styles'
import { useIsomorphicLayoutEffect } from 'react-use'

const ButtonWrapper = styled.a`
  display: block;
  position: relative;
  padding: 0.5rem 2rem;
  background-color: ${({ $reverse, theme }) =>
    $reverse ? `rgb(${theme.text})` : `rgb(${theme.accent1})`};
  border-radius: 35px;
  color: ${({ $reverse, theme }) =>
    $reverse ? `rgb(${theme.accent1})` : `rgb(${theme.text})`};
  text-decoration: none;
  height: fit-content;
  width: fit-content;
`

const ButtonStyle = css`
  ${Normal}

  position: relative;
  display: inline-flex;
  flex-direction: column;
  overflow: hidden;

  &:disabled {
    background-color: var(--black);
  }
`

const StyledSpan = styled.span`
  position: absolute;
`
const StyledButton = styled.div`
  ${ButtonStyle};
`

/**
 * CustomButton component.
 * @component
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.reverse - Reverse the colors.
 * @param {string} [props.href] - The URL to navigate when the button is clicked.
 * @param {string} [props.to] - The URL to navigate when the button is clicked (for Next.js Link component).
 * @param {string} [props.target] - The target attribute for the anchor tag.
 * @param {React.ReactNode} props.children - The content of the button.
 * @returns {React.ReactElement} CustomButton component.
 */
const CustomButton = (props) => {
  const { href, target, children, $reverse, onClick, className, ...rest } =
    props
  const isTouchDevice = useIsTouchDevice()
  const movingContainerRef = useRef(null)
  let line1 = useRef(null)
  let line2 = useRef(null)
  const tl = useRef()

  useIsomorphicLayoutEffect(() => {
    tl.current = gsap
      .timeline()
      .set(line2, { yPercent: -100 })
      .to(line1, { yPercent: 100, duration: 0.5, ease: 'power3.inOut' }, 0)
      .to(line2, { yPercent: 0, duration: 0.5, ease: 'power3.inOut' }, 0)
  }, [])

  const handleMouseMove = useCallback(
    (e) => {
      if (isTouchDevice) return
      const bounds = movingContainerRef.current.getBoundingClientRect()

      gsap.to(movingContainerRef.current, {
        x: (e.clientX - bounds.left - 30) / 4,
        y:
          (e.clientY - bounds.top - movingContainerRef.current.clientHeight) /
          4,
        scale: 1.1,
        duration: 1,
        ease: 'expo.out',
      })
    },
    [isTouchDevice],
  )

  const handleMouseEnter = useCallback(() => {
    tl.current.reverse()
  })

  const handleMouseExit = useCallback(() => {
    tl.current.play()

    gsap.to(movingContainerRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 1,
      ease: 'expo.out',
    })
  }, [])

  return (
    <Link
      href={href}
      target={target || '_blank'}
      rel={!target ? 'noopener noreferrer' : undefined}
      passHref
      legacyBehavior
      {...rest}
    >
      <ButtonWrapper
        ref={movingContainerRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseExit}
        onClick={onClick}
        $reverse={$reverse}
        className={className}
      >
        <StyledButton>
          <div ref={(el) => (line1 = el)}>{children}</div>
          <StyledSpan ref={(el) => (line2 = el)}>{children}</StyledSpan>
        </StyledButton>
      </ButtonWrapper>
    </Link>
  )
}

export default CustomButton
