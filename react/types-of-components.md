# Types of Components

## Functional vs. Class Components

### Functional Components

```javascript
const Button = (props) => (
  <button onClick={ props.handleClick }>
    Click Me!
  </button>
)
```

* Use props via `props.propName`
* Stateless
* Can't use lifecycle methods
* Can call handleEvent functions that are passed into the component as props, but can't add extra logic to those functions

### Class Components

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        { this.props }
      </div>
    )
  }
}
```

* Use props via `this.props.propName`
* Can have state (but doesn't have to)
* Can use lifecycle methods
* Can add extra logic for event handlers

## What Kind of Component Do I Need?


