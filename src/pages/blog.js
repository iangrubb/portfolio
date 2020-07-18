import React from 'react'

import Layout from '../components/layout'
import SEO from "../components/seo"

import styled, { keyframes } from 'styled-components'

import Paper from '../components/paperCraft/paper'

const BlogPage = () => {
    return (
        <Layout>
            <SEO title="Blog" />
            <Background shape="hex" color="#93E75F" proportional>

            </Background>
            <Stretch shape="hex" color="red"/>            
            <h1>Blog</h1>
        </Layout>
    )
}


const Background = styled(Paper)`
    width: 300px;

`

const Stretch = styled(Paper)`
    width: 100px;
    height: 100px;
`


export default BlogPage
