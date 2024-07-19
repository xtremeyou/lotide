const middle = function (array) {
  if (array.length <= 2) {
    return [];
  }
  const mid = Math.floor(array.length / 2);

  return array.length % 2 === 0
    ? array.slice(mid - 1, mid + 1)
    : array.slice(mid, mid + 1);
};

module.exports = middle;
