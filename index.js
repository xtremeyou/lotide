const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const letterPositions = require("./letterPositions");
const flatten = require("./flatten");
const findKeys = require("./findKeys");
const map = require("./map");
const takeUntil = require("./takeUntil");
const without = require("./without")
const findBetterKey = require("./findBetterKey")
const countOnly = require("./countOnly")
const countLetters = require("./countLetters") 


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
  countLetters: countLetters
};
