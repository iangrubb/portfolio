import React from 'react'

import styled from 'styled-components'

import Paper from '../../paper'
import LogoFrame from '../logoFrame'

const JSLogo = ({className}) => {
    return (
        <LogoFrame color="yellow" className={className}>
            <Outer color="yellow" shape="HTML1" proportional >
                <Inner color="tan" shape="JS1" proportional noShadow/>
                <Inner color="tan" shape="JS2" proportional noShadow/>
            </Outer>
        </LogoFrame>  
    )
}

export default JSLogo

const Outer = styled(Paper)`
    position: relative;
    width: 65%;
`

const Inner = styled(Paper)`
    position: absolute;
    width: 100%;
`