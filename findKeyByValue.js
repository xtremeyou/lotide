const findKeyByValue = function (object, callBack) {
  let results;

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      if (callBack(object[key])) {
        results = key;
        break;
      }
    }
  }
  return results;
};

module.exports = findKeyByValue;
