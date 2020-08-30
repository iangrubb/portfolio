import React from "react"

import styled from 'styled-components'

import SEO from "../components/seo"

import Paper from '../components/paperCraft/paper'

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />

    <Container>

      <Figure color="pink" shape="hHex">
        <Flex>
          <Number color="tan" shape="four" proportional />
          <Number color="tan" shape="zero" proportional >
            <InnerNumber color="pink" shape="zero" noShadow proportional />
          </Number>
          <Number color="tan" shape="four" proportional />
        </Flex>
      </Figure>

      <MessageWrapper color="tan">
        <Message>Sorry, I can't seem to find that one...</Message>
      </MessageWrapper>
      
    </Container>

  </>
)

export default NotFoundPage

const Container = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Figure = styled(Paper)`
  width: 350px;
  height: 175px;
  margin: 0 0 32px 0;
`

const Flex = styled.div`
  display: flex;
`

const Number = styled(Paper)`
  margin: 0 -10px;
`

const InnerNumber = styled(Paper)`
  padding: 18px;
`

const MessageWrapper = styled(Paper)`
  padding: 8px;
  border-radius: 8px;
`

const Message = styled.h1`
  padding: 8px;
  margin: 0;
  border-radius: 6px;
  max-width: 300px;
  font-size: 32px;
  text-align: center;
  background: var(--background-color);

`