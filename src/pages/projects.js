import React from 'react'
import { graphql, Link } from "gatsby"
import styled from 'styled-components'

import Layout from '../components/siteStructure/layout'
import SEO from "../components/seo"

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {slug: {regex: "/projects/"}}}) {
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

const ProjectsPage = ({ data: { allMarkdownRemark: { nodes }}}) => {
    return (
        <Layout>
            <SEO title="Projects" />
            <h1>Projects</h1>
            {nodes.map(node => (
                <Post key={node.id}>
                    <h2>{node.frontmatter.title}</h2>
                    <small>{node.frontmatter.date}</small>
                    <Link to={node.frontmatter.slug}>Learn More</Link>
                </Post>
            ))}
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

export default ProjectsPage
