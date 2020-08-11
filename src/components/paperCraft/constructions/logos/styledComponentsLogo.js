import React from 'react'

import styled from 'styled-components'

import Paper from '../../paper'
import LogoFrame from '../logoFrame'

const StyledComponentsLogo = ({className}) => {
    return (
        <LogoFrame color="pink" className={className}>
            <Element color="pink" shape="SCarrow" proportional/>
            <Element color="pink" shape="SC1" proportional/>
            <Element color="pink" shape="SC2" proportional/>
            <Element color="pink" shape="SC3" proportional/>
            <Element color="pink" shape="SC4" proportional/>
            <Element color="pink" shape="SCarrow2" proportional/>
        </LogoFrame>  
    )
}

export default StyledComponentsLogo


const Element = styled(Paper)`
    position: absolute;
    width: 70%;
`