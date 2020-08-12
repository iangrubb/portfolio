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
            <Background color="green" shape="seaweed" proportional/>
            <Columns>

              <SideBar>

                {/* <Box color="purple" shape="frame">
                  <Title>Recent Posts</Title>
                </Box> */}



                {/* <Bar color="purple" shape="rectangle" /> */}


                <Blurb color="purple" shape="frame">
                  <BlurbText>A blog about</BlurbText>
                </Blurb>

                <Blurb color="pink" shape="frame">
                <BlurbText>code</BlurbText>
                </Blurb>


              </SideBar>
              <Posts>
                {nodes.map(node => <BlogCard key={node.id} node={node} />)}
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
  padding: 0 20px;

  position: relative;

  @media (min-width: 768px) {
    width: 800px;
    max-width: 100%;
    grid-template-columns: 200px 525px;
    grid-gap: 25px;
    grid-template-areas: "side main";
  }
`

const Background = styled(Paper)`
  position: sticky;
  top: 300px;
  width: 500px;
  max-width: 100%;

`

const SideBar = styled.div`
  display: none;
  @media (min-width: 768px) {
    position: sticky;
    top: 200px;

    display: flex;
    flex-direction: column;
    align-items: center;
    grid-area: side;
    height: fit-content;
    margin: 32px 0 0 0;
  }
`

const Bar = styled(Paper)`
  width: 50%;
  height: 8px;
`

const Blurb = styled(Paper)`
  margin: 0 0 8px 0;
  align-self: flex-end;
  width: fit-content;
  height: fit-content;
`

const BlurbText = styled.p`
  margin: 4px 8px;
  font-size: 20px;
  color: var(--background-color);
  font-family: "Vollkorn";
  font-weight: 700;
  line-height: 1.6rem;
`

const Box = styled(Paper)`
  width: fit-content;
  height: fit-content;
`

const Title = styled.h2`
  margin: 6px 8px 4px 8px;
  color: var(--background-color);
`


const Posts = styled.div`
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: center;
`




export default BlogPage
