'use client'

import { CustomImage } from 'components'
import { ImageWrapper, OverlayWrapper } from './styles'
import { Container, SmallText } from 'styles'

const ImageSection = () => {
  return (
    <ImageWrapper>
      <OverlayWrapper>
        <Container>
          <SmallText>Chris Do is not affiliated with Outer Labs</SmallText>
        </Container>
      </OverlayWrapper>
      <CustomImage src="/RGD.JPG" alt="The team" speed={1} />
    </ImageWrapper>
  )
}

export default ImageSection
