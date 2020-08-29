---
slug: "/portfolio/natural"
title: "Natural"
tech: "React, Redux, Styled Components, HTML, CSS, JS, Ruby, Rails"
hero: ./hero.png
tagline: "A virtual tutor that helps logic students learn to construct natural deduction proofs."
github: "https://github.com/iangrubb/Natural"
live: "https://naturalprover.netlify.app/"
---

I have a strong personal connection with this project. My motivations for this app come from my time teaching logic courses at NYU, before I learned to code. I wanted a program that would help teach students how to build formal proofs. Programs like this already existed, but I found that their typical UI often lead to *more* confusion. I knew then what UI I wanted the program to have, and for my final project as a student at Flatiron School I finally got to implement it.

For most students in intro to logic courses, the hardest challenge is building formal proofs. The challenge is twofold: the syntax of the proof rules can be intimidating and the strategy required for combining these rules in the right way isn't always intuitive. Unfortunately, many students get hung up on the syntax, and so don't get a chance to develop an understanding of the strategy involved in proof construction.

Natural is designed to handle details about proof syntax, so that students can focus on proof-construction strategies. Instead of typing in sentences manually, students are given prompts and how they respond to these prompts determines how the proof gets filled in. To prevent decision paralysis, students are only presented with options that could feasibly be ways of continuing the proof. If a choice doesn't work out, students can easily go back and choose differently. In this way the application encourages play and experimentation as students attempt to complete their proofs.

## Functionality

### Current

The core of the application is the proof construction interface. It works for any valid argument in sentential or quantificational logic--any argument covered in a standard intro course. There's an interface for inputting a new proof to work on, but there are also a collection of proofs already programmed into the system.

There are several quality of life features meant to help students explore proofs more effectively. The interface is styled to draw attention to the relevant parts of the proof and animations help make it apparent when and how a proof changes. When there are multiple possible goals, students can choose whichever order they prefer in tackling them. Students can also navigate forwards and backwards in proofs to explore different possible approaches.

<iframe src="https://player.vimeo.com/video/450948418" title="Completing a Proof" w="640" h="345" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

Although the app can be used without a log in, users have the ability to make an account in order to save the proofs they submit and track their progress completing the application's built-in exercises.

### Future

The current version of proof interface uses a two column layout--one for prompts and one for the proof itself. Ideally, I'd like to refactor this into a single column layout, with prompts showing up on top of the proof when and where they're relevant. The difficulty with this approach would be ensuring that important content doesn't get covered up and become impossible to access. However, a single column layout would be more mobile-friendly and would allow me to more easily embed the content other contexts (such as a digital textbook).

More could be done to improve the current animations and add new visual elements that help guide students through proofs. Ideally I'd like to do this in response to user feedback.

Since the main functionality of the website doesn't rely on an ongoing internet connection, it would be great to be able to build the app as a PWA that can be used offline.

Finally, since this is a teaching tool it would be great to build out the backend of the website more, so that teachers could make collections of proofs and assign them to students through the app.

## Development

The core challenge in developing the app was planning and working with the data structures necessary to represent formal sentences and proofs. Both are best represented using trees, so I ended up working a lot with nested data and recursive functions. This was a challenge, but also pretty fun and a great demonstration of the practical value of data structures and algorithms.

The React components I used to render the proofs also involved recursive calls. The reason is that some proofs contain sub-proofs, which need to be rendered like proofs (just nested inside of another proof). In order to make sure that all the data ended up in the right places in these components, using Redux was practically essential. Redux encourages a normalized data store, so I also got chance to apply some of my database management skills in a new context.

Another challenge was implementing the proof rules correctly. To add to a proof, users choose a goal, choose a rule to achieve that goal, and then choose how to use the rule. This cycle repeats until the proof is complete. While there are some similarities between the different rules, there are enough idiosyncrasies that it took some planning to make a single system that they could all fit within.

The styling and animation for the app are managed using Styled Components and React Reveal. Styled Components was incredibly helpful--I end up doing a lot of style toggling based on state changes, and Styled Components let's be do this in a straightforward, declarative way. The animations provided by React Reveal were helpful, though I didn't end up being able to use all of it's features (such as animations on dismount) due to some conflicts with Redux. In the future, I'd like to refactor the animations using React Transition Group or React Spring.