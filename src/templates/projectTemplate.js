import React, { useContext } from "react"
import rehypeReact from "rehype-react"
import { graphql } from "gatsby"

import { DisplayContext } from "../context/displayContext"

import styled, { css } from 'styled-components'

import SEO from '../components/seo'

import iframeWrapper from '../components/paperCraft/constructions/iframeWrapper'
import sectionHeader from '../components/paperCraft/constructions/sectionHeader'
import subSectionHeader from '../components/paperCraft/constructions/subSectionHeader'
import ImageWrapper from '../components/paperCraft/constructions/imageWrapper'


import Paper from '../components/paperCraft/paper'
import FrameBox from '../components/display/frameBox'
import ToolInfo from '../components/display/toolInfo'
import GithubLogo from '../components/paperCraft/constructions/logos/github'
import LiveLogo from '../components/paperCraft/constructions/logos/live'


import HeroDisplay from '../components/display/template/heroDisplay'
import BodyContent from '../components/display/template/bodyContent'



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

  const { markdownRemark } = data
  const { frontmatter, htmlAst } = markdownRemark
  const { hero, title, tagline, tech, github, live } = frontmatter

  const { defaultDisplay } = useContext(DisplayContext);

  const techTerms = tech => tech.split(",").map(string => string.trim())

  return (
    <>
      <SEO title="Projects" />

      <HeroDisplay {...{ defaultDisplay, title, hero }}>
        <Tagline>{tagline}</Tagline>

    
        <Tools>{techTerms(tech).join(", ")}</Tools>

        <LogoContainer >
          {techTerms(tech).map((term, i) => <PlacedTool key={i} number={i} tool={term} />)}
        </LogoContainer> 



        <LinksContainer>
          <LinkWrapper>
            <a target="blank" href={github}><GithubLogo width="70px" /></a>
            <a target="blank" href={github}>
              <CTAWrapper color="pink" shape="frame"> 
                <CTA>code</CTA>
              </CTAWrapper>
            </a>
          </LinkWrapper>
          
          {live ?
            <LinkWrapper>
              <a target="blank" href={live}><LiveLogo width="70px" /></a>
              <a target="blank" href={live}>
                <CTAWrapper color="pink" shape="frame"> 
                  <CTA>live</CTA>
                </CTAWrapper>
              </a>
            </LinkWrapper>
          : null}
        </LinksContainer>


      </HeroDisplay>

      <BodyContent defaultDisplay={defaultDisplay}>
        {addNumbersToHeaderProps(renderAst(htmlAst), frontmatter.slug)}
      </BodyContent>
   
    </>
  )
}

export default BlogTemplate


const Tagline = styled.p`
  margin: 0 0 24px 0;
  font-size: 22px;
  max-width: 300px;
  text-shadow: var(--text-shadow);

  @media (min-width: 900px) {
    font-size: 24px;
    font-style: italic;
    max-width: 500px;
  }
`

const Tools = styled.div`
  font-size: 20px;
  text-shadow: var(--text-shadow);

  @media (min-width: 768px) {
    font-size: 22px;
    max-width: 500px;
  }
`

const LogoContainer = styled.div`
  display: none;
  margin: 0 0 16px 0;

  @media (min-width: 900px) {
    display: flex;
    padding: 8px;
  }
`

const PlacedTool = styled(ToolInfo)`
  width: 55px;
  max-width: 10vw;
`



const LinksContainer = styled.div`
  margin: 8px 0;
  display: flex;

  @media (min-width: 900px) {
  
  }
`

const LinkWrapper = styled.div`

  margin: 0 0 32px 0; 
  width: fit-content;
  position: relative;

  @media (min-width: 900px) {
    max-width: none;
  }
`

const CTAWrapper = styled(Paper)`
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
  margin: 2px 6px 0 6px;
`








const Content = styled.div`
  width: 100%;
  position: relative;

  top: 500px;
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