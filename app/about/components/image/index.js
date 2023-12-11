'use client'

import { CustomImage } from 'components'
import { ImageWrapper, OverlayWrapper } from './styles'
import { Container, SmallText } from 'styles'

const ImageSection = () => {
  return (
    <ImageWrapper>
      <OverlayWrapper>
        <Container>
          <SmallText>RGD Design Thinkers Toronto, Canada 2023</SmallText>
        </Container>
      </OverlayWrapper>
      <CustomImage src="/toronto.webp" alt="The team" speed={2} />
    </ImageWrapper>
  )
}

export default ImageSection
