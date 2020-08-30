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
  max-width: 1000px;
  
  border-radius: 8px;

  margin: 0 auto;

  padding: 8px;

  ${alignToDisplay}

`

const Content = styled.article`

  width: 100%;
  height: fit-content;

  background: var(--background-color);
  border-radius: 6px;


  padding: 48px 32px 32px 32px;
  margin: 0;


  & p a {
    font-weight: 700;
  }
  
  & p {
    
    font-size: 18px;
    margin: 0 auto 0.8rem auto;
    line-height: 1.6rem;

    width: 700px;
    max-width: 100%;

  }

  @media (min-width: 900px) {

    padding: 64px 48px 32px 48px;

    & p {
      font-size: 20px;
      line-height: 28px;

    }
  }
`
