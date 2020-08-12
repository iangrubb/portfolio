import React from 'react'

import styled from 'styled-components'
import shapeData from './shapeData'

const determineHexColor = color => {
    switch(color) {
        case "red":
            return "#da2929"
        case "orange":
            return "#ff881b"
        case "yellow":
            return "#efbb00"
        case "green":
            return "#64b732"
        case "blue":
            return "#45a7d0"
        case "purple":
            return "#3d3752"
        case "pink":
            return "#ea4964"
        case "tan":
            return "#efdfd2"
        default:
            return "#333"
    }
}

const Paper = ({className, children, shape, color, proportional, noShadow}) => {
    const shapeDatum = shapeData.find(s => s.name === shape)
    return (
        <Container className={className} width={shapeDatum.width} height={shapeDatum.height} proportional={proportional} noShadow={noShadow}>
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
    ${props => props.noShadow ? null : "filter: drop-shadow(1px 1px 1px #302d3877);"}
    
`;

const BodyBase = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

    clip-path: url(#${props => props.shape});
    shape-outside: url(#${props => props.shape});

    background: repeating-linear-gradient(
        30deg,
        rgba(200, 200, 200, 0.06),
        rgba(175, 175, 175, 0.06) 20px,
        rgba(200, 200, 200, 0.06) 40px
        ),
        repeating-linear-gradient(
        -30deg,
        rgba(200, 200, 200, 0.06),
        rgba(175, 175, 175, 0.06) 20px,
        rgba(200, 200, 200, 0.06) 40px
        ),
        repeating-linear-gradient(
        rgba(160, 160, 160, 0.13),
        rgba(120, 120, 120, 0.13) 2px,
        rgba(180, 180, 180, 0.13) 6px,
        rgba(120, 120, 120, 0.13) 11px,
        rgba(160, 160, 160, 0.13) 14px,
        rgba(120, 120, 120, 0.13) 22px,
        rgba(180, 180, 180, 0.13) 25px,
        rgba(120, 120, 120, 0.13) 34px,
        rgba(180, 180, 180, 0.13) 38px,
        rgba(120, 120, 120, 0.13) 44px,
        rgba(160, 160, 160, 0.13) 50px
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

