'use client'

import styled, { css } from 'styled-components'
import media from './media'

export const Small = css`
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
`
export const SmallText = styled.p`
  ${Small}
  margin: ${({ $nm, $m }) => ($nm ? 0 : $m ? $m : 'unset')};
`
export const Normal = css`
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
`
export const NormalText = styled.p`
  ${Normal}
  margin: ${({ $nm, $m }) => ($nm ? 0 : $m ? $m : 'unset')};
`
export const Medium = css`
  font-size: 24px;
  font-weight: 400;
  line-height: 140%;
`
export const MediumText = styled.p`
  ${Medium}
  margin: ${({ $nm, $m }) => ($nm ? 0 : $m ? $m : 'unset')};
`
export const Huge = css`
  font-size: 3.2vw; // 64px
  font-weight: 400;
  line-height: 140%;

  ${media.desktop`font-size: 4vw;`}
  ${media.thone`
    font-size: 8vw;
    line-height: 150%;
  `}
`
export const HugeText = styled.p`
  ${Huge}
  margin: ${({ $nm, $m }) => ($nm ? 0 : $m ? $m : 'unset')};
`
export const Display = css`
  font-size: 8vw; // 180px
  font-weight: 400;
  line-height: 110%;

  ${media.desktop`font-size: 10vw;`}
  ${media.thone`font-size: 20vw;`}
`
export const DisplayText = styled.h1`
  ${Display}
  margin: ${({ $nm, $m }) => ($nm ? 0 : $m ? $m : 'unset')};
`
