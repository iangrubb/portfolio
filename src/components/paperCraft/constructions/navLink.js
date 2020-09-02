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
  margin: 2px;
  @media (min-width: 900px) {
    margin: 0 4px;
  }
`

const StyledLink = styled(Link)`
  margin: 10px 12px 7px 12px;
  font-family: "Vollkorn";
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 1px;

  @media (min-width: 900px) {
    margin: 0.6rem 1rem 0.5rem 1rem;
    font-size: 24px;
    letter-spacing: 1.5px;
  }

`



export default NavLink
