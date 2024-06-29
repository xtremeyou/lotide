//two parameters 1, array to work with
//t2, the callback, which lodash calls predicate
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

  const assertEqualArrays = function(array1, array2) {
    if (eqArrays(array1, array2)) {
        console.log(`✅✅✅  Assertion Passed:  ${array1} === ${array2}`);
    } else {
        console.log(`🛑🛑🛑 Assertion failed: ${array1} === ${array2}`);
    }
  };


const takeUntil = function(array, callback) {
    // write a for loop to loop through array
    let resultIndex = array.length;
    for (let i = 0; i < array.length; i++) {
   // need to create a argument that will slice off parts of the array that is 
        if (callback(array[i])) {
            resultIndex = i;
            break;
        }
    }
    const results = array.slice(0, resultIndex);
    return results;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertEqualArrays(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertEqualArrays(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
