import React from "react"
import { Link } from "gatsby"

import Layout from "../components/siteStructure/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
  <Layout minimal>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    
  </Layout>
)}

export default IndexPage
