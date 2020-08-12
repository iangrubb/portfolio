
import React from "react"
import PropTypes from "prop-types"

import styled from 'styled-components'

import Shapes from "../paperCraft/shapes"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children, minimal }) => {

  return (
      <Page>
        <Shapes />
        {minimal ? null : <Header />}
        <Main>{children}</Main>
        {minimal ? null : <Footer />}
      </Page>
  )
}

const Page = styled.div`
  width: 100vw;
  
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

`

const Main = styled.main`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  flex-grow: 1;

  margin: 40px 0 0 0;

  @media (min-width: 768px) {
    margin: calc(190px + 40px) 0 0 0;
  }

`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
