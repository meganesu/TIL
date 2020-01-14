# String Interpolation

You can use string interpolation to insert the value of a variable into the middle of a string.

## Examples

### Adding strings

```javascript
const name = 'Megan';
console.log('Hi! My name is ' + name); // 'Hi! My name is Megan'
```

### Using ES6 template strings

Starting with ES6, you can do string interpolation using template strings. Use backticks (`) instead of single quotes (') to wrap your string.

```javascript
const name = 'Megan';
console.log(`Hi! My name is ${name}`); // 'Hi! My name is Megan'
```