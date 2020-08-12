import React from 'react'

import styled from 'styled-components'

import Paper from '../../paper'
import LogoFrame from '../logoFrame'

const GatsbyLogo = ({className}) => {
    return (
        <LogoFrame color="purple" className={className}>
            <Circle color="purple" shape="circle" proportional noShadow>
                <Element color="tan" shape="gatsby1" proportional noShadow/>
                <Element color="tan" shape="gatsby2" proportional noShadow/>
            </Circle>
        </LogoFrame>  
    )
}

export default GatsbyLogo

const Circle = styled(Paper)`
    width: 75%;
    position: relative;
`

const Element = styled(Paper)`
    position: absolute;
    width: 100%;
`

