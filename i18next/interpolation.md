# Interpolation

```javascript
const translations = {
  'key': 'My interpolated {{variable}}'
}

i18next.t('key', { variable: 'value'})
// -> 'My interpolated value'
```

Parameters:

* `key` - which key in your translations object to look up
* Interpolated values
    * Object. Keys are the variable names in your string to be interpolated. Values are the values you want those variables to have.


## Example

```javascript
const translations = {
  'greeting': 'Hi there, {{name}}!'
}

console.log(
  i18next.t(
    'greeting',
    { name: 'Megan' }
  )
);
// -> 'Hi there, Megan!'
```