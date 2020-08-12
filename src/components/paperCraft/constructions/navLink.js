import React from 'react'
import styled from 'styled-components'

import { Link } from 'gatsby'
import Paper from '../paper'

const NavLink = ({path, text}) => {
    return (
        <Container color="purple" shape="rectangle">
          <StyledLink to={path}>{text}</StyledLink>
        </Container>
    )
}

const Container = styled(Paper)`
  color: var(--background-color);
  width: fit-content;
  height: fit-content;
  margin: 0 0.2rem;
  @media (min-width: 768px) {
    margin: 0 0.4rem;
  }
`

const StyledLink = styled(Link)`
  margin: 0.3rem 0.6rem 0.2rem 0.6rem;
  font-family: "Vollkorn";
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 1.4px;

  @media (min-width: 768px) {
    margin: 0.4rem 0.6rem 0.3rem 0.6rem;
    font-weight: 900;
    font-size: 20px;
    letter-spacing: 1.5px;
  }

`



export default NavLink
