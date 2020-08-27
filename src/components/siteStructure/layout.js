
import React, { useState } from "react"
import PropTypes from "prop-types"

import styled, { createGlobalStyle } from 'styled-components'

import Shapes from "../paperCraft/shapes"
import Paper from '../paperCraft/paper'

import SideBar from "./sideBar"
import "./layout.css"

import HamburgerLogo from '../paperCraft/constructions/logos/hamburger'


const PreventScroll = createGlobalStyle`

  body {
    overflow-y: ${props => props.defaultDisplay ? "scroll" : "hidden"};
  }

  @media (min-width: 900px) {

    body {
      overflow-y: scroll;
    }

  }

`


const Layout = ({ children, minimal, snapDesktop, snapMobile, location }) => {

  const [defaultDisplay, setDefaultDisplay] = useState(true) 

  return (
      <>
        <Shapes />
        <PreventScroll defaultDisplay={defaultDisplay} />

        <SideBar path={location.pathname} defaultDisplay={defaultDisplay} setDefaultDisplay={setDefaultDisplay} />

        <MainContent hideNav={location.pathname === "/"} defaultDisplay={defaultDisplay} >
          {children}
        </MainContent>

      </>
  )
}




const MainContent = styled.div`

  transition: width 0.3s ease;

  margin: 0 0 0 auto;

  position: relative;
  z-index: 1;

  
  height: 200vh;
  width: 100vw;


  @media (min-width: 900px) {
    width: ${props => props.hideNav || !props.defaultDisplay ? "100vw" : "calc(100vw - 300px)"};
  }

  @media (min-width: 1200px) {
    width: ${props => props.hideNav || !props.defaultDisplay ? "100vw" : "calc(100vw - 375px)"};
  }

  @media (min-width: 1500px) {
    width: ${props => props.hideNav || !props.defaultDisplay  ? "100vw" : "calc(100vw - 450px)"};
  }

`



Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
