import React from 'react'

import styled from 'styled-components'

import shapeData from './shapeData'

const Shapes = () => {
    return (
        <SVGDefs viewBox="0 0 100 100">
            <defs>
                {shapeData.map(shape => (
                    <clipPath key={shape.name} id={shape.name} clipPathUnits="objectBoundingBox" transform={`scale(${1/shape.width} ${1/shape.height})`}>
                        <path d={shape.path} filter="url(#f3)"/>
                    </clipPath>
                ))}
            </defs>
      </SVGDefs>
    )
}

const SVGDefs = styled.svg`
    position: absolute;
    width: 0;
    height: 0;
`

export default Shapes
