
import React, { useState, useLayoutEffect, useContext } from "react"
import PropTypes from "prop-types"

import styled, { createGlobalStyle } from 'styled-components'

import { DisplayContext } from "../../context/displayContext"

import Shapes from "../paperCraft/shapes"

import SideBar from "./sideBar"
import "./layout.css"



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

  const [layoutStatus, setLayoutStatus] = useState({current: {path: location.pathname, defaultDisplay: true}, previous: {path: null, defaultDisplay: null}})


  useLayoutEffect(()=>{

    if (layoutStatus.current.path !== location.pathname || layoutStatus.current.defaultDisplay !== defaultDisplay) {

      setLayoutStatus( {current: {path: location.pathname, defaultDisplay } , previous: {...layoutStatus.current}} )

    }

  }, [layoutStatus, location.pathname, defaultDisplay])

  const path = layoutStatus.current.path

  const snap = (layoutStatus.current.path === "/" || layoutStatus.previous.path === "/") && layoutStatus.current.defaultDisplay === layoutStatus.previous.defaultDisplay

  
  return (
      <>
        <Shapes />
        <PreventScroll defaultDisplay={defaultDisplay} />

        <FullPage>   
          <SideBar path={path} />
          <Spacer defaultDisplay={defaultDisplay} landing={path === "/"} snap={snap} >
              {children}     
          </Spacer>
        </FullPage>

      </>
  )
}


const FullPage = styled.div`
  width: 100vw;
`

const Spacer = styled.div`

  position: relative;
  z-index: 1;

  transition: ${props => props.snap ? "none" : "transform var(--desktop-duration) ease"};


  min-height: 100vh;

  max-width: 1000px;

  left: 50%;

  transform: translateX(-50%);
  

  padding: 8px;
  

  @media (min-width: 900px) {
    padding: 48px 32px;
    width: ${props => !props.defaultDisplay ? "100vw" : "calc(100vw - 300px)"};
    transform: translateX( ${props => !props.defaultDisplay || props.landing ? "-50%" : "calc(-50vw + 300px)"} );
  }

  @media (min-width: 1200px) {
    width: ${props => !props.defaultDisplay ? "100vw" : "calc(100vw - 450px)"};
    transform: translateX( ${props => !props.defaultDisplay || props.landing ? "-50%" : "calc(-50vw + 375px)"} );
  }

  @media (min-width: 1500px) {
    width: ${props => !props.defaultDisplay  ? "100vw" : "calc(100vw - 600px)"};
    transform: translateX( ${props => !props.defaultDisplay || props.landing ? "-50%" : "calc(-50vw + 450px)"} );
  }


`


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
