import React from "react"
import { graphql } from "gatsby"

import styled from 'styled-components'

import Layout from '../components/siteStructure/layout'

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
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
        <div className="blog-post">
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
            <MainContent
            dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    </Layout>

  )
}

const MainContent = styled.section`
  width: 65ch;
`

export default BlogTemplate