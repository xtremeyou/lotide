// const eqArrays = require("../eqArrays");
// const assertArraysEqual = require("../assertArraysEqual");

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [1, 2, 4]);
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [1, 2, 4]);

const assert = require("chai").assert;
const assertArraysEqual = require("../assertArraysEqual");

describe("#assertArraysEqual", () => {
  it("returns [1, 2, 3] for [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3])[(1, 2, 3)]);

    it("assertArraysEqual", () => {
      assert.deepEqual(assertArraysEqual([1, 2, 3])[(1, 2, 3)]);
    });
  });
});
