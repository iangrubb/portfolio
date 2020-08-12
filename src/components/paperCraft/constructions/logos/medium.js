import React from 'react'

import styled from 'styled-components'

import Paper from "../../paper"
import LogoFrame from '../logoFrame'

const MediumLogo = ({className}) => {
    return (
        <LogoFrame color="purple" className={className}>
            <Element color="purple" shape="medium" proportional noShadow/>
        </LogoFrame>
    )
}

const Element = styled(Paper)`
    width: 65%;
`

export default MediumLogo
