import React from 'react'

import styled from 'styled-components'

import Paper from '../paperCraft/paper'

import LinkedInLogo from '../paperCraft/constructions/logos/linkedIn'
import GithubLogo from '../paperCraft/constructions/logos/github'
import MediumLogo from '../paperCraft/constructions/logos/medium'

const SocialLinks = () => {
    return (
        <Container color="tan" >
            
            <LogoLink href="https://github.com/iangrubb" target="_blank" title="Github">
              <PlacedGithubLogo />
            </LogoLink>
            <LogoLink href="https://www.linkedin.com/in/ian-grubb-99ab0a187" target="_blank" title="LinkedIn">
              <PlacedLinkedInLogo />
            </LogoLink>
            <LogoLink href="https://medium.com/@ian_grubb" target="_blank" title="medium">
              <PlacedMediumLogo />
            </LogoLink>
            
        </Container>
    )
}

export default SocialLinks

const Container = styled.div`
    width: 100%;

    margin: 20px 0;

    display: flex;
    justify-content: center;

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