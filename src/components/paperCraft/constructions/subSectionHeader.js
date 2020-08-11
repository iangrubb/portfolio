import React from 'react'

import styled from 'styled-components'

import Paper from '../paper'

const subSectionHeader = ({ children, path }) => {
    console.log(path)
    const navId = path.split("#")[1]
    return (
        <Link href={"#" + navId} id={navId}>
            <SubHeading>{children}</SubHeading>
        </Link>
    )
}


const Link = styled.a`
    scroll-margin-top: calc(100px + 24px);
`

const SubHeading = styled.h4`
    font-size: 24px;
    margin: 40px 0 16px 0;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 28px;
    }
`



export default subSectionHeader
