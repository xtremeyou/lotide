const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const letterPositions = require("./letterPositions");
const flatten = require("./flatten");
const findKey = require("./findKey");
const takeUntil = require("./takeUntil");
const without = require("./without")
const findKeyByValue = require("./findKeyByValue")
const countOnly = require("./countOnly")
const countLetters = require("./countLetters") 
const assertArraysEqual = require("./assertArraysEqual")
const assertEqual = require("./assertEqual")
const assertObjectsEqual = require("./assertObjectsEqual")
const eqArrays = require("./eqArrays")
const eqObjects = require("./eqObjects")




module.exports = {
    //can also write these with just the name and no : ...
  head: head,
  tail: tail,
  middle: middle,
  letterPositions: letterPositions,
  flatten: flatten,
  findKey: findKey,
  takeUntil: takeUntil,
  without: without,
  findKeyByValue: findKeyByValue,
  countOnly: countOnly,
  countLetters: countLetters,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue

};
