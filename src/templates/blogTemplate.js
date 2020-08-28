import React, { useContext } from "react"
import rehypeReact from "rehype-react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import { DisplayContext } from "../context/displayContext"

import styled, { css } from 'styled-components'

import SEO from '../components/seo'

import iframeWrapper from '../components/paperCraft/constructions/iframeWrapper'
import sectionHeader from '../components/paperCraft/constructions/sectionHeader'
import subSectionHeader from '../components/paperCraft/constructions/subSectionHeader'
import ImageWrapper from '../components/paperCraft/constructions/imageWrapper'

import Paper from '../components/paperCraft/paper'

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        abstract
        hero {
          childImageSharp {
            fluid(maxWidth: 2400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heroSource
        heroAuthor
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

  const { hero, title, abstract, heroSource, heroAuthor } = frontmatter

  const [month, day, year] = frontmatter.date.split(" ")
  const fixedDay = day[0] === "0" ? day[1] + "," : day
  const formatedDate = [month, fixedDay, year].join(" ")


  const { defaultDisplay } = useContext(DisplayContext);

  return (
    <>

      <SEO title="Blog" />

      <HeroWrapper color="purple" defaultDisplay={defaultDisplay}>
        <Hero imgStyle={{objectPosition: "top center"}} fluid={hero.childImageSharp.fluid} alt="hero" />
        <HeroTint>
          <HeaderInfo defaultDisplay={defaultDisplay} >
            <Title>{title}</Title>
            <TitleBar color="pink" shape="frame" />
            <Date>{formatedDate}</Date>
          </HeaderInfo> 
          <AttributionWrapper color="green" shape="rectangle">
            <Attribution target="_blank" href={heroSource}>
              photo by {heroAuthor}
            </Attribution>
          </AttributionWrapper>
        </HeroTint>
      </HeroWrapper>


      <AbstractSection defaultDisplay={defaultDisplay} >
        <Spacer color="green" shape="spacer" proportional/>
        <AbstractWrapper color="tan" noShadow>          
          <Abstract>{abstract}</Abstract>
        </AbstractWrapper>
        <Spacer color="green" shape="spacer" proportional/>
      </AbstractSection>
      

      <PostWrapper color="tan" defaultDisplay={defaultDisplay} noShadow>
          <PostContent>
            {addNumbersToHeaderProps(renderAst(htmlAst), frontmatter.slug)}
          </PostContent>
      </PostWrapper>
    </>

  )
}


const alignToDisplay = css`
  @media (min-width: 900px) {
    margin: 0;
    transition: left var(--desktop-duration) ease, transform var(--desktop-duration) ease;
    position: relative;
    left: ${props => props.defaultDisplay ? "0" : "50%" };
    transform: translateX(${props => props.defaultDisplay ? "0" : "-50%" });
  }
`

const HeroWrapper = styled(Paper)`
  width: 100%;
  max-width: 1000px;
  height: 40vh;
  padding: 8px;
  margin: 0 0 16px 0;

  border-radius: 8px;

  ${alignToDisplay}

  position: relative;

  @media (min-width: 900px) {

    margin: 0 0 32px 0;
  }
  
`

const HeroTint = styled.div`
  position: absolute;
  top: 8px;
  bottom: 8px;
  left: 8px;
  right: 8px;
  border-radius: 8px;
  background: var(--tint);

  color: var(--background-color);
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
`

const AttributionWrapper = styled(Paper)`

  position: absolute;

  top: 16px;
  left: 16px;

  z-index: 2;

  width: fit-content;
  height: fit-content;
  color: var(--background-color);

`

const Attribution = styled.a`

  font-weight: 700;
  font-size: 14px;
  margin: 1px 10px 0 10px;

  @media (min-width: 900px) {
  
    font-size: 16px;
    margin: 3px 12px 2px 12px;
  }

`

const HeaderInfo = styled.div`

  width: fit-content;
  ${alignToDisplay}

`

const Title = styled.h2`

  margin: 0 0 4px 0;
  font-size: 36px;

  @media (min-width: 768px) {
 
    font-size: 56px;
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

const Date = styled.time`
  font-family: "Vollkorn";
  font-weight: 700;
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 24px;
    margin: 0 0 0 16px;
  }
`

const Hero = styled(Img)`

  border-radius: 8px;
  height: 100%;
  width: 100%;

  margin: 0;

`





const AbstractSection = styled.div`

  width: 70%;
  max-width: 600px;
  min-width: 300px;

  ${alignToDisplay}

  @media (min-width: 900px) {
    margin: 0 0 32px 0;
  }

  margin: 0 0 16px 0;

`


const Spacer = styled(Paper)`
  width: 30%;
  min-width: 100px;
  max-width: 400px;
  margin: 0 auto 8px auto;
`


const AbstractWrapper = styled(Paper)`
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  margin: 0 0 8px 0;

`

const Abstract = styled.p`
  background: var(--background-color);
  border-radius: 6px;
  padding: 24px 32px;
  margin: 0;
  font-size: 22px;
  line-height: 32px;
  width: 100%;  
  font-style: italic;
`







const PostWrapper = styled(Paper)`

  width: 100%;
  max-width: 1000px;
  
  border-radius: 8px;

  margin: 0 auto;

  padding: 8px;

  ${alignToDisplay}


`

const PostContent = styled.article`

  width: 100%;
  height: fit-content;

  background: var(--background-color);
  border-radius: 6px;


  padding: 48px 32px 32px 32px;
  margin: 0;


  & p a {
    font-weight: 700;
  }
  
  & p {
    
    font-size: 18px;
    margin: 0 auto 0.8rem auto;
    line-height: 1.6rem;

    width: 700px;
    max-width: 100%;

  }

  @media (min-width: 900px) {

    padding: 64px 48px 32px 48px;

    & p {
      font-size: 20px;
      line-height: 28px;

    }
  }

`








export default BlogTemplate