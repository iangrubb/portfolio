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
    scroll-margin-top: 32px;
`

const SubHeading = styled.h4`
    font-size: 28px;
    margin: 40px 0 24px 0;

    @media (min-width: 768px) {
        font-size: 28px;
        position: relative;
        left: -0.5rem;
    }
`



export default subSectionHeader
