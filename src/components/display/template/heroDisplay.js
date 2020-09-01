import React from 'react'
import Img from 'gatsby-image'

import styled from 'styled-components'

import alignToDisplay from '../alignToDisplay'
import Paper from '../../paperCraft/paper'

import ToolInfo from '../toolInfo'

const HeroDisplay = ({children, defaultDisplay, title, hero, heroAuthor, heroSource, techTerms }) => {

    return (
        <Container color="purple" defaultDisplay={defaultDisplay}>
            <Hero imgStyle={{objectPosition: "top center"}} fluid={hero.childImageSharp.fluid} alt="hero" />
            <HeroTint>
                <HeaderInfo defaultDisplay={defaultDisplay} >
                  <Title>{title}</Title>
                  <TitleBar color="pink" shape="frame" />
                </HeaderInfo> 
                <Shade>
                  <Content defaultDisplay={defaultDisplay} >
                  {children}
                  </Content>
                </Shade>
                { heroAuthor && heroSource ?
                <AttributionWrapper color="green" shape="rectangle">
                    <Attribution target="_blank" href={heroSource}>
                    photo by {heroAuthor}
                    </Attribution>
                </AttributionWrapper>
                : null }
            </HeroTint>


            {techTerms ?
             <ToolOverlay>
               {techTerms.map((term, i) => <PlacedTool key={i} number={i} tool={term} />)}
             </ToolOverlay>
            : null}

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
  /* padding: 24px 40px; */
  
  border: 2px solid #58545e;

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

  width: 100%;
  max-width: 700px;
  ${alignToDisplay}

  padding: 0 40px 16px 40px;

`

const Title = styled.h2`

  margin: 0 0 4px 0;
  font-size: 36px;

  text-shadow: var(--text-shadow);
  

  @media (min-width: 900px) {
 
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

const Shade = styled.div`
  background: #35303ade;

  border-top: 2px solid #58545e;


  width: calc(100%);


  margin: -16px 0 0 0;
  
  color: var(--background-color);
  font-size: 20px;
  letter-spacing: 0.4px;
  
  border-radius: 0 0 4px 4px;


  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Content = styled.div`

  width: 100%;
  max-width: 700px;
  padding: 24px 48px;
  ${alignToDisplay}

`


const ToolOverlay = styled.div`

  display: none;

  @media (min-width: 1200px) {
    position: absolute;
    right: 2%;
    top: 50%;

    z-index: 3;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-wrap: wrap-reverse;

    max-height: 500px;

    transform: translateY(-50%) scaleX(calc(6/7)) skewY(-27deg);

  }


`

const PlacedTool = styled(ToolInfo)`

  width: 80px;

  transform: skewY(27deg)  scaleX(calc(7/6)) ;

  @media (min-width: 1350px) {
    width: 100px;
  }

`
