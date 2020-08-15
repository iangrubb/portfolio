import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/siteStructure/layout'
import SEO from "../components/seo"

import Paper from '../components/paperCraft/paper'

import styled from 'styled-components'

import BlogCard from '../components/display/blogCard'

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {slug: {regex: "/blog/"}}}) {
      nodes {
        id
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          slug
          title
          abstract
          hero {
            childImageSharp {
              fluid(maxWidth: 2400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const BlogPage = ({ data: { allMarkdownRemark: { nodes }}}) => {
 
  
    return (
        <Layout>
            <SEO title="Blog" />

            {nodes.map(node => <BlogCard key={node.id} node={node} />)}

        </Layout>
    )
}





export default BlogPage
