import React from 'react'

import styled from 'styled-components'

import Paper from '../paper'

const LogoFrame = ({children, className, color, width}) => {
    return (
        <Container color={color} shape="hHex" proportional width={width} className={className}>
            <Interior color="tan" shape="hHex">
                {children}
            </Interior>
        </Container>
    )
}

export default LogoFrame

const Container = styled(Paper)`
    ${props => props.width ? `width: ${props.width};` : null}
    max-width: 100%;
`

const Interior = styled(Paper)`
    width: 100%;
    height: 100%;
    padding: 10%;
`
