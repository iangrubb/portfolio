import React from "react"
import rehypeReact from "rehype-react"
import { graphql } from "gatsby"

import styled from 'styled-components'

import Layout from '../components/siteStructure/layout'
import iframeWrapper from '../components/paperCraft/constructions/iframeWrapper'
import sectionHeader from '../components/paperCraft/constructions/sectionHeader'
import subSectionHeader from '../components/paperCraft/constructions/subSectionHeader'
import Paper from '../components/paperCraft/paper'

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        subtitle
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

  const [month, day, year] = frontmatter.date.split(" ")
  const fixedDay = day[0] === "0" ? day[1] + "," : day
  const formatedDate = [month, fixedDay, year].join(" ")

  return (
    <Layout>
        <BlogContent>

          <DateWrapper color="pink" shape="rectangle">
            <Date>{formatedDate}</Date>
          </DateWrapper>

          <TitleBar color="purple" shape="frame" />
          
          <Title>{frontmatter.title}</Title>
          <SubTitle>{frontmatter.subtitle}</SubTitle>

          <TitleBar color="purple" shape="frame" />

          <MainContent>{addNumbersToHeaderProps(renderAst(htmlAst), frontmatter.slug)}</MainContent>
        </BlogContent>
    </Layout>

  )
}

const BlogContent = styled.section`

  width: calc(100% - 24px);

  @media (min-width: 768px) {
    width: auto;

    & p {
      width: 65ch;
    }
  }
  
  

  /* & > * {
    outline: 1px solid red;
  } */

`

const DateWrapper = styled(Paper)`
  margin: 0 0 0.8rem 0.8rem;
  height: fit-content;
  width: fit-content;
  @media (min-width: 768px) {
    margin: 0 0 0.8rem 1.8rem;
  }
`

const Date = styled.time`
  font-family: "Vollkorn";
  font-weight: 700;
  color: var(--background-color);
  font-size: 20px;
  margin: 0.5rem 0.8rem 0.4rem 0.8rem;

  @media (min-width: 768px) {
    font-size: 24px;
    margin: 0.5rem 1.2rem 0.4rem 1.2rem;
  }
`

const TitleBar = styled(Paper)`
  width: 100%;
  height: 10px;
  margin: 0 0 1rem 0;

  @media (min-width: 768px) {
    height: 12px;
    margin: 0 0 1.4rem 0;
  }
  
`

const Title = styled.h2`
  margin: 1rem 0 0.6rem 0.5rem;
  font-size: 32px;
  max-width: 100%;

  @media (min-width: 768px) {
    margin: 1rem 0 0.6rem 2rem;
    font-size: 44px;
    max-width: 680px;
  }
`

const SubTitle = styled.h2`
  margin: 0 0 1rem 1rem;
  font-weight: 400;
  font-style: italic;
  font-size: 22px;
  @media (min-width: 768px) {
    margin: 0 0 1rem 3rem;
    font-size: 30px;
  }
`



const MainContent = styled.article`

  margin: 2.5rem 0 0 0;

  & p {
    margin: 0 auto 0.8rem auto;
    line-height: 1.6rem;
  }


  
`

export default BlogTemplate