import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const BlogPage = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query BlogQuery {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: { fileAbsolutePath: { regex: "/blog/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              description
              title
              path
              featuredImage {
                publicURL
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo title="blog">
        <link rel="canonical" href="https://www.mouhsni.com/blog/" />
      </Seo>
      <PostsContainer>
        {edges.map(({ node: { frontmatter, id } }) => (
          <Post key={id}>
            {frontmatter.featuredImage.publicURL && (
              <Link to={frontmatter.path}>
                <Thumbnail src={frontmatter.featuredImage.publicURL} />
              </Link>
            )}
            <Date>{frontmatter.date}</Date>
            <Title>
              <Link to={frontmatter.path}>{frontmatter.title}</Link>
            </Title>
          </Post>
        ))}
      </PostsContainer>
    </Layout>
  )
}
export default BlogPage

const PostsContainer = styled.div`
  padding: 50px 0;
  display: flex;
  gap: 50px;
  ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }

  ${({ theme }) => theme.breakpoints.tablet} {
    gap: 0;
  }
`

const Post = styled.div`
  width: 31%;
  margin-bottom: 20px;
  ${({ theme }) => theme.breakpoints.tablet} {
    width: 90%;
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 30px;
  }
`

const Thumbnail = styled.img`
  width: 100%;
  display: block;
  ${({ theme }) => theme.breakpoints.tablet} {
    width: 90%;
  }
`

const Title = styled.h2`
  font-size: 22px;
  line-height: 130%;
  font-weight: 500;
  a {
    text-decoration: none;
    color: white;
  }
`
const Date = styled.div`
  font-size: 15px;
  margin: 15px 0 15px 0;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.text};
  ${({ theme }) => theme.breakpoints.tablet} {
    margin: 8px 0;
  }
`
