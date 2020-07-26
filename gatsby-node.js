
exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const blogTemplate = require.resolve(`./src/templates/blogTemplate.js`)
    const projectTemplate = require.resolve(`./src/templates/projectTemplate.js`)

    const blogs = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {frontmatter: {slug: {regex: "/blog/"}}}
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `)
    // Handle errors
    if (blogs.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    blogs.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: blogTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    })

    const projects = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {frontmatter: {slug: {regex: "/projects/"}}}
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `)
    // Handle errors
    if (projects.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    projects.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: projectTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    })
  }