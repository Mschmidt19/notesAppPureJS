(function (exports) {

  // var underline = '\x1b[4m%s\x1b[0m';
  // var cyan = '\x1b[36m%s\x1b[0m';
  // var green = '\x1b[32m%s\x1b[0m';
  // var red = '\x1b[31m%s\x1b[0m';

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

    function toThrowError(message) {
      if (typeof actual != 'function') {
        throw new Error (`${actual} is not a function, pass it as 'function() {code}'`)
      }
      try {
        actual();
        var nothingThrown = true;
      } catch(e) {
        if(e.message !== message) {
          throw new Error(`Expected Error.message to be ${message} but got ${e.message}`)
        }
      }
      if(nothingThrown === true) {
        throw new Error(`Expected ${actual} to throw Error(${message}) but nothing was thrown`);
      };
    };

    function not() {
      function toEqual(expected) {
        if (actual == expected) {
          throw new Error(`Expected ${expected} not to equal ${actual}`)
        }
      }

      function toBe(expected) {
        if (actual === expected) {
          throw new Error(`Expected ${expected} not to be ${actual}`)
        }
      }

      function toInclude(expected) {
        if(actual.includes(expected) === true) {
          throw new Error(`Expected ${actual} not to include ${expected}`)
        }
      }

      function toBeEmpty() {
        if(actual.length === 0) {
          throw new Error(`Expected ${actual} not to be empty but it is`)
        }
      }

      function toThrowError() {
        if (typeof actual != 'function') {
          throw new Error (`${actual} is not a function, pass it as 'function() {code}'`)
        }
        try {
          actual();
        } catch(e) {
          throw new Error(`Expected ${actual} not to throw error but got ${e.message}`)
        }
      }

      return {
        toEqual,
        toBe,
        toInclude,
        toBeEmpty,
        toThrowError,
      }
    }

    return {
      toEqual,
      toBe,
      toInclude,
      toBeEmpty,
      toThrowError,
      not
    }
  }

  function it(message, callback) {
    // console.log(cyan, `${message}`);
    console.log(message);
    try {
      callback();
      // console.log(green, 'Success');
      console.log('%cSuccess', 'color: green');
    } catch(e) {
      // console.log(red, `Failure - ${e.message}`)
      console.log(`%cFailure - ${e.message}`, 'color: red');
    }
  }

  function describe(message, callback) {
    // console.log(underline, `${message}`);
    console.log(`%c${message}`, 'font-style: italic');
    callback();
  }

  function constructorName(message, callback) {
    console.log("")
    console.log(`%c${message}`, 'color: #50a5ff');
    callback();
  }

  exports.expect = expect;
  exports.it = it;
  exports.describe = describe;
  exports.constructorName = constructorName;
})(this);
