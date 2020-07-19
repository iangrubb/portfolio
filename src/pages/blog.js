import React from 'react'

import Layout from '../components/siteStructure/layout'
import SEO from "../components/seo"

import styled from 'styled-components'

import Paper from '../components/paperCraft/paper'


const BlogPage = () => {
    return (
        <Layout>
            <SEO title="Blog" />
            <Background shape="hex" color="#93E75F" proportional>
                <Test shape="hex" color="#eee" proportional></Test>
            </Background>
            <Stretch shape="hex" color="#C74349"/>            
            <h1>Blog</h1>
        </Layout>
    )
}

const Test = styled(Paper)`
    width: 80%;
`

const Background = styled(Paper)`
    width: 300px;

`


const Stretch = styled(Paper)`
    width: 200px;
    height: 300px;
`


export default BlogPage
