import React from 'react'

import styled from 'styled-components'

import Paper from '../paper'

const iframeWrapper = ({title, src, children}) => {
    return (
        <Spacer>
            <Container color="green" shape="frame" >
                <Frame  src={src} title={title} frameBorder="no" scrolling="no" >
                    {children}
                </Frame>
            </Container>
            
            <Title>{title}</Title>
            
        </Spacer>
    )
}

export default iframeWrapper

const Spacer = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.6rem 0;
`

const Title = styled.figcaption`
    font-style: italic;
    margin: 4px 0 0 0;
`

const Container = styled(Paper)`
    height: 420px;
    width: 100%;
    max-width: var(--full-screen);

    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        width: 120%;
    }

`

const Frame = styled.iframe`
    
    margin: 0;
    border-radius: 8px;

    width: calc(100% - 28px);
    height: calc(100% - 28px);

    @media (min-width: 768px) {
        width: calc(100% - 42px);
        height: calc(100% - 42px);
    }


`
