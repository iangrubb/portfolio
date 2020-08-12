import React from 'react'

import styled from 'styled-components'

import Paper from '../../paper'
import LogoFrame from '../logoFrame'

const RailsLogo = ({className}) => {
    return (
        <LogoFrame color="red" className={className}>
            <Element color="red" shape="rails" proportional noShadow/>
        </LogoFrame>  
    )
}

export default RailsLogo


const Element = styled(Paper)`
    position: absolute;
    width: 55%;
`
