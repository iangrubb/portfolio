import React from 'react'

import styled from 'styled-components'

import Paper from '../paper'

const subSectionHeader = ({ children }) => {
    return (
        <Container>
            {/* <Symbol color="green" shape="apple" proportional/> */}
            <h3>{children}</h3>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
`

const Symbol = styled(Paper)`
    width: 16px;
`

export default subSectionHeader
