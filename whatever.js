(function(context) {

  // Use harmony-reflect to get the latest Proxy API in Node.
  if (typeof require === 'function') {
    require('harmony-reflect');
  }

  /**
   * @example
   * var w = whatever();
   *
   * w.foo.bar; // => {}
   *
   * w.foo.bar = 5;
   * w.foo.bar; // => 5
   *
   * w.blah(); // => {}
   * w.blah().blah(); // => {}
   *
   * w.blah = function() { return 'blah'; };
   * w.blah(); // => 'blah'
   */
  function whatever() {
    if (!(this instanceof whatever)) {
      return new Proxy(function() {}, {
        get: function(target, name) {
          if (!(name in target)) {
            target[name] = whatever();
          }
          return target[name];
        },
        set: function(target, name, value) {
          target[name] = value;
          return true;
        },
        apply: function(target, thisArg, args) {
          return whatever();
        }
      });
    }
  }

  if (typeof module === 'object' && (module && module.exports)) {
    module.exports = whatever;
  } else {
    context.whatever = whatever;
  }

}(this));
