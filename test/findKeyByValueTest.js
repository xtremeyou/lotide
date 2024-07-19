const assert = require("chai").assert;
const { findKeyByValue } = require("../index");
const expect = require("chai").expect;

describe("findKeyByValue", () => {
  const testObject = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire",
  };

  it("returns the key when the value is found", () => {
    const result = findKeyByValue(testObject, (value) => value === "The Wire");
    assert.strictEqual(result, "drama");
  });

  it("returns undefined when the value is not found", () => {
    const result = findKeyByValue(
      testObject,
      (value) => value === "That '70s Show"
    );
    assert.strictEqual(result, undefined);
  });
});
