import React from 'react'

import styled from 'styled-components'

import Paper from '../paper'

const LogoFrame = ({children, className, color}) => {
    return (
        <Container color={color} shape="hex" proportional className={className}>
            <Interior color="tan" shape="hex">
                {children}
            </Interior>
        </Container>
    )
}

export default LogoFrame

const Container = styled(Paper)``

const Interior = styled(Paper)`
    width: 100%;
    height: 100%;
    padding: 10%;
`
