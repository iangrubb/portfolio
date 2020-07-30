import React from 'react'

import styled from 'styled-components'

import Paper from '../paper'

const sectionHeader = ({ children }) => {

    return (        
        <HeadingWrapper color="purple" shape="frame">
            <Heading>{children}</Heading>
        </HeadingWrapper>
    )
}

const HeadingWrapper = styled(Paper)`

    position: relative;

    left: -1rem;

    margin: 2rem 0;

    width: fit-content;
    height: fit-content;

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--background-color);
`

const Heading = styled.h2`
    margin: 0.6rem 1rem 0.3rem 1rem;
    letter-spacing: 0.6px;
`



export default sectionHeader
