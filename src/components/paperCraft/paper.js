import React from 'react'

import styled, {css} from 'styled-components'
import shapeData from './shapeData'

const determineHexColor = color => {
    switch(color) {
        case "red":
            return "#da2929"
        case "orange":
            return "#ff881b"
        case "yellow":
            return "#d6a20e"
        case "green":
            return "#5b9a33"
        case "blue":
            return "#45a7d0"
        case "purple":
            return "#342f44"
        case "pink":
            return "#da2a48"
        case "tan":
            return "#d4c0b1"
        default:
            return "#333"
    }
}

const Paper = ({className, children, shape, color, proportional, noShadow, fit}) => {

    const shapeDatum = shapeData.find(s => s.name === shape)

    const renderWithoutSvg = () => {
        return <BasicPaper className={className} color={determineHexColor(color)} noShadow={noShadow} >{children}</BasicPaper>
    }

    const renderProportional = () => {
        return (
            <PropContainer className={className} width={shapeDatum.width}>
                <Spacer width={shapeDatum.width} height={shapeDatum.height}>
                    <ProportionalPaper color={determineHexColor(color)} shape={shape}>
                        {children}
                    </ProportionalPaper>
                    {noShadow ? null :<ShadowBody shape={shape} />}
                </Spacer>
            </PropContainer>
        )
    }

    const renderStretch = () => {
        return (
            <StretchContainer className={className} width={shapeDatum.width} height={shapeDatum.height} fit={fit}>
                <StretchPaper color={determineHexColor(color)} shape={shape} fit={fit}>
                    {children}
                </StretchPaper>
                {noShadow ? null :<ShadowBody shape={shape} />}
            </StretchContainer>
        )
    }

    const determineRenderStyle = () => {
        if (!shapeDatum) {
            return renderWithoutSvg()
        } else if (proportional) {
            return renderProportional()
        } else {
            return renderStretch()
        }
    }

    return ( determineRenderStyle() )
}

export default Paper


const paperGradient = css`
    background: 
        repeating-linear-gradient(
        10deg,
        rgba(200, 200, 200, 0.05),
        rgba(175, 175, 175, 0.05) 20px,
        rgba(200, 200, 200, 0.05) 40px
        ),
        repeating-linear-gradient(
        -10deg,
        rgba(200, 200, 200, 0.05),
        rgba(175, 175, 175, 0.05) 20px,
        rgba(200, 200, 200, 0.05) 40px
        ),
        repeating-linear-gradient(
        rgba(160, 160, 160, 0.08),
        rgba(120, 120, 120, 0.08) 2px,
        rgba(180, 180, 180, 0.08) 6px,
        rgba(120, 120, 120, 0.08) 11px,
        rgba(160, 160, 160, 0.08) 14px,
        rgba(120, 120, 120, 0.08) 22px,
        rgba(160, 160, 160, 0.08) 25px
        ),
        ${props => props.color};
`

const BasicPaper = styled.div`
    width: fit-content;
    height: fit-content;

    ${paperGradient};

    box-shadow: ${props => props.noShadow ? "none" : "2px 2px 0 var(--shadow)"};
    border-radius: 4px;
`

const PropContainer = styled.div`

    width: ${props => props.width}px;

    clip-path: url(#${props => props.shape});

`

const Spacer = styled.div`
    width: 100%;
    padding-top: calc((${props => props.height / props.width}) * 100% );
    position: relative;
    z-index: 1;
`

const StretchContainer = styled.div`
    position: relative;
    z-index: 1;

    width: ${props => props.width};
    height: ${props => props.height};
    ${props => props.fit ? "height: fit-content; width: fit-content" : null}
`

const ShadowBody = styled.div`
    background: var(--shadow);
    position: absolute;
    top: 2px;
    left: 2px;
    height: 100%;
    width: 100%;
    z-index: -1;
    clip-path: url(#${props => props.shape});
`

const NestedPaper = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    clip-path: url(#${props => props.shape});

    ${paperGradient};
        
`

const ProportionalPaper = styled(NestedPaper)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`


const StretchPaper = styled(NestedPaper)`
    width: 100%;
    height: 100%;
    ${props => props.fit ? "height: fit-content; width: fit-content" : null}

`

