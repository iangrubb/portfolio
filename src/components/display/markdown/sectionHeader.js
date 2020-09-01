import React from 'react'
import styled from 'styled-components'

import Paper from '../../paperCraft/paper'

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
    margin: 32px auto 24px auto;
    scroll-margin-top: 40px;

    @media (min-width: 500px) {
        margin: 44px auto 24px auto;
    }



    @media (min-width: 900px) {
        position: relative;
        left: -16px;
        margin: 54px auto 32px auto;
    }

`

const Heading = styled.h3`
    font-size: 26px;
    margin: 4px 0;
    
    @media (min-width: 500px) {
        font-size: 30px;
        margin: 6px 0;
    }


    @media (min-width: 900px) {
        font-size: 34px;
        margin: 8px 0;
    }
`

const BottomBar = styled(Paper)`
    height: 6px;
    width: 120px;
    margin: 0 0 16px 8px;
    @media (min-width: 900px) {
        width: 180px;
        height: 8px;
    }
`





export default sectionHeader
