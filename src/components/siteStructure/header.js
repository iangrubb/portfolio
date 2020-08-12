import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'

import Paper from '../paperCraft/paper'
import NavLink from '../paperCraft/constructions/navLink'

const Header = () => {

  
  return (
  <Container >
    <MainContent>
      <TopContent>
        <Link to="/">
          <Name>
            Ian Grubb
          </Name>
        </Link>
        <Title>
          Full Stack Developer
        </Title>
      </TopContent>
      <Links> 
        <NavLink path="/blog" text="Blog" />
        <Apple color="pink" shape="apple" proportional/>
        <NavLink path="/projects" text="Projects" />
        <Apple color="pink" shape="apple" proportional/>
        <NavLink path="/beef" text="About" />
      </Links>
    </MainContent>
    {/* <BottomDivider color="green" shape="frame"/> */}
  </Container>
  )
}

const Container = styled.header`


  background: var(--background-color);

  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  overflow: hidden;

  display: none;
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 30px 0 0 0;
  

  @media (min-width: 768px) {
    /* flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 900px; */
  }
`

const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
  margin: 0 30px;
`

const Name = styled.h1`
  margin: 0;
  font-size: 60px;
`

const Title = styled.h3`
  font-family: "Lato";
  font-size: 28px;
  font-weight: 400;
  margin: 0;
  white-space: nowrap;
`

const Links = styled.nav`
  margin: 16px 30px;
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
