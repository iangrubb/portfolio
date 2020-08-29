---
slug: "/portfolio/space-bar"
title: "Space Bar"
tech: "React, HTML, CSS, JS, Styled Components, Ruby, Rails"
hero: ./hero.png
tagline: "An interactive map that lets users explore space and learn about planets and constellations."
github: "https://github.com/iangrubb/space_project_frontend"
live: "https://thespacebar.netlify.app/"
---

This is a project developed with [Anthony Wan](https://github.com/xMizu) while we were students at Flatiron School. We wanted to build a site where users scroll in two-dimensions in order to find and interact with elements. We decided that this would work best in the context of an educational app about space.


## Functionality

Users can explore space to find planets, constellations, and other celestial objects. Clicking on any of these elements gives more information.

Users can search for elements and zoom to them when selected. They can also keep track of their location and the location of elements in the space by using a mini-map. These UI elements can be toggled away at will to display more of the map.

<iframe src="https://player.vimeo.com/video/450948485" title="Space Bar User Interface" w="640" h="318" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

The application requires a log in in order to use, but users are automatically logged in when they return to the site. Users can save a record of their favorite celestial bodies to find again later.


## Development

The initial challenge was getting the map to work. This required some work on the CSS to ensure that it would scroll correctly and the UI elements would stay positioned in the right spots. It also required some work in React to get the current scroll position into state. This was our first time having to work with refs, and after a bit of time spent troubleshooting we got it to work well.

With the scroll location in state, I was able to have some fun building out UI elements relating to map location. It took some work to get the math right and everything behaving as intended, but I was ultimately able to build an accurate mini-map and the buttons that zoom the user to a desired location.

I was also responsible for building the constellation elements. Unfortunately, we didn't have direct access to any data expressing the relationships between stars in constellations. However, I found a graph-making tool online that exported markdown and I figured out how to convert that markdown to suitably structured json data. I then made a constellation React component that could take this data and display appropriately positioned stars and connecting lines.