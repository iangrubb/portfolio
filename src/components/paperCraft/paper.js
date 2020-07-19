import React from 'react'

import styled from 'styled-components'

const Paper = ({className, children, shape, color, proportional}) => {
    return (
        <Container className={className}>
            {proportional ?
            <Spacer>
                <ProportionalBody shape={shape} color={color} >
                    {children}
                </ProportionalBody>
            </Spacer>
            :
            <StretchBody shape={shape} color={color}>{children}</StretchBody>
            }
        </Container>
    )
}

export default Paper

const Container = styled.div`
    filter: drop-shadow(3px 2px 2px rgba(25, 25, 25, 0.2));
`;

const BodyBase = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    clip-path: url(#${props => props.shape});
    shape-outside: url(#${props => props.shape});

    background: repeating-linear-gradient(
        30deg,
        rgba(200, 200, 200, 0.1),
        rgba(190, 190, 190, 0.1) 10px,
        rgba(200, 200, 200, 0.1) 30px
        ),
        repeating-linear-gradient(
        -30deg,
        rgba(200, 200, 200, 0.1),
        rgba(190, 190, 190, 0.1) 10px,
        rgba(200, 200, 200, 0.1) 20px
        ),
        repeating-linear-gradient(
        rgba(160, 160, 160, 0.1),
        rgba(140, 140, 140, 0.1) 4px,
        rgba(180, 180, 180, 0.1) 12px,
        rgba(140, 140, 140, 0.1) 22px,
        rgba(160, 160, 160, 0.1) 28px,
        rgba(140, 140, 140, 0.1) 44px,
        rgba(180, 180, 180, 0.1) 50px,
        rgba(140, 140, 140, 0.1) 68px,
        rgba(180, 180, 180, 0.1) 78px,
        rgba(140, 140, 140, 0.1) 88px,
        rgba(160, 160, 160, 0.1) 100px
        ),
        ${props => props.color};
`

const ProportionalBody = styled(BodyBase)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

const StretchBody = styled(BodyBase)`
    width: 100%;
    height: 100%;
`

const Spacer = styled.div`
    width: 100%;
    padding-top: 100%;
    position: relative;
`