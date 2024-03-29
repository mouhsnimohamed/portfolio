import React from "react"
import styled from "styled-components"
import SocialMedia from "../SocialMedia"

const Info = () => (
  <AboutDescription>
    <AboutLabel>About</AboutLabel>
    <Name>Hi! I'm Mohamed Mouhsni</Name>
    <Description>
      A self-taught WEB Developer, based in Casablanca, Morocco.
      <br />
      <br />
      Outside of work I like to work on full stack web applications with a
      combination of React(React Native), Gatsby, NodeJS, Laravel and real-time
      services like Firebase and Netlify. This allows me play around with new
      technology and gives me a better understanding of the digital industry as
      a whole.
      <br />
      <br />
      Ready to start working on your Web or Mobile projects, If that sounds like
      someone you’d like to collaborate with.
    </Description>
    <SocialMedia color="primary" justifyContent="flex-start" />
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
  ${({ theme }) => theme.breakpoints.tablet} {
    width: 100%;
  }
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
  ${({ theme }) => theme.breakpoints.tablet} {
    top: -70px;
    left: -15px;
  }

  ${({ theme }) => theme.breakpoints.phone} {
    top: -20px;
    font-size: 100px;
  }
`
