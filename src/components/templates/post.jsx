import React from "react"
import { graphql } from "gatsby"

import Layout from "../layout"
import styled from "styled-components"

export default function Template({ data }) {
  const { markdownRemark = {} } = data
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
  query ($path: String!) {
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
  width: 90%;
  margin: 80px auto;
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: white;
  }

  h2 {
    font-size: 1.75rem;
  }
  h3 {
    font-size: 1.4rem;
  }
  h4 {
    font-size: 1.25rem;
  }

  img {
    margin: 0 auto 30px !important;
    display: block;
    max-width: 100%;
  }
  a {
    color: ${({ theme }) => theme.colors.primary};
  }
  ol {
    margin-left: 2rem;
    ::marker {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .cl {
    color: #f2ca27;
  }
  mark {
    background-color: #f2ca27;
    padding: 0 5px;
    &.gr {
      background-color: #7ed07e;
    }
  }

  pre {
    background-color: transparent;
    border-radius: 0.375rem;
    color: #383a42;
    font-size: 0.875em;
    font-weight: 400;
    line-height: 1.7142857;
    margin: 1.5rem 0;
    width: 75%;
    overflow-x: auto;
    padding: 1rem;
    background-color: #f9f9f9;
    ${({ theme }) => theme.breakpoints.tablet} {
      width: 100%;
    }

    code {
      display: block;
      line-height: 1;
    }
  }

  blockquote {
    background-color: #eef9fd;
    border: 0 solid #4cb3d4;
    border-left-width: 15px;
    box-shadow: var(--ifm-alert-shadow);
    padding: 15px;
    border-radius: 3px;
    margin: 0 0 1rem;
    p {
      color: rgb(25, 60, 71);
      font-size: 16px;
    }

    ${({ theme }) => theme.breakpoints.tablet} {
      padding: 10px;
      p {
        font-size: 13px;
      }
    }
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
      font-size: 1.7rem;
    }
    h2 {
      font-size: 1.5rem;
    }
    h3 {
      font-size: 1.3rem;
    }
    h4 {
      font-size: 1.1rem;
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
