

const assert = require('chai').assert;
const { middle } = require("../index");


describe("#middle", () => {
    
    it("returns [] for [1, 2]", () => {
        assert.deepEqual(middle([1, 2]), []); 
      });

      it("returns '2' for ['1', '2', '3']", () => {
        assert.deepEqual(middle([1, 2, 3]), [2]);
      });
  });