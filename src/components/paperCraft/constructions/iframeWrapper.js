import React from 'react'

import styled, { css } from 'styled-components'

import Paper from '../paper'
import FrameBox from '../../display/frameBox'

const iframeWrapper = (props) => {

    const {title, src, children, vratio} = props
    console.log(vratio)
    return (
        <Spacer>
            <Container color="purple" innerCSS={innerCSS}>
                <Prop vratio={vratio}>
                    <Frame  src={src} title={title} frameBorder="no" scrolling="no" >
                        {children}
                    </Frame>
                </Prop>
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

const Container = styled(FrameBox)`

    height: fit-content;
    width: 100%;
    max-width: 100vw;


    display: flex;
    justify-content: center;
    align-items: center;
    

    @media (min-width: 768px) {
        width: 120%;
    }

`

const innerCSS = css`
    width: calc(100% - 16px);
    height: fit-content;
    margin: 8px auto;
`


const Prop = styled.div`
    width: 100%;
    height: 0%;
    padding-top: ${props => props.vratio || 60}%;

    position: relative;

`

const Frame = styled.iframe`

    background: white;

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    

    border-radius: 2px;

    margin: 0;
    
    
    /* margin: 0;
    border-radius: 8px;

    margin: 16px;
    width: 800px; */

    /* max-width: 90vw; */

/* 
    width: calc(100% - 20px - 2vw);
    height: calc(100% - 20px - 2vw); */

    @media (min-width: 768px) {
        /* width: calc(100% - 40px);
        height: calc(100% - 40px); 
        
        width: 300px;
        height: 500px; */
        
    }

`


