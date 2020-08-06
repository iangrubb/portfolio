import React from 'react'

import styled from 'styled-components'

import Paper from '../paper'

const subSectionHeader = ({ children, counter, path }) => {
    console.log(path)
    const navId = path.split("#")[1]
    return (
        <SubHeadingWrapper id={navId}>
            <Rectangle color="purple" shape="rectangle"><Letter href={"#" + navId}>{String.fromCharCode(counter + 96)}</Letter></Rectangle>
            <SubHeading>{children}</SubHeading>
        </SubHeadingWrapper>
    )
}

const SubHeadingWrapper = styled.div`

    position: relative;
    left: -1rem;
    width: calc(100% + 2rem);

    margin: 2rem 0 1rem 0;

    display: flex;
    align-items: center;

    scroll-margin-top: 16px;
`

const Rectangle = styled(Paper)`
    width: 2.2rem;
    height: 2.2rem;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

`

const Letter = styled.a`
    margin: 0;
    color: var(--background-color);
    font-family: "Vollkorn";
    font-size: 1.4rem;
    font-weight: 700;

    position: relative;
    top: 1px;

    &:hover {
        color: var(--background-color);
    }

    &:visited {
        color: var(--background-color);
    }

`

const SubHeading = styled.h2`
    margin: 0.2rem 0 0 0.8rem;
    font-size: 1.5rem;
`



export default subSectionHeader
