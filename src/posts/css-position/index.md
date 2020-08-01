---
slug: "/blog/a-pragmatic-guide-to-css-position"
date: "2020-07-27"
title: "A Pragmatic Guide to CSS Position"
subtitle: "What it Does, When to Use it, and How to Use it Well"
---

Building a website's layout can be a serious challenge. A layout needs to orchestrate the interactions of different kinds of content and work on different screen sizes. It should be immediately intelligible to the user, conveying an sense of what can be done with the site. It should be visually interesting and invite the user in.

Given the importance of a good website layout, CSS provides us many tools for arranging HTML elements. Here, I'll be looking at one of them--the position property.

Position is a powerful tool, but one that's easy to misunderstand and misuse. There's so much I wish I had known when I was getting started and I'm going to try to share as much of that as I can. Let's get started!

## Ways to Position with CSS

We'll begin with the basics by looking at the different ways of positioning HTML elements through CSS. There are five options: static, relative, fixed, absolute, and sticky.

### Static

You won't see static position mentioned that often in CSS files, since it's the default for all HTML elements. Statically positioned elements participate in the normal flow of an HTML document. This means that block elements will stack on top of each other and inline elements will sit next to each other on a line and wrap to the next line as necessary. Elements with flexbox or grid parents will be positioned according to their parent's attributes. Any element set to float will shift in the desired direction.

These are sensible defaults--they provide a minimal viable layout that's at least somewhat usable and responsive. We can use non-static positioning to make exceptions to these defaults, modifying how an element interacts with the normal flow or even removing it from the flow entirely. Doing so is risky, since the defaults are what they are for good reason. But when done carefully, modifications to the normal document flow can significantly enhance a site.

CSS provides a set of additional properties for making these adjustments: top, bottom, left, right, and z-index. The first four are used to move an element around the page and z-index is used to determine which of two overlapping contents shows on top of the other. All five of these properties are disabled on elements with static positioning.

### Relative

Relative positioning keeps an element within the normal flow, but allows us to nudge it in some direction relative to the position it would have ordinarily had. Position relative elements can still have their layout influenced by tools like flexbox, grid, and float. Moreover, the space they would ordinarily take up counts as occupied, so they still displace other elements as though they had a static position. This makes relative positioning only a minor deviation from the normal flow.

Here's an example of how it works. We have five squares aligned by a flex parent, one of which has been given a class with relative positioning:

<iframe height="310" style="width: 100%;" scrolling="no" title="Relative Position" src="https://codepen.io/iangrubb/embed/yLemEEE?height=310&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/yLemEEE'>Relative Position</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The purple square has a top value of 15px, moving it down 15px from its normal position (a bottom value would have moved it up 15px instead). It also has a left value of -10px, moving it left 10px from its normal position (a right value of -10px would have moved it right 10px instead). Finally, it has a z-index of -1, which is why it's behind the green square below it. By default elements are treated as having a z-index of 1, so giving the purple square a lower z-index forces it behind the green square.

### Fixed

Elements with fixed position are taken out of the flow of the document entirely, meaning they don't displace other elements. They're then placed in relation to the user's viewport, so that they won't move around the screen as the user scrolls.

Elements in the normal flow can be made to scroll under or over fixed elements. In this example, the green squares scroll over a fixed background div and under a fixed header:

<iframe height="344" style="width: 100%;" scrolling="no" title="Fixed Position" src="https://codepen.io/iangrubb/embed/VweodNa?height=344&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/VweodNa'>Fixed Position</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

There are a couple points to notice here. First, left and top work a bit differently than in the case of relative positioning--each of them sets an offset from one side of the user's viewport. Second, the squares naturally scroll under the header, without us having to explicitly give it a higher z-index. However, we do have to explicitly give the background div a negative z-index to move it below the main content.

### Absolute

Like fixed positioning, absolute positioning places an element in relation to a container. The difference is that absolute positioning gives us more flexibility about which container to choose. If an absolutely positioned element has at least one ancestor with a non-static position, then it will be positioned in relation to the nearest such ancestor. Otherwise, it will be placed in relation to the body of the document. This sounds a bit confusing in the abstract, but we'll see below that it's not so bad to work with in practice.

Let's clear up one potential point of confusion--an absolutely positioned element that's placed in relation to the body of the document isn't the same thing as an element with fixed positioning. They look the same in certain cases, but they behave differently when the body of the document is taller than the user's viewport:

<iframe height="265" style="width: 100%;" scrolling="no" title="Absolute vs Fixed Position" src="https://codepen.io/iangrubb/embed/wvMbNzr?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/wvMbNzr'>Absolute vs Fixed Position</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

In this case, the absolute and fixed rectangles both have a top position of 10px, so they both start 10px from the top of the viewport. But document is taller than the viewport, so when the user scrolls the fixed rectangle stays in place while the absolute rectangle moves up with the body of the document as it's scrolled over.

### Sticky

Sticky is a relatively new kind of positioning, which functions as a kind of hybrid between relative and fixed. It doesn't have quite the same level of browser support, but it does offer a powerful effect that could previously be accomplished through JavaScript.

A sticky element scrolls into the user's viewport as though it has a relative position. But once it reaches the top of the viewport it temporarily behaves as though it has a fixed position. It only scrolls off of the screen once its parent starts to scroll off of the screen as well. Here's the effect in action: 

<iframe height="289" style="width: 100%;" scrolling="no" title="Sticky Position" src="https://codepen.io/iangrubb/embed/ExPqpdy?height=289&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/ExPqpdy'>Sticky Position</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

In order for this to work, the sticky element must have a top value. In this example the top value is 0, which makes the top of the sticky element scroll flush with the viewport. It's also possible to set other top values if one wants part of the sticky element off-screen or wants a margin between the sticky element and the top of the screen.

## Techniques for Using Positioned Elements

Even with an understanding of the basics of CSS positioning, using non-static positions effectively can be a challenge. Positioned elements can be unwieldy and lead to unintuitive behavior when we take them from simple demos and put them in more complex documents. So let's look at a few common techniques that make it easier to get positioned elements to do what we want them to do.


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

### Uncovering Content with Scroll-Margin

Scroll margin top to consistently make sure content isn't hidden




## When to Use Positioned Elements

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

### Responsive Aspect Ratio 
