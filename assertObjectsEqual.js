const eqObjects = require("./eqObjects");

const assertObjectsEqual = function (actual, expected) {
  const result = eqObjects(actual, expected);
  if (result) {
    console.log(`✅✅✅  Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`);
  }
  return result;
};

module.exports = assertObjectsEqual;
