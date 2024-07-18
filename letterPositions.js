
//need to create a function that will return the number of times a certain character is found by returning their indice location to the results object array
//make a function named letterPositions
const letterPositions = function (charLocation) {
  const results = {};

  for (let i = 0; i < charLocation.length; i++) {
    if (charLocation[i] in results) {
      results[charLocation[i]].push(i) 
      } else {
        results[charLocation[i]] = [i]

      }

    }
  return results; 
};

module.exports = letterPositions;