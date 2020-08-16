import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import styled from 'styled-components'

import Layout from "../components/siteStructure/layout"
import SEO from "../components/seo"

import Paper from "../components/paperCraft/paper"
import NavLink from '../components/paperCraft/constructions/navLink'
import FrameBox from '../components/display/frameBox'

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
        <Es color="pink" shape="weirdS" width="36px" left="0" proportional/>
        <Es color="green" shape="weirdS" width="42px" left="-20px" proportional/>
        <Es color="purple" shape="weirdS" width="48px" left="-42px" proportional/>
      </Eses>
      <Seaweed color="green" shape="seaweed" proportional/>
      <Name>Ian Grubb</Name>
      <Spacer color="pink" shape="spacer" />
      <Blurb>Welcome! I'm a Full-Stack Developer based in Brooklyn, NY</Blurb>
      <Links>
        <NavLink path="/blog" text="Blog" />
        <Apple color="pink" shape="apple" proportional/>
        <NavLink path="/projects" text="Projects" />
        <Apple color="pink" shape="apple" proportional/>
        <NavLink path="/beef" text="About" />       
      </Links>
      <Diamonds>
        <Diamond color="purple" shape="diamond" left={10} top={12} proportional/>
        <Diamond color="purple" shape="diamond" left={34} top={8} proportional/>
        <Diamond color="purple" shape="diamond" left={58} top={4} proportional/>
        <Diamond color="purple" shape="diamond" left={82} top={0} proportional/>

        <Diamond color="purple" shape="diamond" left={-2} top={34} proportional/>
        <Diamond color="purple" shape="diamond" left={22} top={30} proportional/>
        <Diamond color="purple" shape="diamond" left={46} top={26} proportional/>
        <Diamond color="purple" shape="diamond" left={70} top={22} proportional/>

        <Diamond color="purple" shape="diamond" left={34} top={48} proportional/>
        <Diamond color="purple" shape="diamond" left={58} top={44} proportional/>
        <Diamond color="purple" shape="diamond" left={82} top={40} proportional/>

        <Diamond color="purple" shape="diamond" left={22} top={70} proportional/>
        <Diamond color="purple" shape="diamond" left={46} top={66} proportional/>


      </Diamonds>
      <Coral color="green" shape="coral" proportional />
    </LandingContent>

  </Layout>
)}


const LandingContent = styled.div`

  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-columns: 1fr auto 30px auto 1fr;
  grid-template-rows: 1fr auto 20px auto 60px auto 50px 20px auto 1fr;

  grid-template-areas:
    ". . . . ."
    ". seaweed . eses ."
    ". . . . ."
    "name name name name name"
    "spacer spacer spacer spacer spacer"
    "blurb blurb blurb blurb blurb"
    "links links links links links"
    ". . . . ."
    " . diamonds diamonds coral ."
    ". . . . ."
  ;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 200px 100px 200px 1fr;
    grid-template-rows: 1fr auto 50px auto 60px auto 80px 10px auto 1fr;
    grid-template-areas:
      ".       .      .       .         .       "
      "eses    eses   .       .         .       "
      "seaweed .      .       .         .       "
      "seaweed name   name    name      .        "
      "seaweed spacer spacer  spacer    .        "
      "seaweed blurb  blurb   blurb     coral   "
      ".       .      links   .         coral    "
      ".        .     .       .         coral    "
      ".       .      .       diamonds  diamonds"
      ".       .      .       .         .       "
    ;
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
    margin: 0 0 24px 0;
  }
`

const Spacer = styled(Paper)`
  grid-area: spacer;
  place-self: center;
  width: 80%;
  max-width: 320px;
  height: 45px;
`

const Blurb = styled.p`
  grid-area: blurb;

  max-width: 400px;
  margin: 8px 32px 16px 32px;
  place-self: center;
  text-align: center;

  font-family: "Lato";
  font-size: 22px;
  line-height: 28px;

  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 38px;
    max-width: 450px;
    margin: 16px 0;
  }
`


const Links = styled.div`
  grid-area: links;
  place-self: center;

  display: flex;
  /* flex-direction: column; */
  align-items: center;
`

const Apple = styled(Paper)`
    /* display: none; */
    width: 16px;
    @media (min-width: 340px) {
      display: block;
      width: 20px;
    }
`

const Seaweed = styled(Paper)`
  grid-area: seaweed;
  place-self: center start;
  
  width: 25vw;
  max-width: 110px;

  @media (min-width: 768px) {
    place-self: center end;
    max-width: 150px;
    position: relative;
    left: 10px;
  }
`

const Eses = styled.div`
  grid-area: eses;
  place-self: end start;
  display: flex;
  align-items: flex-end;
  margin: 0 -40px 24px 0;

  @media (min-width: 768px) {
    margin: 0 -10px 0 0;
    place-self: end end;
  }
`

const Es = styled(Paper)`
  width: ${props => props.width};
  position: relative;
  left: ${props => props.left};
  top: ${props => `calc(${props.left}/8)`};

  @media (min-width: 768px) {
    width: ${props => `calc(${props.width} * 1.4)`};
    left: ${props => `calc(${props.left} * 1.4)`};
    top: ${props => `calc(${props.left}/8)`};
  }
`

const Coral = styled(Paper)`
  grid-area: coral;
  place-self: center;
  width: 100px;
  @media (min-width: 768px) {
    place-self: center start;
    width: 130px;
    position: relative;
    left: -10px;
  }
`

const Diamonds = styled.div`
  grid-area: diamonds;
  position: relative;
  @media (min-width: 768px) {
    width: 200px;
    height: 100px;
    place-self: center start;
  }
`

const Diamond = styled(Paper)`
  width: 16%;
  position: absolute;
  left: ${props => props.left}%;
  top: ${props => props.top}%;
  @media (min-width: 768px) {
    left: ${props => props.left * 1.1}%;
    top: ${props => props.top * 1.2}%;
  }
`


export default IndexPage