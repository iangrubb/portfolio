import React from 'react'
import { Link } from "gatsby"

import styled from 'styled-components'

import Paper from '../paperCraft/paper'

const SideLink = ({path, name, active}) => {
    return (
        <LinkArea active={active ? "true" : "false"}>
            <Link to={path}>
            <Container color="purple">
                <InnerWrapper>
                    <Heading>{name}</Heading>
                </InnerWrapper> 
            </Container>
            </Link>
            <Pointer color="pink" shape="arrow" proportional active={active} />    
        </LinkArea>
    )
}

export default SideLink

const LinkArea = styled.div`
    width: 100%;
    transition: transform 0.2s ease;
    transform: translateX(${props => props.active === "true" ? "10px" : "0"});


    position: relative;
`

const Container = styled(Paper)`

    position: relative;
    z-index: 1;

    margin: 0 0 6px 10%;
    height: 36px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    position: relative;

    width: 80%;

    border-radius: 8px;

    color: var(--background-color);

    @media (min-height: 750px) {
        margin: 0 0 8px 5%;
        height: 40px;
        width: 90%;
    }

   

`

const InnerWrapper = styled.div`
    width: fit-content;
    
`

const Heading = styled.h2`
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    font-family: var(--display-font);

    @media (min-height: 750px) {
        font-size: 24px;
    }
`


const Pointer = styled(Paper)`
    position: absolute;
    left: 0;
    top: 50%;
    z-index: -1;
    transform: translate(${props => props.active ? "-15" : "20"}px, -50%);
    transition: transform 0.2s ease;

    width: 24px;

    @media (min-height: 750px) {
        transform: translate(${props => props.active ? "-25" : "10"}px, -50%);
        width: 30px;
    }

`
