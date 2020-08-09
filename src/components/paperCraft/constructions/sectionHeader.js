import React from 'react'
import styled from 'styled-components'
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Paper from '../paper'

const sectionHeader = ({ children, path }) => {

    const navId = path.split("#")[1]

    return (        
        <HeadingWrapper id={navId} >
            <OuterPaper color="purple" shape="frame">
                <InnerPaper color="tan" shape="frame">
                    <Link href={"#" + navId}><Heading>{children}</Heading></Link>
                </InnerPaper>
            </OuterPaper>
        </HeadingWrapper>

        
    )
}

const HeadingWrapper = styled.div`

    width: 100%;
    height: fit-content;

    margin: 3rem 0 1.4rem 0;

    display: flex;
    justify-content: center;
    align-items: center;

    scroll-margin-top: 16px;

    @media (min-width: 768px) {
        margin: 2rem 0 1.4rem 0;
    }
    
`

const OuterPaper = styled(Paper)`
    width: fit-content;
    height: fit-content;
`

const InnerPaper = styled(Paper)`
    margin: 8px;
    width: fit-content;
    height: fit-content;
`

const Link = styled.a`
    margin: 0.4rem 0.6rem 0.2rem 0.6rem;
    @media (min-width: 768px) {
        margin: 0.5rem 1rem 0.3rem 1rem;
    }
`

const Heading = styled.h3`
    margin: 0;
    font-size: 24px;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 26px;
    }
`



export default sectionHeader
