'use client'

import { default as styled, css } from 'styled-components'
import media from './media'

const PADDING_VALUES = {
  desktop: '1.5vw',
  mobile: '1rem',
}

export const ContainerPaddingRight = css`
  padding-right: ${PADDING_VALUES.desktop};
  ${media.thone`padding-right: ${PADDING_VALUES.mobile};`}
`
export const ContainerPaddingLeft = css`
  padding-left: ${PADDING_VALUES.desktop};
  ${media.thone`padding-left: ${PADDING_VALUES.mobile};`}
`
export const ContainerPaddingTop = css`
  padding-top: ${PADDING_VALUES.desktop};
  ${media.thone`padding-top: ${PADDING_VALUES.mobile};`}
`
export const ContainerPaddingBottom = css`
  padding-bottom: ${PADDING_VALUES.desktop};
  ${media.thone`padding-bottom: ${PADDING_VALUES.mobile};`}
`

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  ${ContainerPaddingRight}
  ${ContainerPaddingLeft}
`

export default Container
