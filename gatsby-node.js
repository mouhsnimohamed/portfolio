const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const template = path.resolve("src/components/templates/post.jsx")

  return graphql(`
    {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: { fileAbsolutePath: { regex: "/blog/" } }
        limit: 1000
      ) {
        edges {
          node {
            html
            frontmatter {
              path
              date
              description
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: template,
        context: {
          path: node.frontmatter.path,
          date: node.frontmatter.date,
          description: node.frontmatter.description,
          html: node.html,
        },
      })
    })
  })
}
