const assert = require("chai").assert;
const { flatten } = require("../index");

describe("#flatten", () => {
  it("returns [1, 2, 1, 2, 3, 2, 3] for [1, 2, [1, 2, 3], 2,  3]", () => {
    assert.deepEqual(flatten([1, 2, [1, 2, 3], 2, 3]), [1, 2, 1, 2, 3, 2, 3]);
  });

  it("returns [1,5,7,8,4] for [1,[5,7,8],4]", () => {
    assert.deepEqual(flatten([1, [5, 7, 8], 4]), [1, 5, 7, 8, 4]);
  });
});
