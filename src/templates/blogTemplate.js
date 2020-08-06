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

  return (
    <Layout>
        <BlogContent>
          <DateWrapper color="purple" shape="rectangle">
            <Date>{frontmatter.date}</Date>
          </DateWrapper>
          <Title>{frontmatter.title}</Title>
          <SubTitle>{frontmatter.subtitle}</SubTitle>
          <MainContent>{addNumbersToHeaderProps(renderAst(htmlAst), frontmatter.slug)}</MainContent>
        </BlogContent>
    </Layout>

  )
}

const BlogContent = styled.section`
  width: 65ch;
`

const DateWrapper = styled(Paper)`
  margin: 0 0 1.6rem 0.8rem;
  height: fit-content;
  width: fit-content;
`

const Date = styled.h2`
  font-size: 1.4rem;
  letter-spacing: 0.4px;
  color: var(--background-color);
  margin: 0.6rem 1rem 0.6rem 1rem;
`

const Title = styled.h1`
  margin: 0 0 0.6rem 0;
`

const SubTitle = styled.h2`
  margin: 0 0 2rem 0.8rem;
  font-weight: 400;
  font-style: italic;
  font-size: 1.6rem;
`




const MainContent = styled.div`

  & p {
    margin: 0 0 0.8rem 0;
    line-height: 1.6rem;
  }
  
`

export default BlogTemplate