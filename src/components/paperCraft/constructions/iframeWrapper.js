import React from 'react'

import styled from 'styled-components'

import Paper from '../paper'

const iframeWrapper = ({title, src, children}) => {
    return (
        <Spacer>
            <Container color="green" shape="frame" >
                <iframe style={{width: "calc(100% - 42px)", height: "calc(100% - 42px)", margin: "0"}} src={src} title={title} frameBorder="no" scrolling="no" >
                    {children}
                </iframe>
            </Container>
            <Title>{title}</Title>
        </Spacer>
    )
}

export default iframeWrapper

const Spacer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.5rem 0 0.5rem 0;
`

const Title = styled.p`
    font-style: italic;
`

const Container = styled(Paper)`
    height: 420px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

`
