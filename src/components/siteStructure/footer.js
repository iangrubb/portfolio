import React from 'react'

import styled from 'styled-components'

import Paper from '../paperCraft/paper'
import GatsbyLogo from '../paperCraft/constructions/logos/gatsby'

const Footer = () => {
    return (
        <Container>
          <Spacer color="green" shape="spacer"/>
          


          <BuildInfo>
            <Copywrite color="pink" shape="frame">
              <CopyText>
                © {new Date().getFullYear()}
              </CopyText>
            </Copywrite>
            <GatsbyLink href="https://www.gatsbyjs.org">
              <MadeWith color="purple" shape="frame">
                <Text>built with</Text>
              </MadeWith>
              <PlacedLogo />
            </GatsbyLink>
          </BuildInfo>
        </Container>
    )
}

const Container = styled.footer`
  margin: 2rem 0 0 0;
  position: relative;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const Spacer = styled(Paper)`
  margin: 1rem;
  width: 400px;
  max-width: 90%;
`

const BuildInfo = styled.div`
  position: relative;
  margin: 1rem;
  padding: 16px 16px 0 0;
`

const Copywrite = styled(Paper)`
  position: absolute;
  left: 2%;
  top: 10%;
  width: fit-content;
  height: fit-content;
`

const CopyText = styled.span`
  margin: 2px 8px;
  color: var(--background-color);
  font-family: "Vollkorn";
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1px;
  white-space: nowrap;
`

const GatsbyLink = styled.a`
  display: flex;
  align-items: center;
`

const MadeWith = styled(Paper)`
  width: fit-content;
  height: fit-content;
  position: relative;
  z-index: 1;
  transform: translate(32px, 24%);
`

const Text = styled.span`
  margin: 6px 32px 4px 16px;
  color: var(--background-color);
  font-family: "Vollkorn";
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1px;
  white-space: nowrap;
`

const PlacedLogo = styled(GatsbyLogo)`
  position: relative;
  z-index: 2;
  width: 70px;
`

export default Footer
