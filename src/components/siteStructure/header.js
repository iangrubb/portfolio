import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'

import Paper from '../paperCraft/paper'
import NavLink from '../paperCraft/constructions/navLink'

const Header = () => (
  <Container>
  
    <Links>
      <NameRegion>
        <Name color="purple" shape="hHex">
            <LandingLink to="/">Ian Grubb</LandingLink>
        </Name>
      </NameRegion>

      <MainRegion>
        <Dot color="pink" shape="dot" proportional/>

        <NavLink path="/blog" text="Blog" />

        <Dot color="pink" shape="dot" proportional/>

        <NavLink path="/projects" text="Projects" />

        <Dot color="pink" shape="dot" proportional/>

        <NavLink path="/beef" text="About" />
      </MainRegion>
    </Links>

    <BottomDivider color="green" shape="spacer"/>
    
  </Container>
)

const Container = styled.header`
  margin: 1rem 0 2rem 0;
  width: 800px;

  display: flex;
  flex-direction: column;
  align-items: center;
  
`

const Links = styled.div`
  position: relative;

  padding: 0 2rem;
  margin: 1rem 0;

  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const MainRegion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
`

const StyledLink = styled(Link)`
  position: relative;

  margin: 0.6rem 0.8rem;
  
  font-family: "Vollkorn";
  font-weight: 900;
  font-size: 1.2rem;
  letter-spacing: 1px;
`

const BottomDivider = styled(Paper)`

  width: 50%;
  height: 30px;

  position: relative;
  top: -20px;

`

const Dot = styled(Paper)`
  width: 15px;
  height: 15px;
`

const NameRegion = styled.div`

  position: relative;

`

const Name = styled(Paper)`
  height: fit-content;
  margin: 0 0.4rem;
  color: var(--background-color);
  position: relative;

`

const Seaweed = styled(Paper)`
  width: 240px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-20%, -60%);
`


const LandingLink = styled(StyledLink)`
  padding: 0.2rem 0;
  font-size: 2rem;
  text-align: center;
  line-height: 2rem;
`




export default Header
