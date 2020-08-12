import React from 'react'
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

import Layout from '../components/siteStructure/layout'
import SEO from "../components/seo"

import Paper from '../components/paperCraft/paper'



import ToolInfo from '../components/display/toolInfo'


export const query = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {slug: {regex: "/projects/"}}}) {
      nodes {
        id
        frontmatter {
          slug
          title
          tagline
          tech
          hero {
            childImageSharp {
              fluid(maxWidth: 2400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        
      }
    }
  }
`



const ProjectsPage = ({ data: { allMarkdownRemark: { nodes }}}) => {

  const projectOrder = ["Word Maze", "Natural", "Portfolio", "Styled Poker", "Pokemon Team Builder", "Ruby Enumerator Cards", "Space Bar", "Pokemon Fallout"]

    return (
        <Layout>
            <SEO title="Projects" />

            {projectOrder.map(term => {
              const node = nodes.find(n => n.frontmatter.title === term)

              const { title, hero, slug, tagline, tech } = node.frontmatter

              const techTerms = tech.split(",").map(string => string.trim())

              return (
                <Post key={node.id}>

                  <Link to={slug}><Title>{title}</Title></Link>

                  <Accent color="pink" shape="frame" />

                  <Tagline>{tagline}</Tagline>

                  <Bar color="purple" shape="frame" top/>
                  <Hero fluid={hero.childImageSharp.fluid} alt="hero" />
                  <Bar color="purple" shape="frame" />



                  <LogoContainer contentCount={techTerms.length}>
                    {techTerms.map((term, i) => <PlacedTool key={i} number={i} tool={term} />)}
                  </LogoContainer> 

                  <Tools><span>Tools</span> - {techTerms.join(", ")} </Tools>

                  <Link to={slug}>
                    <LearnWrapper color="pink" shape="frame"> 
                      <LearnMore>
                          learn more
                      </LearnMore>
                      <Arrow color="tan" shape="arrow" proportional/>
                    </LearnWrapper>
                  </Link>
                  

                </Post>
              )
            })}
        </Layout>
    )
}


const Post = styled.div`

  margin: 40px 0 40px 0;
  
  padding: 0 0 40px 0;

  width: 800px;
  max-width: 100%;

  overflow: hidden;

  position: relative;

  @media (min-width: 768px) {
    width: 100vw;
  }

`

const Title = styled.h2`
  margin: 0 8% 8px 8%;
  font-size: 42px;
`

const Accent = styled(Paper)`
  height: 6px;
  width: 120px;
  margin: 0 0 16px 8%;
`

const Tagline = styled.p`
  margin: 0 8% 16px 8%;
  font-size: 18px;
  font-style: italic;
  max-width: 300px;
`


const Hero = styled(Img)`
  max-height: 200px;
  filter: brightness(90%);
`

const Bar = styled(Paper)`
  width: 110%;
  height: 8px;
  position: relative;
  top: ${props => props.top ? '1px' : '-1px'};
  left: -5%;
  margin: ${props => props.top ? '0 0 0 0' : '0 0 12px 0'};
`

const Tools = styled.div`
  margin: 0 8% 16px 8%;
  max-width: 300px;
  font-size: 18px;

  & > span {
    font-size: 20px;
    font-weight: 700;
  }
`




const LogoContainer = styled.div`
  margin: 0 0 12px 8%;
  width: 84%;
  max-width: 400px;
  height: ${props => props.contentCount > 5 ? "29" : "16"}vw;
  max-height: ${props => props.contentCount > 5 ? "140" : "78"}px;

  position: relative;
`

const PlacedTool = styled(ToolInfo)`
  position: absolute;
  transform: translate(
    ${props => props.number < 5 ? props.number * 100 : ((props.number - 5) * 100) + 50}%,
    ${props => props.number < 5 ? 0 : 80}%
  );
  width: 19%;

`


const LearnWrapper = styled(Paper)`
  width: fit-content;
  height: fit-content;
  margin: 0 0 0 8%;
  position: relative;
`

const Arrow = styled(Paper)`
  position: absolute;
  top: 50%;
  right: 8px;
  width: 30px;
  transform: translateY(-50%);
`

const LearnMore = styled.span`
  font-family: "Vollkorn";
  color: var(--background-color);
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 1px;
  margin: 10px calc(32px + 16px) 6px 16px;
`


export default ProjectsPage
