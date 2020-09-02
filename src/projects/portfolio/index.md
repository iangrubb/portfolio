---
slug: "/portfolio/portfolio"
title: "Portfolio"
tech: "Gatsby, React, Styled Components, GraphQL, HTML, CSS, JS"
hero: ./hero5.png
tagline: "My virtual home on the web, featuring blog posts and project information."
github: "https://github.com/iangrubb/portfolio"
live: ""
---

You've already seen this one! This is the central location for my thoughts on code and information about projects I've worked on. I wanted to design something fun and thematic, but without letting it get too busy or sacrificing usability. It's still something I'm happy to go back and tinker with, so any suggestions would be greatly appreciated!

When building my portfolio, I wanted to be able use React and the developer-friendly tooling that comes along with it. However, generating markup client-side has performance costs that aren't worth it for a site that renders mostly static content. I ended up getting both speed and a developer-friendly environment by building the site with Gatsby, which renders quick-loading static pages from React components.

Coming from a background in React, the learning curve with Gatsby was minimal. The workflow can be a bit different at times and there are various new plugins to get used to, but I've found most of the documentation to be clear and overall it still feels like building a React app. So far may favorite feature is Gatsby's straightforward optimization of image assets--a crucial feature for a portfolio site.

I decided early in the process to go with a paper cut-out theme for the portfolio. The textured effect is pretty simply to achieve--it's just a few mostly transparent repeating gradients. The shapes are made by defining inline SVGs and then using them for clip-paths. With the help of Styled Components, I set up a Paper component that gave me a lot of control when applying the paper effect.