# whatever.js

This library lets you define objects that dynamically define properties as you try to access them
(using [ES6 Proxies](http://wiki.ecmascript.org/doku.php?id=harmony:direct_proxies)). Its main use
case is tests where you want to mock services without going to the trouble of setting up objects
with the correct schema.

For example, instead of this...

```javascript
stub(service).return({
  user: {
    firstName: 'joe',
    lastName: 'schmoe',
    email: 'joe.schmoe@example.com'
  },
  items: [
    { id: 1, type: 'woozle', name: 'foo' },
    { id: 2, type: 'wuzzle', name: 'bar' }
  ],
  summary: {
    user: 'joe schmoe <joe.schmoe@example.com>',
    woozles: 1,
    wuzzles: 1
  }
});
```

...with whatever.js you can just go with this:

```javascript
var whatever = require('whatever.js');

stub(service).return(whatever());
```

You can also specify defaults for only the properties you care about (e.g., for testing). Accesses
to any other properties of the resulting object will just silently do nothing.

```javascript
stub(service).return(whatever({
  user: {
    firstName: 'Billy'
  }
}));

assert.equal(greetUser(), 'Hello, Billy');
```
