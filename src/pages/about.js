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

          <GreetingWrapper color="purple">
            <Greeting defaultDisplay={defaultDisplay}>
              <MainGreeting>Hi, I'm Ian!</MainGreeting>
              <SubGreeting>I'm a full stack developer based in Brooklyn, NY</SubGreeting>  
              
            </Greeting>    
          </GreetingWrapper>
          

          <ProfileWrapper color="purple" defaultDisplay={defaultDisplay} >
            <ProfilePicture imgStyle={{objectPosition: "top center"}}  fluid={profile.childImageSharp.fluid} />
          </ProfileWrapper>  

          

          <DetailsWrapper color="tan" area="about" thin>
            <Details>

              <About>
                I'm passionate about writing clean, elegant, and readable code. My interests extend across the full stack, from domain modeling and system design to UI development and browser-based animation. I'm always looking to choose the right tool for the job, so I'm always excited to learn about new languages, frameworks, and approaches.
              </About>
                
              <About>
                I started programming in the Spring of 2019 and I attended Flatiron School that Summer to build up my web development skills. Since then I've been working at Flatiron School as a Software Engineering Coach. I'm currently looking for a junior role at a company where I can make big contributions and grow as a developer.
              </About>

              <About>
                Before programming, I was a graduate student (and then briefly an adjunct professor) in the philosophy department at NYU. Over time, I realized that I wanted work that's testable and that address concrete challenges. This eventually lead me to programming. I've had a smooth transition, in part because philosophy and programming place a shared emphasis on problem solving through conceptual abstraction.
              </About>

              <About>
                As a philosophy student, I had the opportunity to study a fair amount of formal logic, which has been beneficial to my current work. This background prepared me to understand data structures and recognize when they can be used while building applications. It also prepared me for the conceptual challenges involved in domain modeling and querying information in SQL databases.
              </About>

              <About>
                Although I'm moving out of teaching as a profession, I still value mentoring others and writing about code. Teaching helps me learn, and crafting clear explanations helps to deepen my own understanding. Beyond that, I see mutual information sharing as crucial to a healthy developer community. There's so much to learn when it comes to modern web development, so someone who has mastered one topic may have only a rudimentary understanding of another. Sharing these areas of expertise makes use more well-rounded developers.
              </About>

            </Details>
          </DetailsWrapper>

          <ResumeWrapper color="pink" shape="frame" fit>
            <ResumeLink href={resume.publicURL} target="_blank">Resume</ResumeLink>
          </ResumeWrapper>

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
                <li><b>Flatiron School</b>, New York, NY <br/> Software Engineering Coach <br/> <i>November 2019 - Present</i> </li>
                <li><b>New York University</b>, New York, NY <br/> Adjucnt Professor <br/> <i>September 2018 - May 2019</i> </li>
                <li><b>New York University</b>, New York, NY <br/> Graduate Student Instructor <br/> <i>September 2012 - May 2018</i> </li>
              </List>
            </Details>
          </DetailsWrapper>           

          <DetailsWrapper color="tan" area="education">
            <Details> 
              <Heading>Education</Heading>
              <Bar color="pink" shape="frame"/>
              <List>
                <li><b>Flatiron School</b>, 2019<br/>Software Engineering</li>
                <li><b>New York University</b>, 2010 - 2018<br/>PhD, Philosophy</li>
                <li><b>UC Berkeley</b>, 2006 - 2010<br/>BA, Philosophy</li>
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
  width: 90%;
  min-width: 300px;
  grid-template-columns: 100%;
  grid-template-rows: auto auto auto auto auto auto auto;
  grid-template-areas:
    "greeting"
    "picture"
    "about"
    "resume"
    "skills"
    "employment"
    "education"
  ;
`

const twoColumn = css`
  margin: 0;
  width: calc(100% - 24px);
  grid-template-columns: 30% 20% 1fr 200px;
  grid-template-rows: 200px auto auto auto auto;
  grid-template-areas:
    "greeting greeting greeting picture"
    "about about about about"
    "resume resume resume resume"
    "skills skills skills skills"
    "employment employment education education"
  ;
`


const PageGrid = styled.div`
  
  display: grid;
  gap: 8px;

  ${styleToggle(oneColumn, twoColumn)}

`


const GreetingWrapper = styled(Paper)`
  grid-area: greeting;
  padding: 8px;

  place-self: end center;

  width: 100%;

  height: 100%;

`

const Greeting = styled.div`
  width: 100%;
  height: 100%;
  
  background: #312d37a6;

  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border: 2px solid #58545e;
  
`

const MainGreeting = styled.h2`
  color: var(--background-color);
  text-shadow: var(--text-shadow);
  text-align: center;
  margin: 0 0 4px 0;
  font-size: 40px;
  width: fit-content;

  @media (min-width: 500px) {
    font-size: 56px;
  }
`

const SubGreeting = styled.h3`
  color: var(--background-color);
  text-shadow: var(--text-shadow);
  font-size: 24px;

  margin: 0;
  
  width: fit-content;

  text-align: center;

  @media (min-width: 500px) {
    font-size: 32px;
  }
`


const ResumeWrapper = styled(Paper)`
  grid-area: resume;
  place-self: center center;
  color: var(--background-color);
  margin: 48px 0 16px 0;

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

  ${styleToggle(`max-width: 280px; max-height: 280px`, `max-width: 100%; max-height: 100%;`)}

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
  max-width: ${({thin}) => thin ? "800px" : "100%"};
  height: fit-content;

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

const Heading = styled.h3`
  margin: 0 0 8px 0;
  font-size: 28px;

  @media (min-width: 500px) {
    margin: 0 0 8px 8px;
  }
`



const Bar = styled(Paper)`
  height: 8px;
  width: 120px;
  margin: 0 0 16px 0;
  @media (min-width: 500px) {
    margin: 0 0 16px 8px;
    width: 180px;
  }
`

const Skills = styled.p`
  font-size: 18px;
  line-height: 26px;
  margin: 0;

  @media (min-width: 500px) {
    font-size: 20px;
  }
`

const About = styled.p`
  font-size: 18px;
  line-height: 23px;
  margin: 12px auto;
  max-width: 62ch;
`

const List = styled.ul`
  margin: 0 0 0 20px;
`