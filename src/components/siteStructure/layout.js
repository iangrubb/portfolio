
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

        <SideBar path={path} />

        <Spacer hideNav={path === "/"} defaultDisplay={defaultDisplay} >
          <MainContent>
            <TransitionGroup component={null}>
              <Transition
                key={path}
                timeout={{enter: 350, exit: 350}}
              >
                {transition_state => (
                  <PageWrapper path={path} defaultDisplay={defaultDisplay} transition_state={transition_state}>{children}</PageWrapper>   
                )}
              </Transition>
            </TransitionGroup>
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
  


  min-height: calc(100vh - 96px);
  

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

  position: relative;
  
  width: calc(100% - 64px);

  margin: 48px 32px;
  min-height: calc(100vh - 96px);



`



Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
