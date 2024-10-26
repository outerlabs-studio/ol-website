'use client'

import styled from 'styled-components'
import { Container, media, SectionWrapper, Z_INDEX } from 'styles'

export const ArticleTextWrapper = styled(SectionWrapper)`
  z-index: ${Z_INDEX.article};
  padding-bottom: 10vw;

  ${media.thone`padding-bottom: 10rem;`}

  div {
    display: flex;
    flex-direction: column;
    gap: 2vw;

    ${media.thone`gap: 2rem;`}
  }
`
export const TextContainer = styled(Container)`
  width: 45%;
  margin: 0 auto;

  ${media.thone`width: 60%;`}
  ${media.tablet`width: 100%;`}
`
