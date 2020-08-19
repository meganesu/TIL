# Adding Accessibility Notations to Wireframes

Inspired by Deque's [Translating Design Wireframes Into Accessible HTML/CSS](https://accessibility.deque.com/translating-design-wireframes-into-accessible-html-css). (There's also a [YouTube version of this talk](https://www.youtube.com/watch?v=0MMKkEZ3oAA).

It's easiest to implement accessibility features when you've baked those requirements into your product from the start. Include accessibility requirements in your designs and wireframes, to avoid the high cost of trying to go back and fix inaccessible features after they've already been built.

## Annotations

In your design wireframes, include annotations for components.

### Widget Annotations

* Role and accessible name for each piece of the widget 
* State of each piece (disabled? focusable?)

### Interaction Annotations

* What keyboard interactions should be supported?
* What should happen when the state is "disabled"?
* Where should focus be after interactions?
    * When button is clicked?
    * When content opens? Closes?

Can split interactions into component level and widget level.

### Alternative State Annotations

* Hover interactions
* Focus state
    * Use default focus styles? Or something custom?
* Active state

### Minimum Control Size Annotations

Make sure the minimum control size meets the WCAG requirements.

### Focus Order

Will affect the DOM structure and the reading order.

* Include skip links.

### Additional Annotations

* Mark images as decorative.

## Other Design Suggestions

* Run usability tests with users with disabilities in the UX design phase.
* Create a pattern library of accessible components.
* Build a color palette with acceptable color contrast.
* Pay attention to font size.

## Development Suggestions

* Use an accessibility automation library to catch some low-hanging fruit.
    * Bonus: automate tests for common browser/screen reader pairs.
    * Run the tests in your continuous integration pipeline.
* Manually test new features for accessibility.
    * Tab through the page, use a screen reader.
* Triage and prioritize accessibilty defects systematically (the same way you would a security or functionality defect).
* Measure progress, and reflect on progress during retrospectives.
