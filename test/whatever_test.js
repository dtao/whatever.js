var expect = require('expect'),
    whatever = require('../whatever');

module.exports = (function() {
  var w;

  return {
    'var w = whatever();': {
      before: function() {
        w = whatever();
      },

      'w.foo.bar': function() {
        expect(w.foo.bar).toNotEqual(null);
      },

      'w.foo.bar = 5;': function() {
        w.foo.bar = 5;
        expect(w.foo.bar).toEqual(5);
      },

      'w.blah()': function() {
        expect(w.blah()).toNotEqual(null);
      },

      'w.blah().blah()': function() {
        expect(w.blah().blah()).toNotEqual(null);
      },

      'w.blah = function() { return "blah"; }': function() {
        w.blah = function() { return 'blah'; };
        expect(w.blah()).toEqual('blah');
      }
    }
  };
}());
