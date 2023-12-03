'use client'

import styled, { css } from 'styled-components'
import media from './media'

export const Grid = css`
  display: grid;
  position: relative;
  grid-gap: 2vw;
  grid-template-columns: 21% 30.7% 1fr auto;

  ${media.thone`
    grid-gap: 2rem;
    grid-template-columns: auto 1fr 1fr auto;
  `}
`
export const GridWrapper = styled.div`
  ${Grid}
`
