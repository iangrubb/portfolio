import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import styled from 'styled-components'

import Layout from "../components/siteStructure/layout"
import SEO from "../components/seo"

import Paper from "../components/paperCraft/paper"
import NavLink from '../components/paperCraft/constructions/navLink'

export const query = graphql`
  query {
    file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 450) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  console.log(data)
  return (
  <Layout minimal>
    <SEO title="Home" />

    <LandingContent>
      <Eses>
        <Es color="pink" shape="weirdS" width={28} right={41} bottom={-4} proportional/>
        <Es color="green" shape="weirdS" width={33} right={22} bottom={-2} proportional/>
        <Es color="purple" shape="weirdS" width={38} right={0} bottom={0} proportional/>
      </Eses>
      <Seaweed color="green" shape="seaweed" proportional/>
      <Name>Ian Grubb</Name>
      <Spacer color="pink" shape="spacer" />
      <Blurb>Full-Stack Developer</Blurb>
      <Links>
        <NavLink path="/blog" text="Blog" />
        <Apple color="pink" shape="apple" proportional/>
        <NavLink path="/projects" text="Projects" />
        <Apple color="pink" shape="apple" proportional/>
        <NavLink path="/about" text="About" />       
      </Links>
      <Diamonds>
        <Diamond color="green" shape="diamond" left={34} top={8} proportional/>
        <Diamond color="green" shape="diamond" left={58} top={4} proportional/>
        <Diamond color="green" shape="diamond" left={82} top={0} proportional/>

        <Diamond color="green" shape="diamond" left={22} top={30} proportional/>
        <Diamond color="green" shape="diamond" left={46} top={26} proportional/>
        <Diamond color="green" shape="diamond" left={70} top={22} proportional/>

        <Diamond color="green" shape="diamond" left={34} top={48} proportional/>
        <Diamond color="green" shape="diamond" left={58} top={44} proportional/>
        <Diamond color="green" shape="diamond" left={82} top={40} proportional/>

        <Diamond color="green" shape="diamond" left={22} top={70} proportional/>
        <Diamond color="green" shape="diamond" left={46} top={66} proportional/>
        <Diamond color="green" shape="diamond" left={70} top={62} proportional/>

        <Diamond color="green" shape="diamond" left={34} top={88} proportional/>


      </Diamonds>

      <Coral color="pink" shape="coral" proportional/>
     
    </LandingContent>

  </Layout>
)}


const LandingContent = styled.div`

  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: 1fr 30% 30% 1fr;
  grid-template-rows: 1fr auto 30px auto 60px auto 50px 15px auto 1fr;

  grid-template-areas:
    ". . . ."
    ". eses seaweed ."
    ". . . ."
    "name name name name"
    "spacer spacer spacer spacer"
    "blurb blurb blurb blurb"
    "links links links links"
    ". . . ."
    ". coral diamonds ."
    ". . . ."
  ;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 300px 300px 1fr;
    grid-template-rows: 1fr auto 50px auto 80px auto 100px 20px auto 1fr;
  }

`

const Name = styled.h1`
  grid-area: name;
  place-self: center;
  text-align: center;
  margin: 0 32px;
  font-weight: 900;
  font-size: 60px;
  line-height: 50px;
  @media (min-width: 768px) {
    font-size: 80px;
    margin: 0;
  }
`

const Spacer = styled(Paper)`
  grid-area: spacer;
  place-self: center;
  width: 40%;
  max-width: 140px;
  height: 30px;
`

const Blurb = styled.p`
  grid-area: blurb;

  max-width: 400px;
  margin: 8px 32px 16px 32px;
  place-self: center;
  text-align: center;

  font-family: "Lato";
  font-size: 28px;
  line-height: 28px;

  @media (min-width: 768px) {
    font-size: 42px;
    margin: 0;
  }
`


const Links = styled.div`
  grid-area: links;
  place-self: center;

  display: flex;
  align-items: center;
`

const Apple = styled(Paper)`
  width: 16px;
  @media (min-width: 340px) {
    width: 24px;
  }
`

const Seaweed = styled(Paper)`
  grid-area: seaweed;
  place-self: end start;
  
  width: 70%;
  max-width: 100px;

  @media (min-width: 768px) {
    max-width: 120px;
  }
`

const Eses = styled.div`
  grid-area: eses;
  place-self: center end;
  display: flex;
  align-items: flex-end;
  
  position: relative;

  width: 80%;
  height: 80%;

  max-width: 100px;

  @media (min-width: 768px) {
    max-width: 150px;
  }
`

const Es = styled(Paper)`
  width: ${props => props.width}%;
  position: absolute;
  right: ${props => props.right}%;
  bottom: ${props => props.bottom}%;

  @media (min-width: 768px) {
    width: ${props => `calc(${props.width} * 1.4)`};
    left: ${props => `calc(${props.left} * 1.4)`};
    top: ${props => `calc(${props.left}/8)`};
  }
`

const Coral = styled(Paper)`
  grid-area: coral;
  place-self: start end;
  
  margin: 0 20px 0 0;
  width: 80%;
  max-width: 90px;

  @media (min-width: 768px) {
    max-width: 100px;
    margin: 0 30px 0 0;
  }

`


const Diamonds = styled.div`
  grid-area: diamonds;
  place-self: start start;
  position: relative;

  margin: 16px 0 0 -10px;
  
  width: 120px;
  height: 80px;

  @media (min-width: 768px) {
    height: 100px;
    width: 140px;
  }
`

const Diamond = styled(Paper)`
  width: 14%;
  position: absolute;
  left: ${props => -10 + ( props.left * 1)}%;
  top: ${props => 0 + ( props.top * 0.6)}%;
  @media (min-width: 768px) {
    width: 15%;
    top: ${props => props.top * 0.7}%;
  }
`


export default IndexPage