---
slug: "/blog/a-practical-guide-to-css-position"
date: "2020-07-27"
title: "A Practical Guide to CSS Position"
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

Relative positioning keeps an element within the normal flow, but allows us to push it in some direction relative to the position it would have ordinarily had. Position relative elements can still have their layout influenced by tools like flexbox, grid, and float. Moreover, the space they would ordinarily take up counts as occupied, so they still displace other elements as though they had a static position. This makes relative positioning only a minor deviation from the normal flow.

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

In order for this to work, the sticky element must have a top value. In this example the top value is 0, which makes the top of the sticky element scroll flush with the viewport. It's also possible to set other top values if you want either part of the sticky element off-screen or a margin between the sticky element and the top of the screen.

## Techniques for Using Positioned Elements

Even with an understanding of the basics of CSS positioning, using non-static positions effectively can be a challenge. Positioned elements can be unwieldy when we take them from simple demos and put them in more complex documents. So let's look at a few techniques that make it easier to get positioned elements to do what we want them to do.

### Positioning in Relation to a Parent

We often want to place a child element at a certain position within its parent element, such that it remains in that position no matter how the parent element adjusts in size and shape due to its place in the normal flow of the document. There's a combination of attribute assignments that allows us to do this.

To start, we give the child position absolute and whatever top, bottom, left, or right attributes we want to place it within the parent. But that's not enough, since an absolute element gets placed in relation to the document or its nearest parent with non-static positioning. That might seem like a problem--what if we want the parent to have static positioning? The trick is to just give the parent a position of relative. Here's the combination in action:

<iframe height="265" style="width: 100%;" scrolling="no" title="Absolute Child, Relative Parent" src="https://codepen.io/iangrubb/embed/jOWoGKX?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/jOWoGKX'>Absolute Child, Relative Parent</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

A position relative parent still reserves a space in the normal flow of the document, so as long as we don't give it a value for top, bottom, left, right, or z-index, it will behave *exactly as though* it were a statically positioned element.

### Centering Elements

Suppose we have an absolutely positioned child that we want perfectly centered within its parent. This is possible without too much trouble if we keep in mind how the percentage unit works in different contexts. In the context of properties like top, the percentage unit depends on the size of the parent of the element we're styling. But in the context of a translation, the percentage unit depends on the size of the element itself.

This means we can center an element within its parent by determining location in *both* ways. Here are the stages in the process:

<iframe height="312" style="width: 100%;" scrolling="no" title="Centering with Position" src="https://codepen.io/iangrubb/embed/VwaZYwy?height=312&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/VwaZYwy'>Centering with Position</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The first purple square has position absolute, but it's just in its default position of top and left 0. The second purple square has top and left values of 50%, putting its top-left corner at its parent's center. That means we've gone a bit too far, but we can move back a bit with a translation. The third purple square has the same top and left values, but has been given a transformation to translate it back and up 50% of its own proportions, centering it perfectly within its parent.

### Determine Size with Top + Bottom or Left + Right

You'll sometimes want a positioned child to span across some portion of its parent. For instance, in the example below we want a child to extend across its parent leaving 8px to the left, 16px to the right, 8px to the top, and half of the parent's height to the bottom. This can be done by setting top and left to 8px each, and then setting width and height using the appropriate calculations. But there's an easier way: we can set width by combining top and bottom, and we can set width by combining left and right. Here are both ways of achieving the same effect:

<iframe height="248" style="width: 100%;" scrolling="no" title="Setting Dimensions through Position Attributes" src="https://codepen.io/iangrubb/embed/KKzPpzm?height=248&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/KKzPpzm'>Setting Dimensions through Position Attributes</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Of the two options, setting width and height implicitly strikes me as the cleaner, more readable option. All things equal, I'd rather have CSS handle calculations for me than write them out explictly myself.

### Uncovering Content from Fixed Navigation

Fixed navigation headers can be extremely convenient for users, since they remove the hassle of having to scroll up in order to continue navigating the site. However, since they can cover up content they should be used with care--you don't want to make information hard or even impossible to access.

A nice place to start is applying a margin to the top of the element that contains the obstructing navigation. If you set the margin to the same height as the navigation bar this will help prevent having inaccessible content at the top of your page.

A slightly more subtle problem is that if you use anchor links, the links will scroll the page so that the fixed navigation ends up on top of whenever header you were linking to. That's a bit sloppy and not the best user experience. But here's an example where the problem is solved:

<iframe height="294" style="width: 100%;" scrolling="no" title="Fixed Clearance with Scroll Margin" src="https://codepen.io/iangrubb/embed/JjXPdNx?height=294&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/JjXPdNx'>Fixed Clearance with Scroll Margin</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The trick is to apply a scroll-margin to the top of each heading that you use as an anchor link. In this case, I added enough margin to account for the navigation bar and the natural margin of each of my headings.

### Control Overlap through HTML Structure



<iframe height="358" style="width: 100%;" scrolling="no" title="Working With Stacking Contexts" src="https://codepen.io/iangrubb/embed/QWyeXaz?height=358&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/QWyeXaz'>Working With Stacking Contexts</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>







## When to Use Positioned Elements

Most of the type, you should go with the static default

Examples of Uses

### Visually Indicating Important Information


Sticky headers for easier access to table info and local control panel.


### Compact Layouts with Irregular Shapes

Static positioning treats elements as boxes, but the visible shape of your elements may not be boxes. Can lead to excessive white space. Possible to get around this by using absolute positioning.

( game pad buttons packed together )

### Animation

Transition performance

### Overlay


(scrolling bars on computer screen)

   
### Modals


### Tool Tips 


  Great because we don't want these to break the normal flow of the document.

  These typically can be dismissed, so less concern about blocking content.

### Map With Markers

  Another spacial case

    Add points on images or map



### Responsive Aspect Ratio
