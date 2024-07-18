

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

const result = countLetters("Lighthouse in the house");
assertEqual(result["L"], 1);
assertEqual(result["i"], 2);
assertEqual(result["g"], 1);
assertEqual(result["h"], 4);
assertEqual(result["t"], 2);
assertEqual(result["o"], 2);
assertEqual(result["u"], 2);
assertEqual(result["s"], 2);
assertEqual(result["e"], 3);
assertEqual(result["n"], 1);