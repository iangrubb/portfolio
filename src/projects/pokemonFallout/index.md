---
slug: "/portfolio/pokemon-fallout"
title: "Pokemon Fallout"
tech: "Ruby, Rails, HTML, CSS, JS"
hero: ./hero.png
tagline: "A game where players breed and raise pokemon in a post-apocalyptic future."
github: "https://github.com/cstatro/poke-fallout-frontend"
live: "https://pokemon-fallout.netlify.app/"
---

This is a project developed with [Colin Tatro](https://github.com/cstatro) while we were students at Flatiron School. The initial concept was to make some sort of Tamagotchi-inspired app. While thinking about art assets, I remembered a [site](https://pokemon.alexonsager.net/) that made weird Pokemon fusions, which I figured we could scrape and use. That raised question of what kind of environment would create these fusions, and from there the project started to take on a life of its own.

## Functionality

A player starts the game by choosing one of three starter pokemon fusions. The goal is to acquire stronger pokemon through breeding and capturing wild pokemon. Breeding can lead to stronger pokemon, but players must also capture new wild pokemon to ensure a diverse gene pool.

Each turn, every pokemon the player owns can be assigned an order. Pokemon can farm food, go exploring for new pokemon to capture, breed, or enjoy some idle time. A turn ends once every pokemon has been given an order and the player confirms those orders. Results are then calculated and a new turn begins.

Players manage the health, hunger, and loyalty of their pokemon. Health is required to successfully capture new pokemon and loyalty leads to stronger offspring. Nourishment is necessary for health and loyalty, but there's not always enough food to go around.

<iframe src="https://player.vimeo.com/video/450948454" title="Catching and Breeding Pokemon" w="640" h="318" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

## Development

My main contributions to the project were the CSS and the Rails backend, while Colin took the lead on the JavaScript for our frontend.

What excited me most about the project was the use of self-referential joins in our database to track pokemon ancestry. Every entry for a pokemon keeps track of its parents, who themselves track their parents, and so on. Family tree data determines the attributes of pokemon when they're born. Baby pokemon are most likely to have types based on the types on their parents, but they can also have types based on those of more distant ancestors.

We used data from Pokemon API to help build our game logic. A lot of the data isn't directly applicable to the kind of game we built, so we repurposed it for our style of game.

Turning to the CSS, I aimed to build an interface that could effectively display all the information involved in the game. This gave me a lot of experience working with nested flexbox containers and thinking about effective layouts.