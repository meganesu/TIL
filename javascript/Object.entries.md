# Object.entries()

Breaks down the key/value pairs in an object into an array. Returns an array of arrays. The inner arrays each consist of two values: the first is the key for that pair, the second is the value stored in the object for that key.

This function is useful for when you want to iterate over all the keys or values in an object.

## Usage

`Object.entries(objectInstance)`

* `objectInstance`: The object you want to break down into key/value pairs.

## Example

```javascript
pets = {
  cosmo: {
    species: 'dog',
    breed: 'chow mix',
  },
  smokey: {
    species: 'cat'
  },
  kitty: {
    species: 'cat'
  }
}

Object.entries(pets);
/*
  returns:
  [
    ['cosmo', { species: 'dog', breed: 'chow mix' }],
    ['smokey', { species: 'cat' }],
    ['kitty', { species: 'cat' }]
  ]
 */
```