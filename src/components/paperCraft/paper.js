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

const Paper = ({className, children, shape, color, proportional, noShadow, clickHandler, fit, bodyCSS}) => {
    const shapeDatum = shapeData.find(s => s.name === shape)
    return (
        <Container className={className} width={shapeDatum ? shapeDatum.width : 100} height={shapeDatum ? shapeDatum.height : 100} fit={fit} proportional={proportional} noShadow={noShadow} onClick={clickHandler}>
            {proportional ?
            <Spacer>
                <ProportionalBody shape={shape} color={determineHexColor(color)} bodyCSS={bodyCSS} >
                    {children}
                </ProportionalBody>
            </Spacer>
            :
            <StretchBody fit={fit} shape={shape} color={determineHexColor(color)} bodyCSS={bodyCSS}>{children}</StretchBody>
            }
        </Container>
    )
}

export default Paper

const Container = styled.div`
    width: ${props => props.width}px;
    height: ${props => props.proportional ? "auto" : `${props.height}px`};
    ${props => props.noShadow ? null : "filter: drop-shadow(1px 1px 1px #302d3877);"}
    ${props => props.fit ? "height: fit-content; width: fit-content" : null}
`;

const BodyBase = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;

    ${props => props.shape ?
    `clip-path: url(#${props.shape});`
    : null}

    

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
        rgba(160, 160, 160, 0.13) 25px
        ),
        ${props => props.color};
`

const ProportionalBody = styled(BodyBase)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    ${props => props.bodyCSS ? props.bodyCSS : null}
`

const Spacer = styled.div`
    width: 100%;
    padding-top: 100%;
    position: relative;
`

const StretchBody = styled(BodyBase)`
    height: 100%;
    ${props => props.fit ? "height: fit-content; width: fit-content" : null}

    ${props => props.bodyCSS ? props.bodyCSS : null}
`

