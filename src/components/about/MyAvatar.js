import React from "react"
import styled from "styled-components"
import Avatar from "avataaars"

const MyAvatar = () => (
  <AvatarContainer>
    <Avatar
      avatarStyle="Transparent"
      topType="ShortHairShortCurly"
      accessoriesType="Prescription01"
      hairColor="BrownDark"
      facialHairType="BeardLight"
      facialHairColor="Black"
      clotheType="Hoodie"
      clotheColor="Gray01"
      eyeType="Default"
      eyebrowType="Default"
      mouthType="Default"
      skinColor="Light"
    />
  </AvatarContainer>
)

export default MyAvatar

const AvatarContainer = styled.div`
  width: 40%;
  svg {
    display: block;
    width: 100%;
  }
`
