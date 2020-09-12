# SVG Essentials & Animation, v2 (Sarah Drasner, Frontend Masters)

## SVG Wrapper

SVG is like drawing on an infinite piece of graph paper:

* You plot points in coordinates anywhere on the graph paper.
    * (0,0) is in the top left corner.
* You view a limited portion of the graph paper through a viewbox.

```html
<svg width="450px" height="100px" viewBox="0 0 450 100">
    ...
</svg>
```

* `width` and `height`: scale the size of the graph paper up or down. How big the viewbox will appear on your screen.
    * If you don't include either, the SVG will grow to the size of its container.
* `viewBox`: what portion of the graph paper you're looking at. Like looking at the world through a camera.
    * Format: `x y width height`
    * `x` and `y` let you pan the camera
    * `width` and `height` let you zoom the camera

> Resource: [Viewport vs. viewBox (like window vs. telescope)](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844)

## Platonic Shapes

* Rectangle: `<rect>`
    * e.g., `<rect x="10" y="5" width="90" height="90 "fill="white" stroke="black" />`
    * `x` and `y`: starting coordinates of the rectangle
    * `width` and `height`: determine the size of the rectangle
* Circle: `<circle>`
    * e.g., `<circle cx="170" cy="50" r="45" fill="white" stroke="black" />`
    * `cx` and `cy`: coordinates for the center of the circle
    * `r`: radius length for the circle
* Polygon: `<polygon>`
    * e.g., `<polygon points="279,5 294,35 328,40 303,62 309,94 279,79 248,94 254,62 230,39 263,35" fill="white" stroke="black" />`
    * `points`: the `x,y` coordinates for each point in the polygon
        * It will automatically connect the last point back to the first point to make a closed shape.
* Straight line: `<line>`
    * e.g., `<line x1="360" y1="6" x2="360" y2="95" fill="none" stroke="black" />`
    * `x1` and `y1`: coordinates for the start point of the line
    * `x2` and `y2`: coordinates for the end point of the line
    
## preserveAspectRatio

> You'll probably never need this.

Default: `preserveAspectRatio="xMidYMid meet"`

* Default will uniformly scale
* Like `background-size: cover` in CSS

Parameters: `<align> <meetOrSlice>` or `none`

* `align`: How to align contents within viewBox.
    * `x[Min,Mid,Max]Y[Min,Mid,Max]`
    * e.g., `xMinYMid` will align to the left horizontally and center vertically.
* `meetOrSlice`: Either `meet` or `slice`. Control which kind of constraint to use for the viewBox.
    * `meet`: Constrain contents so that entire viewBox is visible in the viewport. No shapes will be cut off. viewBox < viewport.
    * `slice`: Blow contents up so that the corners of the viewBox cover the entire viewport. Some content may get cut off. viewBox > viewport.
    
`preserveAspectRatio="none"`

* Scale dimensions based on the container.
* Good to use for layout SVGs (borders between sections, background shapes for design purposes only)

## Paths and Groups

### Groups

* Group: `<g>`
    * A generic group wrapper element. Like a `div`.
    * Can use groups to organize related paths.
    * Can apply `fill` and `stroke` attributes to the group, and it will trickle down to all the paths inside that group.

### Paths

* Path: `<path>`
    * List out the points on a path.
    * One attribute: `d` (for "drawing")
        * _Must_ start with `M` or `m` (for "move to"). This is the start of the path.
        * `L` or `l` (for "line to"): Draw a line between two points. Path should have two points (M and L).
        * `H` or `h` (for "horizontal line"): Draw a horizontal line from the current position. Only need to specify one coordinate (because the Y coordinate will be the same).
        * `V` or `v` (for "vertical line"): Draw a vertical line down from the current position. Only need to specify one coordinate (because the X coordinate will be the same).
        * `Z` or `z`: Joins the end of a path to the first point of the path. (Makes it a closed path.)
    * Path data can be uppercase or lowercase, depending on desired positioning.
        * Uppercase means path point is absolute.
        * Lowercase means path point is relative to previous point.
    * Curve commands
        * `C` or `c`: Draw cubic-bezier curve. Four coordinates: Curve start point, first control point, second control point, curve end point.
        * `S` or `s`: Reflecting cubic-bezier. Good for making waves.
        * `Q` or `q`: Quadratic bezier. Where both sides are the same control point. Can move around control point to adjust shape of the curve.
        * `T` or `t`: Similar to `Q`. Adds a point of reflection.
        * `A` or `a`: Elliptical arc. It's complicated and has lots of parameters.
        
> Resource: [Codepen: SVG Path Builder by Anthony Dugois](https://codepen.io/anthonydugois/pen/mewdyZ). Lets you play around with creating your own path. Shows you what will render and the SVG path data.

You can do cool things when you combine template literals (`` `${variable}` ``) with SVG path data.

## Polyline

`<polyline points="14,17 136,37 15,92" />`

## Accessibility

* Add a title to your SVG. It must be the first element in the `svg` element.
    ```html
    <svg aria-labelledby="this-is-my-svg-title"
      id="svg"
      role="presentation" // or "image"
      viewBox="..."
    >
      <title id="this-is-my-svg-title" // this should match the aria-labelledby attribute in the svg
        lang="en"
      >
        This is the text that will be read out by the screen reader
      </title>
      ...
    </svg>
    ```
    * > Resource: [Accessible SVGs by Heather Migliorisi](https://css-tricks.com/accessible-svgs/)
    
## Optimizing SVGs for Animation

* SVGs are less performant when they have a lot of path points. Can reduce the number of points in Illustrator to reduce complexity.
* Drop shadows can be made with an SVG filter.
* Make use of overlapping shapes! It's not paint-by-numbers. Can cover generic background shapes with other more detailed foreground shapes.

## Animating SVGs

* Looking for ideas for animations? Try looking around in real life for inspiration! Or look at animated GIFs or Messenger stickers. (Make sure to give credit!)
* Use `transform-origin` to change the point of rotation for a shape. (Should it rotate around the center of the shape? Or at one of the corners?)
* Can use SVG Sprites to animate complex movements (like walking) instead of figuring out how to rotate each shape individually.
* Elemental motion
    * Objects further away have less contrast and look blurry.
    * Does the air or environment affect movement?
    * Reducing precision allows for understanding. (Like impressionistic paintings. Simplify the image quality, then look for patterns that you can animate.)

### Process

1. Design it on paper first! It's faster and easier to iterate.
1. Make a static vector image in Adobe Illustrator. (Or Inkscape, for an open-source version.)
    * Put everything on the page, even if it's not going to be showing at the start. You can slowly reveal things as you need them.
1. Export it as SVG.
1. Animate the components in thie SVG.

Which tool should I use?

* Animating a small sequence of things or a simple interaction? Use CSS.
* Animating a long sequence or complex movement? Use GreenSock.
    * Also has better cross-browser consistency.
* Animating a single movement that you want to look realistic? Use React Spring or React-Motion.
