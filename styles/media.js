'use client'

import { css } from 'styled-components'

export const breakpoints = {
  giant: 1440,
  bigDesktop: 1200,
  desktop: 1000,
  tablet: 820,
  thone: 600,
  phablet: 500,
  phone: 440,
  tiny: 330,
}

// iterate through the sizes and create a media template
export const media = Object.keys(breakpoints).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = breakpoints[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export default media
