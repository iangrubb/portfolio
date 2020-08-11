import React from 'react'
import { graphql, Link } from "gatsby"
import styled from 'styled-components'

import Layout from '../components/siteStructure/layout'
import SEO from "../components/seo"

import Paper from '../components/paperCraft/paper'

import GatsbyLogo from '../components/paperCraft/constructions/logos/gatsby'
import HTMLLogo from '../components/paperCraft/constructions/logos/htmlLogo'
import CSSLogo from '../components/paperCraft/constructions/logos/cssLogo'
import JSLogo from '../components/paperCraft/constructions/logos/jsLogo'
import ReactLogo from '../components/paperCraft/constructions/logos/reactLogo'
import ReduxLogo from '../components/paperCraft/constructions/logos/reduxLogo'
import StyledComponentsLogo from '../components/paperCraft/constructions/logos/styledComponentsLogo'
import GraphQLLogo from '../components/paperCraft/constructions/logos/graphQLLogo'
import RubyLogo from '../components/paperCraft/constructions/logos/ruby'
import RailsLogo from '../components/paperCraft/constructions/logos/rails'
import ElixirLogo  from '../components/paperCraft/constructions/logos/elixir'
import PhoenixLogo from '../components/paperCraft/constructions/logos/phoenix'


export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {slug: {regex: "/projects/"}}}) {
      nodes {
        id
        frontmatter {
          slug
          title
        }
      }
    }
  }
`

const ProjectsPage = ({ data: { allMarkdownRemark: { nodes }}}) => {

  const projectOrder = ["Word Maze", "Natural", "Portfolio", "Styled Poker", "Pokemon Team Builder", "Ruby Enumerator Cards", "Space Bar", "Pokemon Fallout"]

    return (
        <Layout>
            <SEO title="Projects" />

            <Frame >
              <GatsbyLogo/>
              <HTMLLogo />
              <CSSLogo />
              <JSLogo />
              <ReactLogo />
              <ReduxLogo />
              <StyledComponentsLogo />
              <GraphQLLogo />
              <RubyLogo />
              <RailsLogo />
              <ElixirLogo />
              <PhoenixLogo />
            </Frame>

            {/* <LogoDisplay>
              <GatsbyLogo/>
              <h4>Gatsby</h4>
            </LogoDisplay>
            <LogoDisplay>
              <StyledComponentsLogo/>
              <h4>Styled Components</h4>
            </LogoDisplay> */}

            {projectOrder.map(title => {
              const node = nodes.find(n => n.frontmatter.title === title)
              
              return (
                <Post key={node.id}>
                    <h2>{node.frontmatter.title}</h2>
                    <small>{node.frontmatter.date}</small>
                    <Link to={node.frontmatter.slug}>Learn More</Link>
                </Post>
              )
            })}
        </Layout>
    )
}

const LogoDisplay = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  border: 1px solid red;

  padding: 16px 8px;

  width: 120px;

  & > div {
    width: 100px;
  }

  & > h4 {
    margin: 8px 0 0 0;
    text-align: center;
  }

`

const Post = styled.div`
  
  margin: 3em 0;

  width: 500px;
  height: 300px;

  padding: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const Frame = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > * {
    width: 90px;
  }
`


export default ProjectsPage
