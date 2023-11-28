'use client '

import styled from 'styled-components'
import { Medium, Normal, Z_INDEX } from 'styles'

export const ServicesWrapper = styled.section`
  position: relative;
  background-color: ${({ theme }) => `rgb(${theme.accent1})`};
  color: ${({ theme }) => `rgb(${theme.text})`};
  padding: 10vw 0;
  z-index: ${Z_INDEX.projects};

  a {
    margin-right: 2rem;
  }
`
export const TextWrapper = styled.div`
  grid-column: 2 / span 2;
  max-width: 90%;
  margin-bottom: 6rem;

  .reveal-services-2 {
    ${Medium}
  }
`
export const ServicesCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  grid-column: 2;

  &.right {
    grid-column: 3;
  }

  &.bottom {
    margin-top: -2rem;
  }

  .reveal-services-3 {
    ${Normal}
  }
`
