module.exports = {
  siteMetadata: {
    title: `GraphQL Shenzhen`,
    description: `GraphQL Meetup in Shenzhen on 3rd December 2019`,
    author: `Carlos Rufo & Tobias Meixner`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        // includePaths: ["absolute/path/a", "absolute/path/b"],
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `graphql-shenzhen`,
        short_name: `gql-sz`,
        start_url: `/`,
        background_color: `#e535ab`,
        theme_color: `#e535ab`,
        display: `minimal-ui`,
        icon: `src/images/graphql-shenzhen-logo.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
