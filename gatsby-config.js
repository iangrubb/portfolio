module.exports = {
  siteMetadata: {
    title: `Ian Grubb | Full Stack Developer`,
    description: `A portfolio and blog for Ian Grubb, a full stack developer based in Brooklyn, NY.`,
    author: `Ian Grubb`,
    siteUrl: "https://www.iangrubb.com"
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
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/siteStructure/layout`),
      },
    },
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
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 970
            },
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ian Grubb Portfolio`,
        short_name: `Ian Grubb`,
        start_url: `/`,
        background_color: `#e4dcd6`,
        theme_color: `#302d38`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: 'gatsby-plugin-web-font-loader',
    //   options: {
    //     google: {
    //       families: ['Vollkorn:400,400i,700,900', 'Lato:400, 400i, 700']
    //     }
    //   }
    // },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID || "none"
      }
    }
  ]
}
