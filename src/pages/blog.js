import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/siteStructure/layout'
import SEO from "../components/seo"

import Paper from '../components/paperCraft/paper'

import styled from 'styled-components'

import BlogCard from '../components/display/blogCard'

export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {slug: {regex: "/blog/"}}}) {
      nodes {
        id
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          slug
          title
          subtitle
          abstract
        }
      }
    }
  }
`

const BlogPage = ({ data: { allMarkdownRemark: { nodes }}}) => {
 
  
    return (
        <Layout>
            <SEO title="Blog" />
            <Columns>

              <SideBar>
                <Bar color="purple" shape="rectangle" />
                <Blurb>
                  A place for my thoughts on tech, education, work, and full stack development.
                </Blurb>

                <Blurb>
                  Contact
                </Blurb>

                <Bar color="purple" shape="rectangle" />

              </SideBar>
              <Posts>
                {nodes.map(node => <BlogCard node={node} />)}
              </Posts>
            </Columns>
        </Layout>
    )
}

const Columns = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-areas: "main";

  @media (min-width: 768px) {
    width: 750px;
    grid-template-columns: 275px 450px;
    grid-gap: 25px;
    grid-template-areas: "side main";
  }
`

const SideBar = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-area: side;
    height: fit-content;
    position: sticky;
    top: 96px;
    margin: 64px 0 0 0;
  }
`


const Bar = styled(Paper)`
  width: 50%;
  height: 8px;
`

const Blurb = styled.p`
  margin: 16px 8px 16px 16px;
  font-size: 18px;
  line-height: 1.6rem;
`


const Posts = styled.div`
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
`




export default BlogPage
