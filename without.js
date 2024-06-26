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

const without = function (source, itemsToRemove) {
  const result = [];

  for (const element of source) {
    if (!itemsToRemove.includes(element)) {
      result.push(element);
    }
  }
  return result;
};

assertEqualArrays(without([1, 2, 3], [1]), [2, 3]);
assertEqualArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
const words = ["hello ", "world ", "lighthouse"];
without(words, "Lighthouse");
assertEqualArrays(words, ["hello ", "world ", "lighthouse"]);
