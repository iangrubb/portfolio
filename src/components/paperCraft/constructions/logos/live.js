import React from 'react'

import styled from 'styled-components'

import Paper from '../../paper'
import LogoFrame from '../logoFrame'

const LiveLogo = ({className, width}) => {
    return (
        <LogoFrame color="purple" width={width} className={className}>
            <Element color="purple" shape="live1" proportional noShadow/>
            <Element color="purple" shape="live2" proportional noShadow/>
            <Element color="purple" shape="live3" proportional noShadow/>
            <Element color="purple" shape="live4" proportional noShadow/>
        </LogoFrame>  
    )
}

export default LiveLogo


const Element = styled(Paper)`
    position: absolute;
    width: 75%;
`
