import React from "react"
import styled from "styled-components"
import { LightTitle, GrayTitle } from "../styles/theme"
import { FramerAnimator, variants2 } from "../../shared/Animations"

const Intro = () => (
  <IntroContainer>
    <div>
      <FramerAnimator>
        <GrayTitle>Hello! I'm</GrayTitle>
      </FramerAnimator>
      <FramerAnimator variants={variants2}>
        <LightTitle>Mohamed Mouhsni</LightTitle>
      </FramerAnimator>
    </div>
  </IntroContainer>
)

export default Intro

const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 550px;
  height: calc(100vh - 160px);
  text-align: center;
`
