import React from "react"
import { graphql } from "gatsby"

import Layout from "../layout"
import styled from "styled-components"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <PostHolder>
        <h1>{frontmatter.title}</h1>
        <Date>Published on {frontmatter.date}</Date>
        <Description>{frontmatter.description}</Description>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </PostHolder>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`

const PostHolder = styled.div`
  width: 80%;
  margin: 80px auto;
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: white;
  }

  img {
    margin: 0 auto 30px !important;
    display: block;
    max-width: 100%;
  }
  a {
    color: ${({ theme }) => theme.colors.primary};
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.phone} {
    h1,
    h2,
    h3,
    h4,
    h5 {
      line-height: 120%;
      margin: 1rem 0;
    }
    h1 {
      font-size: 1.6rem;
    }
    h2 {
      font-size: 1.4rem;
    }
    h3 {
      font-size: 1.2rem;
    }
    h4 {
      font-size: 1rem;
    }
  }
`

const Date = styled.div`
  font-size: 15px;
  margin: 5px 0 15px 0;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.text};
`

const Description = styled.p`
  margin: 50px 0;
  font-size: 2rem;
  text-align: justify;
  line-height: 1.25em;
  font-weight: 600;

  ${({ theme }) => theme.breakpoints.phone} {
    text-align: left;
    font-size: 1.3rem;
  }
`
