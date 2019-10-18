# `useEffect` Hook

## When To Use It

* When you want some code to run sometimes, but not on every render of the component.
    * e.g., adding/removing event listeners
* Hooks should only be used in functional components, not class components.

## How To Use It

```
useEffect(functionToRun, propertiesToWatch);
```

* `functionToRun`
    * Function. The code that you want to run sometimes (but not on every render).
        * e.g., adding an event listener
    * Return value should be another function that cleans up the effects of `functionToRun`
        * e.g., removing an event listener
* `propertiesToWatch`
    * Array. Contains the variables (or props) to watch.
    * When one of these variables changes, then `functionToRun` will be triggered.
    * If an empty array is passed in, `functionToRun` will only be triggered on component mount, and `cleanup` function will be triggered on unmount.

## Example

```javascript
const ContentBox = text => {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return <div>{text}</div>;
};
```
