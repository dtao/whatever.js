(function(context) {

  // Use harmony-reflect to get the latest Proxy API in Node.
  if (typeof require === 'function') {
    require('harmony-reflect');
  }

  /**
   * Creates an object (that can be called like a function) that dynamically
   * defines properties as you try to access them. Once you set a property, it
   * stays that way. You can optionally specify defaults in an argument.
   *
   * @param {Object=} defaults An optional object supplying default values.
   *
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
   *
   * // Specifying defaults
   * whatever({ foo: 'bar' }).foo; // => 'bar'
   */
  function whatever(defaults) {
    var original = function() {};

    if (defaults) {
      for (var prop in defaults) {
        if (defaults.hasOwnProperty(prop)) {
          original[prop] = defaults[prop];
        }
      }
    }

    return new Proxy(original, {
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

  if (typeof module === 'object' && (module && module.exports)) {
    module.exports = whatever;
  } else {
    context.whatever = whatever;
  }

}(this));
