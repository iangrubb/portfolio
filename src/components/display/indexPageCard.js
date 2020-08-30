import React, { useContext } from 'react'
import { Link } from "gatsby"

import Img from 'gatsby-image'

import styled from 'styled-components'

import Paper from '../paperCraft/paper'

import { DisplayContext } from '../../context/displayContext'

const IndexPageCard = ({ children, hero, title, slug }) => {

    const { defaultDisplay } = useContext(DisplayContext)

    return (
        <Card defaultDisplay={defaultDisplay}>
            <Spacer>
                <CardFace color="purple">
                    <Wrap>
                        <Hero imgStyle={{objectPosition: "top center"}} fluid={hero.childImageSharp.fluid} alt="hero" />

                        <Link key={slug} to={slug}>
                            <Screen>
                                <Title>{title}</Title>
                                <TitleBar color="pink" shape="frame" />
                                <Shade>
                                  {children}
                                </Shade>
                            </Screen>
                        </Link>
                    </Wrap>
                </CardFace>
            </Spacer>
        </Card>
    )
}

export default IndexPageCard



const Card = styled.div`

  margin: 16px;

  width: 100%;
  

  @media (min-width: 900px) {
    width: calc(${props => props.defaultDisplay ? 100 : 50}% - 32px);
  }

  @media (min-width: 1375px) {
    width: calc(50% - 32px);
  }

  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`

const Spacer = styled.div`
  width: 100%;
  height: 0;
  padding-top: calc( 600px - 30% ) ;

  position: relative;
`

const CardFace = styled(Paper)`
  position: absolute;

  top: 0;
  height: 100%;
  left: 0;
  width: 100%;

  padding: 8px;

  border-radius: 8px;



`





const Wrap = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

`

const Screen = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 2;

  background: #2c2936e3;

  background: var(--tint);

  border: 2px solid var(--background-color-secondary);


  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;


  border-radius: 4px;


`

const Hero = styled(Img)`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`




const Title = styled.h2`
  margin: 0 0 8px 0;
  font-size: 32px;

  color: var(--background-color);
  text-shadow: var(--text-shadow);

  @media (min-width: 768px) {
    font-size: 40px;
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


const Shade = styled.div`
  background: #35303ade;

  border-top: 2px solid var(--background-color-secondary);

  position: relative;
  left: -16px;
  top: 16px;

  width: calc(100% + 32px);
  height: 35%;
  margin: -16px 0 0 0;
  padding: 24px;

  color: var(--background-color);
  font-size: 20px;
  letter-spacing: 0.4px;
  

  display: flex;
  flex-direction: column;
  justify-content: center;
`