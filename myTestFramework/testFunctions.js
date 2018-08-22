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

    // function toThrowError(message) {
    //   try {
    //     actual();
    //     throw new Error(`Expected ${actual} to throw Error(${message}) but nothing was thrown`)
    //   } catch(e) {
    //     if(e.message !== message) {
    //       throw new Error(`Expected Error.message to be ${message} but got ${e.message}`)
    //     }
    //   }
    // }

    return {
      toEqual,
      toBe,
      toInclude,
      toBeEmpty,
      // toThrowError,
    }
  }

  function it(message, callback) {
    // console.log(cyan, `${message}`);
    console.log(`%c${message}`, 'color: #50a5ff');
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
    console.log(`%c${message}`, 'color: magenta');
    callback();
  }

  exports.expect = expect;
  exports.it = it;
  exports.describe = describe;
  exports.constructorName = constructorName;
})(this);
