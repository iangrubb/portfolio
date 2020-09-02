import React from 'react'

import styled from 'styled-components'

import Paper from '../../paper'
import LogoFrame from '../logoFrame'

const ElixirLogo = ({className}) => {
    return (
        <LogoFrame color="purple" className={className}>
            <Element color="purple" shape="elixirDrop" proportional/>
        </LogoFrame>  
    )
}

export default ElixirLogo


const Element = styled(Paper)`
    position: absolute;
    width: 80%;
`
