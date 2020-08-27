import React from "react"
import rehypeReact from "rehype-react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import styled, { css } from 'styled-components'

import SEO from '../components/seo'

import iframeWrapper from '../components/paperCraft/constructions/iframeWrapper'
import sectionHeader from '../components/paperCraft/constructions/sectionHeader'
import subSectionHeader from '../components/paperCraft/constructions/subSectionHeader'
import ImageWrapper from '../components/paperCraft/constructions/imageWrapper'

import Layout from '../components/siteStructure/layout'

import Paper from '../components/paperCraft/paper'
import FrameBox from '../components/display/frameBox'
import ToolInfo from '../components/display/toolInfo'
import GithubLogo from '../components/paperCraft/constructions/logos/github'
import LiveLogo from '../components/paperCraft/constructions/logos/live'

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      htmlAst
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

const renderAst = new rehypeReact({
  passNode: true,
  createElement: React.createElement,
  components: {
    iframe: iframeWrapper,
    h2: sectionHeader,
    h3: subSectionHeader,
    p: ImageWrapper
    }
}).Compiler

const slugify = string => string.toLowerCase().split(" ").join("-")

const addNumbersToHeaderProps = (ast, slug) => {


  

  let h2Counter = 0
  let h3Counter = 0

  let h2path = ""
  
  const updatedList = ast.props.children.map(node => {

    if (typeof node === "string") {
      return node
    } else {
      if (node.props.node) {
        switch(node.props.node.tagName) {
          case "h2":
            h2Counter++
            h3Counter = 0
            h2path = slugify(node.props.children[0])
            return {...node, props: {...node.props, counter: h2Counter, path: slug + "#" + h2path}}
          case "h3":
            h3Counter++
            return {...node, props: {...node.props, counter: h3Counter, path: slug + "#" + h2path + "-" + slugify(node.props.children[0])}}
          default:
            return node
        }
      } else {
        return node
      }
    }
  })
  return {...ast, props: {...ast.props, children: updatedList }}
}


const BlogTemplate = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, htmlAst } = markdownRemark
  const { hero, title, tagline, tech, github, live } = frontmatter
  const techTerms = tech.split(",").map(string => string.trim())

  return (
    <>
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

          <LinksContainer>

            <LinkWrapper>
              <a target="blank" href={github}><GithubLogo width="80px" /></a>
              <a target="blank" href={github}>
                <CTAWrapper color="pink" shape="frame"> 
                  <CTA>code</CTA>
                </CTAWrapper>
              </a>
            </LinkWrapper>
            
            {live ?
              <LinkWrapper>
                <a target="blank" href={live}><LiveLogo width="80px" /></a>
                <a target="blank" href={live}>
                  <CTAWrapper color="pink" shape="frame"> 
                    <CTA>live</CTA>
                  </CTAWrapper>
                </a>
              </LinkWrapper>
            : null}
          </LinksContainer>

        </HeaderContent>
        
        <MainContent>{addNumbersToHeaderProps(renderAst(htmlAst), frontmatter.slug)}</MainContent> 

      </Content>        
    </>
  )
}

export default BlogTemplate

const Content = styled.div`
  width: 100%;
  position: relative;
`

const Hero = styled(Img)`
  opacity: 0.5;
  height: 50vh;

  @media (min-width: 768px) {
    
  }
`

const Bar = styled(Paper)`
  width: 110%;
  height: 12px;
  position: relative;
  top: -1px;
  left: -5%;
  margin: 0 0 8vh 0;

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

  }
`

const PlacedTool = styled(ToolInfo)`
  width: 100px;
  max-width: 10vw;
`

const HeaderContent = styled(FrameBox)`

  position: relative;
  top: -35vh;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 2;

  margin: 0 0 -30vh 0;
  
  max-width: 92vw;

  @media (min-width: 768px) {
  }
`

const headerContentInner = css`

  padding: 40px 16px;
  margin: 10px;

  border-radius: 8px;
  
  @media (min-width: 768px) {
    padding: 50px;
    margin: 12px;

  
  }
`

const Title = styled.h2`
  margin: 0 0 16px 0;
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
    margin: 0 0 32px 8px;
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
  margin: 0 0 16px 0;

  @media (min-width: 768px) {
    max-width: 300px;
    font-size: 18px;
  }
`

const LinksContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`

const LinkWrapper = styled.div`

  margin: 0 0 32px 0; 
  width: fit-content;
  position: relative;
  max-width: 30vw;

  @media (min-width: 768px) {
    max-width: none;
  }
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



const MainContent = styled.div`

  padding: 0 20px;
  margin: 0 auto;

  & p a {
    font-weight: 700;
  }
  

  & p {
    font-size: 19px;
    margin: 0 0 0.8rem 0;
    line-height: 1.6rem;
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 700px;

    & p {
      width: 64ch;
    }
  }
`