import React from "react"
import styled from "styled-components"
import SocialMedia from "../SocialMedia"

const Info = () => (
  <AboutDescription>
    <AboutLabel>About</AboutLabel>

    <Name>Hi! I'm Mohamed Mouhsni</Name>
    <Description>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </Description>
    <SocialMedia />
    <ContactMe>Contact me here!</ContactMe>
    <p>
      Email: <Link href="mailto:m.mouhsni@gmail.com">m.mouhsni@gmail.com</Link>
    </p>
    <p>
      Phone: <Link href="tel:+212606196434">+212 606 196 434</Link>
    </p>
  </AboutDescription>
)

export default Info

const AboutDescription = styled.div`
  position: relative;
  width: 55%;
`

const Name = styled.h2`
  font-size: 30px;
  line-height: 100%;
  font-weight: 300;
  margin-bottom: 60px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.white};
`

const Description = styled.p`
  margin-bottom: 3.5em;
`
const ContactMe = styled.h3`
  margin-bottom: 1em;
  font-weight: 400;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
`

const Link = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
`

const AboutLabel = styled.h1`
  font-size: 185px;
  line-height: 100%;
  position: absolute;
  top: -95px;
  left: -90px;
  font-weight: 700 !important;
  color: rgba(255, 255, 255, 0.08);
  text-transform: uppercase;
`
