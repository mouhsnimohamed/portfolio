import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { FramerAnimator, variants2 } from "../../shared/Animations"
import { GrayTitle, LightTitle } from "../styles/theme"
import ProjectItem from "./projectItem"

const Projects = ({ limit = 100 }) => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query ProjectsQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        limit: 100
      ) {
        edges {
          node {
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              name
              title
              description
              featuredImage {
                childImageSharp {
                  fluid(maxWidth: 1300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <ProjectsWrapper>
      <FramerAnimator>
        <GrayTitle>Projects</GrayTitle>
      </FramerAnimator>
      <FramerAnimator variants={variants2}>
        <LightTitle>Checkout a few of my works</LightTitle>
      </FramerAnimator>

      {edges.map(({ node: { frontmatter } }, index) => (
        <ProjectItem
          isOdd={!!(index % 2)}
          key={frontmatter.name}
          title={frontmatter.title}
          description={frontmatter.description}
          image={frontmatter.featuredImage}
        />
      ))}
    </ProjectsWrapper>
  )
}

export default Projects

const ProjectsWrapper = styled.div`
  padding: 8em 0;
  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 6em 0 0;
  }
`
