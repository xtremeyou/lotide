// const eqArrays = function (array1, array2) {
//     if (array1.length !== array2.length) {
//       return false;
//     }
//     for (let i = 0; i < array1.length; i++) {
//       if (array1[i] !== array2[i]) {
//         return false;
//       }
//     }
//     return true;
//   };

//   const assertEqualArrays = function(array1, array2) {
//     if (eqArrays(array1, array2)) {
//         console.log(`✅✅✅  Assertion Passed:  ${array1} === ${array2}`);
//     } else {
//         console.log(`🛑🛑🛑 Assertion failed: ${array1} !== ${array2}`);
//     }
//   };

// const words = ["rgound", "control", "to", "major", "tom"];

// const map = function (array, callback) {
//   const results = [];
//   for (let item of array) {
//     results.push(callback(item));
//   }
//   return results;
// };

// const results1 = map(words, (word) => word[0]);
// assertEqualArrays(results1, ['r', 'c', 't', 'm', 't']);
