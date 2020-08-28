import React from 'react'

import styled from 'styled-components'

import Paper from '../paper'

const subSectionHeader = ({ children, path }) => {
    const navId = path.split("#")[1]
    return (
        <Link href={"#" + navId} id={navId}>
            <SubHeading>{children}</SubHeading>
        </Link>
    )
}


const Link = styled.a`
    scroll-margin-top: 32px;
`

const SubHeading = styled.h4`

    width: 700px;
    max-width: 100%;
    margin: 40px auto 24px auto;
    font-size: 26px;

    @media (min-width: 768px) {
        font-size: 28px;
        position: relative;
        left: -16px;
    }
`



export default subSectionHeader
