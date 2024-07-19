const eqObjects  = require("./eqObjects");

const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  const result = eqObjects(actual, expected);
  if (result) {
    console.log(
      `✅✅✅  Assertion Passed:  ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑 Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
    
  }
  return result;
};

module.exports = assertObjectsEqual;