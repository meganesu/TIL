# JSX with JS

To use JavaScript inside of JSX, it needs to be wrapped with curly brackets `{}`.

## Examples

### Inserting Variable Into Element Text

```javascript
const Greeting = name => (
  <p>
    Hello, {name}!
  </p>
)
```

### Passing Variable As Prop

```javascript
const Header = user => (
  <Greeting name={user.name} />
)
```

### Iterating Over A List

```javascript
const FriendsList = friends => (
  <ul>
    {
      friends.map(friend => (
        <li>{friend.name}</li>
      ));
    }
  </ul>
)
```