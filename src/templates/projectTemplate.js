import React from "react"
import { graphql } from "gatsby"

import SEO from '../components/seo'

import Layout from '../components/siteStructure/layout'

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
      }
    }
  }
`

const BlogTemplate = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
        <SEO title="Projects" />
        <div className="project-posts">
            <h1>{frontmatter.title}</h1>
            <div
            className="project-main-content"
            dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    </Layout>

  )
}

export default BlogTemplate