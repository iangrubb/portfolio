import React from 'react'

import styled from 'styled-components'

import GatsbyLogo from '../paperCraft/constructions/logos/gatsby'
import HTMLLogo from '../paperCraft/constructions/logos/htmlLogo'
import CSSLogo from '../paperCraft/constructions/logos/cssLogo'
import JSLogo from '../paperCraft/constructions/logos/jsLogo'
import ReactLogo from '../paperCraft/constructions/logos/reactLogo'
import ReduxLogo from '../paperCraft/constructions/logos/reduxLogo'
import StyledComponentsLogo from '../paperCraft/constructions/logos/styledComponentsLogo'
import GraphQLLogo from '../paperCraft/constructions/logos/graphQLLogo'
import RubyLogo from '../paperCraft/constructions/logos/ruby'
import RailsLogo from '../paperCraft/constructions/logos/rails'
import ElixirLogo  from '../paperCraft/constructions/logos/elixir'
import PhoenixLogo from '../paperCraft/constructions/logos/phoenix'


const pickLogo = string => {
    switch(string) {
      case "HTML":
        return <HTMLLogo key={string}/>
      case "CSS":
        return <CSSLogo key={string} />
      case "JS":
        return <JSLogo key={string} />
      case "React":
        return <ReactLogo key={string} />
      case "Redux":
        return <ReduxLogo key={string} />
      case "Styled Components":
        return <StyledComponentsLogo key={string} />
      case "GraphQL":
        return <GraphQLLogo key={string} />
      case "Gatsby":
        return <GatsbyLogo key={string} />
      case "Ruby":
        return <RubyLogo key={string} />
      case "Rails":
        return <RailsLogo key={string} />
      case "Elixir":
        return <ElixirLogo key={string} />
      case "Phoenix":
        return <PhoenixLogo key={string} />
      default:
        return null
    }
  }
  

const ToolInfo = ({ className, tool }) => {
    return (
        <Container className={className}>
            {pickLogo(tool)}
        </Container>
    )
}

export default ToolInfo

const Container = styled.div`
    width: 20%;

    & > div {
        width: 100%;
    }
`

