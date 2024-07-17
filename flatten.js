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
    console.log(`🛑🛑🛑 Assertion failed: ${array1} === ${array2}`);
  }
};

const flatten = function (array) {
  //create palceholder for array
  let singleArray = [];
  //need to loop through array parameter
  if (Array.isArray(array)) {
    array.forEach((item) => {
      if (Array.isArray(item)) {
        singleArray = singleArray.concat(flatten(item));
      } else {
        singleArray.push(item)
      }
    });
  } else {
    return [array];
  }
  return singleArray;
};

  assertEqualArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
