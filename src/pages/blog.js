import React from 'react'
import { graphql, Link } from "gatsby"

import Layout from '../components/siteStructure/layout'
import SEO from "../components/seo"

import styled from 'styled-components'

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {slug: {regex: "/blog/"}}}) {
      nodes {
        id
        frontmatter {
          date
          slug
          title
        }
      }
    }
  }
`

const BlogPage = ({ data: { allMarkdownRemark: { nodes }}}) => {
    
    return (
        <Layout>
            <SEO title="Blog" />   
            <h1>Blog</h1>
            <div>
                {nodes.map(node => (
                    <Post key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                        <small>{node.frontmatter.date}</small>
                        <Link to={node.frontmatter.slug}>Read</Link>
                    </Post>
                ))}
            </div>
        </Layout>
    )
}

const Post = styled.div`
    background: white;
    margin: 3em 0;

    display: flex;
    flex-direction: column;
    align-items: center;
`


export default BlogPage
