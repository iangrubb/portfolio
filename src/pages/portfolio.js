import React from 'react'
import { graphql } from "gatsby"
import styled from 'styled-components'

import SEO from "../components/seo"

import IndexPageCard from '../components/display/indexPageCard'


export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {slug: {regex: "/portfolio/"}}}) {
      nodes {
        id
        frontmatter {
          slug
          title
          tagline
          hero {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        
      }
    }
  }
`



const PortfolioPage = ({data: { allMarkdownRemark: { nodes }}}) => {

  const projectOrder = ["Word Maze", "Natural", "Portfolio", "Styled Poker", "Pokemon Team Builder", "Ruby Enumerators", "Space Bar", "Pokemon Fallout"]

    return (
        <Container>
          <SEO title="Portfolio" />
          {projectOrder.map(term => {
            const node = nodes.find(n => n.frontmatter.title === term)
            const { title, hero, slug, tagline } = node.frontmatter
            return (
              
                <IndexPageCard key={slug} {...{hero, title, slug}}>
                  <Tagline>{tagline}</Tagline>
                </IndexPageCard>
              
            )
          })} 
        </Container>
    )
}

export default PortfolioPage


const Container = styled.div`

  width: 100%;
  height: 100%;


  display: flex;
  flex-wrap: wrap;

`

const Tagline = styled.p`

  margin: 0 0 8px 0;
  font-style: italic;
  

`

