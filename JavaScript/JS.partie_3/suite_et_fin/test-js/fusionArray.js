//c'est une fonction qui va permetre de fusionner 2 tableau
const fusionArray = (array1, array2) => {
  return [...array1, ...array2];
};

//  coverage me dit que attention ce code n'est pas testé
const cloneArray = (array1) => {
  return array1;
};
// je vais exporter la function
module.exports = fusionArray;
