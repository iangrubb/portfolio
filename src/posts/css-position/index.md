---
slug: "/blog/a-pragmatic-guide-to-css-position"
date: "2020-07-27"
title: "A Pragmatic Guide to CSS Position"
subtitle: "What it Does, When to Use it, and How to Use it Well"
---

Getting a website's layout exactly right can be a serious challenge. A layout needs to work for 

We can use the CSS position property to customize our website layouts. It's a powerful tool, but one that's easy to misunderstood and misuse. 

## Possible Values for Position

Let's start with the basics: what options are there 

### Static


Static disables top, bottom, left, right, z-index

### Relative

### Fixed

### Absolute

Position in Relation to Document or nearest non-static parent



Is Absolute with no parent exactly the same as fixed? NO! Scrolling makes a difference. If bottom is set to 0, fixed will place at bottom of viewport, while absolute will just place a full screen height down.

<iframe height="265" style="width: 100%;" scrolling="no" title="Absolute vs Fixed Position" src="https://codepen.io/iangrubb/embed/wvMbNzr?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/wvMbNzr'>Absolute vs Fixed Position</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Sticky











## Techniques for Using Positioned Elements


### Responsive Absolute Positioning

<iframe height="265" style="width: 100%;" scrolling="no" title="Absolute Child, Relative Parent" src="https://codepen.io/iangrubb/embed/jOWoGKX?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/jOWoGKX'>Absolute Child, Relative Parent</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


### Centering Elements

Percentage usage

Transition performance

Possible scroll bar addition when relative down vs translation down.

### Determine Size with Top + Bottom or Left + Right

### Uncovering Content

Scroll margin top to consistently make sure content isn't hidden

### Animated Cards

Toggle z-index





## Uses of Positioned Elements

Most of the type, you should go with the static default

Examples of Uses

### Animation


### Overlay

Risk: accidentally hiding content.

Recommended solution: if an element can be put on top of a sibling, any sibling should be coverable. Non-coverable content should be a sibling of the whole component that overlays.

Another solution: responsive units that play well with padding and margin. (maybe a good technique)

Transparency can be a relevant way around this (scrolling bars on computer screen)

Example: Tool tips and notifications

    Great because we don't want these to break the normal flow of the document.

    These typically can be dismissed, so less concern about blocking content.

Example: Annotating Visual Content

    Another spacial case

    Add points on images or map

### Visually Indicating Important Information


### Compact Layouts with Irregular Shapes

Static positioning treats elements as boxes, but the visible shape of your elements may not be boxes. Can lead to excessive white space. Possible to get around this by using absolute positioning.

( find compelling example to support this )
