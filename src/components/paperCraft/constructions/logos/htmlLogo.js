import React from 'react'

import styled from 'styled-components'

import Paper from '../../paper'
import LogoFrame from '../logoFrame'

const HTMLLogo = ({className}) => {
    return (
        <LogoFrame color="orange" className={className}>
            <Outer color="orange" shape="HTML1" proportional noShadow>
                <Inner color="tan" shape="HTML2" proportional noShadow/>
            </Outer>
        </LogoFrame>  
    )
}

export default HTMLLogo

const Outer = styled(Paper)`
    width: 65%;
`

const Inner = styled(Paper)`
    width: 100%
`