const assert = require("chai").assert;
const { assertArraysEqual } = require("../index");

describe("#assertArraysEqual", () => {
  it("returns [1, 2, 3] for [1, 2, 4]", () => {
    assert.deepEqual(assertArraysEqual([1, 2, 4]), [(1, 2, 3)]);
  });

  it("returns [1, 2, 3] for [1, 2, 5]", () => {
    assert.deepEqual(assertArraysEqual([1, 2, 5]), [(1, 2, 3)]);
  });
});
