


import React from "react"
import Layout from "./src/components/siteStructure/layout"

// Logs when the client route changes

// exports.onRouteUpdate = ({ location, prevLocation }) => {
//   console.log("new pathname", location.pathname)
//   console.log("old pathname", prevLocation ? prevLocation.pathname : null)
// }


// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
    console.log(props)
    return <Layout {...props}>{element}</Layout>
}