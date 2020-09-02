---
slug: "/blog/a-practical-guide-to-css-position"
date: "2020-08-24"
title: "A Practical Guide to CSS Position"
abstract: "The CSS position property is an essential tool for building modern layouts. I'll explain the basics, share some tips, and show how you might use CSS position in practice."
hero: ./hero.jpg
heroAuthor: "Halacious"
heroSource: "https://unsplash.com/@halacious"
---

An effective layout is crucial to a success of a website. A layout needs to orchestrate the interactions of different kinds of content and work on different screen sizes. It should be immediately intelligible to the user, conveying an sense of what the site does. It should be visually interesting and invite the user in.

Given the importance of layouts, it makes sense that CSS provides many tools for arranging HTML elements. I'll be looking at one of them: the position property. Position is a powerful tool, but not always the most intuitive. It can create some impressive effects, but it's also easy to misuse. There's so much that I wish I had known when I was getting started with CSS, and I'm going to try to share as much as I can. Let's get started!

## Ways to Position with CSS

We'll start by looking at the ways of positioning HTML elements through CSS. There are five options: static, relative, fixed, absolute, and sticky.

### Static Position

HTML elements are statically positioned by default. Statically positioned elements participate in the normal flow of an HTML document. This means that block elements will stack on top of each other and inline elements will sit next to each other on a line and wrap to the next line as necessary.

These are sensible defaults--they provide a minimal viable layout that's at least somewhat usable. We can use non-static positioning to make exceptions to these defaults, modifying how an element interacts with the normal flow or even removing it from the normal flow entirely. Doing so is risky, since the defaults are what they are for good reason. But when done carefully, modifications to the normal document flow can significantly enhance a site.

CSS provides a set of additional properties for making these adjustments: top, bottom, left, right, and z-index. The first four are used to move an element around the page and z-index is used to determine which of two overlapping contents shows on top of the other. All five of these properties are disabled on statically positioned elements.

### Relative Position

Relative positioning keeps an element within the normal flow, but lets us push it in some direction relative to where it would have been. Whatever space relative elements would have taken up still counts as occupied, so they still displace other elements. This makes relative positioning only a minor deviation from the normal flow.

Here's an example of how this works. We have five squares aligned by a flex parent. The purple square has relative positioning, at top value of 15px, a left value of -10px, and a z-index of -1:

<iframe scrolling="no" title="Relative Position" src="https://codepen.io/iangrubb/embed/preview/yLemEEE?height=310&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/yLemEEE'>Relative Position</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

As a result, the purple square moves down 15px from its normal position and left 10px from its normal position. Elements are treated as having a z-index of 0 by default, so the purple square's lower z-index pushes it back behind the green square that it overlaps.



### Fixed Position

Elements with fixed position are taken out of the normal flow of the document entirely, meaning they don't displace other elements. They're then placed in relation to the user's viewport, so that they won't move around the screen as the user scrolls.

If you assign a value to the top property, it fixes the top of the element the specified distance from the top of the viewport. Likewise for bottom, left, and right. By applying the correct z-index values, elements in the normal flow can be made to scroll under or over fixed elements. In this example, the green squares scroll over a fixed background div and under a fixed header:

<iframe height="344" style="width: 100%;" scrolling="no" title="Fixed Position" src="https://codepen.io/iangrubb/embed/preview/VweodNa?height=344&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/VweodNa'>Fixed Position</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


### Absolute Position

Like fixed position, absolute position takes an element out of the normal flow and gives us control over where to place it. The difference is that instead of positioning in relation to the viewport, it allows for positioning in relation to one of its ancestors in the HTML tree.

The rules determining which ancestor gets used are a bit tricky. If an absolutely positioned element has at least one ancestor with a non-static position, then it will be positioned in relation to the *nearest* such ancestor above it in the tree. Otherwise, it will be placed in relation to the body of the document.

Sometimes beginners confuse absolute and fixed positioning. In the next example, there are two elements with a top value of 10px. One's fixed and one's absolute, but at first glance there doesn't seem to be any difference between the two results. However, scrolling the container produces a difference:

<iframe height="265" style="width: 100%;" scrolling="no" title="Absolute vs Fixed Position" src="https://codepen.io/iangrubb/embed/preview/wvMbNzr?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/wvMbNzr'>Absolute vs Fixed Position</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The absolute element is positioned in relation to the body of the document, which is taller than the height of the viewport. As such, scrolling moves the absolute element up so that it can stay 10px from the top of the body of the document, while the fixed element remains fixed 10px from the top of the viewport.

### Sticky Position

Sticky is a relatively new kind of positioning, which works as a kind of hybrid between relative and fixed. It doesn't have quite the same level of [browser support](https://caniuse.com/#search=sticky) as the others, but it does offer a powerful effect that could only previously be accomplished through JavaScript.

A sticky element scrolls into the user's viewport as though it has a relative position. But once it reaches the edge of the viewport it temporarily behaves as though it has a fixed position. It only scrolls off of the screen once its parent starts to scroll off of the screen as well. Here's the effect in action: 

<iframe height="289" style="width: 100%;" scrolling="no" title="Sticky Position" src="https://codepen.io/iangrubb/embed/preview/ExPqpdy?height=289&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/ExPqpdy'>Sticky Position</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

In order for this to work, the sticky element must have a top, bottom, left, or right property, depending on which edges the element should stick to. In this example, the header is sticky and its top and left values are 0, which makes it stick to the top or left when scrolled down or right. It's also possible to set other values besides 0 if you want part of the sticky element off-screen or a gap between the sticky element and the edge of the screen.

## Techniques for Using Positioned Elements

Using positioned elements effectively can be a challenge. Let's look at a few techniques that make it easier to get positioned elements to do what you want them to do.

### Positioning in Relation to a Parent

Suppose you want to place a child element at a certain location on top of its parent, so that it remains in that location no matter how the parent element adjusts in size and shape due to its place in the document. There's a combination of position assignments that allows you to do this.

First, make the child position absolute and give it whatever top, bottom, left, or right attributes you need. Second, make the parent position relative. This illustrates the difference between a static and a relative parent:

<iframe height="265" style="width: 100%;" scrolling="no" title="Absolute Child, Relative Parent" src="https://codepen.io/iangrubb/embed/preview/jOWoGKX?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/jOWoGKX'>Absolute Child, Relative Parent</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Relative positioning achieves two goals in this case. Obviously it allows the child to be positioned in relation to the parent. But it also does this without disrupting the parent's own behavior. A position relative parent still reserves a space in the normal flow of the document, so as long as you don't give it a value for top, bottom, left, right, or z-index, it will behave exactly like a statically positioned element.

### Centering Elements

When you have an absolutely positioned child, you sometimes want it perfectly centered within its parent. The trick to doing this depends on the fact that percentage unit work differently in different contexts. In the context of properties like top, the percentage unit depends on the size of the parent of the element we're styling. But in the context of a translation, the percentage unit depends on the size of the element itself.

This means you can center an element within its parent by determining its location in *both* ways at once. Here are the stages in the process:

<iframe height="312" style="width: 100%;" scrolling="no" title="Centering with Position" src="https://codepen.io/iangrubb/embed/preview/VwaZYwy?height=312&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/VwaZYwy'>Centering with Position</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The first purple square has position absolute, but it's just in its default position of top and left 0. The second purple square has top and left values of 50%, putting its top-left corner at its parent's center. The third purple square has the same top and left values, but also a transformation to translate it -50% vertically and horizontally. This moves it up and to the left so that it's centered perfectly within its parent.

### Determining Size with Top + Bottom or Left + Right

You'll sometimes want a positioned child to span across some portion of its parent. For instance, in the example below we want a child to extend across its parent leaving 8px to the left, 16px to the right, 8px to the top, and half of the parent's height to the bottom. This can be done by setting top and left to 8px each, and then setting width and height using the appropriate calculations. But there's an easier way: we can set width by combining top and bottom, and we can set width by combining left and right. Here are both ways of achieving the same effect:

<iframe height="248" style="width: 100%;" scrolling="no" title="Setting Dimensions through Position Attributes" src="https://codepen.io/iangrubb/embed/preview/KKzPpzm?height=248&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/KKzPpzm'>Setting Dimensions through Position Attributes</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Of the two options, setting width and height implicitly strikes me as the cleaner, more readable option.

### Uncovering Content from Fixed Navigation

Fixed headers can be convenient, since they ensure that navigation options are always readily available to the user. However, since they can cover up content they should be used with care--you don't want to make information hard or even impossible to access.

A good first step is to apply a margin to the top of the element that contains the obstructing navigation. Setting the margin to the same height as the navigation bar prevents content at the very top of your page from being inaccessible.

However, applying a margin doesn't fully solve the problem. If you use anchor links on a page with a fixed header, the links will scroll the page so that the navigation starts out on top of whatever header you linked to (you can find an example and discussion of the problem [here](https://www.seowebdesignllc.com/fixed-headers-and-jump-links-the-solution-is-scroll-margin-top/)). That's a bit sloppy and not the best user experience. Here's an example where the problem is solved:

<iframe height="294" style="width: 100%;" scrolling="no" title="Fixed Clearance with Scroll Margin" src="https://codepen.io/iangrubb/embed/preview/JjXPdNx?height=294&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/JjXPdNx'>Fixed Clearance with Scroll Margin</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The trick is to apply a scroll-margin to the top of each heading that you use as an anchor link. In this case, I added enough margin to account for the navigation bar and still leave a bit of breathing room above the heading.

### Controlling Overlap through HTML Structure

The next technique helps control how elements overlap when you use the z-index property. Here's a fact that's surprising to a lot of people who haven't dealt with it before: you can't always force one non-static element above another just by setting the z-index values of the elements. The reason is that z-index values don't get compared across the whole document, only across a specific *stacking context*.

This actually gets pretty complicated, so lets just start with an example. Below, we have a single bar with z-index 2 and two pairs of elements. For each pair, the larger square has a z-index of 1 and the smaller square has a z-index of 3. I've set the squares to move past the bar when hovered over. We'd expect that for each pair, the large square would go under the bar and while the small square would go over. But that's not the behavior we actually get:

<iframe height="358" style="width: 100%;" scrolling="no" title="Working With Stacking Contexts" src="https://codepen.io/iangrubb/embed/preview/QWyeXaz?height=358&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/QWyeXaz'>Working With Stacking Contexts</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Ok, so what's going on? The key difference here is HTML structure. In the first example, the large square contains the smaller square as a child. This ensures that when the hover translation causes the large square to move, the small square moves along with it. But because there's a z-index on the large square, it creates a new stacking context. This means that anything above the large square will automatically be above any of its children (even the small square with a z-index of 3).

This is a surprising and potentially frustrating rule. But the rule can also be quite valuable, since its good to have safeguards against an element showing up where it shouldn't be if given the wrong z-index. We just need to know how to work around the rule when we want certain kinds of behavior.

The trick to getting the pair to split in the second example is to introduce an additional div. The large square in the original example serves double duty--it's both the thing that gets moved on hover and the thing that places a square under the bar. So we just need to restructure our HTML so that the parent div is only responsible for the movement, and contains two children that each render one of the squares. Once the squares are siblings they're part of a broader stacking context that includes the bar, allowing their z-index values to have the intended effect.

## When to Use Positioned Elements

These positioning options give you a lot of freedom, but most layouts should still mainly consist of static elements. The unnecessary use of positioned elements can lead to longer CSS files, more brittle code, and less predictable styling. Positioned elements can have a positive, powerful effect when used in targeted ways, but the layout of a page as a whole should nearly always be built with static elements arranged through a system like Flexbox or Grid.

That being said, let's look at some cases where it *does* make sense to deviate from static positioning. I'll go over some of the common use cases that I keep coming back to, but this certainly isn't an exhaustive list. If you have your own favorite uses, let me know!

### Make Important Elements More Prominent

This is a pretty broad category, but the basic idea is that if you have especially important information, buttons, or forms, you can make them more obvious and easier to access if you move them out of the normal flow of the document.

As an example, let's look at a slightly more advanced version of a fixed header. In this case, you have a table of data with column names and a search bar at the top. Ideally, the names and search bar will be visible to the user whenever they see the table. But since the table might not always be on the screen, you can't just give it a fixed position. Instead, you can use sticky positioning:

<iframe height="355" style="width: 100%;" scrolling="no" title="Sticky Table Header" src="https://codepen.io/iangrubb/embed/preview/poyzmWw?height=355&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/poyzmWw'>Sticky Table Header</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

To get this to work, I had to use multiple sticky elements. This was necessary in order to write the table using the semantically appropriate HTML tags. The sticky property wasn't working on any of the table row elements, so I had to apply it to each table header element. Also, since the title and search bar can't be in the table itself, they have to be in a separate div tag that's also sticky. Everything behaves like a single sticky element because I applied coordinating heights and top values.
 
### Arrange Irregular Shapes

Layout tools like Flexbox and Grid assume that your elements are rectangles. That's typically an accurate assumption, but not always. When you work with non-rectangular shapes, static positioning sometimes results in the wrong distribution of white space between elements. In that case it can make sense to use positioned elements to create a more aesthetically satisfying layout.

Here's a simple example involving some buttons meant to emulate a video game controller. The buttons have a wedge created with a clip-path, so I used absolute positioning to fit them together compactly:

<iframe height="322" style="width: 100%;" scrolling="no" title="Positioning Irregular Elements" src="https://codepen.io/iangrubb/embed/preview/gOrOaoR?height=322&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/gOrOaoR'>Positioning Irregular Elements</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

I used a rotation to get each button in the right spot. I started by placing the left button, and then placed the rest of the elements by rotating them from that starting point. This works because I've set the set the buttons to transform relative to middle of their right side. You *could* position the buttons without a rotation, but placing elements radially simplifies the calculations.

### Stack Groups of Elements

In some cases it makes sense to stack groups of elements on top of each other. Stacking elements results in a more compact layout, saving valuable space on the screen. It can also lead to more visually engaging content, as long as the technique is used on the right kinds of elements and in moderation.

The difficulty with stacking elements is ensuring that the hidden content is always accessible to the user. In some cases you can do this with pure CSS--as long as some portion of each element is revealed, it might be enough to set up a transition that reveals each element on hover. In the remaining cases you'll need to use JavaScript to give the user the ability to rearrange elements.

Here's an example involving a stack of numbered cards. I'm using JavaScript so that the user can click a button to move the top card to the back of the stack. On click, a CSS animation gets applied to the top card, moving it out and then behind the rest of the cards:

<iframe height="355" style="width: 100%;" scrolling="no" title="Stacked Cards" src="https://codepen.io/iangrubb/embed/preview/wvGvrpM?height=355&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/wvGvrpM'>Stacked Cards</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The cards have position absolute and are placed in a container that has position relative. They're rendered through JS and are assigned bottom, left, and z-index values based on their distance from the bottom of the stack. This is how the stack shifts slightly up and to the right. I applied a very slight box-shadow on each of the cards to add to this effect.

The animation I'm using is defined in the CSS file but applied in the JS file. Using CSS transitions is often sufficient for most basic animations, but in this case I had to use keframes to get the top card to shift out and then back. Note that I'm giving the animation an animation-fill-mode of forwards, so that it retains the CSS applied by the last frame. Also, I'm applying a transitioned change in bottom, left, and z-index values on the other cards, so they all slide slightly up while the top card shifts to the back.

### Apply a Partially Transparent Overlay

Sometimes the easiest way to achieve a desired aesthetic through CSS is to build it up using multiple overlapping layers. This could involve stacking elements with fully transparent portions or perhaps even stacking partially transparent, colored elements that uniformly tint whatever is under them.

In this example, I used a partially transparent overly to make a simple monitor with animated scan lines that partially cover anything on the monitor screen:

<iframe height="265" style="width: 100%;" scrolling="no" title="Monitor Overlay" src="https://codepen.io/iangrubb/embed/preview/ExKxLgK?height=265&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/ExKxLgK'>Monitor Overlay</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The overlay is a repeating linear gradient, which makes some fully transparent regions and some slightly opaque regions. To animate the overlay, I wrapped it in another div that covers the monitor screen and hides any overflowing content. The overlay itself is twice as tall as the monitor and is animated to move up gradually and loop back around when its bottom reaches the bottom of the overlay wrapper. The wrapper div and the div for the monitor's contents are placed in the same stack through absolute positioning and setting their z-index values.

This provides a nice example of how stacking contexts can be a benefit, rather than an annoyance. I *never* want the contents of the monitor to show up on top of the scan lines. However, I *may* want to use different z-index values within the monitor to control overlap. You might worry that if try placing something on top of the green square, I could accidentally use a z-index that pops it out above the scan lines. Fortunately, that's not a concern in this case, since the z-index value on the monitor contents div creates a new stacking context. That allows me to freely assign whatever z-index values I want to elements on the monitor and know that they'll always end up below the scan lines.

### Add Tool Tips on Hover

Another great use for positioned elements is temporarily showing the user information without breaking the normal flow of the document. When user behavior triggers things like modal windows, error and alert messages, and tool tips, you don't want them to push around the rest of your content. Instead, you can position them on top of your content and allow the user to dismiss them when that content needs to be accessed.

In this example, I use absolute positioning to display a tool tip on hover:

<iframe height="392" style="width: 100%;" scrolling="no" title="Tool Tip on Hover" src="https://codepen.io/iangrubb/embed/preview/xxVxJKM?height=392&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
See the Pen <a href='https://codepen.io/iangrubb/pen/xxVxJKM'>Tool Tip on Hover</a> by Ian Grubb
(<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Since tool tips can be used for many kinds of elements, I designed the CSS to be versatile--to use it, you just have to apply the tip-able class to the element you want to have the tool tip, then put the tip's content in a span with the class tool-tip. I use the before and after pseudo-elements to minimize the need to write out any extra HTML.

You might notice that I've put a thin transparent rectangle into the element using .tool-tip::before. The point of this element is to help make the hover work right. The tool tip should display as long as the user hovers over the base element or the tool tip itself. However, I also wanted a small margin between the tip and the base element. Implementing this directly as a margin means that if the user moves their cursor from the base element to the tool tip, it stops existing before they can get to the tool tip. The transparent rectangle acts like a margin but also bridges the base element and the tool tip.

The animation is just a matter of transitioning between scales of 1 or 0. It doesn't look quite right by default, but the animation feels much more natural with the transform-origin changed to start from the bottom center of the element.

### Locate Markers on a Map or Image

Overlapping content can help visualize certain kinds of data. You might have images with annotations that target specific coordinates on the image or maps with pointers that target specific locations on the map. Using absolute positioning, you can visually display your coordinate data.
 
Here's a demo that takes graph data and uses it to display a map and a character that can move around the map (click a node to move the character to that node):

<iframe height="265" style="width: 100%;" scrolling="no" title="CSS Graph Movement" src="https://codepen.io/iangrubb/embed/preview/YzqzjOG?height=265&theme-id=light&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/YzqzjOG'>CSS Graph</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

My node data has x and y coordinates built in, and I use these to display the nodes at the correct spots on the map. I'm using percentages as units for the top and left properties, which makes it easier to responsively resize the map. To render an edge between two nodes, I start by placing it coming out of the right side of one of the nodes it connects. I do a bit of math to calculate its length and angle to the second node, and I then use these values to set the width of the edge element and rotate it enough so that it connects.

### Implement a Fixed Aspect Ratio

Setting the width and height of an element using percentages is a simple way to make your elements more responsive. This approach works well most of the time, but has a significant limitation--it doesn't allow the responsive element to have a fixed aspect ratio. What you sometimes need is an element that's responsive to the width of its parent, but has a height that scales in some proportion with its width. There's a pattern that implements this behavior, and it requires the use of positioned elements. Here's a basic setup (hover to change the width of the rectangle):

<iframe height="265" data-preview="true" style="width: 100%;" scrolling="no" title="Fixed Aspect Ratio" src="https://codepen.io/iangrubb/embed/preview/OJNPPWE?height=265&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iangrubb/pen/OJNPPWE'>Fixed Aspect Ratio</a> by Ian Grubb
  (<a href='https://codepen.io/iangrubb'>@iangrubb</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The key to making this work is a peculiar property of padding--any vertical padding defined in percentages is based on the percentage of the parent element's width. This means that if we give an element a padding-top value of 100% and give in no height, the overall height of the element (including the padding) will be the same as the width of its parent. The child can also be given a width of 100%, making it a perfect square. If we want a different aspect ratio, we can just use calc to set the required amount of padding (in the example, I've set the rectangle to be five times as wide as it is tall).

If you just used two elements and you put content inside the child, its height will increase beyond 0 and ruin the effect. The solution is to make yet another child element that has both height and the same overall dimensions as its parent. You can do this with absolute positioning, having the top, bottom, left, and right values of the child all set to 0 so it covers the entirety of its parent. So the solution ultimately involves nesting three elements. You adjust the width of the whole by adjusting the width of the outermost element, you adjust the aspect ratio by adjusting the padding-top of the middle element, and you add internal content by putting it inside the innermost element.