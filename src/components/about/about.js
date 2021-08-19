import React from "react"
import styled from "styled-components"
import MyAvatar from "./MyAvatar"
import Info from "./Info"

const AboutMe = () => (
  <AboutContainer>
    <MyAvatar />
    <Info />
  </AboutContainer>
)

export default AboutMe

const AboutContainer = styled.div`
  margin-top: 8em;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  ${({ theme }) => theme.breakpoints.tablet} {
    flex-wrap: wrap;
    margin-top: 3em;
  }
`
