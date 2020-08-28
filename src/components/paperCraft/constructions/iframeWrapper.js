import React from 'react'

import styled from 'styled-components'

import Paper from '../paper'

const iframeWrapper = ({title, src, children, w, h}) => {

    // For a responsive aspect ratio, provide w and h for dimensions.

    return (
        <Spacer>
            <Container color="purple" >

                { w && h ? 
                <Prop width={w} height={h} >
                    <AspectFrame  src={src} title={title} frameBorder="no" scrolling="no" >
                        {children}
                    </AspectFrame>
                </Prop>
                :
                <Frame  src={src} title={title} frameBorder="no" scrolling="no" >
                    {children}
                </Frame>
                }
                
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
    margin: 32px 0;

    width: 100%;
`

const Title = styled.figcaption`
    font-style: italic;
    margin: 12px 0 0 0;
`

const Container = styled(Paper)`

    height: fit-content;
    width: 100%;

    padding: 8px;

    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;
    

`

const Frame = styled.iframe`
    border-radius: 8px;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 50vh;
`

const Prop = styled.div`
    width: 100%;
    height: 0;
    padding-top: ${props => `calc((${props.height} / ${props.width}) * 100%)`};

    position: relative;

`

const AspectFrame = styled.iframe`


    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    

    border-radius: 4px;

    margin: 0;

    

`


