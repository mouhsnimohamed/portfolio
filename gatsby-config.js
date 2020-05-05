module.exports = {
  siteMetadata: {
    title: `Mohamed Mouhsni`,
    description: `Mohamed Mouhsni mouhsni@netlify.com`,
    author: `Mohamed Mouhsni`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    // `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/content`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mohamed-mouhsni-portofio`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1aa0cb`,
        theme_color: `#1aa0cb`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpg`, // This path is relative to the root of the site.
      },
    },
  ],
}
