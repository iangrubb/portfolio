import React, { useContext } from "react"
import { graphql } from "gatsby"

import styled from 'styled-components'

import SEO from "../components/seo"

import Paper from "../components/paperCraft/paper"
import NavLink from '../components/paperCraft/constructions/navLink'

import { DisplayContext } from "../context/displayContext"

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

const IndexPage = () => {

  const { defaultDisplay } = useContext(DisplayContext)

  return (
  <>
    <SEO title="Home" />


    <LandingContent defaultDisplay={defaultDisplay} >
      <Eses>
        <Es color="pink" shape="weirdS" width={28} right={41} bottom={-4} proportional/>
        <Es color="green" shape="weirdS" width={33} right={22} bottom={-2} proportional/>
        <Es color="purple" shape="weirdS" width={38} right={0} bottom={0} proportional/>
      </Eses>
      <Seaweed color="green" shape="seaweed" proportional/>
      <Name>Ian Grubb</Name>
      <Spacer color="pink" shape="spacer" />
      <Title>Full Stack Developer</Title>
      <Links>
        <NavLink path="/blog" text="Blog" />
        <NavLink path="/portfolio" text="Portfolio" />
        <NavLink path="/about" text="About" />       
      </Links>
      <Spiral color="green" shape="spiral" proportional />
      <Scoop color="pink" shape="scoop" proportional />
     
    </LandingContent>

  </>
)}



const LandingContent = styled.div`

  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: grid;

  width: 70%;
  min-width: 320px;

  grid-template-columns: 1fr 20% 20% 20% 20% 1fr;
  grid-template-rows: 1fr auto 30px auto 50px auto auto 1fr;

  grid-template-areas:
    ". . . . . ."
    ". eses eses seaweed seaweed ."
    ". . . . . ."
    "name name name name name name"
    "spacer spacer spacer spacer spacer spacer"
    "blurb blurb blurb blurb blurb blurb"
    "spiral spiral links links scoop scoop"
    ". . . . . ."
  ;

  @media (min-width: 500px) {

    width: fit-content;

    grid-template-rows: 1fr auto 30px auto 50px auto auto 20px auto 1fr;

    grid-template-areas:
      ". . . . . ."
      ". eses eses seaweed seaweed ."
      ". . . . . ."
      "name name name name name name"
      ". spacer spacer spacer spacer ."
      ". blurb blurb blurb blurb ."
      ". . links links . ."
      ". . . . . ."
      ". spiral spiral scoop scoop ."
      ". . . . . ."
    ;
  }

  @media (min-width: 900px) {

    width: fit-content;

    grid-template-columns: 1fr 100px 200px 200px 100px 1fr;
    grid-template-rows: 1fr auto 50px auto 90px auto 120px auto 1fr;

    grid-template-areas:
      ". . . . . ."
      ". eses eses seaweed seaweed ."
      ". . . . . ."
      "name name name name name name"
      ". spacer spacer spacer spacer ."
      ". blurb blurb blurb blurb ."
      ". . links links . ."
      ". spiral spiral scoop scoop ."
      ". . . . . ."
    ;


    transform: translate(${props => props.defaultDisplay ? "calc(-150px - 50%)" : "-50%"} , -50%);
    
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
  @media (min-width: 900px) {
    font-size: 80px;
    margin: 0;
  }
`

const Spacer = styled(Paper)`
  grid-area: spacer;
  place-self: center;
  width: 40%;
  max-width: 140px;
  height: 40px;

  @media (min-width: 900px) {
    height: 40px;
    max-width: 200px;
  }
`

const Title = styled.p`
  grid-area: blurb;

  max-width: 400px;
  margin: 0 4px 16px 4px;
  place-self: center;
  text-align: center;

  font-family: "Lato";

  font-size: 28px;
  line-height: 32px;

  @media (min-width: 900px) {
    width: fit-content;
    font-size: 42px;
    margin: 0;
  }
`


const Links = styled.div`
  grid-area: links;
  place-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;


  @media (min-width: 500px) {
    flex-direction: row;
  }
`


const Spiral = styled(Paper)`
  grid-area: spiral;
  place-self: center center;
  
  width: 70%;

  @media (min-width: 500px) {
    max-width: 90px;
    place-self: center end;
    margin: 8px 16px 0 0;
  }

  @media (min-width: 900px) {
    max-width: 100px;
    margin: 0 16px 0 0;
  }

`

const Scoop = styled(Paper)`
  grid-area: scoop;
  
  place-self: start center;
  margin: 16px 0 0 0;

  width: 60%;

  @media (min-width: 500px) {
    max-width: 80px;
    margin: 0 0 0 16px;
    place-self: start start;
  }

  @media (min-width: 900px) {
    max-width: 100px;
    margin: 8px 0 0 16px;

  }

  
`

const Seaweed = styled(Paper)`
  grid-area: seaweed;
  place-self: end start;
  
  width: 90%;
  max-width: 130px;

  @media (min-width: 900px) {
    max-width: 170px;
  }
`

const Eses = styled.div`
  grid-area: eses;
  place-self: center end;
  display: flex;
  align-items: flex-end;
  
  position: relative;

  width: 100%;
  height: 80%;

  max-width: 150px;

  @media (min-width: 900px) {
    max-width: 190px;
  }
`

const Es = styled(Paper)`
  width: ${props => props.width}%;
  position: absolute;
  right: ${props => props.right}%;
  bottom: ${props => props.bottom}%;

  @media (min-width: 900px) {
    width: ${props => `calc(${props.width} * 1.4)`};
    left: ${props => `calc(${props.left} * 1.4)`};
    top: ${props => `calc(${props.left}/8)`};
  }
`





export default IndexPage