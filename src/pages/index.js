import React from "react"

import styled from 'styled-components'

import Layout from "../components/siteStructure/layout"
import SEO from "../components/seo"

import Paper from "../components/paperCraft/paper"
import NavLink from '../components/paperCraft/constructions/navLink'

const IndexPage = () => {
  return (
  <Layout minimal>
    <SEO title="Home" />
    <CenteredContent>
      <Info>
        <Seaweed color="green" shape="seaweed" proportional/>
        <Coral color="green" shape="coral" proportional />
        <Name>Ian Grubb</Name>
        <Paper color="pink" shape="spacer"/>
        <Title>Full Stack Developer</Title>
      </Info>
      <Links>
        <NavLink path="/blog" text="Blog" />
        <Apple color="pink" shape="apple" proportional/>
        <NavLink path="/projects" text="Projects" />
        <Apple color="pink" shape="apple" proportional/>
        <NavLink path="/beef" text="About" />       
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

const Seaweed = styled(Paper)`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  transform: translate(-110%, 5%);
  width: 180px;
`

const Coral = styled(Paper)`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  transform: translate(105%, 10%);
  width: 170px;
`



const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`


const Name = styled.h1`
  margin: 0 0 0.4rem 0;
  font-weight: 700;
  font-size: 4.8rem;
  line-height: 4.3rem;
`

const Title = styled.h2`
  margin: 0.6rem 0 0 0;
  font-family: "Lato";
  font-size: 2.8rem;
  font-weight: 400;
`

const Links = styled.div`
  margin: 2rem 0 0 0;
  display: flex;
  align-items: center;
`

const Apple = styled(Paper)`
    width: 24px;
`



export default IndexPage
