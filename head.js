const assertEqual = require("./assertEqual");
//returns first item in array
const head = function(array) {
    if (array.length === 0) {
        return undefined;
    } 
    return array[0];

};
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 1);
assertEqual(head([]), undefined);
module.exports = head;