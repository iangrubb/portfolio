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
        subtitle
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
          <SubTitle>{frontmatter.subtitle}</SubTitle>

          <TitleBar color="purple" shape="frame" />

          <Abstract>
            {frontmatter.abstract}
          </Abstract>

          <Spacer color="green" shape="spacer" />

          <MainContent>{addNumbersToHeaderProps(renderAst(htmlAst), frontmatter.slug)}</MainContent>
        </BlogContent>
    </Layout>

  )
}

const BlogContent = styled.section`

  width: 100%;
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
    font-size: 24px;
    margin: 0.5rem 1.2rem 0.4rem 1.2rem;
  }
`

const TitleBar = styled(Paper)`
  width: 95%;
  height: 8px;
  margin: 0 0 0.2rem 0;

  @media (min-width: 768px) {
    height: 10px;
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
    font-size: 44px;
    max-width: 680px;
  }
`

const SubTitle = styled.h2`
  margin: 0 0 1rem 0;
  font-weight: 400;
  font-style: italic;
  font-size: 22px;
  text-align: center;

  @media (min-width: 768px) {
    margin: 0 0 1rem 0;
    font-size: 30px;
  }
`

const Abstract = styled.p`
  font-size: 18px;
  line-height: 1.8rem;
  margin: 1.2rem auto 1.5rem auto;
  width: 90%;
  @media (min-width: 768px) {
    margin: 1.2rem auto 2rem auto;
    width: 70%;
    font-size: 22px;
  }
`


const MainContent = styled.article`

  margin: 2rem 0 0 0;

  & p {
    margin: 0 auto 0.8rem auto;
    line-height: 1.6rem;
    width: 96%;
  }

  @media (min-width: 768px) {
    & p {
      width: 62ch;
    }
  }

  
`

export default BlogTemplate