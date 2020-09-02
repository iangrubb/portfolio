import React, { useContext } from "react"
import rehypeReact from "rehype-react"
import { graphql } from "gatsby"

import { DisplayContext } from "../context/displayContext"

import styled from 'styled-components'

import SEO from '../components/seo'

import iframeWrapper from '../components/display/markdown/iframeWrapper'
import sectionHeader from '../components/display/markdown/sectionHeader'
import subSectionHeader from '../components/display/markdown/subSectionHeader'
import ImageWrapper from '../components/display/markdown/imageWrapper'


import Paper from '../components/paperCraft/paper'
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

      <HeroDisplay {...{ defaultDisplay, title, hero }} techTerms={techTerms(tech)}>

        <Tagline>{tagline}</Tagline>

        <Tools>{techTerms(tech).join(", ")}</Tools>

        <LinksContainer>
          <LinkWrapper>
            <a target="blank" href={github} aria-label="Github Link"><GithubLogo width="100%" /></a>
            <a target="blank" href={github} aria-label="Github Link">
              <CTAWrapper color="pink" shape="frame"> 
                <CTA>code</CTA>
              </CTAWrapper>
            </a>
          </LinkWrapper>
          
          {live ?
            <LinkWrapper>
              <a target="blank" href={live} aria-label="Live Site"><LiveLogo width="100%" /></a>
              <a target="blank" href={live} aria-label="Live Site">
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
  margin: 0 0 16px 0;
  font-style: italic;
  font-size: 20px;
  max-width: 300px;

  @media (min-width: 500px) {
    font-size: 22px;
  }

  @media (min-width: 900px) {
    font-size: 24px;
    
    max-width: 500px;
  }
`

const Tools = styled.div`
  font-size: 15px;

  @media (min-width: 500px) {
    font-size: 17px;
  }

  @media (min-width: 900px) {
    font-size: 19px;
    
    max-width: 500px;
  }

`


const LinksContainer = styled.div`
  margin: 8px 0;
  display: flex;
`

const LinkWrapper = styled.div`

  margin: 0 8px 32px 0; 
  width: 60px;
  position: relative;


  @media (min-width: 500px) {
    width: 70px;
  }
`

const CTAWrapper = styled(Paper)`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -20%);
  z-index: 2;
  margin: 8px 0;
  @media (min-width: 500px) {
    width: 70px;
  }
`

const CTA = styled.span`
  font-family: "Vollkorn";
  color: var(--background-color);
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 1px;
  margin: 2px 4px 0 4px;
  @media (min-width: 500px) {
    font-size: 20px;
  }
`

