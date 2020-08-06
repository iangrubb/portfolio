import React from 'react'

import styled from 'styled-components'

import Paper from '../paperCraft/paper'
import GatsbyLogo from '../paperCraft/constructions/logos/gatsby'

const Footer = () => {
    return (
        <Container>
          {/* © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> */}
          <PlacedLogo/>
          {/* <BackgroundDark color="purple" shape="box" /> */}
          {/* <BackgroundLight color="tan" shape="box" /> */}
        </Container>
    )
}

const Container = styled.footer`
  margin: 2rem 0 0 0;
  position: relative;
  height: 100px;
  width: 100vw;
`

const PlacedLogo = styled(GatsbyLogo)`
  position: absolute;
  top: 35%;
  left: 50%;
  width: 90px;
  transform: translate(-50%, -50%);
  z-index: 3;
`

const BackgroundDark = styled(Paper)`
  position: absolute;
  bottom: 40%;
  left: -10%;
  width: 120%;
  z-index: 2;
  height: 15%;
`

const BackgroundLight = styled(Paper)`
  position: absolute;
  bottom: 0;
  left: -10%;
  width: 120%;
  z-index: 1;
  height: 60%;
`

export default Footer
