import React from 'react'

import styled from 'styled-components'

import Paper from '../paperCraft/paper'

const FrameBox = ({ className, color, children, innerCSS }) => {

    return (
        <Container color={color} shape="frame" className={className}>
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

const Contents = styled.div`

    background: var(--background-color);
    border-radius: 4px;
    
    margin: 16px;


    ${props => props.innerCSS}



`
