'use client'

import styled from 'styled-components'
import { NormalText } from 'styles'

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: fit-content;
`
const LittleCircle = styled.span`
  height: 10px;
  width: 10px;
  background-color: ${({ $reverse, theme }) =>
    $reverse ? `rgb(${theme.text})` : `rgb(${theme.accent1})`};
  border-radius: 50%;
  display: inline-block;
`

const Label = ({ children, $reverse = false }) => {
  return (
    <LabelWrapper>
      <LittleCircle $reverse={$reverse} />
      <NormalText>{children}</NormalText>
    </LabelWrapper>
  )
}

export default Label
