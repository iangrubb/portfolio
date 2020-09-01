import React from 'react'

import styled from 'styled-components'

import alignToDisplay from '../alignToDisplay'

import Paper from '../../paperCraft/paper'

const BodyContent = ({ children, defaultDisplay }) => {
    return (
        <Wrapper color="tan" defaultDisplay={defaultDisplay} noShadow>
          <Content>
            {children}
          </Content>
        </Wrapper>
    )
}

export default BodyContent


const Wrapper = styled(Paper)`

  width: 100%;
  max-width: 900px;
  
  border-radius: 8px;

  margin: 0 auto;

  padding: 6px;

  ${alignToDisplay}

`

const Content = styled.article`

  width: 100%;
  height: fit-content;

  background: var(--background-color);
  border-radius: 6px;

  padding: 32px 20px;
  margin: 0;


  & p a {
    font-weight: 700;
  }
  
  & p {
    
    font-size: 16px;
    line-height: 24px;
    margin: 0 auto 0.8rem auto;
    

    width: 700px;
    max-width: 100%;

  }

  @media (min-width: 500px) {
    padding: 48px 32px 32px 32px;
    & p { 
      font-size: 18px;
      line-height: 26px;
    }
  }

  @media (min-width: 900px) {

    padding: 64px 48px 32px 48px;

    & p {
      font-size: 20px;
      line-height: 28px;

    }
  }
`
