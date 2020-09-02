import React from 'react'

import styled from 'styled-components'

import Paper from '../../paper'
import LogoFrame from '../logoFrame'

const CSSLogo = ({className}) => {
    return (
        <LogoFrame color="blue" className={className}>
            <Outer color="blue" shape="HTML1" proportional>
                <Inner color="tan" shape="CSS" proportional noShadow/>
            </Outer>
        </LogoFrame>  
    )
}

export default CSSLogo

const Outer = styled(Paper)`
    width: 65%;
`

const Inner = styled(Paper)`
    width: 100%;
    position: relative;
    top: 2px;
`