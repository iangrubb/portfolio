import React from "react"
import { Link } from "gatsby"

import styled from 'styled-components'

import Layout from "../components/siteStructure/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Paper from "../components/paperCraft/paper"
import PaperButton from "../components/paperCraft/constructions/paperButton"

const IndexPage = () => {
  return (
  <Layout minimal>
    <SEO title="Home" />
    <CenteredContent>
      <Info>
        <Name>Ian Grubb</Name>
        <Paper color="red" shape="spacer"/>
        <Title>Full Stack Developer</Title>
      </Info>
      <Links>
        <PaperButton color="red">
          <StyledLink to="/blog">Blog</StyledLink>
        </PaperButton>
        <PaperButton color="red">
          <StyledLink to="/projects">Projects</StyledLink>
        </PaperButton>
        <PaperButton color="red">
          <StyledLink>About</StyledLink>
        </PaperButton>
        <PaperButton color="red">
          <StyledLink>Contact</StyledLink>
        </PaperButton>
        
      </Links>
    </CenteredContent>
  </Layout>
)}

const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Name = styled.h1`
  margin: 0;
  font-weight: 700;
  font-size: 4.8rem;
  line-height: 4.3rem;
`

const Title = styled.h2`
  margin: 0;
  font-family: "Open Sans";
  font-size: 2.8rem;
  font-weight: 400;
`

const Links = styled.div`
  margin: 2em 0 0 0;
  
  display: flex;
  
`

const StyledLink = styled(Link)`
  padding: 16px 32px;
  font-family: "Vollkorn";
  font-weight: 900;
  font-size: 1.6rem;

`

export default IndexPage
