const eqArrays = function (array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  };

  const assertEqualArrays = function(array1, array2) {
    if (eqArrays(array1, array2)) {
        console.log(`✅✅✅  Assertion Passed:  ${array1} === ${array2}`);
    } else {
        console.log(`🛑🛑🛑 Assertion failed: ${array1} === ${array2}`);
    }
  };const mug = {
    color: "white"
}
  console.log(eqArrays([1, 2, 3], [1, 2, 3]));
  console.log(eqArrays([1, 2, 3], [1 ,2, 4]));
  assertEqualArrays([1, 2, 3], [1, 2, 3]);
  assertEqualArrays([1, 2, 3], [1, 2, 4]);
  console.log(`"Hello mate what is the mugs color? It is: ${mug.color}`)
