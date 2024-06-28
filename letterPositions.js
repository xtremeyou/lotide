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

const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅  Assertion Passed:  ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${array1} !== ${array2}`);
  }
};


//need to create a function that will return the number of times a certain character is found by returning their indice location to the results object array
//make a function named letterPositions
const letterPositions = function (charLocation) {
  const results = {};

  for (let i = 0; i < charLocation.length; i++) {
    if (charLocation[i] in results) {
      results[charLocation[i]].push(i) 
      } else {
        results[charLocation[i]] = [i]

      }

    }
  return results; 
};

assertArraysEqual(letterPositions("hello").h, [0])
assertArraysEqual(letterPositions("hello").e, [1])
assertArraysEqual(letterPositions("hello").l, [2,3])
assertArraysEqual(letterPositions("hello").o, [4])

// this is what the function should return to the results variable {}
//{
//h: [0],
//e: [1],
//l: [2, 3],
//o: [4]
//}