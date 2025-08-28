// ce que je peux faire en vanilla mais pas en Typescript

let numBis = 24; // num est initialisé à un nombre
console.log(typeof numBis); // Affiche "number"

numBis = "Koumo"; // Tu peux changer le type de num à une chaîne
console.log(typeof numBis); // Affiche "string"

//------------------------------------------ Tableau

let arrayBis = ["chien", "chat", "poisson"];
arrayBis[1] = 24; // Tu peux assigner un nombre à un index d'un tableau de strings
console.log(arrayBis); // Affiche ["chien", 24, "poisson"]

//------------------------------------------- objet
let playerBis = {
  id: 0,
  name: "zidane",
};

playerBis.nickname = "zizou"; // Tu peux ajouter des propriétés dynamiquement
playerBis.jersey = "zinedine"; // Tu peux aussi modifier la valeur d'une propriété

playerBis = 24; // Tu peux réassigner player à un nombre
console.log(playerBis); // Affiche 24

//------------------------ function

const satMyNameBis = (name) => {
  console.log(`bonjour ${name}`);
};

satMyNameBis();
