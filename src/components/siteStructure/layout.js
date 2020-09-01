
import React, { useState, useContext } from "react"
import PropTypes from "prop-types"

import styled, { createGlobalStyle } from 'styled-components'

import { DisplayContext } from "../../context/displayContext"

import Shapes from "../paperCraft/shapes"
import Paper from '../paperCraft/paper'

import PageWrapper from './pageWrapper'
import SideBar from "./sideBar"
import "./layout.css"


import { Transition, TransitionGroup } from 'react-transition-group'


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


const Layout = ({ children, location }) => {

  const { defaultDisplay } = useContext(DisplayContext)

  const path = location.pathname
  
  return (
      <>
        <Shapes />
        <PreventScroll defaultDisplay={defaultDisplay} />

          <FullPage>
            <SideBar path={path} />
            <Spacer defaultDisplay={defaultDisplay} >
                {children}     
            </Spacer>
          </FullPage>

      </>
  )
}


const FullPage = styled.div`
  
  width: 100vw;
  height: 100vh;
`

const Spacer = styled.div`


  position: relative;
  z-index: 1;

  transition: width var(--desktop-duration) ease, transform var(--desktop-duration) ease;
    

  min-height: calc(100vh - 96px);

  max-width: 1200px;
  

  left: 50%;

  transform: translateX(-50%);
  

  padding: 8px;
  

  @media (min-width: 900px) {

    padding: 48px 32px;
    width: ${props => !props.defaultDisplay ? "100vw" : "calc(100vw - 300px)"};
    transform: translateX( ${props => !props.defaultDisplay ? "-50%" : "calc(-50vw + 300px)"} );
  }

  @media (min-width: 1200px) {
    width: ${props => !props.defaultDisplay ? "100vw" : "calc(100vw - 450px)"};
    transform: translateX( ${props => !props.defaultDisplay ? "-50%" : "calc(-50vw + 375px)"} );
  }

  @media (min-width: 1500px) {
    width: ${props => !props.defaultDisplay  ? "100vw" : "calc(100vw - 600px)"};
    transform: translateX( ${props => !props.defaultDisplay ? "-50%" : "calc(-50vw + 450px)"} );
  }


`

const MainContent = styled.div`

  position: relative;

 

  
  width: calc(100% - 64px);

  max-width: 1200px;

  margin: 48px 32px;
  min-height: calc(100vh - 96px);

  @media (min-width: 900px) {
    transition: left var(--desktop-duration) ease, transform var(--desktop-duration) ease;
    left: 0;
    ${props => props.defaultDisplay ? null : `
      left: 50%;
      transform: translateX(-50%);
      
    `}

  }



`



Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
