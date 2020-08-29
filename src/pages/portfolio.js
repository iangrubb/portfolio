import React from 'react'
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled, { css } from 'styled-components'

import Layout from '../components/siteStructure/layout'
import SEO from "../components/seo"

import Paper from '../components/paperCraft/paper'

import FrameBox from '../components/display/frameBox'

import GithubLogo from '../components/paperCraft/constructions/logos/github'
import LiveLogo from '../components/paperCraft/constructions/logos/live'
import LearnLogo from '../components/paperCraft/constructions/logos/learn'

import ToolInfo from '../components/display/toolInfo'


export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {slug: {regex: "/portfolio/"}}}) {
      nodes {
        id
        frontmatter {
          slug
          title
          tagline
          tech
          github
          live
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



const PortfolioPage = ({data: { allMarkdownRemark: { nodes }}}) => {

  const projectOrder = ["Word Maze", "Natural", "Portfolio", "Styled Poker", "Pokemon Team Builder", "Ruby Enumerators", "Space Bar", "Pokemon Fallout"]

    return (
        <>
          <SEO title="Portfolio" />
          {projectOrder.map(term => {
            const node = nodes.find(n => n.frontmatter.title === term)
            const { title, hero, slug, tagline, tech, github, live } = node.frontmatter
            const techTerms = tech.split(",").map(string => string.trim())


            return (
              <Link to={slug}><Title>{title}</Title></Link>
            )
          })} 
        </>
    )
}

export default PortfolioPage

const Title = styled.h2`
  margin: 0 0 8px 0;
  font-size: 40px;

  @media (min-width: 768px) {
    font-size: 56px;
  }
`