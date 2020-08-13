import React from 'react'

import styled from 'styled-components'

import Paper from "../../paper"
import LogoFrame from '../logoFrame'

const GithubLogo = ({ className, width }) => {
    return (
        <LogoFrame color="purple" width={width} className={className}>
            <Element color="purple" shape="github" proportional noShadow/>
        </LogoFrame>
    )
}

const Element = styled(Paper)`
    width: 75%;
`


export default GithubLogo
