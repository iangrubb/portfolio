import React from 'react'

import styled from 'styled-components'

import Paper from '../paper'

const PaperButton = ({className, children, color}) => {
    return (
        <Exterior className={className} shape="button" color={color}>
            <Interior shape="button" color="tan">
                {children}
            </Interior>
        </Exterior>
    )
}

const Exterior = styled(Paper)`
    border: none;
    margin: 0;
    padding: 0;
    width: fit-content;
    height: fit-content;

    &:hover {
        transform: scale(1.1);
        filter: drop-shadow(4px 4px 4px #322F3744);
    }

    cursor: pointer;

`

const Interior = styled(Paper)`
    margin: 16px;
    width: fit-content;
    height: fit-content;
    
`


export default PaperButton
