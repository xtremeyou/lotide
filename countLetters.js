

const countLetters = function (string) {
  const newSentence = {};
  for (const letters of string) {
    if (letters !== " ") {
      if (newSentence[letters]) {
        newSentence[letters] += 1;
      } else {
        newSentence[letters] = 1;
      }
    }
  }

  return newSentence;
};

module.exports = countLetters;
