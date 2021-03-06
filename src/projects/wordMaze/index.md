---
slug: "/portfolio/word-maze"
title: "Word Maze"
tech: "Elixir, Phoenix, HTML, CSS"
hero: ./hero4.png
tagline: "A real-time multiplayer game that mashes up Scrabble with an old-school dungeon crawler."
github: "https://github.com/iangrubb/word_maze"
---

I've been learning Elixir and Phoenix to help broaden my capabilities as a programmer. Elixir is a functional language built on Erlang, with makes it a strong language for dealing with concurrent processes. Phoenix is a web framework built on Elixir that's designed to take advantage of this strength.

With this project, I wanted to build something that would take advantage of Phoenix's more unique features: excellent support for websockets, server-side state that doesn't have to exist in a database, and LiveView. LiveView is perhaps the most exciting of these features, since it lets us make server-rendered, dynamic web apps without writing any JavaScript.

To accomplish this, LiveView opens up a websocket connection between the client and a server process responsible for what the client should see. Client-side events are sent to the server, which causes the server state to change in some way, which in turn causes DOM patches to be sent back to the client. The broad application structure is thus very similar to a React app, except that we're keeping the state of the app on the client.

Perhaps that sounds like it'd be a performance disaster, given the latency involved in making round trips to the server for every client change. However, the whole system has been carefully optimized, making it remarkably efficient. Still, I wanted to try pushing LiveView to its limits by building a real time, multiplayer game. More on the results below, but I was pleasantly surprised by how well it ended up working.

The game itself is a mash-up between Scrabble and an old-school dungeon crawler. Players move around the maze discovering hallways, tiles, and other players. Players score points by placing tiles on the ground and forming words. The game is simply a race to get the most points.

## Functionality

Players arrive and are required to enter a username. Their data is stored in a session, but since we're not keeping track of records over time there's not a more sophisticated log-in system. Once they've submitted their names, players can attempt to join the next game. I wanted to get a very basic matchmaking system up and running, so currently there's only a single queue for games and no ability to select who you play with. Once four players are ready to play, there's short countdown and then the game begins.

<iframe src="https://player.vimeo.com/video/450868861" title="Match Making" w="640" h="358" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

In the game, players can move around the maze to reveal new locations. The hallways and placed tiles can't move, so once a player sees them they remain on the player's map. If a player returns to an area they were in before, they may discover that new tiles have been placed while they were gone. Players can also see other players, but only when they're in their direct line of sight.

<iframe src="https://player.vimeo.com/video/450868994" title="Movement and Field of View" w="640" h="358" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

To place letters, players stand on the location they want the letter to go and select the letter from their hand. Letters can't be placed on top of each other and must be placed so that they can form a word with previously placed letters. Words are automatically submitted when letters fill up a row or column. When a submission succeeds, its letters get locked in and score points for the player. When a submission fails, its letters go back to the player's hand.

Players start the game with a hand of seven letter tiles. After placing a word, new letters arrive at a rate of one second per letter. Players can also discard letters if they don't like their hand. Discarded letters also get replaced, but as a penalty they get replaced at a rate of three seconds per letter.

Once a word is successfully submitted, all players are notified about the submission. Notifications let players know what word was submitted, who submitted it, and how many points it scored. The notification also updates the running total point counts of all players.

<iframe src="https://player.vimeo.com/video/450869028" title="Letter Placement and Notifications" w="640" h="363" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

A game ends when a player gets to 150 points or the four minute timer elapses. At the end of the game, players are ranked by their total scores. Refreshing the page automatically redirects players back to the lobby, where they can queue up for the next game.

<iframe src="https://player.vimeo.com/video/450869061" title="Game Ending" w="640" h="363" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>


## Development

One of Elixir's key programming concepts is the Actor Model--an application consists of multiple, concurrent processes that have their own memory and communicate with each other only through a message-passing system. Elixir and Phoenix build a lot of their abstractions around this basic idea.

Each game involves communication between a single game process (this contains the state of the game itself) and one LiveView process for each player (this contains the state relevant to that player's view of the game). Client initiated events go first to the relevant LiveView process, and then if the game state needs to be updated a further message gets sent to the game process. When a change happens in the game state, the game process broadcasts updates to all of the connected LiveView processes.

There's also a single process that handles starting and stopping games, as well as matchmaking to assign players to games. It has its own state, which keeps track of all running games and all players who want to join a new game. Once four players are ready to play, it updates its state accordingly, creates a new game process, and redirects the players to the right url (which triggers the creation of the needed LiveView processes).

I found the process of rendering HTML and CSS with LiveView to be really intuitive. It felt a lot like making a React app, since I was declaring state, updating state based on events, rendering based on state, and making components that communicate by passing state. I missed the really well-developed ecosystem of libraries that comes with React, but enjoyed the ability to program views using Elixir (which I find to be somewhat more expressive than JavaScript) and the simplicity that comes with not having to keep state consistent between separate front-end and back-end applications.

The graphics for the game are still a bit rough around the edges, since I wanted to get a prototype working as soon as possible. Currently, everything is done through CSS. This is a major convenience compared to a solution like HTML Canvas, which you draw on using JavaScript. Although I didn't use this feature, LiveView *does* have support for calling client-side JavaScript based on LiveView state changes. This means that it should be possible to make a more sophisticated version of the application using Canvas-based graphics. For now, I'm happy to have a playable version of the game with pure-CSS graphics.

## Deployment

I mentioned above that I wanted to test the capacities of LiveView. I knew that it could work for something like a board game, where player reaction times generally don't have an impact on gameplay. However, I was unsure whether the latency would be too much for a real time game to work. LiveView works over a TCP connection, which is reliable but not the fastest type of connection. Nonetheless, I've had pretty good results, with the game being playable over a fast, stable internet connection (pretty much a requirement for any real-time game like this). The game is hosted on AWS east, and so far I've heard good reports from people playing as far away as California. In the future I'd like to do more testing and optimization on this.

There was one pretty interesting issue that came up after deployment. While testing the live version of the site, I discovered that submitting a word would occasionally crash the server. At first I thought I might have just missed a bug during development, but I could only recreate the crash on the live app. Eventually I figured out the issue--the live app is deployed through [Gigalixir](https://www.gigalixir.com/) on its free tier, which limits how much memory it can use.

It didn't seem like I should be exceeding the limit, so the next step was to figure out how optimize the program. I set up Phoenix's LiveDashboard for the app to see what was causing memory spikes (you typically wouldn't expose this information, but for purposes of demonstration you can find Word Maze's dashboard [here](http://word-maze.gigalixirapp.com/dashboard)). Turns out there were two issues. First, I wasn't actually shutting down finished game processes, so memory was gradually getting eaten up over time. That was a simple fix, since it just requires sending a shutdown message at the right point in the code. Second, validating submissions involves checking them against a *large* array of valid words. Putting the array into memory was the immediate cause of the crashes. The solution was to use a [stream](https://hexdocs.pm/elixir/Stream.html) so that I could validate submissions without having the whole dictionary in memory at a single time. These fixes freed up enough memory that the application should be able to handle at least a few concurrent games.