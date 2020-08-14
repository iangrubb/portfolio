import React from 'react'
import styled from 'styled-components'
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Paper from '../paper'

const sectionHeader = ({ children, counter, path }) => {

    const navId = path.split("#")[1]

    return (        
        <HeadingWrapper id={navId} >

            <a href={"#" + navId}><Heading>{children}</Heading></a>

            <BottomBar color="pink" shape="frame" />

        </HeadingWrapper>

        
    )
}

const HeadingWrapper = styled.div`
    
    width: 100%;
    height: fit-content;

    margin: 64px 0 32px 0;
    scroll-margin-top: 40px;

    @media (min-width: 768px) {
        position: relative;
        left: -1rem;
    }

`

const Heading = styled.h3`
    font-size: 32px;
    margin: 8px 0;
    
    @media (min-width: 768px) {
        font-size: 38px;
    }
`

const BottomBar = styled(Paper)`
    height: 6px;
    width: 120px;
    margin: 0 0 16px 8px;
    @media (min-width: 768px) {
        width: 180px;
        height: 8px;
    }
`





export default sectionHeader
