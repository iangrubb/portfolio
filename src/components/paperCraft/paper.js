import React from 'react'

import styled from 'styled-components'
import shapeData from './shapeData'

const determineHexColor = color => {
    switch(color) {
        case "red":
            return "#DC3840"
        case "orange":
            return "#E35C26"
        case "yellow":
            return "#ECD725"
        case "green":
            return "#65D71D"
        case "blue":
            return "#1DAAE2"
        case "purple":
            return "#68288F"
        case "pink":
            return "#D12E9B"
        case "tan":
            return "#E9DEBE"
        default:
            return "#333"
    }
}

const Paper = ({className, children, shape, color, proportional}) => {
    const shapeDatum = shapeData.find(s => s.name === shape)
    return (
        <Container className={className} width={shapeDatum.width} height={shapeDatum.height}>
            {proportional ?
            <Spacer>
                <ProportionalBody shape={shape} color={determineHexColor(color)} >
                    {children}
                </ProportionalBody>
            </Spacer>
            :
            <StretchBody shape={shape} color={determineHexColor(color)}>{children}</StretchBody>
            }
        </Container>
    )
}

export default Paper

const Container = styled.div`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    filter: drop-shadow(4px 4px 2px #322F3744);
`;

const BodyBase = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    clip-path: url(#${props => props.shape});
    shape-outside: url(#${props => props.shape});

    background: repeating-linear-gradient(
        30deg,
        rgba(200, 200, 200, 0.1),
        rgba(175, 175, 175, 0.1) 20px,
        rgba(200, 200, 200, 0.1) 40px
        ),
        repeating-linear-gradient(
        -30deg,
        rgba(200, 200, 200, 0.1),
        rgba(175, 175, 175, 0.1) 20px,
        rgba(200, 200, 200, 0.1) 40px
        ),
        repeating-linear-gradient(
        rgba(160, 160, 160, 0.1),
        rgba(80, 80, 80, 0.1) 2px,
        rgba(180, 180, 180, 0.1) 6px,
        rgba(100, 100, 100, 0.1) 11px,
        rgba(160, 160, 160, 0.1) 14px,
        rgba(100, 100, 100, 0.1) 22px,
        rgba(180, 180, 180, 0.1) 25px,
        rgba(80, 80, 80, 0.1) 34px,
        rgba(180, 180, 180, 0.1) 38px,
        rgba(100, 100, 100, 0.1) 44px,
        rgba(160, 160, 160, 0.1) 50px
        ),
        ${props => props.color};
`

const ProportionalBody = styled(BodyBase)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

const StretchBody = styled(BodyBase)`
    width: 100%;
    height: 100%;
`

const Spacer = styled.div`
    width: 100%;
    padding-top: 100%;
    position: relative;
`