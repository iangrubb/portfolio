import React from 'react'

import styled from 'styled-components'

import Paper from '../paper'

const subSectionHeader = ({ children, counter }) => {
    return (

        <SubHeadingWrapper>
            <Rectangle color="purple" shape="rectangle"><Letter>{String.fromCharCode(counter + 96)}</Letter></Rectangle>
            <SubHeading>{children}</SubHeading>
        </SubHeadingWrapper>
    )
}

const SubHeadingWrapper = styled.div`

    position: relative;
    left: -1rem;
    width: calc(100% + 2rem);

    margin: 1rem 0;

    display: flex;
    align-items: center;
`

const Rectangle = styled(Paper)`
    width: 2.2rem;
    height: 2.2rem;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

`

const Letter = styled.span`
    margin: 0;
    color: var(--background-color);
    font-family: "Vollkorn";
    font-size: 1.4rem;
    font-weight: 700;

    position: relative;
    top: 1px;

`

const SubHeading = styled.h2`
    margin: 0.2rem 0 0 0.8rem;
    font-size: 1.5rem;
`



export default subSectionHeader
