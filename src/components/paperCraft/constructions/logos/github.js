import React from 'react'

import styled from 'styled-components'

import Paper from "../../paper"
import LogoFrame from '../logoFrame'

const GithubLogo = ({ className }) => {
    return (
        <LogoFrame className={className} color="purple" >
            <Element color="purple" shape="github" proportional />
        </LogoFrame>
    )
}

const Element = styled(Paper)`
    width: 75%;
`


export default GithubLogo
