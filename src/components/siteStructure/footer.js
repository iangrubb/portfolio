import React from 'react'

import styled from 'styled-components'

import Paper from '../paperCraft/paper'
import GatsbyLogo from '../paperCraft/constructions/logos/gatsby'
import LinkedInLogo from '../paperCraft/constructions/logos/linkedIn'
import GithubLogo from '../paperCraft/constructions/logos/github'
import MediumLogo from '../paperCraft/constructions/logos/medium'

const Footer = () => {
    return (
        <Container>
          <Spacer color="green" shape="spacer"/>


          <ContactInfo>
            {/* <ContactHeading color="pink" shape="rectangle">
              <ContactText>Find me online!</ContactText>
            </ContactHeading> */}
            <LogoLink href="https://github.com/iangrubb" target="_blank" title="Github">
              <PlacedGithubLogo />
            </LogoLink>
            <LogoLink href="https://www.linkedin.com/in/ian-grubb-99ab0a187" target="_blank" title="LinkedIn">
              <PlacedLinkedInLogo />
            </LogoLink>
            <LogoLink href="https://medium.com/@ian_grubb" target="_blank" title="medium">
              <PlacedMediumLogo />
            </LogoLink>
          </ContactInfo>


          <BuildInfo>
            <Copywrite color="pink" shape="rectangle">
              <CopyText>
                © {new Date().getFullYear()}
              </CopyText>
            </Copywrite>
            <GatsbyLink href="https://www.gatsbyjs.org" target="_blank" title="Gatsby JS">
              <MadeWith color="purple" shape="frame">
                <Text>built with</Text>
              </MadeWith>
              <PlacedGatsbyLogo />
            </GatsbyLink>
          </BuildInfo>

        </Container>
    )
}

const Container = styled.footer`
  margin: 6rem 0 0 0;
  padding: 1rem 0 2rem 0;
  position: relative;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }
`

const Spacer = styled(Paper)`
  position: absolute;
  top: -3rem;
  left: 50%;
  transform: translateX(-50%);
  
  width: 400px;
  max-width: 90%;
`

const ContactInfo = styled.div`
  position: relative;
  display: flex;
  padding: 1rem 0 0.5rem 0;
  width: fit-content;
`

const ContactHeading = styled(Paper)`
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, 15%);
  width: fit-content;
  height: fit-content;
`

const ContactText = styled.span`
  padding: 0.4rem 0.8rem 0.1rem 0.8rem;
  color: var(--background-color);
  font-family: "Vollkorn";
  font-weight: 700;
  font-size: 18px;
`

const LogoLink = styled.a`
  margin: 0 0.1rem;
`

const PlacedLinkedInLogo = styled(LinkedInLogo)`
  width: 80px;
`

const PlacedGithubLogo = styled(GithubLogo)`
  width: 80px;
`

const PlacedMediumLogo = styled(MediumLogo)`
  width: 80px;
`


const BuildInfo = styled.div`
  position: relative;
  padding: 24px 16px 16px 0;
  width: fit-content;
`

const Copywrite = styled(Paper)`
  position: absolute;
  left: 28%;
  top: 62%;
  width: fit-content;
  height: fit-content;
`

const CopyText = styled.span`
  margin: 2px 6px 1px 6px;
  color: var(--background-color);
  font-family: "Vollkorn";
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  white-space: nowrap;
`

const GatsbyLink = styled.a`
  position: relative;
  top: -12px;
  left: 12px;
  z-index: 1;
  display: flex;
  align-items: center;
`

const MadeWith = styled(Paper)`
  width: fit-content;
  height: fit-content;
  position: relative;
  z-index: 1;
  transform: translate(18px, 0%);
`

const Text = styled.span`
  margin: 5px 16px 2px 8px;
  color: var(--background-color);
  font-family: "Vollkorn";
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 1px;
  white-space: nowrap;
`

const PlacedGatsbyLogo = styled(GatsbyLogo)`
  position: relative;
  z-index: 2;
  width: 60px;
`

export default Footer
