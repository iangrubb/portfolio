import React from 'react'

import styled from 'styled-components'

import Paper from '../../paper'
import LogoFrame from '../logoFrame'

const LearnLogo = ({className, width}) => {
    return (
        <LogoFrame color="purple" width={width} className={className}>
            <Element color="purple" shape="learn1" proportional noShadow/>
            <Element color="tan" shape="learn2" proportional noShadow/>
        </LogoFrame>  
    )
}

export default LearnLogo

const Element = styled(Paper)`
    position: absolute;
    width: 55%;
`
