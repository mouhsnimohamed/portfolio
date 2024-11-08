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
      <Seo title="blog" />
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
`

const Post = styled.div`
  width: 31%;
  margin-bottom: 20px;
  ${({ theme }) => theme.breakpoints.tablet} {
    width: 49%;
  }

  ${({ theme }) => theme.breakpoints.phone} {
    width: 100%;
  }
`

const Thumbnail = styled.img`
  width: 100%;
  display: block;
`

const Title = styled.h2`
  font-size: 22px;
  line-height: 130%;
  margin: 0 0 0 15px;
  font-weight: 500;
  a {
    text-decoration: none;
    color: white;
  }
`
const Date = styled.div`
  font-size: 15px;
  margin: 15px 0 15px 15px;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.text};
`
