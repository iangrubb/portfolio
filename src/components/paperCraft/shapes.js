import React from 'react'

import styled from 'styled-components'

const Shapes = () => {
    return (
        <SVGDefs viewBox="0 0 100 100">
            <defs>
                <clipPath id="hex" clipPathUnits="objectBoundingBox" transform="scale(0.005 0.005)">
                    <path d="m45.02263,138.21409c-2.26244,-7.23982 -3.16741,-67.3784 -0.22624,-71.24576c2.94117,-3.86737 56.33484,-39.61397 63.12217,-39.16148c6.78732,0.45249 47.96379,34.84163 50.67873,39.819c2.71494,4.97737 4.0724,70.58825 1.35747,73.75566c-2.71493,3.16741 -53.84616,33.03167 -58.82353,33.03167c-4.97737,0 -53.84616,-28.95927 -56.1086,-36.19909z" />
                </clipPath>
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
