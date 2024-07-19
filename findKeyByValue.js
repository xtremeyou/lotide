
const findKeyByValue = function (objects, callBack) {
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

module.exports = findKeyByValue;