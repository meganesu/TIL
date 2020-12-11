# Regular Expressions

## Basic Example

```javascript
const regex = /[A-Z]/g

const anotherRegex = new RegExp(/[A-Z]/, 'g')

const yetAnotherRegex = new RegExp('[A-Z]', 'g')

anotherRegex.test('Apple') // true
anotherRegex.test('apple') // false

```

## Cheat Sheet

Source: [RegExr](https://regexr.com/)

### Character classes

| Symbol | Meaning |
| --- | --- |
| `.` |	any character except newline |
| `\w\d\s` |	word, digit, whitespace |
| `\W\D\S`	| not word, digit, whitespace |
| `[abc]`	| any of `a`, `b`, or `c` |
| `[^abc]` | not `a`, `b`, or `c` |
| `[a-g]` | character between `a` & `g` |

### Anchors

| Symbol | Meaning |
| --- | --- |
| `^abc$`	| start / end of the string |
| `\b\B`	| word, not-word boundary |

### Escaped characters

| Symbol | Meaning |
| --- | --- |
| `\.\*\\`	| escaped special characters |
| `\t\n\r`	| tab, linefeed, carriage return |

### Groups & Lookaround

| Symbol | Meaning |
| --- | --- |
| `(abc)`	| capture group |
| `\1`	| backreference to group #1 |
| `(?:abc)`	| non-capturing group |
| `(?=abc)` |	positive lookahead |
| `(?!abc)`	| negative lookahead |

### Quantifiers & Alternation

| Symbol | Meaning |
| --- | --- |
| `a*a+a?` |	0 or more, 1 or more, 0 or 1 |
| `a{5}a{2,}`	| exactly five, two or more |
| `a{1,3}`	| between one & three |
| `a+?a{2,}?`	| match as few as possible |
| `ab\|cd`	| match ab or cd |

## Resources

* [RegExr](https://regexr.com/): An online tool that lets you test a regex against different strings. You can see where the matches are, and it breaks down what each part of the regex is looking for.
