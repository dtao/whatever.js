# whatever.js

This library lets you define objects that dynamically define properties as you try to access them
(using [ES6 Proxies](http://wiki.ecmascript.org/doku.php?id=harmony:direct_proxies)).

Example:

```javascript
var whatever = require('whatever.js');

var person = whatever();

person.info.name.first = 'Dan';
person.info.address.line1.street = 'Bartlett';
person.employment.company.name = 'Atlassian';
```

You can also specify defaults for only the properties you care about (e.g., for testing). Accesses
to any other properties of the resulting object will just silently do nothing.

```javascript
var person = whatever({
  info: {
    name: 'Billy'
  }
}));

console.log(person.info.name);   // => 'Billy'
```
