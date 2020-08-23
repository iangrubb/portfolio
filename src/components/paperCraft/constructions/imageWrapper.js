import React from 'react'
import Img from 'gatsby-image'

import styled, { css } from 'styled-components'

import Paper from '../paper'
import FrameBox from '../../display/frameBox'

const ImageWrapper = (props) => {

    return (
        <>
        {props.children[0].props && props.children[0].props.className === "gatsby-resp-image-wrapper" ?
            <Container>
                <Wrapper color="purple" innerCSS={innerCSS}>
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

const Wrapper = styled(FrameBox)`
    max-width: 100vw;
    width: 100%;
    height: fit-content;

    @media (min-width: 768px) {
        width: 120%;
    }

`


const innerCSS = css`
    width: calc(100% - 16px);
    height: fit-content;
    margin: 8px auto;
`


const Interior = styled.p`

    && {
        margin: 0;
        border-radius: 2px;

        width: 100%;
        height: fit-content;
    }

    & * {
        border-radius: 4px;
    }
    

`
