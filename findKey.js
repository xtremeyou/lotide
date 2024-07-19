
//create a function that takes an object and value, it should then scan the object and return the first key which contains the given value
//if no key with the given value is found, it should return undefined
//first create a function called findKey, with two paramters, object and value
const findKey = function (objects, values) {
  //create empty array to be used for desired data when returned
  let results = {}
 //write for loop to iterate over values
  for (let ObjectGiven in objects) {
  //write a argument that scans an object and returns a key if found,
    if (objects.hasOwnProperty(ObjectGiven)) {
        if (objects[ObjectGiven] === values)
            return ObjectGiven
        
        }
    }
    return undefined;
 
  //write a argument that scans an object
  //write argument that returns the first key which contains the given value
  //write argument hat if no key is found that matches the given value, return undefined
  //return value to empty array
}

module.exports = findKey;