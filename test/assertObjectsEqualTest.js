const assert = require("chai").assert;
const assertObjectsEqual = require("../assertObjectsEqual");

describe("#assertObjectsEqual", () => {
  it("returns true for {a: 1, b: 2} and {a: 1, b: 2}", () => {
    assert.strictEqual(
      assertObjectsEqual({ a: 1, b: 2 }, { a: 1, b: 2 }),
      true
    );
  });
  it("returns false for {a: 1, b: 2} and {a: 1, b: 3}", () => {
    assert.strictEqual(
      assertObjectsEqual({ a: 1, b: 2 }, { a: 1, b: 3 }),
      false
    );
  });
});
