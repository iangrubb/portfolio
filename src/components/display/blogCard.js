import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styled, { css } from 'styled-components'

import Paper from '../paperCraft/paper'

import FrameBox from './frameBox'

const BlogCard = ({ node }) => {

    const { frontmatter } = node
    const { title, abstract, slug, hero } = frontmatter
    const [month, day, year] = frontmatter.date.split(" ")
    const fixedDay = day[0] === "0" ? day[1] + "," : day
    const formatedDate = [month, fixedDay, year].join(" ")

  
    return (
        <Container>
            
            <HeroBackground>
                <Bar color="purple" shape="frame" top />
                <Hero imgStyle={{objectPosition: "top center"}} fluid={hero.childImageSharp.fluid} alt="hero" />
                <Bar color="purple" shape="frame" />
            </HeroBackground>

            <Link to={slug}>
                <MainContent color="purple" innerCSS={mainContentInner}>        
                    <Title>{title}</Title>
                    <TitleBar color="pink" shape="frame" />
                    <Date>{formatedDate}</Date>
                    <Abstract>{abstract}</Abstract>
                </MainContent>
            </Link>

        </Container>
    )
}

export default BlogCard

const Container = styled.div`
    margin: -50px 0 0 0;
    @media (min-width: 768px) {
        margin: -250px 0 50px 0;
    }
`

const HeroBackground = styled.div`
    position: relative;
    top: 150px;
    width: 110vw;
    height: 250px;
    background: var(--background-color);
    @media (min-width: 768px) {
        height: 400px;
        top: 300px;
    }
`

const Hero = styled(Img)`
    width: 100%;
    height: 100%;
    opacity: 0.5;
`

const Bar = styled(Paper)`
  width: 110vw;
  height: 8px;
  position: relative;
  top: ${props => props.top ? '1px' : '-1px'};
  margin: 0;

  @media (min-width: 768px) {
    margin: 0;
    height: 12px;
  }
`


const MainContent = styled(FrameBox)`

  margin: 0 auto;
  
  max-width: 96vw;
  
`

const mainContentInner = css`

  margin: 12px;
  padding: 32px 24px;
  
  @media (min-width: 768px) {
    margin: 12px;
    padding: 7vh 4vw;
  }
`

const Title = styled.h2`
  margin: 0 0 0.6rem 0;
  font-size: 28px;

  @media (min-width: 768px) {
    margin: 1rem 0 0.6rem 0;
    font-size: 38px;
  }
`

const TitleBar = styled(Paper)`
  height: 6px;
  width: 120px;
  margin: 0 0 16px 8px;
  @media (min-width: 768px) {
    width: 180px;
    height: 8px;
  }
`

const Date = styled.time`
  font-family: "Vollkorn";
  font-weight: 700;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`


const Abstract = styled.p`
  position: relative;
  font-size: 18px;
  line-height: 1.6rem;
  margin: 8px 0 0 0;

  @media (min-width: 768px) {
    max-width: 500px;
    font-size: 20px;
    line-height: 1.6rem;
    margin: 16px 0 0 0;
  }
`

