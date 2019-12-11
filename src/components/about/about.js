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
  display: flex;
  justify-content: space-between;
`
