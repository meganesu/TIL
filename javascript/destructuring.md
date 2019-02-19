# Destructuring

Destructuring is a way of unpacking the data inside of an object or an array. It became available in JavaScript starting with ES6.

## How To Do It

Sometimes, data comes back as a single object or an array, and you want to get one piece of data out of it (like a particular element or value).

### Basic Examples

#### With Arrays
```javascript
const [first, second] = [1, 2];
// first = 1
// second = 2
```

The above is equivalent to the following:
```javascript
const array = [1, 2];
const first = array[0];
const second = array[1];
```

It might not seem like a huge improvement, but imagine how many repetitive lines you would save if you had a longer array!

#### With Objects

```javascript
let { name, favoriteColor } = { name: 'Megan', favoriteColor: 'orange' };
// name = 'Megan'
// favoriteColor = 'orange'
```

The above is equivalent to the following:
```javascript
const person = { name: 'Megan', favoriteColor: 'orange' };
const name = person.name;
const favoriteColor = person.favoriteColor;
```

### Destructuring Function Parameters

Sometimes you write a function that takes in an object or an array as a parameter. You can use destructuring in the function definition to get access to the data inside the parameter directly.
```javascript
const createUser = { name, favoriteFood, url } => {
  ...
}

userDetails = {
  name: 'Megan',
  favoriteFood: 'pickles',
  url: 'github.com/meganesu'
}
createUser(userDetails);
```

### Ignoring Parts Of An Array

Sometimes a function gives you back an array more data than you want. You can ignore this and only take the pieces you want!

Use commas to indicate the pieces you don't care about.

```javascript
const [first, , last] = ['uno', 'dos', 'tres'];
// first = 'uno'
// last = 'tres'

```

### Put The Rest Somewhere Else

If you don't want to lose the extra data, you can store it in another variable.

```javascript
const { name, ...data } = { name: 'Megan', color: 'orange', number: 5 };
// name = 'Megan'
// data = { color: 'orange', number: 5 }
```


## Why To Use It

Because it's easier! And because if you have an object with deeply nested data (think objects of objects of objects), it can be easier to extract the data from that object using destructuring.