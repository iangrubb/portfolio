
import React, { useState } from "react"
import PropTypes from "prop-types"

import styled from 'styled-components'

import Shapes from "../paperCraft/shapes"
import Paper from '../paperCraft/paper'

import Header from "./header"
import Footer from "./footer"
import SideBar from "./sideBar"
import "./layout.css"

import HamburgerLogo from '../paperCraft/constructions/logos/hamburger'

const Layout = ({ children, minimal, snapDesktop, snapMobile, location }) => {

  const [display, setDisplay] = useState(false) 

  return (
      <>
        <Shapes />

        <SideBar path={location.pathname} />

        <MainContent>
          {children}
        </MainContent>


        {/* {minimal ? null : <Header display={display} setDisplay={setDisplay}/>}

        {location ?
          <IndexHeader >
            <IndexTitle>{location}</IndexTitle>
            <Accent color="pink" shape="frame" />
          </IndexHeader>
        : null}


        {minimal ? null :
          <InfoWrapper>
            {false ?
            <LocationWrapper color="green" shape="frame">
              <Location>
                {location}
              </Location>
            </LocationWrapper>
            : null}
            
            <Hamburger clickHandler={()=>setDisplay(true)}/>
          </InfoWrapper>
        }
        {children}
        {minimal ? null : <Footer snapDown={snapMobile || snapDesktop}/>} */}
      </>
  )
}




const MainContent = styled.div`
  width: calc(100% - 25%);
  margin: 0 0 0 auto;

  max-width: calc(100vw - 300px - 48px);

  position: relative;
  z-index: 1;

  height: 200vh;

  background: #aaaaaaaa;
`







const Page = styled.div`
  width: 100vw;

  /* scroll-snap-type: y ${props => props.snapMobile ? "mandatory" : "proximity"}; */
  /* height: 100vh; */
  
  overflow-x: hidden;
  /* overflow-y: scroll; */

  display: flex;
  flex-direction: column;
  align-items: center;


  @media (min-width: 768px) {
    /* scroll-snap-type: y ${props => props.snapDesktop ? "mandatory" : "proximity"}; */
  }

`

const InfoWrapper = styled.div`
  position: fixed;
  z-index: 4;
  top: 1vw;
  right: 2vw;

  display: flex;
  align-items: center;
`

const Location = styled.h3`
  margin: 5px 24px 4px 12px;
  font-weight: 900;
  letter-spacing: 1px;
  color: var(--background-color);
`

const LocationWrapper = styled(Paper)`
  width: fit-content;
  height: fit-content;
  position: relative;
  left: 20px;
`

const Hamburger = styled(HamburgerLogo)`
  cursor: pointer;
  width: 50px;
  @media (min-width: 768px) {
    width: 70px;
  }
`

const IndexHeader = styled.div`

  width: 100vw;
  height: fit-content;
  ${props => props.snapUp ? "scroll-snap-align: end;" : null}

  
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */


`

const IndexTitle = styled.h1`
  margin: 32px auto 8px auto;
  text-align: center;
  font-size: 36px;
  @media (min-width: 768px) {
    margin: 40px 0 8px 0;
    font-size: 48px;
  }
`

const Accent = styled(Paper)`
  height: 6px;
  width: 100px;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 120px;
    height: 8px;
    margin: 0 auto 8px auto;
  }
`










Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
