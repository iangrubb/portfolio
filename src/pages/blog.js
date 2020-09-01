import React from 'react'
import { graphql } from "gatsby"

import SEO from "../components/seo"

import Paper from '../components/paperCraft/paper'

import styled from 'styled-components'

import IndexPageCard from '../components/display/indexPageCard'

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {slug: {regex: "/blog/"}}}) {
      nodes {
        id
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
        }
      }
    }
  }
`

const BlogPage = ({ data: { allMarkdownRemark: { nodes }}}) => {
 
  return (
    <Container>
      <SEO title="Blog" />
      
      {nodes.map(node => {

        const { frontmatter } = node
        const { title, abstract, slug, hero } = frontmatter
        const [month, day, year] = frontmatter.date.split(" ")
        const fixedDay = day[0] === "0" ? day[1] + "," : day
        const formatedDate = [month, fixedDay, year].join(" ")

        return (
          <IndexPageCard key={slug} {...{hero, title, slug}}>
            
            <Abstract>{abstract}</Abstract>
            {/* <Date>{formatedDate}</Date> */}
          </IndexPageCard>
        )
      })}
    </Container>
  )
}

export default BlogPage

const Container = styled.div`

  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;

`


const Date = styled.p`
  /* font-family: var(--display-font); */
  /* font-weight: 700; */

  margin: 0;

  font-size: 18px;

  @media (min-width: 900px) {


}
`

const Abstract = styled.p`

  font-style: italic;
  margin: 0;

  @media (min-width: 900px) {
  }
`