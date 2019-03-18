# Array.prototype.reduce()

Use a function to iterate over an array and reduce the contents to a single value.

## Usage

`array.reduce(callback[, initialValue])`

* `callback`: a function that gets called on each element in the array. This function should have the following parameters:
    * `accumulator`: a variable that keeps track of the current state of the single value to be returned
    * `currentValue`: the value of the element in the array currently being processed
    * `currentIndex`: (optional) the index of the element in the array currently being processed
        * Starts at `0` if `initialValue` is provided, otherwise starts at `1`.
    * `array`: (optional) the array being reduced
* `initialValue`: value to use the first time `callback` is called

## Example

```javascript
const numbers = [1, 3, 7, 3];

const sum = numbers.reduce(
  (sum, number) => sum + number,
  12
)
```

| accumulator (sum) | currentValue (number) | currentIndex | array | return |
| --- | --- | --- | --- | --- |
| 12 | 1 | 0 | `[1, 3, 7, 3]` | 12 + 1 = **13** |
| 13 | 3 | 1 | `[1, 3, 7, 3]` | 13 + 3 = **16** |
| 16 | 7 | 2 | `[1, 3, 7, 3]` | 16 + 7 = **23** |
| 23 | 3 | 3 | `[1, 3, 7, 3]` | 23 + 3 = **26** |