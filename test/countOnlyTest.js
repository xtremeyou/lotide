const assert = require("chai").assert;
const { countOnly } = require("../index");

describe("#countOnly", () => {
  it("returns 1 for 'Jason'", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe",
    ];
    const result1 = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    });
    assert.deepEqual(result1, { Jason: 1, Fang: 2 });
  });
});