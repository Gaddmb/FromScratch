// en faisant un export je peux appeller cette function partout dasn mon projet test-js
// export const addNumber = (a, b) => {
//   return a + b;
// };

// je l'exporte comme un module
const addNumber = (a, b) => {
  return a + b;
};
// donc export le module suivant je veux que tu export addNumber
// pour que cela fonctionne je vais crée un new Fichier
module.exports = addNumber;

// jest et le plus populaire pour faire des test JS
// npm i --save-dev jest
// il m'installe dans mon fichier package.json in dependance ( npm c'est un gestionnaire de package exemple : je lui donne un ordre va me chercher x donc la bibliotheque en question )
// coverage exécutera vos tests tout en collectant les données de couverture en gros il fera un petit rapport .
