'use client'

import styled, { css } from 'styled-components'

export const Grid = css`
  display: grid;
  position: relative;
  grid-gap: 2vw;
  grid-template-columns: 21% 30.7% 1fr auto;
`
export const GridWrapper = styled.div`
  ${Grid}
`
