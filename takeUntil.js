//two parameters 1, array to work with
//t2, the callback, which lodash calls predicate



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


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertEqualArrays(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertEqualArrays(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
