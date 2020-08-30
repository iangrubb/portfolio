import React from 'react'
import { Link } from "gatsby"

import styled from 'styled-components'

import Paper from '../paperCraft/paper'

const SideLink = ({path, name, active}) => {
    return (
        <LinkArea to={path} active={active ? "true" : "false"}>
            <Container color="purple">
                <InnerWrapper>
                    <Heading>{name}</Heading>
                </InnerWrapper>
                <Pointer color="pink" shape="arrow" proportional active={active} />     
            </Container>
        </LinkArea>
    )
}

export default SideLink

const LinkArea = styled(Link)`
    width: 100%;
    transition: right 0.2s ease;
    transform: translateX(${props => props.active === "true" ? "10%" : "0"});

    position: relative;
    right: ${props => props.active ? -10 : 0}%;
`

const Container = styled(Paper)`

    margin: 0 0 6px 10%;
    height: 40px;

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
        height: 46px;
        width: 90%;
    }

   

`

const InnerWrapper = styled.div`
    width: fit-content;
    
`

const Heading = styled.h2`
    margin: 0;
    font-size: 22px;
    font-weight: 700;
    font-family: var(--display-font);

    @media (min-height: 750px) {
        font-size: 28px;
    }
`


const Pointer = styled(Paper)`
    position: absolute;
    left: 0;
    top: 50%;
    z-index: -1;
    transform: translate(${props => props.active ? "-40" : "0"}px, -50%);
    transition: transform 0.2s ease;

    width: 24px;

    @media (min-height: 750px) {
        width: 30px;
    }

`