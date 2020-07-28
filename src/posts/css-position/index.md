---
slug: "/blog/css-position"
date: "2020-07-27"
title: "How to Work with CSS Position"
---


## Ways to Set Position

### Static


Static disables top, bottom, left, right, z-index

### Fixed

### Relative

### Absolute

Position in Relation to Document or nearest non-static parent

Is Absolute with no parent exactly the same as fixed? NO! Scrolling makes a difference. If bottom is set to 0, fixed will place at bottom of viewport, while absolute will just place a full screen height down.

### Sticky



## Uses and Abuses of Non-Static Positioning


### Animation



### Overlay


Risk: accidentally hiding content.

Recommended solution: if an element can be put on top of a sibling, any sibling should be coverable. Non-coverable content should be a sibling of the whole component that overlays.

Another solution: responsive units that play well with padding and margin. (maybe a good technique)

Transparency can be a relevant way around this (scrolling bars on computer screen)

### Navigation Elements

Special case of previous

### Annotating Visual Content

Another spacial case

Add points on images or map

### Compact Layouts

Static positioning treats elements as boxes, but the visible shape of your elements may not be boxes. Can lead to excessive white space. Possible to get around this by using absolute positioning.

( find compelling example to support this )





## Basic Techniques

### Positioning an Element in Relation to its Parent

### Centering Elements

Percentage usage

Transition performance

Possible scroll bar addition when relative down vs translation down.

### Determine Size with Top + Bottom or Left + Right

### Uncovering Content

Scroll margin top to consistently make sure content isn't hidden

### Animated Cards

Index card goes up and ends up behind stack of cards.
