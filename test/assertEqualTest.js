const assert = require("chai").assert;
const { assertEqual } = require("../index");

describe("#assertEqual", () => {
  it('returns true for "Lighthouse Labs", "Lighthouse Labs"', () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Lighthouse Labs"), true);
  });
  it('returns false for "Lighthouse Labs", "Bootcamp"', () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), false);
  });
});
