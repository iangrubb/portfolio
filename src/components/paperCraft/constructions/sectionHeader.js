import React from 'react'
import styled from 'styled-components'
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Paper from '../paper'

const sectionHeader = ({ children, counter, path }) => {

    const navId = path.split("#")[1]

    return (        
        <HeadingWrapper id={navId} >

            <Decorations>
                <Bar color="purple" shape="rectangle" />
                <Hex color="purple" shape="hHex" proportional>{counter}</Hex>
                <Bar color="purple" shape="rectangle" />
            </Decorations>

            <Link href={"#" + navId}><Heading>{children}</Heading></Link>

            <BottomBar color="purple" shape="rectangle" />

            

        </HeadingWrapper>

        
    )
}

const HeadingWrapper = styled.div`
    
    width: 100%;
    height: fit-content;

    margin: 64px 0 32px 0;
    scroll-margin-top: calc(100px + 36px);

`

const Link = styled.a`
    
`

const Heading = styled.h3`
    margin: 0;
    font-size: 28px;
    text-align: center;
    margin: 8px 0;
    
    @media (min-width: 768px) {
        font-size: 34px;
    }
`

const Decorations = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const Bar = styled(Paper)`
  width: 100px;
  height: 6px;

  @media (min-width: 768px) {
        height: 8px;
    }
`

const BottomBar = styled(Paper)`
    width: 250px;
    height: 6px;
    margin: 16px auto;
    @media (min-width: 768px) {
        height: 8px;
    }
`

const Hex = styled(Paper)`
    width: 32px;
    margin: 0 8px;
    color: var(--background-color);
    font-weight: 700;
    font-size: 20px;

`




export default sectionHeader
