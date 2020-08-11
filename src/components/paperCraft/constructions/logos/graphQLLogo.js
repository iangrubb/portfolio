import React from 'react'

import styled from 'styled-components'

import Paper from '../../paper'
import LogoFrame from '../logoFrame'

const GraphQLLogo = ({className}) => {
    return (
        <LogoFrame color="pink" className={className}>

            <Bar color="pink" shape="frame" x={50} y={25} length={42} angle={60} />
            <Bar color="pink" shape="frame" x={72} y={61} length={42} angle={180} />
            <Bar color="pink" shape="frame" x={28} y={61} length={42} angle={300} />

            <Bar color="pink" shape="frame" x={50} y={25} length={25} angle={32} />
            <Bar color="pink" shape="frame" x={72} y={39} length={25} angle={90} />
            <Bar color="pink" shape="frame" x={72} y={61} length={25} angle={146} />
            <Bar color="pink" shape="frame" x={50} y={75} length={25} angle={212} />
            <Bar color="pink" shape="frame" x={28} y={61} length={25} angle={270} />
            <Bar color="pink" shape="frame" x={28} y={39} length={25} angle={328} />

            <Dot color="pink" shape="dot" x={50} y={25} proportional/>
            <Dot color="pink" shape="dot" x={72} y={39} proportional/>
            <Dot color="pink" shape="dot" x={72} y={61} proportional/>
            <Dot color="pink" shape="dot" x={50} y={75} proportional/>
            <Dot color="pink" shape="dot" x={28} y={61} proportional/>
            <Dot color="pink" shape="dot" x={28} y={39} proportional/>

        </LogoFrame>  
    )
}

export default GraphQLLogo


const Dot = styled(Paper)`
    position: absolute;
    top: ${props => props.y}%;
    left: ${props => props.x}%;
    transform: translate(-50%, -50%);
    width: 10%;
`

const Bar = styled(Paper)`
    position: absolute;
    top: ${props => props.y}%;
    left: ${props => props.x}%;
    transform-origin: center left;
    transform: translate(0, -50%) rotate(${props => props.angle}deg);

    width: ${props => props.length}%;
    height: 4%;
`