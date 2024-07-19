const assert = require("chai").assert;
const { assertArraysEqual } = require("../index");
const eqArrays = require("../eqArrays");

describe("#assertArraysEqual", () => {
  it("correctly compares [1, 2, 3] and [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
  });

  it("correctly compares [1, 2, 3] and [1, 2, 4]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 4]), false);
  });
});


