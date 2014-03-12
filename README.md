# whatever.js

This library lets you define objects that dynamically define properties as you try to access them
(using ES6 Proxies). Its main use case is tests where you want to mock services without going to the
trouble of setting up objects with the correct schema.

For example:

```javascript
var whatever = require('whatever');

// Instead of this...
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

// ...just go with this:
stub(service).return(whatever());
```
