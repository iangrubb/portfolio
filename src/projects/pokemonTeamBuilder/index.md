---
slug: "/portfolio/pokemon-team-builder"
title: "Pokemon Team Builder"
tech: "React, Styled Components, HTML, CSS, JS"
hero: ./hero.png
tagline: "A tutorial on how to style in React with Styled Components and React Transition Group."
github: "https://github.com/iangrubb/pokemon-team-builder"
live: ""
---

This project was part of a lecture introducing some of the options for styling a React app. It covers the basics of using Styled Components and React Transition Group. I've found these libraries to have pretty gentile learning curves. You can do a lot with just their basic features, but they have some pretty powerful advanced features as well. They also work well together.

<iframe src="https://player.vimeo.com/video/450948531" title="Team Builder Features" w="640" h="366" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

I start by going over how to define styled components, pass them props, and use those props to determine styles. There are examples of how this can be useful for toggling styles based on differences in data (setting a gradient based on pokemon type) and based on changes in UI state (translating a selected element to indicate that it's selected).

I also demonstrate a straightforward way to set up a togglable dark/light mode. Although you can do this using the ThemeProvider provided by Styled Components, my preference in most apps is just to use a combination of CSS variables and createGlobalStyle. This approach isn't significantly weaker, and I find it leads to much more readable styles.

To introduce React Transition Group, I show how to get cards to arrive from and depart to the space outside the screen. I start by doing this with a single card, and then move on to an arrangement of many cards. I show off the render props pattern, explain how its used by React Transition Group, and explain how to use the mountOnEnter and unmountOnExit options. After that, I show how to use the data it gives us in styled components to animate the positions of elements on the screen.