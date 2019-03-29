# Execution Order for Before and After Hooks

## Summary

* ALL `before` blocks run before ANY `beforeEach` blocks run.
  * `before` blocks run in the order they are defined. i.e., all top-level blocks run, then all nested blocks run, then all double-nested blocks run, ...
* ALL `afterEach` blocks run before ANY `after` blocks run.
* All top-level specs run before any nested specs are run.
* Code outside of a hook or a spec is run before ANY of the hooks or specs run.
    * Use this only for one-time setup things, like initializing a database, setting constants, etc. NOT good for things that need to be reset before each test.

## Simple Example with One Level of Nesting

### Test
```javascript
describe('mocha hooks', function () {
  before(() => console.log('*** top-level before()'));
  beforeEach(() => console.log('*** top-level beforeEach()'));
  after(() => console.log('*** top-level after()'));
  afterEach(() => console.log('*** top-level afterEach()'));

  describe('nesting', function () {
    before(() => console.log('*** nested before()'));
    beforeEach(() => console.log('*** nested beforeEach()'));
    after(() => console.log('*** nested after()'));
    afterEach(() => console.log('*** nested afterEach()'));
    it('is a nested spec', () => true);
  });
});
```

### Output
```
  mocha hooks
*** top-level before()
    nesting
*** nested before()
*** top-level beforeEach()
*** nested beforeEach()
      ✓ is a nested spec
*** nested afterEach()
*** top-level afterEach()
*** nested after()
*** top-level after()

  1 passing (783ms)
```

## Example with Multiple Levels of Nesting

### Test

```javascript
describe.only('mocha hooks', function () {
  before(() => console.log('*** top-level before()'));
  after(() => console.log('*** top-level after()'));
  beforeEach(() => console.log('*** top-level beforeEach()'));
  afterEach(() => console.log('*** top-level afterEach()'));
  
  it('is a first top-level spec', () => true);

  describe('nesting', function () {
    before(() => console.log('***** nested before()'));
    after(() => console.log('***** nested after()'));
    beforeEach(() => console.log('***** nested beforeEach()'));
    afterEach(() => console.log('***** nested afterEach()'));
    
    it('is a first nested spec', () => true);
    
    describe('first double-nesting', function () {
      before(() => console.log('******* first double-nested before()'));
      after(() => console.log('******* first double-nested after()'));
      beforeEach(() => console.log('******* first double-nested beforeEach()'));
      afterEach(() => console.log('******* first double-nested afterEach()'));
      
      it('is a first double-nested spec', () => true);
    });
    describe('second double-nesting', function () {
      before(() => console.log('******* second double-nested before()'));
      after(() => console.log('******* second double-nested after()'));
      beforeEach(() => console.log('******* second double-nested beforeEach()'));
      afterEach(() => console.log('******* second double-nested afterEach()'));
      
      it('is a second double-nested spec', () => true);
    });
    
    it('is a second nested spec', () => true);
  });

  it('is a second top-level spec', () => true);
});
```

### Output

```
  mocha hooks
*** top-level before()
*** top-level beforeEach()
    ✓ is a first top-level spec
*** top-level afterEach()
*** top-level beforeEach()
    ✓ is a second top-level spec
*** top-level afterEach()
    nesting
***** nested before()
*** top-level beforeEach()
***** nested beforeEach()
      ✓ is a first nested spec
***** nested afterEach()
*** top-level afterEach()
*** top-level beforeEach()
***** nested beforeEach()
      ✓ is a second nested spec
***** nested afterEach()
*** top-level afterEach()
      first double-nesting
******* first double-nested before()
*** top-level beforeEach()
***** nested beforeEach()
******* first double-nested beforeEach()
        ✓ is a first double-nested spec
******* first double-nested afterEach()
***** nested afterEach()
*** top-level afterEach()
******* first double-nested after()
      second double-nesting
******* second double-nested before()
*** top-level beforeEach()
***** nested beforeEach()
******* second double-nested beforeEach()
        ✓ is a second double-nested spec
******* second double-nested afterEach()
***** nested afterEach()
*** top-level afterEach()
******* second double-nested after()
***** nested after()
*** top-level after()


  6 passing (747ms)
```

## Example with Code Outside Hooks

### Test

```javascript
describe('mocha hooks', function () {
  before(() => console.log('*** top-level before()'));
  after(() => console.log('*** top-level after()'));
  beforeEach(() => console.log('*** top-level beforeEach()'));
  afterEach(() => console.log('*** top-level afterEach()'));
  console.log('*** doing something outside of top-level hooks, before specs')
  it('is a first top-level spec', () => true);

  describe('nesting', function () {
    before(() => console.log('*** nested before()'));
    after(() => console.log('*** nested after()'));
    beforeEach(() => console.log('*** nested beforeEach()'));
    afterEach(() => console.log('*** nested afterEach()'));
    console.log('*** doing something outside of nested hooks, before specs');
    it('is a first nested spec', () => true);
    describe('nesting', function () {
      before(() => console.log('*** double-nested before()'));
      after(() => console.log('*** double-nested after()'));
      beforeEach(() => console.log('*** double-nested beforeEach()'));
      afterEach(() => console.log('*** double-nested afterEach()'));
      console.log('*** doing something outside of double-nested hooks, before specs')
      it('is a double-nested spec', () => true);
      console.log('*** doing something outside of double-nested hooks, after specs')
    });
    it('is a second nested spec', () => true);
    console.log('*** doing something outside of nested hooks, after specs')
  });
  it('is a second top-level spec', () => true);
  console.log('*** doing something outside of top-level hooks, after specs')
});
```

### Output

```
*** doing something outside of top-level hooks, before specs
*** doing something outside of nested hooks, before specs
*** doing something outside of double-nested hooks, before specs
*** doing something outside of double-nested hooks, after specs
*** doing something outside of nested hooks, after specs
*** doing something outside of top-level hooks, after specs

  mocha hooks
*** top-level before()
*** top-level beforeEach()
    ✓ is a first top-level spec
*** top-level afterEach()
*** top-level beforeEach()
    ✓ is a second top-level spec
*** top-level afterEach()
    nesting
*** nested before()
*** top-level beforeEach()
*** nested beforeEach()
      ✓ is a first nested spec
*** nested afterEach()
*** top-level afterEach()
*** top-level beforeEach()
*** nested beforeEach()
      ✓ is a second nested spec
*** nested afterEach()
*** top-level afterEach()
      nesting
*** double-nested before()
*** top-level beforeEach()
*** nested beforeEach()
*** double-nested beforeEach()
        ✓ is a double-nested spec
*** double-nested afterEach()
*** nested afterEach()
*** top-level afterEach()
*** double-nested after()
*** nested after()
*** top-level after()

  5 passing (688ms)
```

## Sources

Example based on [gist by harto](https://gist.github.com/harto/c97d2fc9d0bfaf20706eb2acbf48c908)