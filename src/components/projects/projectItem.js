import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const ProjectItem = ({ title, description, image, isOdd }) => {
  const formattedDescription = description
    .split(`\n\n`)
    .map(paragraph => `<p>${paragraph.replace(/\n/g, `<br>`)}</p>`)
    .join(``)

  return (
    <Item isOdd={isOdd}>
      <Image>
        <Img fluid={image.childImageSharp.fluid} />
      </Image>
      <Text>
        <Title>{title}</Title>
        <div dangerouslySetInnerHTML={{ __html: formattedDescription }} />
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
  width: 55%;
  padding: 5%;
`
const Title = styled.h2`
  color: white;
  font-size: 30px;
  margin-bottom: 30px;
  line-height: 150%;
`

const Image = styled.div`
  width: 45%;
  padding: 0 2%;
`
