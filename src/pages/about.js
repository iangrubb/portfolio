import React from 'react'

import styled from 'styled-components'

import SEO from "../components/seo"

import Layout from '../components/siteStructure/layout'

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

            
        </>
    )
}

export default AboutPage