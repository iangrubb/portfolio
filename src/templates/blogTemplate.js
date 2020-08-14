import React from "react"
import rehypeReact from "rehype-react"
import { graphql } from "gatsby"

import styled from 'styled-components'

import SEO from '../components/seo'

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
        abstract
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

        <SEO title="Blog" />  
        
        <BlogContent>

          <DateWrapper color="purple" shape="rectangle">
            <Date>{formatedDate}</Date>
          </DateWrapper>

          <TitleBar color="purple" shape="frame" />
          
          <Title>{frontmatter.title}</Title>

          <TitleBar color="purple" shape="frame" />

          <Abstract>
            <LBracket color="green" shape="frame"></LBracket>
            {frontmatter.abstract}
            <RBracket color="green" shape="frame"></RBracket>
          </Abstract>

          <Spacer color="green" shape="spacer" />

          <MainContent>{addNumbersToHeaderProps(renderAst(htmlAst), frontmatter.slug)}</MainContent>
        </BlogContent>
    </Layout>

  )
}

const BlogContent = styled.section`

  width: 100%;
  margin: 60px 0 0 0;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 0;
    width: 700px;
  }

`

const DateWrapper = styled(Paper)`
  margin: 0 0 0.8rem 0.8rem;
  align-self: flex-start;
  height: fit-content;
  width: fit-content;
  @media (min-width: 768px) {
    margin: 0 0 1.4rem 1.8rem;
  }
`

const Date = styled.time`
  font-family: "Vollkorn";
  font-weight: 700;
  color: var(--background-color);
  font-size: 18px;
  margin: 0.3rem 0.8rem 0.2rem 0.8rem;

  @media (min-width: 768px) {
    font-size: 20px;
    margin: 0.4rem 1rem 0.3rem 1rem;
  }
`

const TitleBar = styled(Paper)`
  width: 95%;
  height: 5px;
  margin: 0 0 0.2rem 0;

  @media (min-width: 768px) {
    height: 6px;
    width: 100%;
    margin: 0 0 0.4rem 0;
  }
  
`

const Spacer = styled(Paper)`
  min-width: 128px;
  width: 30%;
  height: 24px;
`

const Title = styled.h2`
  margin: 1rem 0 0.6rem 0;
  font-size: 32px;
  max-width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    margin: 1rem 0 0.6rem 0;
    font-size: 40px;
    max-width: 680px;
  }
`


const Abstract = styled.p`
  position: relative;
  font-size: 18px;
  line-height: 1.8rem;
  margin: 1.2rem auto 1.5rem auto;
  width: 90%;
  @media (min-width: 768px) {
    margin: 1.2rem auto 2rem auto;
    width: 70%;
    font-size: 20px;
  }
`

const LBracket = styled(Paper)`
  width: 10px;
  height: 80%;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-250%, -50%);
`

const RBracket = styled(Paper)`
  width: 10px;
  height: 80%;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(250%, -50%);
`


const MainContent = styled.article`

  margin: 2rem 0 0 0;

  & p {
    font-size: 19px;
    margin: 0 0 0.8rem 0;
    line-height: 1.6rem;
    width: 100%;
  }

  @media (min-width: 768px) {
    & p {
      width: 64ch;
    }
  }

`

export default BlogTemplate