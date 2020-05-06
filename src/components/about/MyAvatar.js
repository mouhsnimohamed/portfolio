import React from "react"
import avatar from "../../images/avatar.svg"
import styled from "styled-components"

const MyAvatar = () => (
  <AvatarContainer>
    <img src={avatar} alt="what do you thing about me!" />
  </AvatarContainer>
)

export default MyAvatar

const AvatarContainer = styled.div`
  width: 36%;
  position: relative;
  z-index: 0;
  ${({ theme }) => theme.breakpoints.tablet} {
    margin: 0 auto 60px;
    width: 50%;
  }
  &:hover:before {
    left: -10px;
    top: 10px;
  }
  img {
    display: block;
    width: 100%;
    position: relative;
    background: ${({ theme }) => theme.colors.primary};
    z-index: 1;
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    top: 20px;
    left: -20px;
    border-width: 2px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.primary};

    ${({ theme }) => theme.breakpoints.tablet} {
      top: -10px !important;
      left: -10px !important;
      width: calc(100% + 20px);
      height: calc(100% + 20px);
    }
  }
`
