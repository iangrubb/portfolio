import React from 'react'
import styled from 'styled-components'
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Paper from '../paper'

const sectionHeader = ({ children, counter, path }) => {

    const navId = path.split("#")[1]

    return (        
        <HeadingWrapper id={navId} >

            <Decorations>
                <Bar color="pink" shape="rectangle" />
                <Hex color="pink" shape="hHex" proportional>{counter}</Hex>
                <Bar color="pink" shape="rectangle" />
            </Decorations>

            <Link href={"#" + navId}><Heading>{children}</Heading></Link>

        </HeadingWrapper>

        
    )
}

const HeadingWrapper = styled.div`
    
    width: 100%;
    height: fit-content;

    margin: 32px 0 0 0;
    scroll-margin-top: 16px;

`

const Link = styled.a`
`

const Heading = styled.h3`
    margin: 0;
    font-size: 28px;
    text-align: center;
    
    @media (min-width: 768px) {
        font-size: 34px;
    }
`

const Decorations = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 16px 0;
`

const Bar = styled(Paper)`
  width: 100px;
  height: 8px;

  @media (min-width: 768px) {
        height: 10px;
    }
`

const Hex = styled(Paper)`
    width: 38px;
    margin: 0 8px;
    color: var(--background-color);
    /* font-family: "Vollkorn"; */
    font-weight: 700;
    font-size: 24px;

    @media (min-width: 768px) {
        width: 44px;
        font-size: 28px;
    }
`




export default sectionHeader
