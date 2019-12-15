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
  img {
    display: block;
    width: 100%;
  }
`
