
//returns everything on array but first element
const tail = function(array) {
    return array.slice(1);
};
console.log(tail([0,1,2,3,4]));


module.exports = tail;