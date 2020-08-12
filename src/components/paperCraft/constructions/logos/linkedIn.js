import React from 'react'

import styled from 'styled-components'

import Paper from '../../paper'
import LogoFrame from '../logoFrame'

const LinkedInLogo = ({className}) => {
    return (
        <LogoFrame className={className} color="purple">
            <Square color="purple" shape="rectangle" proportional noShadow>
                <Element color="tan" shape="linkedin1" proportional noShadow/>
                <Element color="tan" shape="linkedin2" proportional noShadow/>
                <Element color="tan" shape="linkedin3" proportional noShadow/>
            </Square>
        </LogoFrame>
    )
}

const Square = styled(Paper)`
    position: relative;
    width: 65%;
`

const Element = styled(Paper)`
    position: absolute;
    width: 80%;
`



export default LinkedInLogo
