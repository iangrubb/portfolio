import React from "react"
import { graphql } from "gatsby"

import styled from 'styled-components'

import Layout from '../components/siteStructure/layout'

import Paper from '../components/paperCraft/paper'

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        subtitle
      }
    }
  }
`

const BlogTemplate = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
        <BlogContent>
          <DateWrapper color="green" shape="rectangle">
            <Date>{frontmatter.date}</Date>
          </DateWrapper>
          <Title>{frontmatter.title}</Title>
          <SubTitle>{frontmatter.subtitle}</SubTitle>
          <MainContent dangerouslySetInnerHTML={{ __html: html }} />
        </BlogContent>
    </Layout>

  )
}

const BlogContent = styled.section`
  width: 65ch;
`

const DateWrapper = styled(Paper)`
  margin: 0 0 1rem 0.8rem;
  height: fit-content;
  width: fit-content;
`

const Date = styled.h2`
  font-size: 1.2rem;
  font-weight: 900;
  letter-spacing: 1px;
  color: var(--background-color);
  margin: 0.6rem 1rem;
  
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
  
`

export default BlogTemplate