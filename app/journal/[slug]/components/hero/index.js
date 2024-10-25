'use client'

import { Container, HugeText, NormalText } from 'styles'
import {
  ContentWrapper,
  HeroWrapper,
  ImageWrapper,
  SmallInfoWrapper,
  TitleWrapper,
} from './styles'
import { CustomImage } from 'components'
import { formatDate } from 'lib'

const Hero = ({ data }) => {
  return (
    <HeroWrapper>
      <Container>
        <ContentWrapper>
          <TitleWrapper>
            {data?.title?.split(' ').map((word, index) => (
              <div className="overflow" key={index}>
                <HugeText>{word}&nbsp;</HugeText>
              </div>
            ))}
          </TitleWrapper>
          <SmallInfoWrapper>
            <NormalText>
              <span>Written by</span> {data?.author}
            </NormalText>
            <NormalText>|</NormalText>
            <NormalText>{formatDate(data?.date)}</NormalText>
            <NormalText>|</NormalText>
            <NormalText>{data?.read_time} min read</NormalText>
          </SmallInfoWrapper>
          <ImageWrapper>
            <CustomImage src={data?.hero_image?.url} />
          </ImageWrapper>
        </ContentWrapper>
      </Container>
    </HeroWrapper>
  )
}

export default Hero
