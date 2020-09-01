import React from 'react'

import styled from 'styled-components'

import Paper from '../../paperCraft/paper'

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
    margin: 24px auto 12px auto;

    font-size: 24px;

    @media (min-width: 500px) {
        margin: 32px auto 16px auto;
        font-size: 26px;
    }


    @media (min-width: 900px) {
        font-size: 28px;
        margin: 40px auto 24px auto;
        position: relative;
        left: -8px;
    }
`



export default subSectionHeader
