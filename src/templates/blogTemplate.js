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


import HeroDisplay from '../components/display/template/heroDisplay'
import BodyContent from '../components/display/template/bodyContent'



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
        thumbnail: hero {
          childImageSharp {
            resize(width: 1000, height: 500) {
              src
              height
              width
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
    // iframe: iframeWrapper,
    // h2: sectionHeader,
    // h3: subSectionHeader,
    // p: ImageWrapper
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

  const { hero, title, abstract, heroSource, heroAuthor, slug, thumbnail } = frontmatter

  const [month, day, year] = frontmatter.date.split(" ")
  const fixedDay = day[0] === "0" ? day[1] + "," : day
  const formatedDate = [month, fixedDay, year].join(" ")


  const { defaultDisplay } = useContext(DisplayContext);

  return (
    <>

      <SEO title={title} slug={slug} isBlogPost description={abstract} image={thumbnail ? thumbnail.childImageSharp.resize : null}/>

      <HeroDisplay {...{defaultDisplay, title, hero, heroAuthor, heroSource }}>
        <Date>{formatedDate}</Date>
        <Abstract>{abstract}</Abstract>
      </HeroDisplay>

      <BodyContent defaultDisplay={defaultDisplay}>
        {renderAst(htmlAst)}
        {/* {addNumbersToHeaderProps(renderAst(htmlAst), frontmatter.slug)} */}

      </BodyContent>
    </>

  )
}

export default BlogTemplate


const Date = styled.time`
  font-family: "Vollkorn";
  font-weight: 700;
  font-size: 18px;

  @media (min-width: 900px) {
    font-size: 24px;
  }
`

const Abstract = styled.p`
  margin: 16px 0;
  font-size: 18px;
  max-width: 600px;
  line-height: 28px;
  width: 100%;  
  font-style: italic;

  @media (min-width: 500px) {
    font-size: 20px;
  }

  @media (min-width: 900px) {
    font-size: 22px;
  }

  
`




