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
            const { title, hero, slug, tagline, tech, github, live } = node.frontmatter
            const techTerms = tech.split(",").map(string => string.trim())


            return (
              
                <Card>
                  <Spacer>
                    <CardFace color="purple">

                      <Wrap>
                        <Hero imgStyle={{objectPosition: "top center"}} fluid={hero.childImageSharp.fluid} alt="hero" />

                        <Link key={slug} to={slug}>
                        <Screen>
                          <Title>{title}</Title>
                          <TitleBar color="pink" shape="frame" />
                        </Screen>
                        </Link>
                      </Wrap>
                    </CardFace>
                  </Spacer>
                </Card>
              
            )
          })} 
        </Container>
    )
}

export default PortfolioPage


const Container = styled(Link)`

  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;

`


const Card = styled.div`

  margin: 16px;

  width: calc(50% - (16px * 2));
  min-width: 400px;
  /* max-width: 100%; */
  flex-grow: 1;

`

const Spacer = styled.div`
  width: 100%;
  height: 0;
  padding-top: 70%;

  position: relative;
`

const CardFace = styled(Paper)`
  position: absolute;

  top: 0;
  height: 100%;
  left: 0;
  width: 100%;

  padding: 8px;

  border-radius: 8px;



`





const Wrap = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

`

const Screen = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 2;

  background: #2c2936e3;

  background: var(--tint);


  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;


  border-radius: 4px;


`

const Hero = styled(Img)`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`




const Title = styled.h2`
  margin: 0 0 8px 0;
  font-size: 32px;

  color: var(--background-color);
  text-shadow: var(--text-shadow);

  @media (min-width: 768px) {
    font-size: 40px;
  }
`

const TitleBar = styled(Paper)`
  height: 8px;
  width: 120px;
  margin: 0 0 16px 8px;
  @media (min-width: 768px) {
    width: 180px;
  }
`
