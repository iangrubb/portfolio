import React from 'react'
import Img from 'gatsby-image'

import styled from 'styled-components'

import alignToDisplay from '../alignToDisplay'
import Paper from '../../paperCraft/paper'

const HeroDisplay = ({children, defaultDisplay, title, hero, heroAuthor, heroSource }) => {

    return (
        <Container color="purple" defaultDisplay={defaultDisplay}>
            <Hero imgStyle={{objectPosition: "top center"}} fluid={hero.childImageSharp.fluid} alt="hero" />
            <HeroTint>
                <HeaderInfo defaultDisplay={defaultDisplay} >

                    <Title>{title}</Title>

                    <TitleBar color="pink" shape="frame" />

                    {children}

                </HeaderInfo> 

                { heroAuthor && heroSource ?
                <AttributionWrapper color="green" shape="rectangle">
                    <Attribution target="_blank" href={heroSource}>
                    photo by {heroAuthor}
                    </Attribution>
                </AttributionWrapper>
                : null }
            </HeroTint>
      </Container>
    )
}

export default HeroDisplay

const Container = styled(Paper)`
  width: 100%;
  max-width: 1000px;

  height: 600px;

  padding: 8px;
  margin: 0 0 12px 0;

  border-radius: 8px;

  ${alignToDisplay}

  position: relative;

  @media (min-width: 900px) {

    margin: 0 0 16px 0;
  }
  
`

const HeroTint = styled.div`
  position: absolute;
  top: 8px;
  bottom: 8px;
  left: 8px;
  right: 8px;
  border-radius: 7px;
  background: var(--tint);

  color: var(--background-color);
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px 40px;
  
  border: 2px solid var(--background-color-secondary);

`

const AttributionWrapper = styled(Paper)`

  position: absolute;

  top: 16px;
  left: 16px;

  z-index: 2;

  width: fit-content;
  height: fit-content;
  color: var(--background-color);

`

const Attribution = styled.a`

  font-weight: 700;
  font-size: 14px;
  margin: 1px 10px 0 10px;

  @media (min-width: 900px) {
  
    font-size: 16px;
    margin: 3px 12px 2px 12px;
  }

`

const HeaderInfo = styled.div`

  width: fit-content;
  ${alignToDisplay}

`

const Title = styled.h2`

  margin: 0 0 4px 0;
  font-size: 36px;

  text-shadow: var(--text-shadow);
  
  max-width: 800px;

  @media (min-width: 768px) {
 
    font-size: 56px;
  }
`

const TitleBar = styled(Paper)`
  height: 8px;
  width: 120px;
  margin: 0 0 16px 8px;
  @media (min-width: 768px) {
    width: 180px;
  }
`

const Hero = styled(Img)`

  border-radius: 8px;
  height: 100%;
  width: 100%;

  margin: 0;

`
