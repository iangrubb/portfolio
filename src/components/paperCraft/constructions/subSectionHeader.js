import React from 'react'

import styled from 'styled-components'

import Paper from '../paper'

const subSectionHeader = ({ children, path }) => {
    console.log(path)
    const navId = path.split("#")[1]
    return (
        <SubHeadingWrapper id={navId}>
            <OuterPaper color="pink" shape="frame">
                <InnerPaper color="tan" shape="frame">
                    <Link href={"#" + navId}>
                        <SubHeading>{children}</SubHeading>
                    </Link>
                </InnerPaper>
            </OuterPaper>
        </SubHeadingWrapper>
    )
}

const SubHeadingWrapper = styled.div`
    margin: 3rem 0 1.5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-margin-top: 16px;
    @media (min-width: 768px) {
        margin: 2rem 0 1rem 0;
    }
`

const OuterPaper = styled(Paper)`
    width: fit-content;
    height: fit-content;
`

const InnerPaper = styled(Paper)`
    margin: 4px;
    width: fit-content;
    height: fit-content;
    @media (min-width: 768px) {
        margin: 6px;
    }
`

const Link = styled.a`
    margin: 0.3rem 0.6rem 0.1rem 0.6rem;
    @media (min-width: 768px) {
        margin: 0.5rem 1rem 0.3rem 1rem;
    }
`

const SubHeading = styled.h4`
    font-size: 20px;
    margin: 0;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 22px;
    }
`



export default subSectionHeader
