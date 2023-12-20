'use client'

import { Container, DisplayText, GridWrapper, MediumText } from 'styles'
import { CustomImage, Label, Marquee } from 'components'
import {
  TeamSection,
  ImageWrapper,
  MarqueeWrapper,
  TeamMemberItem,
  InformationWrapper,
  LabelWrapper,
  CustomGridWrapper,
} from './styles'

const Member = ({ image, name, pos, num, blur }) => {
  return (
    <TeamMemberItem>
      <Container>
        <CustomGridWrapper>
          <ImageWrapper className="image-wrapper">
            <CustomImage
              src={image}
              alt={name}
              sizes={`(min-width: 1020px) 30vw, (min-width: 620px) 52.11vw, calc(100vw - 32px)`}
              blur={blur}
            />
          </ImageWrapper>
          <InformationWrapper>
            <MediumText>{pos}</MediumText>
            <MediumText>{num}/4</MediumText>
          </InformationWrapper>
        </CustomGridWrapper>
      </Container>
      <MarqueeWrapper>
        <Marquee repeat={4} duration={3}>
          <DisplayText $m={'0 6vw 0 0'}>{name}</DisplayText>
        </Marquee>
      </MarqueeWrapper>
    </TeamMemberItem>
  )
}

const Team = () => {
  return (
    <TeamSection>
      <Container>
        <LabelWrapper>
          <Label $reverse>Leadership</Label>
        </LabelWrapper>
      </Container>
      <Member
        name="Kyrylo Orlov"
        image="/kyrylo.webp"
        pos="Founding Director"
        num={1}
        blur={`LIKUZkRj~q%M~qt7xuM{M{j[D%of`}
      />
      <Member
        name="Jonathan Lin"
        image="/jonathan.webp"
        pos="Lead Brand Designer"
        num={2}
        blur={`LAKK==_MD%D%00M{~qay~qWBIUxu`}
      />
      <Member
        name="Ismaeel Akram"
        image="/ismaeel.webp"
        pos="Lead App Developer"
        num={3}
        blur={`LWIF0qWB?vxu~qWBt7of4nj[IUWB`}
      />
      <Member
        name="Chanul Dandeniya"
        image="/chanul.webp"
        pos="Lead strategist"
        num={4}
        blur={`LaEfTiofayxu~qRjM{of%MWBayof`}
      />
    </TeamSection>
  )
}
export default Team
