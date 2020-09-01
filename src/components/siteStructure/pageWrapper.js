import React from 'react'

import styled from 'styled-components'

import alignToDisplay from '../display/alignToDisplay'

const PageWrapper = ({children, transition_state, defaultDisplay, path }) => {
    
  return (
      <Container transition_state={transition_state}>
        <Align defaultDisplay={defaultDisplay} apply={path !== "/"}>
          {children}
        </Align>   
      </Container>
  )
}

export default PageWrapper


const determineAnimation = stage => {
    switch (stage) {
      case "entering":
        return `
          transform: translateX(100vw);
          position: absolute;
          `
      case "exiting":
        return `
          transform: translateY(100vh);
          position: relative;
          
          `
      case "exited":
        return `
          transform: translateX(100vw);
          position: absolute;
          transition: none;
        `
      default:
        return `
          transform: translateX(0px);
          position: relative;
          `
    }
  }
  
const Container = styled.div`
/* top: 0;
left: 0; */

/* transition: transform 1s ease;
${props => determineAnimation(props.transition_state)} */


`

const Align = styled.div`
  ${props => props.apply ? alignToDisplay : null}

  width: 100%;
  max-width: 1000px;
  min-height: calc(100vh - 96px);

  background: lightblue;  


`
