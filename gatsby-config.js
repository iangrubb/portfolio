module.exports = {
  siteMetadata: {
    title: `Ian Grubb`,
    description: `A developer portfolio and blog.`,
    author: `@iangrubb`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-catch-links`,
    // {
    //   resolve: "gatsby-plugin-anchor-links",
    //   options: {
    //     offset: 0
    //   }
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`,
        plugins: [
          `gatsby-remark-component`,
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-prismjs`,
          {
            resolve: "gatsby-remark-smartypants",
            options: {
              quotes: false,
            },
          }
        ]
      }
    },
    // Configure this when ready
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`,
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Vollkorn:400,400i,700,900', 'Open Sans:400, 400i, 700']
        }
      }
    }
  ]
}
