
import React from "react"
import PropTypes from "prop-types"

import styled from 'styled-components'

import Shapes from "../paperCraft/shapes"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children, minimal, snapDesktop, snapMobile }) => {

  return (
      <Page snapDesktop={snapDesktop} snapMobile={snapMobile} >
        <Shapes />
        {minimal ? null : <Header />}
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
