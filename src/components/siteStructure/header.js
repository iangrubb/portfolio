import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'

import Paper from '../paperCraft/paper'
import NavLink from '../paperCraft/constructions/navLink'

const Header = () => (
  <Container>
  

    <MainContent>

      <NameContainer color="purple" shape="frame">
        <Link href="/">
          <Name>
            Ian Grubb
          </Name>
        </Link>
      </NameContainer>

      <Links>
        
        <NavLink path="/blog" text="Blog" />

        <Apple color="pink" shape="apple" proportional/>

        <NavLink path="/projects" text="Projects" />

        <Apple color="pink" shape="apple" proportional/>

        <NavLink path="/beef" text="About" />
      
      </Links>
    </MainContent>
    <BottomDivider color="green" shape="frame"/>
    
  </Container>
)

const Container = styled.header`

  background: var(--background-color);

  width: 100%;
  max-width: 1000px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  overflow: hidden;

  @media (min-width: 768px) {
    position: fixed;
    top: 0;
    z-index: 3;

    /* transition: top 0.2s ease;

    &:hover{
      top: 0;
    } */
  }
  
`

const Links = styled.nav`
  margin: 16px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BottomDivider = styled(Paper)`
  width: 90%;
  height: 10px;
`

const Apple = styled(Paper)`
  width: 16px;

  @media (min-width: 768px) {
    width: 20px;
  }
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  

  @media (min-width: 768px) {
    flex-direction: row;
    height: 90px;
  }

`

const NameContainer = styled(Paper)`
  width: fit-content;
  height: fit-content;
  margin: 32px 0 0 0;
  @media (min-width: 768px) {
    margin: 0 32px 0 0;
  }
`


const Name = styled.h1`
  margin: 8px 24px 4px 24px;
  font-size: 34px;
  color: var(--background-color);
`


export default Header
