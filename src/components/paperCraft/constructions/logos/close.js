import React from 'react'

import styled from 'styled-components'

import Paper from "../../paper"
import LogoFrame from '../logoFrame'

const CloseLogo = ({ className, width, clickHandler }) => {
    return (
        <LogoFrame color="green" width={width} className={className} clickHandler={clickHandler}>
            <Element color="green" shape="x" noShadow proportional/>
        </LogoFrame>
    )
}

const Element = styled(Paper)`
    width: 75%;
`


export default CloseLogo
