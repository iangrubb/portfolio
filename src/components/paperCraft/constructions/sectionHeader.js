import React from 'react'
import styled from 'styled-components'

import Paper from '../paper'

const sectionHeader = ({ children, path }) => {

    const navId = path.split("#")[1]

    return (        
        <HeadingWrapper id={navId} >

            <a href={"#" + navId}><Heading>{children}</Heading></a>

            <BottomBar color="pink" shape="frame" />

        </HeadingWrapper>

        
    )
}

const HeadingWrapper = styled.div`
    
    width: 700px;
    max-width: 100%;
    margin: 64px auto 32px auto;
    scroll-margin-top: 40px;

    @media (min-width: 900px) {
        position: relative;
        left: -16px;
    }

`

const Heading = styled.h3`
    font-size: 30px;
    margin: 8px 0;
    
    @media (min-width: 768px) {
        font-size: 32px;
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
