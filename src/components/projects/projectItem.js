import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const ProjectItem = ({ title, description, image, isOdd }) => {
  return (
    <Item isOdd={isOdd}>
      <Image>
        <Img fluid={image.childImageSharp.fluid} />
      </Image>
      <Text>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Text>
    </Item>
  )
}

export default ProjectItem

const Item = styled.div`
  margin: 8em 0;
  display: flex;
  align-items: center;
  flex-direction: ${props => (props.isOdd ? "row-reverse" : "row")};
`

const Text = styled.div`
  width: 50%;
  padding: 5%;
`
const Title = styled.h2``
const Description = styled.p``
const Image = styled.div`
  width: 50%;
  padding: 0 3%;
`
