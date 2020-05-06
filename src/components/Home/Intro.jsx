import React from "react"
import styled from "styled-components"
import { LightTitle, GrayTitle } from "../styles/theme"
import { FramerAnimator, variants2 } from "../../shared/Animations"

const Intro = () => (
  <IntroContainer>
    <div>
      <FramerAnimator>
        <GrayTitle align="center">Hello! I'm</GrayTitle>
      </FramerAnimator>
      <FramerAnimator variants={variants2}>
        <LightTitle align="center" primary>
          Mohamed Mouhsni
        </LightTitle>
      </FramerAnimator>
    </div>
  </IntroContainer>
)

export default Intro

const IntroContainer = styled.div`
  margin-bottom: 8em;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 550px;
  height: calc(100vh - 200px);
  text-align: center;
  ${({ theme }) => theme.breakpoints.tablet} {
    min-height: auto;
  }
`
