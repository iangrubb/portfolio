import React from "react"
import rehypeReact from "rehype-react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import styled, { css } from 'styled-components'

import SEO from '../components/seo'

import Layout from '../components/siteStructure/layout'
import iframeWrapper from '../components/paperCraft/constructions/iframeWrapper'
import sectionHeader from '../components/paperCraft/constructions/sectionHeader'
import subSectionHeader from '../components/paperCraft/constructions/subSectionHeader'
import Paper from '../components/paperCraft/paper'
import FrameBox from '../components/display/frameBox'

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
    h3: subSectionHeader
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

  return (
    <Layout >

        <SEO title="Blog" />

        <BlogContent>

          <Hero imgStyle={{objectPosition: "top center"}} fluid={hero.childImageSharp.fluid} alt="hero" />
          <Bar color="purple" shape="frame" />
          <AttributionWrapper color="green" shape="frame">
            <Attribution target="blank" href={heroSource}>
              photo by {heroAuthor}
            </Attribution>
          </AttributionWrapper>
          


          <HeaderContent color="purple" innerCSS={headerContentInner}>
            <Title>{title}</Title>
            <TitleBar color="pink" shape="frame" />
            <Date>{formatedDate}</Date>
            <Abstract>{abstract}</Abstract>
          </HeaderContent>
          
          <MainContent>{addNumbersToHeaderProps(renderAst(htmlAst), frontmatter.slug)}</MainContent>
          
        </BlogContent>
    </Layout>

  )
}

const BlogContent = styled.section`
  position: relative;

`

const Hero = styled(Img)`
  opacity: 0.5;
  height: 50vh;

  width: 100vw;

  margin: 0;

  @media (min-width: 768px) {
    
  }
`

const AttributionWrapper = styled(Paper)`

  position: absolute;

  top: 16px;
  left: 16px;

  z-index: 2;

  width: fit-content;
  height: fit-content;
  color: var(--background-color);

  @media (min-width: 768px) {
    top: calc(50vh - 50px);
  }

`

const Attribution = styled.a`

  font-weight: 700;
  font-size: 16px;
  margin: 1px 6px 0 6px;

  @media (min-width: 768px) {
  
    font-size: 18px;
    margin: 3px 8px 2px 8px;
  }

`

const Bar = styled(Paper)`
  width: 110%;
  height: 16px;
  position: relative;
  top: -1px;
  left: -5%;
  margin: 0 0 8vh 0;

  @media (min-width: 768px) {
  }
`

const HeaderContent = styled(FrameBox)`

  position: relative;
  top: -40vh;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 2;

  margin: 0 0 -40vh 0;

  padding: 0 2vw;
  
  max-width: 1000px;

  @media (min-width: 768px) {
    top: -30vh;
    margin: 0 0 -30vh 0;
  }
`

const headerContentInner = css`

  padding: 40px 16px;
  margin: 18px;
  
  @media (min-width: 768px) {
    padding: 7vh 4vw 5vh 4vw;
    margin: 24px;
  }
`


const Title = styled.h2`
  margin: 0 0 0.6rem 0;
  font-size: 36px;

  @media (min-width: 768px) {
    margin: 1rem 0 0.6rem 0;
    font-size: 46px;
  }
`

const TitleBar = styled(Paper)`
  height: 6px;
  width: 120px;
  margin: 0 0 16px 8px;
  @media (min-width: 768px) {
    width: 180px;
    height: 8px;
  }
`

const Date = styled.time`
  font-family: "Vollkorn";
  font-weight: 700;
  font-size: 18px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`


const Abstract = styled.p`
  position: relative;
  font-size: 20px;
  line-height: 1.7rem;
  margin: 24px 0 0 0;

  @media (min-width: 768px) {
    max-width: 500px;
    font-size: 22px;
    line-height: 1.8rem;
    margin: 24px 0 0 0;
  }
`





const MainContent = styled.article`


  padding: 0 32px;
  margin: 2rem auto 0 auto;
  
  & p {
    font-size: 19px;
    margin: 0 auto 0.8rem auto;
    line-height: 1.6rem;
    width: 95%;
    min-width: 280px;
  }

  @media (min-width: 768px) {

    padding: 0;
    width: 700px;

    & p {
      width: 64ch;
    }
  }

`

export default BlogTemplate