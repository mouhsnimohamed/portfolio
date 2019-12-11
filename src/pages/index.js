import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Intro from "../components/Home/Intro"
import AboutMe from "../components/about/about"

const IndexPage = ({ data }) => {
  // const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Home" />
      <Intro />
      <AboutMe />
      {/*<div className="flex flex-wrap -mx-4">
         {posts.map(({ node }) => {
          return (
            <div
              key={node.frontmatter.path}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8 px-4"
            >
              <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <div className="p-8">
                  <div className="font-bold text-xl mb-4">
                    <Link to={node.frontmatter.path}>
                      {node.frontmatter.title}
                    </Link>
                  </div>
                  <div className="font-bold text-xl mb-4">
                    {node.frontmatter.date}
                  </div>
                  <p className="text-gray-700 text-sm">
                    {node.frontmatter.description}
                  </p>
                </div>
              </div>
            </div>
          )
        })} 
      </div> */}

      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
    </Layout>
  )
}
export default IndexPage

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            description
          }
        }
      }
    }
  }
`
