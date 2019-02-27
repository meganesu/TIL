# Checking What Arguments A Stub Was Called With

## When Called With Simple Types

If you're using primitives as arguments, you can check the arguments your stub gets called with like this:

```javascript
assert(functionStub.calledWith('string', 525))
```

Keep in mind that `assert` will just check if something is true or false; it doesn't give you very descriptive error messages when things go wrong.

## When Called With An Object

If you want to check that a stub got called with a certain object, things get a little trickier. You don't want to use `calledWith`, because the object you create to compare against the argument won't match (because it's a different object and has a different reference).

Instead, you can do something like the code below to return the value of a specific argument. This will let you do a deep comparison of the argument and the expected object.

```javascript
const stuff = { funKeys: 'funValues' }
expect(functionStub.getCall(0).args[0]).to.deep.equal(stuff);
```

* `functionStub.getCall(0)`: gets the data for the first time the stub is called
* `.args[0]`: gets the value of the first argument for the call