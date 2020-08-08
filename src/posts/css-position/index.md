---
slug: "/blog/a-practical-guide-to-css-position"
date: "2020-08-08"
title: "A Practical Guide to CSS Position"
subtitle: "What it Does, When to Use it, and How to Use it Well"
---

Building a website's layout can be a serious challenge. A layout needs to orchestrate the interactions of different kinds of content and work on different screen sizes. It should be immediately intelligible to the user, conveying an sense of what can be done with the site. It should be visually interesting and invite the user in.

Given the importance of a good website layout, CSS provides us many tools for arranging HTML elements. Here, I'll be looking at one of them--the position property. Position is a powerful tool, but one that's easy to misunderstand and misuse. There's so much I wish I had known when I was getting started and I'm going to try to share as much of that as I can. Let's get started!

## Ways to Position with CSS

We'll begin with the basics by looking at the different ways of positioning HTML elements through CSS. There are five options: static, relative, fixed, absolute, and sticky.

### Static

You won't see static position mentioned that often in CSS files, since it's the default for all HTML elements. Statically positioned elements participate in the normal flow of an HTML document. This means that block elements will stack on top of each other and inline elements will sit next to each other on a line and wrap to the next line as necessary. Elements with flexbox or grid parents will be positioned according to their parent's attributes. Any element set to float will shift in the desired direction.

These are sensible defaults--they provide a minimal viable layout that's at least somewhat usable and responsive. We can use non-static positioning to make exceptions to these defaults, modifying how an element interacts with the normal flow or even removing it from the flow entirely. Doing so is risky, since the defaults are what they are for good reason. But when done carefully, modifications to the normal document flow can significantly enhance a site.

CSS provides a set of additional properties for making these adjustments: top, bottom, left, right, and z-index. The first four are used to move an element around the page and z-index is used to determine which of two overlapping contents shows on top of the other. All five of these properties are disabled on elements with static positioning.

### Relative

Relative positioning keeps an element within the normal flow, but allows us to push it in some direction relative to the position it would have ordinarily had. Position relative elements can still have their layout influenced by tools like flexbox, grid, and float. Moreover, the space they would ordinarily take up counts as occupied, so they still displace other elements as though they had a static position. This makes relative positioning only a minor deviation from the normal flow.

Here's an example of how it works. We have five squares aligned by a flex parent, one of which has been given a class with relative positioning:

<iframe height="310" style="width: 100%;" scrolling="no" title="Relative Position" src="https://codepen.io/iangrubb/embed/preview/yLemEEE?height=310&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/yLemEEE'>Relative Position</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The purple square has a top value of 15px, moving it down 15px from its normal position (a bottom value would have moved it up 15px instead). It also has a left value of -10px, moving it left 10px from its normal position (a right value of -10px would have moved it right 10px instead). Finally, it has a z-index of -1, which is why it's behind the green square below it. By default elements are treated as having a z-index of 1, so giving the purple square a lower z-index forces it behind the green square.

### Fixed

Elements with fixed position are taken out of the flow of the document entirely, meaning they don't displace other elements. They're then placed in relation to the user's viewport, so that they won't move around the screen as the user scrolls.

Elements in the normal flow can be made to scroll under or over fixed elements. In this example, the green squares scroll over a fixed background div and under a fixed header:

<iframe height="344" style="width: 100%;" scrolling="no" title="Fixed Position" src="https://codepen.io/iangrubb/embed/preview/VweodNa?height=344&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/VweodNa'>Fixed Position</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

There are a couple points to notice here. First, left and top work a bit differently than in the case of relative positioning--each of them sets an offset from one side of the user's viewport. Second, the squares naturally scroll under the header, without us having to explicitly give it a higher z-index. However, we do have to explicitly give the background div a negative z-index to move it below the main content.

### Absolute

Like fixed positioning, absolute positioning places an element in relation to a container. The difference is that absolute positioning gives us more flexibility about which container to choose. If an absolutely positioned element has at least one ancestor with a non-static position, then it will be positioned in relation to the nearest such ancestor. Otherwise, it will be placed in relation to the body of the document. This sounds a bit confusing in the abstract, but we'll see below that it's not so bad to work with in practice.

Let's clear up one potential point of confusion--an absolutely positioned element that's placed in relation to the body of the document isn't the same thing as an element with fixed positioning. They look the same in certain cases, but they behave differently when the body of the document is taller than the user's viewport:

<iframe height="265" style="width: 100%;" scrolling="no" title="Absolute vs Fixed Position" src="https://codepen.io/iangrubb/embed/preview/wvMbNzr?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/wvMbNzr'>Absolute vs Fixed Position</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

In this case, the absolute and fixed rectangles both have a top position of 10px, so they both start 10px from the top of the viewport. But document is taller than the viewport, so when the user scrolls the fixed rectangle stays in place while the absolute rectangle moves up with the body of the document as it's scrolled over.

### Sticky

Sticky is a relatively new kind of positioning, which functions as a kind of hybrid between relative and fixed. It doesn't have quite the same level of browser support, but it does offer a powerful effect that could previously be accomplished through JavaScript.

A sticky element scrolls into the user's viewport as though it has a relative position. But once it reaches the top of the viewport it temporarily behaves as though it has a fixed position. It only scrolls off of the screen once its parent starts to scroll off of the screen as well. Here's the effect in action: 

<iframe height="289" style="width: 100%;" scrolling="no" title="Sticky Position" src="https://codepen.io/iangrubb/embed/preview/ExPqpdy?height=289&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/ExPqpdy'>Sticky Position</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

In order for this to work, the sticky element must have a top value. In this example the top value is 0, which makes the top of the sticky element scroll flush with the viewport. It's also possible to set other top values if you want either part of the sticky element off-screen or a margin between the sticky element and the top of the screen.

## Techniques for Using Positioned Elements

Even with an understanding of the basics of CSS positioning, using non-static positions effectively can be a challenge. Positioned elements can be unwieldy when we take them from simple demos and put them in more complex documents. So let's look at a few techniques that make it easier to get positioned elements to do what we want them to do.

### Positioning in Relation to a Parent

We often want to place a child element at a certain position within its parent element, such that it remains in that position no matter how the parent element adjusts in size and shape due to its place in the normal flow of the document. There's a combination of attribute assignments that allows us to do this.

To start, we give the child position absolute and whatever top, bottom, left, or right attributes we want to place it within the parent. But that's not enough, since an absolute element gets placed in relation to the document or its nearest parent with non-static positioning. That might seem like a problem--what if we want the parent to have static positioning? The trick is to just give the parent a position of relative. Here's the combination in action:

<iframe height="265" style="width: 100%;" scrolling="no" title="Absolute Child, Relative Parent" src="https://codepen.io/iangrubb/embed/preview/jOWoGKX?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/jOWoGKX'>Absolute Child, Relative Parent</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

A position relative parent still reserves a space in the normal flow of the document, so as long as we don't give it a value for top, bottom, left, right, or z-index, it will behave *exactly as though* it were a statically positioned element.

### Centering Elements

Suppose we have an absolutely positioned child that we want perfectly centered within its parent. This is possible without too much trouble if we keep in mind how the percentage unit works in different contexts. In the context of properties like top, the percentage unit depends on the size of the parent of the element we're styling. But in the context of a translation, the percentage unit depends on the size of the element itself.

This means we can center an element within its parent by determining location in *both* ways. Here are the stages in the process:

<iframe height="312" style="width: 100%;" scrolling="no" title="Centering with Position" src="https://codepen.io/iangrubb/embed/preview/VwaZYwy?height=312&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/VwaZYwy'>Centering with Position</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The first purple square has position absolute, but it's just in its default position of top and left 0. The second purple square has top and left values of 50%, putting its top-left corner at its parent's center. That means we've gone a bit too far, but we can move back a bit with a translation. The third purple square has the same top and left values, but has been given a transformation to translate it back and up 50% of its own proportions, centering it perfectly within its parent.

### Determining Size with Top + Bottom or Left + Right

You'll sometimes want a positioned child to span across some portion of its parent. For instance, in the example below we want a child to extend across its parent leaving 8px to the left, 16px to the right, 8px to the top, and half of the parent's height to the bottom. This can be done by setting top and left to 8px each, and then setting width and height using the appropriate calculations. But there's an easier way: we can set width by combining top and bottom, and we can set width by combining left and right. Here are both ways of achieving the same effect:

<iframe height="248" style="width: 100%;" scrolling="no" title="Setting Dimensions through Position Attributes" src="https://codepen.io/iangrubb/embed/preview/KKzPpzm?height=248&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/KKzPpzm'>Setting Dimensions through Position Attributes</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Of the two options, setting width and height implicitly strikes me as the cleaner, more readable option. All things equal, I'd rather have CSS handle calculations for me than write them out explictly myself.

### Uncovering Content from Fixed Navigation

Fixed navigation headers can be extremely convenient for users, since they remove the hassle of having to scroll up in order to continue navigating the site. However, since they can cover up content they should be used with care--you don't want to make information hard or even impossible to access.

A nice place to start is applying a margin to the top of the element that contains the obstructing navigation. If you set the margin to the same height as the navigation bar this will help prevent having inaccessible content at the top of your page.

A slightly more subtle problem is that if you use anchor links, the links will scroll the page so that the fixed navigation ends up on top of whenever header you were linking to. That's a bit sloppy and not the best user experience. But here's an example where the problem is solved:

<iframe height="294" style="width: 100%;" scrolling="no" title="Fixed Clearance with Scroll Margin" src="https://codepen.io/iangrubb/embed/preview/JjXPdNx?height=294&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/JjXPdNx'>Fixed Clearance with Scroll Margin</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The trick is to apply a scroll-margin to the top of each heading that you use as an anchor link. In this case, I added enough margin to account for the navigation bar and the natural margin of each of my headings.

### Controlling Overlap through HTML Structure

The next technique helps control how elements overlap when you use the z-index property. We can't always force one element above another just by setting the z-index values of the elements. The reason is that z-index values don't get compared across the whole document, only within specific *stacking contexts*.

This actually gets pretty complicated, so lets just start with an example. Below, we have a single bar with z-index 2 and two pairs of elements. For each pair, the larger square has a z-index of 1 and the smaller square has a z-index of 3. I've set the squares to move past the bar when hovered over. We'd expect that for each pair, the large square would go under the bar and while the small square would go over. But that's not the behavior we actually get.

<iframe height="358" style="width: 100%;" scrolling="no" title="Working With Stacking Contexts" src="https://codepen.io/iangrubb/embed/preview/QWyeXaz?height=358&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/QWyeXaz'>Working With Stacking Contexts</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Ok, so what's going on? The key difference here is HTML structure. In the first example, the large square contains the smaller square as a child. This ensures that when the hover translation causes the large square to move, the small square moves along with it. But because there's a z-index on the large square it starts a new stacking context. This means that anything above the large square will automatically be above any of its children.

This is a surprising and potentially frustrating rule. But the rule can also be quite valuable, since its good to have safeguards against an element showing up where it shouldn't be if given the wrong z-index. We just need to know how to work around the rule when we want certain kinds of behavior.

The trick to getting the pair to split in the second example above is to introduce an additional div. The large square in the original example serves double duty--it's both the thing that gets moved on hover and the thing that places a square under the bar. So we just need to restructure our HTML so that the parent div is only responsible for the movement, and contains two children that each render one of the squares. Now that the squares are siblings they're part of a broader stacking context that includes the bar, allowing their z-index values to have the intended effect.

## When to Use Positioned Elements

While these positioning options give you a lot of freedom, most layouts should consist mainly of static elements. The unnecessary use of positioned elements can lead to longer CSS files, more brittle code, and less predictable styling. All of this makes your code harder for others to understand and harder to change in the future. Positioned elements can have a positive, powerful effect when used in targeted ways, but the layout of a page as a whole should nearly always be built with static elements arranged through a system like Flexbox or Grid.

That being said, let's look at some cases where it *does* make sense to deviate from static positioning. I'll go over some of the common use cases that I keep coming back to, but this certainly isn't an exhaustive list. If you have your own favorite uses, let me know!

### Make Important Elements More Prominent

This is a pretty broad category, but the basic idea is that if we have especially important information, buttons, or forms, we can make them more obvious and easier to access if we move them out of the normal flow of the document. One example is making navigation options easier to access by giving them a fixed position. Another is making headers stand out by giving them a small nudge out of the normal flow with relative positioning.

Let's consider a slightly more advanced variation on the idea of a fixed header. In this case, we have a table of data with column names and a search bar at the top. Ideally, the names and search bar will be visible to the user *whenever* they see the table. But since the table might not always be on the screen, we can't just give it a fixed position. The right approach involves sticky positioning:

<iframe height="355" style="width: 100%;" scrolling="no" title="Sticky Table Header" src="https://codepen.io/iangrubb/embed/preview/poyzmWw?height=355&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/poyzmWw'>Sticky Table Header</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The one notable trick to getting this working is using multiple sticky elements. This is necessary in order to write the table using the semantically appropriate HTML tags. The sticky property wasn't working on any of the table row elements, so I had to apply it to each table header element. Also, since the title and search bar can't be in the table itself, they have to be in a separate div tag that's also sticky. Everything behaves as a single sticky element because I gave the div a determinate height and set the top value on the headers so that they stick just below the end of the header div.
 
### Arrange Irregular Shapes

Both the normal flow and layout tools like Flexbox and Grid assume that your website's elements are rectangles. That's typically an accurate assumption, but not always. When you work with non-rectangular shapes, static positioning sometimes results in the wrong distribution of white space between elements. In that case it can make sense to use positioned elements to create a more aesthetically satisfying layout.

Here's a simple example involving some buttons meant to emulate a video game controller. The buttons have a wedge created with a clip-path, so to fit them together compactly I made them position absolute elements inside a position relative parent.

<iframe height="322" style="width: 100%;" scrolling="no" title="Positioning Irregular Elements" src="https://codepen.io/iangrubb/embed/preview/gOrOaoR?height=322&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/gOrOaoR'>Positioning Irregular Elements</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The arrangement uses a rotation to get each button in the right spot. I started by placing the left button, and then placed the rest of the elements by rotating them from that starting point. This works because I've set the set the buttons to transform relative to middle of their right side. You *could* position the buttons without a rotation, but placing elements radially simplifies the calculations and minimizes lines of CSS.

### Stack Groups of Elements

In some cases it makes sense to stack groups of elements on top of each other. Stacking elements results in a more compact layout, saving valuable space on the screen. It can also lead to more visually engaging content, as long as the technique is used on the right kinds of elements and in moderation.

The difficulty with stacking elements is ensuring that the hidden content is always accessible to the user. In some cases you can do this with pure CSS--as long as some portion of each element is revealed, it might be enough to set up a transition that reveals each element whenever the user hovers over that element. In the remaining cases you'll need to use JS to give the user the ability to rearrange elements by manipulating the DOM.

Here's an example involving a stack of numbered cards. I'm using JS so that the user can click a button to move the top card to the back of the stack. On click, a CSS animation gets applied to the top card, moving it out and then behind the rest of the cards. For simplicity, this version of the example assumes a stack of five cards, but we could remove this limit with more JS if necessary.

<iframe height="355" style="width: 100%;" scrolling="no" title="Stacked Cards" src="https://codepen.io/iangrubb/embed/preview/wvGvrpM?height=355&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/wvGvrpM'>Stacked Cards</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The cards are position absolute and are placed in a container that's position relative. They're rendered through JS and are assigned bottom, left, and z-index values based on their distance from the bottom of the stack. This is how the stack shifts slightly up and to the right. I applied a very slight box-shadow on each of the cards to add to this effect.

The animation I'm using is defined in the CSS file but applied in the JS file. Using transitions in CSS is usually sufficient for most basic animations, but in this case I had to use keyframes since the top card needs to go out and then back. Note that I'm giving the animation an animation-fill-mode of forwards, so that it retains the CSS applied by the last frame. Also, I'm applying a transitioned change in bottom, left, and z-index values on the other cards, so they all slide slightly up while the top card shifts to the back.

### Apply a Partially Transparent Overlay

Sometimes the easiest way to achieve a desired aesthetic through CSS is to build it up using multiple overlapping layers. This could involve stacking elements with fully transparent portions or perhaps even stacking partially transparent, colored elements that uniformly tint whatever is under them.

In this example, I used a partially transparent overly to make a simple monitor with animated scan lines that partially cover anything on the monitor screen:

<iframe height="265" style="width: 100%;" scrolling="no" title="Monitor Overlay" src="https://codepen.io/iangrubb/embed/preview/ExKxLgK?height=265&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/ExKxLgK'>Monitor Overlay</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The overlay is a repeating linear gradient, which makes some fully transparent regions and some slightly opaque regions. To animate the overlay, I wrapped it in another div that covers the monitor screen and hides any overflowing content. The overlay itself is twice as tall as the monitor and is animated to move up gradually and loop back around when its bottom reaches the bottom of the overlay wrapper. The wrapper div and the div for the monitor's contents are placed in the same stack through absolute positioning and setting their z-index values.

By the way, this demo provides a nice example of how stacking contexts can be a benefit, rather than an annoyance. I *never* want the contents of the monitor to show up on top of the scan lines. However, I *may* want to use different z-index values within the monitor to control how those elements overlap. The risk is that I might try placing something on top of the green square, but accidentally give that thing a z-index value that pops it out above the scan lines. However, I don't have to worry about that in this case, since the z-index value on the monitor contents div creates a new stacking context. That allows me to freely assign whatever z-index values I want to elements in that div and know that they'll always end up below the scan lines.

### Add Tool Tips on Hover

Another great use for positioned elements is temporarily showing the user some informative content without breaking the normal flow of the document. When user behavior prompts the display of elements like modal windows, error and alert messages, and tool tips, you don't want them to push around the rest of your content. Instead, you can position them on top of your content and allow the user to dismiss them if that content needs to be accessed.

In this example, I use absolute positioning to display a tool tip on hover:

<iframe height="392" style="width: 100%;" scrolling="no" title="Tool Tip on Hover" src="https://codepen.io/iangrubb/embed/preview/xxVxJKM?height=392&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
See the Pen <a href='https://codepen.io/iangrubb/pen/xxVxJKM'>Tool Tip on Hover</a> by Ian Grubb
(<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Since tool tips can be used for many kinds of elements, I designed this to be pretty versatile--to use it, you just have to apply the tip-able class to the element you want to have the tool tip, then put the tip' content in a span with the class tool-tip. I use the before and after pseudo-elements to minimize the need to write out any extra HTML.

You might notice that I've put a thin transparent rectangle into the element using .tool-tip::before. The point of this element is to help make the hover work right. Ideally the tool tip would display when the user hovers over the base element *or* the tool tip itself. However, I also wanted a small margin between the tip and the base element. Implementing this directly as a margin means that if the user moves their cursor from the base element to the tool tip, it stops existing before they can get to the tool tip. The transparent rectangle acts like a margin but also bridges the base element and the tool tip.

The animation is just a matter of transitioning between transformations that scale the tool tip to 1 or 0 depending on whether the user hovers over the element or not. It doesn't look quite right by default, but the animation feels much more natural with the transform-origin changed to start from the bottom center of the element.

### Locate Markers on a Map or Image

You can sometimes use overlapping content to help visualize the data handled by your website. For instance, you might have images with annotations that target specific coordinates on the image or maps with pointers that target specific locations on the map. Using absolute positioning, you can visually display your coordinate data.
 
Here's a demo that takes graph data and uses it to display a map and a character that can move around the map (click a node to move the character to that node):

<iframe height="265" style="width: 100%;" scrolling="no" title="CSS Graph Movement" src="https://codepen.io/iangrubb/embed/preview/YzqzjOG?height=265&theme-id=light&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/YzqzjOG'>CSS Graph</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

My node data has x and y coordinates built in, and I use these to display the nodes at the right spots on the map. I'm using percentages as units for the top and left properties, which allows the map to be resized if necessary. To render an edges, I start by placing it coming out of the right side of one of the nodes it connects. I do a bit of math to calculate its length and angle to the second node, and I then use these values to set the width of the edge element and rotate it enough so that it connects.

The CSS aspect of the character movement is actually pretty straightforward--it's just a matter of setting the character component's top and left values appropriately and adding a transition to move it from one point to the next. The JS aspect of the demo is a bit more complicated, since it involves graph traversal and a fair amount of conditional logic to make sure the character always behaves as expected. To get the character to move progressively through different points, I'm chaining together multiple CSS transitions. I do this by listening for the end of a transition and then initiating another if the character isn't yet at its destination.

### Implement a Fixed Aspect Ratio

Setting the width and height of an element using percentages is a simple way to make your elements more responsive. This approach works well most of the time, but has a significant limitation--it doesn't allow the responsive element to have a fixed aspect ratio. What you sometimes need is an element that's responsive to the width of its parent, but has a height that scales in some proportion with its width. There's actually a trick to get this to work, and it requires the use of positioned elements. Here's a basic setup (hover to change the width of the rectangle):

<iframe height="265" data-preview="true" style="width: 100%;" scrolling="no" title="Responsive Aspect Ratio" src="https://codepen.io/iangrubb/embed/preview/OJNPPWE?height=265&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/OJNPPWE'>Responsive Aspect Ratio</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

This trick depends on a peculiar property about vertical padding--vertical padding done with percentages is based on the percentage of the parent element's *width*. This means that if we give an element a padding-top value of 100% and give in no height, the overall height of the element (including the padding) will be the same as the width of its parent. The child can also be given a width of 100%, making it a perfect square. If we want a different aspect ratio, we can just use calc to set the required amount of padding.

The issue now is that if we put content inside this element, its height will increase beyond 0 and ruin the effect. The solution is to make yet another child element that has both height and the same overall dimensions as its parent. We do this with absolute positioning, having the top, bottom, left, and right values of the child all set to 0 so it covers the entirety of its parent. So the solution ultimately involves nesting three elements. We adjust the width of the whole by adjusting the width of the outermost element and we add children to the whole by adding them to the innermost element.