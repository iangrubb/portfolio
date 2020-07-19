
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import styled from 'styled-components'

import Shapes from "../paperCraft/shapes"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children, minimal }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <Page>
        <Shapes />
        {minimal ? null : <Header siteTitle={data.site.siteMetadata.title} />}
        <Main>{children}</Main>
        {minimal ? null : <Footer />}
      </Page>
  )
}

const Page = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
