'use client'

import { useEffect, useRef } from 'react'
import { MediumText } from 'styles'
import { CustomContainer, HeroWrapper, LabelBlob, TextWrapper } from './styles'
import { Marquee } from 'components'

const Hero = () => {
  const boxRef = useRef()

  return (
    <HeroWrapper>
      <CustomContainer>
        <LabelBlob className="blob-1">Apps</LabelBlob>
        <LabelBlob className="blob-2">Design</LabelBlob>
        <LabelBlob className="blob-3">Cloud infrastructure</LabelBlob>
        <LabelBlob className="blob-4">Branding</LabelBlob>
        <LabelBlob className="blob-5">Animation</LabelBlob>
        <LabelBlob className="blob-6">SEO</LabelBlob>

        <LabelBlob className="blob-7">Social media</LabelBlob>
        <LabelBlob className="blob-8">Websites</LabelBlob>
        <LabelBlob className="blob-9">UI</LabelBlob>
        <LabelBlob className="blob-10">UX</LabelBlob>
        <LabelBlob className="blob-11">Developing</LabelBlob>
        <LabelBlob className="blob-12">Messaging</LabelBlob>

        <LabelBlob className="blob-13">Motion</LabelBlob>
        <LabelBlob className="blob-14">Print</LabelBlob>
        <LabelBlob className="blob-15">Wireframing</LabelBlob>
        <LabelBlob className="blob-16">Ecommerce</LabelBlob>
        <LabelBlob className="blob-17">Discovery</LabelBlob>
        <LabelBlob className="blob-18">Print</LabelBlob>

        <TextWrapper>
          <MediumText>We get shit done.</MediumText>
        </TextWrapper>
      </CustomContainer>
    </HeroWrapper>
  )
}

export default Hero
