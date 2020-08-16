
import React, { useState } from "react"
import PropTypes from "prop-types"

import styled from 'styled-components'

import Shapes from "../paperCraft/shapes"
import Paper from '../paperCraft/paper'

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

import HamburgerLogo from '../paperCraft/constructions/logos/hamburger'

const Layout = ({ children, minimal, snapDesktop, snapMobile, location }) => {

  const [display, setDisplay] = useState(false) 

  return (
      <Page snapDesktop={snapDesktop} snapMobile={snapMobile} >
        <Shapes />
        {minimal ? null : <Header display={display} setDisplay={setDisplay}/>}
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
        {minimal ? null : <Footer snapDown={snapMobile || snapDesktop}/>}
      </Page>
  )
}

const Page = styled.div`
  width: 100vw;

  scroll-snap-type: y ${props => props.snapMobile ? "mandatory" : "proximity"};
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    scroll-snap-type: y ${props => props.snapDesktop ? "mandatory" : "proximity"};
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


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
