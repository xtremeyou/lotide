const eqArrays = require("./eqArrays")
const assertArraysEqual = require("./assertArraysEqual")

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

module.exports = middle;
