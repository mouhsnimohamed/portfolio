import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const ProjectItem = ({ title, description, image, isOdd, link }) => {
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
        {link && (
          <Link target="_blank" rel="noopener noreferrer" href={link}>
            {link}
          </Link>
        )}
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
  ${({ theme }) => theme.breakpoints.phone} {
    flex-wrap: wrap;
    margin: 5em 0;
  }
`
const Text = styled.div`
  width: 55%;
  padding: 5%;
  ${({ theme }) => theme.breakpoints.tablet} {
    width: 100%;
    padding: 0;
  }
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
  ${({ theme }) => theme.breakpoints.tablet} {
    width: 100%;
    padding: 0 3% 25px;
  }
`

const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
`
