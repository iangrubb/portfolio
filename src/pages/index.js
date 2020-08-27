import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import styled, {css} from 'styled-components'

import Layout from "../components/siteStructure/layout"
import SEO from "../components/seo"

import Paper from "../components/paperCraft/paper"
import NavLink from '../components/paperCraft/constructions/navLink'

import Icon from '../components/paperCraft/constructions/logos/github'

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


const Box = styled.div`
  width: 400px;
  height: 400px;
  background: var(--background-color);
  border-radius: 8px;

  margin: 50px;

  padding: 60px;

  box-shadow: 2px 2px 0 var(--shadow);

`

const I = styled(Icon)`
  margin: 50px;
`


const Me = styled(Img)`
  width: 90%;

  clip-path: url(#hHex);


  
`

const Frame = styled(Paper)`
  width: 300px;
  height: 300px;
  margin: 50px;

  
`


const IndexPage = ({ data }) => {

  return (
  <>
    <SEO title="Home" />

{/* 

    <I/>
    <Box>
      <h1>Wow, an h1!</h1>
      <h2>(and an h2)</h2>
      <p>Here's a short paragraph, wrapped in a p tag. It goes on just long enough to fill up the space, so I can see how it looks. Just a bit longer now...</p>
    </Box>

    <Frame color="green" shape="hHex" >
      <Me fluid={data.file.childImageSharp.fluid} />
    </Frame> */}











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
        {/* <Apple color="pink" shape="apple" proportional/> */}
        <NavLink path="/projects" text="Projects" />
        {/* <Apple color="pink" shape="apple" proportional/> */}
        <NavLink path="/about" text="About" />       
      </Links>
      <Diamonds>
        {/* <Diamond color="green" shape="diamond" left={0} top={0} proportional/> */}
        {/* <Diamond color="green" shape="diamond" left={1} top={0} proportional/> */}
        {/* <Diamond color="green" shape="diamond" left={2} top={0} proportional/> */}
        {/* <Diamond color="green" shape="diamond" left={3} top={0} proportional/> */}
        <Diamond color="green" shape="diamond" left={4} top={0} proportional/>
        <Diamond color="green" shape="diamond" left={5} top={0} proportional/>
        <Diamond color="green" shape="diamond" left={6} top={0} proportional/>
        {/* <Diamond color="green" shape="diamond" left={7} top={0} proportional/> */}
        {/* <Diamond color="green" shape="diamond" left={8} top={0} proportional/> */}

        {/* <Diamond color="green" shape="diamond" left={0} top={1} proportional/> */}
        {/* <Diamond color="green" shape="diamond" left={1} top={1} proportional/> */}
        <Diamond color="green" shape="diamond" left={2} top={1} proportional/>
        <Diamond color="green" shape="diamond" left={3} top={1} proportional/>
        <Diamond color="green" shape="diamond" left={4} top={1} proportional/>
        <Diamond color="green" shape="diamond" left={5} top={1} proportional/>
        <Diamond color="green" shape="diamond" left={6} top={1} proportional/>
        <Diamond color="green" shape="diamond" left={7} top={1} proportional/>
        {/* <Diamond color="green" shape="diamond" left={8} top={1} proportional/> */}

        {/* <Diamond color="green" shape="diamond" left={0} top={2} proportional/> */}
        <Diamond color="green" shape="diamond" left={1} top={2} proportional/>
        <Diamond color="green" shape="diamond" left={2} top={2} proportional/>
        <Diamond color="green" shape="diamond" left={3} top={2} proportional/>
        <Diamond color="green" shape="diamond" left={4} top={2} proportional/>
        <Diamond color="green" shape="diamond" left={5} top={2} proportional/>
        <Diamond color="green" shape="diamond" left={6} top={2} proportional/>
        <Diamond color="green" shape="diamond" left={7} top={2} proportional/>
        {/* <Diamond color="green" shape="diamond" left={8} top={2} proportional/> */}

        <Diamond color="green" shape="diamond" left={0} top={3} proportional/>
        <Diamond color="green" shape="diamond" left={1} top={3} proportional/>
        <Diamond color="green" shape="diamond" left={2} top={3} proportional/>
        <Diamond color="green" shape="diamond" left={3} top={3} proportional/>
        <Diamond color="green" shape="diamond" left={4} top={3} proportional/>
        <Diamond color="green" shape="diamond" left={5} top={3} proportional/>
        {/* <Diamond color="green" shape="diamond" left={6} top={3} proportional/>
        <Diamond color="green" shape="diamond" left={7} top={3} proportional/> */}
        {/* <Diamond color="green" shape="diamond" left={8} top={3} proportional/> */}

        {/* <Diamond color="green" shape="diamond" left={0} top={4} proportional/> */}
        {/* <Diamond color="green" shape="diamond" left={1} top={4} proportional/> */}
        <Diamond color="green" shape="diamond" left={2} top={4} proportional/>
        <Diamond color="green" shape="diamond" left={3} top={4} proportional/>
        <Diamond color="green" shape="diamond" left={4} top={4} proportional/>
        {/* <Diamond color="green" shape="diamond" left={5} top={4} proportional/>
        <Diamond color="green" shape="diamond" left={6} top={4} proportional/> */}
        {/* <Diamond color="green" shape="diamond" left={7} top={4} proportional/> */}
        {/* <Diamond color="green" shape="diamond" left={8} top={4} proportional/> */}

        {/* <Diamond color="green" shape="diamond" left={0} top={5} proportional/> */}
        {/* <Diamond color="green" shape="diamond" left={1} top={5} proportional/>
        <Diamond color="green" shape="diamond" left={2} top={5} proportional/>
        <Diamond color="green" shape="diamond" left={3} top={5} proportional/>
        <Diamond color="green" shape="diamond" left={4} top={5} proportional/> */}
        {/* <Diamond color="green" shape="diamond" left={5} top={5} proportional/>
        <Diamond color="green" shape="diamond" left={6} top={5} proportional/>
        <Diamond color="green" shape="diamond" left={7} top={5} proportional/>
        <Diamond color="green" shape="diamond" left={8} top={5} proportional/> */}

        


      </Diamonds>

      {/* <Coral color="pink" shape="coral" proportional/> */}
     
    </LandingContent>

  </>
)}



const LandingContent = styled.div`

  

  display: grid;
  width: calc(100% - 300px);

  height: 100vh;
  grid-template-columns: 1fr 30% 30% 1fr;
  grid-template-rows: 1fr auto 30px auto 60px auto 50px 30px auto 1fr;

  grid-template-areas:
    ". . . ."
    ". eses seaweed ."
    ". . . ."
    "name name name name"
    "spacer spacer spacer spacer"
    "blurb blurb blurb blurb"
    "links links links links"
    ". . . ."
    ". diamonds diamonds ."
    ". . . ."
  ;

  /* display: none; */

  @media (min-width: 768px) {
    grid-template-columns: 1fr 300px 300px 1fr;
    grid-template-rows: 1fr auto 50px auto 90px auto 120px 20px auto 1fr;
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

  @media (min-width: 768px) {
    height: 40px;
    max-width: 200px;
  }
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
  width: 18px;
  @media (min-width: 340px) {
    width: 22px;
  }

  @media (min-width: 768px) {
    width: 26px;
  }
`

const Seaweed = styled(Paper)`
  grid-area: seaweed;
  place-self: end start;
  
  width: 80%;
  max-width: 100px;

  @media (min-width: 768px) {
    max-width: 140px;
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

  max-width: 120px;

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



const Diamonds = styled.div`
  display: none;
  grid-area: diamonds;
  place-self: start center;
  position: relative;
  
  width: 180px;
  height: 80px;

  @media (min-width: 768px) {
    width: 240px;
    height: 110px;
  }
`

const width = 10

const height = 16

const Diamond = styled(Paper)`
  width: ${width}%;
  position: absolute;


  
  left: ${props => (props.left + (props.top % 2 === 0 ? 0 : 0.5) )  * ( width + 1 )}%;
  top: ${props => -props.left + ( props.top * ( height + 1 ))}%;


  @media (min-width: 768px) {
  }
`


export default IndexPage