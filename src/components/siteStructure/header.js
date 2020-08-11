import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'

import Paper from '../paperCraft/paper'
import NavLink from '../paperCraft/constructions/navLink'

const Header = () => (
  <Container>
  

    <MainContent>


      <LeftContent>
        {/* <NameContainer color="purple" shape="rectangle"> */}
          <Link href="/">
            <Name>
              Ian Grubb
            </Name>
          </Link>
        {/* </NameContainer> */}
        <Spacer color="pink" shape="rectangle" />
        {/* <TitleContainer color="pink" shape="rectangle"> */}
          <Title>
            Full Stack Developer
          </Title>
        {/* </TitleContainer> */}
      </LeftContent>

      

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

const TitleContainer = styled(Paper)`
  width: fit-content;
  height: fit-content;
  position: relative;
  left: 24px;
`

const Title = styled.h3`
  /* color: var(--background-color); */
  font-family: "Lato";
  margin: 8px 16px 6px 16px;
  font-size: 22px;
  font-weight: 400;
  margin: 0;
`

const Spacer = styled(Paper)`
  width: 60%;
  height: 6px;
  margin: 0 0 8px 0;
`

const Container = styled.header`

  background: var(--background-color);

  width: 100%;
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  overflow: hidden;

  @media (min-width: 768px) {
    position: fixed;
    top: 0;
    z-index: 3;
/* 
    transition: top 0.2s ease;

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
  @media (min-width: 768px) {
    align-self: flex-end;
  }
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

  position: relative;
  

  @media (min-width: 768px) {
    padding: 0 8%;
    justify-content: space-between;
    flex-direction: row;
    height: 180px;
  }

`

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px 0 0 0;
  @media (min-width: 768px) {
    margin: 0;
  }
`

const NameContainer = styled(Paper)`
  width: fit-content;
  height: fit-content;
`


const Name = styled.h1`
  margin: 9px 20px 5px 20px;
  font-size: 46px;
  font-weight: 900;
  margin: 0;
  /* color: var(--background-color); */
`


export default Header
