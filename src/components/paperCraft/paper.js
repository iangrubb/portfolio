import React from 'react'

import styled from 'styled-components'
import shapeData from './shapeData'

const determineHexColor = color => {
    switch(color) {
        case "red":
            return "#F93939"
        case "orange":
            return "#FD8721"
        case "yellow":
            return "#f7e384"
        case "green":
            return "#72cc3c"
        case "blue":
            return "#266bb3"
        case "purple":
            return "#3f3d5f"
        case "pink":
            return "#d43c82"
        case "tan":
            return "#ffe9aa"
        default:
            return "#333"
    }
}

const Paper = ({className, children, shape, color, proportional}) => {
    const shapeDatum = shapeData.find(s => s.name === shape)
    return (
        <Container className={className} width={shapeDatum.width} height={shapeDatum.height} proportional={proportional}>
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
    height: ${props => props.proportional ? "auto" : `${props.height}px`};
    filter: drop-shadow(2px 2px 0.5px #55555566);
`;

const BodyBase = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

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
        rgba(120, 120, 120, 0.1) 2px,
        rgba(180, 180, 180, 0.1) 6px,
        rgba(120, 120, 120, 0.1) 11px,
        rgba(160, 160, 160, 0.1) 14px,
        rgba(120, 120, 120, 0.1) 22px,
        rgba(180, 180, 180, 0.1) 25px,
        rgba(120, 120, 120, 0.1) 34px,
        rgba(180, 180, 180, 0.1) 38px,
        rgba(120, 120, 120, 0.1) 44px,
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

const Spacer = styled.div`
    width: 100%;
    padding-top: 100%;
    position: relative;
`

const StretchBody = styled(BodyBase)`
    height: 100%;
`

