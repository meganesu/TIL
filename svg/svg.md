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

Parameters: `<align> <meetOrSlice>`

* `align`: How to align contents within viewBox.
    * `x[Min,Mid,Max]Y[Min,Mid,Max]`
    * e.g., `xMinYMid` will align to the left horizontally and center vertically.
* `meetOrSlice`: Either `meet` or `slice`. Control how
    * `meet`: Constrain contents so that entire viewBox is visible in the viewport. No shapes will be cut off.
    * `slice`: Blow contents up so that the corners of the viewBox cover the entire viewport. Some content may get cut off.
    
`preserveAspectRatio="none"`

* Scale dimensions based on the container.
* Good to use for layout SVGs (borders between sections)
