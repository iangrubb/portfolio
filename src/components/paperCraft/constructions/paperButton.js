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


    

`

const Interior = styled(Paper)`
    margin: 12px;
    width: fit-content;
    height: fit-content;
    
`


export default PaperButton
