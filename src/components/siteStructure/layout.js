
import React, { useContext } from "react"
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

  transition: transform var(--desktop-duration) ease;


  min-height: 100%;

  max-width: 1000px;

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


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
