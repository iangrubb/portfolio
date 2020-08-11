import React from 'react'

import styled from 'styled-components'

import Paper from '../../paper'
import LogoFrame from '../logoFrame'

const ReactLogo = ({className}) => {
    return (
        <LogoFrame color="blue" className={className}>
            <Orbit color="blue" shape="orbit" angle={60} />
            <Orbit color="blue" shape="orbit" angle={0} />
            <Orbit color="blue" shape="orbit" angle={-60} />
            <Dot color="blue" shape="dot" proportional/>
        </LogoFrame>  
    )
}

export default ReactLogo

const Orbit = styled(Paper)`
    position: absolute;
    width: 70%;
    height: 50%;
    transform: rotate(${props => props.angle}deg);
`

const Dot = styled(Paper)`
    position: absolute;
    width: 8%;

`
