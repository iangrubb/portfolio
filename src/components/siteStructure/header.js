import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'

import Paper from '../paperCraft/paper'
import NavLink from '../paperCraft/constructions/navLink'
import CloseLogo from '../paperCraft/constructions/logos/close'

const Header = ({display, setDisplay}) => {

  
  return (
  <Container display={display}>
    <MainContent>
      <TopContent>
        <Link to="/">
          <Name>
            Ian Grubb
          </Name>
        </Link>
        <Accent color="pink" shape="frame" />
        <Title>
          Full-Stack Developer
        </Title>
      </TopContent>
      <Links> 
        <NavLink path="/blog" text="Blog" />
        <Apple color="pink" shape="apple" proportional/>
        <NavLink path="/projects" text="Projects" />
        <Apple color="pink" shape="apple" proportional/>
        <NavLink path="/about" text="About" />
      </Links>
    </MainContent>
    <Close clickHandler={()=>setDisplay(false)}/>
    <BottomDivider color="purple" shape="frame"/>
  </Container>
  )
}

const Container = styled.header`

  position: relative;

  background: var(--background-color);

  width: 100%;

  position: fixed;

  transform: translateY(${props => props.display ? 0 : -100}%);
  transition: transform 0.4s ease, z-index 0.1s;
  z-index: ${props => props.display ? 6 : 5};
  /* Firefox made me do this, and I hate it */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  overflow: hidden;
`

const Accent = styled(Paper)`
  height: 6px;
  width: 120px;
  margin: 0 0 16px 8px;
  @media (min-width: 768px) {
    width: 180px;
    height: 8px;
  }
`

const Close = styled(CloseLogo)`
  position: absolute;
  top: 1vw;
  right: 2vw;
  width: 50px;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 70px;
  }
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 60px 0 0 0;
  

  @media (min-width: 768px) {
    margin: 40px 0 0 0;
  }
`

const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 30px;
`

const Name = styled.h1`
  margin: 0;
  font-size: 60px;
`

const Title = styled.h3`
  font-family: "Lato";
  font-size: 32px;
  font-weight: 400;
  margin: 0;
  white-space: nowrap;
  @media (min-width: 768px) {
    font-size: 38px;
  }
`

const Links = styled.nav`
  margin: 32px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Apple = styled(Paper)`
  width: 16px;

  @media (min-width: 768px) {
    width: 20px;
  }
`

const BottomDivider = styled(Paper)`
  width: 110%;
  height: 10px;
`







const Seaweed = styled(Paper)`
  width: 60px;
`



export default Header
