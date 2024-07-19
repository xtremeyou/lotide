//two parameters 1, array to work with
//t2, the callback, which lodash calls predicate

const { assertArraysEqual } = require(".");



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

module.exports = takeUntil;

