import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

const BlogPage = () => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(graphql`
    query BlogQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
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
      <SEO title="blog" />
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
            {/* <p>{frontmatter.description}</p> */}
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
  justify-content: space-between;
`

const Post = styled.div`
  width: 31%;
`

const Thumbnail = styled.img`
  width: 100%;
  display: block;
`

const Title = styled.h2`
  font-size: 20px;
  line-height: 130%;
  margin: 0 0 16px 15px;
  font-weight: 500;
  a {
    text-decoration: none;
    color: white;
  }
`
const Date = styled.div`
  font-size: 15px;
  margin: 13px 0 13px 15px;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.text};
`
