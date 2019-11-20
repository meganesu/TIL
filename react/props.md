# React Props

In React, props (short for "properties") are extra bits of information that are passed into a component. A component can use these props to change the way it renders, making it more reusable.

## Why Use Props?

Props allow you to customize the specifics about how you want a component to render. For example, imagine you're building the comments section of a page. Each individual comment should display in roughly the same way: you want to see the name of who posted the comment, their picture, and the actual content of their comment. 

## How To Pass Props

When you're rendering a component, just pass in the extra info!

Each prop should have a name and a value. The names should be the same across instances of your component, but the values can change.

```html
<ContactCard name="Megan" email="hello@megan.com" phone="510-555-5555" />
<ContactCard name="Erin" email="heythere@erin.com" phone="555-123-4567" />
```

## How to Use Props Inside A Component

### Functional Component

If your functional component takes in props, you can pull individual properties off the `props` object passed into your component:

```js
const ContactCard = props => (
  <div>
    <p>{props.name}</p>
    <p>{props.email}</p>
    <p>{props.phone}</p>
  </div>
);
```

Alternatively, you could destructure the props object at the beginning, which would save you from needing to prefix every prop with `props.` when you use it in your component.

```js
const ContactCard = ({ name, email, phone }) => (
  <div>
    <p>{name}</p>
    <p>{email}</p>
    <p>{phone}</p>
  </div>
)
```

### Class Component