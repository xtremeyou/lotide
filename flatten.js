const flatten = function (array) {
  //create palceholder for array
  let singleArray = [];
  //need to loop through array parameter
  if (Array.isArray(array)) {
    array.forEach((item) => {
      if (Array.isArray(item)) {
        singleArray = singleArray.concat(flatten(item));
      } else {
        singleArray.push(item);
      }
    });
  } else {
    return [array];
  }
  return singleArray;
};

module.exports = flatten;
