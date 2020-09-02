import React from 'react'

import styled from 'styled-components'

import SEO from "../components/seo"

import Paper from "../components/paperCraft/paper"

// import resume from '../documents/ian-grubb-resume.pdf'

export const query = graphql`
  query {
    profile: file(relativePath: { eq: "profile.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 450) {
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
    console.log(profile, resume)
    return (
        <>
          <SEO title="About" />
            {/* <a href={resume.publicURL} target="_blank">Resume</a> */}
          {/* <Hex color="purple" shape="hHex" proportional noShadow>
            <InnerHex color="tan" shape="hHex" proportional noShadow>
              <Seaweed color="purple" shape="g" proportional noShadow />
            </InnerHex>
          </Hex> */}
            
        </>
    )
}

export default AboutPage

const Hex = styled(Paper)`
  width: 80px;

`

const InnerHex = styled(Paper)`
  width: 85%;
`

const Seaweed = styled(Paper)`
  width: 80%;
  
`