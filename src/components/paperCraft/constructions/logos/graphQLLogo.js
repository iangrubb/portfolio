import React from 'react'

import styled from 'styled-components'

import Paper from '../../paper'
import LogoFrame from '../logoFrame'

const GraphQLLogo = ({className}) => {
    return (
        <LogoFrame color="pink" className={className}>

            <Bar color="pink" shape="frame" x={50} y={25} length={42} angle={60} noShadow/>
            <Bar color="pink" shape="frame" x={72} y={61} length={42} angle={180} noShadow/>
            <Bar color="pink" shape="frame" x={28} y={61} length={42} angle={300} noShadow/>

            <Bar color="pink" shape="frame" x={50} y={25} length={25} angle={32} noShadow/>
            <Bar color="pink" shape="frame" x={72} y={39} length={25} angle={90} noShadow/>
            <Bar color="pink" shape="frame" x={72} y={61} length={25} angle={146} noShadow/>
            <Bar color="pink" shape="frame" x={50} y={75} length={25} angle={212} noShadow/>
            <Bar color="pink" shape="frame" x={28} y={61} length={25} angle={270} noShadow/>
            <Bar color="pink" shape="frame" x={28} y={39} length={25} angle={328} noShadow/>

            <Dot color="pink" shape="dot" x={50} y={25} proportional noShadow/>
            <Dot color="pink" shape="dot" x={72} y={39} proportional noShadow/>
            <Dot color="pink" shape="dot" x={72} y={61} proportional noShadow/>
            <Dot color="pink" shape="dot" x={50} y={75} proportional noShadow/>
            <Dot color="pink" shape="dot" x={28} y={61} proportional noShadow/>
            <Dot color="pink" shape="dot" x={28} y={39} proportional noShadow/>

        </LogoFrame>  
    )
}

export default GraphQLLogo


const Dot = styled(Paper)`
    position: absolute;
    top: ${props => props.y * 1.3 - 15}%;
    left: ${props => props.x * 1.3 - 15}%;
    transform: translate(-50%, -50%);
    width: 15%;
`

const Bar = styled(Paper)`
    position: absolute;
    top: ${props => props.y * 1.3 - 15}%;
    left: ${props => props.x * 1.3 - 15}%;
    transform-origin: center left;
    transform: translate(0, -50%) rotate(${props => props.angle}deg);

    width: ${props => props.length * 1.25}%;
    height: 5%;
`