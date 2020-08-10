import React from 'react'
import { Link } from 'gatsby'

import styled from 'styled-components'

import Paper from '../paperCraft/paper'

const BlogCard = ({ node }) => {

    const { frontmatter } = node
    const { title, subtitle, abstract, slug } = frontmatter
    const [month, day, year] = frontmatter.date.split(" ")
    const fixedDay = day[0] === "0" ? day[1] + "," : day
    const formatedDate = [month, fixedDay, year].join(" ")

  
    return (
        <Container color="tan" shape="frame" key={node.id}>
            <DateWrapper color="purple" shape="rectangle">
                <Date>
                    {formatedDate}
                </Date>
            </DateWrapper>
            <Link to={slug}><Title>{title}</Title></Link>
            <Abstract>{abstract}</Abstract>
            <ReadWrapper color="pink" shape="rectangle">
                <ReadLink to={slug}><Arrow color="tan" shape="arrow" proportional/></ReadLink>
            </ReadWrapper>
        </Container>
    )
}

export default BlogCard

const Container = styled.div`
    margin: 0 16px 80px 16px;
    max-width: 550px;
    width: fit-content;
    height: fit-content;

    border-radius: 32px;
    padding: 16px;

    background: var(--background-color-clear);

    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      margin: 0 0 80px 0;
    }
`

const DateWrapper = styled(Paper)`
    width: fit-content;
    height: fit-content;
    margin: 0 0 16px 12px;
`

const Date = styled.time`
    color: var(--background-color);
    font-weight: 700;
    font-family: "Vollkorn";
    font-size: 18px;
    letter-spacing: 1px;
    margin: 4px 12px 2px 12px;
`


const Title = styled.h2`
    font-size: 28px;
    margin: 0 0 8px 0;

`


const Spacer = styled(Paper)`
  width: 140px;
  height: 24px;
  align-self: center;
  margin: 0 0 8px 0;
`

const Abstract = styled.p`
    margin: 0 8px 12px 0;
    font-size: 18px;
    line-height: 1.7rem;
    
    width: 80%;

`

const ReadWrapper = styled(Paper)`
    width: fit-content;
    height: fit-content;
    color: var(--background-color);
    align-self: flex-end;
    margin: 0 10% 0 0;

`

const ReadLink = styled(Link)`
    width: fit-content;
    height: fit-content;
    margin: 8px;
`

const Arrow = styled(Paper)`
    width: 32px;
`



