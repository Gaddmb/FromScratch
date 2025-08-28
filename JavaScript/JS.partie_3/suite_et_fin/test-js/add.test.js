// je vais chercher ma function
const addNumber = require("./add.js");

// comment ca fonctionne
// je décris ce que fais ma function
test("additionne 2 chiffre ", () => {
  // qu'est-ce qu'on attend que ma function fasse
  // on attend qu'il soit (au debut faut que toujours son test soit faux )
  expect(addNumber(1, 2)).toBe(3);
});

// le test va permettre de controler le code lorsque quelqu'un va faire evoluer son code
