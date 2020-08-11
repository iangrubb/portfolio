import React from 'react'

import styled from 'styled-components'

import Paper from '../../paper'
import LogoFrame from '../logoFrame'

const RubyLogo = ({className}) => {
    return (
        <LogoFrame color="red" className={className}>
            <Element color="red" shape="ruby1" proportional/>
            <Element color="red" shape="ruby2" proportional/>
            <Element color="red" shape="ruby3" proportional/>
        </LogoFrame>  
    )
}

export default RubyLogo


const Element = styled(Paper)`
    position: absolute;
    width: 55%;
`
