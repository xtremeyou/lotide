const assertEqual = function (actual, expected) {
    if (actual === expected) {
        console.log(`✅✅✅  Assertion Passed:  ${actual} === ${expected}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
    }
};

const findKeys = function (objects, callBack) {
    let results;
    
    for (let key in objects) {
        if (objects.hasOwnProperty(key)) {
            if (callBack(objects[key])) {
                results = key;
                break;
            }
        }
    }
    return results;
};

assertEqual(findKeys(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 2
  ), "noma"); 