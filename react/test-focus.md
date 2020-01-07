# Testing When An Element Is Focused

## Why?

Sometimes, you'll want to write a test to check that the correct element is focused. For example, if you're building a hamburger menu, you might want to check that clicking on the hamburger menu button moves the user's focus to the first element inside the menu.

## How?

You can use Enzyme to write this test. The basic steps for your test will be:

1. Mount your component.
1. Simulate whatever action needs to happen for focus to be moved.
1. Check that the correct DOM node has focus.

### Example

Here's an example, broken down into those steps. (I'm using [Jest](https://jestjs.io/en/) syntax for the `expect` statements.)

```js
// GIVEN
const component = mount(<HamburgerMenu />);

// WHEN
component.find('button').simulate('click');

// THEN
const focusedElement = component.find('a').first();
expect(focusedElement.getDOMNode()).toEqual(document.activeElement);
```

Let's take a closer look at what's going on here:

1. First, we mount our HamburgerMenu component, which will add the rendered component to the DOM.
1. Next, we use Enzyme's `.find()` command to get the button inside of our HamburgerMenu, and then we use Enzyme's `.simulate()` command to click it.
1. Then, we find the element that we hope will be focused after our click (in this case, the first link in our HamburgerMenu component).
1. Finally, we use Enzyme's `.getDOMNode()` command to compare the underlying HTML element for `focusedElement` to the actual currently focused element (`document.activeElement`).
