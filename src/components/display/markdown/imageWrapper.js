import React from 'react'

import styled from 'styled-components'

import Paper from '../../paperCraft/paper'

const ImageWrapper = (props) => {

    return (
        <>
        {props.children[0].props && props.children[0].props.className === "gatsby-resp-image-wrapper" ?
            <Container>
                <Wrapper color="purple" >
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
    margin: 24px 0 12px 0;

    @media (min-width: 900px) {
        margin: 32px 0;
    }
    
`

const Title = styled.figcaption`
    font-style: italic;
    margin: 8px 0 0 0;

    @media (min-width: 900px) {
        margin: 12px 0 0 0;
    }
`

const Wrapper = styled(Paper)`
    
    width: 100%;
    height: fit-content;

    padding: 6px;

    @media (min-width: 900px) {
        padding: 8px;
    }

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
