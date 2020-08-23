---
slug: "/projects/ruby-enumerators"
title: "Ruby Enumerators"
tech: "React, Styled Components, HTML, CSS, JS"
hero: ./hero.png
tagline: "Interactive flashcards with details on Ruby's enumerator methods."
github: "https://github.com/iangrubb/ruby-enumerator-flash-cards"
live: "https://ruby-enumerators.netlify.app"
---

A little project designed to organize and display a bit of information about some Ruby's enumerator methods. These are very useful methods, but there are a lot of them and it can be difficult to remember which ones to use in which situations. To help make this easier, I put information on the methods and examples of their use on flashcards.

Ironically, no Ruby was used in the creation of this project. I saw this as an opportunity to get some practice at front-end animation techniques. This was the first project where I experimented with using React Transition Group together with Styled Components.

The feature that I experimented with the most was the curved translation on the cards when they go into and out of the card deck. The basic idea is to use two nested elements, one with a vertical translation and one with a horizontal translation. With that setup, applying different timing functions to the two transitions of those translations produces a curved path.