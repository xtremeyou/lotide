

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1.length, array2.length)) {
    console.log(`✅✅✅  Assertion Passed:  ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;