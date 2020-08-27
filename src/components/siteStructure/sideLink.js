import React from 'react'
import { Link } from "gatsby"

import styled from 'styled-components'

import Paper from '../paperCraft/paper'

const SideLink = ({path, name, active}) => {
    console.log(active, path)
    return (
        <LinkArea to={path} active={active}>
            <Container color="purple">
                <InnerWrapper>
                    <Heading>{name}</Heading>
                    <LinkBar color="pink" />
                </InnerWrapper>
                <Pointer color="pink" active={active} />     
            </Container>
        </LinkArea>
    )
}

export default SideLink

const LinkArea = styled(Link)`
    width: 80%;
    transition: transform 0.2s ease;
    transform: translateX(${props => props.active ? "10%" : "0"});
`

const Container = styled(Paper)`
    /* color: var(--background-color); */

    margin: 0 0 8px 0;

    height: 90px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    position: relative;

    width: 100%;


    border-radius: 8px;

    color: var(--background-color);

`

const InnerWrapper = styled.div`
    width: fit-content;
`

const Heading = styled.h2`
    margin: 0;
    font-size: 42px;
    font-weight: 700;
    font-family: var(--display-font);
`

const LinkBar = styled(Paper)`
    /* position: relative;
    left: calc(-24px - 8px); */

    margin: 8px 0 0 0;
    width: 100%;
    height: 8px;
    /* margin: 0 0 0 16px; */
`

const Pointer = styled(Paper)`
    position: absolute;
    left: 0;
    top: 50%;
    z-index: -1;
    transform: translate(${props => props.active ? "-50" : "0"}px, -50%);
    transition: transform 0.2s ease;

    width: 40px;
    height: 50px;
    border-radius: 0;

    clip-path: polygon(0 0, 100% 50%, 0 100%);
`
