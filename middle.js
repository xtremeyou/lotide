const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqualArrays = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅  Assertion Passed:  ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${array1} !== ${array2}`);
  }
};

const middle = function (array) {
  let newArr = [];
  let emptyArr = [];
  let midArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array.length <= 2) {
      return emptyArr;
    }
    if (array.length % 2 === 1) {
      newArr = Math.floor(array.length / 2);
      midArr.push(array[newArr]);
    } else {
      newArr = array.length / 2 - 1;
      midArr.push(array[newArr]);
      midArr.push(array[newArr + 1]);
    }
  }
  return midArr;
};

modules.exports = middle;
