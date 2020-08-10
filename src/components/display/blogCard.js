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
        <Container key={node.id}>
            <DateWrapper color="purple" shape="rectangle">
                <Date>
                    {formatedDate}
                </Date>
            </DateWrapper>
            <Link to={slug}><Title>{title}</Title></Link>
            <SubTitle>{subtitle}</SubTitle>
            <Spacer color="green" shape="spacer" />
            <Abstract>{abstract}</Abstract>
            <ReadWrapper color="pink" shape="rectangle">
                <ReadLink to={slug}>Read More <Arrow color="tan" shape="arrow" proportional/></ReadLink>
            </ReadWrapper>
        </Container>
    )
}

export default BlogCard

const Container = styled.div`
    margin: 0 16px 80px 16px;
    max-width: 450px;

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
    margin: 5px 12px 4px 12px;
`


const Title = styled.h2`
    font-size: 28px;
    margin: 0 0 8px 0;

`


const SubTitle = styled.h3`
    font-style: italic;
    font-weight: 400;
    font-size: 20px;
    margin: 0 0 8px 16px;
    line-height: 1.6rem;
`

const Spacer = styled(Paper)`
  width: 140px;
  height: 24px;
  align-self: center;
  margin: 0 0 8px 0;
`

const Abstract = styled.p`
    margin: 0 8px 12px 0;
`

const ReadWrapper = styled(Paper)`
    width: fit-content;
    height: fit-content;
    color: var(--background-color);
    align-self: flex-end;
    margin: 0 10% 0 0;

`

const ReadLink = styled(Link)`
    font-weight: 700;
    font-family: "Vollkorn";
    font-size: 18px;
    margin: 7px calc(12px + 20px) 5px 12px;
`

const Arrow = styled(Paper)`
    position: absolute;
    top: 50%;
    right: 7%;
    transform: translate(0, -50%);
    display: inline;
    width: 18px;
`



