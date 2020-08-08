import React from 'react'
import styled from 'styled-components'
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Paper from '../paper'

const sectionHeader = ({ children, counter, path }) => {

    const navId = path.split("#")[1]

    return (        
        <HeadingWrapper id={navId} color="purple" shape="frame" >
            {/* <Hex color="purple" shape="hex"><a href={"#" + navId} title={children[0]}>{counter}</a></Hex> */}
            <Heading>{children}</Heading>
        </HeadingWrapper>

        
    )
}

const HeadingWrapper = styled(Paper)`
/* 
    position: relative;
    left: -1rem; */

    width: 100%;
    height: fit-content;

    margin: 1.5rem 0 0.6rem 0;

    display: flex;
    align-items: center;

    scroll-margin-top: 16px;

    
`

const Hex = styled(Paper)`
    width: 4.4rem;
    height: 4.4rem;
    color: var(--background-color);
    font-family: "Vollkorn";
    font-size: 2rem;
    font-weight: 700;
`

const Heading = styled.h2`
    margin: 0.5rem 0 0.3rem 0;
    color: var(--background-color);
    
`



export default sectionHeader
