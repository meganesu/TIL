# `useState` Hook

## When To Use It

* When you want to add/update a property in your component's state object.
    * Remember, whenever a component's state changes, it triggers a re-render.
* Hooks should only be used in functional components, not class components.

## How To Use It

```
const [property, setProperty] = useState(initialValue);
```

* `useState` returns an array containing 2 elements.
    * In this example, these elements are then destructured into `property` and `setProperty` (but you can give them more meaningful names).
* `property`
    * A variable which is tied to the contents of `state.property`.
    * This variable can be used in JSX the same way you'd normally insert a JS variable.
* `setProperty`
    * Function. This function can be called to set a new value for `state.property`.
* `initialValue`
    * The initial value you want `state.property` to have.

## Example

```javascript
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You've clicked the button {count} times!</p>
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
    </div>
  );
};
```