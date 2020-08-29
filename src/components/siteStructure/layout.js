
import React, { useState, useContext } from "react"
import PropTypes from "prop-types"

import styled, { createGlobalStyle } from 'styled-components'

import { DisplayContext } from "../../context/displayContext"

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

  const { defaultDisplay } = useContext(DisplayContext) 
  
  return (
      <>
        <Shapes />
        <PreventScroll defaultDisplay={defaultDisplay} />

        <SideBar path={location.pathname} />

        <Spacer hideNav={location.pathname === "/"} defaultDisplay={defaultDisplay} >
          <MainContent hideNav={location.pathname === "/"} defaultDisplay={defaultDisplay}>
           {children}
          </MainContent>
        </Spacer>

      </>
  )
}




const Spacer = styled.div`
  margin: 0 0 0 auto;

  position: relative;
  z-index: 1;

  

  transition: width var(--desktop-duration) ease;
  width: 100vw;

  @media (min-width: 900px) {
    width: ${props => props.hideNav || !props.defaultDisplay ? "100vw" : "calc(100vw - 300px)"};
  }

  @media (min-width: 1200px) {
    margin: 0 75px 0 auto;
    width: ${props => props.hideNav || !props.defaultDisplay ? "100vw" : "calc(100vw - 450px)"};
  }

  @media (min-width: 1500px) {
    margin: 0 150px 0 auto;
    width: ${props => props.hideNav || !props.defaultDisplay  ? "100vw" : "calc(100vw - 600px)"};
  }

`

const MainContent = styled.div`
  width: 100%;
  max-width: 1400px;

  min-height: 100vh;
  

  padding: 48px 32px;

  margin: 0 auto;


  transition: transition var(--desktop-duration) ease;

  @media (min-width: 1850px) {
    transform: ${props => props.hideNav || !props.defaultDisplay  ? "none" : "translateX(calc(( -100vw + 1850px ) / 2 ))"};
  }


`



Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
