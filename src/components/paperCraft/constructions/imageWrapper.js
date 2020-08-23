import React from 'react'
import Img from 'gatsby-image'

import styled from 'styled-components'

import Paper from '../paper'

const ImageWrapper = (props) => {

    return (
        <>
        {props.children[0].props && props.children[0].props.className === "gatsby-resp-image-wrapper" ?
            <Container>
                <Wrapper color="purple" shape="frame">
                    <Interior {...props} />
                </Wrapper>
                <Title>{props.children[0].props.children[1].props.children[3].props.title}</Title>
            </Container> 
            
        : <p {...props}/>}  
        </>
        
    )
}

export default ImageWrapper

const Container = styled.figure`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1.6rem 0;
`

const Title = styled.figcaption`
    font-style: italic;
    margin: 4px 0 0 0;
`

const Wrapper = styled(Paper)`
    max-width: 100vw;
    width: 100%;
    height: fit-content;

    @media (min-width: 768px) {
        width: 120%;
    }


`

const Interior = styled.p`

    && {
        margin: 0;
        border-radius: 8px;

        padding: 16px;
        width: calc(100% - 8px );
        height: fit-content;
    }

    & * {
        border-radius: 8px;
    }
    

`
