// je vais chercher ma function du fichier en question
const fusionArray = require("./fusionArray");

test("fusionnne 2 tableau", () => {
  let array1 = [1, 2];
  let array2 = [3, 4];

  expect(fusionArray(array1, array2)).toEqual([1, 2, 3, 4]);
});
