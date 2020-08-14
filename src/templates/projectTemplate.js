import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import styled, { css } from 'styled-components'

import SEO from '../components/seo'

import Layout from '../components/siteStructure/layout'

import Paper from '../components/paperCraft/paper'
import FrameBox from '../components/display/frameBox'
import ToolInfo from '../components/display/toolInfo'

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
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
`



const BlogTemplate = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const { hero, title, tagline, tech } = frontmatter
  const techTerms = tech.split(",").map(string => string.trim())

  return (
    <Layout>
      <SEO title="Projects" />
      <Content>
        <Hero imgStyle={{objectPosition: "top center"}} fluid={hero.childImageSharp.fluid} alt="hero" />
        <Bar color="purple" shape="frame" />

        <LogoContainer >
          {techTerms.map((term, i) => <PlacedTool key={i} number={i} tool={term} />)}
        </LogoContainer> 

        <HeaderContent color="purple" innerCSS={headerContentInner}>
          <Title>{title}</Title>
          <Accent color="pink" shape="frame" />
          <Tagline>{tagline}</Tagline>
          <Tools>{techTerms.join(", ")}</Tools>
        </HeaderContent>
        
        <MainContent dangerouslySetInnerHTML={{ __html: html }} /> 

      </Content>        
    </Layout>
  )
}

export default BlogTemplate

const Content = styled.div`
  width: 100%;
  position: relative;
`

const Hero = styled(Img)`
  opacity: 0.6;
  height: 80vh;

  @media (min-width: 768px) {
    
  }
`

const Bar = styled(Paper)`
  width: 110%;
  height: 16px;
  position: relative;
  top: -1px;
  left: -5%;
  margin: 0 0 16px 0;

  @media (min-width: 768px) {
  }
`

const LogoContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;

    position: absolute;
    left: 50%;
    top: 5vh;
    transform: translateX(-50%);
    z-index: 3;

    width: calc(85vw - 250px);
  }
`

const PlacedTool = styled(ToolInfo)`
  width: 120px;
  max-width: 10vw;
`

const HeaderContent = styled(FrameBox)`

  max-width: 90vw;

  position: absolute;
  top: 70vh;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;

  @media (min-width: 768px) {
  }
`

const headerContentInner = css`

  padding: 32px 16px;
  margin: 16px;
  
  @media (min-width: 768px) {
    padding: 7vh 4vw;
    margin: 20px;
  }
`

const Title = styled.h2`
  margin: 0 0 8px 0;
  font-size: 42px;

  @media (min-width: 768px) {
    font-size: 56px;
  }
`

const Accent = styled(Paper)`
  height: 6px;
  width: 120px;
  margin: 0 0 16px 8px;
  @media (min-width: 768px) {
    width: 180px;
    height: 8px;
  }
`

const Tagline = styled.p`
  margin: 0 0 16px 0;
  font-size: 20px;
  max-width: 300px;
  @media (min-width: 768px) {
    font-size: 24px;
    max-width: 400px;
  }
`

const Tools = styled.div`
  max-width: 300px;
  font-size: 18px;
  font-style: italic;

  @media (min-width: 768px) {
    max-width: 300px;
    font-size: 18px;
  }
`













const MainContent = styled.div``