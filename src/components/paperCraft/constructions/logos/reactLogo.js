import React from 'react'

import styled from 'styled-components'

import Paper from '../../paper'
import LogoFrame from '../logoFrame'

const ReactLogo = ({className}) => {
    return (
        <LogoFrame color="blue" className={className}>
            <Orbit color="blue" shape="orbit" angle={60} noShadow/>
            <Orbit color="blue" shape="orbit" angle={0} noShadow/>
            <Orbit color="blue" shape="orbit" angle={-60} noShadow/>
            <Dot color="blue" shape="dot" proportional noShadow/>
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
