import React, { useContext } from 'react'
import { Link } from "gatsby"

import styled from 'styled-components'

import { DisplayContext } from "../../context/displayContext"

import Paper from '../paperCraft/paper'

import SocialLinks from './socialLinks'
import SideLink from './sideLink'

import GatsbyLogo from '../paperCraft/constructions/logos/gatsby'



const SideBar = ({ path }) => {

    const { defaultDisplay, toggleDefaultDisplay } = useContext(DisplayContext) 


    const renderContents = () => (
        <>
            <Button onClick={toggleDefaultDisplay} hide={path === "/"} defaultDisplay={defaultDisplay}>
                <Hamburger color="purple">
                    <HamburgerInner color="tan">
                        <HamburgerLine color="purple" noShadow/>
                        <HamburgerLine color="purple" noShadow/>
                        <HamburgerLine color="purple" noShadow/>
                    </HamburgerInner>
                </Hamburger>
            </Button>

            <HeaderLink to="/">
                <NameWrapper color="purple" shape="frame" fit>
                    <Name>Ian Grubb</Name>
                </NameWrapper>
                <TitleWrapper color="pink" shape="frame" fit>
                    <Title>Full Stack Developer</Title>
                </TitleWrapper>
            </HeaderLink>
            
            <Links>
                <SideLink active={path.startsWith("/blog")} path="/blog" name="Blog"/>
                <SideLink active={path.startsWith("/portfolio")} path="/portfolio" name="Portfolio" />
                <SideLink active={path.startsWith("/about")} path="/about" name="About" />
            </Links>

            <Social>

                <Spacer color="pink" shape="spacer" proportional />
                
                <SocialLinks />  

                <EmailWrapper color="purple" shape="frame" fit>
                    <Email href="mailto:hi@iangrubb.com">hi@iangrubb.com</Email>
                </EmailWrapper>

                <Spacer color="pink" shape="spacer" proportional />

            </Social>



            <GatsbyLink href="https://www.gatsbyjs.org" target="_blank" title="Gatsby JS">
                <MadeWith color="purple" shape="frame" fit>
                    <Text>built with Gatsby</Text>
                    <CopyText> © {new Date().getFullYear()}</CopyText>
                </MadeWith>
                <PlacedGatsbyLogo />
            </GatsbyLink>
        </>
    )

    return (
        <Container hide={path === "/"} defaultDisplay={defaultDisplay}>

            <Screen defaultDisplay={defaultDisplay} onClick={toggleDefaultDisplay} />

            <DesktopMain>
                {renderContents()}
            </DesktopMain>

            <MobileMain color="tan">
                <MobileBackground>
                    {renderContents()}
                </MobileBackground>
            </MobileMain>
            
                 
        </Container>
    )
}



export default SideBar

const Container = styled.div`

    position: fixed;
    
    z-index: 2;

    top: 0;
    left: 0;

    
    height: 100vh;
    width: 100vw;

    @media (min-width: 900px) {
        width: 300px;
    }

    @media (min-width: 1200px) {
        width: 375px;
    }

    @media (min-width: 1500px) {
        width: 450px;
    }


   
    display: grid;

    transform: translateX(${props => props.defaultDisplay ? '-100%' : '0'});
    
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto 1fr;
    grid-template-areas:
        "."
        "main"
        "."
    ;

    justify-items: center;


    @media (min-width: 900px) {
        display: ${props => props.hide ? "none" : "grid"};
        
        transition: transform var(--desktop-duration) ease;
        justify-items: end;
        transform: translateX(${props => !props.defaultDisplay ? '-100%' : '0'});
    }

`


const Screen = styled.div`

    display: ${props => props.defaultDisplay ? "none" : "block"};

    background: var(--tint);

    position: fixed;

    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;


    @media ( min-width: 900px) {
        display: none;
    }

`

const DesktopMain = styled.div`

    display: none;

    position: relative;
    z-index: 3;

    grid-area: main;

    width: 300px;
    height: 100vh;
    max-height: 750px;

    padding: 16px;

    @media (min-width: 900px) {
        display: flex;
        padding: 16px 16px 16px 32px;
    }
    
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`

const MobileMain = styled(Paper)`

    position: relative;
    z-index: 3;

    grid-area: main;

    width: 300px;
    height: calc(100vh - 32px);
    max-height: 750px;

    margin: 16px 0;

    padding: 8px;

    display: block;

    @media (min-width: 900px) {
        display: none;
    }

`

const MobileBackground = styled.div`
    background: var(--background-color);

    padding: 16px;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`



const Button = styled.button`

    width: 36px;
    height: 36px;
    margin: 8px 0 0 0;

    @media (min-height: 750px) {
        width: 40px;
        height: 40px;
        margin: 24px 0 0 0;
    }

    padding: 0;
    border: none;
    border-radius: 8px;

    

    cursor: pointer;

    &:hover, &:focus {
        transform: scale(1.15);
    }

    &:active {
        transform: scale(1.1) translateY(2px);
    }

    &:focus {
        outline: none;
    }

    align-self: flex-end;

    position: relative;

    top: ${props => props.defaultDisplay ? "-24px" : "-4px"};
    right: ${props => props.defaultDisplay && !props.hide ? "calc(((-100vw + 300px ) / 2) - 76px)" : "0"};

    @media (min-height: 750px) {
        top: ${props => props.defaultDisplay ? "calc( (-100vh + 750px) / 2)" : "0"};
        right: ${props => props.defaultDisplay && !props.hide ? "calc(((-100vw + 300px ) / 2) - 100px)" : "0"};
    }

    @media (min-width: 900px) {
        top: 0;
        transition: transform 0.1s ease, right var(--desktop-duration) ease, top var(--desktop-duration) ease;
        right: ${props => !props.defaultDisplay && !props.hide ? -76 : 0}px;
    }

    @media (min-height: 750px) and (min-width: 900px) {
        top: ${props => !props.defaultDisplay ? "calc( (-100vh + 750px) / 2)" : "0"};
        right: ${props => !props.defaultDisplay && !props.hide ? -100 : 0}px;
    }

    

    
`

const Hamburger = styled(Paper)`
    width: 100%;
    height: 100%;


    display: flex;
    justify-content: center;
    align-items: center;
`

const HamburgerInner = styled(Paper)`
    width: 80%;
    height: 80%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const HamburgerLine = styled(Paper)`
    width: 70%;
    height: 4px;

    @media (min-height: 750px) {
        height: 5px;
    }
`

const HeaderLink = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
`


const NameWrapper = styled(Paper)`
    margin: 0 0 4px 0;
`

const Name = styled.h1`
    text-align: center;
    color: var(--background-color);

    margin: 8px 12px 1px 12px;
    font-size: 32px;

    @media (min-height: 750px) {
        margin: 10px 16px 2px 16px;
        font-size: 42px;
    }
`

const TitleWrapper = styled(Paper)`
`

const Title = styled.h2`
    
    text-align: center;
    color: var(--background-color);

    margin: 5px 8px 3px 8px;
    font-size: 18px;
    letter-spacing: 1px;

    @media (min-height: 750px) {
        margin: 7px 12px 4px 12px;
        font-size: 22px;
        letter-spacing: 0.5px;
    }
`



const Links = styled.div`
    width: 80%;
    max-width: 240px;
`



const Social= styled.div`
    margin: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
`

const Spacer = styled(Paper)`
    width: 60%;
    margin: 2px 0;

    @media (min-height: 750px) {
        margin: 4px 0;
    }
`

const EmailWrapper = styled(Paper)`
  margin: 8px 0 0 0;
`

const Email = styled.a`
  margin: 2px 8px 1px 8px;
  color: var(--background-color);
  font-family: "Vollkorn";
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;

  &:hover {
    color: var(--background-color);
  }

  @media (min-height: 750px) {
    font-size: 18px;
    margin: 4px 12px 2px 12px;
  }
`






const GatsbyLink = styled.a`
  display: flex;
  align-items: center;

  margin: 0;
`

const MadeWith = styled(Paper)`
  position: relative;
  z-index: 1;
  transform: translate(16px, 0%);

  font-family: var(--display-font);
  color: var(--background-color);
  font-weight: 700;

`

const Text = styled.span`
  margin: 1px 16px 0 8px;
  
  font-size: 14px;
  letter-spacing: 1px;

  @media (min-height: 750px) {
    font-size: 16px;
    margin: 2px 16px 0 8px;
  }

  
`

const CopyText = styled.span`
    position: relative;
    top: -12px;
    margin: 0 0 -14px 0;
    
    font-size: 12px;

    @media (min-height: 750px) {
        font-size: 14px;
        top: -10px;
        margin: 0 0 -12px 0;
    }
    
`

const PlacedGatsbyLogo = styled(GatsbyLogo)`
  position: relative;
  z-index: 2;
  width: 54px;
  @media (min-height: 750px) {
    width: 60px;
  }
`


