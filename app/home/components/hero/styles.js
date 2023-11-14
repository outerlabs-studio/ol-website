'use client'

import styled from 'styled-components'
import { GridWrapper, Z_INDEX, wtskrappa } from 'styles'

export const HeroWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100%;
  z-index: ${Z_INDEX.hero};
`
export const TitleWrapper = styled.div`
  /* position: absolute; */
  width: 100%;
  overflow: hidden;
  /* bottom: 5%; */
  text-align: center;
`
export const SectionTitle = styled.h1`
  margin: 0 0 -10vw;
  font-family: ${wtskrappa.style.fontFamily};
  font-size: 41.5vw;
  z-index: 1;

  div {
    display: inline-flex;
  }
`
export const CustomGridWrapper = styled(GridWrapper)`
  padding-top: 15vmin;
`
export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 40%;
  left: 30%;
  width: fit-content;
  z-index: 2;
`
export const LinkWrapper = styled.div`
  grid-column: 1 / span 2;
  display: flex;
  position: relative;
  gap: 2rem;
`
export const DescriptionWrapper = styled.div`
  grid-column: 3;
  max-width: 20rem;
`
