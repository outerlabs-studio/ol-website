'use client'

import React, { useCallback, useRef } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { gsap } from 'gsap'
import { useIsomorphicLayoutEffect } from 'react-use'
import { Normal } from 'styles'

const StyledLink = styled.a`
  ${Normal}
  display: inline-flex;
  flex-direction: column;
  text-decoration: none;
  color: ${({ $reverse, theme }) =>
    $reverse ? `rgb(${theme.accent1})` : `rgb(${theme.text})`};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: fit-content;
`

const StyledSpan = styled.span`
  position: absolute;
`

const CustomLink = (props) => {
  const line1 = useRef(null)
  const line2 = useRef(null)
  const tl = useRef()
  const {
    href,
    to,
    target = '_blank',
    children,
    $reverse = false,
    onClick,
    ...rest
  } = props
  
  useIsomorphicLayoutEffect(() => {
    tl.current = gsap
      .timeline({ paused: true })
      .set(line2.current, { yPercent: 100 })
      .to(
        line1.current,
        { yPercent: -100, duration: 0.5, ease: 'power3.inOut' },
        0,
      )
      .to(
        line2.current,
        { yPercent: 0, duration: 0.5, ease: 'power3.inOut' },
        0,
      )
  }, [])

  const handleMouseEnter = useCallback(() => tl.current.play(), [tl])
  const handleMouseLeave = useCallback(() => tl.current.reverse(), [tl])

  const linkAttributes = {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    $reverse,
    onClick,
    ...rest,
  }

  if (href) {
    return (
      <Link
        href={href}
        target={target || '_blank'}
        rel={!target ? 'noopener noreferrer' : undefined}
        passHref
        legacyBehavior
      >
        <StyledLink {...linkAttributes}>
          <div ref={line1}>{children}</div>
          <StyledSpan ref={line2}>{children}</StyledSpan>
        </StyledLink>
      </Link>
    )
  }

  return (
    <StyledLink
      href={to}
      target={target || '_blank'}
      rel={!target ? 'noopener noreferrer' : undefined}
      {...linkAttributes}
    >
      <div ref={line1}>{children}</div>
      <StyledSpan ref={line2}>{children}</StyledSpan>
    </StyledLink>
  )
}

export default CustomLink
