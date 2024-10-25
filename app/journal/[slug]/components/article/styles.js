'use client'

import styled from 'styled-components'
import { SectionWrapper, Z_INDEX } from 'styles'

export const ArticleTextWrapper = styled(SectionWrapper)`
  width: 45%;
  margin: 0 auto;
  z-index: ${Z_INDEX.article};
  padding-bottom: 10vw;

  div {
    display: flex;
    flex-direction: column;
    gap: 2vw;
  }
`
