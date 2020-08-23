import React from 'react'

import styled, { css } from 'styled-components'

import Paper from '../paperCraft/paper'

const FrameBox = ({ className, color, children, innerCSS }) => {

    return (
        <Container color={color} className={className} bodyCSS={bodyCSS}>
            <Contents innerCSS={innerCSS}>
                {children}
            </Contents>
        </Container>
    )
}

export default FrameBox

const Container = styled(Paper)`
    width: fit-content;
    height: fit-content;

`

const bodyCSS = css`
    /* margin: -4px; */
    border-radius: 8px;
`

const Contents = styled.div`

    background: var(--background-color);
    border-radius: 4px;
    
    /* margin: 16px; */


    ${props => props.innerCSS}

`
