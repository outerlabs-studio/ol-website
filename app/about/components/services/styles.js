'use client '

import styled from 'styled-components'
import { Medium, Normal, Z_INDEX, media } from 'styles'

export const ServicesWrapper = styled.section`
  position: relative;
  background-color: ${({ theme }) => `rgb(${theme.body})`};
  color: ${({ theme }) => `rgb(${theme.text})`};
  padding: 10vw 0;
  z-index: ${Z_INDEX.projects};

  ${media.thone`padding: 4rem 0;`}

  .reveal-services-button {
    margin-right: 2rem;

    ${media.desktop`margin-right: 0;`}
    ${media.tablet`
      grid-column: 2 / 4;
      grid-row: 4;
      margin-top: 4rem;
    `}
    ${media.thone`
      grid-column: 1 / 4;
      grid-row: 5;
    `}
    ${media.phablet`
      grid-row: 6;
      margin-top: 1rem;
    `}
  }
`
export const TextWrapper = styled.div`
  grid-column: 2 / span 2;
  max-width: 90%;
  margin-bottom: 6rem;

  ${media.tablet`margin-bottom: 4rem;`}
  ${media.thone`
    grid-column: 1 / 4;
    max-width: 100%;
  `}
  ${media.phablet`margin-bottom: 1rem;`}

  .reveal-services-2 {
    ${Medium}
  }
`
export const ServicesCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  grid-column: 2;

  ${media.thone`grid-column: 1;`}
  ${media.phablet`grid-column: 1 / 4;`}

  &.right {
    grid-column: 3;

    ${media.tablet`grid-column: 3;`}
    ${media.thone`
      grid-column: 2 / 4;
      margin-left: 1rem;
    `}
    ${media.phablet`
      grid-column: 1 / 4;
      margin-left: 0;
    `}
  }

  &.bottom {
    margin-top: -2rem;

    ${media.thone`margin-top: -4rem;`}
    ${media.phablet`
      grid-column: 1 / 4;
      margin-top: 0;
    `}
  }

  .reveal-services-3 {
    ${Normal}
  }
`
