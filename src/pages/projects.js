import React from 'react'
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled, { css } from 'styled-components'

import Layout from '../components/siteStructure/layout'
import SEO from "../components/seo"

import Paper from '../components/paperCraft/paper'

import FrameBox from '../components/display/frameBox'



import ToolInfo from '../components/display/toolInfo'


export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {slug: {regex: "/projects/"}}}) {
      nodes {
        id
        frontmatter {
          slug
          title
          tagline
          tech
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



const ProjectsPage = ({ data: { allMarkdownRemark: { nodes }}}) => {

  const projectOrder = ["Word Maze", "Natural", "Portfolio", "Styled Poker", "Pokemon Team Builder", "Ruby Enumerator Cards", "Space Bar", "Pokemon Fallout"]

    return (
        <Layout snapDesktop >
          
            <SEO title="Projects" />
            {projectOrder.map(term => {
              const node = nodes.find(n => n.frontmatter.title === term)
              const { title, hero, slug, tagline, tech } = node.frontmatter
              const techTerms = tech.split(",").map(string => string.trim())

              return (
                <Post key={node.id}>

                  <TopContent color="purple" innerCSS={topContentInner}>
                    <Link to={slug}><Title>{title}</Title></Link>
                    <Accent color="pink" shape="frame" />
                    <Tagline>{tagline}</Tagline>
                    <Tools>{techTerms.join(", ")}</Tools>
                  </TopContent>

                  <Bar color="purple" shape="frame" top/>
                  <Hero fluid={hero.childImageSharp.fluid} alt="hero" />
                  <Bar color="purple" shape="frame" />

                  <LogoContainer >
                      {techTerms.map((term, i) => <PlacedTool key={i} number={i} tool={term} />)}
                  </LogoContainer> 

                  <BottomContent color="purple" innerCSS={bottomContentInner}>
                    
                    <Link to={slug}>
                      <CTAWrapper color="pink" shape="frame"> 
                        <CTA>learn more</CTA>
                        <Arrow color="tan" shape="arrow" proportional/>
                      </CTAWrapper>
                    </Link>

                    <Link to={slug}>
                      <CTAWrapper color="pink" shape="frame"> 
                        <CTA>view on Github</CTA>
                        <Arrow color="tan" shape="arrow" proportional/>
                      </CTAWrapper>
                    </Link>

                    <Link to={slug}>
                      <CTAWrapper color="pink" shape="frame"> 
                        <CTA>try it live</CTA>
                        <Arrow color="tan" shape="arrow" proportional/>
                      </CTAWrapper>
                    </Link>

                  </BottomContent>

                </Post>
              )
            })}
        </Layout>
    )
}


const Post = styled.div`

  width: 100vw;

  margin: 20px 0 60px 0;
  padding: 0 0 40px 0;

  @media (min-width: 768px) {
  
    margin: 0;
    padding: 15vh 0;

    scroll-snap-align: start;

    position: relative;
  }

`

const TopContent = styled(FrameBox)`

  margin: 0 8%;

  max-width: 750px;

  @media (min-width: 768px) {
    
    /* max-width: 500px; */
    margin: 0;
    position: absolute;
    top: 5vh;
    left: 5vw;
    z-index: 2;
  }
`

const topContentInner = css`

  padding: 16px;

  margin: 20px;

  @media (min-width: 768px) {
    padding: 7vh 4vw;
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
  font-size: 18px;
  
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
    max-width: 800px;
    font-size: 18px;
  }
`



const Hero = styled(Img)`
  height: 250px;
  @media (min-width: 768px) {
    height: calc(70vh - 32px);

    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
      background: var(--tint);
    }
  }
`

const Bar = styled(Paper)`
  width: 110%;
  height: 8px;
  position: relative;
  top: ${props => props.top ? '1px' : '-1px'};
  left: -5%;
  margin: ${props => props.top ? '0 0 0 0' : '0 0 12px 0'};

  @media (min-width: 768px) {
    margin: 0;
    height: 16px;
  }
`



const BottomContent = styled(FrameBox)`
  margin: 0 8%;
  max-width: 750px;
  @media (min-width: 768px) {
    margin: 0 auto;
    position: absolute;
    bottom: 5vh;
    right: 5vw;
    z-index: 2;
  }

`

const bottomContentInner = css`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 24px 16px;
  margin: 16px;
`



const LogoContainer = styled.div`
  display: none;

  @media (min-width: 1100px) {
    display: flex;

    position: absolute;
    left: 5vw;
    top: calc(85vh - 8px);
    transform: translateY(-50%);
    z-index: 2;

    width: calc(85vw - 250px);
    max-width: 1200px;
  }
`


const PlacedTool = styled(ToolInfo)`
  max-width: 10%;
`



const CTAWrapper = styled(Paper)`
  width: fit-content;
  height: fit-content;
  position: relative;
  margin: 8px 0;
`

const CTA = styled.span`
  font-family: "Vollkorn";
  color: var(--background-color);
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 1px;
  margin: 8px calc(32px + 16px) 4px 16px;
`

const Arrow = styled(Paper)`
  position: absolute;
  top: 50%;
  right: 8px;
  width: 30px;
  transform: translateY(-50%);
`




export default ProjectsPage
