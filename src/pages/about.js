import React, { useContext } from 'react'

import { DisplayContext } from '../context/displayContext'

import Img from 'gatsby-image'

import styled, { css } from 'styled-components'

import SEO from "../components/seo"

import Paper from "../components/paperCraft/paper"


export const query = graphql`
  query {
    profile: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    resume: file(relativePath: { eq: "ian-grubb-resume.pdf" }) {
        id
        publicURL
    }
  }
`

const AboutPage = ({ data: {profile, resume } }) => {

  const { defaultDisplay } = useContext(DisplayContext)

  return (
      <>
        <SEO title="About" />

        <PageGrid defaultDisplay={defaultDisplay}>

        
          <ProfileWrapper color="purple" defaultDisplay={defaultDisplay} >
            <ProfilePicture imgStyle={{objectPosition: "top center"}}  fluid={profile.childImageSharp.fluid} alt="Ian Grubb"/>
          </ProfileWrapper>

          <DetailsWrapper color="purple" area="greeting" fill>
            <HeadingContainer>
              <MainHeading>Hi, I'm Ian!</MainHeading>
              <SubHeading>I'm a full stack web developer based in Brooklyn, NY.</SubHeading>
            </HeadingContainer>   
          </DetailsWrapper>

          
          <DetailsWrapper color="tan" area="about">
            <Details>
              <About>
                I'm passionate about writing clean, elegant, and readable code. My interests extend across the full stack, from domain modeling and systems design to UI development and browser-based animation. I'm always looking to choose the right tool for the job, so I'm always excited to learn about new languages, frameworks, and approaches.
              </About>
                
              <About>
                I started programming in Spring 2019 and I attended Flatiron School that Summer to build up my web development skills. Since then I've been working at Flatiron School as a Software Engineering Coach. I'm currently looking for a junior role at a company where I can make big contributions and grow as a developer.
              </About>

              <About>
                Before programming, I was a graduate student (and then briefly an adjunct professor) in the philosophy department at NYU. Over time, I realized that I wanted work that's testable and that addresses more concrete challenges. This eventually lead me to programming. I've had a smooth transition, in part because philosophy and programming both involve creative problem solving through the application of conceptual abstractions.
              </About>

              <About>
                As a philosophy student, I had the opportunity to study a fair amount of formal logic, which has been beneficial to my current work. This background prepared me to understand data structures and recognize when they can be used while building applications. It also prepared me for the challenges involved in domain modeling and querying information in SQL databases.
              </About>

              <About>
                Although I'm moving out of teaching as a profession, I still value mentoring others and teaching about code. Teaching helps me learn and deepen my own understanding. Beyond that, I see mutual information sharing as crucial to a healthy developer community. There's so much to learn in modern web development, and sharing our areas of expertise makes us all more well-rounded developers.
              </About>

            </Details>
          </DetailsWrapper>

          <DetailsWrapper color="tan" area="resume" fit>
            <Details>
            <ResumeWrapper color="pink" shape="frame">
              <ResumeLink href={resume.publicURL} target="_blank">Resume</ResumeLink>
            </ResumeWrapper>
            </Details>
          </DetailsWrapper> 
          

          <DetailsWrapper color="tan" area="skills">
            <Details>
              <Heading>Technical Skills</Heading>
              <Bar color="pink" shape="frame"/>
              <Skills>HTML, CSS, JavaScript, React, Redux, Gatsby, Ruby, Rails, Elixir, Phoenix, SQL, GraphQL</Skills>
            </Details>
          </DetailsWrapper> 

          <DetailsWrapper color="tan" area="employment">
            <Details> 
              <Heading>Work</Heading>
              <Bar color="pink" shape="frame"/>
              <List>
                <li><b>Flatiron School</b><br/> New York, NY <br/> Software Engineering Coach <br/> <i>November 2019 - Present</i> </li>
                <li><b>New York University</b><br/> New York, NY <br/> Adjunct Professor <br/> <i>September 2018 - May 2019</i> </li>
                <li><b>New York University</b><br/> New York, NY <br/> Graduate Student Instructor <br/> <i>September 2012 - May 2018</i> </li>
              </List>
            </Details>
          </DetailsWrapper>           

          <DetailsWrapper color="tan" area="education">
            <Details> 
              <Heading>Education</Heading>
              <Bar color="pink" shape="frame"/>
              <List>
                <li><b>Flatiron School</b><br/> 2019<br/>Software Engineering</li>
                <li><b>New York University</b><br/> 2010 - 2018<br/>PhD, Philosophy</li>
                <li><b>UC Berkeley</b><br/> 2006 - 2010<br/>BA, Philosophy</li>
              </List>
            </Details>
          </DetailsWrapper> 

        </PageGrid>
      </>
    )
}

export default AboutPage


const styleToggle = (small, big) => css`

  ${small}
  
  @media (min-width: 900px) {
    ${props => props.defaultDisplay ? small : big }
  }

  @media (min-width: 1300px) {
    ${big}
  }

`

const oneColumn = css`
  margin: 32px auto;
  width: 96%;
  min-width: 300px;
  grid-template-columns: 1fr 240px;
  grid-template-rows: auto auto auto auto auto auto;
  grid-template-areas:
    "greeting picture"
    "about about"
    "resume resume"
    "skills skills"
    "employment employment"
    "education education"
  ;
`

const twoColumn = css`
  margin: 0;
  width: 100%;
  
  grid-template-columns: 1fr 280px;
  grid-template-rows: auto 80px auto auto auto auto;
  grid-template-areas:
    "greeting picture"
    "about picture"
    "about resume"
    "about skills"
    "about employment"
    "about education"
  ;
`


const PageGrid = styled.div`
  
  display: grid;
  gap: 16px;

  

  ${styleToggle(oneColumn, twoColumn)}

  @media (max-width: 500px) {
    margin: 32px auto;
    width: 96%;
    min-width: 300px;
    grid-template-columns: 100%;
    grid-template-rows: auto 360px auto auto auto auto auto;
    grid-template-areas:
      "greeting"
      "picture"
      "about"
      "resume"
      "skills"
      "employment"
      "education"
    ;
  }

`




const ResumeWrapper = styled(Paper)`
  place-self: center center;
  color: var(--background-color);
  margin: 0 auto;
`

const ResumeLink = styled.a`
  font-size: 34px;
  font-weight: 700;
  letter-spacing: 0.4px;
  font-family: var(--display-font);
  margin: 12px 12px 6px 12px;
`


const ProfileWrapper = styled(Paper)`

  grid-area: picture;


  width: 100%;
  height: 100%;

  place-self: center center;

  padding: 8px;
  
`

const ProfilePicture = styled(Img)`
  width: 100%;
  height: 100%;

`








const DetailsWrapper = styled(Paper)`

  grid-area: ${props => props.area};

  width: 100%;
  height: ${props => props.fill ? "100%" : "fit-content"};

  margin: 0 auto;
  
  border-radius: 8px;
  


  padding: 6px;

  @media (min-width: 500px) {
    padding: 8px;
  }

`

const Details = styled.article`

  width: 100%;
  height: fit-content;

  background: var(--background-color);
  border-radius: 6px;

  padding: 24px 16px;
  margin: 0;

  @media (min-width: 500px) {
    padding: 24px;
  }

`


const HeadingContainer = styled.div`

  background: #383444c2;

  border-radius: 6px;

  width: 100%;
  height: 100%;

  padding: 8px 0 8px 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 900px) {
    padding: 32px 0 32px 32px;
  }


`

const MainHeading = styled.h2`
  padding: 8px 0 0 0;
  margin: 0 0 8px 0;
  font-size: 42px;
  color: var(--background-color);
  @media (min-width: 900px) {
    max-width: 90%;
  }

`

const SubHeading = styled.h3`
  margin: 0;
  color: var(--background-color);
  @media (min-width: 900px) {
    max-width: 90%;
  }
`









const Heading = styled.h3`
  margin: 0 0 8px 0;
  font-size: 28px;
`

const Bar = styled(Paper)`
  height: 8px;
  width: 120px;
  margin: 0 0 16px 0;
  @media (min-width: 500px) {
    width: 180px;
  }
`

const Skills = styled.p`
  font-size: 18px;
  line-height: 26px;
  margin: 0;

  @media (min-width: 500px) {
    font-size: 18px;
  }
`

const About = styled.p`
  font-size: 18px;
  line-height: 24px;

  
  margin: 16px 3px 16px 1px;

  

  @media (min-width: 500px) {
    font-size: 20px;
    line-height: 28px;
    margin: 24px 2% 24px 4%;
    max-width: 94%;
  }

`

const List = styled.ul`
  margin: 0 0 0 8px;
  font-size: 16px;
`