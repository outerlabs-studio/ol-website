'use client'

import styled from 'styled-components'
import { NormalText, media } from 'styles'

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: fit-content;
`
const LittleCircle = styled.span`
  height: 0.6vw;
  width: 0.6vw;
  background-color: ${({ $reverse, theme }) =>
    $reverse ? `rgb(${theme.text})` : `rgb(${theme.accent1})`};
  border-radius: 50%;
  display: inline-block;

  ${media.desktop`
    width: 10px;
    height: 10px;
  `}
`

const Label = ({ children, className, $reverse = false }) => {
  return (
    <LabelWrapper className={className}>
      <LittleCircle $reverse={$reverse} />
      <NormalText>{children}</NormalText>
    </LabelWrapper>
  )
}

export default Label
