'use client'

import { ImageWrapper, ImagesSection } from './styles'
import { Container } from 'styles'
import Image from 'next/image'

const Images = ({ data }) => {
  return (
    <ImagesSection>
      <Container>
        {data?.images?.map((image, index) => (
          <ImageWrapper key={index}>
            <Image src={image.url} alt={image.alternativeText} fill />
          </ImageWrapper>
        ))}
      </Container>
    </ImagesSection>
  )
}

export default Images
