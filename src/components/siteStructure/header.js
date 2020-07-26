import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components'

import Paper from '../paperCraft/paper'
import PaperButton from '../paperCraft/constructions/paperButton'

const Header = () => (
  <Container>  

    <Paper color="purple" shape="home" >
        <StyledLink to="/"></StyledLink>
    </Paper>

    <PaperButton color="purple">
        <StyledLink to="/blog">Blog</StyledLink>
    </PaperButton>
    <PaperButton color="purple">
        <StyledLink to="/projects">Projects</StyledLink>
    </PaperButton>
    <PaperButton color="purple">
        <StyledLink to="/beef">About</StyledLink>
    </PaperButton>
    <PaperButton color="purple">
        <StyledLink to="/beef">Contact</StyledLink>
    </PaperButton>



    {/* <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/projects">Projects</Link> */}
  </Container>
)

const Container = styled.header`
  margin: 2rem;
  width: 800px;
  height: 80px;

  position: relative;
 
  display: flex;
  justify-content: center;
`

const StyledLink = styled(Link)`
  padding: 12px 24px;
  font-family: "Vollkorn";
  font-weight: 700;
  font-size: 1.4rem;
`




export default Header
