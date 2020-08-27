import React from 'react'
import { Link } from "gatsby"

import styled from 'styled-components'

import Paper from '../paperCraft/paper'

import SocialLinks from './socialLinks'
import SideLink from './sideLink'



const SideBar = ({ path }) => {

    return (
        <Container>
            
            <SideLink active={path.startsWith("/blog")} path="/blog" name="Blog"/>
            <SideLink active={path.startsWith("/portfolio")} path="/portfolio" name="Portfolio" />
            <SideLink active={path.startsWith("/about")} path="/about" name="About" />
            

            <Footer>
                <Paper color="pink" shape="spacer" proportional />
                
                <SocialLinks />  

                <EmailWrapper color="purple" shape="frame" fit>
                    <Email href="mailto:hi@iangrubb.com">hi@iangrubb.com</Email>
                </EmailWrapper>
            </Footer>
                 
        </Container>
    )
}



export default SideBar

const Container = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    
    width: calc(25% - 48px);
    height: calc(100vh - 32px);
    margin: 16px 16px 16px 32px;

    min-width: 300px;

    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;

    padding: 100px 0 0 0;

    outline: 1px solid red;
    
`

const Footer = styled.div`
    margin: 40px 0 0 0%;

    display: flex;
    flex-direction: column;
    align-items: center;
`



const EmailWrapper = styled(Paper)`
  margin: 16px 0;
`

const Email = styled.a`
  margin: 6px 12px 5px 12px;
  color: var(--background-color);
  font-family: "Vollkorn";
  font-size: 20px;
  font-weight: 700;

  &:hover {
    color: var(--background-color);
  }
`





