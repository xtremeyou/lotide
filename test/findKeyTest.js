const assert = require("chai").assert;
const { findKey } = require("../index");

describe("#findKey", () => {
  it("returns [noma] in object", () => {
    assert.deepEqual(
      findKey(
        {
          "Blue Hill": 1,
          Akaleri: 3,
          noma: 2,
          elBulli: 3,
          Ora: 2,
          Akelarre: 3,
        },
        "noma"
      )
    );
  });

  it("returns 'Ora' in object", () => {
    assert.deepEqual(
      findKey(
        {
          "Blue Hill": 1,
          Akaleri: 3,
          noma: 2,
          elBulli: 3,
          Ora: 2,
          Akelarre: 3,
        },
        "ora"
      )
    );
  });
});
