import React from 'react'

import styled from 'styled-components'

import Paper from '../../paper'
import LogoFrame from '../logoFrame'

const PhoenixLogo = ({className}) => {
    return (
        <LogoFrame color="orange" className={className}>
            <Element color="orange" shape="phoenix1" proportional/>
            <Element color="tan" shape="phoenix2" proportional/>
        </LogoFrame>  
    )
}

export default PhoenixLogo


const Element = styled(Paper)`
    position: absolute;
    width: 60%;
`

