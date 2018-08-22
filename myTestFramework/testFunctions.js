(function (exports) {

  var underline = '\x1b[4m%s\x1b[0m';
  var cyan = '\x1b[36m%s\x1b[0m';
  var green = '\x1b[32m%s\x1b[0m';
  var red = '\x1b[31m%s\x1b[0m';

  function expect(actual) {
    function toEqual(expected) {
      if (actual != expected) {
        throw new Error(`Expected ${expected} but got ${actual}`)
      }
    }

    function toBe(expected) {
      if (actual !== expected) {
        throw new Error(`Expected ${expected} but got ${actual}`)
      }
    }

    function toInclude(expected) {
      if(actual.includes(expected) === false) {
        throw new Error(`Expected ${actual} to include ${expected}`)
      }
    }

    function toBeEmpty() {
      if(actual.length > 0) {
        throw new Error(`Expected ${actual} to be empty but it has a length of ${actual.length}`)
      }
    }

    return {
      toEqual,
      toBe,
      toInclude,
      toBeEmpty
    }
  }

  function it(message, callback) {
    console.log(cyan, `${message}`);
    try {
      callback();
      console.log(green, 'Success');
    } catch(e) {
      console.log(red, `Failure - ${e.message}`)
    }
  }

  function describe(message, callback) {
    console.log(underline, `${message}`);
    callback();
  }

  exports.expect = expect;
  exports.it = it;
  exports.describe = describe;
})(this);
