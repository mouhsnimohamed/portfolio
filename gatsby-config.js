module.exports = {
  siteMetadata: {
    title: `Mohamed Mouhsni`,
    description: `Mohamed Mouhsni A self-taught WEB Developer, based in Casablanca, Morocco. || www.mouhsni.com`,
    author: `Mohamed Mouhsni`,
    keywords:
      "web developer, frontend developer, react/native developer, nodejs developer",
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
  flags: {
    DEV_SSR: true,
  },
}
