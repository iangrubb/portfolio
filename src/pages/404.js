import React from "react"

import styled from 'styled-components'

import Layout from "../components/siteStructure/layout"
import SEO from "../components/seo"

import Paper from '../components/paperCraft/paper'
import NavLink from '../components/paperCraft/constructions/navLink'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <Container>

      <Message>Sorry, I can't seem to find that one...</Message>


      <Figure color="pink" shape="hHex">
        <Flex>
          <Number color="tan" shape="four" />
          <Number color="tan" shape="zero">
            <InnerNumber color="pink" shape="zero" noShadow/>
          </Number>
          <Number color="tan" shape="four" />
        </Flex>
      </Figure>


      <Links>
        <NavLink path="/blog" text="Blog" />
        <Apple color="pink" shape="apple" proportional/>
        <NavLink path="/projects" text="Projects" />
        <Apple color="pink" shape="apple" proportional/>
        <NavLink path="/about" text="About" />       
      </Links>

    </Container>

  </Layout>
)

export default NotFoundPage

const Container = styled.div`
  min-height: 70vh;
  width: 90vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Figure = styled(Paper)`
  width: 300px;
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

const Message = styled.h1`
  margin: 0 0 32px 0;
  max-width: 400px;
  font-size: 42px;
  text-align: center;

`

const Links = styled.div`
  grid-area: links;
  place-self: center;

  display: flex;
  align-items: center;
`

const Apple = styled(Paper)`
    width: 16px;
    @media (min-width: 340px) {
      display: block;
      width: 20px;
    }
`
