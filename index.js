const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const letterPositions = require("./letterPositions");
const flatten = require("./flatten");
const findKeys = require("./findKey");
const takeUntil = require("./takeUntil");
const without = require("./without")
const findBetterKey = require("./findKeyByValue")
const countOnly = require("./countOnly")
const countLetters = require("./countLetters") 
const assertArraysEqual = require("./assertArraysEqual")
const assertEqual = require("./assertEqual")
const assertObjectsEqual = require("./assertObjectsEqual")
const eqArrays = require("./eqArrays")
const eqObjects = require("./eqObjects")
const findKey = require("./findKey")
const findKeyByValue = require("./findKeyByValue")



module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  letterPositions: letterPositions,
  flatten: flatten,
  findKeys: findKeys,
  map: map,
  takeUntil: takeUntil,
  without: without,
  findBetterKey: findBetterKey,
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
