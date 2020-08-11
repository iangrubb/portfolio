import React from 'react'

import styled from 'styled-components'

import Paper from '../../paper'
import LogoFrame from '../logoFrame'

const ReactLogo = ({className}) => {
    return (
        <LogoFrame color="purple" className={className}>
            <Orbit color="purple" shape="redux" angle={120} proportional/>
            <Orbit color="purple" shape="redux" angle={0} proportional/>
            <Orbit color="purple" shape="redux" angle={-120} proportional/>
        </LogoFrame>  
    )
}

export default ReactLogo

const Orbit = styled(Paper)`
    position: absolute;
    width: 60%;
    transform: rotate(${props => props.angle}deg);
`
