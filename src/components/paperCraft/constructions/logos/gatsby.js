import React from 'react'

import styled from 'styled-components'

import Paper from '../../paper'

const GatsbyLogo = ({ className}) => {
    return (
        <Container color="purple" shape="hHex" proportional className={className}>
            <Interior color="tan" shape="hHex">
                <Circle color="purple" shape="circle" proportional>
                    <Element color="tan" shape="gatsby1" proportional/>
                    <Element color="tan" shape="gatsby2" proportional/>
                </Circle>
            </Interior>
        </Container>
    )
}

export default GatsbyLogo

const Container = styled(Paper)``

const Interior = styled(Paper)`
    width: 100%;
    height: 100%;
    padding: 10%;
`

const Circle = styled(Paper)`
    width: 80%;
    position: relative;
`

const Element = styled(Paper)`
    position: absolute;
    width: 100%;
`

