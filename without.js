

const without = function (source, itemsToRemove) {
  const result = [];

  for (const element of source) {
    if (!itemsToRemove.includes(element)) {
      result.push(element);
    }
  }
  return result;
};

module.exports = without;

assertEqualArrays(without([1, 2, 3], [1]), [2, 3]);
assertEqualArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
const words = ["hello ", "world ", "lighthouse"];
without(words, "Lighthouse");
assertEqualArrays(words, ["hello ", "world ", "lighthouse"]);
