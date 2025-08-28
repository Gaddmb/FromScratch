//****************** Rappel des types de données *********************/
// Déclaration de différentes variables de types de données
let string = "chaine"; // Chaîne de caractères
let number = 25; // Nombre
let boolean = true; // Booléen
let maVariable; // Undefined (non défini)

//************************* Tableau **********************/
// Déclaration de tableaux
let villes = ["Bordeaux", "Toulouse", "Nantes"];
console.log(villes[1][3]); // Affiche le 4ème caractère de la première ville

let mixArray = [
  "Bordeaux",
  24,
  true,
  [1, 2],
  { nom: "Denis", prenom: "daniel" },
];
console.log(mixArray[4].prenom); // Affiche la propriété 'nom' de l'objet dans le tableau

//************************* Objet **********************/
// Déclaration d'un objet
let utilisateur = {
  pseudo: "Denis",
  age: 33,
  technos: ["JavaScript", "React", "NodeJs"],
  admin: false,
};
utilisateur.adresse = "22 rue du code"; // Ajout d'une nouvelle propriété à l'objet
console.log(utilisateur);

// Tableau d'objets
let utilisateurs = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["JavaScript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nikola",
    age: 42,
    technos: ["Php", "React", "NodeJs"],
    admin: true,
  },
];

console.log(utilisateurs[2].pseudo); // Affiche le pseudo du troisième utilisateur

//************************ Structure de contrôle **********************/
// Condition if
if (utilisateurs[0].age > utilisateurs[1].age) {
  console.log(
    utilisateurs[0].pseudo + " est plus âgé que " + utilisateurs[1].pseudo
  );
}

// Boucle while
let compteur = 0;
while (compteur < 10) {
  compteur++;
  console.log("La valeur de compteur est : " + compteur);
}

// Boucle do...while
let compteur2 = 0;
do {
  compteur2++;
  console.log(compteur2);
} while (compteur2 < 5);

// Boucle for...of
for (const utilisateur of utilisateurs) {
  document.body.innerHTML += `<li>${utilisateur.pseudo} - ${utilisateur.age} ans - ${utilisateur.technos}</li>`;
}

// Boucle for classique
for (let i = 0; i < utilisateurs.length; i++) {
  document.body.innerHTML += "<p>" + utilisateurs[i].technos + "</p>";
}

//************************* Événements ******************************/
// Gestionnaire d'événements pour les clics sur le document
document.body.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "violet";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      document.body.style.background = "white";
  }
});

//********************** Méthodes String *********************************/
// Différentes méthodes pour manipuler les chaînes de caractères
let string2 = "javaScript est un langage orienté objet";
console.log(typeof "42"); // Retourne le type de la valeur, ici 'string'.
console.log(eval(parseInt("1") + 2)); // Convertit "1" en nombre, additionne 2, puis évalue l'expression (résultat: 3).
console.log(isNaN("48")); // Vérifie si "48" n'est pas un nombre, ici false car c'est un nombre.
console.log(string2.length); // Retourne la longueur de la chaîne string2.
console.log(string2.indexOf("langage")); // Retourne l'index du mot "langage" dans string2.
console.log(string2.indexOf("x")); // Retourne -1 car "x" n'existe pas dans string2.
let newString = string2.slice(5, 17); // Extrait une portion de string2 (de l'index 5 à 17).
console.log(newString); // Affiche la sous-chaîne extraite.
console.log(string2.split("i")); // Sépare string2 en un tableau en utilisant "i" comme délimiteur.
console.log(string2.toUpperCase()); // Convertit string2 en majuscules.
console.log(string2.replace("javaScript", "PHP")); // Remplace "javaScript" par "PHP" dans string2.

//************************** Méthodes Number *****************************/
// Différentes méthodes pour manipuler les nombres
let number2 = 42.1234;
let numberString = "42.12 est un nombre";

console.log(number2.toFixed(1)); // Arrondit number2 à une décimale (résultat : 42.1).
console.log(parseInt("43")); // Convertit la chaîne "43" en entier (résultat : 43).
console.log(parseInt(numberString)); // Extrait et convertit "42" en entier depuis numberString.
console.log(parseFloat(numberString)); // Extrait et convertit "42.12" en nombre flottant depuis numberString.
console.log(Math.PI); // Affiche la valeur de PI (environ 3.14159).
console.log(Math.round(4.5)); // Arrondit 4.5 au nombre entier le plus proche (résultat : 5).
console.log(Math.floor(4.9)); // Arrondit toujours vers le bas (résultat : 4).
console.log(Math.ceil(4.1)); // Arrondit toujours vers le haut (résultat : 5).
console.log(Math.pow(2, 7)); // Calcule 2 à la puissance 7 (résultat : 128).
console.log(Math.sqrt(16)); // Calcule la racine carrée de 16 (résultat : 4).
console.log(Math.floor(Math.random() * 50)); // Génère un nombre aléatoire entre 0 et 49.

//****************************** Méthodes Arrays ****************************/
// Différentes méthodes pour manipuler les tableaux
let array3 = ["Javascript", "PHP", "Python"];
let array4 = ["Ruby", "Solidity"];

let newArray = [...array3, ...array4]; // Fusionne array3 et array4 en un seul tableau
console.log(newArray); // Affiche le nouveau tableau combiné

console.log(array3.join(" ")); // Joint les éléments de array3 en une chaîne avec des espaces
console.log(newArray.slice(2, 5)); // Extrait les éléments de l'index 2 à 4 de newArray
console.log(array3.indexOf("Python")); // Renvoie l'index de "Python" dans array3 (résultat : 2)
array3.forEach((langage) => console.log(langage)); // Affiche chaque élément de array3 avec une boucle
console.log(array3.some((langage) => langage === "PHP")); // Vérifie si "PHP" est présent dans array3 (résultat : true)

const restArray = array3.splice(2, 1, ...array4); // Modifie array3 en insérant array4 à l'index 2
console.log(array3); // Affiche le tableau array3 modifié après le splice

let arrayNumber = [4, 74, 28, 12, 1];
console.log(arrayNumber.reduce((x, y) => x + y)); // Additionne tous les éléments du tableau (résultat : 119)
arrayNumber.push(17); // Ajoute 17 à la fin du tableau
console.log(arrayNumber); // Affiche le tableau après l'ajout

console.log(arrayNumber.filter((num) => num > 10)); // Filtre les éléments supérieurs à 10
console.log(arrayNumber.sort((a, b) => a - b)); // Trie les éléments du tableau par ordre croissant

document.body.innerHTML += arrayNumber
  .map((num) => `<li>${num}</li>`)
  .join(" "); // Crée une liste HTML avec les éléments du tableau

// Ajout d'un nouvel utilisateur et affichage des utilisateurs non admin
utilisateurs.push(
  {
    pseudo: "Koumo",
    age: 27,
    technos: ["Php", "React", "NodeJs"],
    admin: false,
  },
  { pseudo: "Baba", age: 35, technos: ["Php", "Java", "nextJS"], admin: false }
);

let htmlContent = utilisateurs
  .filter((user) => !user.admin) // Filtre les utilisateurs non admin
  .sort((a, b) => b.age - a.age) // Trie par âge décroissant
  .map(
    (user) =>
      `<div class="user-card">
      <h2>${user.pseudo}</h2>
      <p>Age: ${user.age} ans</p>
      <p>Status: ${user.admin ? "Modérateur" : "Membre"}</p>
      </div>`
  )
  .join("");

document.body.innerHTML += htmlContent;

//***************************** Les Dates *******************************/
// Manipulation des dates
let date = new Date();
console.log(date); // Affiche la date et l'heure actuelles

let timestamp = Date.parse(date);
console.log(timestamp); // Affiche le timestamp de la date

let iso = date.toISOString();
console.log(iso); // Affiche la date en format ISO

console.log(date.toDateString()); // Affiche la date en format court

function dateParser(date) {
  let newDate = new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
  return newDate; // Renvoie la date formatée en français
}

console.log(dateParser(date)); // Affiche la date actuelle formatée en français
console.log(dateParser(timestamp)); // Affiche le timestamp formaté en français
console.log(dateParser(iso)); // Affiche la date ISO formatée en français

//*************************** Le destructuring ****************************/
// Déstructuration d'objets et de tableaux
let moreData = {
  destVar: ["Element 1", "Element 2 "],
};

const { destVar } = moreData;
console.log(moreData.destVar); // Affiche le tableau complet
console.log(destVar); // Affiche le tableau extrait via la déstructuration

let array5 = [70, 80, 90];
let [x, y, z] = array5;
console.log(x); // Affiche 70
console.log(y); // Affiche 80
console.log(z); // Affiche 90

const dateDestructuring = (date) => {
  let newDate = date.split("T")[0]; // Extrait la partie date de la chaîne ISO
  let [y, m, d] = newDate.split("-"); // Déstructure la date en année, mois, jour
  return [d, m, y]; // Renvoie la date sous le format "DD-MM-YYYY"
};

console.log(dateDestructuring(iso)); // Affiche la date au format "DD-MM-YYYY"

//****************************** Les datasets *****************************/
// Utilisation des datasets pour stocker des informations personnalisées
const h3js = document.getElementById("javascript");
console.log(h3js.dataset.lang); // Affiche la valeur du dataset 'lang' de l'élément avec l'id 'javascript'

const h3 = document.querySelectorAll("h3");
h3.forEach((language) => console.log(language.dataset.lang)); // Affiche la valeur du dataset 'lang' de chaque élément <h3>

//****************************** Les Regex ********************************/
// Utilisation des expressions régulières pour manipuler les chaînes de caractères
let mail = "from_s$cratch33@gmail.com";

console.log(mail.search(/frscceeceom/)); // Recherche la position de la chaîne "frscceeceom" dans `mail` (ne trouve pas, retourne -1)
console.log(mail.replace(/from/, "de")); // Remplace "from" par "de" dans `mail`
console.log(mail.match(/SCratch/i)); // Recherche "SCratch" dans `mail` (ignorer la casse)
console.log(mail.match(/[zug]/)); // Recherche la première occurrence de "z", "u", ou "g" dans `mail`
console.log(mail.match(/[12]/)); // Recherche la première occurrence de "1" ou "2" dans `mail`
console.log(mail.match(/\d/)); // Recherche tous les chiffres dans `mail`
console.log(mail.match(/[a-z]/)); // Recherche toutes les lettres minuscules dans `mail`
console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)); // Vérifie si `mail` correspond au format d'une adresse e-mail

let separator = 265264849;
console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")); // Formatage du nombre `separator` avec des espaces comme séparateurs de milliers

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const pseudoRegex = /^[a-zA-Z0-9_.-]*$/;
const emailRegex = /^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i;
