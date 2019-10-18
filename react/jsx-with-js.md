# JSX with JS

To use JavaScript inside of JSX, it needs to be wrapped with curly brackets `{}`.

## Examples

### Inserting Variable Into Element Text

```
const Greeting = name => (
  <p>
    Hello, {name}!
  </p>
)
```

### Passing Variable As Prop

```
const Header = user => (
  <Greeting name={user.name} />
)
```

### Iterating Over A List

```
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