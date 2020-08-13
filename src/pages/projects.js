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
    allMarkdownRemark(filter: {frontmatter: {slug: {regex: "/projects/"}}}) {
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


const ProjectsPage = ({ data: { allMarkdownRemark: { nodes }}}) => {

  const projectOrder = ["Word Maze", "Natural", "Portfolio", "Styled Poker", "Pokemon Team Builder", "Ruby Enumerator Cards", "Space Bar", "Pokemon Fallout"]

    return (
        <Layout snapDesktop >
          
            <SEO title="Projects" />
            {projectOrder.map(term => {
              const node = nodes.find(n => n.frontmatter.title === term)
              const { title, hero, slug, tagline, tech, github, live } = node.frontmatter
              const techTerms = tech.split(",").map(string => string.trim())

              console.log(node.frontmatter)
              return (
                <Post key={node.id}>

                  <TopContent color="purple" innerCSS={topContentInner}>
                    <Link to={slug}><Title>{title}</Title></Link>
                    <Accent color="pink" shape="frame" />
                    <Tagline>{tagline}</Tagline>
                    <Tools>{techTerms.join(", ")}</Tools>
                  </TopContent>

                  <Bar color="purple" shape="frame" top/>
                  <Hero imgStyle={{objectPosition: "top center"}} fluid={hero.childImageSharp.fluid} alt="hero" />
                  <Bar color="purple" shape="frame" />

                  <LogoContainer >
                      {techTerms.map((term, i) => <PlacedTool key={i} number={i} tool={term} />)}
                  </LogoContainer> 

                  

                  <BottomContent >

                    <LinkWrapper>
                      <Link to={slug}><LearnLogo width="120px" /></Link>
                      <Link to={slug}>
                        <CTAWrapper color="pink" shape="frame"> 
                          <CTA>details</CTA>
                        </CTAWrapper>
                      </Link>
                    </LinkWrapper>

                    <LinkWrapper>
                      <a target="blank" href={github}><GithubLogo width="120px" /></a>
                      <a target="blank" href={github}>
                        <CTAWrapper color="pink" shape="frame"> 
                          <CTA>code</CTA>
                        </CTAWrapper>
                      </a>
                    </LinkWrapper>
                    
                    {live ?
                      <LinkWrapper>
                        <a target="blank" href={live}><LiveLogo width="120px" /></a>
                        <a target="blank" href={live}>
                          <CTAWrapper color="pink" shape="frame"> 
                            <CTA>live</CTA>
                          </CTAWrapper>
                        </a>
                      </LinkWrapper>
                    : null}

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
    padding: 10vh 0 30vh 0;

    scroll-snap-align: start;

    position: relative;
  }

`

const TopContent = styled(FrameBox)`

  margin: 0 8%;


  @media (min-width: 768px) {
    
    max-width: calc(85vw - 120px);
    margin: 0;
    position: absolute;
    bottom: 5vh;
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
    height: calc(60vh - 32px);
    opacity: 0.5;
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








const LogoContainer = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;

    position: absolute;
    left: 5vw;
    top: calc(10vh + 8px);
    transform: translateY(-50%);
    z-index: 2;

    width: calc(85vw - 250px);
    width: 1200px;
  }
`


const PlacedTool = styled(ToolInfo)`
  width: 120px;
  max-width: 10vw;
`



const BottomContent = styled.div`
  margin: 0 8%;
  max-width: 750px;
  @media (min-width: 768px) {
    margin: 0 auto;
    position: absolute;
    bottom: 5vh;
    right: 5vw;
    z-index: 2;

    width: 120px;

  }

`


const LinkWrapper = styled.div`
  position: relative;

  margin: 0 0 64px 0;

`


const CTAWrapper = styled(Paper)`
  width: fit-content;
  height: fit-content;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -20%);
  z-index: 2;
  margin: 8px 0;
`

const CTA = styled.span`
  font-family: "Vollkorn";
  color: var(--background-color);
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 1px;
  margin: 3px 8px 1px 8px;
`





export default ProjectsPage
