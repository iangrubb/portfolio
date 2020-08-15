import React from 'react'

import styled from 'styled-components'

import Paper from "../../paper"
import LogoFrame from '../logoFrame'

const HamburgerLogo = ({ className, width, clickHandler }) => {
    return (
        <LogoFrame color="green" width={width} className={className} clickHandler={clickHandler}>
            <Element color="green" shape="frame" noShadow/>
            <Element color="green" shape="frame" noShadow/>
            <Element color="green" shape="frame" noShadow/>
        </LogoFrame>
    )
}

const Element = styled(Paper)`
    width: 60%;
    height: 12%;
    margin: 4% 0;
`


export default HamburgerLogo
